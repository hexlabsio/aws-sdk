import { Request, IoTJobsDataPlane as AWSIoTJobsDataPlane } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTJobsDataPlane> = AWSIoTJobsDataPlane[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTJobsDataPlane> = AWSIoTJobsDataPlane[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTJobsDataPlane[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTJobsDataPlane, Extras> = AWSIoTJobsDataPlane[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTJobsDataPlane> = AWSIoTJobsDataPlane[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTJobsDataPlane {
  private constructor(private readonly client: AWSIoTJobsDataPlane) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'data' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  describeJobExecution: (params: RawParamsFrom<'describeJobExecution'>) => Promise<ReturnTypeFrom<'describeJobExecution'>>  = async params => {
  // undefined
    return this.client.describeJobExecution(params as any).promise();
  }

  getPendingJobExecutions: (params: RawParamsFrom<'getPendingJobExecutions'>) => Promise<ReturnTypeFrom<'getPendingJobExecutions'>>  = async params => {
  // undefined
    return this.client.getPendingJobExecutions(params as any).promise();
  }

  startNextPendingJobExecution: (params: RawParamsFrom<'startNextPendingJobExecution'>) => Promise<ReturnTypeFrom<'startNextPendingJobExecution'>>  = async params => {
  // undefined
    return this.client.startNextPendingJobExecution(params as any).promise();
  }

  updateJobExecution: (params: RawParamsFrom<'updateJobExecution'>) => Promise<ReturnTypeFrom<'updateJobExecution'>>  = async params => {
  // undefined
    return this.client.updateJobExecution(params as any).promise();
  }
  
  static fromClient(client: AWSIoTJobsDataPlane): IoTJobsDataPlane {
    return new IoTJobsDataPlane(client) as any;
  }
  
  static client(options?: AWSIoTJobsDataPlane.Types.ClientConfiguration): IoTJobsDataPlane {
    return new IoTJobsDataPlane(new AWSIoTJobsDataPlane(options)) as any;
  }
}  
