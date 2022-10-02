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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'servicecatalog-appregistry';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listApplications","listAttributeGroups"];
    
  associateAttributeGroup: FunctionTypeFrom<'associateAttributeGroup'>;

  associateResource: FunctionTypeFrom<'associateResource'>;

  createApplication: FunctionTypeFrom<'createApplication'>;

  createAttributeGroup: FunctionTypeFrom<'createAttributeGroup'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteAttributeGroup: FunctionTypeFrom<'deleteAttributeGroup'>;

  disassociateAttributeGroup: FunctionTypeFrom<'disassociateAttributeGroup'>;

  disassociateResource: FunctionTypeFrom<'disassociateResource'>;

  getApplication: FunctionTypeFrom<'getApplication'>;

  getAssociatedResource: FunctionTypeFrom<'getAssociatedResource'>;

  getAttributeGroup: FunctionTypeFrom<'getAttributeGroup'>;

  listApplications(params: { [K in keyof Omit<ParamsFrom<'listApplications', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'] }>
  listApplications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'] }>;

  listAssociatedAttributeGroups(params: { [K in keyof Omit<ParamsFrom<'listAssociatedAttributeGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAssociatedAttributeGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssociatedAttributeGroups'>]-?: ReturnTypeFrom<'listAssociatedAttributeGroups'>[K]}['attributeGroups'] }>
  ;

  listAssociatedResources(params: { [K in keyof Omit<ParamsFrom<'listAssociatedResources', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAssociatedResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssociatedResources'>]-?: ReturnTypeFrom<'listAssociatedResources'>[K]}['resources'] }>
  ;

  listAttributeGroups(params: { [K in keyof Omit<ParamsFrom<'listAttributeGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAttributeGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttributeGroups'>]-?: ReturnTypeFrom<'listAttributeGroups'>[K]}['attributeGroups'] }>
  listAttributeGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttributeGroups'>]-?: ReturnTypeFrom<'listAttributeGroups'>[K]}['attributeGroups'] }>;

  listAttributeGroupsForApplication(params: { [K in keyof Omit<ParamsFrom<'listAttributeGroupsForApplication', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAttributeGroupsForApplication', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttributeGroupsForApplication'>]-?: ReturnTypeFrom<'listAttributeGroupsForApplication'>[K]}['attributeGroupsDetails'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  syncResource: FunctionTypeFrom<'syncResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>;

  updateAttributeGroup: FunctionTypeFrom<'updateAttributeGroup'>
}
 
export class ServiceCatalogAppRegistry implements ClientType {
  private constructor(private readonly client: AWSServiceCatalogAppRegistry) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'servicecatalog-appregistry';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listApplications","listAttributeGroups"] as const;
  
  async associateAttributeGroup(...args: any): Promise<any> {
  // undefined
    return this.client.associateAttributeGroup(...args).promise()
  }

  async associateResource(...args: any): Promise<any> {
  // undefined
    return this.client.associateResource(...args).promise()
  }

  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createAttributeGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createAttributeGroup(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async deleteAttributeGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAttributeGroup(...args).promise()
  }

  async disassociateAttributeGroup(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateAttributeGroup(...args).promise()
  }

  async disassociateResource(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateResource(...args).promise()
  }

  async getApplication(...args: any): Promise<any> {
  // undefined
    return this.client.getApplication(...args).promise()
  }

  async getAssociatedResource(...args: any): Promise<any> {
  // undefined
    return this.client.getAssociatedResource(...args).promise()
  }

  async getAttributeGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getAttributeGroup(...args).promise()
  }

  async listApplications(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.applications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociatedAttributeGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"attributeGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssociatedAttributeGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.attributeGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociatedResources(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"resources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssociatedResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.resources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttributeGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"attributeGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAttributeGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.attributeGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttributeGroupsForApplication(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"attributeGroupsDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAttributeGroupsForApplication(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.attributeGroupsDetails ?? [];
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

  async syncResource(...args: any): Promise<any> {
  // undefined
    return this.client.syncResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }

  async updateAttributeGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateAttributeGroup(...args).promise()
  }
  
  static fromClient(client: AWSServiceCatalogAppRegistry): ClientType {
    return new ServiceCatalogAppRegistry(client) as any;
  }
  
  static client(options?: AWSServiceCatalogAppRegistry.Types.ClientConfiguration): ClientType {
    return new ServiceCatalogAppRegistry(new AWSServiceCatalogAppRegistry(options)) as any;
  }
}  
