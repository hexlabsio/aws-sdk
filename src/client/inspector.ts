import { Request, Inspector as AWSInspector } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSInspector> = AWSInspector[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSInspector> = AWSInspector[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSInspector[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSInspector, Extras> = AWSInspector[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSInspector> = AWSInspector[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Inspector {
  private constructor(private readonly client: AWSInspector) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'inspector' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listAssessmentRuns","listAssessmentTargets","listAssessmentTemplates","listEventSubscriptions","listFindings","listRulesPackages"] as const;
  
  addAttributesToFindings: (params: RawParamsFrom<'addAttributesToFindings'>) => Promise<ReturnTypeFrom<'addAttributesToFindings'>>  = async params => {
  // undefined
    return this.client.addAttributesToFindings(params as any).promise();
  }

  createAssessmentTarget: (params: RawParamsFrom<'createAssessmentTarget'>) => Promise<ReturnTypeFrom<'createAssessmentTarget'>>  = async params => {
  // undefined
    return this.client.createAssessmentTarget(params as any).promise();
  }

  createAssessmentTemplate: (params: RawParamsFrom<'createAssessmentTemplate'>) => Promise<ReturnTypeFrom<'createAssessmentTemplate'>>  = async params => {
  // undefined
    return this.client.createAssessmentTemplate(params as any).promise();
  }

  createExclusionsPreview: (params: RawParamsFrom<'createExclusionsPreview'>) => Promise<ReturnTypeFrom<'createExclusionsPreview'>>  = async params => {
  // undefined
    return this.client.createExclusionsPreview(params as any).promise();
  }

  createResourceGroup: (params: RawParamsFrom<'createResourceGroup'>) => Promise<ReturnTypeFrom<'createResourceGroup'>>  = async params => {
  // undefined
    return this.client.createResourceGroup(params as any).promise();
  }

  deleteAssessmentRun: (params: RawParamsFrom<'deleteAssessmentRun'>) => Promise<ReturnTypeFrom<'deleteAssessmentRun'>>  = async params => {
  // undefined
    return this.client.deleteAssessmentRun(params as any).promise();
  }

  deleteAssessmentTarget: (params: RawParamsFrom<'deleteAssessmentTarget'>) => Promise<ReturnTypeFrom<'deleteAssessmentTarget'>>  = async params => {
  // undefined
    return this.client.deleteAssessmentTarget(params as any).promise();
  }

  deleteAssessmentTemplate: (params: RawParamsFrom<'deleteAssessmentTemplate'>) => Promise<ReturnTypeFrom<'deleteAssessmentTemplate'>>  = async params => {
  // undefined
    return this.client.deleteAssessmentTemplate(params as any).promise();
  }

  describeAssessmentRuns: (params: RawParamsFrom<'describeAssessmentRuns'>) => Promise<ReturnTypeFrom<'describeAssessmentRuns'>>  = async params => {
  // undefined
    return this.client.describeAssessmentRuns(params as any).promise();
  }

  describeAssessmentTargets: (params: RawParamsFrom<'describeAssessmentTargets'>) => Promise<ReturnTypeFrom<'describeAssessmentTargets'>>  = async params => {
  // undefined
    return this.client.describeAssessmentTargets(params as any).promise();
  }

  describeAssessmentTemplates: (params: RawParamsFrom<'describeAssessmentTemplates'>) => Promise<ReturnTypeFrom<'describeAssessmentTemplates'>>  = async params => {
  // undefined
    return this.client.describeAssessmentTemplates(params as any).promise();
  }

  describeCrossAccountAccessRole: (params: RawParamsFrom<'describeCrossAccountAccessRole'>) => Promise<ReturnTypeFrom<'describeCrossAccountAccessRole'>>  = async params => {
  // undefined
    return this.client.describeCrossAccountAccessRole(params as any).promise();
  }

  describeExclusions: (params: RawParamsFrom<'describeExclusions'>) => Promise<ReturnTypeFrom<'describeExclusions'>>  = async params => {
  // undefined
    return this.client.describeExclusions(params as any).promise();
  }

  describeFindings: (params: RawParamsFrom<'describeFindings'>) => Promise<ReturnTypeFrom<'describeFindings'>>  = async params => {
  // undefined
    return this.client.describeFindings(params as any).promise();
  }

  describeResourceGroups: (params: RawParamsFrom<'describeResourceGroups'>) => Promise<ReturnTypeFrom<'describeResourceGroups'>>  = async params => {
  // undefined
    return this.client.describeResourceGroups(params as any).promise();
  }

  describeRulesPackages: (params: RawParamsFrom<'describeRulesPackages'>) => Promise<ReturnTypeFrom<'describeRulesPackages'>>  = async params => {
  // undefined
    return this.client.describeRulesPackages(params as any).promise();
  }

  getAssessmentReport: (params: RawParamsFrom<'getAssessmentReport'>) => Promise<ReturnTypeFrom<'getAssessmentReport'>>  = async params => {
  // undefined
    return this.client.getAssessmentReport(params as any).promise();
  }

  getExclusionsPreview: (params: RawParamsFrom<'getExclusionsPreview'>) => Promise<ReturnTypeFrom<'getExclusionsPreview'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getExclusionsPreview(params as any).promise();
  }

  getTelemetryMetadata: (params: RawParamsFrom<'getTelemetryMetadata'>) => Promise<ReturnTypeFrom<'getTelemetryMetadata'>>  = async params => {
  // undefined
    return this.client.getTelemetryMetadata(params as any).promise();
  }

  listAssessmentRunAgents: (params: RawParamsFrom<'listAssessmentRunAgents'>) => Promise<ReturnTypeFrom<'listAssessmentRunAgents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentRunAgents(params as any).promise();
  }

  listAssessmentRuns: (params: RawParamsFrom<'listAssessmentRuns'>) => Promise<ReturnTypeFrom<'listAssessmentRuns'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentRuns(params as any).promise();
  }

  listAssessmentTargets: (params: RawParamsFrom<'listAssessmentTargets'>) => Promise<ReturnTypeFrom<'listAssessmentTargets'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentTargets(params as any).promise();
  }

  listAssessmentTemplates: (params: RawParamsFrom<'listAssessmentTemplates'>) => Promise<ReturnTypeFrom<'listAssessmentTemplates'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentTemplates(params as any).promise();
  }

  listEventSubscriptions: (params: RawParamsFrom<'listEventSubscriptions'>) => Promise<ReturnTypeFrom<'listEventSubscriptions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listEventSubscriptions(params as any).promise();
  }

  listExclusions: (params: RawParamsFrom<'listExclusions'>) => Promise<ReturnTypeFrom<'listExclusions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listExclusions(params as any).promise();
  }

  listFindings: (params: RawParamsFrom<'listFindings'>) => Promise<ReturnTypeFrom<'listFindings'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listFindings(params as any).promise();
  }

  listRulesPackages: (params: RawParamsFrom<'listRulesPackages'>) => Promise<ReturnTypeFrom<'listRulesPackages'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRulesPackages(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  previewAgents: (params: RawParamsFrom<'previewAgents'>) => Promise<ReturnTypeFrom<'previewAgents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.previewAgents(params as any).promise();
  }

  registerCrossAccountAccessRole: (params: RawParamsFrom<'registerCrossAccountAccessRole'>) => Promise<ReturnTypeFrom<'registerCrossAccountAccessRole'>>  = async params => {
  // undefined
    return this.client.registerCrossAccountAccessRole(params as any).promise();
  }

  removeAttributesFromFindings: (params: RawParamsFrom<'removeAttributesFromFindings'>) => Promise<ReturnTypeFrom<'removeAttributesFromFindings'>>  = async params => {
  // undefined
    return this.client.removeAttributesFromFindings(params as any).promise();
  }

  setTagsForResource: (params: RawParamsFrom<'setTagsForResource'>) => Promise<ReturnTypeFrom<'setTagsForResource'>>  = async params => {
  // undefined
    return this.client.setTagsForResource(params as any).promise();
  }

  startAssessmentRun: (params: RawParamsFrom<'startAssessmentRun'>) => Promise<ReturnTypeFrom<'startAssessmentRun'>>  = async params => {
  // undefined
    return this.client.startAssessmentRun(params as any).promise();
  }

  stopAssessmentRun: (params: RawParamsFrom<'stopAssessmentRun'>) => Promise<ReturnTypeFrom<'stopAssessmentRun'>>  = async params => {
  // undefined
    return this.client.stopAssessmentRun(params as any).promise();
  }

  subscribeToEvent: (params: RawParamsFrom<'subscribeToEvent'>) => Promise<ReturnTypeFrom<'subscribeToEvent'>>  = async params => {
  // undefined
    return this.client.subscribeToEvent(params as any).promise();
  }

  unsubscribeFromEvent: (params: RawParamsFrom<'unsubscribeFromEvent'>) => Promise<ReturnTypeFrom<'unsubscribeFromEvent'>>  = async params => {
  // undefined
    return this.client.unsubscribeFromEvent(params as any).promise();
  }

  updateAssessmentTarget: (params: RawParamsFrom<'updateAssessmentTarget'>) => Promise<ReturnTypeFrom<'updateAssessmentTarget'>>  = async params => {
  // undefined
    return this.client.updateAssessmentTarget(params as any).promise();
  }
  
  static fromClient(client: AWSInspector): Inspector {
    return new Inspector(client) as any;
  }
  
  static client(options?: AWSInspector.Types.ClientConfiguration): Inspector {
    return new Inspector(new AWSInspector(options)) as any;
  }
}  
