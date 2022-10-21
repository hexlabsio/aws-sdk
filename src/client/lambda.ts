import { Request, Lambda as AWSLambda } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLambda> = AWSLambda[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLambda> = AWSLambda[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLambda[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLambda, Extras> = AWSLambda[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLambda> = AWSLambda[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Lambda {
  private constructor(private readonly client: AWSLambda) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lambda' as const;
  public readonly global = false as const;
  public readonly category = 'Compute' as const;
  public readonly topLevelCalls = ["listCodeSigningConfigs","listEventSourceMappings","listFunctions","listLayers"] as const;
  
  addLayerVersionPermission: (params: RawParamsFrom<'addLayerVersionPermission'>) => Promise<ReturnTypeFrom<'addLayerVersionPermission'>>  = async params => {
  // undefined
    return this.client.addLayerVersionPermission(params as any).promise();
  }

  addPermission: (params: RawParamsFrom<'addPermission'>) => Promise<ReturnTypeFrom<'addPermission'>>  = async params => {
  // undefined
    return this.client.addPermission(params as any).promise();
  }

  createAlias: (params: RawParamsFrom<'createAlias'>) => Promise<ReturnTypeFrom<'createAlias'>>  = async params => {
  // undefined
    return this.client.createAlias(params as any).promise();
  }

  createCodeSigningConfig: (params: RawParamsFrom<'createCodeSigningConfig'>) => Promise<ReturnTypeFrom<'createCodeSigningConfig'>>  = async params => {
  // undefined
    return this.client.createCodeSigningConfig(params as any).promise();
  }

  createEventSourceMapping: (params: RawParamsFrom<'createEventSourceMapping'>) => Promise<ReturnTypeFrom<'createEventSourceMapping'>>  = async params => {
  // undefined
    return this.client.createEventSourceMapping(params as any).promise();
  }

  createFunction: (params: RawParamsFrom<'createFunction'>) => Promise<ReturnTypeFrom<'createFunction'>>  = async params => {
  // undefined
    return this.client.createFunction(params as any).promise();
  }

  createFunctionUrlConfig: (params: RawParamsFrom<'createFunctionUrlConfig'>) => Promise<ReturnTypeFrom<'createFunctionUrlConfig'>>  = async params => {
  // undefined
    return this.client.createFunctionUrlConfig(params as any).promise();
  }

  deleteAlias: (params: RawParamsFrom<'deleteAlias'>) => Promise<ReturnTypeFrom<'deleteAlias'>>  = async params => {
  // undefined
    return this.client.deleteAlias(params as any).promise();
  }

  deleteCodeSigningConfig: (params: RawParamsFrom<'deleteCodeSigningConfig'>) => Promise<ReturnTypeFrom<'deleteCodeSigningConfig'>>  = async params => {
  // undefined
    return this.client.deleteCodeSigningConfig(params as any).promise();
  }

  deleteEventSourceMapping: (params: RawParamsFrom<'deleteEventSourceMapping'>) => Promise<ReturnTypeFrom<'deleteEventSourceMapping'>>  = async params => {
  // undefined
    return this.client.deleteEventSourceMapping(params as any).promise();
  }

  deleteFunction: (params: RawParamsFrom<'deleteFunction'>) => Promise<ReturnTypeFrom<'deleteFunction'>>  = async params => {
  // undefined
    return this.client.deleteFunction(params as any).promise();
  }

  deleteFunctionCodeSigningConfig: (params: RawParamsFrom<'deleteFunctionCodeSigningConfig'>) => Promise<ReturnTypeFrom<'deleteFunctionCodeSigningConfig'>>  = async params => {
  // undefined
    return this.client.deleteFunctionCodeSigningConfig(params as any).promise();
  }

  deleteFunctionConcurrency: (params: RawParamsFrom<'deleteFunctionConcurrency'>) => Promise<ReturnTypeFrom<'deleteFunctionConcurrency'>>  = async params => {
  // undefined
    return this.client.deleteFunctionConcurrency(params as any).promise();
  }

  deleteFunctionEventInvokeConfig: (params: RawParamsFrom<'deleteFunctionEventInvokeConfig'>) => Promise<ReturnTypeFrom<'deleteFunctionEventInvokeConfig'>>  = async params => {
  // undefined
    return this.client.deleteFunctionEventInvokeConfig(params as any).promise();
  }

  deleteFunctionUrlConfig: (params: RawParamsFrom<'deleteFunctionUrlConfig'>) => Promise<ReturnTypeFrom<'deleteFunctionUrlConfig'>>  = async params => {
  // undefined
    return this.client.deleteFunctionUrlConfig(params as any).promise();
  }

  deleteLayerVersion: (params: RawParamsFrom<'deleteLayerVersion'>) => Promise<ReturnTypeFrom<'deleteLayerVersion'>>  = async params => {
  // undefined
    return this.client.deleteLayerVersion(params as any).promise();
  }

  deleteProvisionedConcurrencyConfig: (params: RawParamsFrom<'deleteProvisionedConcurrencyConfig'>) => Promise<ReturnTypeFrom<'deleteProvisionedConcurrencyConfig'>>  = async params => {
  // undefined
    return this.client.deleteProvisionedConcurrencyConfig(params as any).promise();
  }

  getAccountSettings: (params: RawParamsFrom<'getAccountSettings'>) => Promise<ReturnTypeFrom<'getAccountSettings'>>  = async params => {
  // undefined
    return this.client.getAccountSettings(params as any).promise();
  }

  getAlias: (params: RawParamsFrom<'getAlias'>) => Promise<ReturnTypeFrom<'getAlias'>>  = async params => {
  // undefined
    return this.client.getAlias(params as any).promise();
  }

  getCodeSigningConfig: (params: RawParamsFrom<'getCodeSigningConfig'>) => Promise<ReturnTypeFrom<'getCodeSigningConfig'>>  = async params => {
  // undefined
    return this.client.getCodeSigningConfig(params as any).promise();
  }

  getEventSourceMapping: (params: RawParamsFrom<'getEventSourceMapping'>) => Promise<ReturnTypeFrom<'getEventSourceMapping'>>  = async params => {
  // undefined
    return this.client.getEventSourceMapping(params as any).promise();
  }

  getFunction: (params: RawParamsFrom<'getFunction'>) => Promise<ReturnTypeFrom<'getFunction'>>  = async params => {
  // undefined
    return this.client.getFunction(params as any).promise();
  }

  getFunctionCodeSigningConfig: (params: RawParamsFrom<'getFunctionCodeSigningConfig'>) => Promise<ReturnTypeFrom<'getFunctionCodeSigningConfig'>>  = async params => {
  // undefined
    return this.client.getFunctionCodeSigningConfig(params as any).promise();
  }

  getFunctionConcurrency: (params: RawParamsFrom<'getFunctionConcurrency'>) => Promise<ReturnTypeFrom<'getFunctionConcurrency'>>  = async params => {
  // undefined
    return this.client.getFunctionConcurrency(params as any).promise();
  }

  getFunctionConfiguration: (params: RawParamsFrom<'getFunctionConfiguration'>) => Promise<ReturnTypeFrom<'getFunctionConfiguration'>>  = async params => {
  // undefined
    return this.client.getFunctionConfiguration(params as any).promise();
  }

  getFunctionEventInvokeConfig: (params: RawParamsFrom<'getFunctionEventInvokeConfig'>) => Promise<ReturnTypeFrom<'getFunctionEventInvokeConfig'>>  = async params => {
  // undefined
    return this.client.getFunctionEventInvokeConfig(params as any).promise();
  }

  getFunctionUrlConfig: (params: RawParamsFrom<'getFunctionUrlConfig'>) => Promise<ReturnTypeFrom<'getFunctionUrlConfig'>>  = async params => {
  // undefined
    return this.client.getFunctionUrlConfig(params as any).promise();
  }

  getLayerVersion: (params: RawParamsFrom<'getLayerVersion'>) => Promise<ReturnTypeFrom<'getLayerVersion'>>  = async params => {
  // undefined
    return this.client.getLayerVersion(params as any).promise();
  }

  getLayerVersionByArn: (params: RawParamsFrom<'getLayerVersionByArn'>) => Promise<ReturnTypeFrom<'getLayerVersionByArn'>>  = async params => {
  // undefined
    return this.client.getLayerVersionByArn(params as any).promise();
  }

  getLayerVersionPolicy: (params: RawParamsFrom<'getLayerVersionPolicy'>) => Promise<ReturnTypeFrom<'getLayerVersionPolicy'>>  = async params => {
  // undefined
    return this.client.getLayerVersionPolicy(params as any).promise();
  }

  getPolicy: (params: RawParamsFrom<'getPolicy'>) => Promise<ReturnTypeFrom<'getPolicy'>>  = async params => {
  // undefined
    return this.client.getPolicy(params as any).promise();
  }

  getProvisionedConcurrencyConfig: (params: RawParamsFrom<'getProvisionedConcurrencyConfig'>) => Promise<ReturnTypeFrom<'getProvisionedConcurrencyConfig'>>  = async params => {
  // undefined
    return this.client.getProvisionedConcurrencyConfig(params as any).promise();
  }

  invoke: (params: RawParamsFrom<'invoke'>) => Promise<ReturnTypeFrom<'invoke'>>  = async params => {
  // undefined
    return this.client.invoke(params as any).promise();
  }

  invokeAsync: (params: RawParamsFrom<'invokeAsync'>) => Promise<ReturnTypeFrom<'invokeAsync'>>  = async params => {
  // undefined
    return this.client.invokeAsync(params as any).promise();
  }

  async listAliases(params: { [K in keyof ParamsFrom<'listAliases', { next?: string, limit?: number }>]: ParamsFrom<'listAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAliases'>]-?: ReturnTypeFrom<'listAliases'>[K]}['Aliases'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"Aliases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAliases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listAliases' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Aliases ?? []) ? (result.Aliases ?? []) : [result.Aliases]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCodeSigningConfigs(params: { [K in keyof ParamsFrom<'listCodeSigningConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listCodeSigningConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCodeSigningConfigs'>]-?: ReturnTypeFrom<'listCodeSigningConfigs'>[K]}['CodeSigningConfigs'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"CodeSigningConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listCodeSigningConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listCodeSigningConfigs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CodeSigningConfigs ?? []) ? (result.CodeSigningConfigs ?? []) : [result.CodeSigningConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEventSourceMappings(params: { [K in keyof ParamsFrom<'listEventSourceMappings', { next?: string, limit?: number }>]: ParamsFrom<'listEventSourceMappings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEventSourceMappings'>]-?: ReturnTypeFrom<'listEventSourceMappings'>[K]}['EventSourceMappings'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"EventSourceMappings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listEventSourceMappings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listEventSourceMappings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EventSourceMappings ?? []) ? (result.EventSourceMappings ?? []) : [result.EventSourceMappings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFunctionEventInvokeConfigs(params: { [K in keyof ParamsFrom<'listFunctionEventInvokeConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listFunctionEventInvokeConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFunctionEventInvokeConfigs'>]-?: ReturnTypeFrom<'listFunctionEventInvokeConfigs'>[K]}['FunctionEventInvokeConfigs'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"FunctionEventInvokeConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listFunctionEventInvokeConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listFunctionEventInvokeConfigs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FunctionEventInvokeConfigs ?? []) ? (result.FunctionEventInvokeConfigs ?? []) : [result.FunctionEventInvokeConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFunctionUrlConfigs(params: { [K in keyof ParamsFrom<'listFunctionUrlConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listFunctionUrlConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFunctionUrlConfigs'>]-?: ReturnTypeFrom<'listFunctionUrlConfigs'>[K]}['FunctionUrlConfigs'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"FunctionUrlConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listFunctionUrlConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listFunctionUrlConfigs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FunctionUrlConfigs ?? []) ? (result.FunctionUrlConfigs ?? []) : [result.FunctionUrlConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFunctions(params: { [K in keyof ParamsFrom<'listFunctions', { next?: string, limit?: number }>]: ParamsFrom<'listFunctions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFunctions'>]-?: ReturnTypeFrom<'listFunctions'>[K]}['Functions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"Functions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listFunctions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listFunctions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Functions ?? []) ? (result.Functions ?? []) : [result.Functions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFunctionsByCodeSigningConfig(params: { [K in keyof ParamsFrom<'listFunctionsByCodeSigningConfig', { next?: string, limit?: number }>]: ParamsFrom<'listFunctionsByCodeSigningConfig', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFunctionsByCodeSigningConfig'>]-?: ReturnTypeFrom<'listFunctionsByCodeSigningConfig'>[K]}['FunctionArns'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"FunctionArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listFunctionsByCodeSigningConfig({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listFunctionsByCodeSigningConfig' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FunctionArns ?? []) ? (result.FunctionArns ?? []) : [result.FunctionArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLayerVersions(params: { [K in keyof ParamsFrom<'listLayerVersions', { next?: string, limit?: number }>]: ParamsFrom<'listLayerVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLayerVersions'>]-?: ReturnTypeFrom<'listLayerVersions'>[K]}['LayerVersions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"LayerVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listLayerVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listLayerVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LayerVersions ?? []) ? (result.LayerVersions ?? []) : [result.LayerVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLayers(params: { [K in keyof ParamsFrom<'listLayers', { next?: string, limit?: number }>]: ParamsFrom<'listLayers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLayers'>]-?: ReturnTypeFrom<'listLayers'>[K]}['Layers'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"Layers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listLayers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listLayers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Layers ?? []) ? (result.Layers ?? []) : [result.Layers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProvisionedConcurrencyConfigs(params: { [K in keyof ParamsFrom<'listProvisionedConcurrencyConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listProvisionedConcurrencyConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProvisionedConcurrencyConfigs'>]-?: ReturnTypeFrom<'listProvisionedConcurrencyConfigs'>[K]}['ProvisionedConcurrencyConfigs'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"ProvisionedConcurrencyConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listProvisionedConcurrencyConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listProvisionedConcurrencyConfigs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ProvisionedConcurrencyConfigs ?? []) ? (result.ProvisionedConcurrencyConfigs ?? []) : [result.ProvisionedConcurrencyConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // undefined
    return this.client.listTags(params as any).promise();
  }

  async listVersionsByFunction(params: { [K in keyof ParamsFrom<'listVersionsByFunction', { next?: string, limit?: number }>]: ParamsFrom<'listVersionsByFunction', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVersionsByFunction'>]-?: ReturnTypeFrom<'listVersionsByFunction'>[K]}['Versions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"Versions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listVersionsByFunction({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listVersionsByFunction' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Versions ?? []) ? (result.Versions ?? []) : [result.Versions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  publishLayerVersion: (params: RawParamsFrom<'publishLayerVersion'>) => Promise<ReturnTypeFrom<'publishLayerVersion'>>  = async params => {
  // undefined
    return this.client.publishLayerVersion(params as any).promise();
  }

  publishVersion: (params: RawParamsFrom<'publishVersion'>) => Promise<ReturnTypeFrom<'publishVersion'>>  = async params => {
  // undefined
    return this.client.publishVersion(params as any).promise();
  }

  putFunctionCodeSigningConfig: (params: RawParamsFrom<'putFunctionCodeSigningConfig'>) => Promise<ReturnTypeFrom<'putFunctionCodeSigningConfig'>>  = async params => {
  // undefined
    return this.client.putFunctionCodeSigningConfig(params as any).promise();
  }

  putFunctionConcurrency: (params: RawParamsFrom<'putFunctionConcurrency'>) => Promise<ReturnTypeFrom<'putFunctionConcurrency'>>  = async params => {
  // undefined
    return this.client.putFunctionConcurrency(params as any).promise();
  }

  putFunctionEventInvokeConfig: (params: RawParamsFrom<'putFunctionEventInvokeConfig'>) => Promise<ReturnTypeFrom<'putFunctionEventInvokeConfig'>>  = async params => {
  // undefined
    return this.client.putFunctionEventInvokeConfig(params as any).promise();
  }

  putProvisionedConcurrencyConfig: (params: RawParamsFrom<'putProvisionedConcurrencyConfig'>) => Promise<ReturnTypeFrom<'putProvisionedConcurrencyConfig'>>  = async params => {
  // undefined
    return this.client.putProvisionedConcurrencyConfig(params as any).promise();
  }

  removeLayerVersionPermission: (params: RawParamsFrom<'removeLayerVersionPermission'>) => Promise<ReturnTypeFrom<'removeLayerVersionPermission'>>  = async params => {
  // undefined
    return this.client.removeLayerVersionPermission(params as any).promise();
  }

  removePermission: (params: RawParamsFrom<'removePermission'>) => Promise<ReturnTypeFrom<'removePermission'>>  = async params => {
  // undefined
    return this.client.removePermission(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAlias: (params: RawParamsFrom<'updateAlias'>) => Promise<ReturnTypeFrom<'updateAlias'>>  = async params => {
  // undefined
    return this.client.updateAlias(params as any).promise();
  }

  updateCodeSigningConfig: (params: RawParamsFrom<'updateCodeSigningConfig'>) => Promise<ReturnTypeFrom<'updateCodeSigningConfig'>>  = async params => {
  // undefined
    return this.client.updateCodeSigningConfig(params as any).promise();
  }

  updateEventSourceMapping: (params: RawParamsFrom<'updateEventSourceMapping'>) => Promise<ReturnTypeFrom<'updateEventSourceMapping'>>  = async params => {
  // undefined
    return this.client.updateEventSourceMapping(params as any).promise();
  }

  updateFunctionCode: (params: RawParamsFrom<'updateFunctionCode'>) => Promise<ReturnTypeFrom<'updateFunctionCode'>>  = async params => {
  // undefined
    return this.client.updateFunctionCode(params as any).promise();
  }

  updateFunctionConfiguration: (params: RawParamsFrom<'updateFunctionConfiguration'>) => Promise<ReturnTypeFrom<'updateFunctionConfiguration'>>  = async params => {
  // undefined
    return this.client.updateFunctionConfiguration(params as any).promise();
  }

  updateFunctionEventInvokeConfig: (params: RawParamsFrom<'updateFunctionEventInvokeConfig'>) => Promise<ReturnTypeFrom<'updateFunctionEventInvokeConfig'>>  = async params => {
  // undefined
    return this.client.updateFunctionEventInvokeConfig(params as any).promise();
  }

  updateFunctionUrlConfig: (params: RawParamsFrom<'updateFunctionUrlConfig'>) => Promise<ReturnTypeFrom<'updateFunctionUrlConfig'>>  = async params => {
  // undefined
    return this.client.updateFunctionUrlConfig(params as any).promise();
  }
  
  static fromClient(client: AWSLambda): Lambda {
    return new Lambda(client) as any;
  }
  
  static client(options?: AWSLambda.Types.ClientConfiguration): Lambda {
    return new Lambda(new AWSLambda(options)) as any;
  }
}  
