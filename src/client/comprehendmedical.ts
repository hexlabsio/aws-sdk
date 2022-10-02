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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'comprehendmedical';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly [];
    
  describeEntitiesDetectionV2Job: FunctionTypeFrom<'describeEntitiesDetectionV2Job'>;

  describeICD10CMInferenceJob: FunctionTypeFrom<'describeICD10CMInferenceJob'>;

  describePHIDetectionJob: FunctionTypeFrom<'describePHIDetectionJob'>;

  describeRxNormInferenceJob: FunctionTypeFrom<'describeRxNormInferenceJob'>;

  describeSNOMEDCTInferenceJob: FunctionTypeFrom<'describeSNOMEDCTInferenceJob'>;

  detectEntities: FunctionTypeFrom<'detectEntities'>;

  detectEntitiesV2: FunctionTypeFrom<'detectEntitiesV2'>;

  detectPHI: FunctionTypeFrom<'detectPHI'>;

  inferICD10CM: FunctionTypeFrom<'inferICD10CM'>;

  inferRxNorm: FunctionTypeFrom<'inferRxNorm'>;

  inferSNOMEDCT: FunctionTypeFrom<'inferSNOMEDCT'>;

  listEntitiesDetectionV2Jobs: FunctionTypeFrom<'listEntitiesDetectionV2Jobs'>;

  listICD10CMInferenceJobs: FunctionTypeFrom<'listICD10CMInferenceJobs'>;

  listPHIDetectionJobs: FunctionTypeFrom<'listPHIDetectionJobs'>;

  listRxNormInferenceJobs: FunctionTypeFrom<'listRxNormInferenceJobs'>;

  listSNOMEDCTInferenceJobs: FunctionTypeFrom<'listSNOMEDCTInferenceJobs'>;

  startEntitiesDetectionV2Job: FunctionTypeFrom<'startEntitiesDetectionV2Job'>;

  startICD10CMInferenceJob: FunctionTypeFrom<'startICD10CMInferenceJob'>;

  startPHIDetectionJob: FunctionTypeFrom<'startPHIDetectionJob'>;

  startRxNormInferenceJob: FunctionTypeFrom<'startRxNormInferenceJob'>;

  startSNOMEDCTInferenceJob: FunctionTypeFrom<'startSNOMEDCTInferenceJob'>;

  stopEntitiesDetectionV2Job: FunctionTypeFrom<'stopEntitiesDetectionV2Job'>;

  stopICD10CMInferenceJob: FunctionTypeFrom<'stopICD10CMInferenceJob'>;

  stopPHIDetectionJob: FunctionTypeFrom<'stopPHIDetectionJob'>;

  stopRxNormInferenceJob: FunctionTypeFrom<'stopRxNormInferenceJob'>;

  stopSNOMEDCTInferenceJob: FunctionTypeFrom<'stopSNOMEDCTInferenceJob'>
}
 
export class ComprehendMedical implements ClientType {
  private constructor(private readonly client: AWSComprehendMedical) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'comprehendmedical';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = [] as const;
  
  async describeEntitiesDetectionV2Job(...args: any): Promise<any> {
  // undefined
    return this.client.describeEntitiesDetectionV2Job(...args).promise()
  }

  async describeICD10CMInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeICD10CMInferenceJob(...args).promise()
  }

  async describePHIDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describePHIDetectionJob(...args).promise()
  }

  async describeRxNormInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeRxNormInferenceJob(...args).promise()
  }

  async describeSNOMEDCTInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeSNOMEDCTInferenceJob(...args).promise()
  }

  async detectEntities(...args: any): Promise<any> {
  // undefined
    return this.client.detectEntities(...args).promise()
  }

  async detectEntitiesV2(...args: any): Promise<any> {
  // undefined
    return this.client.detectEntitiesV2(...args).promise()
  }

  async detectPHI(...args: any): Promise<any> {
  // undefined
    return this.client.detectPHI(...args).promise()
  }

  async inferICD10CM(...args: any): Promise<any> {
  // undefined
    return this.client.inferICD10CM(...args).promise()
  }

  async inferRxNorm(...args: any): Promise<any> {
  // undefined
    return this.client.inferRxNorm(...args).promise()
  }

  async inferSNOMEDCT(...args: any): Promise<any> {
  // undefined
    return this.client.inferSNOMEDCT(...args).promise()
  }

  async listEntitiesDetectionV2Jobs(...args: any): Promise<any> {
  // undefined
    return this.client.listEntitiesDetectionV2Jobs(...args).promise()
  }

  async listICD10CMInferenceJobs(...args: any): Promise<any> {
  // undefined
    return this.client.listICD10CMInferenceJobs(...args).promise()
  }

  async listPHIDetectionJobs(...args: any): Promise<any> {
  // undefined
    return this.client.listPHIDetectionJobs(...args).promise()
  }

  async listRxNormInferenceJobs(...args: any): Promise<any> {
  // undefined
    return this.client.listRxNormInferenceJobs(...args).promise()
  }

  async listSNOMEDCTInferenceJobs(...args: any): Promise<any> {
  // undefined
    return this.client.listSNOMEDCTInferenceJobs(...args).promise()
  }

  async startEntitiesDetectionV2Job(...args: any): Promise<any> {
  // undefined
    return this.client.startEntitiesDetectionV2Job(...args).promise()
  }

  async startICD10CMInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.startICD10CMInferenceJob(...args).promise()
  }

  async startPHIDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startPHIDetectionJob(...args).promise()
  }

  async startRxNormInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.startRxNormInferenceJob(...args).promise()
  }

  async startSNOMEDCTInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.startSNOMEDCTInferenceJob(...args).promise()
  }

  async stopEntitiesDetectionV2Job(...args: any): Promise<any> {
  // undefined
    return this.client.stopEntitiesDetectionV2Job(...args).promise()
  }

  async stopICD10CMInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopICD10CMInferenceJob(...args).promise()
  }

  async stopPHIDetectionJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopPHIDetectionJob(...args).promise()
  }

  async stopRxNormInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopRxNormInferenceJob(...args).promise()
  }

  async stopSNOMEDCTInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopSNOMEDCTInferenceJob(...args).promise()
  }
  
  static fromClient(client: AWSComprehendMedical): ClientType {
    return new ComprehendMedical(client) as any;
  }
  
  static client(options?: AWSComprehendMedical.Types.ClientConfiguration): ClientType {
    return new ComprehendMedical(new AWSComprehendMedical(options)) as any;
  }
}  
