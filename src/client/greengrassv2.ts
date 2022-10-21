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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGreengrassV2> = AWSGreengrassV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class GreengrassV2 {
  private constructor(private readonly client: AWSGreengrassV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'greengrass' as const;
  public readonly global = false as const;
  public readonly category = 'Internet of Things' as const;
  public readonly topLevelCalls = ["listComponents","listCoreDevices","listDeployments"] as const;
  
  associateServiceRoleToAccount: (params: RawParamsFrom<'associateServiceRoleToAccount'>) => Promise<ReturnTypeFrom<'associateServiceRoleToAccount'>>  = async params => {
  // undefined
    return this.client.associateServiceRoleToAccount(params as any).promise();
  }

  batchAssociateClientDeviceWithCoreDevice: (params: RawParamsFrom<'batchAssociateClientDeviceWithCoreDevice'>) => Promise<ReturnTypeFrom<'batchAssociateClientDeviceWithCoreDevice'>>  = async params => {
  // undefined
    return this.client.batchAssociateClientDeviceWithCoreDevice(params as any).promise();
  }

  batchDisassociateClientDeviceFromCoreDevice: (params: RawParamsFrom<'batchDisassociateClientDeviceFromCoreDevice'>) => Promise<ReturnTypeFrom<'batchDisassociateClientDeviceFromCoreDevice'>>  = async params => {
  // undefined
    return this.client.batchDisassociateClientDeviceFromCoreDevice(params as any).promise();
  }

  cancelDeployment: (params: RawParamsFrom<'cancelDeployment'>) => Promise<ReturnTypeFrom<'cancelDeployment'>>  = async params => {
  // undefined
    return this.client.cancelDeployment(params as any).promise();
  }

  createComponentVersion: (params: RawParamsFrom<'createComponentVersion'>) => Promise<ReturnTypeFrom<'createComponentVersion'>>  = async params => {
  // undefined
    return this.client.createComponentVersion(params as any).promise();
  }

  createDeployment: (params: RawParamsFrom<'createDeployment'>) => Promise<ReturnTypeFrom<'createDeployment'>>  = async params => {
  // undefined
    return this.client.createDeployment(params as any).promise();
  }

  deleteComponent: (params: RawParamsFrom<'deleteComponent'>) => Promise<ReturnTypeFrom<'deleteComponent'>>  = async params => {
  // undefined
    return this.client.deleteComponent(params as any).promise();
  }

  deleteCoreDevice: (params: RawParamsFrom<'deleteCoreDevice'>) => Promise<ReturnTypeFrom<'deleteCoreDevice'>>  = async params => {
  // undefined
    return this.client.deleteCoreDevice(params as any).promise();
  }

  deleteDeployment: (params: RawParamsFrom<'deleteDeployment'>) => Promise<ReturnTypeFrom<'deleteDeployment'>>  = async params => {
  // undefined
    return this.client.deleteDeployment(params as any).promise();
  }

  describeComponent: (params: RawParamsFrom<'describeComponent'>) => Promise<ReturnTypeFrom<'describeComponent'>>  = async params => {
  // undefined
    return this.client.describeComponent(params as any).promise();
  }

  disassociateServiceRoleFromAccount: (params: RawParamsFrom<'disassociateServiceRoleFromAccount'>) => Promise<ReturnTypeFrom<'disassociateServiceRoleFromAccount'>>  = async params => {
  // undefined
    return this.client.disassociateServiceRoleFromAccount(params as any).promise();
  }

  getComponent: (params: RawParamsFrom<'getComponent'>) => Promise<ReturnTypeFrom<'getComponent'>>  = async params => {
  // undefined
    return this.client.getComponent(params as any).promise();
  }

  getComponentVersionArtifact: (params: RawParamsFrom<'getComponentVersionArtifact'>) => Promise<ReturnTypeFrom<'getComponentVersionArtifact'>>  = async params => {
  // undefined
    return this.client.getComponentVersionArtifact(params as any).promise();
  }

  getConnectivityInfo: (params: RawParamsFrom<'getConnectivityInfo'>) => Promise<ReturnTypeFrom<'getConnectivityInfo'>>  = async params => {
  // undefined
    return this.client.getConnectivityInfo(params as any).promise();
  }

  getCoreDevice: (params: RawParamsFrom<'getCoreDevice'>) => Promise<ReturnTypeFrom<'getCoreDevice'>>  = async params => {
  // undefined
    return this.client.getCoreDevice(params as any).promise();
  }

  getDeployment: (params: RawParamsFrom<'getDeployment'>) => Promise<ReturnTypeFrom<'getDeployment'>>  = async params => {
  // undefined
    return this.client.getDeployment(params as any).promise();
  }

  getServiceRoleForAccount: (params: RawParamsFrom<'getServiceRoleForAccount'>) => Promise<ReturnTypeFrom<'getServiceRoleForAccount'>>  = async params => {
  // undefined
    return this.client.getServiceRoleForAccount(params as any).promise();
  }

  async listClientDevicesAssociatedWithCoreDevice(params: { [K in keyof ParamsFrom<'listClientDevicesAssociatedWithCoreDevice', { next?: string, limit?: number }>]: ParamsFrom<'listClientDevicesAssociatedWithCoreDevice', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClientDevicesAssociatedWithCoreDevice'>]-?: ReturnTypeFrom<'listClientDevicesAssociatedWithCoreDevice'>[K]}['associatedClientDevices'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"associatedClientDevices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClientDevicesAssociatedWithCoreDevice({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listClientDevicesAssociatedWithCoreDevice' })).toString('base64') : undefined;
    const member = (Array.isArray(result.associatedClientDevices ?? []) ? (result.associatedClientDevices ?? []) : [result.associatedClientDevices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponentVersions(params: { [K in keyof ParamsFrom<'listComponentVersions', { next?: string, limit?: number }>]: ParamsFrom<'listComponentVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComponentVersions'>]-?: ReturnTypeFrom<'listComponentVersions'>[K]}['componentVersions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"componentVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponentVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listComponentVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.componentVersions ?? []) ? (result.componentVersions ?? []) : [result.componentVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponents(params: { [K in keyof ParamsFrom<'listComponents', { next?: string, limit?: number }>]: ParamsFrom<'listComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['components'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"components"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listComponents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.components ?? []) ? (result.components ?? []) : [result.components]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoreDevices(params: { [K in keyof ParamsFrom<'listCoreDevices', { next?: string, limit?: number }>]: ParamsFrom<'listCoreDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCoreDevices'>]-?: ReturnTypeFrom<'listCoreDevices'>[K]}['coreDevices'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"coreDevices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCoreDevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCoreDevices' })).toString('base64') : undefined;
    const member = (Array.isArray(result.coreDevices ?? []) ? (result.coreDevices ?? []) : [result.coreDevices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeployments(params: { [K in keyof ParamsFrom<'listDeployments', { next?: string, limit?: number }>]: ParamsFrom<'listDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeployments'>]-?: ReturnTypeFrom<'listDeployments'>[K]}['deployments'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"deployments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeployments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDeployments' })).toString('base64') : undefined;
    const member = (Array.isArray(result.deployments ?? []) ? (result.deployments ?? []) : [result.deployments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEffectiveDeployments(params: { [K in keyof ParamsFrom<'listEffectiveDeployments', { next?: string, limit?: number }>]: ParamsFrom<'listEffectiveDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEffectiveDeployments'>]-?: ReturnTypeFrom<'listEffectiveDeployments'>[K]}['effectiveDeployments'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"effectiveDeployments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEffectiveDeployments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEffectiveDeployments' })).toString('base64') : undefined;
    const member = (Array.isArray(result.effectiveDeployments ?? []) ? (result.effectiveDeployments ?? []) : [result.effectiveDeployments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstalledComponents(params: { [K in keyof ParamsFrom<'listInstalledComponents', { next?: string, limit?: number }>]: ParamsFrom<'listInstalledComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstalledComponents'>]-?: ReturnTypeFrom<'listInstalledComponents'>[K]}['installedComponents'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"installedComponents"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listInstalledComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listInstalledComponents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.installedComponents ?? []) ? (result.installedComponents ?? []) : [result.installedComponents]) as any;
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

  resolveComponentCandidates: (params: RawParamsFrom<'resolveComponentCandidates'>) => Promise<ReturnTypeFrom<'resolveComponentCandidates'>>  = async params => {
  // undefined
    return this.client.resolveComponentCandidates(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateConnectivityInfo: (params: RawParamsFrom<'updateConnectivityInfo'>) => Promise<ReturnTypeFrom<'updateConnectivityInfo'>>  = async params => {
  // undefined
    return this.client.updateConnectivityInfo(params as any).promise();
  }
  
  static fromClient(client: AWSGreengrassV2): GreengrassV2 {
    return new GreengrassV2(client) as any;
  }
  
  static client(options?: AWSGreengrassV2.Types.ClientConfiguration): GreengrassV2 {
    return new GreengrassV2(new AWSGreengrassV2(options)) as any;
  }
}  
