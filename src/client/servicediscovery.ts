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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'servicediscovery';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["listNamespaces","listOperations","listServices"];
    
  createHttpNamespace: FunctionTypeFrom<'createHttpNamespace'>;

  createPrivateDnsNamespace: FunctionTypeFrom<'createPrivateDnsNamespace'>;

  createPublicDnsNamespace: FunctionTypeFrom<'createPublicDnsNamespace'>;

  createService: FunctionTypeFrom<'createService'>;

  deleteNamespace: FunctionTypeFrom<'deleteNamespace'>;

  deleteService: FunctionTypeFrom<'deleteService'>;

  deregisterInstance: FunctionTypeFrom<'deregisterInstance'>;

  discoverInstances: FunctionTypeFrom<'discoverInstances'>;

  getInstance: FunctionTypeFrom<'getInstance'>;

  getInstancesHealthStatus: FunctionTypeFrom<'getInstancesHealthStatus'>;

  getNamespace: FunctionTypeFrom<'getNamespace'>;

  getOperation: FunctionTypeFrom<'getOperation'>;

  getService: FunctionTypeFrom<'getService'>;

  listInstances: FunctionTypeFrom<'listInstances'>;

  listNamespaces: FunctionTypeFrom<'listNamespaces'>;

  listOperations: FunctionTypeFrom<'listOperations'>;

  listServices: FunctionTypeFrom<'listServices'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  registerInstance: FunctionTypeFrom<'registerInstance'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateHttpNamespace: FunctionTypeFrom<'updateHttpNamespace'>;

  updateInstanceCustomHealthStatus: FunctionTypeFrom<'updateInstanceCustomHealthStatus'>;

  updatePrivateDnsNamespace: FunctionTypeFrom<'updatePrivateDnsNamespace'>;

  updatePublicDnsNamespace: FunctionTypeFrom<'updatePublicDnsNamespace'>;

  updateService: FunctionTypeFrom<'updateService'>
}
 
export class ServiceDiscovery implements ClientType {
  private constructor(private readonly client: AWSServiceDiscovery) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'servicediscovery';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["listNamespaces","listOperations","listServices"] as const;
  
  async createHttpNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.createHttpNamespace(...args).promise()
  }

  async createPrivateDnsNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.createPrivateDnsNamespace(...args).promise()
  }

  async createPublicDnsNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.createPublicDnsNamespace(...args).promise()
  }

  async createService(...args: any): Promise<any> {
  // undefined
    return this.client.createService(...args).promise()
  }

  async deleteNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNamespace(...args).promise()
  }

  async deleteService(...args: any): Promise<any> {
  // undefined
    return this.client.deleteService(...args).promise()
  }

  async deregisterInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterInstance(...args).promise()
  }

  async discoverInstances(...args: any): Promise<any> {
  // undefined
    return this.client.discoverInstances(...args).promise()
  }

  async getInstance(...args: any): Promise<any> {
  // undefined
    return this.client.getInstance(...args).promise()
  }

  async getInstancesHealthStatus(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getInstancesHealthStatus(...args).promise()
  }

  async getNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.getNamespace(...args).promise()
  }

  async getOperation(...args: any): Promise<any> {
  // undefined
    return this.client.getOperation(...args).promise()
  }

  async getService(...args: any): Promise<any> {
  // undefined
    return this.client.getService(...args).promise()
  }

  async listInstances(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInstances(...args).promise()
  }

  async listNamespaces(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNamespaces(...args).promise()
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

  async registerInstance(...args: any): Promise<any> {
  // undefined
    return this.client.registerInstance(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateHttpNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.updateHttpNamespace(...args).promise()
  }

  async updateInstanceCustomHealthStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateInstanceCustomHealthStatus(...args).promise()
  }

  async updatePrivateDnsNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.updatePrivateDnsNamespace(...args).promise()
  }

  async updatePublicDnsNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.updatePublicDnsNamespace(...args).promise()
  }

  async updateService(...args: any): Promise<any> {
  // undefined
    return this.client.updateService(...args).promise()
  }
  
  static fromClient(client: AWSServiceDiscovery): ClientType {
    return new ServiceDiscovery(client) as any;
  }
  
  static client(options?: AWSServiceDiscovery.Types.ClientConfiguration): ClientType {
    return new ServiceDiscovery(new AWSServiceDiscovery(options)) as any;
  }
}  
