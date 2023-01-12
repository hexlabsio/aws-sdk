import { Request, SimSpaceWeaver as AWSSimSpaceWeaver } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSimSpaceWeaver> = AWSSimSpaceWeaver[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSimSpaceWeaver> = AWSSimSpaceWeaver[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSimSpaceWeaver[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSimSpaceWeaver, Extras> = AWSSimSpaceWeaver[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSimSpaceWeaver> = AWSSimSpaceWeaver[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SimSpaceWeaver {
  private constructor(private readonly client: AWSSimSpaceWeaver) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'simspaceweaver' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listSimulations"] as const;
  
  deleteApp: (params: RawParamsFrom<'deleteApp'>) => Promise<ReturnTypeFrom<'deleteApp'>>  = async params => {
  // undefined
    return this.client.deleteApp(params as any).promise();
  }

  deleteSimulation: (params: RawParamsFrom<'deleteSimulation'>) => Promise<ReturnTypeFrom<'deleteSimulation'>>  = async params => {
  // undefined
    return this.client.deleteSimulation(params as any).promise();
  }

  describeApp: (params: RawParamsFrom<'describeApp'>) => Promise<ReturnTypeFrom<'describeApp'>>  = async params => {
  // undefined
    return this.client.describeApp(params as any).promise();
  }

  describeSimulation: (params: RawParamsFrom<'describeSimulation'>) => Promise<ReturnTypeFrom<'describeSimulation'>>  = async params => {
  // undefined
    return this.client.describeSimulation(params as any).promise();
  }

  listApps: (params: RawParamsFrom<'listApps'>) => Promise<ReturnTypeFrom<'listApps'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApps(params as any).promise();
  }

  listSimulations: (params: RawParamsFrom<'listSimulations'>) => Promise<ReturnTypeFrom<'listSimulations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSimulations(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startApp: (params: RawParamsFrom<'startApp'>) => Promise<ReturnTypeFrom<'startApp'>>  = async params => {
  // undefined
    return this.client.startApp(params as any).promise();
  }

  startClock: (params: RawParamsFrom<'startClock'>) => Promise<ReturnTypeFrom<'startClock'>>  = async params => {
  // undefined
    return this.client.startClock(params as any).promise();
  }

  startSimulation: (params: RawParamsFrom<'startSimulation'>) => Promise<ReturnTypeFrom<'startSimulation'>>  = async params => {
  // undefined
    return this.client.startSimulation(params as any).promise();
  }

  stopApp: (params: RawParamsFrom<'stopApp'>) => Promise<ReturnTypeFrom<'stopApp'>>  = async params => {
  // undefined
    return this.client.stopApp(params as any).promise();
  }

  stopClock: (params: RawParamsFrom<'stopClock'>) => Promise<ReturnTypeFrom<'stopClock'>>  = async params => {
  // undefined
    return this.client.stopClock(params as any).promise();
  }

  stopSimulation: (params: RawParamsFrom<'stopSimulation'>) => Promise<ReturnTypeFrom<'stopSimulation'>>  = async params => {
  // undefined
    return this.client.stopSimulation(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSSimSpaceWeaver): SimSpaceWeaver {
    return new SimSpaceWeaver(client) as any;
  }
  
  static client(options?: AWSSimSpaceWeaver.Types.ClientConfiguration): SimSpaceWeaver {
    return new SimSpaceWeaver(new AWSSimSpaceWeaver(options)) as any;
  }
}  
