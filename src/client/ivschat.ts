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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ivschat';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listRooms"];
    
  createChatToken: FunctionTypeFrom<'createChatToken'>;

  createRoom: FunctionTypeFrom<'createRoom'>;

  deleteMessage: FunctionTypeFrom<'deleteMessage'>;

  deleteRoom: FunctionTypeFrom<'deleteRoom'>;

  disconnectUser: FunctionTypeFrom<'disconnectUser'>;

  getRoom: FunctionTypeFrom<'getRoom'>;

  listRooms: FunctionTypeFrom<'listRooms'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  sendEvent: FunctionTypeFrom<'sendEvent'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateRoom: FunctionTypeFrom<'updateRoom'>
}
 
export class Ivschat implements ClientType {
  private constructor(private readonly client: AWSIvschat) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ivschat';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listRooms"] as const;
  
  async createChatToken(...args: any): Promise<any> {
  // undefined
    return this.client.createChatToken(...args).promise()
  }

  async createRoom(...args: any): Promise<any> {
  // undefined
    return this.client.createRoom(...args).promise()
  }

  async deleteMessage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMessage(...args).promise()
  }

  async deleteRoom(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoom(...args).promise()
  }

  async disconnectUser(...args: any): Promise<any> {
  // undefined
    return this.client.disconnectUser(...args).promise()
  }

  async getRoom(...args: any): Promise<any> {
  // undefined
    return this.client.getRoom(...args).promise()
  }

  async listRooms(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRooms(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async sendEvent(...args: any): Promise<any> {
  // undefined
    return this.client.sendEvent(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateRoom(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoom(...args).promise()
  }
  
  static fromClient(client: AWSIvschat): ClientType {
    return new Ivschat(client) as any;
  }
  
  static client(options?: AWSIvschat.Types.ClientConfiguration): ClientType {
    return new Ivschat(new AWSIvschat(options)) as any;
  }
}  
