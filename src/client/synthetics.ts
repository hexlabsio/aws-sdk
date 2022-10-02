import { Request, Synthetics as AWSSynthetics } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSynthetics> = AWSSynthetics[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSynthetics> = AWSSynthetics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSynthetics[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSynthetics, Extras> = AWSSynthetics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'synthetics';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["describeCanaries","describeCanariesLastRun","describeRuntimeVersions","listGroups"];
    
  associateResource: FunctionTypeFrom<'associateResource'>;

  createCanary: FunctionTypeFrom<'createCanary'>;

  createGroup: FunctionTypeFrom<'createGroup'>;

  deleteCanary: FunctionTypeFrom<'deleteCanary'>;

  deleteGroup: FunctionTypeFrom<'deleteGroup'>;

  describeCanaries: FunctionTypeFrom<'describeCanaries'>;

  describeCanariesLastRun: FunctionTypeFrom<'describeCanariesLastRun'>;

  describeRuntimeVersions: FunctionTypeFrom<'describeRuntimeVersions'>;

  disassociateResource: FunctionTypeFrom<'disassociateResource'>;

  getCanary: FunctionTypeFrom<'getCanary'>;

  getCanaryRuns: FunctionTypeFrom<'getCanaryRuns'>;

  getGroup: FunctionTypeFrom<'getGroup'>;

  listAssociatedGroups: FunctionTypeFrom<'listAssociatedGroups'>;

  listGroupResources: FunctionTypeFrom<'listGroupResources'>;

  listGroups: FunctionTypeFrom<'listGroups'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startCanary: FunctionTypeFrom<'startCanary'>;

  stopCanary: FunctionTypeFrom<'stopCanary'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCanary: FunctionTypeFrom<'updateCanary'>
}
 
export class Synthetics implements ClientType {
  private constructor(private readonly client: AWSSynthetics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'synthetics';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["describeCanaries","describeCanariesLastRun","describeRuntimeVersions","listGroups"] as const;
  
  async associateResource(...args: any): Promise<any> {
  // undefined
    return this.client.associateResource(...args).promise()
  }

  async createCanary(...args: any): Promise<any> {
  // undefined
    return this.client.createCanary(...args).promise()
  }

  async createGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGroup(...args).promise()
  }

  async deleteCanary(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCanary(...args).promise()
  }

  async deleteGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroup(...args).promise()
  }

  async describeCanaries(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeCanaries(...args).promise()
  }

  async describeCanariesLastRun(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeCanariesLastRun(...args).promise()
  }

  async describeRuntimeVersions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeRuntimeVersions(...args).promise()
  }

  async disassociateResource(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateResource(...args).promise()
  }

  async getCanary(...args: any): Promise<any> {
  // undefined
    return this.client.getCanary(...args).promise()
  }

  async getCanaryRuns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCanaryRuns(...args).promise()
  }

  async getGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getGroup(...args).promise()
  }

  async listAssociatedGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAssociatedGroups(...args).promise()
  }

  async listGroupResources(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroupResources(...args).promise()
  }

  async listGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroups(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async startCanary(...args: any): Promise<any> {
  // undefined
    return this.client.startCanary(...args).promise()
  }

  async stopCanary(...args: any): Promise<any> {
  // undefined
    return this.client.stopCanary(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateCanary(...args: any): Promise<any> {
  // undefined
    return this.client.updateCanary(...args).promise()
  }
  
  static fromClient(client: AWSSynthetics): ClientType {
    return new Synthetics(client) as any;
  }
  
  static client(options?: AWSSynthetics.Types.ClientConfiguration): ClientType {
    return new Synthetics(new AWSSynthetics(options)) as any;
  }
}  
