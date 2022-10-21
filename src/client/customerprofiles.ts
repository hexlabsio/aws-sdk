import { Request, CustomerProfiles as AWSCustomerProfiles } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCustomerProfiles> = AWSCustomerProfiles[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCustomerProfiles> = AWSCustomerProfiles[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCustomerProfiles[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCustomerProfiles, Extras> = AWSCustomerProfiles[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCustomerProfiles> = AWSCustomerProfiles[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CustomerProfiles {
  private constructor(private readonly client: AWSCustomerProfiles) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'profile' as const;
  public readonly global = false as const;
  public readonly category = 'Customer Engagement' as const;
  public readonly topLevelCalls = [] as const;
  
  addProfileKey: (params: RawParamsFrom<'addProfileKey'>) => Promise<ReturnTypeFrom<'addProfileKey'>>  = async params => {
  // undefined
    return this.client.addProfileKey(params as any).promise();
  }

  createDomain: (params: RawParamsFrom<'createDomain'>) => Promise<ReturnTypeFrom<'createDomain'>>  = async params => {
  // undefined
    return this.client.createDomain(params as any).promise();
  }

  createIntegrationWorkflow: (params: RawParamsFrom<'createIntegrationWorkflow'>) => Promise<ReturnTypeFrom<'createIntegrationWorkflow'>>  = async params => {
  // undefined
    return this.client.createIntegrationWorkflow(params as any).promise();
  }

  createProfile: (params: RawParamsFrom<'createProfile'>) => Promise<ReturnTypeFrom<'createProfile'>>  = async params => {
  // undefined
    return this.client.createProfile(params as any).promise();
  }

  deleteDomain: (params: RawParamsFrom<'deleteDomain'>) => Promise<ReturnTypeFrom<'deleteDomain'>>  = async params => {
  // undefined
    return this.client.deleteDomain(params as any).promise();
  }

  deleteIntegration: (params: RawParamsFrom<'deleteIntegration'>) => Promise<ReturnTypeFrom<'deleteIntegration'>>  = async params => {
  // undefined
    return this.client.deleteIntegration(params as any).promise();
  }

  deleteProfile: (params: RawParamsFrom<'deleteProfile'>) => Promise<ReturnTypeFrom<'deleteProfile'>>  = async params => {
  // undefined
    return this.client.deleteProfile(params as any).promise();
  }

  deleteProfileKey: (params: RawParamsFrom<'deleteProfileKey'>) => Promise<ReturnTypeFrom<'deleteProfileKey'>>  = async params => {
  // undefined
    return this.client.deleteProfileKey(params as any).promise();
  }

  deleteProfileObject: (params: RawParamsFrom<'deleteProfileObject'>) => Promise<ReturnTypeFrom<'deleteProfileObject'>>  = async params => {
  // undefined
    return this.client.deleteProfileObject(params as any).promise();
  }

  deleteProfileObjectType: (params: RawParamsFrom<'deleteProfileObjectType'>) => Promise<ReturnTypeFrom<'deleteProfileObjectType'>>  = async params => {
  // undefined
    return this.client.deleteProfileObjectType(params as any).promise();
  }

  deleteWorkflow: (params: RawParamsFrom<'deleteWorkflow'>) => Promise<ReturnTypeFrom<'deleteWorkflow'>>  = async params => {
  // undefined
    return this.client.deleteWorkflow(params as any).promise();
  }

  getAutoMergingPreview: (params: RawParamsFrom<'getAutoMergingPreview'>) => Promise<ReturnTypeFrom<'getAutoMergingPreview'>>  = async params => {
  // undefined
    return this.client.getAutoMergingPreview(params as any).promise();
  }

  getDomain: (params: RawParamsFrom<'getDomain'>) => Promise<ReturnTypeFrom<'getDomain'>>  = async params => {
  // undefined
    return this.client.getDomain(params as any).promise();
  }

  getIdentityResolutionJob: (params: RawParamsFrom<'getIdentityResolutionJob'>) => Promise<ReturnTypeFrom<'getIdentityResolutionJob'>>  = async params => {
  // undefined
    return this.client.getIdentityResolutionJob(params as any).promise();
  }

  getIntegration: (params: RawParamsFrom<'getIntegration'>) => Promise<ReturnTypeFrom<'getIntegration'>>  = async params => {
  // undefined
    return this.client.getIntegration(params as any).promise();
  }

  getMatches: (params: RawParamsFrom<'getMatches'>) => Promise<ReturnTypeFrom<'getMatches'>>  = async params => {
  // undefined
    return this.client.getMatches(params as any).promise();
  }

  getProfileObjectType: (params: RawParamsFrom<'getProfileObjectType'>) => Promise<ReturnTypeFrom<'getProfileObjectType'>>  = async params => {
  // undefined
    return this.client.getProfileObjectType(params as any).promise();
  }

  getProfileObjectTypeTemplate: (params: RawParamsFrom<'getProfileObjectTypeTemplate'>) => Promise<ReturnTypeFrom<'getProfileObjectTypeTemplate'>>  = async params => {
  // undefined
    return this.client.getProfileObjectTypeTemplate(params as any).promise();
  }

  getWorkflow: (params: RawParamsFrom<'getWorkflow'>) => Promise<ReturnTypeFrom<'getWorkflow'>>  = async params => {
  // undefined
    return this.client.getWorkflow(params as any).promise();
  }

  getWorkflowSteps: (params: RawParamsFrom<'getWorkflowSteps'>) => Promise<ReturnTypeFrom<'getWorkflowSteps'>>  = async params => {
  // undefined
    return this.client.getWorkflowSteps(params as any).promise();
  }

  listAccountIntegrations: (params: RawParamsFrom<'listAccountIntegrations'>) => Promise<ReturnTypeFrom<'listAccountIntegrations'>>  = async params => {
  // undefined
    return this.client.listAccountIntegrations(params as any).promise();
  }

  listDomains: (params: RawParamsFrom<'listDomains'>) => Promise<ReturnTypeFrom<'listDomains'>>  = async params => {
  // undefined
    return this.client.listDomains(params as any).promise();
  }

  listIdentityResolutionJobs: (params: RawParamsFrom<'listIdentityResolutionJobs'>) => Promise<ReturnTypeFrom<'listIdentityResolutionJobs'>>  = async params => {
  // undefined
    return this.client.listIdentityResolutionJobs(params as any).promise();
  }

  listIntegrations: (params: RawParamsFrom<'listIntegrations'>) => Promise<ReturnTypeFrom<'listIntegrations'>>  = async params => {
  // undefined
    return this.client.listIntegrations(params as any).promise();
  }

  listProfileObjectTypeTemplates: (params: RawParamsFrom<'listProfileObjectTypeTemplates'>) => Promise<ReturnTypeFrom<'listProfileObjectTypeTemplates'>>  = async params => {
  // undefined
    return this.client.listProfileObjectTypeTemplates(params as any).promise();
  }

  listProfileObjectTypes: (params: RawParamsFrom<'listProfileObjectTypes'>) => Promise<ReturnTypeFrom<'listProfileObjectTypes'>>  = async params => {
  // undefined
    return this.client.listProfileObjectTypes(params as any).promise();
  }

  listProfileObjects: (params: RawParamsFrom<'listProfileObjects'>) => Promise<ReturnTypeFrom<'listProfileObjects'>>  = async params => {
  // undefined
    return this.client.listProfileObjects(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listWorkflows: (params: RawParamsFrom<'listWorkflows'>) => Promise<ReturnTypeFrom<'listWorkflows'>>  = async params => {
  // undefined
    return this.client.listWorkflows(params as any).promise();
  }

  mergeProfiles: (params: RawParamsFrom<'mergeProfiles'>) => Promise<ReturnTypeFrom<'mergeProfiles'>>  = async params => {
  // undefined
    return this.client.mergeProfiles(params as any).promise();
  }

  putIntegration: (params: RawParamsFrom<'putIntegration'>) => Promise<ReturnTypeFrom<'putIntegration'>>  = async params => {
  // undefined
    return this.client.putIntegration(params as any).promise();
  }

  putProfileObject: (params: RawParamsFrom<'putProfileObject'>) => Promise<ReturnTypeFrom<'putProfileObject'>>  = async params => {
  // undefined
    return this.client.putProfileObject(params as any).promise();
  }

  putProfileObjectType: (params: RawParamsFrom<'putProfileObjectType'>) => Promise<ReturnTypeFrom<'putProfileObjectType'>>  = async params => {
  // undefined
    return this.client.putProfileObjectType(params as any).promise();
  }

  searchProfiles: (params: RawParamsFrom<'searchProfiles'>) => Promise<ReturnTypeFrom<'searchProfiles'>>  = async params => {
  // undefined
    return this.client.searchProfiles(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDomain: (params: RawParamsFrom<'updateDomain'>) => Promise<ReturnTypeFrom<'updateDomain'>>  = async params => {
  // undefined
    return this.client.updateDomain(params as any).promise();
  }

  updateProfile: (params: RawParamsFrom<'updateProfile'>) => Promise<ReturnTypeFrom<'updateProfile'>>  = async params => {
  // undefined
    return this.client.updateProfile(params as any).promise();
  }
  
  static fromClient(client: AWSCustomerProfiles): CustomerProfiles {
    return new CustomerProfiles(client) as any;
  }
  
  static client(options?: AWSCustomerProfiles.Types.ClientConfiguration): CustomerProfiles {
    return new CustomerProfiles(new AWSCustomerProfiles(options)) as any;
  }
}  
