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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'profile';
    global: false;
    category: 'Customer Engagement'
    topLevelCalls: readonly [];
    
  addProfileKey: FunctionTypeFrom<'addProfileKey'>;

  createDomain: FunctionTypeFrom<'createDomain'>;

  createIntegrationWorkflow: FunctionTypeFrom<'createIntegrationWorkflow'>;

  createProfile: FunctionTypeFrom<'createProfile'>;

  deleteDomain: FunctionTypeFrom<'deleteDomain'>;

  deleteIntegration: FunctionTypeFrom<'deleteIntegration'>;

  deleteProfile: FunctionTypeFrom<'deleteProfile'>;

  deleteProfileKey: FunctionTypeFrom<'deleteProfileKey'>;

  deleteProfileObject: FunctionTypeFrom<'deleteProfileObject'>;

  deleteProfileObjectType: FunctionTypeFrom<'deleteProfileObjectType'>;

  deleteWorkflow: FunctionTypeFrom<'deleteWorkflow'>;

  getAutoMergingPreview: FunctionTypeFrom<'getAutoMergingPreview'>;

  getDomain: FunctionTypeFrom<'getDomain'>;

  getIdentityResolutionJob: FunctionTypeFrom<'getIdentityResolutionJob'>;

  getIntegration: FunctionTypeFrom<'getIntegration'>;

  getMatches: FunctionTypeFrom<'getMatches'>;

  getProfileObjectType: FunctionTypeFrom<'getProfileObjectType'>;

  getProfileObjectTypeTemplate: FunctionTypeFrom<'getProfileObjectTypeTemplate'>;

  getWorkflow: FunctionTypeFrom<'getWorkflow'>;

  getWorkflowSteps: FunctionTypeFrom<'getWorkflowSteps'>;

  listAccountIntegrations: FunctionTypeFrom<'listAccountIntegrations'>;

  listDomains: FunctionTypeFrom<'listDomains'>;

  listIdentityResolutionJobs: FunctionTypeFrom<'listIdentityResolutionJobs'>;

  listIntegrations: FunctionTypeFrom<'listIntegrations'>;

  listProfileObjectTypeTemplates: FunctionTypeFrom<'listProfileObjectTypeTemplates'>;

  listProfileObjectTypes: FunctionTypeFrom<'listProfileObjectTypes'>;

  listProfileObjects: FunctionTypeFrom<'listProfileObjects'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWorkflows: FunctionTypeFrom<'listWorkflows'>;

  mergeProfiles: FunctionTypeFrom<'mergeProfiles'>;

  putIntegration: FunctionTypeFrom<'putIntegration'>;

  putProfileObject: FunctionTypeFrom<'putProfileObject'>;

  putProfileObjectType: FunctionTypeFrom<'putProfileObjectType'>;

  searchProfiles: FunctionTypeFrom<'searchProfiles'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDomain: FunctionTypeFrom<'updateDomain'>;

  updateProfile: FunctionTypeFrom<'updateProfile'>
}
 
export class CustomerProfiles implements ClientType {
  private constructor(private readonly client: AWSCustomerProfiles) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'profile';
  public readonly global = false;
  public readonly category = 'Customer Engagement';
  public readonly topLevelCalls = [] as const;
  
  async addProfileKey(...args: any): Promise<any> {
  // undefined
    return this.client.addProfileKey(...args).promise()
  }

  async createDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createDomain(...args).promise()
  }

  async createIntegrationWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.createIntegrationWorkflow(...args).promise()
  }

  async createProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createProfile(...args).promise()
  }

  async deleteDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomain(...args).promise()
  }

  async deleteIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIntegration(...args).promise()
  }

  async deleteProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProfile(...args).promise()
  }

  async deleteProfileKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProfileKey(...args).promise()
  }

  async deleteProfileObject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProfileObject(...args).promise()
  }

  async deleteProfileObjectType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProfileObjectType(...args).promise()
  }

  async deleteWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkflow(...args).promise()
  }

  async getAutoMergingPreview(...args: any): Promise<any> {
  // undefined
    return this.client.getAutoMergingPreview(...args).promise()
  }

  async getDomain(...args: any): Promise<any> {
  // undefined
    return this.client.getDomain(...args).promise()
  }

  async getIdentityResolutionJob(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityResolutionJob(...args).promise()
  }

  async getIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.getIntegration(...args).promise()
  }

  async getMatches(...args: any): Promise<any> {
  // undefined
    return this.client.getMatches(...args).promise()
  }

  async getProfileObjectType(...args: any): Promise<any> {
  // undefined
    return this.client.getProfileObjectType(...args).promise()
  }

  async getProfileObjectTypeTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getProfileObjectTypeTemplate(...args).promise()
  }

  async getWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkflow(...args).promise()
  }

  async getWorkflowSteps(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkflowSteps(...args).promise()
  }

  async listAccountIntegrations(...args: any): Promise<any> {
  // undefined
    return this.client.listAccountIntegrations(...args).promise()
  }

  async listDomains(...args: any): Promise<any> {
  // undefined
    return this.client.listDomains(...args).promise()
  }

  async listIdentityResolutionJobs(...args: any): Promise<any> {
  // undefined
    return this.client.listIdentityResolutionJobs(...args).promise()
  }

  async listIntegrations(...args: any): Promise<any> {
  // undefined
    return this.client.listIntegrations(...args).promise()
  }

  async listProfileObjectTypeTemplates(...args: any): Promise<any> {
  // undefined
    return this.client.listProfileObjectTypeTemplates(...args).promise()
  }

  async listProfileObjectTypes(...args: any): Promise<any> {
  // undefined
    return this.client.listProfileObjectTypes(...args).promise()
  }

  async listProfileObjects(...args: any): Promise<any> {
  // undefined
    return this.client.listProfileObjects(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listWorkflows(...args: any): Promise<any> {
  // undefined
    return this.client.listWorkflows(...args).promise()
  }

  async mergeProfiles(...args: any): Promise<any> {
  // undefined
    return this.client.mergeProfiles(...args).promise()
  }

  async putIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.putIntegration(...args).promise()
  }

  async putProfileObject(...args: any): Promise<any> {
  // undefined
    return this.client.putProfileObject(...args).promise()
  }

  async putProfileObjectType(...args: any): Promise<any> {
  // undefined
    return this.client.putProfileObjectType(...args).promise()
  }

  async searchProfiles(...args: any): Promise<any> {
  // undefined
    return this.client.searchProfiles(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDomain(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomain(...args).promise()
  }

  async updateProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateProfile(...args).promise()
  }
  
  static fromClient(client: AWSCustomerProfiles): ClientType {
    return new CustomerProfiles(client) as any;
  }
  
  static client(options?: AWSCustomerProfiles.Types.ClientConfiguration): ClientType {
    return new CustomerProfiles(new AWSCustomerProfiles(options)) as any;
  }
}  
