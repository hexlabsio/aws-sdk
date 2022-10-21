import { Request, ComprehendMedical as AWSComprehendMedical } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSComprehendMedical> = AWSComprehendMedical[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSComprehendMedical> = AWSComprehendMedical[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSComprehendMedical[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSComprehendMedical, Extras> = AWSComprehendMedical[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSComprehendMedical> = AWSComprehendMedical[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ComprehendMedical {
  private constructor(private readonly client: AWSComprehendMedical) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'comprehendmedical' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = [] as const;
  
  describeEntitiesDetectionV2Job: (params: RawParamsFrom<'describeEntitiesDetectionV2Job'>) => Promise<ReturnTypeFrom<'describeEntitiesDetectionV2Job'>>  = async params => {
  // undefined
    return this.client.describeEntitiesDetectionV2Job(params as any).promise();
  }

  describeICD10CMInferenceJob: (params: RawParamsFrom<'describeICD10CMInferenceJob'>) => Promise<ReturnTypeFrom<'describeICD10CMInferenceJob'>>  = async params => {
  // undefined
    return this.client.describeICD10CMInferenceJob(params as any).promise();
  }

  describePHIDetectionJob: (params: RawParamsFrom<'describePHIDetectionJob'>) => Promise<ReturnTypeFrom<'describePHIDetectionJob'>>  = async params => {
  // undefined
    return this.client.describePHIDetectionJob(params as any).promise();
  }

  describeRxNormInferenceJob: (params: RawParamsFrom<'describeRxNormInferenceJob'>) => Promise<ReturnTypeFrom<'describeRxNormInferenceJob'>>  = async params => {
  // undefined
    return this.client.describeRxNormInferenceJob(params as any).promise();
  }

  describeSNOMEDCTInferenceJob: (params: RawParamsFrom<'describeSNOMEDCTInferenceJob'>) => Promise<ReturnTypeFrom<'describeSNOMEDCTInferenceJob'>>  = async params => {
  // undefined
    return this.client.describeSNOMEDCTInferenceJob(params as any).promise();
  }

  detectEntities: (params: RawParamsFrom<'detectEntities'>) => Promise<ReturnTypeFrom<'detectEntities'>>  = async params => {
  // undefined
    return this.client.detectEntities(params as any).promise();
  }

  detectEntitiesV2: (params: RawParamsFrom<'detectEntitiesV2'>) => Promise<ReturnTypeFrom<'detectEntitiesV2'>>  = async params => {
  // undefined
    return this.client.detectEntitiesV2(params as any).promise();
  }

  detectPHI: (params: RawParamsFrom<'detectPHI'>) => Promise<ReturnTypeFrom<'detectPHI'>>  = async params => {
  // undefined
    return this.client.detectPHI(params as any).promise();
  }

  inferICD10CM: (params: RawParamsFrom<'inferICD10CM'>) => Promise<ReturnTypeFrom<'inferICD10CM'>>  = async params => {
  // undefined
    return this.client.inferICD10CM(params as any).promise();
  }

  inferRxNorm: (params: RawParamsFrom<'inferRxNorm'>) => Promise<ReturnTypeFrom<'inferRxNorm'>>  = async params => {
  // undefined
    return this.client.inferRxNorm(params as any).promise();
  }

  inferSNOMEDCT: (params: RawParamsFrom<'inferSNOMEDCT'>) => Promise<ReturnTypeFrom<'inferSNOMEDCT'>>  = async params => {
  // undefined
    return this.client.inferSNOMEDCT(params as any).promise();
  }

  listEntitiesDetectionV2Jobs: (params: RawParamsFrom<'listEntitiesDetectionV2Jobs'>) => Promise<ReturnTypeFrom<'listEntitiesDetectionV2Jobs'>>  = async params => {
  // undefined
    return this.client.listEntitiesDetectionV2Jobs(params as any).promise();
  }

  listICD10CMInferenceJobs: (params: RawParamsFrom<'listICD10CMInferenceJobs'>) => Promise<ReturnTypeFrom<'listICD10CMInferenceJobs'>>  = async params => {
  // undefined
    return this.client.listICD10CMInferenceJobs(params as any).promise();
  }

  listPHIDetectionJobs: (params: RawParamsFrom<'listPHIDetectionJobs'>) => Promise<ReturnTypeFrom<'listPHIDetectionJobs'>>  = async params => {
  // undefined
    return this.client.listPHIDetectionJobs(params as any).promise();
  }

  listRxNormInferenceJobs: (params: RawParamsFrom<'listRxNormInferenceJobs'>) => Promise<ReturnTypeFrom<'listRxNormInferenceJobs'>>  = async params => {
  // undefined
    return this.client.listRxNormInferenceJobs(params as any).promise();
  }

  listSNOMEDCTInferenceJobs: (params: RawParamsFrom<'listSNOMEDCTInferenceJobs'>) => Promise<ReturnTypeFrom<'listSNOMEDCTInferenceJobs'>>  = async params => {
  // undefined
    return this.client.listSNOMEDCTInferenceJobs(params as any).promise();
  }

  startEntitiesDetectionV2Job: (params: RawParamsFrom<'startEntitiesDetectionV2Job'>) => Promise<ReturnTypeFrom<'startEntitiesDetectionV2Job'>>  = async params => {
  // undefined
    return this.client.startEntitiesDetectionV2Job(params as any).promise();
  }

  startICD10CMInferenceJob: (params: RawParamsFrom<'startICD10CMInferenceJob'>) => Promise<ReturnTypeFrom<'startICD10CMInferenceJob'>>  = async params => {
  // undefined
    return this.client.startICD10CMInferenceJob(params as any).promise();
  }

  startPHIDetectionJob: (params: RawParamsFrom<'startPHIDetectionJob'>) => Promise<ReturnTypeFrom<'startPHIDetectionJob'>>  = async params => {
  // undefined
    return this.client.startPHIDetectionJob(params as any).promise();
  }

  startRxNormInferenceJob: (params: RawParamsFrom<'startRxNormInferenceJob'>) => Promise<ReturnTypeFrom<'startRxNormInferenceJob'>>  = async params => {
  // undefined
    return this.client.startRxNormInferenceJob(params as any).promise();
  }

  startSNOMEDCTInferenceJob: (params: RawParamsFrom<'startSNOMEDCTInferenceJob'>) => Promise<ReturnTypeFrom<'startSNOMEDCTInferenceJob'>>  = async params => {
  // undefined
    return this.client.startSNOMEDCTInferenceJob(params as any).promise();
  }

  stopEntitiesDetectionV2Job: (params: RawParamsFrom<'stopEntitiesDetectionV2Job'>) => Promise<ReturnTypeFrom<'stopEntitiesDetectionV2Job'>>  = async params => {
  // undefined
    return this.client.stopEntitiesDetectionV2Job(params as any).promise();
  }

  stopICD10CMInferenceJob: (params: RawParamsFrom<'stopICD10CMInferenceJob'>) => Promise<ReturnTypeFrom<'stopICD10CMInferenceJob'>>  = async params => {
  // undefined
    return this.client.stopICD10CMInferenceJob(params as any).promise();
  }

  stopPHIDetectionJob: (params: RawParamsFrom<'stopPHIDetectionJob'>) => Promise<ReturnTypeFrom<'stopPHIDetectionJob'>>  = async params => {
  // undefined
    return this.client.stopPHIDetectionJob(params as any).promise();
  }

  stopRxNormInferenceJob: (params: RawParamsFrom<'stopRxNormInferenceJob'>) => Promise<ReturnTypeFrom<'stopRxNormInferenceJob'>>  = async params => {
  // undefined
    return this.client.stopRxNormInferenceJob(params as any).promise();
  }

  stopSNOMEDCTInferenceJob: (params: RawParamsFrom<'stopSNOMEDCTInferenceJob'>) => Promise<ReturnTypeFrom<'stopSNOMEDCTInferenceJob'>>  = async params => {
  // undefined
    return this.client.stopSNOMEDCTInferenceJob(params as any).promise();
  }
  
  static fromClient(client: AWSComprehendMedical): ComprehendMedical {
    return new ComprehendMedical(client) as any;
  }
  
  static client(options?: AWSComprehendMedical.Types.ClientConfiguration): ComprehendMedical {
    return new ComprehendMedical(new AWSComprehendMedical(options)) as any;
  }
}  
