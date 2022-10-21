import { Request, OpsWorksCM as AWSOpsWorksCM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSOpsWorksCM> = AWSOpsWorksCM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSOpsWorksCM> = AWSOpsWorksCM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSOpsWorksCM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSOpsWorksCM, Extras> = AWSOpsWorksCM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSOpsWorksCM> = AWSOpsWorksCM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class OpsWorksCM {
  private constructor(private readonly client: AWSOpsWorksCM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'opsworks-cm' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeBackups","describeServers"] as const;
  
  associateNode: (params: RawParamsFrom<'associateNode'>) => Promise<ReturnTypeFrom<'associateNode'>>  = async params => {
  // undefined
    return this.client.associateNode(params as any).promise();
  }

  createBackup: (params: RawParamsFrom<'createBackup'>) => Promise<ReturnTypeFrom<'createBackup'>>  = async params => {
  // undefined
    return this.client.createBackup(params as any).promise();
  }

  createServer: (params: RawParamsFrom<'createServer'>) => Promise<ReturnTypeFrom<'createServer'>>  = async params => {
  // undefined
    return this.client.createServer(params as any).promise();
  }

  deleteBackup: (params: RawParamsFrom<'deleteBackup'>) => Promise<ReturnTypeFrom<'deleteBackup'>>  = async params => {
  // undefined
    return this.client.deleteBackup(params as any).promise();
  }

  deleteServer: (params: RawParamsFrom<'deleteServer'>) => Promise<ReturnTypeFrom<'deleteServer'>>  = async params => {
  // undefined
    return this.client.deleteServer(params as any).promise();
  }

  describeAccountAttributes: (params: RawParamsFrom<'describeAccountAttributes'>) => Promise<ReturnTypeFrom<'describeAccountAttributes'>>  = async params => {
  // undefined
    return this.client.describeAccountAttributes(params as any).promise();
  }

  async describeBackups(params: { [K in keyof ParamsFrom<'describeBackups', { next?: string, limit?: number }>]: ParamsFrom<'describeBackups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeBackups'>]-?: ReturnTypeFrom<'describeBackups'>[K]}['Backups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Backups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeBackups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeBackups' })).toString('base64');
    const member = (Array.isArray(result.Backups ?? []) ? (result.Backups ?? []) : [result.Backups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEvents(params: { [K in keyof ParamsFrom<'describeEvents', { next?: string, limit?: number }>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['ServerEvents'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ServerEvents"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeEvents' })).toString('base64');
    const member = (Array.isArray(result.ServerEvents ?? []) ? (result.ServerEvents ?? []) : [result.ServerEvents]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeNodeAssociationStatus: (params: RawParamsFrom<'describeNodeAssociationStatus'>) => Promise<ReturnTypeFrom<'describeNodeAssociationStatus'>>  = async params => {
  // undefined
    return this.client.describeNodeAssociationStatus(params as any).promise();
  }

  async describeServers(params: { [K in keyof ParamsFrom<'describeServers', { next?: string, limit?: number }>]: ParamsFrom<'describeServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeServers'>]-?: ReturnTypeFrom<'describeServers'>[K]}['Servers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Servers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeServers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeServers' })).toString('base64');
    const member = (Array.isArray(result.Servers ?? []) ? (result.Servers ?? []) : [result.Servers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disassociateNode: (params: RawParamsFrom<'disassociateNode'>) => Promise<ReturnTypeFrom<'disassociateNode'>>  = async params => {
  // undefined
    return this.client.disassociateNode(params as any).promise();
  }

  exportServerEngineAttribute: (params: RawParamsFrom<'exportServerEngineAttribute'>) => Promise<ReturnTypeFrom<'exportServerEngineAttribute'>>  = async params => {
  // undefined
    return this.client.exportServerEngineAttribute(params as any).promise();
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTagsForResource' })).toString('base64');
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  restoreServer: (params: RawParamsFrom<'restoreServer'>) => Promise<ReturnTypeFrom<'restoreServer'>>  = async params => {
  // undefined
    return this.client.restoreServer(params as any).promise();
  }

  startMaintenance: (params: RawParamsFrom<'startMaintenance'>) => Promise<ReturnTypeFrom<'startMaintenance'>>  = async params => {
  // undefined
    return this.client.startMaintenance(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateServer: (params: RawParamsFrom<'updateServer'>) => Promise<ReturnTypeFrom<'updateServer'>>  = async params => {
  // undefined
    return this.client.updateServer(params as any).promise();
  }

  updateServerEngineAttributes: (params: RawParamsFrom<'updateServerEngineAttributes'>) => Promise<ReturnTypeFrom<'updateServerEngineAttributes'>>  = async params => {
  // undefined
    return this.client.updateServerEngineAttributes(params as any).promise();
  }
  
  static fromClient(client: AWSOpsWorksCM): OpsWorksCM {
    return new OpsWorksCM(client) as any;
  }
  
  static client(options?: AWSOpsWorksCM.Types.ClientConfiguration): OpsWorksCM {
    return new OpsWorksCM(new AWSOpsWorksCM(options)) as any;
  }
}  
