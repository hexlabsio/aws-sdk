import { Request, Lambda as AWSLambda } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLambda> = AWSLambda[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLambda> = AWSLambda[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLambda[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLambda, Extras> = AWSLambda[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'lambda';
    global: false;
    category: 'Compute'
    topLevelCalls: readonly ["listCodeSigningConfigs","listEventSourceMappings","listFunctions","listLayers"];
    
  addLayerVersionPermission: FunctionTypeFrom<'addLayerVersionPermission'>;

  addPermission: FunctionTypeFrom<'addPermission'>;

  createAlias: FunctionTypeFrom<'createAlias'>;

  createCodeSigningConfig: FunctionTypeFrom<'createCodeSigningConfig'>;

  createEventSourceMapping: FunctionTypeFrom<'createEventSourceMapping'>;

  createFunction: FunctionTypeFrom<'createFunction'>;

  createFunctionUrlConfig: FunctionTypeFrom<'createFunctionUrlConfig'>;

  deleteAlias: FunctionTypeFrom<'deleteAlias'>;

  deleteCodeSigningConfig: FunctionTypeFrom<'deleteCodeSigningConfig'>;

  deleteEventSourceMapping: FunctionTypeFrom<'deleteEventSourceMapping'>;

  deleteFunction: FunctionTypeFrom<'deleteFunction'>;

  deleteFunctionCodeSigningConfig: FunctionTypeFrom<'deleteFunctionCodeSigningConfig'>;

  deleteFunctionConcurrency: FunctionTypeFrom<'deleteFunctionConcurrency'>;

  deleteFunctionEventInvokeConfig: FunctionTypeFrom<'deleteFunctionEventInvokeConfig'>;

  deleteFunctionUrlConfig: FunctionTypeFrom<'deleteFunctionUrlConfig'>;

  deleteLayerVersion: FunctionTypeFrom<'deleteLayerVersion'>;

  deleteProvisionedConcurrencyConfig: FunctionTypeFrom<'deleteProvisionedConcurrencyConfig'>;

  getAccountSettings: FunctionTypeFrom<'getAccountSettings'>;

  getAlias: FunctionTypeFrom<'getAlias'>;

  getCodeSigningConfig: FunctionTypeFrom<'getCodeSigningConfig'>;

  getEventSourceMapping: FunctionTypeFrom<'getEventSourceMapping'>;

  getFunction: FunctionTypeFrom<'getFunction'>;

  getFunctionCodeSigningConfig: FunctionTypeFrom<'getFunctionCodeSigningConfig'>;

  getFunctionConcurrency: FunctionTypeFrom<'getFunctionConcurrency'>;

  getFunctionConfiguration: FunctionTypeFrom<'getFunctionConfiguration'>;

  getFunctionEventInvokeConfig: FunctionTypeFrom<'getFunctionEventInvokeConfig'>;

  getFunctionUrlConfig: FunctionTypeFrom<'getFunctionUrlConfig'>;

  getLayerVersion: FunctionTypeFrom<'getLayerVersion'>;

  getLayerVersionByArn: FunctionTypeFrom<'getLayerVersionByArn'>;

  getLayerVersionPolicy: FunctionTypeFrom<'getLayerVersionPolicy'>;

  getPolicy: FunctionTypeFrom<'getPolicy'>;

  getProvisionedConcurrencyConfig: FunctionTypeFrom<'getProvisionedConcurrencyConfig'>;

  invoke: FunctionTypeFrom<'invoke'>;

  invokeAsync: FunctionTypeFrom<'invokeAsync'>;

  listAliases(params: { [K in keyof Omit<ParamsFrom<'listAliases', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAliases'>]-?: ReturnTypeFrom<'listAliases'>[K]}['Aliases'] }>
  ;

  listCodeSigningConfigs(params: { [K in keyof Omit<ParamsFrom<'listCodeSigningConfigs', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listCodeSigningConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCodeSigningConfigs'>]-?: ReturnTypeFrom<'listCodeSigningConfigs'>[K]}['CodeSigningConfigs'] }>
  listCodeSigningConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCodeSigningConfigs'>]-?: ReturnTypeFrom<'listCodeSigningConfigs'>[K]}['CodeSigningConfigs'] }>;

  listEventSourceMappings(params: { [K in keyof Omit<ParamsFrom<'listEventSourceMappings', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listEventSourceMappings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEventSourceMappings'>]-?: ReturnTypeFrom<'listEventSourceMappings'>[K]}['EventSourceMappings'] }>
  listEventSourceMappings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEventSourceMappings'>]-?: ReturnTypeFrom<'listEventSourceMappings'>[K]}['EventSourceMappings'] }>;

  listFunctionEventInvokeConfigs(params: { [K in keyof Omit<ParamsFrom<'listFunctionEventInvokeConfigs', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listFunctionEventInvokeConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFunctionEventInvokeConfigs'>]-?: ReturnTypeFrom<'listFunctionEventInvokeConfigs'>[K]}['FunctionEventInvokeConfigs'] }>
  ;

  listFunctionUrlConfigs(params: { [K in keyof Omit<ParamsFrom<'listFunctionUrlConfigs', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listFunctionUrlConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFunctionUrlConfigs'>]-?: ReturnTypeFrom<'listFunctionUrlConfigs'>[K]}['FunctionUrlConfigs'] }>
  ;

  listFunctions(params: { [K in keyof Omit<ParamsFrom<'listFunctions', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listFunctions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFunctions'>]-?: ReturnTypeFrom<'listFunctions'>[K]}['Functions'] }>
  listFunctions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFunctions'>]-?: ReturnTypeFrom<'listFunctions'>[K]}['Functions'] }>;

  listFunctionsByCodeSigningConfig(params: { [K in keyof Omit<ParamsFrom<'listFunctionsByCodeSigningConfig', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listFunctionsByCodeSigningConfig', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFunctionsByCodeSigningConfig'>]-?: ReturnTypeFrom<'listFunctionsByCodeSigningConfig'>[K]}['FunctionArns'] }>
  ;

  listLayerVersions(params: { [K in keyof Omit<ParamsFrom<'listLayerVersions', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listLayerVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLayerVersions'>]-?: ReturnTypeFrom<'listLayerVersions'>[K]}['LayerVersions'] }>
  ;

  listLayers(params: { [K in keyof Omit<ParamsFrom<'listLayers', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listLayers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLayers'>]-?: ReturnTypeFrom<'listLayers'>[K]}['Layers'] }>
  listLayers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLayers'>]-?: ReturnTypeFrom<'listLayers'>[K]}['Layers'] }>;

  listProvisionedConcurrencyConfigs(params: { [K in keyof Omit<ParamsFrom<'listProvisionedConcurrencyConfigs', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listProvisionedConcurrencyConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProvisionedConcurrencyConfigs'>]-?: ReturnTypeFrom<'listProvisionedConcurrencyConfigs'>[K]}['ProvisionedConcurrencyConfigs'] }>
  ;

  listTags: FunctionTypeFrom<'listTags'>;

  listVersionsByFunction(params: { [K in keyof Omit<ParamsFrom<'listVersionsByFunction', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listVersionsByFunction', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVersionsByFunction'>]-?: ReturnTypeFrom<'listVersionsByFunction'>[K]}['Versions'] }>
  ;

  publishLayerVersion: FunctionTypeFrom<'publishLayerVersion'>;

  publishVersion: FunctionTypeFrom<'publishVersion'>;

  putFunctionCodeSigningConfig: FunctionTypeFrom<'putFunctionCodeSigningConfig'>;

  putFunctionConcurrency: FunctionTypeFrom<'putFunctionConcurrency'>;

  putFunctionEventInvokeConfig: FunctionTypeFrom<'putFunctionEventInvokeConfig'>;

  putProvisionedConcurrencyConfig: FunctionTypeFrom<'putProvisionedConcurrencyConfig'>;

  removeLayerVersionPermission: FunctionTypeFrom<'removeLayerVersionPermission'>;

  removePermission: FunctionTypeFrom<'removePermission'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAlias: FunctionTypeFrom<'updateAlias'>;

  updateCodeSigningConfig: FunctionTypeFrom<'updateCodeSigningConfig'>;

  updateEventSourceMapping: FunctionTypeFrom<'updateEventSourceMapping'>;

  updateFunctionCode: FunctionTypeFrom<'updateFunctionCode'>;

  updateFunctionConfiguration: FunctionTypeFrom<'updateFunctionConfiguration'>;

  updateFunctionEventInvokeConfig: FunctionTypeFrom<'updateFunctionEventInvokeConfig'>;

  updateFunctionUrlConfig: FunctionTypeFrom<'updateFunctionUrlConfig'>
}
 
export class Lambda implements ClientType {
  private constructor(private readonly client: AWSLambda) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lambda';
  public readonly global = false;
  public readonly category = 'Compute';
  public readonly topLevelCalls = ["listCodeSigningConfigs","listEventSourceMappings","listFunctions","listLayers"] as const;
  
  async addLayerVersionPermission(...args: any): Promise<any> {
  // undefined
    return this.client.addLayerVersionPermission(...args).promise()
  }

  async addPermission(...args: any): Promise<any> {
  // undefined
    return this.client.addPermission(...args).promise()
  }

  async createAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createAlias(...args).promise()
  }

  async createCodeSigningConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createCodeSigningConfig(...args).promise()
  }

  async createEventSourceMapping(...args: any): Promise<any> {
  // undefined
    return this.client.createEventSourceMapping(...args).promise()
  }

  async createFunction(...args: any): Promise<any> {
  // undefined
    return this.client.createFunction(...args).promise()
  }

  async createFunctionUrlConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createFunctionUrlConfig(...args).promise()
  }

  async deleteAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlias(...args).promise()
  }

  async deleteCodeSigningConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCodeSigningConfig(...args).promise()
  }

  async deleteEventSourceMapping(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventSourceMapping(...args).promise()
  }

  async deleteFunction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFunction(...args).promise()
  }

  async deleteFunctionCodeSigningConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFunctionCodeSigningConfig(...args).promise()
  }

  async deleteFunctionConcurrency(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFunctionConcurrency(...args).promise()
  }

  async deleteFunctionEventInvokeConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFunctionEventInvokeConfig(...args).promise()
  }

  async deleteFunctionUrlConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFunctionUrlConfig(...args).promise()
  }

  async deleteLayerVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLayerVersion(...args).promise()
  }

  async deleteProvisionedConcurrencyConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProvisionedConcurrencyConfig(...args).promise()
  }

  async getAccountSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountSettings(...args).promise()
  }

  async getAlias(...args: any): Promise<any> {
  // undefined
    return this.client.getAlias(...args).promise()
  }

  async getCodeSigningConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getCodeSigningConfig(...args).promise()
  }

  async getEventSourceMapping(...args: any): Promise<any> {
  // undefined
    return this.client.getEventSourceMapping(...args).promise()
  }

  async getFunction(...args: any): Promise<any> {
  // undefined
    return this.client.getFunction(...args).promise()
  }

  async getFunctionCodeSigningConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getFunctionCodeSigningConfig(...args).promise()
  }

  async getFunctionConcurrency(...args: any): Promise<any> {
  // undefined
    return this.client.getFunctionConcurrency(...args).promise()
  }

  async getFunctionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getFunctionConfiguration(...args).promise()
  }

  async getFunctionEventInvokeConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getFunctionEventInvokeConfig(...args).promise()
  }

  async getFunctionUrlConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getFunctionUrlConfig(...args).promise()
  }

  async getLayerVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getLayerVersion(...args).promise()
  }

  async getLayerVersionByArn(...args: any): Promise<any> {
  // undefined
    return this.client.getLayerVersionByArn(...args).promise()
  }

  async getLayerVersionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getLayerVersionPolicy(...args).promise()
  }

  async getPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getPolicy(...args).promise()
  }

  async getProvisionedConcurrencyConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getProvisionedConcurrencyConfig(...args).promise()
  }

  async invoke(...args: any): Promise<any> {
  // undefined
    return this.client.invoke(...args).promise()
  }

  async invokeAsync(...args: any): Promise<any> {
  // undefined
    return this.client.invokeAsync(...args).promise()
  }

  async listAliases(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"Aliases"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAliases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Aliases ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCodeSigningConfigs(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"CodeSigningConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listCodeSigningConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.CodeSigningConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEventSourceMappings(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"EventSourceMappings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listEventSourceMappings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.EventSourceMappings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFunctionEventInvokeConfigs(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"FunctionEventInvokeConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listFunctionEventInvokeConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.FunctionEventInvokeConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFunctionUrlConfigs(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"FunctionUrlConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listFunctionUrlConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.FunctionUrlConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFunctions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"Functions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listFunctions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Functions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFunctionsByCodeSigningConfig(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"FunctionArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listFunctionsByCodeSigningConfig(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.FunctionArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLayerVersions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"LayerVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listLayerVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.LayerVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLayers(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"Layers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listLayers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Layers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProvisionedConcurrencyConfigs(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"ProvisionedConcurrencyConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listProvisionedConcurrencyConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.ProvisionedConcurrencyConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTags(...args: any): Promise<any> {
  // undefined
    return this.client.listTags(...args).promise()
  }

  async listVersionsByFunction(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker","resultKey":"Versions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listVersionsByFunction(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Versions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async publishLayerVersion(...args: any): Promise<any> {
  // undefined
    return this.client.publishLayerVersion(...args).promise()
  }

  async publishVersion(...args: any): Promise<any> {
  // undefined
    return this.client.publishVersion(...args).promise()
  }

  async putFunctionCodeSigningConfig(...args: any): Promise<any> {
  // undefined
    return this.client.putFunctionCodeSigningConfig(...args).promise()
  }

  async putFunctionConcurrency(...args: any): Promise<any> {
  // undefined
    return this.client.putFunctionConcurrency(...args).promise()
  }

  async putFunctionEventInvokeConfig(...args: any): Promise<any> {
  // undefined
    return this.client.putFunctionEventInvokeConfig(...args).promise()
  }

  async putProvisionedConcurrencyConfig(...args: any): Promise<any> {
  // undefined
    return this.client.putProvisionedConcurrencyConfig(...args).promise()
  }

  async removeLayerVersionPermission(...args: any): Promise<any> {
  // undefined
    return this.client.removeLayerVersionPermission(...args).promise()
  }

  async removePermission(...args: any): Promise<any> {
  // undefined
    return this.client.removePermission(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAlias(...args: any): Promise<any> {
  // undefined
    return this.client.updateAlias(...args).promise()
  }

  async updateCodeSigningConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateCodeSigningConfig(...args).promise()
  }

  async updateEventSourceMapping(...args: any): Promise<any> {
  // undefined
    return this.client.updateEventSourceMapping(...args).promise()
  }

  async updateFunctionCode(...args: any): Promise<any> {
  // undefined
    return this.client.updateFunctionCode(...args).promise()
  }

  async updateFunctionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateFunctionConfiguration(...args).promise()
  }

  async updateFunctionEventInvokeConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateFunctionEventInvokeConfig(...args).promise()
  }

  async updateFunctionUrlConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateFunctionUrlConfig(...args).promise()
  }
  
  static fromClient(client: AWSLambda): ClientType {
    return new Lambda(client) as any;
  }
  
  static client(options?: AWSLambda.Types.ClientConfiguration): ClientType {
    return new Lambda(new AWSLambda(options)) as any;
  }
}  
