import { Request, Translate as AWSTranslate } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSTranslate> = AWSTranslate[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSTranslate> = AWSTranslate[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSTranslate[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSTranslate, Extras> = AWSTranslate[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSTranslate> = AWSTranslate[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Translate {
  private constructor(private readonly client: AWSTranslate) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'translate' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listLanguages","listParallelData","listTerminologies","listTextTranslationJobs"] as const;
  
  createParallelData: (params: RawParamsFrom<'createParallelData'>) => Promise<ReturnTypeFrom<'createParallelData'>>  = async params => {
  // undefined
    return this.client.createParallelData(params as any).promise();
  }

  deleteParallelData: (params: RawParamsFrom<'deleteParallelData'>) => Promise<ReturnTypeFrom<'deleteParallelData'>>  = async params => {
  // undefined
    return this.client.deleteParallelData(params as any).promise();
  }

  deleteTerminology: (params: RawParamsFrom<'deleteTerminology'>) => Promise<ReturnTypeFrom<'deleteTerminology'>>  = async params => {
  // undefined
    return this.client.deleteTerminology(params as any).promise();
  }

  describeTextTranslationJob: (params: RawParamsFrom<'describeTextTranslationJob'>) => Promise<ReturnTypeFrom<'describeTextTranslationJob'>>  = async params => {
  // undefined
    return this.client.describeTextTranslationJob(params as any).promise();
  }

  getParallelData: (params: RawParamsFrom<'getParallelData'>) => Promise<ReturnTypeFrom<'getParallelData'>>  = async params => {
  // undefined
    return this.client.getParallelData(params as any).promise();
  }

  getTerminology: (params: RawParamsFrom<'getTerminology'>) => Promise<ReturnTypeFrom<'getTerminology'>>  = async params => {
  // undefined
    return this.client.getTerminology(params as any).promise();
  }

  importTerminology: (params: RawParamsFrom<'importTerminology'>) => Promise<ReturnTypeFrom<'importTerminology'>>  = async params => {
  // undefined
    return this.client.importTerminology(params as any).promise();
  }

  listLanguages: (params: RawParamsFrom<'listLanguages'>) => Promise<ReturnTypeFrom<'listLanguages'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLanguages(params as any).promise();
  }

  listParallelData: (params: RawParamsFrom<'listParallelData'>) => Promise<ReturnTypeFrom<'listParallelData'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listParallelData(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTerminologies: (params: RawParamsFrom<'listTerminologies'>) => Promise<ReturnTypeFrom<'listTerminologies'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTerminologies(params as any).promise();
  }

  listTextTranslationJobs: (params: RawParamsFrom<'listTextTranslationJobs'>) => Promise<ReturnTypeFrom<'listTextTranslationJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTextTranslationJobs(params as any).promise();
  }

  startTextTranslationJob: (params: RawParamsFrom<'startTextTranslationJob'>) => Promise<ReturnTypeFrom<'startTextTranslationJob'>>  = async params => {
  // undefined
    return this.client.startTextTranslationJob(params as any).promise();
  }

  stopTextTranslationJob: (params: RawParamsFrom<'stopTextTranslationJob'>) => Promise<ReturnTypeFrom<'stopTextTranslationJob'>>  = async params => {
  // undefined
    return this.client.stopTextTranslationJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  translateText: (params: RawParamsFrom<'translateText'>) => Promise<ReturnTypeFrom<'translateText'>>  = async params => {
  // undefined
    return this.client.translateText(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateParallelData: (params: RawParamsFrom<'updateParallelData'>) => Promise<ReturnTypeFrom<'updateParallelData'>>  = async params => {
  // undefined
    return this.client.updateParallelData(params as any).promise();
  }
  
  static fromClient(client: AWSTranslate): Translate {
    return new Translate(client) as any;
  }
  
  static client(options?: AWSTranslate.Types.ClientConfiguration): Translate {
    return new Translate(new AWSTranslate(options)) as any;
  }
}  
