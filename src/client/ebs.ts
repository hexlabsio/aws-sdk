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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEBS> = AWSEBS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class EBS {
  private constructor(private readonly client: AWSEBS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ebs' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = [] as const;
  
  completeSnapshot: (params: RawParamsFrom<'completeSnapshot'>) => Promise<ReturnTypeFrom<'completeSnapshot'>>  = async params => {
  // undefined
    return this.client.completeSnapshot(params as any).promise();
  }

  getSnapshotBlock: (params: RawParamsFrom<'getSnapshotBlock'>) => Promise<ReturnTypeFrom<'getSnapshotBlock'>>  = async params => {
  // undefined
    return this.client.getSnapshotBlock(params as any).promise();
  }

  listChangedBlocks: (params: RawParamsFrom<'listChangedBlocks'>) => Promise<ReturnTypeFrom<'listChangedBlocks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChangedBlocks(params as any).promise();
  }

  listSnapshotBlocks: (params: RawParamsFrom<'listSnapshotBlocks'>) => Promise<ReturnTypeFrom<'listSnapshotBlocks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSnapshotBlocks(params as any).promise();
  }

  putSnapshotBlock: (params: RawParamsFrom<'putSnapshotBlock'>) => Promise<ReturnTypeFrom<'putSnapshotBlock'>>  = async params => {
  // undefined
    return this.client.putSnapshotBlock(params as any).promise();
  }

  startSnapshot: (params: RawParamsFrom<'startSnapshot'>) => Promise<ReturnTypeFrom<'startSnapshot'>>  = async params => {
  // undefined
    return this.client.startSnapshot(params as any).promise();
  }
  
  static fromClient(client: AWSEBS): EBS {
    return new EBS(client) as any;
  }
  
  static client(options?: AWSEBS.Types.ClientConfiguration): EBS {
    return new EBS(new AWSEBS(options)) as any;
  }
}  
