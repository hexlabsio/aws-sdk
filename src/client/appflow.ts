import { Request, Appflow as AWSAppflow } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAppflow> = AWSAppflow[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAppflow> = AWSAppflow[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAppflow[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAppflow, Extras> = AWSAppflow[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAppflow> = AWSAppflow[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Appflow {
  private constructor(private readonly client: AWSAppflow) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appflow' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = ["describeConnectorProfiles","describeConnectors","listConnectors","listFlows"] as const;
  
  createConnectorProfile: (params: RawParamsFrom<'createConnectorProfile'>) => Promise<ReturnTypeFrom<'createConnectorProfile'>>  = async params => {
  // undefined
    return this.client.createConnectorProfile(params as any).promise();
  }

  createFlow: (params: RawParamsFrom<'createFlow'>) => Promise<ReturnTypeFrom<'createFlow'>>  = async params => {
  // undefined
    return this.client.createFlow(params as any).promise();
  }

  deleteConnectorProfile: (params: RawParamsFrom<'deleteConnectorProfile'>) => Promise<ReturnTypeFrom<'deleteConnectorProfile'>>  = async params => {
  // undefined
    return this.client.deleteConnectorProfile(params as any).promise();
  }

  deleteFlow: (params: RawParamsFrom<'deleteFlow'>) => Promise<ReturnTypeFrom<'deleteFlow'>>  = async params => {
  // undefined
    return this.client.deleteFlow(params as any).promise();
  }

  describeConnector: (params: RawParamsFrom<'describeConnector'>) => Promise<ReturnTypeFrom<'describeConnector'>>  = async params => {
  // undefined
    return this.client.describeConnector(params as any).promise();
  }

  describeConnectorEntity: (params: RawParamsFrom<'describeConnectorEntity'>) => Promise<ReturnTypeFrom<'describeConnectorEntity'>>  = async params => {
  // undefined
    return this.client.describeConnectorEntity(params as any).promise();
  }

  describeConnectorProfiles: (params: RawParamsFrom<'describeConnectorProfiles'>) => Promise<ReturnTypeFrom<'describeConnectorProfiles'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeConnectorProfiles(params as any).promise();
  }

  describeConnectors: (params: RawParamsFrom<'describeConnectors'>) => Promise<ReturnTypeFrom<'describeConnectors'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeConnectors(params as any).promise();
  }

  describeFlow: (params: RawParamsFrom<'describeFlow'>) => Promise<ReturnTypeFrom<'describeFlow'>>  = async params => {
  // undefined
    return this.client.describeFlow(params as any).promise();
  }

  describeFlowExecutionRecords: (params: RawParamsFrom<'describeFlowExecutionRecords'>) => Promise<ReturnTypeFrom<'describeFlowExecutionRecords'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeFlowExecutionRecords(params as any).promise();
  }

  listConnectorEntities: (params: RawParamsFrom<'listConnectorEntities'>) => Promise<ReturnTypeFrom<'listConnectorEntities'>>  = async params => {
  // undefined
    return this.client.listConnectorEntities(params as any).promise();
  }

  listConnectors: (params: RawParamsFrom<'listConnectors'>) => Promise<ReturnTypeFrom<'listConnectors'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listConnectors(params as any).promise();
  }

  listFlows: (params: RawParamsFrom<'listFlows'>) => Promise<ReturnTypeFrom<'listFlows'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listFlows(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  registerConnector: (params: RawParamsFrom<'registerConnector'>) => Promise<ReturnTypeFrom<'registerConnector'>>  = async params => {
  // undefined
    return this.client.registerConnector(params as any).promise();
  }

  startFlow: (params: RawParamsFrom<'startFlow'>) => Promise<ReturnTypeFrom<'startFlow'>>  = async params => {
  // undefined
    return this.client.startFlow(params as any).promise();
  }

  stopFlow: (params: RawParamsFrom<'stopFlow'>) => Promise<ReturnTypeFrom<'stopFlow'>>  = async params => {
  // undefined
    return this.client.stopFlow(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  unregisterConnector: (params: RawParamsFrom<'unregisterConnector'>) => Promise<ReturnTypeFrom<'unregisterConnector'>>  = async params => {
  // undefined
    return this.client.unregisterConnector(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateConnectorProfile: (params: RawParamsFrom<'updateConnectorProfile'>) => Promise<ReturnTypeFrom<'updateConnectorProfile'>>  = async params => {
  // undefined
    return this.client.updateConnectorProfile(params as any).promise();
  }

  updateConnectorRegistration: (params: RawParamsFrom<'updateConnectorRegistration'>) => Promise<ReturnTypeFrom<'updateConnectorRegistration'>>  = async params => {
  // undefined
    return this.client.updateConnectorRegistration(params as any).promise();
  }

  updateFlow: (params: RawParamsFrom<'updateFlow'>) => Promise<ReturnTypeFrom<'updateFlow'>>  = async params => {
  // undefined
    return this.client.updateFlow(params as any).promise();
  }
  
  static fromClient(client: AWSAppflow): Appflow {
    return new Appflow(client) as any;
  }
  
  static client(options?: AWSAppflow.Types.ClientConfiguration): Appflow {
    return new Appflow(new AWSAppflow(options)) as any;
  }
}  
