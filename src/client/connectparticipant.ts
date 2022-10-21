import { Request, ConnectParticipant as AWSConnectParticipant } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSConnectParticipant> = AWSConnectParticipant[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSConnectParticipant> = AWSConnectParticipant[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSConnectParticipant[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSConnectParticipant, Extras> = AWSConnectParticipant[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSConnectParticipant> = AWSConnectParticipant[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ConnectParticipant {
  private constructor(private readonly client: AWSConnectParticipant) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'participant' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  completeAttachmentUpload: (params: RawParamsFrom<'completeAttachmentUpload'>) => Promise<ReturnTypeFrom<'completeAttachmentUpload'>>  = async params => {
  // undefined
    return this.client.completeAttachmentUpload(params as any).promise();
  }

  createParticipantConnection: (params: RawParamsFrom<'createParticipantConnection'>) => Promise<ReturnTypeFrom<'createParticipantConnection'>>  = async params => {
  // undefined
    return this.client.createParticipantConnection(params as any).promise();
  }

  disconnectParticipant: (params: RawParamsFrom<'disconnectParticipant'>) => Promise<ReturnTypeFrom<'disconnectParticipant'>>  = async params => {
  // undefined
    return this.client.disconnectParticipant(params as any).promise();
  }

  getAttachment: (params: RawParamsFrom<'getAttachment'>) => Promise<ReturnTypeFrom<'getAttachment'>>  = async params => {
  // undefined
    return this.client.getAttachment(params as any).promise();
  }

  getTranscript: (params: RawParamsFrom<'getTranscript'>) => Promise<ReturnTypeFrom<'getTranscript'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTranscript(params as any).promise();
  }

  sendEvent: (params: RawParamsFrom<'sendEvent'>) => Promise<ReturnTypeFrom<'sendEvent'>>  = async params => {
  // undefined
    return this.client.sendEvent(params as any).promise();
  }

  sendMessage: (params: RawParamsFrom<'sendMessage'>) => Promise<ReturnTypeFrom<'sendMessage'>>  = async params => {
  // undefined
    return this.client.sendMessage(params as any).promise();
  }

  startAttachmentUpload: (params: RawParamsFrom<'startAttachmentUpload'>) => Promise<ReturnTypeFrom<'startAttachmentUpload'>>  = async params => {
  // undefined
    return this.client.startAttachmentUpload(params as any).promise();
  }
  
  static fromClient(client: AWSConnectParticipant): ConnectParticipant {
    return new ConnectParticipant(client) as any;
  }
  
  static client(options?: AWSConnectParticipant.Types.ClientConfiguration): ConnectParticipant {
    return new ConnectParticipant(new AWSConnectParticipant(options)) as any;
  }
}  
