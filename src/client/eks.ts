import { Request, EKS as AWSEKS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEKS> = AWSEKS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEKS> = AWSEKS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEKS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEKS, Extras> = AWSEKS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'eks';
    global: false;
    category: 'Containers'
    topLevelCalls: readonly ["describeAddonVersions","listClusters"];
    
  associateEncryptionConfig: FunctionTypeFrom<'associateEncryptionConfig'>;

  associateIdentityProviderConfig: FunctionTypeFrom<'associateIdentityProviderConfig'>;

  createAddon: FunctionTypeFrom<'createAddon'>;

  createCluster: FunctionTypeFrom<'createCluster'>;

  createFargateProfile: FunctionTypeFrom<'createFargateProfile'>;

  createNodegroup: FunctionTypeFrom<'createNodegroup'>;

  deleteAddon: FunctionTypeFrom<'deleteAddon'>;

  deleteCluster: FunctionTypeFrom<'deleteCluster'>;

  deleteFargateProfile: FunctionTypeFrom<'deleteFargateProfile'>;

  deleteNodegroup: FunctionTypeFrom<'deleteNodegroup'>;

  deregisterCluster: FunctionTypeFrom<'deregisterCluster'>;

  describeAddon: FunctionTypeFrom<'describeAddon'>;

  describeAddonVersions(params: { [K in keyof Omit<ParamsFrom<'describeAddonVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeAddonVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAddonVersions'>]-?: ReturnTypeFrom<'describeAddonVersions'>[K]}['addons'] }>
  describeAddonVersions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAddonVersions'>]-?: ReturnTypeFrom<'describeAddonVersions'>[K]}['addons'] }>;

  describeCluster: FunctionTypeFrom<'describeCluster'>;

  describeFargateProfile: FunctionTypeFrom<'describeFargateProfile'>;

  describeIdentityProviderConfig: FunctionTypeFrom<'describeIdentityProviderConfig'>;

  describeNodegroup: FunctionTypeFrom<'describeNodegroup'>;

  describeUpdate: FunctionTypeFrom<'describeUpdate'>;

  disassociateIdentityProviderConfig: FunctionTypeFrom<'disassociateIdentityProviderConfig'>;

  listAddons(params: { [K in keyof Omit<ParamsFrom<'listAddons', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAddons', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAddons'>]-?: ReturnTypeFrom<'listAddons'>[K]}['addons'] }>
  ;

  listClusters(params: { [K in keyof Omit<ParamsFrom<'listClusters', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['clusters'] }>
  listClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['clusters'] }>;

  listFargateProfiles(params: { [K in keyof Omit<ParamsFrom<'listFargateProfiles', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFargateProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFargateProfiles'>]-?: ReturnTypeFrom<'listFargateProfiles'>[K]}['fargateProfileNames'] }>
  ;

  listIdentityProviderConfigs(params: { [K in keyof Omit<ParamsFrom<'listIdentityProviderConfigs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listIdentityProviderConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIdentityProviderConfigs'>]-?: ReturnTypeFrom<'listIdentityProviderConfigs'>[K]}['identityProviderConfigs'] }>
  ;

  listNodegroups(params: { [K in keyof Omit<ParamsFrom<'listNodegroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listNodegroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNodegroups'>]-?: ReturnTypeFrom<'listNodegroups'>[K]}['nodegroups'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listUpdates(params: { [K in keyof Omit<ParamsFrom<'listUpdates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listUpdates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUpdates'>]-?: ReturnTypeFrom<'listUpdates'>[K]}['updateIds'] }>
  ;

  registerCluster: FunctionTypeFrom<'registerCluster'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAddon: FunctionTypeFrom<'updateAddon'>;

  updateClusterConfig: FunctionTypeFrom<'updateClusterConfig'>;

  updateClusterVersion: FunctionTypeFrom<'updateClusterVersion'>;

  updateNodegroupConfig: FunctionTypeFrom<'updateNodegroupConfig'>;

  updateNodegroupVersion: FunctionTypeFrom<'updateNodegroupVersion'>
}
 
export class EKS implements ClientType {
  private constructor(private readonly client: AWSEKS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'eks';
  public readonly global = false;
  public readonly category = 'Containers';
  public readonly topLevelCalls = ["describeAddonVersions","listClusters"] as const;
  
  async associateEncryptionConfig(...args: any): Promise<any> {
  // undefined
    return this.client.associateEncryptionConfig(...args).promise()
  }

  async associateIdentityProviderConfig(...args: any): Promise<any> {
  // undefined
    return this.client.associateIdentityProviderConfig(...args).promise()
  }

  async createAddon(...args: any): Promise<any> {
  // undefined
    return this.client.createAddon(...args).promise()
  }

  async createCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCluster(...args).promise()
  }

  async createFargateProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createFargateProfile(...args).promise()
  }

  async createNodegroup(...args: any): Promise<any> {
  // undefined
    return this.client.createNodegroup(...args).promise()
  }

  async deleteAddon(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAddon(...args).promise()
  }

  async deleteCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCluster(...args).promise()
  }

  async deleteFargateProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFargateProfile(...args).promise()
  }

  async deleteNodegroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNodegroup(...args).promise()
  }

  async deregisterCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterCluster(...args).promise()
  }

  async describeAddon(...args: any): Promise<any> {
  // undefined
    return this.client.describeAddon(...args).promise()
  }

  async describeAddonVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"addons"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAddonVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.addons ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCluster(...args: any): Promise<any> {
  // undefined
    return this.client.describeCluster(...args).promise()
  }

  async describeFargateProfile(...args: any): Promise<any> {
  // undefined
    return this.client.describeFargateProfile(...args).promise()
  }

  async describeIdentityProviderConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeIdentityProviderConfig(...args).promise()
  }

  async describeNodegroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeNodegroup(...args).promise()
  }

  async describeUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.describeUpdate(...args).promise()
  }

  async disassociateIdentityProviderConfig(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateIdentityProviderConfig(...args).promise()
  }

  async listAddons(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"addons"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAddons(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.addons ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClusters(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"clusters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.clusters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFargateProfiles(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fargateProfileNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFargateProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.fargateProfileNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIdentityProviderConfigs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"identityProviderConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listIdentityProviderConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.identityProviderConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNodegroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"nodegroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNodegroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.nodegroups ?? [];
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

  async listUpdates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"updateIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listUpdates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.updateIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async registerCluster(...args: any): Promise<any> {
  // undefined
    return this.client.registerCluster(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAddon(...args: any): Promise<any> {
  // undefined
    return this.client.updateAddon(...args).promise()
  }

  async updateClusterConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateClusterConfig(...args).promise()
  }

  async updateClusterVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateClusterVersion(...args).promise()
  }

  async updateNodegroupConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateNodegroupConfig(...args).promise()
  }

  async updateNodegroupVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateNodegroupVersion(...args).promise()
  }
  
  static fromClient(client: AWSEKS): ClientType {
    return new EKS(client) as any;
  }
  
  static client(options?: AWSEKS.Types.ClientConfiguration): ClientType {
    return new EKS(new AWSEKS(options)) as any;
  }
}  
