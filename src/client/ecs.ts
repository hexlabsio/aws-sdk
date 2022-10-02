import { Request, ECS as AWSECS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSECS> = AWSECS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSECS> = AWSECS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSECS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSECS, Extras> = AWSECS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ecs';
    global: false;
    category: 'Containers'
    topLevelCalls: readonly ["listAccountSettings","listClusters","listContainerInstances","listServices","listTaskDefinitionFamilies","listTaskDefinitions","listTasks"];
    
  createCapacityProvider: FunctionTypeFrom<'createCapacityProvider'>;

  createCluster: FunctionTypeFrom<'createCluster'>;

  createService: FunctionTypeFrom<'createService'>;

  createTaskSet: FunctionTypeFrom<'createTaskSet'>;

  deleteAccountSetting: FunctionTypeFrom<'deleteAccountSetting'>;

  deleteAttributes: FunctionTypeFrom<'deleteAttributes'>;

  deleteCapacityProvider: FunctionTypeFrom<'deleteCapacityProvider'>;

  deleteCluster: FunctionTypeFrom<'deleteCluster'>;

  deleteService: FunctionTypeFrom<'deleteService'>;

  deleteTaskSet: FunctionTypeFrom<'deleteTaskSet'>;

  deregisterContainerInstance: FunctionTypeFrom<'deregisterContainerInstance'>;

  deregisterTaskDefinition: FunctionTypeFrom<'deregisterTaskDefinition'>;

  describeCapacityProviders: FunctionTypeFrom<'describeCapacityProviders'>;

  describeClusters: FunctionTypeFrom<'describeClusters'>;

  describeContainerInstances: FunctionTypeFrom<'describeContainerInstances'>;

  describeServices: FunctionTypeFrom<'describeServices'>;

  describeTaskDefinition: FunctionTypeFrom<'describeTaskDefinition'>;

  describeTaskSets: FunctionTypeFrom<'describeTaskSets'>;

  describeTasks: FunctionTypeFrom<'describeTasks'>;

  discoverPollEndpoint: FunctionTypeFrom<'discoverPollEndpoint'>;

  executeCommand: FunctionTypeFrom<'executeCommand'>;

  listAccountSettings(params: { [K in keyof Omit<ParamsFrom<'listAccountSettings', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAccountSettings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountSettings'>]-?: ReturnTypeFrom<'listAccountSettings'>[K]}['settings'] }>
  listAccountSettings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountSettings'>]-?: ReturnTypeFrom<'listAccountSettings'>[K]}['settings'] }>;

  listAttributes(params: { [K in keyof Omit<ParamsFrom<'listAttributes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAttributes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttributes'>]-?: ReturnTypeFrom<'listAttributes'>[K]}['attributes'] }>
  ;

  listClusters(params: { [K in keyof Omit<ParamsFrom<'listClusters', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['clusterArns'] }>
  listClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['clusterArns'] }>;

  listContainerInstances(params: { [K in keyof Omit<ParamsFrom<'listContainerInstances', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listContainerInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContainerInstances'>]-?: ReturnTypeFrom<'listContainerInstances'>[K]}['containerInstanceArns'] }>
  listContainerInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContainerInstances'>]-?: ReturnTypeFrom<'listContainerInstances'>[K]}['containerInstanceArns'] }>;

  listServices(params: { [K in keyof Omit<ParamsFrom<'listServices', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['serviceArns'] }>
  listServices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['serviceArns'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTaskDefinitionFamilies(params: { [K in keyof Omit<ParamsFrom<'listTaskDefinitionFamilies', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTaskDefinitionFamilies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTaskDefinitionFamilies'>]-?: ReturnTypeFrom<'listTaskDefinitionFamilies'>[K]}['families'] }>
  listTaskDefinitionFamilies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTaskDefinitionFamilies'>]-?: ReturnTypeFrom<'listTaskDefinitionFamilies'>[K]}['families'] }>;

  listTaskDefinitions(params: { [K in keyof Omit<ParamsFrom<'listTaskDefinitions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTaskDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTaskDefinitions'>]-?: ReturnTypeFrom<'listTaskDefinitions'>[K]}['taskDefinitionArns'] }>
  listTaskDefinitions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTaskDefinitions'>]-?: ReturnTypeFrom<'listTaskDefinitions'>[K]}['taskDefinitionArns'] }>;

  listTasks(params: { [K in keyof Omit<ParamsFrom<'listTasks', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTasks'>]-?: ReturnTypeFrom<'listTasks'>[K]}['taskArns'] }>
  listTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTasks'>]-?: ReturnTypeFrom<'listTasks'>[K]}['taskArns'] }>;

  putAccountSetting: FunctionTypeFrom<'putAccountSetting'>;

  putAccountSettingDefault: FunctionTypeFrom<'putAccountSettingDefault'>;

  putAttributes: FunctionTypeFrom<'putAttributes'>;

  putClusterCapacityProviders: FunctionTypeFrom<'putClusterCapacityProviders'>;

  registerContainerInstance: FunctionTypeFrom<'registerContainerInstance'>;

  registerTaskDefinition: FunctionTypeFrom<'registerTaskDefinition'>;

  runTask: FunctionTypeFrom<'runTask'>;

  startTask: FunctionTypeFrom<'startTask'>;

  stopTask: FunctionTypeFrom<'stopTask'>;

  submitAttachmentStateChanges: FunctionTypeFrom<'submitAttachmentStateChanges'>;

  submitContainerStateChange: FunctionTypeFrom<'submitContainerStateChange'>;

  submitTaskStateChange: FunctionTypeFrom<'submitTaskStateChange'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCapacityProvider: FunctionTypeFrom<'updateCapacityProvider'>;

  updateCluster: FunctionTypeFrom<'updateCluster'>;

  updateClusterSettings: FunctionTypeFrom<'updateClusterSettings'>;

  updateContainerAgent: FunctionTypeFrom<'updateContainerAgent'>;

  updateContainerInstancesState: FunctionTypeFrom<'updateContainerInstancesState'>;

  updateService: FunctionTypeFrom<'updateService'>;

  updateServicePrimaryTaskSet: FunctionTypeFrom<'updateServicePrimaryTaskSet'>;

  updateTaskSet: FunctionTypeFrom<'updateTaskSet'>
}
 
export class ECS implements ClientType {
  private constructor(private readonly client: AWSECS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ecs';
  public readonly global = false;
  public readonly category = 'Containers';
  public readonly topLevelCalls = ["listAccountSettings","listClusters","listContainerInstances","listServices","listTaskDefinitionFamilies","listTaskDefinitions","listTasks"] as const;
  
  async createCapacityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.createCapacityProvider(...args).promise()
  }

  async createCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCluster(...args).promise()
  }

  async createService(...args: any): Promise<any> {
  // undefined
    return this.client.createService(...args).promise()
  }

  async createTaskSet(...args: any): Promise<any> {
  // undefined
    return this.client.createTaskSet(...args).promise()
  }

  async deleteAccountSetting(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccountSetting(...args).promise()
  }

  async deleteAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAttributes(...args).promise()
  }

  async deleteCapacityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCapacityProvider(...args).promise()
  }

  async deleteCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCluster(...args).promise()
  }

  async deleteService(...args: any): Promise<any> {
  // undefined
    return this.client.deleteService(...args).promise()
  }

  async deleteTaskSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTaskSet(...args).promise()
  }

  async deregisterContainerInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterContainerInstance(...args).promise()
  }

  async deregisterTaskDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterTaskDefinition(...args).promise()
  }

  async describeCapacityProviders(...args: any): Promise<any> {
  // undefined
    return this.client.describeCapacityProviders(...args).promise()
  }

  async describeClusters(...args: any): Promise<any> {
  // undefined
    return this.client.describeClusters(...args).promise()
  }

  async describeContainerInstances(...args: any): Promise<any> {
  // undefined
    return this.client.describeContainerInstances(...args).promise()
  }

  async describeServices(...args: any): Promise<any> {
  // undefined
    return this.client.describeServices(...args).promise()
  }

  async describeTaskDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.describeTaskDefinition(...args).promise()
  }

  async describeTaskSets(...args: any): Promise<any> {
  // undefined
    return this.client.describeTaskSets(...args).promise()
  }

  async describeTasks(...args: any): Promise<any> {
  // undefined
    return this.client.describeTasks(...args).promise()
  }

  async discoverPollEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.discoverPollEndpoint(...args).promise()
  }

  async executeCommand(...args: any): Promise<any> {
  // undefined
    return this.client.executeCommand(...args).promise()
  }

  async listAccountSettings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"settings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccountSettings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.settings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttributes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"attributes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAttributes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.attributes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClusters(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"clusterArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.clusterArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContainerInstances(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"containerInstanceArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listContainerInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.containerInstanceArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServices(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"serviceArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.serviceArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTaskDefinitionFamilies(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"families"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTaskDefinitionFamilies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.families ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTaskDefinitions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"taskDefinitionArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTaskDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.taskDefinitionArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTasks(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"taskArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.taskArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putAccountSetting(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountSetting(...args).promise()
  }

  async putAccountSettingDefault(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountSettingDefault(...args).promise()
  }

  async putAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putAttributes(...args).promise()
  }

  async putClusterCapacityProviders(...args: any): Promise<any> {
  // undefined
    return this.client.putClusterCapacityProviders(...args).promise()
  }

  async registerContainerInstance(...args: any): Promise<any> {
  // undefined
    return this.client.registerContainerInstance(...args).promise()
  }

  async registerTaskDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.registerTaskDefinition(...args).promise()
  }

  async runTask(...args: any): Promise<any> {
  // undefined
    return this.client.runTask(...args).promise()
  }

  async startTask(...args: any): Promise<any> {
  // undefined
    return this.client.startTask(...args).promise()
  }

  async stopTask(...args: any): Promise<any> {
  // undefined
    return this.client.stopTask(...args).promise()
  }

  async submitAttachmentStateChanges(...args: any): Promise<any> {
  // undefined
    return this.client.submitAttachmentStateChanges(...args).promise()
  }

  async submitContainerStateChange(...args: any): Promise<any> {
  // undefined
    return this.client.submitContainerStateChange(...args).promise()
  }

  async submitTaskStateChange(...args: any): Promise<any> {
  // undefined
    return this.client.submitTaskStateChange(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateCapacityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.updateCapacityProvider(...args).promise()
  }

  async updateCluster(...args: any): Promise<any> {
  // undefined
    return this.client.updateCluster(...args).promise()
  }

  async updateClusterSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateClusterSettings(...args).promise()
  }

  async updateContainerAgent(...args: any): Promise<any> {
  // undefined
    return this.client.updateContainerAgent(...args).promise()
  }

  async updateContainerInstancesState(...args: any): Promise<any> {
  // undefined
    return this.client.updateContainerInstancesState(...args).promise()
  }

  async updateService(...args: any): Promise<any> {
  // undefined
    return this.client.updateService(...args).promise()
  }

  async updateServicePrimaryTaskSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateServicePrimaryTaskSet(...args).promise()
  }

  async updateTaskSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateTaskSet(...args).promise()
  }
  
  static fromClient(client: AWSECS): ClientType {
    return new ECS(client) as any;
  }
  
  static client(options?: AWSECS.Types.ClientConfiguration): ClientType {
    return new ECS(new AWSECS(options)) as any;
  }
}  
