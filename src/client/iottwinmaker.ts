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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTTwinMaker> = AWSIoTTwinMaker[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTTwinMaker {
  private constructor(private readonly client: AWSIoTTwinMaker) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iottwinmaker' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listWorkspaces"] as const;
  
  batchPutPropertyValues: (params: RawParamsFrom<'batchPutPropertyValues'>) => Promise<ReturnTypeFrom<'batchPutPropertyValues'>>  = async params => {
  // undefined
    return this.client.batchPutPropertyValues(params as any).promise();
  }

  createComponentType: (params: RawParamsFrom<'createComponentType'>) => Promise<ReturnTypeFrom<'createComponentType'>>  = async params => {
  // undefined
    return this.client.createComponentType(params as any).promise();
  }

  createEntity: (params: RawParamsFrom<'createEntity'>) => Promise<ReturnTypeFrom<'createEntity'>>  = async params => {
  // undefined
    return this.client.createEntity(params as any).promise();
  }

  createScene: (params: RawParamsFrom<'createScene'>) => Promise<ReturnTypeFrom<'createScene'>>  = async params => {
  // undefined
    return this.client.createScene(params as any).promise();
  }

  createWorkspace: (params: RawParamsFrom<'createWorkspace'>) => Promise<ReturnTypeFrom<'createWorkspace'>>  = async params => {
  // undefined
    return this.client.createWorkspace(params as any).promise();
  }

  deleteComponentType: (params: RawParamsFrom<'deleteComponentType'>) => Promise<ReturnTypeFrom<'deleteComponentType'>>  = async params => {
  // undefined
    return this.client.deleteComponentType(params as any).promise();
  }

  deleteEntity: (params: RawParamsFrom<'deleteEntity'>) => Promise<ReturnTypeFrom<'deleteEntity'>>  = async params => {
  // undefined
    return this.client.deleteEntity(params as any).promise();
  }

  deleteScene: (params: RawParamsFrom<'deleteScene'>) => Promise<ReturnTypeFrom<'deleteScene'>>  = async params => {
  // undefined
    return this.client.deleteScene(params as any).promise();
  }

  deleteWorkspace: (params: RawParamsFrom<'deleteWorkspace'>) => Promise<ReturnTypeFrom<'deleteWorkspace'>>  = async params => {
  // undefined
    return this.client.deleteWorkspace(params as any).promise();
  }

  getComponentType: (params: RawParamsFrom<'getComponentType'>) => Promise<ReturnTypeFrom<'getComponentType'>>  = async params => {
  // undefined
    return this.client.getComponentType(params as any).promise();
  }

  getEntity: (params: RawParamsFrom<'getEntity'>) => Promise<ReturnTypeFrom<'getEntity'>>  = async params => {
  // undefined
    return this.client.getEntity(params as any).promise();
  }

  getPropertyValue: (params: RawParamsFrom<'getPropertyValue'>) => Promise<ReturnTypeFrom<'getPropertyValue'>>  = async params => {
  // undefined
    return this.client.getPropertyValue(params as any).promise();
  }

  getPropertyValueHistory: (params: RawParamsFrom<'getPropertyValueHistory'>) => Promise<ReturnTypeFrom<'getPropertyValueHistory'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getPropertyValueHistory(params as any).promise();
  }

  getScene: (params: RawParamsFrom<'getScene'>) => Promise<ReturnTypeFrom<'getScene'>>  = async params => {
  // undefined
    return this.client.getScene(params as any).promise();
  }

  getWorkspace: (params: RawParamsFrom<'getWorkspace'>) => Promise<ReturnTypeFrom<'getWorkspace'>>  = async params => {
  // undefined
    return this.client.getWorkspace(params as any).promise();
  }

  listComponentTypes: (params: RawParamsFrom<'listComponentTypes'>) => Promise<ReturnTypeFrom<'listComponentTypes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listComponentTypes(params as any).promise();
  }

  listEntities: (params: RawParamsFrom<'listEntities'>) => Promise<ReturnTypeFrom<'listEntities'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listEntities(params as any).promise();
  }

  listScenes: (params: RawParamsFrom<'listScenes'>) => Promise<ReturnTypeFrom<'listScenes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listScenes(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listWorkspaces: (params: RawParamsFrom<'listWorkspaces'>) => Promise<ReturnTypeFrom<'listWorkspaces'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listWorkspaces(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateComponentType: (params: RawParamsFrom<'updateComponentType'>) => Promise<ReturnTypeFrom<'updateComponentType'>>  = async params => {
  // undefined
    return this.client.updateComponentType(params as any).promise();
  }

  updateEntity: (params: RawParamsFrom<'updateEntity'>) => Promise<ReturnTypeFrom<'updateEntity'>>  = async params => {
  // undefined
    return this.client.updateEntity(params as any).promise();
  }

  updateScene: (params: RawParamsFrom<'updateScene'>) => Promise<ReturnTypeFrom<'updateScene'>>  = async params => {
  // undefined
    return this.client.updateScene(params as any).promise();
  }

  updateWorkspace: (params: RawParamsFrom<'updateWorkspace'>) => Promise<ReturnTypeFrom<'updateWorkspace'>>  = async params => {
  // undefined
    return this.client.updateWorkspace(params as any).promise();
  }
  
  static fromClient(client: AWSIoTTwinMaker): IoTTwinMaker {
    return new IoTTwinMaker(client) as any;
  }
  
  static client(options?: AWSIoTTwinMaker.Types.ClientConfiguration): IoTTwinMaker {
    return new IoTTwinMaker(new AWSIoTTwinMaker(options)) as any;
  }
}  
