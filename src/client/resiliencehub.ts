import { Request, Resiliencehub as AWSResiliencehub } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSResiliencehub> = AWSResiliencehub[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSResiliencehub> = AWSResiliencehub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSResiliencehub[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSResiliencehub, Extras> = AWSResiliencehub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'resiliencehub';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listAppAssessments","listApps","listResiliencyPolicies","listSuggestedResiliencyPolicies"];
    
  addDraftAppVersionResourceMappings: FunctionTypeFrom<'addDraftAppVersionResourceMappings'>;

  createApp: FunctionTypeFrom<'createApp'>;

  createRecommendationTemplate: FunctionTypeFrom<'createRecommendationTemplate'>;

  createResiliencyPolicy: FunctionTypeFrom<'createResiliencyPolicy'>;

  deleteApp: FunctionTypeFrom<'deleteApp'>;

  deleteAppAssessment: FunctionTypeFrom<'deleteAppAssessment'>;

  deleteRecommendationTemplate: FunctionTypeFrom<'deleteRecommendationTemplate'>;

  deleteResiliencyPolicy: FunctionTypeFrom<'deleteResiliencyPolicy'>;

  describeApp: FunctionTypeFrom<'describeApp'>;

  describeAppAssessment: FunctionTypeFrom<'describeAppAssessment'>;

  describeAppVersionResourcesResolutionStatus: FunctionTypeFrom<'describeAppVersionResourcesResolutionStatus'>;

  describeAppVersionTemplate: FunctionTypeFrom<'describeAppVersionTemplate'>;

  describeDraftAppVersionResourcesImportStatus: FunctionTypeFrom<'describeDraftAppVersionResourcesImportStatus'>;

  describeResiliencyPolicy: FunctionTypeFrom<'describeResiliencyPolicy'>;

  importResourcesToDraftAppVersion: FunctionTypeFrom<'importResourcesToDraftAppVersion'>;

  listAlarmRecommendations: FunctionTypeFrom<'listAlarmRecommendations'>;

  listAppAssessments: FunctionTypeFrom<'listAppAssessments'>;

  listAppComponentCompliances: FunctionTypeFrom<'listAppComponentCompliances'>;

  listAppComponentRecommendations: FunctionTypeFrom<'listAppComponentRecommendations'>;

  listAppVersionResourceMappings: FunctionTypeFrom<'listAppVersionResourceMappings'>;

  listAppVersionResources: FunctionTypeFrom<'listAppVersionResources'>;

  listAppVersions: FunctionTypeFrom<'listAppVersions'>;

  listApps: FunctionTypeFrom<'listApps'>;

  listRecommendationTemplates: FunctionTypeFrom<'listRecommendationTemplates'>;

  listResiliencyPolicies: FunctionTypeFrom<'listResiliencyPolicies'>;

  listSopRecommendations: FunctionTypeFrom<'listSopRecommendations'>;

  listSuggestedResiliencyPolicies: FunctionTypeFrom<'listSuggestedResiliencyPolicies'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTestRecommendations: FunctionTypeFrom<'listTestRecommendations'>;

  listUnsupportedAppVersionResources: FunctionTypeFrom<'listUnsupportedAppVersionResources'>;

  publishAppVersion: FunctionTypeFrom<'publishAppVersion'>;

  putDraftAppVersionTemplate: FunctionTypeFrom<'putDraftAppVersionTemplate'>;

  removeDraftAppVersionResourceMappings: FunctionTypeFrom<'removeDraftAppVersionResourceMappings'>;

  resolveAppVersionResources: FunctionTypeFrom<'resolveAppVersionResources'>;

  startAppAssessment: FunctionTypeFrom<'startAppAssessment'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApp: FunctionTypeFrom<'updateApp'>;

  updateResiliencyPolicy: FunctionTypeFrom<'updateResiliencyPolicy'>
}
 
export class Resiliencehub implements ClientType {
  private constructor(private readonly client: AWSResiliencehub) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'resiliencehub';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listAppAssessments","listApps","listResiliencyPolicies","listSuggestedResiliencyPolicies"] as const;
  
  async addDraftAppVersionResourceMappings(...args: any): Promise<any> {
  // undefined
    return this.client.addDraftAppVersionResourceMappings(...args).promise()
  }

  async createApp(...args: any): Promise<any> {
  // undefined
    return this.client.createApp(...args).promise()
  }

  async createRecommendationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createRecommendationTemplate(...args).promise()
  }

  async createResiliencyPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createResiliencyPolicy(...args).promise()
  }

  async deleteApp(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApp(...args).promise()
  }

  async deleteAppAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppAssessment(...args).promise()
  }

  async deleteRecommendationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecommendationTemplate(...args).promise()
  }

  async deleteResiliencyPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResiliencyPolicy(...args).promise()
  }

  async describeApp(...args: any): Promise<any> {
  // undefined
    return this.client.describeApp(...args).promise()
  }

  async describeAppAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppAssessment(...args).promise()
  }

  async describeAppVersionResourcesResolutionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppVersionResourcesResolutionStatus(...args).promise()
  }

  async describeAppVersionTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppVersionTemplate(...args).promise()
  }

  async describeDraftAppVersionResourcesImportStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeDraftAppVersionResourcesImportStatus(...args).promise()
  }

  async describeResiliencyPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeResiliencyPolicy(...args).promise()
  }

  async importResourcesToDraftAppVersion(...args: any): Promise<any> {
  // undefined
    return this.client.importResourcesToDraftAppVersion(...args).promise()
  }

  async listAlarmRecommendations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAlarmRecommendations(...args).promise()
  }

  async listAppAssessments(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppAssessments(...args).promise()
  }

  async listAppComponentCompliances(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppComponentCompliances(...args).promise()
  }

  async listAppComponentRecommendations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppComponentRecommendations(...args).promise()
  }

  async listAppVersionResourceMappings(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppVersionResourceMappings(...args).promise()
  }

  async listAppVersionResources(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppVersionResources(...args).promise()
  }

  async listAppVersions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppVersions(...args).promise()
  }

  async listApps(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listApps(...args).promise()
  }

  async listRecommendationTemplates(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRecommendationTemplates(...args).promise()
  }

  async listResiliencyPolicies(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listResiliencyPolicies(...args).promise()
  }

  async listSopRecommendations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSopRecommendations(...args).promise()
  }

  async listSuggestedResiliencyPolicies(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSuggestedResiliencyPolicies(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTestRecommendations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTestRecommendations(...args).promise()
  }

  async listUnsupportedAppVersionResources(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listUnsupportedAppVersionResources(...args).promise()
  }

  async publishAppVersion(...args: any): Promise<any> {
  // undefined
    return this.client.publishAppVersion(...args).promise()
  }

  async putDraftAppVersionTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.putDraftAppVersionTemplate(...args).promise()
  }

  async removeDraftAppVersionResourceMappings(...args: any): Promise<any> {
  // undefined
    return this.client.removeDraftAppVersionResourceMappings(...args).promise()
  }

  async resolveAppVersionResources(...args: any): Promise<any> {
  // undefined
    return this.client.resolveAppVersionResources(...args).promise()
  }

  async startAppAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.startAppAssessment(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApp(...args: any): Promise<any> {
  // undefined
    return this.client.updateApp(...args).promise()
  }

  async updateResiliencyPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateResiliencyPolicy(...args).promise()
  }
  
  static fromClient(client: AWSResiliencehub): ClientType {
    return new Resiliencehub(client) as any;
  }
  
  static client(options?: AWSResiliencehub.Types.ClientConfiguration): ClientType {
    return new Resiliencehub(new AWSResiliencehub(options)) as any;
  }
}  
