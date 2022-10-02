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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'opsworks-cm';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeBackups","describeServers"];
    
  associateNode: FunctionTypeFrom<'associateNode'>;

  createBackup: FunctionTypeFrom<'createBackup'>;

  createServer: FunctionTypeFrom<'createServer'>;

  deleteBackup: FunctionTypeFrom<'deleteBackup'>;

  deleteServer: FunctionTypeFrom<'deleteServer'>;

  describeAccountAttributes: FunctionTypeFrom<'describeAccountAttributes'>;

  describeBackups(params: { [K in keyof Omit<ParamsFrom<'describeBackups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeBackups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeBackups'>]-?: ReturnTypeFrom<'describeBackups'>[K]}['Backups'] }>
  describeBackups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeBackups'>]-?: ReturnTypeFrom<'describeBackups'>[K]}['Backups'] }>;

  describeEvents(params: { [K in keyof Omit<ParamsFrom<'describeEvents', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['ServerEvents'] }>
  ;

  describeNodeAssociationStatus: FunctionTypeFrom<'describeNodeAssociationStatus'>;

  describeServers(params: { [K in keyof Omit<ParamsFrom<'describeServers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeServers'>]-?: ReturnTypeFrom<'describeServers'>[K]}['Servers'] }>
  describeServers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeServers'>]-?: ReturnTypeFrom<'describeServers'>[K]}['Servers'] }>;

  disassociateNode: FunctionTypeFrom<'disassociateNode'>;

  exportServerEngineAttribute: FunctionTypeFrom<'exportServerEngineAttribute'>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  restoreServer: FunctionTypeFrom<'restoreServer'>;

  startMaintenance: FunctionTypeFrom<'startMaintenance'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateServer: FunctionTypeFrom<'updateServer'>;

  updateServerEngineAttributes: FunctionTypeFrom<'updateServerEngineAttributes'>
}
 
export class OpsWorksCM implements ClientType {
  private constructor(private readonly client: AWSOpsWorksCM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'opsworks-cm';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeBackups","describeServers"] as const;
  
  async associateNode(...args: any): Promise<any> {
  // undefined
    return this.client.associateNode(...args).promise()
  }

  async createBackup(...args: any): Promise<any> {
  // undefined
    return this.client.createBackup(...args).promise()
  }

  async createServer(...args: any): Promise<any> {
  // undefined
    return this.client.createServer(...args).promise()
  }

  async deleteBackup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackup(...args).promise()
  }

  async deleteServer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServer(...args).promise()
  }

  async describeAccountAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountAttributes(...args).promise()
  }

  async describeBackups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Backups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeBackups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Backups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEvents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ServerEvents"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ServerEvents ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNodeAssociationStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeNodeAssociationStatus(...args).promise()
  }

  async describeServers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Servers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeServers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Servers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disassociateNode(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateNode(...args).promise()
  }

  async exportServerEngineAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.exportServerEngineAttribute(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async restoreServer(...args: any): Promise<any> {
  // undefined
    return this.client.restoreServer(...args).promise()
  }

  async startMaintenance(...args: any): Promise<any> {
  // undefined
    return this.client.startMaintenance(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateServer(...args: any): Promise<any> {
  // undefined
    return this.client.updateServer(...args).promise()
  }

  async updateServerEngineAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.updateServerEngineAttributes(...args).promise()
  }
  
  static fromClient(client: AWSOpsWorksCM): ClientType {
    return new OpsWorksCM(client) as any;
  }
  
  static client(options?: AWSOpsWorksCM.Types.ClientConfiguration): ClientType {
    return new OpsWorksCM(new AWSOpsWorksCM(options)) as any;
  }
}  
