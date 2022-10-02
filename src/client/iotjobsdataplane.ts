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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'data';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  describeJobExecution: FunctionTypeFrom<'describeJobExecution'>;

  getPendingJobExecutions: FunctionTypeFrom<'getPendingJobExecutions'>;

  startNextPendingJobExecution: FunctionTypeFrom<'startNextPendingJobExecution'>;

  updateJobExecution: FunctionTypeFrom<'updateJobExecution'>
}
 
export class IoTJobsDataPlane implements ClientType {
  private constructor(private readonly client: AWSIoTJobsDataPlane) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'data';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async describeJobExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describeJobExecution(...args).promise()
  }

  async getPendingJobExecutions(...args: any): Promise<any> {
  // undefined
    return this.client.getPendingJobExecutions(...args).promise()
  }

  async startNextPendingJobExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startNextPendingJobExecution(...args).promise()
  }

  async updateJobExecution(...args: any): Promise<any> {
  // undefined
    return this.client.updateJobExecution(...args).promise()
  }
  
  static fromClient(client: AWSIoTJobsDataPlane): ClientType {
    return new IoTJobsDataPlane(client) as any;
  }
  
  static client(options?: AWSIoTJobsDataPlane.Types.ClientConfiguration): ClientType {
    return new IoTJobsDataPlane(new AWSIoTJobsDataPlane(options)) as any;
  }
}  
