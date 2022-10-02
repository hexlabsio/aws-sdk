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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'participant';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  completeAttachmentUpload: FunctionTypeFrom<'completeAttachmentUpload'>;

  createParticipantConnection: FunctionTypeFrom<'createParticipantConnection'>;

  disconnectParticipant: FunctionTypeFrom<'disconnectParticipant'>;

  getAttachment: FunctionTypeFrom<'getAttachment'>;

  getTranscript: FunctionTypeFrom<'getTranscript'>;

  sendEvent: FunctionTypeFrom<'sendEvent'>;

  sendMessage: FunctionTypeFrom<'sendMessage'>;

  startAttachmentUpload: FunctionTypeFrom<'startAttachmentUpload'>
}
 
export class ConnectParticipant implements ClientType {
  private constructor(private readonly client: AWSConnectParticipant) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'participant';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async completeAttachmentUpload(...args: any): Promise<any> {
  // undefined
    return this.client.completeAttachmentUpload(...args).promise()
  }

  async createParticipantConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createParticipantConnection(...args).promise()
  }

  async disconnectParticipant(...args: any): Promise<any> {
  // undefined
    return this.client.disconnectParticipant(...args).promise()
  }

  async getAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.getAttachment(...args).promise()
  }

  async getTranscript(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTranscript(...args).promise()
  }

  async sendEvent(...args: any): Promise<any> {
  // undefined
    return this.client.sendEvent(...args).promise()
  }

  async sendMessage(...args: any): Promise<any> {
  // undefined
    return this.client.sendMessage(...args).promise()
  }

  async startAttachmentUpload(...args: any): Promise<any> {
  // undefined
    return this.client.startAttachmentUpload(...args).promise()
  }
  
  static fromClient(client: AWSConnectParticipant): ClientType {
    return new ConnectParticipant(client) as any;
  }
  
  static client(options?: AWSConnectParticipant.Types.ClientConfiguration): ClientType {
    return new ConnectParticipant(new AWSConnectParticipant(options)) as any;
  }
}  
