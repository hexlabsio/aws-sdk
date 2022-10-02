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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'appflow';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly ["describeConnectorProfiles","describeConnectors","listConnectors","listFlows"];
    
  createConnectorProfile: FunctionTypeFrom<'createConnectorProfile'>;

  createFlow: FunctionTypeFrom<'createFlow'>;

  deleteConnectorProfile: FunctionTypeFrom<'deleteConnectorProfile'>;

  deleteFlow: FunctionTypeFrom<'deleteFlow'>;

  describeConnector: FunctionTypeFrom<'describeConnector'>;

  describeConnectorEntity: FunctionTypeFrom<'describeConnectorEntity'>;

  describeConnectorProfiles: FunctionTypeFrom<'describeConnectorProfiles'>;

  describeConnectors: FunctionTypeFrom<'describeConnectors'>;

  describeFlow: FunctionTypeFrom<'describeFlow'>;

  describeFlowExecutionRecords: FunctionTypeFrom<'describeFlowExecutionRecords'>;

  listConnectorEntities: FunctionTypeFrom<'listConnectorEntities'>;

  listConnectors: FunctionTypeFrom<'listConnectors'>;

  listFlows: FunctionTypeFrom<'listFlows'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  registerConnector: FunctionTypeFrom<'registerConnector'>;

  startFlow: FunctionTypeFrom<'startFlow'>;

  stopFlow: FunctionTypeFrom<'stopFlow'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  unregisterConnector: FunctionTypeFrom<'unregisterConnector'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateConnectorProfile: FunctionTypeFrom<'updateConnectorProfile'>;

  updateFlow: FunctionTypeFrom<'updateFlow'>
}
 
export class Appflow implements ClientType {
  private constructor(private readonly client: AWSAppflow) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appflow';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = ["describeConnectorProfiles","describeConnectors","listConnectors","listFlows"] as const;
  
  async createConnectorProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createConnectorProfile(...args).promise()
  }

  async createFlow(...args: any): Promise<any> {
  // undefined
    return this.client.createFlow(...args).promise()
  }

  async deleteConnectorProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnectorProfile(...args).promise()
  }

  async deleteFlow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFlow(...args).promise()
  }

  async describeConnector(...args: any): Promise<any> {
  // undefined
    return this.client.describeConnector(...args).promise()
  }

  async describeConnectorEntity(...args: any): Promise<any> {
  // undefined
    return this.client.describeConnectorEntity(...args).promise()
  }

  async describeConnectorProfiles(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeConnectorProfiles(...args).promise()
  }

  async describeConnectors(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeConnectors(...args).promise()
  }

  async describeFlow(...args: any): Promise<any> {
  // undefined
    return this.client.describeFlow(...args).promise()
  }

  async describeFlowExecutionRecords(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeFlowExecutionRecords(...args).promise()
  }

  async listConnectorEntities(...args: any): Promise<any> {
  // undefined
    return this.client.listConnectorEntities(...args).promise()
  }

  async listConnectors(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listConnectors(...args).promise()
  }

  async listFlows(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listFlows(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async registerConnector(...args: any): Promise<any> {
  // undefined
    return this.client.registerConnector(...args).promise()
  }

  async startFlow(...args: any): Promise<any> {
  // undefined
    return this.client.startFlow(...args).promise()
  }

  async stopFlow(...args: any): Promise<any> {
  // undefined
    return this.client.stopFlow(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async unregisterConnector(...args: any): Promise<any> {
  // undefined
    return this.client.unregisterConnector(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateConnectorProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnectorProfile(...args).promise()
  }

  async updateFlow(...args: any): Promise<any> {
  // undefined
    return this.client.updateFlow(...args).promise()
  }
  
  static fromClient(client: AWSAppflow): ClientType {
    return new Appflow(client) as any;
  }
  
  static client(options?: AWSAppflow.Types.ClientConfiguration): ClientType {
    return new Appflow(new AWSAppflow(options)) as any;
  }
}  
