import { Request, GreengrassV2 as AWSGreengrassV2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGreengrassV2> = AWSGreengrassV2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGreengrassV2> = AWSGreengrassV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGreengrassV2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGreengrassV2, Extras> = AWSGreengrassV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'greengrass';
    global: false;
    category: 'Internet of Things'
    topLevelCalls: readonly ["listComponents","listCoreDevices","listDeployments"];
    
  associateServiceRoleToAccount: FunctionTypeFrom<'associateServiceRoleToAccount'>;

  batchAssociateClientDeviceWithCoreDevice: FunctionTypeFrom<'batchAssociateClientDeviceWithCoreDevice'>;

  batchDisassociateClientDeviceFromCoreDevice: FunctionTypeFrom<'batchDisassociateClientDeviceFromCoreDevice'>;

  cancelDeployment: FunctionTypeFrom<'cancelDeployment'>;

  createComponentVersion: FunctionTypeFrom<'createComponentVersion'>;

  createDeployment: FunctionTypeFrom<'createDeployment'>;

  deleteComponent: FunctionTypeFrom<'deleteComponent'>;

  deleteCoreDevice: FunctionTypeFrom<'deleteCoreDevice'>;

  deleteDeployment: FunctionTypeFrom<'deleteDeployment'>;

  describeComponent: FunctionTypeFrom<'describeComponent'>;

  disassociateServiceRoleFromAccount: FunctionTypeFrom<'disassociateServiceRoleFromAccount'>;

  getComponent: FunctionTypeFrom<'getComponent'>;

  getComponentVersionArtifact: FunctionTypeFrom<'getComponentVersionArtifact'>;

  getConnectivityInfo: FunctionTypeFrom<'getConnectivityInfo'>;

  getCoreDevice: FunctionTypeFrom<'getCoreDevice'>;

  getDeployment: FunctionTypeFrom<'getDeployment'>;

  getServiceRoleForAccount: FunctionTypeFrom<'getServiceRoleForAccount'>;

  listClientDevicesAssociatedWithCoreDevice(params: { [K in keyof Omit<ParamsFrom<'listClientDevicesAssociatedWithCoreDevice', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listClientDevicesAssociatedWithCoreDevice', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClientDevicesAssociatedWithCoreDevice'>]-?: ReturnTypeFrom<'listClientDevicesAssociatedWithCoreDevice'>[K]}['associatedClientDevices'] }>
  ;

  listComponentVersions(params: { [K in keyof Omit<ParamsFrom<'listComponentVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listComponentVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponentVersions'>]-?: ReturnTypeFrom<'listComponentVersions'>[K]}['componentVersions'] }>
  ;

  listComponents(params: { [K in keyof Omit<ParamsFrom<'listComponents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['components'] }>
  listComponents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['components'] }>;

  listCoreDevices(params: { [K in keyof Omit<ParamsFrom<'listCoreDevices', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listCoreDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCoreDevices'>]-?: ReturnTypeFrom<'listCoreDevices'>[K]}['coreDevices'] }>
  listCoreDevices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCoreDevices'>]-?: ReturnTypeFrom<'listCoreDevices'>[K]}['coreDevices'] }>;

  listDeployments(params: { [K in keyof Omit<ParamsFrom<'listDeployments', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeployments'>]-?: ReturnTypeFrom<'listDeployments'>[K]}['deployments'] }>
  listDeployments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeployments'>]-?: ReturnTypeFrom<'listDeployments'>[K]}['deployments'] }>;

  listEffectiveDeployments(params: { [K in keyof Omit<ParamsFrom<'listEffectiveDeployments', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEffectiveDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEffectiveDeployments'>]-?: ReturnTypeFrom<'listEffectiveDeployments'>[K]}['effectiveDeployments'] }>
  ;

  listInstalledComponents(params: { [K in keyof Omit<ParamsFrom<'listInstalledComponents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listInstalledComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstalledComponents'>]-?: ReturnTypeFrom<'listInstalledComponents'>[K]}['installedComponents'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  resolveComponentCandidates: FunctionTypeFrom<'resolveComponentCandidates'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateConnectivityInfo: FunctionTypeFrom<'updateConnectivityInfo'>
}
 
export class GreengrassV2 implements ClientType {
  private constructor(private readonly client: AWSGreengrassV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'greengrass';
  public readonly global = false;
  public readonly category = 'Internet of Things';
  public readonly topLevelCalls = ["listComponents","listCoreDevices","listDeployments"] as const;
  
  async associateServiceRoleToAccount(...args: any): Promise<any> {
  // undefined
    return this.client.associateServiceRoleToAccount(...args).promise()
  }

  async batchAssociateClientDeviceWithCoreDevice(...args: any): Promise<any> {
  // undefined
    return this.client.batchAssociateClientDeviceWithCoreDevice(...args).promise()
  }

  async batchDisassociateClientDeviceFromCoreDevice(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisassociateClientDeviceFromCoreDevice(...args).promise()
  }

  async cancelDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.cancelDeployment(...args).promise()
  }

  async createComponentVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createComponentVersion(...args).promise()
  }

  async createDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.createDeployment(...args).promise()
  }

  async deleteComponent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteComponent(...args).promise()
  }

  async deleteCoreDevice(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCoreDevice(...args).promise()
  }

  async deleteDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeployment(...args).promise()
  }

  async describeComponent(...args: any): Promise<any> {
  // undefined
    return this.client.describeComponent(...args).promise()
  }

  async disassociateServiceRoleFromAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateServiceRoleFromAccount(...args).promise()
  }

  async getComponent(...args: any): Promise<any> {
  // undefined
    return this.client.getComponent(...args).promise()
  }

  async getComponentVersionArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.getComponentVersionArtifact(...args).promise()
  }

  async getConnectivityInfo(...args: any): Promise<any> {
  // undefined
    return this.client.getConnectivityInfo(...args).promise()
  }

  async getCoreDevice(...args: any): Promise<any> {
  // undefined
    return this.client.getCoreDevice(...args).promise()
  }

  async getDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.getDeployment(...args).promise()
  }

  async getServiceRoleForAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceRoleForAccount(...args).promise()
  }

  async listClientDevicesAssociatedWithCoreDevice(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"associatedClientDevices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClientDevicesAssociatedWithCoreDevice(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.associatedClientDevices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponentVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"componentVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponentVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.componentVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"components"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.components ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoreDevices(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"coreDevices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCoreDevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.coreDevices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeployments(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"deployments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeployments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.deployments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEffectiveDeployments(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"effectiveDeployments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEffectiveDeployments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.effectiveDeployments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstalledComponents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"installedComponents"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listInstalledComponents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.installedComponents ?? [];
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

  async resolveComponentCandidates(...args: any): Promise<any> {
  // undefined
    return this.client.resolveComponentCandidates(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateConnectivityInfo(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnectivityInfo(...args).promise()
  }
  
  static fromClient(client: AWSGreengrassV2): ClientType {
    return new GreengrassV2(client) as any;
  }
  
  static client(options?: AWSGreengrassV2.Types.ClientConfiguration): ClientType {
    return new GreengrassV2(new AWSGreengrassV2(options)) as any;
  }
}  
