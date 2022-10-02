import { Request, EBS as AWSEBS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEBS> = AWSEBS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEBS> = AWSEBS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEBS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEBS, Extras> = AWSEBS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ebs';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly [];
    
  completeSnapshot: FunctionTypeFrom<'completeSnapshot'>;

  getSnapshotBlock: FunctionTypeFrom<'getSnapshotBlock'>;

  listChangedBlocks: FunctionTypeFrom<'listChangedBlocks'>;

  listSnapshotBlocks: FunctionTypeFrom<'listSnapshotBlocks'>;

  putSnapshotBlock: FunctionTypeFrom<'putSnapshotBlock'>;

  startSnapshot: FunctionTypeFrom<'startSnapshot'>
}
 
export class EBS implements ClientType {
  private constructor(private readonly client: AWSEBS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ebs';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = [] as const;
  
  async completeSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.completeSnapshot(...args).promise()
  }

  async getSnapshotBlock(...args: any): Promise<any> {
  // undefined
    return this.client.getSnapshotBlock(...args).promise()
  }

  async listChangedBlocks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChangedBlocks(...args).promise()
  }

  async listSnapshotBlocks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSnapshotBlocks(...args).promise()
  }

  async putSnapshotBlock(...args: any): Promise<any> {
  // undefined
    return this.client.putSnapshotBlock(...args).promise()
  }

  async startSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.startSnapshot(...args).promise()
  }
  
  static fromClient(client: AWSEBS): ClientType {
    return new EBS(client) as any;
  }
  
  static client(options?: AWSEBS.Types.ClientConfiguration): ClientType {
    return new EBS(new AWSEBS(options)) as any;
  }
}  
