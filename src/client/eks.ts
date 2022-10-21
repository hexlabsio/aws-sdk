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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEKS> = AWSEKS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class EKS {
  private constructor(private readonly client: AWSEKS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'eks' as const;
  public readonly global = false as const;
  public readonly category = 'Containers' as const;
  public readonly topLevelCalls = ["describeAddonVersions","listClusters"] as const;
  
  associateEncryptionConfig: (params: RawParamsFrom<'associateEncryptionConfig'>) => Promise<ReturnTypeFrom<'associateEncryptionConfig'>>  = async params => {
  // undefined
    return this.client.associateEncryptionConfig(params as any).promise();
  }

  associateIdentityProviderConfig: (params: RawParamsFrom<'associateIdentityProviderConfig'>) => Promise<ReturnTypeFrom<'associateIdentityProviderConfig'>>  = async params => {
  // undefined
    return this.client.associateIdentityProviderConfig(params as any).promise();
  }

  createAddon: (params: RawParamsFrom<'createAddon'>) => Promise<ReturnTypeFrom<'createAddon'>>  = async params => {
  // undefined
    return this.client.createAddon(params as any).promise();
  }

  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createFargateProfile: (params: RawParamsFrom<'createFargateProfile'>) => Promise<ReturnTypeFrom<'createFargateProfile'>>  = async params => {
  // undefined
    return this.client.createFargateProfile(params as any).promise();
  }

  createNodegroup: (params: RawParamsFrom<'createNodegroup'>) => Promise<ReturnTypeFrom<'createNodegroup'>>  = async params => {
  // undefined
    return this.client.createNodegroup(params as any).promise();
  }

  deleteAddon: (params: RawParamsFrom<'deleteAddon'>) => Promise<ReturnTypeFrom<'deleteAddon'>>  = async params => {
  // undefined
    return this.client.deleteAddon(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteFargateProfile: (params: RawParamsFrom<'deleteFargateProfile'>) => Promise<ReturnTypeFrom<'deleteFargateProfile'>>  = async params => {
  // undefined
    return this.client.deleteFargateProfile(params as any).promise();
  }

  deleteNodegroup: (params: RawParamsFrom<'deleteNodegroup'>) => Promise<ReturnTypeFrom<'deleteNodegroup'>>  = async params => {
  // undefined
    return this.client.deleteNodegroup(params as any).promise();
  }

  deregisterCluster: (params: RawParamsFrom<'deregisterCluster'>) => Promise<ReturnTypeFrom<'deregisterCluster'>>  = async params => {
  // undefined
    return this.client.deregisterCluster(params as any).promise();
  }

  describeAddon: (params: RawParamsFrom<'describeAddon'>) => Promise<ReturnTypeFrom<'describeAddon'>>  = async params => {
  // undefined
    return this.client.describeAddon(params as any).promise();
  }

  async describeAddonVersions(params: { [K in keyof ParamsFrom<'describeAddonVersions', { next?: string, limit?: number }>]: ParamsFrom<'describeAddonVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAddonVersions'>]-?: ReturnTypeFrom<'describeAddonVersions'>[K]}['addons'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"addons"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAddonVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeAddonVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.addons ?? []) ? (result.addons ?? []) : [result.addons]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeCluster: (params: RawParamsFrom<'describeCluster'>) => Promise<ReturnTypeFrom<'describeCluster'>>  = async params => {
  // undefined
    return this.client.describeCluster(params as any).promise();
  }

  describeFargateProfile: (params: RawParamsFrom<'describeFargateProfile'>) => Promise<ReturnTypeFrom<'describeFargateProfile'>>  = async params => {
  // undefined
    return this.client.describeFargateProfile(params as any).promise();
  }

  describeIdentityProviderConfig: (params: RawParamsFrom<'describeIdentityProviderConfig'>) => Promise<ReturnTypeFrom<'describeIdentityProviderConfig'>>  = async params => {
  // undefined
    return this.client.describeIdentityProviderConfig(params as any).promise();
  }

  describeNodegroup: (params: RawParamsFrom<'describeNodegroup'>) => Promise<ReturnTypeFrom<'describeNodegroup'>>  = async params => {
  // undefined
    return this.client.describeNodegroup(params as any).promise();
  }

  describeUpdate: (params: RawParamsFrom<'describeUpdate'>) => Promise<ReturnTypeFrom<'describeUpdate'>>  = async params => {
  // undefined
    return this.client.describeUpdate(params as any).promise();
  }

  disassociateIdentityProviderConfig: (params: RawParamsFrom<'disassociateIdentityProviderConfig'>) => Promise<ReturnTypeFrom<'disassociateIdentityProviderConfig'>>  = async params => {
  // undefined
    return this.client.disassociateIdentityProviderConfig(params as any).promise();
  }

  async listAddons(params: { [K in keyof ParamsFrom<'listAddons', { next?: string, limit?: number }>]: ParamsFrom<'listAddons', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAddons'>]-?: ReturnTypeFrom<'listAddons'>[K]}['addons'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"addons"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAddons({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAddons' })).toString('base64') : undefined;
    const member = (Array.isArray(result.addons ?? []) ? (result.addons ?? []) : [result.addons]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClusters(params: { [K in keyof ParamsFrom<'listClusters', { next?: string, limit?: number }>]: ParamsFrom<'listClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['clusters'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"clusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listClusters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.clusters ?? []) ? (result.clusters ?? []) : [result.clusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFargateProfiles(params: { [K in keyof ParamsFrom<'listFargateProfiles', { next?: string, limit?: number }>]: ParamsFrom<'listFargateProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFargateProfiles'>]-?: ReturnTypeFrom<'listFargateProfiles'>[K]}['fargateProfileNames'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fargateProfileNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFargateProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFargateProfiles' })).toString('base64') : undefined;
    const member = (Array.isArray(result.fargateProfileNames ?? []) ? (result.fargateProfileNames ?? []) : [result.fargateProfileNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIdentityProviderConfigs(params: { [K in keyof ParamsFrom<'listIdentityProviderConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listIdentityProviderConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIdentityProviderConfigs'>]-?: ReturnTypeFrom<'listIdentityProviderConfigs'>[K]}['identityProviderConfigs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"identityProviderConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listIdentityProviderConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listIdentityProviderConfigs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.identityProviderConfigs ?? []) ? (result.identityProviderConfigs ?? []) : [result.identityProviderConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNodegroups(params: { [K in keyof ParamsFrom<'listNodegroups', { next?: string, limit?: number }>]: ParamsFrom<'listNodegroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNodegroups'>]-?: ReturnTypeFrom<'listNodegroups'>[K]}['nodegroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"nodegroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNodegroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listNodegroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.nodegroups ?? []) ? (result.nodegroups ?? []) : [result.nodegroups]) as any;
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

  async listUpdates(params: { [K in keyof ParamsFrom<'listUpdates', { next?: string, limit?: number }>]: ParamsFrom<'listUpdates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUpdates'>]-?: ReturnTypeFrom<'listUpdates'>[K]}['updateIds'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"updateIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listUpdates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listUpdates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.updateIds ?? []) ? (result.updateIds ?? []) : [result.updateIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  registerCluster: (params: RawParamsFrom<'registerCluster'>) => Promise<ReturnTypeFrom<'registerCluster'>>  = async params => {
  // undefined
    return this.client.registerCluster(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAddon: (params: RawParamsFrom<'updateAddon'>) => Promise<ReturnTypeFrom<'updateAddon'>>  = async params => {
  // undefined
    return this.client.updateAddon(params as any).promise();
  }

  updateClusterConfig: (params: RawParamsFrom<'updateClusterConfig'>) => Promise<ReturnTypeFrom<'updateClusterConfig'>>  = async params => {
  // undefined
    return this.client.updateClusterConfig(params as any).promise();
  }

  updateClusterVersion: (params: RawParamsFrom<'updateClusterVersion'>) => Promise<ReturnTypeFrom<'updateClusterVersion'>>  = async params => {
  // undefined
    return this.client.updateClusterVersion(params as any).promise();
  }

  updateNodegroupConfig: (params: RawParamsFrom<'updateNodegroupConfig'>) => Promise<ReturnTypeFrom<'updateNodegroupConfig'>>  = async params => {
  // undefined
    return this.client.updateNodegroupConfig(params as any).promise();
  }

  updateNodegroupVersion: (params: RawParamsFrom<'updateNodegroupVersion'>) => Promise<ReturnTypeFrom<'updateNodegroupVersion'>>  = async params => {
  // undefined
    return this.client.updateNodegroupVersion(params as any).promise();
  }
  
  static fromClient(client: AWSEKS): EKS {
    return new EKS(client) as any;
  }
  
  static client(options?: AWSEKS.Types.ClientConfiguration): EKS {
    return new EKS(new AWSEKS(options)) as any;
  }
}  
