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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'transcribe';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listCallAnalyticsCategories","listCallAnalyticsJobs","listLanguageModels","listMedicalTranscriptionJobs","listMedicalVocabularies","listTranscriptionJobs","listVocabularies","listVocabularyFilters"];
    
  createCallAnalyticsCategory: FunctionTypeFrom<'createCallAnalyticsCategory'>;

  createLanguageModel: FunctionTypeFrom<'createLanguageModel'>;

  createMedicalVocabulary: FunctionTypeFrom<'createMedicalVocabulary'>;

  createVocabulary: FunctionTypeFrom<'createVocabulary'>;

  createVocabularyFilter: FunctionTypeFrom<'createVocabularyFilter'>;

  deleteCallAnalyticsCategory: FunctionTypeFrom<'deleteCallAnalyticsCategory'>;

  deleteCallAnalyticsJob: FunctionTypeFrom<'deleteCallAnalyticsJob'>;

  deleteLanguageModel: FunctionTypeFrom<'deleteLanguageModel'>;

  deleteMedicalTranscriptionJob: FunctionTypeFrom<'deleteMedicalTranscriptionJob'>;

  deleteMedicalVocabulary: FunctionTypeFrom<'deleteMedicalVocabulary'>;

  deleteTranscriptionJob: FunctionTypeFrom<'deleteTranscriptionJob'>;

  deleteVocabulary: FunctionTypeFrom<'deleteVocabulary'>;

  deleteVocabularyFilter: FunctionTypeFrom<'deleteVocabularyFilter'>;

  describeLanguageModel: FunctionTypeFrom<'describeLanguageModel'>;

  getCallAnalyticsCategory: FunctionTypeFrom<'getCallAnalyticsCategory'>;

  getCallAnalyticsJob: FunctionTypeFrom<'getCallAnalyticsJob'>;

  getMedicalTranscriptionJob: FunctionTypeFrom<'getMedicalTranscriptionJob'>;

  getMedicalVocabulary: FunctionTypeFrom<'getMedicalVocabulary'>;

  getTranscriptionJob: FunctionTypeFrom<'getTranscriptionJob'>;

  getVocabulary: FunctionTypeFrom<'getVocabulary'>;

  getVocabularyFilter: FunctionTypeFrom<'getVocabularyFilter'>;

  listCallAnalyticsCategories: FunctionTypeFrom<'listCallAnalyticsCategories'>;

  listCallAnalyticsJobs: FunctionTypeFrom<'listCallAnalyticsJobs'>;

  listLanguageModels: FunctionTypeFrom<'listLanguageModels'>;

  listMedicalTranscriptionJobs: FunctionTypeFrom<'listMedicalTranscriptionJobs'>;

  listMedicalVocabularies: FunctionTypeFrom<'listMedicalVocabularies'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTranscriptionJobs: FunctionTypeFrom<'listTranscriptionJobs'>;

  listVocabularies: FunctionTypeFrom<'listVocabularies'>;

  listVocabularyFilters: FunctionTypeFrom<'listVocabularyFilters'>;

  startCallAnalyticsJob: FunctionTypeFrom<'startCallAnalyticsJob'>;

  startMedicalTranscriptionJob: FunctionTypeFrom<'startMedicalTranscriptionJob'>;

  startTranscriptionJob: FunctionTypeFrom<'startTranscriptionJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCallAnalyticsCategory: FunctionTypeFrom<'updateCallAnalyticsCategory'>;

  updateMedicalVocabulary: FunctionTypeFrom<'updateMedicalVocabulary'>;

  updateVocabulary: FunctionTypeFrom<'updateVocabulary'>;

  updateVocabularyFilter: FunctionTypeFrom<'updateVocabularyFilter'>
}
 
