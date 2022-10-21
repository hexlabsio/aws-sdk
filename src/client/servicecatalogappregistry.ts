import { Request, ServiceCatalogAppRegistry as AWSServiceCatalogAppRegistry } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSServiceCatalogAppRegistry> = AWSServiceCatalogAppRegistry[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSServiceCatalogAppRegistry> = AWSServiceCatalogAppRegistry[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSServiceCatalogAppRegistry[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSServiceCatalogAppRegistry, Extras> = AWSServiceCatalogAppRegistry[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSServiceCatalogAppRegistry> = AWSServiceCatalogAppRegistry[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ServiceCatalogAppRegistry {
  private constructor(private readonly client: AWSServiceCatalogAppRegistry) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'servicecatalog-appregistry' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listApplications","listAttributeGroups"] as const;
  
  associateAttributeGroup: (params: RawParamsFrom<'associateAttributeGroup'>) => Promise<ReturnTypeFrom<'associateAttributeGroup'>>  = async params => {
  // undefined
    return this.client.associateAttributeGroup(params as any).promise();
  }

  associateResource: (params: RawParamsFrom<'associateResource'>) => Promise<ReturnTypeFrom<'associateResource'>>  = async params => {
  // undefined
    return this.client.associateResource(params as any).promise();
  }

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createAttributeGroup: (params: RawParamsFrom<'createAttributeGroup'>) => Promise<ReturnTypeFrom<'createAttributeGroup'>>  = async params => {
  // undefined
    return this.client.createAttributeGroup(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteAttributeGroup: (params: RawParamsFrom<'deleteAttributeGroup'>) => Promise<ReturnTypeFrom<'deleteAttributeGroup'>>  = async params => {
  // undefined
    return this.client.deleteAttributeGroup(params as any).promise();
  }

  disassociateAttributeGroup: (params: RawParamsFrom<'disassociateAttributeGroup'>) => Promise<ReturnTypeFrom<'disassociateAttributeGroup'>>  = async params => {
  // undefined
    return this.client.disassociateAttributeGroup(params as any).promise();
  }

  disassociateResource: (params: RawParamsFrom<'disassociateResource'>) => Promise<ReturnTypeFrom<'disassociateResource'>>  = async params => {
  // undefined
    return this.client.disassociateResource(params as any).promise();
  }

  getApplication: (params: RawParamsFrom<'getApplication'>) => Promise<ReturnTypeFrom<'getApplication'>>  = async params => {
  // undefined
    return this.client.getApplication(params as any).promise();
  }

  getAssociatedResource: (params: RawParamsFrom<'getAssociatedResource'>) => Promise<ReturnTypeFrom<'getAssociatedResource'>>  = async params => {
  // undefined
    return this.client.getAssociatedResource(params as any).promise();
  }

  getAttributeGroup: (params: RawParamsFrom<'getAttributeGroup'>) => Promise<ReturnTypeFrom<'getAttributeGroup'>>  = async params => {
  // undefined
    return this.client.getAttributeGroup(params as any).promise();
  }

  async listApplications(params: { [K in keyof ParamsFrom<'listApplications', { next?: string, limit?: number }>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applications"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listApplications' })).toString('base64');
    const member = (Array.isArray(result.applications ?? []) ? (result.applications ?? []) : [result.applications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociatedAttributeGroups(params: { [K in keyof ParamsFrom<'listAssociatedAttributeGroups', { next?: string, limit?: number }>]: ParamsFrom<'listAssociatedAttributeGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssociatedAttributeGroups'>]-?: ReturnTypeFrom<'listAssociatedAttributeGroups'>[K]}['attributeGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"attributeGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssociatedAttributeGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAssociatedAttributeGroups' })).toString('base64');
    const member = (Array.isArray(result.attributeGroups ?? []) ? (result.attributeGroups ?? []) : [result.attributeGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociatedResources(params: { [K in keyof ParamsFrom<'listAssociatedResources', { next?: string, limit?: number }>]: ParamsFrom<'listAssociatedResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssociatedResources'>]-?: ReturnTypeFrom<'listAssociatedResources'>[K]}['resources'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"resources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssociatedResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAssociatedResources' })).toString('base64');
    const member = (Array.isArray(result.resources ?? []) ? (result.resources ?? []) : [result.resources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttributeGroups(params: { [K in keyof ParamsFrom<'listAttributeGroups', { next?: string, limit?: number }>]: ParamsFrom<'listAttributeGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttributeGroups'>]-?: ReturnTypeFrom<'listAttributeGroups'>[K]}['attributeGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"attributeGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAttributeGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAttributeGroups' })).toString('base64');
    const member = (Array.isArray(result.attributeGroups ?? []) ? (result.attributeGroups ?? []) : [result.attributeGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttributeGroupsForApplication(params: { [K in keyof ParamsFrom<'listAttributeGroupsForApplication', { next?: string, limit?: number }>]: ParamsFrom<'listAttributeGroupsForApplication', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttributeGroupsForApplication'>]-?: ReturnTypeFrom<'listAttributeGroupsForApplication'>[K]}['attributeGroupsDetails'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"attributeGroupsDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAttributeGroupsForApplication({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAttributeGroupsForApplication' })).toString('base64');
    const member = (Array.isArray(result.attributeGroupsDetails ?? []) ? (result.attributeGroupsDetails ?? []) : [result.attributeGroupsDetails]) as any;
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

  syncResource: (params: RawParamsFrom<'syncResource'>) => Promise<ReturnTypeFrom<'syncResource'>>  = async params => {
  // undefined
    return this.client.syncResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }

  updateAttributeGroup: (params: RawParamsFrom<'updateAttributeGroup'>) => Promise<ReturnTypeFrom<'updateAttributeGroup'>>  = async params => {
  // undefined
    return this.client.updateAttributeGroup(params as any).promise();
  }
  
  static fromClient(client: AWSServiceCatalogAppRegistry): ServiceCatalogAppRegistry {
    return new ServiceCatalogAppRegistry(client) as any;
  }
  
  static client(options?: AWSServiceCatalogAppRegistry.Types.ClientConfiguration): ServiceCatalogAppRegistry {
    return new ServiceCatalogAppRegistry(new AWSServiceCatalogAppRegistry(options)) as any;
  }
}  
