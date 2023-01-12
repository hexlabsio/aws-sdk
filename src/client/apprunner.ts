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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAppRunner> = AWSAppRunner[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AppRunner {
  private constructor(private readonly client: AWSAppRunner) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'apprunner' as const;
  public readonly global = false as const;
  public readonly category = 'End User Computing' as const;
  public readonly topLevelCalls = ["listAutoScalingConfigurations","listConnections","listObservabilityConfigurations","listServices","listVpcConnectors","listVpcIngressConnections"] as const;
  
  associateCustomDomain: (params: RawParamsFrom<'associateCustomDomain'>) => Promise<ReturnTypeFrom<'associateCustomDomain'>>  = async params => {
  // undefined
    return this.client.associateCustomDomain(params as any).promise();
  }

  createAutoScalingConfiguration: (params: RawParamsFrom<'createAutoScalingConfiguration'>) => Promise<ReturnTypeFrom<'createAutoScalingConfiguration'>>  = async params => {
  // undefined
    return this.client.createAutoScalingConfiguration(params as any).promise();
  }

  createConnection: (params: RawParamsFrom<'createConnection'>) => Promise<ReturnTypeFrom<'createConnection'>>  = async params => {
  // undefined
    return this.client.createConnection(params as any).promise();
  }

  createObservabilityConfiguration: (params: RawParamsFrom<'createObservabilityConfiguration'>) => Promise<ReturnTypeFrom<'createObservabilityConfiguration'>>  = async params => {
  // undefined
    return this.client.createObservabilityConfiguration(params as any).promise();
  }

  createService: (params: RawParamsFrom<'createService'>) => Promise<ReturnTypeFrom<'createService'>>  = async params => {
  // undefined
    return this.client.createService(params as any).promise();
  }

  createVpcConnector: (params: RawParamsFrom<'createVpcConnector'>) => Promise<ReturnTypeFrom<'createVpcConnector'>>  = async params => {
  // undefined
    return this.client.createVpcConnector(params as any).promise();
  }

  createVpcIngressConnection: (params: RawParamsFrom<'createVpcIngressConnection'>) => Promise<ReturnTypeFrom<'createVpcIngressConnection'>>  = async params => {
  // undefined
    return this.client.createVpcIngressConnection(params as any).promise();
  }

  deleteAutoScalingConfiguration: (params: RawParamsFrom<'deleteAutoScalingConfiguration'>) => Promise<ReturnTypeFrom<'deleteAutoScalingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteAutoScalingConfiguration(params as any).promise();
  }

  deleteConnection: (params: RawParamsFrom<'deleteConnection'>) => Promise<ReturnTypeFrom<'deleteConnection'>>  = async params => {
  // undefined
    return this.client.deleteConnection(params as any).promise();
  }

  deleteObservabilityConfiguration: (params: RawParamsFrom<'deleteObservabilityConfiguration'>) => Promise<ReturnTypeFrom<'deleteObservabilityConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteObservabilityConfiguration(params as any).promise();
  }

  deleteService: (params: RawParamsFrom<'deleteService'>) => Promise<ReturnTypeFrom<'deleteService'>>  = async params => {
  // undefined
    return this.client.deleteService(params as any).promise();
  }

  deleteVpcConnector: (params: RawParamsFrom<'deleteVpcConnector'>) => Promise<ReturnTypeFrom<'deleteVpcConnector'>>  = async params => {
  // undefined
    return this.client.deleteVpcConnector(params as any).promise();
  }

  deleteVpcIngressConnection: (params: RawParamsFrom<'deleteVpcIngressConnection'>) => Promise<ReturnTypeFrom<'deleteVpcIngressConnection'>>  = async params => {
  // undefined
    return this.client.deleteVpcIngressConnection(params as any).promise();
  }

  describeAutoScalingConfiguration: (params: RawParamsFrom<'describeAutoScalingConfiguration'>) => Promise<ReturnTypeFrom<'describeAutoScalingConfiguration'>>  = async params => {
  // undefined
    return this.client.describeAutoScalingConfiguration(params as any).promise();
  }

  describeCustomDomains: (params: RawParamsFrom<'describeCustomDomains'>) => Promise<ReturnTypeFrom<'describeCustomDomains'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeCustomDomains(params as any).promise();
  }

  describeObservabilityConfiguration: (params: RawParamsFrom<'describeObservabilityConfiguration'>) => Promise<ReturnTypeFrom<'describeObservabilityConfiguration'>>  = async params => {
  // undefined
    return this.client.describeObservabilityConfiguration(params as any).promise();
  }

  describeService: (params: RawParamsFrom<'describeService'>) => Promise<ReturnTypeFrom<'describeService'>>  = async params => {
  // undefined
    return this.client.describeService(params as any).promise();
  }

  describeVpcConnector: (params: RawParamsFrom<'describeVpcConnector'>) => Promise<ReturnTypeFrom<'describeVpcConnector'>>  = async params => {
  // undefined
    return this.client.describeVpcConnector(params as any).promise();
  }

  describeVpcIngressConnection: (params: RawParamsFrom<'describeVpcIngressConnection'>) => Promise<ReturnTypeFrom<'describeVpcIngressConnection'>>  = async params => {
  // undefined
    return this.client.describeVpcIngressConnection(params as any).promise();
  }

  disassociateCustomDomain: (params: RawParamsFrom<'disassociateCustomDomain'>) => Promise<ReturnTypeFrom<'disassociateCustomDomain'>>  = async params => {
  // undefined
    return this.client.disassociateCustomDomain(params as any).promise();
  }

  listAutoScalingConfigurations: (params: RawParamsFrom<'listAutoScalingConfigurations'>) => Promise<ReturnTypeFrom<'listAutoScalingConfigurations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAutoScalingConfigurations(params as any).promise();
  }

  listConnections: (params: RawParamsFrom<'listConnections'>) => Promise<ReturnTypeFrom<'listConnections'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConnections(params as any).promise();
  }

  listObservabilityConfigurations: (params: RawParamsFrom<'listObservabilityConfigurations'>) => Promise<ReturnTypeFrom<'listObservabilityConfigurations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObservabilityConfigurations(params as any).promise();
  }

  listOperations: (params: RawParamsFrom<'listOperations'>) => Promise<ReturnTypeFrom<'listOperations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOperations(params as any).promise();
  }

  listServices: (params: RawParamsFrom<'listServices'>) => Promise<ReturnTypeFrom<'listServices'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listServices(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listVpcConnectors: (params: RawParamsFrom<'listVpcConnectors'>) => Promise<ReturnTypeFrom<'listVpcConnectors'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVpcConnectors(params as any).promise();
  }

  listVpcIngressConnections: (params: RawParamsFrom<'listVpcIngressConnections'>) => Promise<ReturnTypeFrom<'listVpcIngressConnections'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVpcIngressConnections(params as any).promise();
  }

  pauseService: (params: RawParamsFrom<'pauseService'>) => Promise<ReturnTypeFrom<'pauseService'>>  = async params => {
  // undefined
    return this.client.pauseService(params as any).promise();
  }

  resumeService: (params: RawParamsFrom<'resumeService'>) => Promise<ReturnTypeFrom<'resumeService'>>  = async params => {
  // undefined
    return this.client.resumeService(params as any).promise();
  }

  startDeployment: (params: RawParamsFrom<'startDeployment'>) => Promise<ReturnTypeFrom<'startDeployment'>>  = async params => {
  // undefined
    return this.client.startDeployment(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateService: (params: RawParamsFrom<'updateService'>) => Promise<ReturnTypeFrom<'updateService'>>  = async params => {
  // undefined
    return this.client.updateService(params as any).promise();
  }

  updateVpcIngressConnection: (params: RawParamsFrom<'updateVpcIngressConnection'>) => Promise<ReturnTypeFrom<'updateVpcIngressConnection'>>  = async params => {
  // undefined
    return this.client.updateVpcIngressConnection(params as any).promise();
  }
  
  static fromClient(client: AWSAppRunner): AppRunner {
    return new AppRunner(client) as any;
  }
  
  static client(options?: AWSAppRunner.Types.ClientConfiguration): AppRunner {
    return new AppRunner(new AWSAppRunner(options)) as any;
  }
}  
