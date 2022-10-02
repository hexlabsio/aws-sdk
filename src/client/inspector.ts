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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'inspector';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listAssessmentRuns","listAssessmentTargets","listAssessmentTemplates","listEventSubscriptions","listFindings","listRulesPackages"];
    
  addAttributesToFindings: FunctionTypeFrom<'addAttributesToFindings'>;

  createAssessmentTarget: FunctionTypeFrom<'createAssessmentTarget'>;

  createAssessmentTemplate: FunctionTypeFrom<'createAssessmentTemplate'>;

  createExclusionsPreview: FunctionTypeFrom<'createExclusionsPreview'>;

  createResourceGroup: FunctionTypeFrom<'createResourceGroup'>;

  deleteAssessmentRun: FunctionTypeFrom<'deleteAssessmentRun'>;

  deleteAssessmentTarget: FunctionTypeFrom<'deleteAssessmentTarget'>;

  deleteAssessmentTemplate: FunctionTypeFrom<'deleteAssessmentTemplate'>;

  describeAssessmentRuns: FunctionTypeFrom<'describeAssessmentRuns'>;

  describeAssessmentTargets: FunctionTypeFrom<'describeAssessmentTargets'>;

  describeAssessmentTemplates: FunctionTypeFrom<'describeAssessmentTemplates'>;

  describeCrossAccountAccessRole: FunctionTypeFrom<'describeCrossAccountAccessRole'>;

  describeExclusions: FunctionTypeFrom<'describeExclusions'>;

  describeFindings: FunctionTypeFrom<'describeFindings'>;

  describeResourceGroups: FunctionTypeFrom<'describeResourceGroups'>;

  describeRulesPackages: FunctionTypeFrom<'describeRulesPackages'>;

  getAssessmentReport: FunctionTypeFrom<'getAssessmentReport'>;

  getExclusionsPreview: FunctionTypeFrom<'getExclusionsPreview'>;

  getTelemetryMetadata: FunctionTypeFrom<'getTelemetryMetadata'>;

  listAssessmentRunAgents: FunctionTypeFrom<'listAssessmentRunAgents'>;

  listAssessmentRuns: FunctionTypeFrom<'listAssessmentRuns'>;

  listAssessmentTargets: FunctionTypeFrom<'listAssessmentTargets'>;

  listAssessmentTemplates: FunctionTypeFrom<'listAssessmentTemplates'>;

  listEventSubscriptions: FunctionTypeFrom<'listEventSubscriptions'>;

  listExclusions: FunctionTypeFrom<'listExclusions'>;

  listFindings: FunctionTypeFrom<'listFindings'>;

  listRulesPackages: FunctionTypeFrom<'listRulesPackages'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  previewAgents: FunctionTypeFrom<'previewAgents'>;

  registerCrossAccountAccessRole: FunctionTypeFrom<'registerCrossAccountAccessRole'>;

  removeAttributesFromFindings: FunctionTypeFrom<'removeAttributesFromFindings'>;

  setTagsForResource: FunctionTypeFrom<'setTagsForResource'>;

  startAssessmentRun: FunctionTypeFrom<'startAssessmentRun'>;

  stopAssessmentRun: FunctionTypeFrom<'stopAssessmentRun'>;

  subscribeToEvent: FunctionTypeFrom<'subscribeToEvent'>;

  unsubscribeFromEvent: FunctionTypeFrom<'unsubscribeFromEvent'>;

  updateAssessmentTarget: FunctionTypeFrom<'updateAssessmentTarget'>
}
 
export class Inspector implements ClientType {
  private constructor(private readonly client: AWSInspector) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'inspector';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listAssessmentRuns","listAssessmentTargets","listAssessmentTemplates","listEventSubscriptions","listFindings","listRulesPackages"] as const;
  
  async addAttributesToFindings(...args: any): Promise<any> {
  // undefined
    return this.client.addAttributesToFindings(...args).promise()
  }

