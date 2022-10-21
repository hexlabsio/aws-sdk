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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSApplicationInsights> = AWSApplicationInsights[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ApplicationInsights {
  private constructor(private readonly client: AWSApplicationInsights) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'applicationinsights' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listApplications","listConfigurationHistory","listProblems"] as const;
  
  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createComponent: (params: RawParamsFrom<'createComponent'>) => Promise<ReturnTypeFrom<'createComponent'>>  = async params => {
  // undefined
    return this.client.createComponent(params as any).promise();
  }

  createLogPattern: (params: RawParamsFrom<'createLogPattern'>) => Promise<ReturnTypeFrom<'createLogPattern'>>  = async params => {
  // undefined
    return this.client.createLogPattern(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteComponent: (params: RawParamsFrom<'deleteComponent'>) => Promise<ReturnTypeFrom<'deleteComponent'>>  = async params => {
  // undefined
    return this.client.deleteComponent(params as any).promise();
  }

  deleteLogPattern: (params: RawParamsFrom<'deleteLogPattern'>) => Promise<ReturnTypeFrom<'deleteLogPattern'>>  = async params => {
  // undefined
    return this.client.deleteLogPattern(params as any).promise();
  }

  describeApplication: (params: RawParamsFrom<'describeApplication'>) => Promise<ReturnTypeFrom<'describeApplication'>>  = async params => {
  // undefined
    return this.client.describeApplication(params as any).promise();
  }

  describeComponent: (params: RawParamsFrom<'describeComponent'>) => Promise<ReturnTypeFrom<'describeComponent'>>  = async params => {
  // undefined
    return this.client.describeComponent(params as any).promise();
  }

  describeComponentConfiguration: (params: RawParamsFrom<'describeComponentConfiguration'>) => Promise<ReturnTypeFrom<'describeComponentConfiguration'>>  = async params => {
  // undefined
    return this.client.describeComponentConfiguration(params as any).promise();
  }

  describeComponentConfigurationRecommendation: (params: RawParamsFrom<'describeComponentConfigurationRecommendation'>) => Promise<ReturnTypeFrom<'describeComponentConfigurationRecommendation'>>  = async params => {
  // undefined
    return this.client.describeComponentConfigurationRecommendation(params as any).promise();
  }

  describeLogPattern: (params: RawParamsFrom<'describeLogPattern'>) => Promise<ReturnTypeFrom<'describeLogPattern'>>  = async params => {
  // undefined
    return this.client.describeLogPattern(params as any).promise();
  }

  describeObservation: (params: RawParamsFrom<'describeObservation'>) => Promise<ReturnTypeFrom<'describeObservation'>>  = async params => {
  // undefined
    return this.client.describeObservation(params as any).promise();
  }

  describeProblem: (params: RawParamsFrom<'describeProblem'>) => Promise<ReturnTypeFrom<'describeProblem'>>  = async params => {
  // undefined
    return this.client.describeProblem(params as any).promise();
  }

  describeProblemObservations: (params: RawParamsFrom<'describeProblemObservations'>) => Promise<ReturnTypeFrom<'describeProblemObservations'>>  = async params => {
  // undefined
    return this.client.describeProblemObservations(params as any).promise();
  }

  listApplications: (params: RawParamsFrom<'listApplications'>) => Promise<ReturnTypeFrom<'listApplications'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplications(params as any).promise();
  }

  listComponents: (params: RawParamsFrom<'listComponents'>) => Promise<ReturnTypeFrom<'listComponents'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listComponents(params as any).promise();
  }

  listConfigurationHistory: (params: RawParamsFrom<'listConfigurationHistory'>) => Promise<ReturnTypeFrom<'listConfigurationHistory'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConfigurationHistory(params as any).promise();
  }

  listLogPatternSets: (params: RawParamsFrom<'listLogPatternSets'>) => Promise<ReturnTypeFrom<'listLogPatternSets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLogPatternSets(params as any).promise();
  }

  listLogPatterns: (params: RawParamsFrom<'listLogPatterns'>) => Promise<ReturnTypeFrom<'listLogPatterns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLogPatterns(params as any).promise();
  }

  listProblems: (params: RawParamsFrom<'listProblems'>) => Promise<ReturnTypeFrom<'listProblems'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProblems(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
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

  updateComponent: (params: RawParamsFrom<'updateComponent'>) => Promise<ReturnTypeFrom<'updateComponent'>>  = async params => {
  // undefined
    return this.client.updateComponent(params as any).promise();
  }

  updateComponentConfiguration: (params: RawParamsFrom<'updateComponentConfiguration'>) => Promise<ReturnTypeFrom<'updateComponentConfiguration'>>  = async params => {
  // undefined
    return this.client.updateComponentConfiguration(params as any).promise();
  }

  updateLogPattern: (params: RawParamsFrom<'updateLogPattern'>) => Promise<ReturnTypeFrom<'updateLogPattern'>>  = async params => {
  // undefined
    return this.client.updateLogPattern(params as any).promise();
  }
  
  static fromClient(client: AWSApplicationInsights): ApplicationInsights {
    return new ApplicationInsights(client) as any;
  }
  
  static client(options?: AWSApplicationInsights.Types.ClientConfiguration): ApplicationInsights {
    return new ApplicationInsights(new AWSApplicationInsights(options)) as any;
  }
}  
