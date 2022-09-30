# @hexlabs/aws-sdk
A more standardised aws-sdk written in TypeScript. 
Generated from the original sdk, this library wraps aws-sdk transforming each request so that pagination is standardised.

All Responses have the same format, The array of results is extracted for you and placed into member: 
```typescript
type Response<T> = { member: T[]; totalItems: T['length']; next?: string };
```

#Install
```
npm install -S @hexlabs/aws-sdk
```

## Before

```typescript
import { Lambda } from 'aws-sdk';
const {Functions, NextMarker} = await new Lambda({ region: 'eu-west-1' })
  .listFunctions({MaxItems: 1, Marker: '<nextToken goes here>'}).promise();
```

## After

```typescript
import { Lambda } from '@hexlabs/aws-sdk';
const {member, totalItems, next} = await Lambda.client({ region: 'eu-west-1' })
  .listFunctions({limit: 1, next: '<nextToken goes here>'});
```

# The Problem
Each service call in aws-sdk responds with an object that is unique to that call.

For example: this is what `Lambda.listFunctions` returns in the original sdk

```typescript
{
  NextMarker?: string;
  Functions?: FunctionList;
}
```

Here is what  `DynamoDB.listTables` returns in the original sdk

```typescript
{
  TableNames?: TableNameList;
  LastEvaluatedTableName?: TableName;
}
```

This library transforms these to the following:
```typescript
//Dynamo.listTables return type
{
  member: TableNameList,
  next?: string
}
//Lambda.listFunctions return type
{
  member: FunctionList,
  next?: string
}
```

Any call that can be limited or paged will contain the keys limit and next for the user to supply those tokens instead of `Marker` or `MaxItems` or `NextToken` or whatever.


A subtle difference, but better, enjoy :)