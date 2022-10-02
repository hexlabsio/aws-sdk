import { Request, AppRunner as AWSAppRunner } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAppRunner> = AWSAppRunner[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAppRunner> = AWSAppRunner[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAppRunner[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAppRunner, Extras> = AWSAppRunner[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'apprunner';
    global: false;
    category: 'End User Computing'
    topLevelCalls: readonly ["listAutoScalingConfigurations","listConnections","listObservabilityConfigurations","listServices","listVpcConnectors"];
    
  associateCustomDomain: FunctionTypeFrom<'associateCustomDomain'>;

  createAutoScalingConfiguration: FunctionTypeFrom<'createAutoScalingConfiguration'>;

  createConnection: FunctionTypeFrom<'createConnection'>;

  createObservabilityConfiguration: FunctionTypeFrom<'createObservabilityConfiguration'>;

  createService: FunctionTypeFrom<'createService'>;

  createVpcConnector: FunctionTypeFrom<'createVpcConnector'>;

  deleteAutoScalingConfiguration: FunctionTypeFrom<'deleteAutoScalingConfiguration'>;

  deleteConnection: FunctionTypeFrom<'deleteConnection'>;

  deleteObservabilityConfiguration: FunctionTypeFrom<'deleteObservabilityConfiguration'>;

  deleteService: FunctionTypeFrom<'deleteService'>;

  deleteVpcConnector: FunctionTypeFrom<'deleteVpcConnector'>;

  describeAutoScalingConfiguration: FunctionTypeFrom<'describeAutoScalingConfiguration'>;

  describeCustomDomains: FunctionTypeFrom<'describeCustomDomains'>;

  describeObservabilityConfiguration: FunctionTypeFrom<'describeObservabilityConfiguration'>;

  describeService: FunctionTypeFrom<'describeService'>;

  describeVpcConnector: FunctionTypeFrom<'describeVpcConnector'>;

  disassociateCustomDomain: FunctionTypeFrom<'disassociateCustomDomain'>;

  listAutoScalingConfigurations: FunctionTypeFrom<'listAutoScalingConfigurations'>;

  listConnections: FunctionTypeFrom<'listConnections'>;

  listObservabilityConfigurations: FunctionTypeFrom<'listObservabilityConfigurations'>;

  listOperations: FunctionTypeFrom<'listOperations'>;

  listServices: FunctionTypeFrom<'listServices'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listVpcConnectors: FunctionTypeFrom<'listVpcConnectors'>;

  pauseService: FunctionTypeFrom<'pauseService'>;

  resumeService: FunctionTypeFrom<'resumeService'>;

  startDeployment: FunctionTypeFrom<'startDeployment'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateService: FunctionTypeFrom<'updateService'>
}
 
export class AppRunner implements ClientType {
  private constructor(private readonly client: AWSAppRunner) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'apprunner';
  public readonly global = false;
  public readonly category = 'End User Computing';
  public readonly topLevelCalls = ["listAutoScalingConfigurations","listConnections","listObservabilityConfigurations","listServices","listVpcConnectors"] as const;
  
  async associateCustomDomain(...args: any): Promise<any> {
  // undefined
    return this.client.associateCustomDomain(...args).promise()
  }

  async createAutoScalingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createAutoScalingConfiguration(...args).promise()
  }

  async createConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createConnection(...args).promise()
  }

  async createObservabilityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createObservabilityConfiguration(...args).promise()
  }

  async createService(...args: any): Promise<any> {
  // undefined
    return this.client.createService(...args).promise()
  }

  async createVpcConnector(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcConnector(...args).promise()
  }

  async deleteAutoScalingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAutoScalingConfiguration(...args).promise()
  }

  async deleteConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnection(...args).promise()
  }

  async deleteObservabilityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteObservabilityConfiguration(...args).promise()
  }

  async deleteService(...args: any): Promise<any> {
  // undefined
    return this.client.deleteService(...args).promise()
  }

  async deleteVpcConnector(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpcConnector(...args).promise()
  }

  async describeAutoScalingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeAutoScalingConfiguration(...args).promise()
  }

  async describeCustomDomains(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeCustomDomains(...args).promise()
  }

  async describeObservabilityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeObservabilityConfiguration(...args).promise()
  }

  async describeService(...args: any): Promise<any> {
  // undefined
    return this.client.describeService(...args).promise()
  }

  async describeVpcConnector(...args: any): Promise<any> {
  // undefined
    return this.client.describeVpcConnector(...args).promise()
  }

  async disassociateCustomDomain(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateCustomDomain(...args).promise()
  }

  async listAutoScalingConfigurations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAutoScalingConfigurations(...args).promise()
  }

  async listConnections(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConnections(...args).promise()
  }

  async listObservabilityConfigurations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObservabilityConfigurations(...args).promise()
  }

  async listOperations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOperations(...args).promise()
  }

  async listServices(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listServices(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listVpcConnectors(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVpcConnectors(...args).promise()
  }

  async pauseService(...args: any): Promise<any> {
  // undefined
    return this.client.pauseService(...args).promise()
  }

  async resumeService(...args: any): Promise<any> {
  // undefined
    return this.client.resumeService(...args).promise()
  }

  async startDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.startDeployment(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateService(...args: any): Promise<any> {
  // undefined
    return this.client.updateService(...args).promise()
  }
  
  static fromClient(client: AWSAppRunner): ClientType {
    return new AppRunner(client) as any;
  }
  
  static client(options?: AWSAppRunner.Types.ClientConfiguration): ClientType {
    return new AppRunner(new AWSAppRunner(options)) as any;
  }
}  
