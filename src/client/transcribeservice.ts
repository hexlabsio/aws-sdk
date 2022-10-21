import { Request, TranscribeService as AWSTranscribeService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSTranscribeService> = AWSTranscribeService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSTranscribeService> = AWSTranscribeService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSTranscribeService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSTranscribeService, Extras> = AWSTranscribeService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSTranscribeService> = AWSTranscribeService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class TranscribeService {
  private constructor(private readonly client: AWSTranscribeService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'transcribe' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listCallAnalyticsCategories","listCallAnalyticsJobs","listLanguageModels","listMedicalTranscriptionJobs","listMedicalVocabularies","listTranscriptionJobs","listVocabularies","listVocabularyFilters"] as const;
  
  createCallAnalyticsCategory: (params: RawParamsFrom<'createCallAnalyticsCategory'>) => Promise<ReturnTypeFrom<'createCallAnalyticsCategory'>>  = async params => {
  // undefined
    return this.client.createCallAnalyticsCategory(params as any).promise();
  }

  createLanguageModel: (params: RawParamsFrom<'createLanguageModel'>) => Promise<ReturnTypeFrom<'createLanguageModel'>>  = async params => {
  // undefined
    return this.client.createLanguageModel(params as any).promise();
  }

  createMedicalVocabulary: (params: RawParamsFrom<'createMedicalVocabulary'>) => Promise<ReturnTypeFrom<'createMedicalVocabulary'>>  = async params => {
  // undefined
    return this.client.createMedicalVocabulary(params as any).promise();
  }

  createVocabulary: (params: RawParamsFrom<'createVocabulary'>) => Promise<ReturnTypeFrom<'createVocabulary'>>  = async params => {
  // undefined
    return this.client.createVocabulary(params as any).promise();
  }

  createVocabularyFilter: (params: RawParamsFrom<'createVocabularyFilter'>) => Promise<ReturnTypeFrom<'createVocabularyFilter'>>  = async params => {
  // undefined
    return this.client.createVocabularyFilter(params as any).promise();
  }

  deleteCallAnalyticsCategory: (params: RawParamsFrom<'deleteCallAnalyticsCategory'>) => Promise<ReturnTypeFrom<'deleteCallAnalyticsCategory'>>  = async params => {
  // undefined
    return this.client.deleteCallAnalyticsCategory(params as any).promise();
  }

  deleteCallAnalyticsJob: (params: RawParamsFrom<'deleteCallAnalyticsJob'>) => Promise<ReturnTypeFrom<'deleteCallAnalyticsJob'>>  = async params => {
  // undefined
    return this.client.deleteCallAnalyticsJob(params as any).promise();
  }

  deleteLanguageModel: (params: RawParamsFrom<'deleteLanguageModel'>) => Promise<ReturnTypeFrom<'deleteLanguageModel'>>  = async params => {
  // undefined
    return this.client.deleteLanguageModel(params as any).promise();
  }

  deleteMedicalTranscriptionJob: (params: RawParamsFrom<'deleteMedicalTranscriptionJob'>) => Promise<ReturnTypeFrom<'deleteMedicalTranscriptionJob'>>  = async params => {
  // undefined
    return this.client.deleteMedicalTranscriptionJob(params as any).promise();
  }

  deleteMedicalVocabulary: (params: RawParamsFrom<'deleteMedicalVocabulary'>) => Promise<ReturnTypeFrom<'deleteMedicalVocabulary'>>  = async params => {
  // undefined
    return this.client.deleteMedicalVocabulary(params as any).promise();
  }

  deleteTranscriptionJob: (params: RawParamsFrom<'deleteTranscriptionJob'>) => Promise<ReturnTypeFrom<'deleteTranscriptionJob'>>  = async params => {
  // undefined
    return this.client.deleteTranscriptionJob(params as any).promise();
  }

  deleteVocabulary: (params: RawParamsFrom<'deleteVocabulary'>) => Promise<ReturnTypeFrom<'deleteVocabulary'>>  = async params => {
  // undefined
    return this.client.deleteVocabulary(params as any).promise();
  }

  deleteVocabularyFilter: (params: RawParamsFrom<'deleteVocabularyFilter'>) => Promise<ReturnTypeFrom<'deleteVocabularyFilter'>>  = async params => {
  // undefined
    return this.client.deleteVocabularyFilter(params as any).promise();
  }

  describeLanguageModel: (params: RawParamsFrom<'describeLanguageModel'>) => Promise<ReturnTypeFrom<'describeLanguageModel'>>  = async params => {
  // undefined
    return this.client.describeLanguageModel(params as any).promise();
  }

  getCallAnalyticsCategory: (params: RawParamsFrom<'getCallAnalyticsCategory'>) => Promise<ReturnTypeFrom<'getCallAnalyticsCategory'>>  = async params => {
  // undefined
    return this.client.getCallAnalyticsCategory(params as any).promise();
  }

  getCallAnalyticsJob: (params: RawParamsFrom<'getCallAnalyticsJob'>) => Promise<ReturnTypeFrom<'getCallAnalyticsJob'>>  = async params => {
  // undefined
    return this.client.getCallAnalyticsJob(params as any).promise();
  }

  getMedicalTranscriptionJob: (params: RawParamsFrom<'getMedicalTranscriptionJob'>) => Promise<ReturnTypeFrom<'getMedicalTranscriptionJob'>>  = async params => {
  // undefined
    return this.client.getMedicalTranscriptionJob(params as any).promise();
  }

  getMedicalVocabulary: (params: RawParamsFrom<'getMedicalVocabulary'>) => Promise<ReturnTypeFrom<'getMedicalVocabulary'>>  = async params => {
  // undefined
    return this.client.getMedicalVocabulary(params as any).promise();
  }

  getTranscriptionJob: (params: RawParamsFrom<'getTranscriptionJob'>) => Promise<ReturnTypeFrom<'getTranscriptionJob'>>  = async params => {
  // undefined
    return this.client.getTranscriptionJob(params as any).promise();
  }

  getVocabulary: (params: RawParamsFrom<'getVocabulary'>) => Promise<ReturnTypeFrom<'getVocabulary'>>  = async params => {
  // undefined
    return this.client.getVocabulary(params as any).promise();
  }

  getVocabularyFilter: (params: RawParamsFrom<'getVocabularyFilter'>) => Promise<ReturnTypeFrom<'getVocabularyFilter'>>  = async params => {
  // undefined
    return this.client.getVocabularyFilter(params as any).promise();
  }

  listCallAnalyticsCategories: (params: RawParamsFrom<'listCallAnalyticsCategories'>) => Promise<ReturnTypeFrom<'listCallAnalyticsCategories'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCallAnalyticsCategories(params as any).promise();
  }

  listCallAnalyticsJobs: (params: RawParamsFrom<'listCallAnalyticsJobs'>) => Promise<ReturnTypeFrom<'listCallAnalyticsJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCallAnalyticsJobs(params as any).promise();
  }

  listLanguageModels: (params: RawParamsFrom<'listLanguageModels'>) => Promise<ReturnTypeFrom<'listLanguageModels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLanguageModels(params as any).promise();
  }

  listMedicalTranscriptionJobs: (params: RawParamsFrom<'listMedicalTranscriptionJobs'>) => Promise<ReturnTypeFrom<'listMedicalTranscriptionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMedicalTranscriptionJobs(params as any).promise();
  }

  listMedicalVocabularies: (params: RawParamsFrom<'listMedicalVocabularies'>) => Promise<ReturnTypeFrom<'listMedicalVocabularies'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMedicalVocabularies(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTranscriptionJobs: (params: RawParamsFrom<'listTranscriptionJobs'>) => Promise<ReturnTypeFrom<'listTranscriptionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTranscriptionJobs(params as any).promise();
  }

  listVocabularies: (params: RawParamsFrom<'listVocabularies'>) => Promise<ReturnTypeFrom<'listVocabularies'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVocabularies(params as any).promise();
  }

  listVocabularyFilters: (params: RawParamsFrom<'listVocabularyFilters'>) => Promise<ReturnTypeFrom<'listVocabularyFilters'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVocabularyFilters(params as any).promise();
  }

  startCallAnalyticsJob: (params: RawParamsFrom<'startCallAnalyticsJob'>) => Promise<ReturnTypeFrom<'startCallAnalyticsJob'>>  = async params => {
  // undefined
    return this.client.startCallAnalyticsJob(params as any).promise();
  }

  startMedicalTranscriptionJob: (params: RawParamsFrom<'startMedicalTranscriptionJob'>) => Promise<ReturnTypeFrom<'startMedicalTranscriptionJob'>>  = async params => {
  // undefined
    return this.client.startMedicalTranscriptionJob(params as any).promise();
  }

  startTranscriptionJob: (params: RawParamsFrom<'startTranscriptionJob'>) => Promise<ReturnTypeFrom<'startTranscriptionJob'>>  = async params => {
  // undefined
    return this.client.startTranscriptionJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCallAnalyticsCategory: (params: RawParamsFrom<'updateCallAnalyticsCategory'>) => Promise<ReturnTypeFrom<'updateCallAnalyticsCategory'>>  = async params => {
  // undefined
    return this.client.updateCallAnalyticsCategory(params as any).promise();
  }

  updateMedicalVocabulary: (params: RawParamsFrom<'updateMedicalVocabulary'>) => Promise<ReturnTypeFrom<'updateMedicalVocabulary'>>  = async params => {
  // undefined
    return this.client.updateMedicalVocabulary(params as any).promise();
  }

  updateVocabulary: (params: RawParamsFrom<'updateVocabulary'>) => Promise<ReturnTypeFrom<'updateVocabulary'>>  = async params => {
  // undefined
    return this.client.updateVocabulary(params as any).promise();
  }

  updateVocabularyFilter: (params: RawParamsFrom<'updateVocabularyFilter'>) => Promise<ReturnTypeFrom<'updateVocabularyFilter'>>  = async params => {
  // undefined
    return this.client.updateVocabularyFilter(params as any).promise();
  }
  
  static fromClient(client: AWSTranscribeService): TranscribeService {
    return new TranscribeService(client) as any;
  }
  
  static client(options?: AWSTranscribeService.Types.ClientConfiguration): TranscribeService {
    return new TranscribeService(new AWSTranscribeService(options)) as any;
  }
}  
