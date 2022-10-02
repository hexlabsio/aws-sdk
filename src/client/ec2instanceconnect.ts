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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ec2-instance-connect';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  sendSSHPublicKey: FunctionTypeFrom<'sendSSHPublicKey'>;

  sendSerialConsoleSSHPublicKey: FunctionTypeFrom<'sendSerialConsoleSSHPublicKey'>
}
 
export class EC2InstanceConnect implements ClientType {
  private constructor(private readonly client: AWSEC2InstanceConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ec2-instance-connect';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async sendSSHPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.sendSSHPublicKey(...args).promise()
  }

  async sendSerialConsoleSSHPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.sendSerialConsoleSSHPublicKey(...args).promise()
  }
  
  static fromClient(client: AWSEC2InstanceConnect): ClientType {
    return new EC2InstanceConnect(client) as any;
  }
  
  static client(options?: AWSEC2InstanceConnect.Types.ClientConfiguration): ClientType {
    return new EC2InstanceConnect(new AWSEC2InstanceConnect(options)) as any;
  }
}  
