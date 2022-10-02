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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'meetings-chime';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  batchCreateAttendee: FunctionTypeFrom<'batchCreateAttendee'>;

  batchUpdateAttendeeCapabilitiesExcept: FunctionTypeFrom<'batchUpdateAttendeeCapabilitiesExcept'>;

  createAttendee: FunctionTypeFrom<'createAttendee'>;

  createMeeting: FunctionTypeFrom<'createMeeting'>;

  createMeetingWithAttendees: FunctionTypeFrom<'createMeetingWithAttendees'>;

  deleteAttendee: FunctionTypeFrom<'deleteAttendee'>;

  deleteMeeting: FunctionTypeFrom<'deleteMeeting'>;

  getAttendee: FunctionTypeFrom<'getAttendee'>;

  getMeeting: FunctionTypeFrom<'getMeeting'>;

  listAttendees: FunctionTypeFrom<'listAttendees'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startMeetingTranscription: FunctionTypeFrom<'startMeetingTranscription'>;

  stopMeetingTranscription: FunctionTypeFrom<'stopMeetingTranscription'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAttendeeCapabilities: FunctionTypeFrom<'updateAttendeeCapabilities'>
}
 
export class ChimeSDKMeetings implements ClientType {
  private constructor(private readonly client: AWSChimeSDKMeetings) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'meetings-chime';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async batchCreateAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreateAttendee(...args).promise()
  }

  async batchUpdateAttendeeCapabilitiesExcept(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdateAttendeeCapabilitiesExcept(...args).promise()
  }

  async createAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.createAttendee(...args).promise()
  }

  async createMeeting(...args: any): Promise<any> {
  // undefined
    return this.client.createMeeting(...args).promise()
  }

  async createMeetingWithAttendees(...args: any): Promise<any> {
  // undefined
    return this.client.createMeetingWithAttendees(...args).promise()
  }

  async deleteAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAttendee(...args).promise()
  }

  async deleteMeeting(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMeeting(...args).promise()
  }

  async getAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.getAttendee(...args).promise()
  }

  async getMeeting(...args: any): Promise<any> {
  // undefined
    return this.client.getMeeting(...args).promise()
  }

  async listAttendees(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAttendees(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async startMeetingTranscription(...args: any): Promise<any> {
  // undefined
    return this.client.startMeetingTranscription(...args).promise()
  }

  async stopMeetingTranscription(...args: any): Promise<any> {
  // undefined
    return this.client.stopMeetingTranscription(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAttendeeCapabilities(...args: any): Promise<any> {
  // undefined
    return this.client.updateAttendeeCapabilities(...args).promise()
  }
  
  static fromClient(client: AWSChimeSDKMeetings): ClientType {
    return new ChimeSDKMeetings(client) as any;
  }
  
  static client(options?: AWSChimeSDKMeetings.Types.ClientConfiguration): ClientType {
    return new ChimeSDKMeetings(new AWSChimeSDKMeetings(options)) as any;
  }
}  
