import { Request, Fis as AWSFis } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSFis> = AWSFis[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSFis> = AWSFis[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSFis[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSFis, Extras> = AWSFis[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSFis> = AWSFis[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Fis {
  private constructor(private readonly client: AWSFis) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'fis' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["listActions","listExperimentTemplates","listExperiments","listTargetResourceTypes"] as const;
  
  createExperimentTemplate: (params: RawParamsFrom<'createExperimentTemplate'>) => Promise<ReturnTypeFrom<'createExperimentTemplate'>>  = async params => {
  // undefined
    return this.client.createExperimentTemplate(params as any).promise();
  }

  deleteExperimentTemplate: (params: RawParamsFrom<'deleteExperimentTemplate'>) => Promise<ReturnTypeFrom<'deleteExperimentTemplate'>>  = async params => {
  // undefined
    return this.client.deleteExperimentTemplate(params as any).promise();
  }

  getAction: (params: RawParamsFrom<'getAction'>) => Promise<ReturnTypeFrom<'getAction'>>  = async params => {
  // undefined
    return this.client.getAction(params as any).promise();
  }

  getExperiment: (params: RawParamsFrom<'getExperiment'>) => Promise<ReturnTypeFrom<'getExperiment'>>  = async params => {
  // undefined
    return this.client.getExperiment(params as any).promise();
  }

  getExperimentTemplate: (params: RawParamsFrom<'getExperimentTemplate'>) => Promise<ReturnTypeFrom<'getExperimentTemplate'>>  = async params => {
  // undefined
    return this.client.getExperimentTemplate(params as any).promise();
  }

  getTargetResourceType: (params: RawParamsFrom<'getTargetResourceType'>) => Promise<ReturnTypeFrom<'getTargetResourceType'>>  = async params => {
  // undefined
    return this.client.getTargetResourceType(params as any).promise();
  }

  listActions: (params: RawParamsFrom<'listActions'>) => Promise<ReturnTypeFrom<'listActions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listActions(params as any).promise();
  }

  listExperimentTemplates: (params: RawParamsFrom<'listExperimentTemplates'>) => Promise<ReturnTypeFrom<'listExperimentTemplates'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listExperimentTemplates(params as any).promise();
  }

  listExperiments: (params: RawParamsFrom<'listExperiments'>) => Promise<ReturnTypeFrom<'listExperiments'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listExperiments(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTargetResourceTypes: (params: RawParamsFrom<'listTargetResourceTypes'>) => Promise<ReturnTypeFrom<'listTargetResourceTypes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTargetResourceTypes(params as any).promise();
  }

  startExperiment: (params: RawParamsFrom<'startExperiment'>) => Promise<ReturnTypeFrom<'startExperiment'>>  = async params => {
  // undefined
    return this.client.startExperiment(params as any).promise();
  }

  stopExperiment: (params: RawParamsFrom<'stopExperiment'>) => Promise<ReturnTypeFrom<'stopExperiment'>>  = async params => {
  // undefined
    return this.client.stopExperiment(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateExperimentTemplate: (params: RawParamsFrom<'updateExperimentTemplate'>) => Promise<ReturnTypeFrom<'updateExperimentTemplate'>>  = async params => {
  // undefined
    return this.client.updateExperimentTemplate(params as any).promise();
  }
  
  static fromClient(client: AWSFis): Fis {
    return new Fis(client) as any;
  }
  
  static client(options?: AWSFis.Types.ClientConfiguration): Fis {
    return new Fis(new AWSFis(options)) as any;
  }
}  
