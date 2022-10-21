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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSVoiceID> = AWSVoiceID[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class VoiceID {
  private constructor(private readonly client: AWSVoiceID) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'voiceid' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listDomains"] as const;
  
  createDomain: (params: RawParamsFrom<'createDomain'>) => Promise<ReturnTypeFrom<'createDomain'>>  = async params => {
  // undefined
    return this.client.createDomain(params as any).promise();
  }

  deleteDomain: (params: RawParamsFrom<'deleteDomain'>) => Promise<ReturnTypeFrom<'deleteDomain'>>  = async params => {
  // undefined
    return this.client.deleteDomain(params as any).promise();
  }

  deleteFraudster: (params: RawParamsFrom<'deleteFraudster'>) => Promise<ReturnTypeFrom<'deleteFraudster'>>  = async params => {
  // undefined
    return this.client.deleteFraudster(params as any).promise();
  }

  deleteSpeaker: (params: RawParamsFrom<'deleteSpeaker'>) => Promise<ReturnTypeFrom<'deleteSpeaker'>>  = async params => {
  // undefined
    return this.client.deleteSpeaker(params as any).promise();
  }

  describeDomain: (params: RawParamsFrom<'describeDomain'>) => Promise<ReturnTypeFrom<'describeDomain'>>  = async params => {
  // undefined
    return this.client.describeDomain(params as any).promise();
  }

  describeFraudster: (params: RawParamsFrom<'describeFraudster'>) => Promise<ReturnTypeFrom<'describeFraudster'>>  = async params => {
  // undefined
    return this.client.describeFraudster(params as any).promise();
  }

  describeFraudsterRegistrationJob: (params: RawParamsFrom<'describeFraudsterRegistrationJob'>) => Promise<ReturnTypeFrom<'describeFraudsterRegistrationJob'>>  = async params => {
  // undefined
    return this.client.describeFraudsterRegistrationJob(params as any).promise();
  }

  describeSpeaker: (params: RawParamsFrom<'describeSpeaker'>) => Promise<ReturnTypeFrom<'describeSpeaker'>>  = async params => {
  // undefined
    return this.client.describeSpeaker(params as any).promise();
  }

  describeSpeakerEnrollmentJob: (params: RawParamsFrom<'describeSpeakerEnrollmentJob'>) => Promise<ReturnTypeFrom<'describeSpeakerEnrollmentJob'>>  = async params => {
  // undefined
    return this.client.describeSpeakerEnrollmentJob(params as any).promise();
  }

  evaluateSession: (params: RawParamsFrom<'evaluateSession'>) => Promise<ReturnTypeFrom<'evaluateSession'>>  = async params => {
  // undefined
    return this.client.evaluateSession(params as any).promise();
  }

  async listDomains(params: { [K in keyof ParamsFrom<'listDomains', { next?: string, limit?: number }>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['DomainSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DomainSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDomains({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDomains' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DomainSummaries ?? []) ? (result.DomainSummaries ?? []) : [result.DomainSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFraudsterRegistrationJobs(params: { [K in keyof ParamsFrom<'listFraudsterRegistrationJobs', { next?: string, limit?: number }>]: ParamsFrom<'listFraudsterRegistrationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFraudsterRegistrationJobs'>]-?: ReturnTypeFrom<'listFraudsterRegistrationJobs'>[K]}['JobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFraudsterRegistrationJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFraudsterRegistrationJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.JobSummaries ?? []) ? (result.JobSummaries ?? []) : [result.JobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSpeakerEnrollmentJobs(params: { [K in keyof ParamsFrom<'listSpeakerEnrollmentJobs', { next?: string, limit?: number }>]: ParamsFrom<'listSpeakerEnrollmentJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSpeakerEnrollmentJobs'>]-?: ReturnTypeFrom<'listSpeakerEnrollmentJobs'>[K]}['JobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSpeakerEnrollmentJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSpeakerEnrollmentJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.JobSummaries ?? []) ? (result.JobSummaries ?? []) : [result.JobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSpeakers(params: { [K in keyof ParamsFrom<'listSpeakers', { next?: string, limit?: number }>]: ParamsFrom<'listSpeakers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSpeakers'>]-?: ReturnTypeFrom<'listSpeakers'>[K]}['SpeakerSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpeakerSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSpeakers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSpeakers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SpeakerSummaries ?? []) ? (result.SpeakerSummaries ?? []) : [result.SpeakerSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  optOutSpeaker: (params: RawParamsFrom<'optOutSpeaker'>) => Promise<ReturnTypeFrom<'optOutSpeaker'>>  = async params => {
  // undefined
    return this.client.optOutSpeaker(params as any).promise();
  }

  startFraudsterRegistrationJob: (params: RawParamsFrom<'startFraudsterRegistrationJob'>) => Promise<ReturnTypeFrom<'startFraudsterRegistrationJob'>>  = async params => {
  // undefined
    return this.client.startFraudsterRegistrationJob(params as any).promise();
  }

  startSpeakerEnrollmentJob: (params: RawParamsFrom<'startSpeakerEnrollmentJob'>) => Promise<ReturnTypeFrom<'startSpeakerEnrollmentJob'>>  = async params => {
  // undefined
    return this.client.startSpeakerEnrollmentJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDomain: (params: RawParamsFrom<'updateDomain'>) => Promise<ReturnTypeFrom<'updateDomain'>>  = async params => {
  // undefined
    return this.client.updateDomain(params as any).promise();
  }
  
  static fromClient(client: AWSVoiceID): VoiceID {
    return new VoiceID(client) as any;
  }
  
  static client(options?: AWSVoiceID.Types.ClientConfiguration): VoiceID {
    return new VoiceID(new AWSVoiceID(options)) as any;
  }
}  
