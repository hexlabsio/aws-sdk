import { Request, EC2InstanceConnect as AWSEC2InstanceConnect } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEC2InstanceConnect> = AWSEC2InstanceConnect[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEC2InstanceConnect> = AWSEC2InstanceConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEC2InstanceConnect[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEC2InstanceConnect, Extras> = AWSEC2InstanceConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEC2InstanceConnect> = AWSEC2InstanceConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class EC2InstanceConnect {
  private constructor(private readonly client: AWSEC2InstanceConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ec2-instance-connect' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  sendSSHPublicKey: (params: RawParamsFrom<'sendSSHPublicKey'>) => Promise<ReturnTypeFrom<'sendSSHPublicKey'>>  = async params => {
  // undefined
    return this.client.sendSSHPublicKey(params as any).promise();
  }

  sendSerialConsoleSSHPublicKey: (params: RawParamsFrom<'sendSerialConsoleSSHPublicKey'>) => Promise<ReturnTypeFrom<'sendSerialConsoleSSHPublicKey'>>  = async params => {
  // undefined
    return this.client.sendSerialConsoleSSHPublicKey(params as any).promise();
  }
  
  static fromClient(client: AWSEC2InstanceConnect): EC2InstanceConnect {
    return new EC2InstanceConnect(client) as any;
  }
  
  static client(options?: AWSEC2InstanceConnect.Types.ClientConfiguration): EC2InstanceConnect {
    return new EC2InstanceConnect(new AWSEC2InstanceConnect(options)) as any;
  }
}  
