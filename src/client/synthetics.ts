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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSynthetics> = AWSSynthetics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Synthetics {
  private constructor(private readonly client: AWSSynthetics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'synthetics' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["describeCanaries","describeCanariesLastRun","describeRuntimeVersions","listGroups"] as const;
  
  associateResource: (params: RawParamsFrom<'associateResource'>) => Promise<ReturnTypeFrom<'associateResource'>>  = async params => {
  // undefined
    return this.client.associateResource(params as any).promise();
  }

  createCanary: (params: RawParamsFrom<'createCanary'>) => Promise<ReturnTypeFrom<'createCanary'>>  = async params => {
  // undefined
    return this.client.createCanary(params as any).promise();
  }

  createGroup: (params: RawParamsFrom<'createGroup'>) => Promise<ReturnTypeFrom<'createGroup'>>  = async params => {
  // undefined
    return this.client.createGroup(params as any).promise();
  }

  deleteCanary: (params: RawParamsFrom<'deleteCanary'>) => Promise<ReturnTypeFrom<'deleteCanary'>>  = async params => {
  // undefined
    return this.client.deleteCanary(params as any).promise();
  }

  deleteGroup: (params: RawParamsFrom<'deleteGroup'>) => Promise<ReturnTypeFrom<'deleteGroup'>>  = async params => {
  // undefined
    return this.client.deleteGroup(params as any).promise();
  }

  describeCanaries: (params: RawParamsFrom<'describeCanaries'>) => Promise<ReturnTypeFrom<'describeCanaries'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeCanaries(params as any).promise();
  }

  describeCanariesLastRun: (params: RawParamsFrom<'describeCanariesLastRun'>) => Promise<ReturnTypeFrom<'describeCanariesLastRun'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeCanariesLastRun(params as any).promise();
  }

  describeRuntimeVersions: (params: RawParamsFrom<'describeRuntimeVersions'>) => Promise<ReturnTypeFrom<'describeRuntimeVersions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeRuntimeVersions(params as any).promise();
  }

  disassociateResource: (params: RawParamsFrom<'disassociateResource'>) => Promise<ReturnTypeFrom<'disassociateResource'>>  = async params => {
  // undefined
    return this.client.disassociateResource(params as any).promise();
  }

  getCanary: (params: RawParamsFrom<'getCanary'>) => Promise<ReturnTypeFrom<'getCanary'>>  = async params => {
  // undefined
    return this.client.getCanary(params as any).promise();
  }

  getCanaryRuns: (params: RawParamsFrom<'getCanaryRuns'>) => Promise<ReturnTypeFrom<'getCanaryRuns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCanaryRuns(params as any).promise();
  }

  getGroup: (params: RawParamsFrom<'getGroup'>) => Promise<ReturnTypeFrom<'getGroup'>>  = async params => {
  // undefined
    return this.client.getGroup(params as any).promise();
  }

  listAssociatedGroups: (params: RawParamsFrom<'listAssociatedGroups'>) => Promise<ReturnTypeFrom<'listAssociatedGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAssociatedGroups(params as any).promise();
  }

  listGroupResources: (params: RawParamsFrom<'listGroupResources'>) => Promise<ReturnTypeFrom<'listGroupResources'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroupResources(params as any).promise();
  }

  listGroups: (params: RawParamsFrom<'listGroups'>) => Promise<ReturnTypeFrom<'listGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroups(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startCanary: (params: RawParamsFrom<'startCanary'>) => Promise<ReturnTypeFrom<'startCanary'>>  = async params => {
  // undefined
    return this.client.startCanary(params as any).promise();
  }

  stopCanary: (params: RawParamsFrom<'stopCanary'>) => Promise<ReturnTypeFrom<'stopCanary'>>  = async params => {
  // undefined
    return this.client.stopCanary(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCanary: (params: RawParamsFrom<'updateCanary'>) => Promise<ReturnTypeFrom<'updateCanary'>>  = async params => {
  // undefined
    return this.client.updateCanary(params as any).promise();
  }
  
  static fromClient(client: AWSSynthetics): Synthetics {
    return new Synthetics(client) as any;
  }
  
  static client(options?: AWSSynthetics.Types.ClientConfiguration): Synthetics {
    return new Synthetics(new AWSSynthetics(options)) as any;
  }
}  
