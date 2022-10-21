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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSComprehend> = AWSComprehend[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Comprehend {
  private constructor(private readonly client: AWSComprehend) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'comprehend' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listDocumentClassificationJobs","listDocumentClassifierSummaries","listDocumentClassifiers","listDominantLanguageDetectionJobs","listEntitiesDetectionJobs","listEntityRecognizerSummaries","listEntityRecognizers","listEventsDetectionJobs","listKeyPhrasesDetectionJobs","listSentimentDetectionJobs","listTargetedSentimentDetectionJobs","listTopicsDetectionJobs"] as const;
  
  batchDetectDominantLanguage: (params: RawParamsFrom<'batchDetectDominantLanguage'>) => Promise<ReturnTypeFrom<'batchDetectDominantLanguage'>>  = async params => {
  // undefined
    return this.client.batchDetectDominantLanguage(params as any).promise();
  }

  batchDetectEntities: (params: RawParamsFrom<'batchDetectEntities'>) => Promise<ReturnTypeFrom<'batchDetectEntities'>>  = async params => {
  // undefined
    return this.client.batchDetectEntities(params as any).promise();
  }

  batchDetectKeyPhrases: (params: RawParamsFrom<'batchDetectKeyPhrases'>) => Promise<ReturnTypeFrom<'batchDetectKeyPhrases'>>  = async params => {
  // undefined
    return this.client.batchDetectKeyPhrases(params as any).promise();
  }

  batchDetectSentiment: (params: RawParamsFrom<'batchDetectSentiment'>) => Promise<ReturnTypeFrom<'batchDetectSentiment'>>  = async params => {
  // undefined
    return this.client.batchDetectSentiment(params as any).promise();
  }

  batchDetectSyntax: (params: RawParamsFrom<'batchDetectSyntax'>) => Promise<ReturnTypeFrom<'batchDetectSyntax'>>  = async params => {
  // undefined
    return this.client.batchDetectSyntax(params as any).promise();
  }

  batchDetectTargetedSentiment: (params: RawParamsFrom<'batchDetectTargetedSentiment'>) => Promise<ReturnTypeFrom<'batchDetectTargetedSentiment'>>  = async params => {
  // undefined
    return this.client.batchDetectTargetedSentiment(params as any).promise();
  }

  classifyDocument: (params: RawParamsFrom<'classifyDocument'>) => Promise<ReturnTypeFrom<'classifyDocument'>>  = async params => {
  // undefined
    return this.client.classifyDocument(params as any).promise();
  }

  containsPiiEntities: (params: RawParamsFrom<'containsPiiEntities'>) => Promise<ReturnTypeFrom<'containsPiiEntities'>>  = async params => {
  // undefined
    return this.client.containsPiiEntities(params as any).promise();
  }

  createDocumentClassifier: (params: RawParamsFrom<'createDocumentClassifier'>) => Promise<ReturnTypeFrom<'createDocumentClassifier'>>  = async params => {
  // undefined
    return this.client.createDocumentClassifier(params as any).promise();
  }

  createEndpoint: (params: RawParamsFrom<'createEndpoint'>) => Promise<ReturnTypeFrom<'createEndpoint'>>  = async params => {
  // undefined
    return this.client.createEndpoint(params as any).promise();
  }

  createEntityRecognizer: (params: RawParamsFrom<'createEntityRecognizer'>) => Promise<ReturnTypeFrom<'createEntityRecognizer'>>  = async params => {
  // undefined
    return this.client.createEntityRecognizer(params as any).promise();
  }

  deleteDocumentClassifier: (params: RawParamsFrom<'deleteDocumentClassifier'>) => Promise<ReturnTypeFrom<'deleteDocumentClassifier'>>  = async params => {
  // undefined
    return this.client.deleteDocumentClassifier(params as any).promise();
  }

  deleteEndpoint: (params: RawParamsFrom<'deleteEndpoint'>) => Promise<ReturnTypeFrom<'deleteEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteEndpoint(params as any).promise();
  }

  deleteEntityRecognizer: (params: RawParamsFrom<'deleteEntityRecognizer'>) => Promise<ReturnTypeFrom<'deleteEntityRecognizer'>>  = async params => {
  // undefined
    return this.client.deleteEntityRecognizer(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  describeDocumentClassificationJob: (params: RawParamsFrom<'describeDocumentClassificationJob'>) => Promise<ReturnTypeFrom<'describeDocumentClassificationJob'>>  = async params => {
  // undefined
    return this.client.describeDocumentClassificationJob(params as any).promise();
  }

  describeDocumentClassifier: (params: RawParamsFrom<'describeDocumentClassifier'>) => Promise<ReturnTypeFrom<'describeDocumentClassifier'>>  = async params => {
  // undefined
    return this.client.describeDocumentClassifier(params as any).promise();
  }

  describeDominantLanguageDetectionJob: (params: RawParamsFrom<'describeDominantLanguageDetectionJob'>) => Promise<ReturnTypeFrom<'describeDominantLanguageDetectionJob'>>  = async params => {
  // undefined
    return this.client.describeDominantLanguageDetectionJob(params as any).promise();
  }

  describeEndpoint: (params: RawParamsFrom<'describeEndpoint'>) => Promise<ReturnTypeFrom<'describeEndpoint'>>  = async params => {
  // undefined
    return this.client.describeEndpoint(params as any).promise();
  }

  describeEntitiesDetectionJob: (params: RawParamsFrom<'describeEntitiesDetectionJob'>) => Promise<ReturnTypeFrom<'describeEntitiesDetectionJob'>>  = async params => {
  // undefined
    return this.client.describeEntitiesDetectionJob(params as any).promise();
  }

  describeEntityRecognizer: (params: RawParamsFrom<'describeEntityRecognizer'>) => Promise<ReturnTypeFrom<'describeEntityRecognizer'>>  = async params => {
  // undefined
    return this.client.describeEntityRecognizer(params as any).promise();
  }

  describeEventsDetectionJob: (params: RawParamsFrom<'describeEventsDetectionJob'>) => Promise<ReturnTypeFrom<'describeEventsDetectionJob'>>  = async params => {
  // undefined
    return this.client.describeEventsDetectionJob(params as any).promise();
  }

  describeKeyPhrasesDetectionJob: (params: RawParamsFrom<'describeKeyPhrasesDetectionJob'>) => Promise<ReturnTypeFrom<'describeKeyPhrasesDetectionJob'>>  = async params => {
  // undefined
    return this.client.describeKeyPhrasesDetectionJob(params as any).promise();
  }

  describePiiEntitiesDetectionJob: (params: RawParamsFrom<'describePiiEntitiesDetectionJob'>) => Promise<ReturnTypeFrom<'describePiiEntitiesDetectionJob'>>  = async params => {
  // undefined
    return this.client.describePiiEntitiesDetectionJob(params as any).promise();
  }

  describeResourcePolicy: (params: RawParamsFrom<'describeResourcePolicy'>) => Promise<ReturnTypeFrom<'describeResourcePolicy'>>  = async params => {
  // undefined
    return this.client.describeResourcePolicy(params as any).promise();
  }

  describeSentimentDetectionJob: (params: RawParamsFrom<'describeSentimentDetectionJob'>) => Promise<ReturnTypeFrom<'describeSentimentDetectionJob'>>  = async params => {
  // undefined
    return this.client.describeSentimentDetectionJob(params as any).promise();
  }

  describeTargetedSentimentDetectionJob: (params: RawParamsFrom<'describeTargetedSentimentDetectionJob'>) => Promise<ReturnTypeFrom<'describeTargetedSentimentDetectionJob'>>  = async params => {
  // undefined
    return this.client.describeTargetedSentimentDetectionJob(params as any).promise();
  }

  describeTopicsDetectionJob: (params: RawParamsFrom<'describeTopicsDetectionJob'>) => Promise<ReturnTypeFrom<'describeTopicsDetectionJob'>>  = async params => {
  // undefined
    return this.client.describeTopicsDetectionJob(params as any).promise();
  }

  detectDominantLanguage: (params: RawParamsFrom<'detectDominantLanguage'>) => Promise<ReturnTypeFrom<'detectDominantLanguage'>>  = async params => {
  // undefined
    return this.client.detectDominantLanguage(params as any).promise();
  }

  detectEntities: (params: RawParamsFrom<'detectEntities'>) => Promise<ReturnTypeFrom<'detectEntities'>>  = async params => {
  // undefined
    return this.client.detectEntities(params as any).promise();
  }

  detectKeyPhrases: (params: RawParamsFrom<'detectKeyPhrases'>) => Promise<ReturnTypeFrom<'detectKeyPhrases'>>  = async params => {
  // undefined
    return this.client.detectKeyPhrases(params as any).promise();
  }

  detectPiiEntities: (params: RawParamsFrom<'detectPiiEntities'>) => Promise<ReturnTypeFrom<'detectPiiEntities'>>  = async params => {
  // undefined
    return this.client.detectPiiEntities(params as any).promise();
  }

  detectSentiment: (params: RawParamsFrom<'detectSentiment'>) => Promise<ReturnTypeFrom<'detectSentiment'>>  = async params => {
  // undefined
    return this.client.detectSentiment(params as any).promise();
  }

  detectSyntax: (params: RawParamsFrom<'detectSyntax'>) => Promise<ReturnTypeFrom<'detectSyntax'>>  = async params => {
  // undefined
    return this.client.detectSyntax(params as any).promise();
  }

  detectTargetedSentiment: (params: RawParamsFrom<'detectTargetedSentiment'>) => Promise<ReturnTypeFrom<'detectTargetedSentiment'>>  = async params => {
  // undefined
    return this.client.detectTargetedSentiment(params as any).promise();
  }

  importModel: (params: RawParamsFrom<'importModel'>) => Promise<ReturnTypeFrom<'importModel'>>  = async params => {
  // undefined
    return this.client.importModel(params as any).promise();
  }

  listDocumentClassificationJobs: (params: RawParamsFrom<'listDocumentClassificationJobs'>) => Promise<ReturnTypeFrom<'listDocumentClassificationJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDocumentClassificationJobs(params as any).promise();
  }

  listDocumentClassifierSummaries: (params: RawParamsFrom<'listDocumentClassifierSummaries'>) => Promise<ReturnTypeFrom<'listDocumentClassifierSummaries'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDocumentClassifierSummaries(params as any).promise();
  }

  listDocumentClassifiers: (params: RawParamsFrom<'listDocumentClassifiers'>) => Promise<ReturnTypeFrom<'listDocumentClassifiers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDocumentClassifiers(params as any).promise();
  }

  listDominantLanguageDetectionJobs: (params: RawParamsFrom<'listDominantLanguageDetectionJobs'>) => Promise<ReturnTypeFrom<'listDominantLanguageDetectionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDominantLanguageDetectionJobs(params as any).promise();
  }

  listEndpoints: (params: RawParamsFrom<'listEndpoints'>) => Promise<ReturnTypeFrom<'listEndpoints'>>  = async params => {
  // undefined
    return this.client.listEndpoints(params as any).promise();
  }

  listEntitiesDetectionJobs: (params: RawParamsFrom<'listEntitiesDetectionJobs'>) => Promise<ReturnTypeFrom<'listEntitiesDetectionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntitiesDetectionJobs(params as any).promise();
  }

  listEntityRecognizerSummaries: (params: RawParamsFrom<'listEntityRecognizerSummaries'>) => Promise<ReturnTypeFrom<'listEntityRecognizerSummaries'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntityRecognizerSummaries(params as any).promise();
  }

  listEntityRecognizers: (params: RawParamsFrom<'listEntityRecognizers'>) => Promise<ReturnTypeFrom<'listEntityRecognizers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntityRecognizers(params as any).promise();
  }

  listEventsDetectionJobs: (params: RawParamsFrom<'listEventsDetectionJobs'>) => Promise<ReturnTypeFrom<'listEventsDetectionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEventsDetectionJobs(params as any).promise();
  }

  listKeyPhrasesDetectionJobs: (params: RawParamsFrom<'listKeyPhrasesDetectionJobs'>) => Promise<ReturnTypeFrom<'listKeyPhrasesDetectionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listKeyPhrasesDetectionJobs(params as any).promise();
  }

  listPiiEntitiesDetectionJobs: (params: RawParamsFrom<'listPiiEntitiesDetectionJobs'>) => Promise<ReturnTypeFrom<'listPiiEntitiesDetectionJobs'>>  = async params => {
  // undefined
    return this.client.listPiiEntitiesDetectionJobs(params as any).promise();
  }

  listSentimentDetectionJobs: (params: RawParamsFrom<'listSentimentDetectionJobs'>) => Promise<ReturnTypeFrom<'listSentimentDetectionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSentimentDetectionJobs(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTargetedSentimentDetectionJobs: (params: RawParamsFrom<'listTargetedSentimentDetectionJobs'>) => Promise<ReturnTypeFrom<'listTargetedSentimentDetectionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTargetedSentimentDetectionJobs(params as any).promise();
  }

  listTopicsDetectionJobs: (params: RawParamsFrom<'listTopicsDetectionJobs'>) => Promise<ReturnTypeFrom<'listTopicsDetectionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTopicsDetectionJobs(params as any).promise();
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  startDocumentClassificationJob: (params: RawParamsFrom<'startDocumentClassificationJob'>) => Promise<ReturnTypeFrom<'startDocumentClassificationJob'>>  = async params => {
  // undefined
    return this.client.startDocumentClassificationJob(params as any).promise();
  }

  startDominantLanguageDetectionJob: (params: RawParamsFrom<'startDominantLanguageDetectionJob'>) => Promise<ReturnTypeFrom<'startDominantLanguageDetectionJob'>>  = async params => {
  // undefined
    return this.client.startDominantLanguageDetectionJob(params as any).promise();
  }

  startEntitiesDetectionJob: (params: RawParamsFrom<'startEntitiesDetectionJob'>) => Promise<ReturnTypeFrom<'startEntitiesDetectionJob'>>  = async params => {
  // undefined
    return this.client.startEntitiesDetectionJob(params as any).promise();
  }

  startEventsDetectionJob: (params: RawParamsFrom<'startEventsDetectionJob'>) => Promise<ReturnTypeFrom<'startEventsDetectionJob'>>  = async params => {
  // undefined
    return this.client.startEventsDetectionJob(params as any).promise();
  }

  startKeyPhrasesDetectionJob: (params: RawParamsFrom<'startKeyPhrasesDetectionJob'>) => Promise<ReturnTypeFrom<'startKeyPhrasesDetectionJob'>>  = async params => {
  // undefined
    return this.client.startKeyPhrasesDetectionJob(params as any).promise();
  }

  startPiiEntitiesDetectionJob: (params: RawParamsFrom<'startPiiEntitiesDetectionJob'>) => Promise<ReturnTypeFrom<'startPiiEntitiesDetectionJob'>>  = async params => {
  // undefined
    return this.client.startPiiEntitiesDetectionJob(params as any).promise();
  }

  startSentimentDetectionJob: (params: RawParamsFrom<'startSentimentDetectionJob'>) => Promise<ReturnTypeFrom<'startSentimentDetectionJob'>>  = async params => {
  // undefined
    return this.client.startSentimentDetectionJob(params as any).promise();
  }

  startTargetedSentimentDetectionJob: (params: RawParamsFrom<'startTargetedSentimentDetectionJob'>) => Promise<ReturnTypeFrom<'startTargetedSentimentDetectionJob'>>  = async params => {
  // undefined
    return this.client.startTargetedSentimentDetectionJob(params as any).promise();
  }

  startTopicsDetectionJob: (params: RawParamsFrom<'startTopicsDetectionJob'>) => Promise<ReturnTypeFrom<'startTopicsDetectionJob'>>  = async params => {
  // undefined
    return this.client.startTopicsDetectionJob(params as any).promise();
  }

  stopDominantLanguageDetectionJob: (params: RawParamsFrom<'stopDominantLanguageDetectionJob'>) => Promise<ReturnTypeFrom<'stopDominantLanguageDetectionJob'>>  = async params => {
  // undefined
    return this.client.stopDominantLanguageDetectionJob(params as any).promise();
  }

  stopEntitiesDetectionJob: (params: RawParamsFrom<'stopEntitiesDetectionJob'>) => Promise<ReturnTypeFrom<'stopEntitiesDetectionJob'>>  = async params => {
  // undefined
    return this.client.stopEntitiesDetectionJob(params as any).promise();
  }

  stopEventsDetectionJob: (params: RawParamsFrom<'stopEventsDetectionJob'>) => Promise<ReturnTypeFrom<'stopEventsDetectionJob'>>  = async params => {
  // undefined
    return this.client.stopEventsDetectionJob(params as any).promise();
  }

  stopKeyPhrasesDetectionJob: (params: RawParamsFrom<'stopKeyPhrasesDetectionJob'>) => Promise<ReturnTypeFrom<'stopKeyPhrasesDetectionJob'>>  = async params => {
  // undefined
    return this.client.stopKeyPhrasesDetectionJob(params as any).promise();
  }

  stopPiiEntitiesDetectionJob: (params: RawParamsFrom<'stopPiiEntitiesDetectionJob'>) => Promise<ReturnTypeFrom<'stopPiiEntitiesDetectionJob'>>  = async params => {
  // undefined
    return this.client.stopPiiEntitiesDetectionJob(params as any).promise();
  }

  stopSentimentDetectionJob: (params: RawParamsFrom<'stopSentimentDetectionJob'>) => Promise<ReturnTypeFrom<'stopSentimentDetectionJob'>>  = async params => {
  // undefined
    return this.client.stopSentimentDetectionJob(params as any).promise();
  }

  stopTargetedSentimentDetectionJob: (params: RawParamsFrom<'stopTargetedSentimentDetectionJob'>) => Promise<ReturnTypeFrom<'stopTargetedSentimentDetectionJob'>>  = async params => {
  // undefined
    return this.client.stopTargetedSentimentDetectionJob(params as any).promise();
  }

  stopTrainingDocumentClassifier: (params: RawParamsFrom<'stopTrainingDocumentClassifier'>) => Promise<ReturnTypeFrom<'stopTrainingDocumentClassifier'>>  = async params => {
  // undefined
    return this.client.stopTrainingDocumentClassifier(params as any).promise();
  }

  stopTrainingEntityRecognizer: (params: RawParamsFrom<'stopTrainingEntityRecognizer'>) => Promise<ReturnTypeFrom<'stopTrainingEntityRecognizer'>>  = async params => {
  // undefined
    return this.client.stopTrainingEntityRecognizer(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateEndpoint: (params: RawParamsFrom<'updateEndpoint'>) => Promise<ReturnTypeFrom<'updateEndpoint'>>  = async params => {
  // undefined
    return this.client.updateEndpoint(params as any).promise();
  }
  
  static fromClient(client: AWSComprehend): Comprehend {
    return new Comprehend(client) as any;
  }
  
  static client(options?: AWSComprehend.Types.ClientConfiguration): Comprehend {
    return new Comprehend(new AWSComprehend(options)) as any;
  }
}  
