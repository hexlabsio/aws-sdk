import { Request, Comprehend as AWSComprehend } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSComprehend> = AWSComprehend[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSComprehend> = AWSComprehend[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSComprehend[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSComprehend, Extras> = AWSComprehend[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'comprehend';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listDocumentClassificationJobs","listDocumentClassifierSummaries","listDocumentClassifiers","listDominantLanguageDetectionJobs","listEntitiesDetectionJobs","listEntityRecognizerSummaries","listEntityRecognizers","listEventsDetectionJobs","listKeyPhrasesDetectionJobs","listSentimentDetectionJobs","listTargetedSentimentDetectionJobs","listTopicsDetectionJobs"];
    
  batchDetectDominantLanguage: FunctionTypeFrom<'batchDetectDominantLanguage'>;

  batchDetectEntities: FunctionTypeFrom<'batchDetectEntities'>;

  batchDetectKeyPhrases: FunctionTypeFrom<'batchDetectKeyPhrases'>;

  batchDetectSentiment: FunctionTypeFrom<'batchDetectSentiment'>;

  batchDetectSyntax: FunctionTypeFrom<'batchDetectSyntax'>;

  batchDetectTargetedSentiment: FunctionTypeFrom<'batchDetectTargetedSentiment'>;

  classifyDocument: FunctionTypeFrom<'classifyDocument'>;

  containsPiiEntities: FunctionTypeFrom<'containsPiiEntities'>;

  createDocumentClassifier: FunctionTypeFrom<'createDocumentClassifier'>;

  createEndpoint: FunctionTypeFrom<'createEndpoint'>;

  createEntityRecognizer: FunctionTypeFrom<'createEntityRecognizer'>;

  deleteDocumentClassifier: FunctionTypeFrom<'deleteDocumentClassifier'>;

  deleteEndpoint: FunctionTypeFrom<'deleteEndpoint'>;

  deleteEntityRecognizer: FunctionTypeFrom<'deleteEntityRecognizer'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  describeDocumentClassificationJob: FunctionTypeFrom<'describeDocumentClassificationJob'>;

  describeDocumentClassifier: FunctionTypeFrom<'describeDocumentClassifier'>;

  describeDominantLanguageDetectionJob: FunctionTypeFrom<'describeDominantLanguageDetectionJob'>;

  describeEndpoint: FunctionTypeFrom<'describeEndpoint'>;

  describeEntitiesDetectionJob: FunctionTypeFrom<'describeEntitiesDetectionJob'>;

  describeEntityRecognizer: FunctionTypeFrom<'describeEntityRecognizer'>;

  describeEventsDetectionJob: FunctionTypeFrom<'describeEventsDetectionJob'>;

  describeKeyPhrasesDetectionJob: FunctionTypeFrom<'describeKeyPhrasesDetectionJob'>;

  describePiiEntitiesDetectionJob: FunctionTypeFrom<'describePiiEntitiesDetectionJob'>;

  describeResourcePolicy: FunctionTypeFrom<'describeResourcePolicy'>;

  describeSentimentDetectionJob: FunctionTypeFrom<'describeSentimentDetectionJob'>;

  describeTargetedSentimentDetectionJob: FunctionTypeFrom<'describeTargetedSentimentDetectionJob'>;

  describeTopicsDetectionJob: FunctionTypeFrom<'describeTopicsDetectionJob'>;

  detectDominantLanguage: FunctionTypeFrom<'detectDominantLanguage'>;

  detectEntities: FunctionTypeFrom<'detectEntities'>;

  detectKeyPhrases: FunctionTypeFrom<'detectKeyPhrases'>;

  detectPiiEntities: FunctionTypeFrom<'detectPiiEntities'>;

  detectSentiment: FunctionTypeFrom<'detectSentiment'>;

  detectSyntax: FunctionTypeFrom<'detectSyntax'>;

  detectTargetedSentiment: FunctionTypeFrom<'detectTargetedSentiment'>;

  importModel: FunctionTypeFrom<'importModel'>;

  listDocumentClassificationJobs: FunctionTypeFrom<'listDocumentClassificationJobs'>;

  listDocumentClassifierSummaries: FunctionTypeFrom<'listDocumentClassifierSummaries'>;

  listDocumentClassifiers: FunctionTypeFrom<'listDocumentClassifiers'>;

  listDominantLanguageDetectionJobs: FunctionTypeFrom<'listDominantLanguageDetectionJobs'>;

  listEndpoints: FunctionTypeFrom<'listEndpoints'>;

  listEntitiesDetectionJobs: FunctionTypeFrom<'listEntitiesDetectionJobs'>;

  listEntityRecognizerSummaries: FunctionTypeFrom<'listEntityRecognizerSummaries'>;

  listEntityRecognizers: FunctionTypeFrom<'listEntityRecognizers'>;

  listEventsDetectionJobs: FunctionTypeFrom<'listEventsDetectionJobs'>;

  listKeyPhrasesDetectionJobs: FunctionTypeFrom<'listKeyPhrasesDetectionJobs'>;

  listPiiEntitiesDetectionJobs: FunctionTypeFrom<'listPiiEntitiesDetectionJobs'>;

  listSentimentDetectionJobs: FunctionTypeFrom<'listSentimentDetectionJobs'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTargetedSentimentDetectionJobs: FunctionTypeFrom<'listTargetedSentimentDetectionJobs'>;

  listTopicsDetectionJobs: FunctionTypeFrom<'listTopicsDetectionJobs'>;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  startDocumentClassificationJob: FunctionTypeFrom<'startDocumentClassificationJob'>;

  startDominantLanguageDetectionJob: FunctionTypeFrom<'startDominantLanguageDetectionJob'>;

  startEntitiesDetectionJob: FunctionTypeFrom<'startEntitiesDetectionJob'>;

  startEventsDetectionJob: FunctionTypeFrom<'startEventsDetectionJob'>;

  startKeyPhrasesDetectionJob: FunctionTypeFrom<'startKeyPhrasesDetectionJob'>;

  startPiiEntitiesDetectionJob: FunctionTypeFrom<'startPiiEntitiesDetectionJob'>;

  startSentimentDetectionJob: FunctionTypeFrom<'startSentimentDetectionJob'>;

  startTargetedSentimentDetectionJob: FunctionTypeFrom<'startTargetedSentimentDetectionJob'>;

  startTopicsDetectionJob: FunctionTypeFrom<'startTopicsDetectionJob'>;

  stopDominantLanguageDetectionJob: FunctionTypeFrom<'stopDominantLanguageDetectionJob'>;

  stopEntitiesDetectionJob: FunctionTypeFrom<'stopEntitiesDetectionJob'>;

  stopEventsDetectionJob: FunctionTypeFrom<'stopEventsDetectionJob'>;

  stopKeyPhrasesDetectionJob: FunctionTypeFrom<'stopKeyPhrasesDetectionJob'>;

  stopPiiEntitiesDetectionJob: FunctionTypeFrom<'stopPiiEntitiesDetectionJob'>;

  stopSentimentDetectionJob: FunctionTypeFrom<'stopSentimentDetectionJob'>;

  stopTargetedSentimentDetectionJob: FunctionTypeFrom<'stopTargetedSentimentDetectionJob'>;

  stopTrainingDocumentClassifier: FunctionTypeFrom<'stopTrainingDocumentClassifier'>;

  stopTrainingEntityRecognizer: FunctionTypeFrom<'stopTrainingEntityRecognizer'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateEndpoint: FunctionTypeFrom<'updateEndpoint'>
}
 
export class Comprehend implements ClientType {
  private constructor(private readonly client: AWSComprehend) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'comprehend';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listDocumentClassificationJobs","listDocumentClassifierSummaries","listDocumentClassifiers","listDominantLanguageDetectionJobs","listEntitiesDetectionJobs","listEntityRecognizerSummaries","listEntityRecognizers","listEventsDetectionJobs","listKeyPhrasesDetectionJobs","listSentimentDetectionJobs","listTargetedSentimentDetectionJobs","listTopicsDetectionJobs"] as const;
  
  async batchDetectDominantLanguage(...args: any): Promise<any> {
  // undefined
    return this.client.batchDetectDominantLanguage(...args).promise()
  }

  async batchDetectEntities(...args: any): Promise<any> {
  // undefined
    return this.client.batchDetectEntities(...args).promise()
  }

  async batchDetectKeyPhrases(...args: any): Promise<any> {
  // undefined
    return this.client.batchDetectKeyPhrases(...args).promise()
  }

  async batchDetectSentiment(...args: any): Promise<any> {
  // undefined
    return this.client.batchDetectSentiment(...args).promise()
  }

  async batchDetectSyntax(...args: any): Promise<any> {
  // undefined
    return this.client.batchDetectSyntax(...args).promise()
  }

  async batchDetectTargetedSentiment(...args: any): Promise<any> {
  // undefined
    return this.client.batchDetectTargetedSentiment(...args).promise()
  }

  async classifyDocument(...args: any): Promise<any> {
  // undefined
    return this.client.classifyDocument(...args).promise()
  }

  async containsPiiEntities(...args: any): Promise<any> {
  // undefined
    return this.client.containsPiiEntities(...args).promise()
  }

  async createDocumentClassifier(...args: any): Promise<any> {
  // undefined
    return this.client.createDocumentClassifier(...args).promise()
  }

  async createEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createEndpoint(...args).promise()
  }

  async createEntityRecognizer(...args: any): Promise<any> {
  // undefined
    return this.client.createEntityRecognizer(...args).promise()
  }

  async deleteDocumentClassifier(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDocumentClassifier(...args).promise()
  }

  async deleteEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpoint(...args).promise()
  }

  async deleteEntityRecognizer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEntityRecognizer(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async describeDocumentClassificationJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeDocumentClassificationJob(...args).promise()
  }

  async describeDocumentClassifier(...args: any): Promise<any> {
  // undefined
    return this.client.describeDocumentClassifier(...args).promise()
  }

  async describeDominantLanguageDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeDominantLanguageDetectionJob(...args).promise()
  }

  async describeEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.describeEndpoint(...args).promise()
  }

  async describeEntitiesDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeEntitiesDetectionJob(...args).promise()
  }

  async describeEntityRecognizer(...args: any): Promise<any> {
  // undefined
    return this.client.describeEntityRecognizer(...args).promise()
  }

  async describeEventsDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventsDetectionJob(...args).promise()
  }

  async describeKeyPhrasesDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeKeyPhrasesDetectionJob(...args).promise()
  }

  async describePiiEntitiesDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describePiiEntitiesDetectionJob(...args).promise()
  }

  async describeResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeResourcePolicy(...args).promise()
  }

  async describeSentimentDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeSentimentDetectionJob(...args).promise()
  }

  async describeTargetedSentimentDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeTargetedSentimentDetectionJob(...args).promise()
  }

  async describeTopicsDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeTopicsDetectionJob(...args).promise()
  }

  async detectDominantLanguage(...args: any): Promise<any> {
  // undefined
    return this.client.detectDominantLanguage(...args).promise()
  }

  async detectEntities(...args: any): Promise<any> {
  // undefined
    return this.client.detectEntities(...args).promise()
  }

  async detectKeyPhrases(...args: any): Promise<any> {
  // undefined
    return this.client.detectKeyPhrases(...args).promise()
  }

  async detectPiiEntities(...args: any): Promise<any> {
  // undefined
    return this.client.detectPiiEntities(...args).promise()
  }

  async detectSentiment(...args: any): Promise<any> {
  // undefined
    return this.client.detectSentiment(...args).promise()
  }

  async detectSyntax(...args: any): Promise<any> {
  // undefined
    return this.client.detectSyntax(...args).promise()
  }

  async detectTargetedSentiment(...args: any): Promise<any> {
  // undefined
    return this.client.detectTargetedSentiment(...args).promise()
  }

  async importModel(...args: any): Promise<any> {
  // undefined
    return this.client.importModel(...args).promise()
  }

  async listDocumentClassificationJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDocumentClassificationJobs(...args).promise()
  }

  async listDocumentClassifierSummaries(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDocumentClassifierSummaries(...args).promise()
  }

  async listDocumentClassifiers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDocumentClassifiers(...args).promise()
  }

  async listDominantLanguageDetectionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDominantLanguageDetectionJobs(...args).promise()
  }

  async listEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.listEndpoints(...args).promise()
  }

  async listEntitiesDetectionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntitiesDetectionJobs(...args).promise()
  }

  async listEntityRecognizerSummaries(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntityRecognizerSummaries(...args).promise()
  }

  async listEntityRecognizers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntityRecognizers(...args).promise()
  }

  async listEventsDetectionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEventsDetectionJobs(...args).promise()
  }

  async listKeyPhrasesDetectionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listKeyPhrasesDetectionJobs(...args).promise()
  }

  async listPiiEntitiesDetectionJobs(...args: any): Promise<any> {
  // undefined
    return this.client.listPiiEntitiesDetectionJobs(...args).promise()
  }

  async listSentimentDetectionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSentimentDetectionJobs(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTargetedSentimentDetectionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTargetedSentimentDetectionJobs(...args).promise()
  }

  async listTopicsDetectionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTopicsDetectionJobs(...args).promise()
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async startDocumentClassificationJob(...args: any): Promise<any> {
  // undefined
    return this.client.startDocumentClassificationJob(...args).promise()
  }

  async startDominantLanguageDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startDominantLanguageDetectionJob(...args).promise()
  }

  async startEntitiesDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startEntitiesDetectionJob(...args).promise()
  }

  async startEventsDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startEventsDetectionJob(...args).promise()
  }

  async startKeyPhrasesDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startKeyPhrasesDetectionJob(...args).promise()
  }

  async startPiiEntitiesDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startPiiEntitiesDetectionJob(...args).promise()
  }

  async startSentimentDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startSentimentDetectionJob(...args).promise()
  }

  async startTargetedSentimentDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startTargetedSentimentDetectionJob(...args).promise()
  }

  async startTopicsDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startTopicsDetectionJob(...args).promise()
  }

  async stopDominantLanguageDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopDominantLanguageDetectionJob(...args).promise()
  }

  async stopEntitiesDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopEntitiesDetectionJob(...args).promise()
  }

  async stopEventsDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopEventsDetectionJob(...args).promise()
  }

  async stopKeyPhrasesDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopKeyPhrasesDetectionJob(...args).promise()
  }

  async stopPiiEntitiesDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopPiiEntitiesDetectionJob(...args).promise()
  }

  async stopSentimentDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopSentimentDetectionJob(...args).promise()
  }

  async stopTargetedSentimentDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopTargetedSentimentDetectionJob(...args).promise()
  }

  async stopTrainingDocumentClassifier(...args: any): Promise<any> {
  // undefined
    return this.client.stopTrainingDocumentClassifier(...args).promise()
  }

  async stopTrainingEntityRecognizer(...args: any): Promise<any> {
  // undefined
    return this.client.stopTrainingEntityRecognizer(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.updateEndpoint(...args).promise()
  }
  
  static fromClient(client: AWSComprehend): ClientType {
    return new Comprehend(client) as any;
  }
  
  static client(options?: AWSComprehend.Types.ClientConfiguration): ClientType {
    return new Comprehend(new AWSComprehend(options)) as any;
  }
}  
