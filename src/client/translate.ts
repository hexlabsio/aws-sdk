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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'translate';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listLanguages","listParallelData","listTerminologies","listTextTranslationJobs"];
    
  createParallelData: FunctionTypeFrom<'createParallelData'>;

  deleteParallelData: FunctionTypeFrom<'deleteParallelData'>;

  deleteTerminology: FunctionTypeFrom<'deleteTerminology'>;

  describeTextTranslationJob: FunctionTypeFrom<'describeTextTranslationJob'>;

  getParallelData: FunctionTypeFrom<'getParallelData'>;

  getTerminology: FunctionTypeFrom<'getTerminology'>;

  importTerminology: FunctionTypeFrom<'importTerminology'>;

  listLanguages: FunctionTypeFrom<'listLanguages'>;

  listParallelData: FunctionTypeFrom<'listParallelData'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTerminologies: FunctionTypeFrom<'listTerminologies'>;

  listTextTranslationJobs: FunctionTypeFrom<'listTextTranslationJobs'>;

  startTextTranslationJob: FunctionTypeFrom<'startTextTranslationJob'>;

  stopTextTranslationJob: FunctionTypeFrom<'stopTextTranslationJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  translateText: FunctionTypeFrom<'translateText'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateParallelData: FunctionTypeFrom<'updateParallelData'>
}
 
export class Translate implements ClientType {
  private constructor(private readonly client: AWSTranslate) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'translate';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listLanguages","listParallelData","listTerminologies","listTextTranslationJobs"] as const;
  
  async createParallelData(...args: any): Promise<any> {
  // undefined
    return this.client.createParallelData(...args).promise()
  }

  async deleteParallelData(...args: any): Promise<any> {
  // undefined
    return this.client.deleteParallelData(...args).promise()
  }

  async deleteTerminology(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTerminology(...args).promise()
  }

  async describeTextTranslationJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeTextTranslationJob(...args).promise()
  }

  async getParallelData(...args: any): Promise<any> {
  // undefined
    return this.client.getParallelData(...args).promise()
  }

  async getTerminology(...args: any): Promise<any> {
  // undefined
    return this.client.getTerminology(...args).promise()
  }

  async importTerminology(...args: any): Promise<any> {
  // undefined
    return this.client.importTerminology(...args).promise()
  }

  async listLanguages(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLanguages(...args).promise()
  }

  async listParallelData(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listParallelData(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTerminologies(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTerminologies(...args).promise()
  }

  async listTextTranslationJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTextTranslationJobs(...args).promise()
  }

  async startTextTranslationJob(...args: any): Promise<any> {
  // undefined
    return this.client.startTextTranslationJob(...args).promise()
  }

  async stopTextTranslationJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopTextTranslationJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async translateText(...args: any): Promise<any> {
  // undefined
    return this.client.translateText(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateParallelData(...args: any): Promise<any> {
  // undefined
    return this.client.updateParallelData(...args).promise()
  }
  
  static fromClient(client: AWSTranslate): ClientType {
    return new Translate(client) as any;
  }
  
  static client(options?: AWSTranslate.Types.ClientConfiguration): ClientType {
    return new Translate(new AWSTranslate(options)) as any;
  }
}  
