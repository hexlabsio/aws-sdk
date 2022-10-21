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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSECS> = AWSECS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ECS {
  private constructor(private readonly client: AWSECS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ecs' as const;
  public readonly global = false as const;
  public readonly category = 'Containers' as const;
  public readonly topLevelCalls = ["listAccountSettings","listClusters","listContainerInstances","listServices","listTaskDefinitionFamilies","listTaskDefinitions","listTasks"] as const;
  
  createCapacityProvider: (params: RawParamsFrom<'createCapacityProvider'>) => Promise<ReturnTypeFrom<'createCapacityProvider'>>  = async params => {
  // undefined
    return this.client.createCapacityProvider(params as any).promise();
  }

  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createService: (params: RawParamsFrom<'createService'>) => Promise<ReturnTypeFrom<'createService'>>  = async params => {
  // undefined
    return this.client.createService(params as any).promise();
  }

  createTaskSet: (params: RawParamsFrom<'createTaskSet'>) => Promise<ReturnTypeFrom<'createTaskSet'>>  = async params => {
  // undefined
    return this.client.createTaskSet(params as any).promise();
  }

  deleteAccountSetting: (params: RawParamsFrom<'deleteAccountSetting'>) => Promise<ReturnTypeFrom<'deleteAccountSetting'>>  = async params => {
  // undefined
    return this.client.deleteAccountSetting(params as any).promise();
  }

  deleteAttributes: (params: RawParamsFrom<'deleteAttributes'>) => Promise<ReturnTypeFrom<'deleteAttributes'>>  = async params => {
  // undefined
    return this.client.deleteAttributes(params as any).promise();
  }

  deleteCapacityProvider: (params: RawParamsFrom<'deleteCapacityProvider'>) => Promise<ReturnTypeFrom<'deleteCapacityProvider'>>  = async params => {
  // undefined
    return this.client.deleteCapacityProvider(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteService: (params: RawParamsFrom<'deleteService'>) => Promise<ReturnTypeFrom<'deleteService'>>  = async params => {
  // undefined
    return this.client.deleteService(params as any).promise();
  }

  deleteTaskSet: (params: RawParamsFrom<'deleteTaskSet'>) => Promise<ReturnTypeFrom<'deleteTaskSet'>>  = async params => {
  // undefined
    return this.client.deleteTaskSet(params as any).promise();
  }

  deregisterContainerInstance: (params: RawParamsFrom<'deregisterContainerInstance'>) => Promise<ReturnTypeFrom<'deregisterContainerInstance'>>  = async params => {
  // undefined
    return this.client.deregisterContainerInstance(params as any).promise();
  }

  deregisterTaskDefinition: (params: RawParamsFrom<'deregisterTaskDefinition'>) => Promise<ReturnTypeFrom<'deregisterTaskDefinition'>>  = async params => {
  // undefined
    return this.client.deregisterTaskDefinition(params as any).promise();
  }

  describeCapacityProviders: (params: RawParamsFrom<'describeCapacityProviders'>) => Promise<ReturnTypeFrom<'describeCapacityProviders'>>  = async params => {
  // undefined
    return this.client.describeCapacityProviders(params as any).promise();
  }

  describeClusters: (params: RawParamsFrom<'describeClusters'>) => Promise<ReturnTypeFrom<'describeClusters'>>  = async params => {
  // undefined
    return this.client.describeClusters(params as any).promise();
  }

  describeContainerInstances: (params: RawParamsFrom<'describeContainerInstances'>) => Promise<ReturnTypeFrom<'describeContainerInstances'>>  = async params => {
  // undefined
    return this.client.describeContainerInstances(params as any).promise();
  }

  describeServices: (params: RawParamsFrom<'describeServices'>) => Promise<ReturnTypeFrom<'describeServices'>>  = async params => {
  // undefined
    return this.client.describeServices(params as any).promise();
  }

  describeTaskDefinition: (params: RawParamsFrom<'describeTaskDefinition'>) => Promise<ReturnTypeFrom<'describeTaskDefinition'>>  = async params => {
  // undefined
    return this.client.describeTaskDefinition(params as any).promise();
  }

  describeTaskSets: (params: RawParamsFrom<'describeTaskSets'>) => Promise<ReturnTypeFrom<'describeTaskSets'>>  = async params => {
  // undefined
    return this.client.describeTaskSets(params as any).promise();
  }

  describeTasks: (params: RawParamsFrom<'describeTasks'>) => Promise<ReturnTypeFrom<'describeTasks'>>  = async params => {
  // undefined
    return this.client.describeTasks(params as any).promise();
  }

  discoverPollEndpoint: (params: RawParamsFrom<'discoverPollEndpoint'>) => Promise<ReturnTypeFrom<'discoverPollEndpoint'>>  = async params => {
  // undefined
    return this.client.discoverPollEndpoint(params as any).promise();
  }

  executeCommand: (params: RawParamsFrom<'executeCommand'>) => Promise<ReturnTypeFrom<'executeCommand'>>  = async params => {
  // undefined
    return this.client.executeCommand(params as any).promise();
  }

  async listAccountSettings(params: { [K in keyof ParamsFrom<'listAccountSettings', { next?: string, limit?: number }>]: ParamsFrom<'listAccountSettings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccountSettings'>]-?: ReturnTypeFrom<'listAccountSettings'>[K]}['settings'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"settings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccountSettings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.settings ?? []) ? (result.settings ?? []) : [result.settings]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listAttributes(params: { [K in keyof ParamsFrom<'listAttributes', { next?: string, limit?: number }>]: ParamsFrom<'listAttributes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttributes'>]-?: ReturnTypeFrom<'listAttributes'>[K]}['attributes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"attributes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAttributes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.attributes ?? []) ? (result.attributes ?? []) : [result.attributes]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listClusters(params: { [K in keyof ParamsFrom<'listClusters', { next?: string, limit?: number }>]: ParamsFrom<'listClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['clusterArns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"clusterArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.clusterArns ?? []) ? (result.clusterArns ?? []) : [result.clusterArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listContainerInstances(params: { [K in keyof ParamsFrom<'listContainerInstances', { next?: string, limit?: number }>]: ParamsFrom<'listContainerInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContainerInstances'>]-?: ReturnTypeFrom<'listContainerInstances'>[K]}['containerInstanceArns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"containerInstanceArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listContainerInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.containerInstanceArns ?? []) ? (result.containerInstanceArns ?? []) : [result.containerInstanceArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listServices(params: { [K in keyof ParamsFrom<'listServices', { next?: string, limit?: number }>]: ParamsFrom<'listServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['serviceArns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"serviceArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.serviceArns ?? []) ? (result.serviceArns ?? []) : [result.serviceArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listTaskDefinitionFamilies(params: { [K in keyof ParamsFrom<'listTaskDefinitionFamilies', { next?: string, limit?: number }>]: ParamsFrom<'listTaskDefinitionFamilies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTaskDefinitionFamilies'>]-?: ReturnTypeFrom<'listTaskDefinitionFamilies'>[K]}['families'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"families"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTaskDefinitionFamilies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.families ?? []) ? (result.families ?? []) : [result.families]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTaskDefinitions(params: { [K in keyof ParamsFrom<'listTaskDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'listTaskDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTaskDefinitions'>]-?: ReturnTypeFrom<'listTaskDefinitions'>[K]}['taskDefinitionArns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"taskDefinitionArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTaskDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.taskDefinitionArns ?? []) ? (result.taskDefinitionArns ?? []) : [result.taskDefinitionArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTasks(params: { [K in keyof ParamsFrom<'listTasks', { next?: string, limit?: number }>]: ParamsFrom<'listTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTasks'>]-?: ReturnTypeFrom<'listTasks'>[K]}['taskArns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"taskArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.taskArns ?? []) ? (result.taskArns ?? []) : [result.taskArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putAccountSetting: (params: RawParamsFrom<'putAccountSetting'>) => Promise<ReturnTypeFrom<'putAccountSetting'>>  = async params => {
  // undefined
    return this.client.putAccountSetting(params as any).promise();
  }

  putAccountSettingDefault: (params: RawParamsFrom<'putAccountSettingDefault'>) => Promise<ReturnTypeFrom<'putAccountSettingDefault'>>  = async params => {
  // undefined
    return this.client.putAccountSettingDefault(params as any).promise();
  }

  putAttributes: (params: RawParamsFrom<'putAttributes'>) => Promise<ReturnTypeFrom<'putAttributes'>>  = async params => {
  // undefined
    return this.client.putAttributes(params as any).promise();
  }

  putClusterCapacityProviders: (params: RawParamsFrom<'putClusterCapacityProviders'>) => Promise<ReturnTypeFrom<'putClusterCapacityProviders'>>  = async params => {
  // undefined
    return this.client.putClusterCapacityProviders(params as any).promise();
  }

  registerContainerInstance: (params: RawParamsFrom<'registerContainerInstance'>) => Promise<ReturnTypeFrom<'registerContainerInstance'>>  = async params => {
  // undefined
    return this.client.registerContainerInstance(params as any).promise();
  }

  registerTaskDefinition: (params: RawParamsFrom<'registerTaskDefinition'>) => Promise<ReturnTypeFrom<'registerTaskDefinition'>>  = async params => {
  // undefined
    return this.client.registerTaskDefinition(params as any).promise();
  }

  runTask: (params: RawParamsFrom<'runTask'>) => Promise<ReturnTypeFrom<'runTask'>>  = async params => {
  // undefined
    return this.client.runTask(params as any).promise();
  }

  startTask: (params: RawParamsFrom<'startTask'>) => Promise<ReturnTypeFrom<'startTask'>>  = async params => {
  // undefined
    return this.client.startTask(params as any).promise();
  }

  stopTask: (params: RawParamsFrom<'stopTask'>) => Promise<ReturnTypeFrom<'stopTask'>>  = async params => {
  // undefined
    return this.client.stopTask(params as any).promise();
  }

  submitAttachmentStateChanges: (params: RawParamsFrom<'submitAttachmentStateChanges'>) => Promise<ReturnTypeFrom<'submitAttachmentStateChanges'>>  = async params => {
  // undefined
    return this.client.submitAttachmentStateChanges(params as any).promise();
  }

  submitContainerStateChange: (params: RawParamsFrom<'submitContainerStateChange'>) => Promise<ReturnTypeFrom<'submitContainerStateChange'>>  = async params => {
  // undefined
    return this.client.submitContainerStateChange(params as any).promise();
  }

  submitTaskStateChange: (params: RawParamsFrom<'submitTaskStateChange'>) => Promise<ReturnTypeFrom<'submitTaskStateChange'>>  = async params => {
  // undefined
    return this.client.submitTaskStateChange(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCapacityProvider: (params: RawParamsFrom<'updateCapacityProvider'>) => Promise<ReturnTypeFrom<'updateCapacityProvider'>>  = async params => {
  // undefined
    return this.client.updateCapacityProvider(params as any).promise();
  }

  updateCluster: (params: RawParamsFrom<'updateCluster'>) => Promise<ReturnTypeFrom<'updateCluster'>>  = async params => {
  // undefined
    return this.client.updateCluster(params as any).promise();
  }

  updateClusterSettings: (params: RawParamsFrom<'updateClusterSettings'>) => Promise<ReturnTypeFrom<'updateClusterSettings'>>  = async params => {
  // undefined
    return this.client.updateClusterSettings(params as any).promise();
  }

  updateContainerAgent: (params: RawParamsFrom<'updateContainerAgent'>) => Promise<ReturnTypeFrom<'updateContainerAgent'>>  = async params => {
  // undefined
    return this.client.updateContainerAgent(params as any).promise();
  }

  updateContainerInstancesState: (params: RawParamsFrom<'updateContainerInstancesState'>) => Promise<ReturnTypeFrom<'updateContainerInstancesState'>>  = async params => {
  // undefined
    return this.client.updateContainerInstancesState(params as any).promise();
  }

  updateService: (params: RawParamsFrom<'updateService'>) => Promise<ReturnTypeFrom<'updateService'>>  = async params => {
  // undefined
    return this.client.updateService(params as any).promise();
  }

  updateServicePrimaryTaskSet: (params: RawParamsFrom<'updateServicePrimaryTaskSet'>) => Promise<ReturnTypeFrom<'updateServicePrimaryTaskSet'>>  = async params => {
  // undefined
    return this.client.updateServicePrimaryTaskSet(params as any).promise();
  }

  updateTaskSet: (params: RawParamsFrom<'updateTaskSet'>) => Promise<ReturnTypeFrom<'updateTaskSet'>>  = async params => {
  // undefined
    return this.client.updateTaskSet(params as any).promise();
  }
  
  static fromClient(client: AWSECS): ECS {
    return new ECS(client) as any;
  }
  
  static client(options?: AWSECS.Types.ClientConfiguration): ECS {
    return new ECS(new AWSECS(options)) as any;
  }
}  
