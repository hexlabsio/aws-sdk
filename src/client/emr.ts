import { Request, EMR as AWSEMR } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEMR> = AWSEMR[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEMR> = AWSEMR[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEMR[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEMR, Extras> = AWSEMR[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'elasticmapreduce';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["describeJobFlows","listClusters","listNotebookExecutions","listReleaseLabels","listSecurityConfigurations","listStudioSessionMappings","listStudios"];
    
  addInstanceFleet: FunctionTypeFrom<'addInstanceFleet'>;

  addInstanceGroups: FunctionTypeFrom<'addInstanceGroups'>;

  addJobFlowSteps: FunctionTypeFrom<'addJobFlowSteps'>;

  addTags: FunctionTypeFrom<'addTags'>;

  cancelSteps: FunctionTypeFrom<'cancelSteps'>;

  createSecurityConfiguration: FunctionTypeFrom<'createSecurityConfiguration'>;

  createStudio: FunctionTypeFrom<'createStudio'>;

  createStudioSessionMapping: FunctionTypeFrom<'createStudioSessionMapping'>;

  deleteSecurityConfiguration: FunctionTypeFrom<'deleteSecurityConfiguration'>;

  deleteStudio: FunctionTypeFrom<'deleteStudio'>;

  deleteStudioSessionMapping: FunctionTypeFrom<'deleteStudioSessionMapping'>;

  describeCluster: FunctionTypeFrom<'describeCluster'>;

  describeJobFlows: FunctionTypeFrom<'describeJobFlows'>;

  describeNotebookExecution: FunctionTypeFrom<'describeNotebookExecution'>;

  describeReleaseLabel: FunctionTypeFrom<'describeReleaseLabel'>;

  describeSecurityConfiguration: FunctionTypeFrom<'describeSecurityConfiguration'>;

  describeStep: FunctionTypeFrom<'describeStep'>;

  describeStudio: FunctionTypeFrom<'describeStudio'>;

  getAutoTerminationPolicy: FunctionTypeFrom<'getAutoTerminationPolicy'>;

  getBlockPublicAccessConfiguration: FunctionTypeFrom<'getBlockPublicAccessConfiguration'>;

  getManagedScalingPolicy: FunctionTypeFrom<'getManagedScalingPolicy'>;

  getStudioSessionMapping: FunctionTypeFrom<'getStudioSessionMapping'>;

  listBootstrapActions(params: { [K in keyof Omit<ParamsFrom<'listBootstrapActions', { next?: string }>, 'Marker'>]: ParamsFrom<'listBootstrapActions', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBootstrapActions'>]-?: ReturnTypeFrom<'listBootstrapActions'>[K]}['BootstrapActions'] }>
  ;

  listClusters(params: { [K in keyof Omit<ParamsFrom<'listClusters', { next?: string }>, 'Marker'>]: ParamsFrom<'listClusters', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['Clusters'] }>
  listClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['Clusters'] }>;

  listInstanceFleets(params: { [K in keyof Omit<ParamsFrom<'listInstanceFleets', { next?: string }>, 'Marker'>]: ParamsFrom<'listInstanceFleets', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstanceFleets'>]-?: ReturnTypeFrom<'listInstanceFleets'>[K]}['InstanceFleets'] }>
  ;

  listInstanceGroups(params: { [K in keyof Omit<ParamsFrom<'listInstanceGroups', { next?: string }>, 'Marker'>]: ParamsFrom<'listInstanceGroups', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstanceGroups'>]-?: ReturnTypeFrom<'listInstanceGroups'>[K]}['InstanceGroups'] }>
  ;

  listInstances(params: { [K in keyof Omit<ParamsFrom<'listInstances', { next?: string }>, 'Marker'>]: ParamsFrom<'listInstances', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['Instances'] }>
  ;

  listNotebookExecutions(params: { [K in keyof Omit<ParamsFrom<'listNotebookExecutions', { next?: string }>, 'Marker'>]: ParamsFrom<'listNotebookExecutions', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotebookExecutions'>]-?: ReturnTypeFrom<'listNotebookExecutions'>[K]}['NotebookExecutions'] }>
  listNotebookExecutions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotebookExecutions'>]-?: ReturnTypeFrom<'listNotebookExecutions'>[K]}['NotebookExecutions'] }>;

  listReleaseLabels: FunctionTypeFrom<'listReleaseLabels'>;

  listSecurityConfigurations(params: { [K in keyof Omit<ParamsFrom<'listSecurityConfigurations', { next?: string }>, 'Marker'>]: ParamsFrom<'listSecurityConfigurations', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityConfigurations'>]-?: ReturnTypeFrom<'listSecurityConfigurations'>[K]}['SecurityConfigurations'] }>
  listSecurityConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityConfigurations'>]-?: ReturnTypeFrom<'listSecurityConfigurations'>[K]}['SecurityConfigurations'] }>;

  listSteps(params: { [K in keyof Omit<ParamsFrom<'listSteps', { next?: string }>, 'Marker'>]: ParamsFrom<'listSteps', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSteps'>]-?: ReturnTypeFrom<'listSteps'>[K]}['Steps'] }>
  ;

  listStudioSessionMappings(params: { [K in keyof Omit<ParamsFrom<'listStudioSessionMappings', { next?: string }>, 'Marker'>]: ParamsFrom<'listStudioSessionMappings', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudioSessionMappings'>]-?: ReturnTypeFrom<'listStudioSessionMappings'>[K]}['SessionMappings'] }>
  listStudioSessionMappings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudioSessionMappings'>]-?: ReturnTypeFrom<'listStudioSessionMappings'>[K]}['SessionMappings'] }>;

  listStudios(params: { [K in keyof Omit<ParamsFrom<'listStudios', { next?: string }>, 'Marker'>]: ParamsFrom<'listStudios', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudios'>]-?: ReturnTypeFrom<'listStudios'>[K]}['Studios'] }>
  listStudios(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudios'>]-?: ReturnTypeFrom<'listStudios'>[K]}['Studios'] }>;

  modifyCluster: FunctionTypeFrom<'modifyCluster'>;

  modifyInstanceFleet: FunctionTypeFrom<'modifyInstanceFleet'>;

  modifyInstanceGroups: FunctionTypeFrom<'modifyInstanceGroups'>;

  putAutoScalingPolicy: FunctionTypeFrom<'putAutoScalingPolicy'>;

  putAutoTerminationPolicy: FunctionTypeFrom<'putAutoTerminationPolicy'>;

  putBlockPublicAccessConfiguration: FunctionTypeFrom<'putBlockPublicAccessConfiguration'>;

  putManagedScalingPolicy: FunctionTypeFrom<'putManagedScalingPolicy'>;

  removeAutoScalingPolicy: FunctionTypeFrom<'removeAutoScalingPolicy'>;

  removeAutoTerminationPolicy: FunctionTypeFrom<'removeAutoTerminationPolicy'>;

  removeManagedScalingPolicy: FunctionTypeFrom<'removeManagedScalingPolicy'>;

  removeTags: FunctionTypeFrom<'removeTags'>;

  runJobFlow: FunctionTypeFrom<'runJobFlow'>;

  setTerminationProtection: FunctionTypeFrom<'setTerminationProtection'>;

  setVisibleToAllUsers: FunctionTypeFrom<'setVisibleToAllUsers'>;

  startNotebookExecution: FunctionTypeFrom<'startNotebookExecution'>;

  stopNotebookExecution: FunctionTypeFrom<'stopNotebookExecution'>;

  terminateJobFlows: FunctionTypeFrom<'terminateJobFlows'>;

  updateStudio: FunctionTypeFrom<'updateStudio'>;

  updateStudioSessionMapping: FunctionTypeFrom<'updateStudioSessionMapping'>
}
 
export class EMR implements ClientType {
  private constructor(private readonly client: AWSEMR) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticmapreduce';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["describeJobFlows","listClusters","listNotebookExecutions","listReleaseLabels","listSecurityConfigurations","listStudioSessionMappings","listStudios"] as const;
  
  async addInstanceFleet(...args: any): Promise<any> {
  // undefined
    return this.client.addInstanceFleet(...args).promise()
  }

  async addInstanceGroups(...args: any): Promise<any> {
  // undefined
    return this.client.addInstanceGroups(...args).promise()
  }

  async addJobFlowSteps(...args: any): Promise<any> {
  // undefined
    return this.client.addJobFlowSteps(...args).promise()
  }

  async addTags(...args: any): Promise<any> {
  // undefined
    return this.client.addTags(...args).promise()
  }

  async cancelSteps(...args: any): Promise<any> {
  // undefined
    return this.client.cancelSteps(...args).promise()
  }

  async createSecurityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createSecurityConfiguration(...args).promise()
  }

  async createStudio(...args: any): Promise<any> {
  // undefined
    return this.client.createStudio(...args).promise()
  }

  async createStudioSessionMapping(...args: any): Promise<any> {
  // undefined
    return this.client.createStudioSessionMapping(...args).promise()
  }

  async deleteSecurityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSecurityConfiguration(...args).promise()
  }

  async deleteStudio(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStudio(...args).promise()
  }

  async deleteStudioSessionMapping(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStudioSessionMapping(...args).promise()
  }

  async describeCluster(...args: any): Promise<any> {
  // undefined
    return this.client.describeCluster(...args).promise()
  }

  async describeJobFlows(...args: any): Promise<any> {
  // {"resultKey":"JobFlows"}
    return this.client.describeJobFlows(...args).promise()
  }

  async describeNotebookExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describeNotebookExecution(...args).promise()
  }

  async describeReleaseLabel(...args: any): Promise<any> {
  // undefined
    return this.client.describeReleaseLabel(...args).promise()
  }

  async describeSecurityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeSecurityConfiguration(...args).promise()
  }

  async describeStep(...args: any): Promise<any> {
  // undefined
    return this.client.describeStep(...args).promise()
  }

  async describeStudio(...args: any): Promise<any> {
  // undefined
    return this.client.describeStudio(...args).promise()
  }

  async getAutoTerminationPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getAutoTerminationPolicy(...args).promise()
  }

  async getBlockPublicAccessConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getBlockPublicAccessConfiguration(...args).promise()
  }

  async getManagedScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getManagedScalingPolicy(...args).promise()
  }

  async getStudioSessionMapping(...args: any): Promise<any> {
  // undefined
    return this.client.getStudioSessionMapping(...args).promise()
  }

  async listBootstrapActions(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"BootstrapActions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listBootstrapActions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.BootstrapActions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClusters(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"Clusters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Clusters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceFleets(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"InstanceFleets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listInstanceFleets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.InstanceFleets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"InstanceGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listInstanceGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.InstanceGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstances(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"Instances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Instances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNotebookExecutions(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"NotebookExecutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listNotebookExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.NotebookExecutions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReleaseLabels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReleaseLabels(...args).promise()
  }

  async listSecurityConfigurations(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"SecurityConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listSecurityConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.SecurityConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSteps(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"Steps"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listSteps(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Steps ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStudioSessionMappings(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"SessionMappings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listStudioSessionMappings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.SessionMappings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStudios(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"Studios"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listStudios(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Studios ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async modifyCluster(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCluster(...args).promise()
  }

  async modifyInstanceFleet(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstanceFleet(...args).promise()
  }

  async modifyInstanceGroups(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstanceGroups(...args).promise()
  }

  async putAutoScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putAutoScalingPolicy(...args).promise()
  }

  async putAutoTerminationPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putAutoTerminationPolicy(...args).promise()
  }

  async putBlockPublicAccessConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBlockPublicAccessConfiguration(...args).promise()
  }

  async putManagedScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putManagedScalingPolicy(...args).promise()
  }

  async removeAutoScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.removeAutoScalingPolicy(...args).promise()
  }

  async removeAutoTerminationPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.removeAutoTerminationPolicy(...args).promise()
  }

  async removeManagedScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.removeManagedScalingPolicy(...args).promise()
  }

  async removeTags(...args: any): Promise<any> {
  // undefined
    return this.client.removeTags(...args).promise()
  }

  async runJobFlow(...args: any): Promise<any> {
  // undefined
    return this.client.runJobFlow(...args).promise()
  }

  async setTerminationProtection(...args: any): Promise<any> {
  // undefined
    return this.client.setTerminationProtection(...args).promise()
  }

  async setVisibleToAllUsers(...args: any): Promise<any> {
  // undefined
    return this.client.setVisibleToAllUsers(...args).promise()
  }

  async startNotebookExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startNotebookExecution(...args).promise()
  }

  async stopNotebookExecution(...args: any): Promise<any> {
  // undefined
    return this.client.stopNotebookExecution(...args).promise()
  }

  async terminateJobFlows(...args: any): Promise<any> {
  // undefined
    return this.client.terminateJobFlows(...args).promise()
  }

  async updateStudio(...args: any): Promise<any> {
  // undefined
    return this.client.updateStudio(...args).promise()
  }

  async updateStudioSessionMapping(...args: any): Promise<any> {
  // undefined
    return this.client.updateStudioSessionMapping(...args).promise()
  }
  
  static fromClient(client: AWSEMR): ClientType {
    return new EMR(client) as any;
  }
  
  static client(options?: AWSEMR.Types.ClientConfiguration): ClientType {
    return new EMR(new AWSEMR(options)) as any;
  }
}  
