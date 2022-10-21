import { Request, ChimeSDKMeetings as AWSChimeSDKMeetings } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSChimeSDKMeetings> = AWSChimeSDKMeetings[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSChimeSDKMeetings> = AWSChimeSDKMeetings[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSChimeSDKMeetings[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSChimeSDKMeetings, Extras> = AWSChimeSDKMeetings[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSChimeSDKMeetings> = AWSChimeSDKMeetings[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ChimeSDKMeetings {
  private constructor(private readonly client: AWSChimeSDKMeetings) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'meetings-chime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  batchCreateAttendee: (params: RawParamsFrom<'batchCreateAttendee'>) => Promise<ReturnTypeFrom<'batchCreateAttendee'>>  = async params => {
  // undefined
    return this.client.batchCreateAttendee(params as any).promise();
  }

  batchUpdateAttendeeCapabilitiesExcept: (params: RawParamsFrom<'batchUpdateAttendeeCapabilitiesExcept'>) => Promise<ReturnTypeFrom<'batchUpdateAttendeeCapabilitiesExcept'>>  = async params => {
  // undefined
    return this.client.batchUpdateAttendeeCapabilitiesExcept(params as any).promise();
  }

  createAttendee: (params: RawParamsFrom<'createAttendee'>) => Promise<ReturnTypeFrom<'createAttendee'>>  = async params => {
  // undefined
    return this.client.createAttendee(params as any).promise();
  }

  createMeeting: (params: RawParamsFrom<'createMeeting'>) => Promise<ReturnTypeFrom<'createMeeting'>>  = async params => {
  // undefined
    return this.client.createMeeting(params as any).promise();
  }

  createMeetingWithAttendees: (params: RawParamsFrom<'createMeetingWithAttendees'>) => Promise<ReturnTypeFrom<'createMeetingWithAttendees'>>  = async params => {
  // undefined
    return this.client.createMeetingWithAttendees(params as any).promise();
  }

  deleteAttendee: (params: RawParamsFrom<'deleteAttendee'>) => Promise<ReturnTypeFrom<'deleteAttendee'>>  = async params => {
  // undefined
    return this.client.deleteAttendee(params as any).promise();
  }

  deleteMeeting: (params: RawParamsFrom<'deleteMeeting'>) => Promise<ReturnTypeFrom<'deleteMeeting'>>  = async params => {
  // undefined
    return this.client.deleteMeeting(params as any).promise();
  }

  getAttendee: (params: RawParamsFrom<'getAttendee'>) => Promise<ReturnTypeFrom<'getAttendee'>>  = async params => {
  // undefined
    return this.client.getAttendee(params as any).promise();
  }

  getMeeting: (params: RawParamsFrom<'getMeeting'>) => Promise<ReturnTypeFrom<'getMeeting'>>  = async params => {
  // undefined
    return this.client.getMeeting(params as any).promise();
  }

  listAttendees: (params: RawParamsFrom<'listAttendees'>) => Promise<ReturnTypeFrom<'listAttendees'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAttendees(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startMeetingTranscription: (params: RawParamsFrom<'startMeetingTranscription'>) => Promise<ReturnTypeFrom<'startMeetingTranscription'>>  = async params => {
  // undefined
    return this.client.startMeetingTranscription(params as any).promise();
  }

  stopMeetingTranscription: (params: RawParamsFrom<'stopMeetingTranscription'>) => Promise<ReturnTypeFrom<'stopMeetingTranscription'>>  = async params => {
  // undefined
    return this.client.stopMeetingTranscription(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAttendeeCapabilities: (params: RawParamsFrom<'updateAttendeeCapabilities'>) => Promise<ReturnTypeFrom<'updateAttendeeCapabilities'>>  = async params => {
  // undefined
    return this.client.updateAttendeeCapabilities(params as any).promise();
  }
  
  static fromClient(client: AWSChimeSDKMeetings): ChimeSDKMeetings {
    return new ChimeSDKMeetings(client) as any;
  }
  
  static client(options?: AWSChimeSDKMeetings.Types.ClientConfiguration): ChimeSDKMeetings {
    return new ChimeSDKMeetings(new AWSChimeSDKMeetings(options)) as any;
  }
}  
