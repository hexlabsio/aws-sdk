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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSResiliencehub> = AWSResiliencehub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Resiliencehub {
  private constructor(private readonly client: AWSResiliencehub) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'resiliencehub' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listAppAssessments","listApps","listResiliencyPolicies","listSuggestedResiliencyPolicies"] as const;
  
  addDraftAppVersionResourceMappings: (params: RawParamsFrom<'addDraftAppVersionResourceMappings'>) => Promise<ReturnTypeFrom<'addDraftAppVersionResourceMappings'>>  = async params => {
  // undefined
    return this.client.addDraftAppVersionResourceMappings(params as any).promise();
  }

  createApp: (params: RawParamsFrom<'createApp'>) => Promise<ReturnTypeFrom<'createApp'>>  = async params => {
  // undefined
    return this.client.createApp(params as any).promise();
  }

  createRecommendationTemplate: (params: RawParamsFrom<'createRecommendationTemplate'>) => Promise<ReturnTypeFrom<'createRecommendationTemplate'>>  = async params => {
  // undefined
    return this.client.createRecommendationTemplate(params as any).promise();
  }

  createResiliencyPolicy: (params: RawParamsFrom<'createResiliencyPolicy'>) => Promise<ReturnTypeFrom<'createResiliencyPolicy'>>  = async params => {
  // undefined
    return this.client.createResiliencyPolicy(params as any).promise();
  }

  deleteApp: (params: RawParamsFrom<'deleteApp'>) => Promise<ReturnTypeFrom<'deleteApp'>>  = async params => {
  // undefined
    return this.client.deleteApp(params as any).promise();
  }

  deleteAppAssessment: (params: RawParamsFrom<'deleteAppAssessment'>) => Promise<ReturnTypeFrom<'deleteAppAssessment'>>  = async params => {
  // undefined
    return this.client.deleteAppAssessment(params as any).promise();
  }

  deleteRecommendationTemplate: (params: RawParamsFrom<'deleteRecommendationTemplate'>) => Promise<ReturnTypeFrom<'deleteRecommendationTemplate'>>  = async params => {
  // undefined
    return this.client.deleteRecommendationTemplate(params as any).promise();
  }

  deleteResiliencyPolicy: (params: RawParamsFrom<'deleteResiliencyPolicy'>) => Promise<ReturnTypeFrom<'deleteResiliencyPolicy'>>  = async params => {
  // undefined
    return this.client.deleteResiliencyPolicy(params as any).promise();
  }

  describeApp: (params: RawParamsFrom<'describeApp'>) => Promise<ReturnTypeFrom<'describeApp'>>  = async params => {
  // undefined
    return this.client.describeApp(params as any).promise();
  }

  describeAppAssessment: (params: RawParamsFrom<'describeAppAssessment'>) => Promise<ReturnTypeFrom<'describeAppAssessment'>>  = async params => {
  // undefined
    return this.client.describeAppAssessment(params as any).promise();
  }

  describeAppVersionResourcesResolutionStatus: (params: RawParamsFrom<'describeAppVersionResourcesResolutionStatus'>) => Promise<ReturnTypeFrom<'describeAppVersionResourcesResolutionStatus'>>  = async params => {
  // undefined
    return this.client.describeAppVersionResourcesResolutionStatus(params as any).promise();
  }

  describeAppVersionTemplate: (params: RawParamsFrom<'describeAppVersionTemplate'>) => Promise<ReturnTypeFrom<'describeAppVersionTemplate'>>  = async params => {
  // undefined
    return this.client.describeAppVersionTemplate(params as any).promise();
  }

  describeDraftAppVersionResourcesImportStatus: (params: RawParamsFrom<'describeDraftAppVersionResourcesImportStatus'>) => Promise<ReturnTypeFrom<'describeDraftAppVersionResourcesImportStatus'>>  = async params => {
  // undefined
    return this.client.describeDraftAppVersionResourcesImportStatus(params as any).promise();
  }

  describeResiliencyPolicy: (params: RawParamsFrom<'describeResiliencyPolicy'>) => Promise<ReturnTypeFrom<'describeResiliencyPolicy'>>  = async params => {
  // undefined
    return this.client.describeResiliencyPolicy(params as any).promise();
  }

  importResourcesToDraftAppVersion: (params: RawParamsFrom<'importResourcesToDraftAppVersion'>) => Promise<ReturnTypeFrom<'importResourcesToDraftAppVersion'>>  = async params => {
  // undefined
    return this.client.importResourcesToDraftAppVersion(params as any).promise();
  }

  listAlarmRecommendations: (params: RawParamsFrom<'listAlarmRecommendations'>) => Promise<ReturnTypeFrom<'listAlarmRecommendations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAlarmRecommendations(params as any).promise();
  }

  listAppAssessments: (params: RawParamsFrom<'listAppAssessments'>) => Promise<ReturnTypeFrom<'listAppAssessments'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppAssessments(params as any).promise();
  }

  listAppComponentCompliances: (params: RawParamsFrom<'listAppComponentCompliances'>) => Promise<ReturnTypeFrom<'listAppComponentCompliances'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppComponentCompliances(params as any).promise();
  }

  listAppComponentRecommendations: (params: RawParamsFrom<'listAppComponentRecommendations'>) => Promise<ReturnTypeFrom<'listAppComponentRecommendations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppComponentRecommendations(params as any).promise();
  }

  listAppVersionResourceMappings: (params: RawParamsFrom<'listAppVersionResourceMappings'>) => Promise<ReturnTypeFrom<'listAppVersionResourceMappings'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppVersionResourceMappings(params as any).promise();
  }

  listAppVersionResources: (params: RawParamsFrom<'listAppVersionResources'>) => Promise<ReturnTypeFrom<'listAppVersionResources'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppVersionResources(params as any).promise();
  }

  listAppVersions: (params: RawParamsFrom<'listAppVersions'>) => Promise<ReturnTypeFrom<'listAppVersions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAppVersions(params as any).promise();
  }

  listApps: (params: RawParamsFrom<'listApps'>) => Promise<ReturnTypeFrom<'listApps'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listApps(params as any).promise();
  }

  listRecommendationTemplates: (params: RawParamsFrom<'listRecommendationTemplates'>) => Promise<ReturnTypeFrom<'listRecommendationTemplates'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRecommendationTemplates(params as any).promise();
  }

  listResiliencyPolicies: (params: RawParamsFrom<'listResiliencyPolicies'>) => Promise<ReturnTypeFrom<'listResiliencyPolicies'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listResiliencyPolicies(params as any).promise();
  }

  listSopRecommendations: (params: RawParamsFrom<'listSopRecommendations'>) => Promise<ReturnTypeFrom<'listSopRecommendations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSopRecommendations(params as any).promise();
  }

  listSuggestedResiliencyPolicies: (params: RawParamsFrom<'listSuggestedResiliencyPolicies'>) => Promise<ReturnTypeFrom<'listSuggestedResiliencyPolicies'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSuggestedResiliencyPolicies(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTestRecommendations: (params: RawParamsFrom<'listTestRecommendations'>) => Promise<ReturnTypeFrom<'listTestRecommendations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTestRecommendations(params as any).promise();
  }

  listUnsupportedAppVersionResources: (params: RawParamsFrom<'listUnsupportedAppVersionResources'>) => Promise<ReturnTypeFrom<'listUnsupportedAppVersionResources'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listUnsupportedAppVersionResources(params as any).promise();
  }

  publishAppVersion: (params: RawParamsFrom<'publishAppVersion'>) => Promise<ReturnTypeFrom<'publishAppVersion'>>  = async params => {
  // undefined
    return this.client.publishAppVersion(params as any).promise();
  }

  putDraftAppVersionTemplate: (params: RawParamsFrom<'putDraftAppVersionTemplate'>) => Promise<ReturnTypeFrom<'putDraftAppVersionTemplate'>>  = async params => {
  // undefined
    return this.client.putDraftAppVersionTemplate(params as any).promise();
  }

  removeDraftAppVersionResourceMappings: (params: RawParamsFrom<'removeDraftAppVersionResourceMappings'>) => Promise<ReturnTypeFrom<'removeDraftAppVersionResourceMappings'>>  = async params => {
  // undefined
    return this.client.removeDraftAppVersionResourceMappings(params as any).promise();
  }

  resolveAppVersionResources: (params: RawParamsFrom<'resolveAppVersionResources'>) => Promise<ReturnTypeFrom<'resolveAppVersionResources'>>  = async params => {
  // undefined
    return this.client.resolveAppVersionResources(params as any).promise();
  }

  startAppAssessment: (params: RawParamsFrom<'startAppAssessment'>) => Promise<ReturnTypeFrom<'startAppAssessment'>>  = async params => {
  // undefined
    return this.client.startAppAssessment(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApp: (params: RawParamsFrom<'updateApp'>) => Promise<ReturnTypeFrom<'updateApp'>>  = async params => {
  // undefined
    return this.client.updateApp(params as any).promise();
  }

  updateResiliencyPolicy: (params: RawParamsFrom<'updateResiliencyPolicy'>) => Promise<ReturnTypeFrom<'updateResiliencyPolicy'>>  = async params => {
  // undefined
    return this.client.updateResiliencyPolicy(params as any).promise();
  }
  
  static fromClient(client: AWSResiliencehub): Resiliencehub {
    return new Resiliencehub(client) as any;
  }
  
  static client(options?: AWSResiliencehub.Types.ClientConfiguration): Resiliencehub {
    return new Resiliencehub(new AWSResiliencehub(options)) as any;
  }
}  
