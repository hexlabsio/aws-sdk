import { Request, VoiceID as AWSVoiceID } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSVoiceID> = AWSVoiceID[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSVoiceID> = AWSVoiceID[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSVoiceID[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSVoiceID, Extras> = AWSVoiceID[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'voiceid';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listDomains"];
    
  createDomain: FunctionTypeFrom<'createDomain'>;

  deleteDomain: FunctionTypeFrom<'deleteDomain'>;

  deleteFraudster: FunctionTypeFrom<'deleteFraudster'>;

  deleteSpeaker: FunctionTypeFrom<'deleteSpeaker'>;

  describeDomain: FunctionTypeFrom<'describeDomain'>;

  describeFraudster: FunctionTypeFrom<'describeFraudster'>;

  describeFraudsterRegistrationJob: FunctionTypeFrom<'describeFraudsterRegistrationJob'>;

  describeSpeaker: FunctionTypeFrom<'describeSpeaker'>;

  describeSpeakerEnrollmentJob: FunctionTypeFrom<'describeSpeakerEnrollmentJob'>;

  evaluateSession: FunctionTypeFrom<'evaluateSession'>;

  listDomains(params: { [K in keyof Omit<ParamsFrom<'listDomains', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['DomainSummaries'] }>
  listDomains(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['DomainSummaries'] }>;

  listFraudsterRegistrationJobs(params: { [K in keyof Omit<ParamsFrom<'listFraudsterRegistrationJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFraudsterRegistrationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFraudsterRegistrationJobs'>]-?: ReturnTypeFrom<'listFraudsterRegistrationJobs'>[K]}['JobSummaries'] }>
  ;

  listSpeakerEnrollmentJobs(params: { [K in keyof Omit<ParamsFrom<'listSpeakerEnrollmentJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSpeakerEnrollmentJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSpeakerEnrollmentJobs'>]-?: ReturnTypeFrom<'listSpeakerEnrollmentJobs'>[K]}['JobSummaries'] }>
  ;

  listSpeakers(params: { [K in keyof Omit<ParamsFrom<'listSpeakers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSpeakers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSpeakers'>]-?: ReturnTypeFrom<'listSpeakers'>[K]}['SpeakerSummaries'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  optOutSpeaker: FunctionTypeFrom<'optOutSpeaker'>;

  startFraudsterRegistrationJob: FunctionTypeFrom<'startFraudsterRegistrationJob'>;

  startSpeakerEnrollmentJob: FunctionTypeFrom<'startSpeakerEnrollmentJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDomain: FunctionTypeFrom<'updateDomain'>
}
 
export class VoiceID implements ClientType {
  private constructor(private readonly client: AWSVoiceID) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'voiceid';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listDomains"] as const;
  
  async createDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createDomain(...args).promise()
  }

  async deleteDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomain(...args).promise()
  }

  async deleteFraudster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFraudster(...args).promise()
  }

  async deleteSpeaker(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSpeaker(...args).promise()
  }

  async describeDomain(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomain(...args).promise()
  }

  async describeFraudster(...args: any): Promise<any> {
  // undefined
    return this.client.describeFraudster(...args).promise()
  }

  async describeFraudsterRegistrationJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeFraudsterRegistrationJob(...args).promise()
  }

  async describeSpeaker(...args: any): Promise<any> {
  // undefined
    return this.client.describeSpeaker(...args).promise()
  }

  async describeSpeakerEnrollmentJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeSpeakerEnrollmentJob(...args).promise()
  }

  async evaluateSession(...args: any): Promise<any> {
  // undefined
    return this.client.evaluateSession(...args).promise()
  }

  async listDomains(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DomainSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDomains(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DomainSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFraudsterRegistrationJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFraudsterRegistrationJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.JobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSpeakerEnrollmentJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSpeakerEnrollmentJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.JobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSpeakers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpeakerSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSpeakers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SpeakerSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async optOutSpeaker(...args: any): Promise<any> {
  // undefined
    return this.client.optOutSpeaker(...args).promise()
  }

  async startFraudsterRegistrationJob(...args: any): Promise<any> {
  // undefined
    return this.client.startFraudsterRegistrationJob(...args).promise()
  }

  async startSpeakerEnrollmentJob(...args: any): Promise<any> {
  // undefined
    return this.client.startSpeakerEnrollmentJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDomain(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomain(...args).promise()
  }
  
  static fromClient(client: AWSVoiceID): ClientType {
    return new VoiceID(client) as any;
  }
  
  static client(options?: AWSVoiceID.Types.ClientConfiguration): ClientType {
    return new VoiceID(new AWSVoiceID(options)) as any;
  }
}  