export class TranscribeService implements ClientType {
  private constructor(private readonly client: AWSTranscribeService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'transcribe';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listCallAnalyticsCategories","listCallAnalyticsJobs","listLanguageModels","listMedicalTranscriptionJobs","listMedicalVocabularies","listTranscriptionJobs","listVocabularies","listVocabularyFilters"] as const;
  
  async createCallAnalyticsCategory(...args: any): Promise<any> {
  // undefined
    return this.client.createCallAnalyticsCategory(...args).promise()
  }

  async createLanguageModel(...args: any): Promise<any> {
  // undefined
    return this.client.createLanguageModel(...args).promise()
  }

  async createMedicalVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.createMedicalVocabulary(...args).promise()
  }

  async createVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.createVocabulary(...args).promise()
  }

  async createVocabularyFilter(...args: any): Promise<any> {
  // undefined
    return this.client.createVocabularyFilter(...args).promise()
  }

  async deleteCallAnalyticsCategory(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCallAnalyticsCategory(...args).promise()
  }

  async deleteCallAnalyticsJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCallAnalyticsJob(...args).promise()
  }

  async deleteLanguageModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLanguageModel(...args).promise()
  }

  async deleteMedicalTranscriptionJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMedicalTranscriptionJob(...args).promise()
  }

  async deleteMedicalVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMedicalVocabulary(...args).promise()
  }

  async deleteTranscriptionJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTranscriptionJob(...args).promise()
  }

  async deleteVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVocabulary(...args).promise()
  }

  async deleteVocabularyFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVocabularyFilter(...args).promise()
  }

  async describeLanguageModel(...args: any): Promise<any> {
  // undefined
    return this.client.describeLanguageModel(...args).promise()
  }

  async getCallAnalyticsCategory(...args: any): Promise<any> {
  // undefined
    return this.client.getCallAnalyticsCategory(...args).promise()
  }

  async getCallAnalyticsJob(...args: any): Promise<any> {
  // undefined
    return this.client.getCallAnalyticsJob(...args).promise()
  }

  async getMedicalTranscriptionJob(...args: any): Promise<any> {
  // undefined
    return this.client.getMedicalTranscriptionJob(...args).promise()
  }

  async getMedicalVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.getMedicalVocabulary(...args).promise()
  }

  async getTranscriptionJob(...args: any): Promise<any> {
  // undefined
    return this.client.getTranscriptionJob(...args).promise()
  }

  async getVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.getVocabulary(...args).promise()
  }

  async getVocabularyFilter(...args: any): Promise<any> {
  // undefined
    return this.client.getVocabularyFilter(...args).promise()
  }

  async listCallAnalyticsCategories(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCallAnalyticsCategories(...args).promise()
  }

  async listCallAnalyticsJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCallAnalyticsJobs(...args).promise()
  }

  async listLanguageModels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLanguageModels(...args).promise()
  }

  async listMedicalTranscriptionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMedicalTranscriptionJobs(...args).promise()
  }

  async listMedicalVocabularies(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMedicalVocabularies(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTranscriptionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTranscriptionJobs(...args).promise()
  }

  async listVocabularies(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVocabularies(...args).promise()
  }

  async listVocabularyFilters(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVocabularyFilters(...args).promise()
  }

  async startCallAnalyticsJob(...args: any): Promise<any> {
  // undefined
    return this.client.startCallAnalyticsJob(...args).promise()
  }

  async startMedicalTranscriptionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startMedicalTranscriptionJob(...args).promise()
  }

  async startTranscriptionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startTranscriptionJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateCallAnalyticsCategory(...args: any): Promise<any> {
  // undefined
    return this.client.updateCallAnalyticsCategory(...args).promise()
  }

  async updateMedicalVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.updateMedicalVocabulary(...args).promise()
  }

  async updateVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.updateVocabulary(...args).promise()
  }

  async updateVocabularyFilter(...args: any): Promise<any> {
  // undefined
    return this.client.updateVocabularyFilter(...args).promise()
  }
  
  static fromClient(client: AWSTranscribeService): ClientType {
    return new TranscribeService(client) as any;
  }
  
  static client(options?: AWSTranscribeService.Types.ClientConfiguration): ClientType {
    return new TranscribeService(new AWSTranscribeService(options)) as any;
  }
}  
