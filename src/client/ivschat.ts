import { Request, Ivschat as AWSIvschat } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIvschat> = AWSIvschat[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIvschat> = AWSIvschat[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIvschat[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIvschat, Extras> = AWSIvschat[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIvschat> = AWSIvschat[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Ivschat {
  private constructor(private readonly client: AWSIvschat) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ivschat' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listRooms"] as const;
  
  createChatToken: (params: RawParamsFrom<'createChatToken'>) => Promise<ReturnTypeFrom<'createChatToken'>>  = async params => {
  // undefined
    return this.client.createChatToken(params as any).promise();
  }

  createRoom: (params: RawParamsFrom<'createRoom'>) => Promise<ReturnTypeFrom<'createRoom'>>  = async params => {
  // undefined
    return this.client.createRoom(params as any).promise();
  }

  deleteMessage: (params: RawParamsFrom<'deleteMessage'>) => Promise<ReturnTypeFrom<'deleteMessage'>>  = async params => {
  // undefined
    return this.client.deleteMessage(params as any).promise();
  }

  deleteRoom: (params: RawParamsFrom<'deleteRoom'>) => Promise<ReturnTypeFrom<'deleteRoom'>>  = async params => {
  // undefined
    return this.client.deleteRoom(params as any).promise();
  }

  disconnectUser: (params: RawParamsFrom<'disconnectUser'>) => Promise<ReturnTypeFrom<'disconnectUser'>>  = async params => {
  // undefined
    return this.client.disconnectUser(params as any).promise();
  }

  getRoom: (params: RawParamsFrom<'getRoom'>) => Promise<ReturnTypeFrom<'getRoom'>>  = async params => {
  // undefined
    return this.client.getRoom(params as any).promise();
  }

  listRooms: (params: RawParamsFrom<'listRooms'>) => Promise<ReturnTypeFrom<'listRooms'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRooms(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  sendEvent: (params: RawParamsFrom<'sendEvent'>) => Promise<ReturnTypeFrom<'sendEvent'>>  = async params => {
  // undefined
    return this.client.sendEvent(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateRoom: (params: RawParamsFrom<'updateRoom'>) => Promise<ReturnTypeFrom<'updateRoom'>>  = async params => {
  // undefined
    return this.client.updateRoom(params as any).promise();
  }
  
  static fromClient(client: AWSIvschat): Ivschat {
    return new Ivschat(client) as any;
  }
  
  static client(options?: AWSIvschat.Types.ClientConfiguration): Ivschat {
    return new Ivschat(new AWSIvschat(options)) as any;
  }
}  
