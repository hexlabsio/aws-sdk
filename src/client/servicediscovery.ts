import { Request, ServiceDiscovery as AWSServiceDiscovery } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSServiceDiscovery> = AWSServiceDiscovery[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSServiceDiscovery> = AWSServiceDiscovery[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSServiceDiscovery[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSServiceDiscovery, Extras> = AWSServiceDiscovery[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSServiceDiscovery> = AWSServiceDiscovery[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ServiceDiscovery {
  private constructor(private readonly client: AWSServiceDiscovery) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'servicediscovery' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["listNamespaces","listOperations","listServices"] as const;
  
  createHttpNamespace: (params: RawParamsFrom<'createHttpNamespace'>) => Promise<ReturnTypeFrom<'createHttpNamespace'>>  = async params => {
  // undefined
    return this.client.createHttpNamespace(params as any).promise();
  }

  createPrivateDnsNamespace: (params: RawParamsFrom<'createPrivateDnsNamespace'>) => Promise<ReturnTypeFrom<'createPrivateDnsNamespace'>>  = async params => {
  // undefined
    return this.client.createPrivateDnsNamespace(params as any).promise();
  }

  createPublicDnsNamespace: (params: RawParamsFrom<'createPublicDnsNamespace'>) => Promise<ReturnTypeFrom<'createPublicDnsNamespace'>>  = async params => {
  // undefined
    return this.client.createPublicDnsNamespace(params as any).promise();
  }

  createService: (params: RawParamsFrom<'createService'>) => Promise<ReturnTypeFrom<'createService'>>  = async params => {
  // undefined
    return this.client.createService(params as any).promise();
  }

  deleteNamespace: (params: RawParamsFrom<'deleteNamespace'>) => Promise<ReturnTypeFrom<'deleteNamespace'>>  = async params => {
  // undefined
    return this.client.deleteNamespace(params as any).promise();
  }

  deleteService: (params: RawParamsFrom<'deleteService'>) => Promise<ReturnTypeFrom<'deleteService'>>  = async params => {
  // undefined
    return this.client.deleteService(params as any).promise();
  }

  deregisterInstance: (params: RawParamsFrom<'deregisterInstance'>) => Promise<ReturnTypeFrom<'deregisterInstance'>>  = async params => {
  // undefined
    return this.client.deregisterInstance(params as any).promise();
  }

  discoverInstances: (params: RawParamsFrom<'discoverInstances'>) => Promise<ReturnTypeFrom<'discoverInstances'>>  = async params => {
  // undefined
    return this.client.discoverInstances(params as any).promise();
  }

  getInstance: (params: RawParamsFrom<'getInstance'>) => Promise<ReturnTypeFrom<'getInstance'>>  = async params => {
  // undefined
    return this.client.getInstance(params as any).promise();
  }

  getInstancesHealthStatus: (params: RawParamsFrom<'getInstancesHealthStatus'>) => Promise<ReturnTypeFrom<'getInstancesHealthStatus'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getInstancesHealthStatus(params as any).promise();
  }

  getNamespace: (params: RawParamsFrom<'getNamespace'>) => Promise<ReturnTypeFrom<'getNamespace'>>  = async params => {
  // undefined
    return this.client.getNamespace(params as any).promise();
  }

  getOperation: (params: RawParamsFrom<'getOperation'>) => Promise<ReturnTypeFrom<'getOperation'>>  = async params => {
  // undefined
    return this.client.getOperation(params as any).promise();
  }

  getService: (params: RawParamsFrom<'getService'>) => Promise<ReturnTypeFrom<'getService'>>  = async params => {
  // undefined
    return this.client.getService(params as any).promise();
  }

  listInstances: (params: RawParamsFrom<'listInstances'>) => Promise<ReturnTypeFrom<'listInstances'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInstances(params as any).promise();
  }

  listNamespaces: (params: RawParamsFrom<'listNamespaces'>) => Promise<ReturnTypeFrom<'listNamespaces'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNamespaces(params as any).promise();
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

  registerInstance: (params: RawParamsFrom<'registerInstance'>) => Promise<ReturnTypeFrom<'registerInstance'>>  = async params => {
  // undefined
    return this.client.registerInstance(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateHttpNamespace: (params: RawParamsFrom<'updateHttpNamespace'>) => Promise<ReturnTypeFrom<'updateHttpNamespace'>>  = async params => {
  // undefined
    return this.client.updateHttpNamespace(params as any).promise();
  }

  updateInstanceCustomHealthStatus: (params: RawParamsFrom<'updateInstanceCustomHealthStatus'>) => Promise<ReturnTypeFrom<'updateInstanceCustomHealthStatus'>>  = async params => {
  // undefined
    return this.client.updateInstanceCustomHealthStatus(params as any).promise();
  }

  updatePrivateDnsNamespace: (params: RawParamsFrom<'updatePrivateDnsNamespace'>) => Promise<ReturnTypeFrom<'updatePrivateDnsNamespace'>>  = async params => {
  // undefined
    return this.client.updatePrivateDnsNamespace(params as any).promise();
  }

  updatePublicDnsNamespace: (params: RawParamsFrom<'updatePublicDnsNamespace'>) => Promise<ReturnTypeFrom<'updatePublicDnsNamespace'>>  = async params => {
  // undefined
    return this.client.updatePublicDnsNamespace(params as any).promise();
  }

  updateService: (params: RawParamsFrom<'updateService'>) => Promise<ReturnTypeFrom<'updateService'>>  = async params => {
  // undefined
    return this.client.updateService(params as any).promise();
  }
  
  static fromClient(client: AWSServiceDiscovery): ServiceDiscovery {
    return new ServiceDiscovery(client) as any;
  }
  
  static client(options?: AWSServiceDiscovery.Types.ClientConfiguration): ServiceDiscovery {
    return new ServiceDiscovery(new AWSServiceDiscovery(options)) as any;
  }
}  
