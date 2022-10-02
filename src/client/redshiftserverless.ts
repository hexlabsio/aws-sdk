import { Request, RedshiftServerless as AWSRedshiftServerless } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRedshiftServerless> = AWSRedshiftServerless[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRedshiftServerless> = AWSRedshiftServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRedshiftServerless[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRedshiftServerless, Extras> = AWSRedshiftServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'redshift-serverless';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listEndpointAccess","listNamespaces","listRecoveryPoints","listSnapshots","listUsageLimits","listWorkgroups"];
    
  convertRecoveryPointToSnapshot: FunctionTypeFrom<'convertRecoveryPointToSnapshot'>;

  createEndpointAccess: FunctionTypeFrom<'createEndpointAccess'>;

  createNamespace: FunctionTypeFrom<'createNamespace'>;

  createSnapshot: FunctionTypeFrom<'createSnapshot'>;

  createUsageLimit: FunctionTypeFrom<'createUsageLimit'>;

  createWorkgroup: FunctionTypeFrom<'createWorkgroup'>;

  deleteEndpointAccess: FunctionTypeFrom<'deleteEndpointAccess'>;

  deleteNamespace: FunctionTypeFrom<'deleteNamespace'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteSnapshot: FunctionTypeFrom<'deleteSnapshot'>;

  deleteUsageLimit: FunctionTypeFrom<'deleteUsageLimit'>;

  deleteWorkgroup: FunctionTypeFrom<'deleteWorkgroup'>;

  getCredentials: FunctionTypeFrom<'getCredentials'>;

  getEndpointAccess: FunctionTypeFrom<'getEndpointAccess'>;

  getNamespace: FunctionTypeFrom<'getNamespace'>;

  getRecoveryPoint: FunctionTypeFrom<'getRecoveryPoint'>;

  getResourcePolicy: FunctionTypeFrom<'getResourcePolicy'>;

  getSnapshot: FunctionTypeFrom<'getSnapshot'>;

  getUsageLimit: FunctionTypeFrom<'getUsageLimit'>;

  getWorkgroup: FunctionTypeFrom<'getWorkgroup'>;

  listEndpointAccess(params: { [K in keyof Omit<ParamsFrom<'listEndpointAccess', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEndpointAccess', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpointAccess'>]-?: ReturnTypeFrom<'listEndpointAccess'>[K]}['endpoints'] }>
  listEndpointAccess(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpointAccess'>]-?: ReturnTypeFrom<'listEndpointAccess'>[K]}['endpoints'] }>;

  listNamespaces(params: { [K in keyof Omit<ParamsFrom<'listNamespaces', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listNamespaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNamespaces'>]-?: ReturnTypeFrom<'listNamespaces'>[K]}['namespaces'] }>
  listNamespaces(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNamespaces'>]-?: ReturnTypeFrom<'listNamespaces'>[K]}['namespaces'] }>;

  listRecoveryPoints(params: { [K in keyof Omit<ParamsFrom<'listRecoveryPoints', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRecoveryPoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecoveryPoints'>]-?: ReturnTypeFrom<'listRecoveryPoints'>[K]}['recoveryPoints'] }>
  listRecoveryPoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecoveryPoints'>]-?: ReturnTypeFrom<'listRecoveryPoints'>[K]}['recoveryPoints'] }>;

  listSnapshots(params: { [K in keyof Omit<ParamsFrom<'listSnapshots', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSnapshots'>]-?: ReturnTypeFrom<'listSnapshots'>[K]}['snapshots'] }>
  listSnapshots(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSnapshots'>]-?: ReturnTypeFrom<'listSnapshots'>[K]}['snapshots'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listUsageLimits(params: { [K in keyof Omit<ParamsFrom<'listUsageLimits', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listUsageLimits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsageLimits'>]-?: ReturnTypeFrom<'listUsageLimits'>[K]}['usageLimits'] }>
  listUsageLimits(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsageLimits'>]-?: ReturnTypeFrom<'listUsageLimits'>[K]}['usageLimits'] }>;

  listWorkgroups(params: { [K in keyof Omit<ParamsFrom<'listWorkgroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorkgroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkgroups'>]-?: ReturnTypeFrom<'listWorkgroups'>[K]}['workgroups'] }>
  listWorkgroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkgroups'>]-?: ReturnTypeFrom<'listWorkgroups'>[K]}['workgroups'] }>;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  restoreFromRecoveryPoint: FunctionTypeFrom<'restoreFromRecoveryPoint'>;

  restoreFromSnapshot: FunctionTypeFrom<'restoreFromSnapshot'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateEndpointAccess: FunctionTypeFrom<'updateEndpointAccess'>;

  updateNamespace: FunctionTypeFrom<'updateNamespace'>;

  updateSnapshot: FunctionTypeFrom<'updateSnapshot'>;

  updateUsageLimit: FunctionTypeFrom<'updateUsageLimit'>;

  updateWorkgroup: FunctionTypeFrom<'updateWorkgroup'>
}
 
export class RedshiftServerless implements ClientType {
  private constructor(private readonly client: AWSRedshiftServerless) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'redshift-serverless';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listEndpointAccess","listNamespaces","listRecoveryPoints","listSnapshots","listUsageLimits","listWorkgroups"] as const;
  
  async convertRecoveryPointToSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.convertRecoveryPointToSnapshot(...args).promise()
  }

  async createEndpointAccess(...args: any): Promise<any> {
  // undefined
    return this.client.createEndpointAccess(...args).promise()
  }

  async createNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.createNamespace(...args).promise()
  }

  async createSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshot(...args).promise()
  }

  async createUsageLimit(...args: any): Promise<any> {
  // undefined
    return this.client.createUsageLimit(...args).promise()
  }

  async createWorkgroup(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkgroup(...args).promise()
  }

  async deleteEndpointAccess(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpointAccess(...args).promise()
  }

  async deleteNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNamespace(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSnapshot(...args).promise()
  }

  async deleteUsageLimit(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUsageLimit(...args).promise()
  }

  async deleteWorkgroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkgroup(...args).promise()
  }

  async getCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.getCredentials(...args).promise()
  }

  async getEndpointAccess(...args: any): Promise<any> {
  // undefined
    return this.client.getEndpointAccess(...args).promise()
  }

  async getNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.getNamespace(...args).promise()
  }

  async getRecoveryPoint(...args: any): Promise<any> {
  // undefined
    return this.client.getRecoveryPoint(...args).promise()
  }

  async getResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResourcePolicy(...args).promise()
  }

  async getSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.getSnapshot(...args).promise()
  }

  async getUsageLimit(...args: any): Promise<any> {
  // undefined
    return this.client.getUsageLimit(...args).promise()
  }

  async getWorkgroup(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkgroup(...args).promise()
  }

  async listEndpointAccess(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"endpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEndpointAccess(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.endpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNamespaces(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"namespaces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNamespaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.namespaces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecoveryPoints(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"recoveryPoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRecoveryPoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.recoveryPoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSnapshots(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"snapshots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSnapshots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.snapshots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listUsageLimits(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"usageLimits"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listUsageLimits(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.usageLimits ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkgroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workgroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkgroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.workgroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async restoreFromRecoveryPoint(...args: any): Promise<any> {
  // undefined
    return this.client.restoreFromRecoveryPoint(...args).promise()
  }

  async restoreFromSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.restoreFromSnapshot(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateEndpointAccess(...args: any): Promise<any> {
  // undefined
    return this.client.updateEndpointAccess(...args).promise()
  }

  async updateNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.updateNamespace(...args).promise()
  }

  async updateSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.updateSnapshot(...args).promise()
  }

  async updateUsageLimit(...args: any): Promise<any> {
  // undefined
    return this.client.updateUsageLimit(...args).promise()
  }

  async updateWorkgroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkgroup(...args).promise()
  }
  
  static fromClient(client: AWSRedshiftServerless): ClientType {
    return new RedshiftServerless(client) as any;
  }
  
  static client(options?: AWSRedshiftServerless.Types.ClientConfiguration): ClientType {
    return new RedshiftServerless(new AWSRedshiftServerless(options)) as any;
  }
}  