  async createAssessmentTarget(...args: any): Promise<any> {
  // undefined
    return this.client.createAssessmentTarget(...args).promise()
  }

  async createAssessmentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createAssessmentTemplate(...args).promise()
  }

  async createExclusionsPreview(...args: any): Promise<any> {
  // undefined
    return this.client.createExclusionsPreview(...args).promise()
  }

  async createResourceGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createResourceGroup(...args).promise()
  }

  async deleteAssessmentRun(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssessmentRun(...args).promise()
  }

  async deleteAssessmentTarget(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssessmentTarget(...args).promise()
  }

  async deleteAssessmentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssessmentTemplate(...args).promise()
  }

  async describeAssessmentRuns(...args: any): Promise<any> {
  // undefined
    return this.client.describeAssessmentRuns(...args).promise()
  }

  async describeAssessmentTargets(...args: any): Promise<any> {
  // undefined
    return this.client.describeAssessmentTargets(...args).promise()
  }

  async describeAssessmentTemplates(...args: any): Promise<any> {
  // undefined
    return this.client.describeAssessmentTemplates(...args).promise()
  }

  async describeCrossAccountAccessRole(...args: any): Promise<any> {
  // undefined
    return this.client.describeCrossAccountAccessRole(...args).promise()
  }

  async describeExclusions(...args: any): Promise<any> {
  // undefined
    return this.client.describeExclusions(...args).promise()
  }

  async describeFindings(...args: any): Promise<any> {
  // undefined
    return this.client.describeFindings(...args).promise()
  }

  async describeResourceGroups(...args: any): Promise<any> {
  // undefined
    return this.client.describeResourceGroups(...args).promise()
  }

  async describeRulesPackages(...args: any): Promise<any> {
  // undefined
    return this.client.describeRulesPackages(...args).promise()
  }

  async getAssessmentReport(...args: any): Promise<any> {
  // undefined
    return this.client.getAssessmentReport(...args).promise()
  }

  async getExclusionsPreview(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getExclusionsPreview(...args).promise()
  }

  async getTelemetryMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getTelemetryMetadata(...args).promise()
  }

  async listAssessmentRunAgents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentRunAgents(...args).promise()
  }

  async listAssessmentRuns(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentRuns(...args).promise()
  }

  async listAssessmentTargets(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentTargets(...args).promise()
  }

  async listAssessmentTemplates(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentTemplates(...args).promise()
  }

  async listEventSubscriptions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listEventSubscriptions(...args).promise()
  }

  async listExclusions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listExclusions(...args).promise()
  }

  async listFindings(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listFindings(...args).promise()
  }

  async listRulesPackages(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRulesPackages(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async previewAgents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.previewAgents(...args).promise()
  }

  async registerCrossAccountAccessRole(...args: any): Promise<any> {
  // undefined
    return this.client.registerCrossAccountAccessRole(...args).promise()
  }

  async removeAttributesFromFindings(...args: any): Promise<any> {
  // undefined
    return this.client.removeAttributesFromFindings(...args).promise()
  }

  async setTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.setTagsForResource(...args).promise()
  }

  async startAssessmentRun(...args: any): Promise<any> {
  // undefined
    return this.client.startAssessmentRun(...args).promise()
  }

  async stopAssessmentRun(...args: any): Promise<any> {
  // undefined
    return this.client.stopAssessmentRun(...args).promise()
  }

  async subscribeToEvent(...args: any): Promise<any> {
  // undefined
    return this.client.subscribeToEvent(...args).promise()
  }

  async unsubscribeFromEvent(...args: any): Promise<any> {
  // undefined
    return this.client.unsubscribeFromEvent(...args).promise()
  }

  async updateAssessmentTarget(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssessmentTarget(...args).promise()
  }
  
  static fromClient(client: AWSInspector): ClientType {
    return new Inspector(client) as any;
  }
  
  static client(options?: AWSInspector.Types.ClientConfiguration): ClientType {
    return new Inspector(new AWSInspector(options)) as any;
  }
}  
