import { Request, IoTTwinMaker as AWSIoTTwinMaker } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTTwinMaker> = AWSIoTTwinMaker[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTTwinMaker> = AWSIoTTwinMaker[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTTwinMaker[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTTwinMaker, Extras> = AWSIoTTwinMaker[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iottwinmaker';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listWorkspaces"];
    
  batchPutPropertyValues: FunctionTypeFrom<'batchPutPropertyValues'>;

  createComponentType: FunctionTypeFrom<'createComponentType'>;

  createEntity: FunctionTypeFrom<'createEntity'>;

  createScene: FunctionTypeFrom<'createScene'>;

  createWorkspace: FunctionTypeFrom<'createWorkspace'>;

  deleteComponentType: FunctionTypeFrom<'deleteComponentType'>;

  deleteEntity: FunctionTypeFrom<'deleteEntity'>;

  deleteScene: FunctionTypeFrom<'deleteScene'>;

  deleteWorkspace: FunctionTypeFrom<'deleteWorkspace'>;

  getComponentType: FunctionTypeFrom<'getComponentType'>;

  getEntity: FunctionTypeFrom<'getEntity'>;

  getPropertyValue: FunctionTypeFrom<'getPropertyValue'>;

  getPropertyValueHistory: FunctionTypeFrom<'getPropertyValueHistory'>;

  getScene: FunctionTypeFrom<'getScene'>;

  getWorkspace: FunctionTypeFrom<'getWorkspace'>;

  listComponentTypes: FunctionTypeFrom<'listComponentTypes'>;

  listEntities: FunctionTypeFrom<'listEntities'>;

  listScenes: FunctionTypeFrom<'listScenes'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWorkspaces: FunctionTypeFrom<'listWorkspaces'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateComponentType: FunctionTypeFrom<'updateComponentType'>;

  updateEntity: FunctionTypeFrom<'updateEntity'>;

  updateScene: FunctionTypeFrom<'updateScene'>;

  updateWorkspace: FunctionTypeFrom<'updateWorkspace'>
}
 
export class IoTTwinMaker implements ClientType {
  private constructor(private readonly client: AWSIoTTwinMaker) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iottwinmaker';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listWorkspaces"] as const;
  
  async batchPutPropertyValues(...args: any): Promise<any> {
  // undefined
    return this.client.batchPutPropertyValues(...args).promise()
  }

  async createComponentType(...args: any): Promise<any> {
  // undefined
    return this.client.createComponentType(...args).promise()
  }

  async createEntity(...args: any): Promise<any> {
  // undefined
    return this.client.createEntity(...args).promise()
  }

  async createScene(...args: any): Promise<any> {
  // undefined
    return this.client.createScene(...args).promise()
  }

  async createWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkspace(...args).promise()
  }

  async deleteComponentType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteComponentType(...args).promise()
  }

  async deleteEntity(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEntity(...args).promise()
  }

  async deleteScene(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScene(...args).promise()
  }

  async deleteWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkspace(...args).promise()
  }

  async getComponentType(...args: any): Promise<any> {
  // undefined
    return this.client.getComponentType(...args).promise()
  }

  async getEntity(...args: any): Promise<any> {
  // undefined
    return this.client.getEntity(...args).promise()
  }

  async getPropertyValue(...args: any): Promise<any> {
  // undefined
    return this.client.getPropertyValue(...args).promise()
  }

  async getPropertyValueHistory(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getPropertyValueHistory(...args).promise()
  }

  async getScene(...args: any): Promise<any> {
  // undefined
    return this.client.getScene(...args).promise()
  }

  async getWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkspace(...args).promise()
  }

  async listComponentTypes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listComponentTypes(...args).promise()
  }

  async listEntities(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listEntities(...args).promise()
  }

  async listScenes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listScenes(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listWorkspaces(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listWorkspaces(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateComponentType(...args: any): Promise<any> {
  // undefined
    return this.client.updateComponentType(...args).promise()
  }

  async updateEntity(...args: any): Promise<any> {
  // undefined
    return this.client.updateEntity(...args).promise()
  }

  async updateScene(...args: any): Promise<any> {
  // undefined
    return this.client.updateScene(...args).promise()
  }

  async updateWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkspace(...args).promise()
  }
  
  static fromClient(client: AWSIoTTwinMaker): ClientType {
    return new IoTTwinMaker(client) as any;
  }
  
  static client(options?: AWSIoTTwinMaker.Types.ClientConfiguration): ClientType {
    return new IoTTwinMaker(new AWSIoTTwinMaker(options)) as any;
  }
}  
