import { Request, SsmSap as AWSSsmSap } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSsmSap> = AWSSsmSap[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSsmSap> = AWSSsmSap[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSsmSap[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSsmSap, Extras> = AWSSsmSap[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSsmSap> = AWSSsmSap[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SsmSap {
  private constructor(private readonly client: AWSSsmSap) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ssm-sap' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listApplications","listComponents","listDatabases"] as const;
  
  deleteResourcePermission: (params: RawParamsFrom<'deleteResourcePermission'>) => Promise<ReturnTypeFrom<'deleteResourcePermission'>>  = async params => {
  // undefined
    return this.client.deleteResourcePermission(params as any).promise();
  }

  deregisterApplication: (params: RawParamsFrom<'deregisterApplication'>) => Promise<ReturnTypeFrom<'deregisterApplication'>>  = async params => {
  // undefined
    return this.client.deregisterApplication(params as any).promise();
  }

  getApplication: (params: RawParamsFrom<'getApplication'>) => Promise<ReturnTypeFrom<'getApplication'>>  = async params => {
  // undefined
    return this.client.getApplication(params as any).promise();
  }

  getComponent: (params: RawParamsFrom<'getComponent'>) => Promise<ReturnTypeFrom<'getComponent'>>  = async params => {
  // undefined
    return this.client.getComponent(params as any).promise();
  }

  getDatabase: (params: RawParamsFrom<'getDatabase'>) => Promise<ReturnTypeFrom<'getDatabase'>>  = async params => {
  // undefined
    return this.client.getDatabase(params as any).promise();
  }

  getOperation: (params: RawParamsFrom<'getOperation'>) => Promise<ReturnTypeFrom<'getOperation'>>  = async params => {
  // undefined
    return this.client.getOperation(params as any).promise();
  }

  getResourcePermission: (params: RawParamsFrom<'getResourcePermission'>) => Promise<ReturnTypeFrom<'getResourcePermission'>>  = async params => {
  // undefined
    return this.client.getResourcePermission(params as any).promise();
  }

  async listApplications(params: { [K in keyof ParamsFrom<'listApplications', { next?: string, limit?: number }>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['Applications'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Applications"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listApplications' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Applications ?? []) ? (result.Applications ?? []) : [result.Applications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponents(params: { [K in keyof ParamsFrom<'listComponents', { next?: string, limit?: number }>]: ParamsFrom<'listComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['Components'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Components"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listComponents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Components ?? []) ? (result.Components ?? []) : [result.Components]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatabases(params: { [K in keyof ParamsFrom<'listDatabases', { next?: string, limit?: number }>]: ParamsFrom<'listDatabases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatabases'>]-?: ReturnTypeFrom<'listDatabases'>[K]}['Databases'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Databases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatabases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDatabases' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Databases ?? []) ? (result.Databases ?? []) : [result.Databases]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putResourcePermission: (params: RawParamsFrom<'putResourcePermission'>) => Promise<ReturnTypeFrom<'putResourcePermission'>>  = async params => {
  // undefined
    return this.client.putResourcePermission(params as any).promise();
  }

  registerApplication: (params: RawParamsFrom<'registerApplication'>) => Promise<ReturnTypeFrom<'registerApplication'>>  = async params => {
  // undefined
    return this.client.registerApplication(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplicationSettings: (params: RawParamsFrom<'updateApplicationSettings'>) => Promise<ReturnTypeFrom<'updateApplicationSettings'>>  = async params => {
  // undefined
    return this.client.updateApplicationSettings(params as any).promise();
  }
  
  static fromClient(client: AWSSsmSap): SsmSap {
    return new SsmSap(client) as any;
  }
  
  static client(options?: AWSSsmSap.Types.ClientConfiguration): SsmSap {
    return new SsmSap(new AWSSsmSap(options)) as any;
  }
}  
