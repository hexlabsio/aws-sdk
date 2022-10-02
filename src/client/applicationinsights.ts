import { Request, ApplicationInsights as AWSApplicationInsights } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSApplicationInsights> = AWSApplicationInsights[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSApplicationInsights> = AWSApplicationInsights[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSApplicationInsights[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSApplicationInsights, Extras> = AWSApplicationInsights[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'applicationinsights';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listApplications","listConfigurationHistory","listProblems"];
    
  createApplication: FunctionTypeFrom<'createApplication'>;

  createComponent: FunctionTypeFrom<'createComponent'>;

  createLogPattern: FunctionTypeFrom<'createLogPattern'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteComponent: FunctionTypeFrom<'deleteComponent'>;

  deleteLogPattern: FunctionTypeFrom<'deleteLogPattern'>;

  describeApplication: FunctionTypeFrom<'describeApplication'>;

  describeComponent: FunctionTypeFrom<'describeComponent'>;

  describeComponentConfiguration: FunctionTypeFrom<'describeComponentConfiguration'>;

  describeComponentConfigurationRecommendation: FunctionTypeFrom<'describeComponentConfigurationRecommendation'>;

  describeLogPattern: FunctionTypeFrom<'describeLogPattern'>;

  describeObservation: FunctionTypeFrom<'describeObservation'>;

  describeProblem: FunctionTypeFrom<'describeProblem'>;

  describeProblemObservations: FunctionTypeFrom<'describeProblemObservations'>;

  listApplications: FunctionTypeFrom<'listApplications'>;

  listComponents: FunctionTypeFrom<'listComponents'>;

  listConfigurationHistory: FunctionTypeFrom<'listConfigurationHistory'>;

  listLogPatternSets: FunctionTypeFrom<'listLogPatternSets'>;

  listLogPatterns: FunctionTypeFrom<'listLogPatterns'>;

  listProblems: FunctionTypeFrom<'listProblems'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>;

  updateComponent: FunctionTypeFrom<'updateComponent'>;

  updateComponentConfiguration: FunctionTypeFrom<'updateComponentConfiguration'>;

  updateLogPattern: FunctionTypeFrom<'updateLogPattern'>
}
 
export class ApplicationInsights implements ClientType {
  private constructor(private readonly client: AWSApplicationInsights) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'applicationinsights';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listApplications","listConfigurationHistory","listProblems"] as const;
  
  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createComponent(...args: any): Promise<any> {
  // undefined
    return this.client.createComponent(...args).promise()
  }

  async createLogPattern(...args: any): Promise<any> {
  // undefined
    return this.client.createLogPattern(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async deleteComponent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteComponent(...args).promise()
  }

  async deleteLogPattern(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLogPattern(...args).promise()
  }

  async describeApplication(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplication(...args).promise()
  }

  async describeComponent(...args: any): Promise<any> {
  // undefined
    return this.client.describeComponent(...args).promise()
  }

  async describeComponentConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeComponentConfiguration(...args).promise()
  }

  async describeComponentConfigurationRecommendation(...args: any): Promise<any> {
  // undefined
    return this.client.describeComponentConfigurationRecommendation(...args).promise()
  }

  async describeLogPattern(...args: any): Promise<any> {
  // undefined
    return this.client.describeLogPattern(...args).promise()
  }

  async describeObservation(...args: any): Promise<any> {
  // undefined
    return this.client.describeObservation(...args).promise()
  }

  async describeProblem(...args: any): Promise<any> {
  // undefined
    return this.client.describeProblem(...args).promise()
  }

  async describeProblemObservations(...args: any): Promise<any> {
  // undefined
    return this.client.describeProblemObservations(...args).promise()
  }

  async listApplications(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplications(...args).promise()
  }

  async listComponents(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listComponents(...args).promise()
  }

  async listConfigurationHistory(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConfigurationHistory(...args).promise()
  }

  async listLogPatternSets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLogPatternSets(...args).promise()
  }

  async listLogPatterns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLogPatterns(...args).promise()
  }

  async listProblems(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProblems(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
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

  async updateComponent(...args: any): Promise<any> {
  // undefined
    return this.client.updateComponent(...args).promise()
  }

  async updateComponentConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateComponentConfiguration(...args).promise()
  }

  async updateLogPattern(...args: any): Promise<any> {
  // undefined
    return this.client.updateLogPattern(...args).promise()
  }
  
  static fromClient(client: AWSApplicationInsights): ClientType {
    return new ApplicationInsights(client) as any;
  }
  
  static client(options?: AWSApplicationInsights.Types.ClientConfiguration): ClientType {
    return new ApplicationInsights(new AWSApplicationInsights(options)) as any;
  }
}  
