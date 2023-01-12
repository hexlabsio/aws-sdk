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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEMR> = AWSEMR[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class EMR {
  private constructor(private readonly client: AWSEMR) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticmapreduce' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["describeJobFlows","listClusters","listNotebookExecutions","listReleaseLabels","listSecurityConfigurations","listStudioSessionMappings","listStudios"] as const;
  
  addInstanceFleet: (params: RawParamsFrom<'addInstanceFleet'>) => Promise<ReturnTypeFrom<'addInstanceFleet'>>  = async params => {
  // undefined
    return this.client.addInstanceFleet(params as any).promise();
  }

  addInstanceGroups: (params: RawParamsFrom<'addInstanceGroups'>) => Promise<ReturnTypeFrom<'addInstanceGroups'>>  = async params => {
  // undefined
    return this.client.addInstanceGroups(params as any).promise();
  }

  addJobFlowSteps: (params: RawParamsFrom<'addJobFlowSteps'>) => Promise<ReturnTypeFrom<'addJobFlowSteps'>>  = async params => {
  // undefined
    return this.client.addJobFlowSteps(params as any).promise();
  }

  addTags: (params: RawParamsFrom<'addTags'>) => Promise<ReturnTypeFrom<'addTags'>>  = async params => {
  // undefined
    return this.client.addTags(params as any).promise();
  }

  cancelSteps: (params: RawParamsFrom<'cancelSteps'>) => Promise<ReturnTypeFrom<'cancelSteps'>>  = async params => {
  // undefined
    return this.client.cancelSteps(params as any).promise();
  }

  createSecurityConfiguration: (params: RawParamsFrom<'createSecurityConfiguration'>) => Promise<ReturnTypeFrom<'createSecurityConfiguration'>>  = async params => {
  // undefined
    return this.client.createSecurityConfiguration(params as any).promise();
  }

  createStudio: (params: RawParamsFrom<'createStudio'>) => Promise<ReturnTypeFrom<'createStudio'>>  = async params => {
  // undefined
    return this.client.createStudio(params as any).promise();
  }

  createStudioSessionMapping: (params: RawParamsFrom<'createStudioSessionMapping'>) => Promise<ReturnTypeFrom<'createStudioSessionMapping'>>  = async params => {
  // undefined
    return this.client.createStudioSessionMapping(params as any).promise();
  }

  deleteSecurityConfiguration: (params: RawParamsFrom<'deleteSecurityConfiguration'>) => Promise<ReturnTypeFrom<'deleteSecurityConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteSecurityConfiguration(params as any).promise();
  }

  deleteStudio: (params: RawParamsFrom<'deleteStudio'>) => Promise<ReturnTypeFrom<'deleteStudio'>>  = async params => {
  // undefined
    return this.client.deleteStudio(params as any).promise();
  }

  deleteStudioSessionMapping: (params: RawParamsFrom<'deleteStudioSessionMapping'>) => Promise<ReturnTypeFrom<'deleteStudioSessionMapping'>>  = async params => {
  // undefined
    return this.client.deleteStudioSessionMapping(params as any).promise();
  }

  describeCluster: (params: RawParamsFrom<'describeCluster'>) => Promise<ReturnTypeFrom<'describeCluster'>>  = async params => {
  // undefined
    return this.client.describeCluster(params as any).promise();
  }

  async describeJobFlows(params: { [K in keyof ParamsFrom<'describeJobFlows', {}>]: ParamsFrom<'describeJobFlows', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeJobFlows'>]-?: ReturnTypeFrom<'describeJobFlows'>[K]}['JobFlows'], undefined>}> {
    // {"resultKey":"JobFlows"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeJobFlows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.JobFlows ?? []) ? (result.JobFlows ?? []) : [result.JobFlows]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeNotebookExecution: (params: RawParamsFrom<'describeNotebookExecution'>) => Promise<ReturnTypeFrom<'describeNotebookExecution'>>  = async params => {
  // undefined
    return this.client.describeNotebookExecution(params as any).promise();
  }

  describeReleaseLabel: (params: RawParamsFrom<'describeReleaseLabel'>) => Promise<ReturnTypeFrom<'describeReleaseLabel'>>  = async params => {
  // undefined
    return this.client.describeReleaseLabel(params as any).promise();
  }

  describeSecurityConfiguration: (params: RawParamsFrom<'describeSecurityConfiguration'>) => Promise<ReturnTypeFrom<'describeSecurityConfiguration'>>  = async params => {
  // undefined
    return this.client.describeSecurityConfiguration(params as any).promise();
  }

  describeStep: (params: RawParamsFrom<'describeStep'>) => Promise<ReturnTypeFrom<'describeStep'>>  = async params => {
  // undefined
    return this.client.describeStep(params as any).promise();
  }

  describeStudio: (params: RawParamsFrom<'describeStudio'>) => Promise<ReturnTypeFrom<'describeStudio'>>  = async params => {
  // undefined
    return this.client.describeStudio(params as any).promise();
  }

  getAutoTerminationPolicy: (params: RawParamsFrom<'getAutoTerminationPolicy'>) => Promise<ReturnTypeFrom<'getAutoTerminationPolicy'>>  = async params => {
  // undefined
    return this.client.getAutoTerminationPolicy(params as any).promise();
  }

  getBlockPublicAccessConfiguration: (params: RawParamsFrom<'getBlockPublicAccessConfiguration'>) => Promise<ReturnTypeFrom<'getBlockPublicAccessConfiguration'>>  = async params => {
  // undefined
    return this.client.getBlockPublicAccessConfiguration(params as any).promise();
  }

  getClusterSessionCredentials: (params: RawParamsFrom<'getClusterSessionCredentials'>) => Promise<ReturnTypeFrom<'getClusterSessionCredentials'>>  = async params => {
  // undefined
    return this.client.getClusterSessionCredentials(params as any).promise();
  }

  getManagedScalingPolicy: (params: RawParamsFrom<'getManagedScalingPolicy'>) => Promise<ReturnTypeFrom<'getManagedScalingPolicy'>>  = async params => {
  // undefined
    return this.client.getManagedScalingPolicy(params as any).promise();
  }

  getStudioSessionMapping: (params: RawParamsFrom<'getStudioSessionMapping'>) => Promise<ReturnTypeFrom<'getStudioSessionMapping'>>  = async params => {
  // undefined
    return this.client.getStudioSessionMapping(params as any).promise();
  }

  async listBootstrapActions(params: { [K in keyof ParamsFrom<'listBootstrapActions', { next?: string }>]: ParamsFrom<'listBootstrapActions', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBootstrapActions'>]-?: ReturnTypeFrom<'listBootstrapActions'>[K]}['BootstrapActions'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"BootstrapActions"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listBootstrapActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listBootstrapActions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BootstrapActions ?? []) ? (result.BootstrapActions ?? []) : [result.BootstrapActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClusters(params: { [K in keyof ParamsFrom<'listClusters', { next?: string }>]: ParamsFrom<'listClusters', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['Clusters'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"Clusters"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listClusters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Clusters ?? []) ? (result.Clusters ?? []) : [result.Clusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceFleets(params: { [K in keyof ParamsFrom<'listInstanceFleets', { next?: string }>]: ParamsFrom<'listInstanceFleets', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstanceFleets'>]-?: ReturnTypeFrom<'listInstanceFleets'>[K]}['InstanceFleets'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"InstanceFleets"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listInstanceFleets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listInstanceFleets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceFleets ?? []) ? (result.InstanceFleets ?? []) : [result.InstanceFleets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceGroups(params: { [K in keyof ParamsFrom<'listInstanceGroups', { next?: string }>]: ParamsFrom<'listInstanceGroups', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstanceGroups'>]-?: ReturnTypeFrom<'listInstanceGroups'>[K]}['InstanceGroups'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"InstanceGroups"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listInstanceGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listInstanceGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceGroups ?? []) ? (result.InstanceGroups ?? []) : [result.InstanceGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstances(params: { [K in keyof ParamsFrom<'listInstances', { next?: string }>]: ParamsFrom<'listInstances', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['Instances'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"Instances"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Instances ?? []) ? (result.Instances ?? []) : [result.Instances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNotebookExecutions(params: { [K in keyof ParamsFrom<'listNotebookExecutions', { next?: string }>]: ParamsFrom<'listNotebookExecutions', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNotebookExecutions'>]-?: ReturnTypeFrom<'listNotebookExecutions'>[K]}['NotebookExecutions'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"NotebookExecutions"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listNotebookExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listNotebookExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NotebookExecutions ?? []) ? (result.NotebookExecutions ?? []) : [result.NotebookExecutions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listReleaseLabels: (params: RawParamsFrom<'listReleaseLabels'>) => Promise<ReturnTypeFrom<'listReleaseLabels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReleaseLabels(params as any).promise();
  }

  async listSecurityConfigurations(params: { [K in keyof ParamsFrom<'listSecurityConfigurations', { next?: string }>]: ParamsFrom<'listSecurityConfigurations', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSecurityConfigurations'>]-?: ReturnTypeFrom<'listSecurityConfigurations'>[K]}['SecurityConfigurations'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"SecurityConfigurations"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listSecurityConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listSecurityConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SecurityConfigurations ?? []) ? (result.SecurityConfigurations ?? []) : [result.SecurityConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSteps(params: { [K in keyof ParamsFrom<'listSteps', { next?: string }>]: ParamsFrom<'listSteps', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSteps'>]-?: ReturnTypeFrom<'listSteps'>[K]}['Steps'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"Steps"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listSteps({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listSteps' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Steps ?? []) ? (result.Steps ?? []) : [result.Steps]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStudioSessionMappings(params: { [K in keyof ParamsFrom<'listStudioSessionMappings', { next?: string }>]: ParamsFrom<'listStudioSessionMappings', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStudioSessionMappings'>]-?: ReturnTypeFrom<'listStudioSessionMappings'>[K]}['SessionMappings'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"SessionMappings"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listStudioSessionMappings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listStudioSessionMappings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SessionMappings ?? []) ? (result.SessionMappings ?? []) : [result.SessionMappings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStudios(params: { [K in keyof ParamsFrom<'listStudios', { next?: string }>]: ParamsFrom<'listStudios', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStudios'>]-?: ReturnTypeFrom<'listStudios'>[K]}['Studios'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"Marker","resultKey":"Studios"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listStudios({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listStudios' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Studios ?? []) ? (result.Studios ?? []) : [result.Studios]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  modifyCluster: (params: RawParamsFrom<'modifyCluster'>) => Promise<ReturnTypeFrom<'modifyCluster'>>  = async params => {
  // undefined
    return this.client.modifyCluster(params as any).promise();
  }

  modifyInstanceFleet: (params: RawParamsFrom<'modifyInstanceFleet'>) => Promise<ReturnTypeFrom<'modifyInstanceFleet'>>  = async params => {
  // undefined
    return this.client.modifyInstanceFleet(params as any).promise();
  }

  modifyInstanceGroups: (params: RawParamsFrom<'modifyInstanceGroups'>) => Promise<ReturnTypeFrom<'modifyInstanceGroups'>>  = async params => {
  // undefined
    return this.client.modifyInstanceGroups(params as any).promise();
  }

  putAutoScalingPolicy: (params: RawParamsFrom<'putAutoScalingPolicy'>) => Promise<ReturnTypeFrom<'putAutoScalingPolicy'>>  = async params => {
  // undefined
    return this.client.putAutoScalingPolicy(params as any).promise();
  }

  putAutoTerminationPolicy: (params: RawParamsFrom<'putAutoTerminationPolicy'>) => Promise<ReturnTypeFrom<'putAutoTerminationPolicy'>>  = async params => {
  // undefined
    return this.client.putAutoTerminationPolicy(params as any).promise();
  }

  putBlockPublicAccessConfiguration: (params: RawParamsFrom<'putBlockPublicAccessConfiguration'>) => Promise<ReturnTypeFrom<'putBlockPublicAccessConfiguration'>>  = async params => {
  // undefined
    return this.client.putBlockPublicAccessConfiguration(params as any).promise();
  }

  putManagedScalingPolicy: (params: RawParamsFrom<'putManagedScalingPolicy'>) => Promise<ReturnTypeFrom<'putManagedScalingPolicy'>>  = async params => {
  // undefined
    return this.client.putManagedScalingPolicy(params as any).promise();
  }

  removeAutoScalingPolicy: (params: RawParamsFrom<'removeAutoScalingPolicy'>) => Promise<ReturnTypeFrom<'removeAutoScalingPolicy'>>  = async params => {
  // undefined
    return this.client.removeAutoScalingPolicy(params as any).promise();
  }

  removeAutoTerminationPolicy: (params: RawParamsFrom<'removeAutoTerminationPolicy'>) => Promise<ReturnTypeFrom<'removeAutoTerminationPolicy'>>  = async params => {
  // undefined
    return this.client.removeAutoTerminationPolicy(params as any).promise();
  }

  removeManagedScalingPolicy: (params: RawParamsFrom<'removeManagedScalingPolicy'>) => Promise<ReturnTypeFrom<'removeManagedScalingPolicy'>>  = async params => {
  // undefined
    return this.client.removeManagedScalingPolicy(params as any).promise();
  }

  removeTags: (params: RawParamsFrom<'removeTags'>) => Promise<ReturnTypeFrom<'removeTags'>>  = async params => {
  // undefined
    return this.client.removeTags(params as any).promise();
  }

  runJobFlow: (params: RawParamsFrom<'runJobFlow'>) => Promise<ReturnTypeFrom<'runJobFlow'>>  = async params => {
  // undefined
    return this.client.runJobFlow(params as any).promise();
  }

  setTerminationProtection: (params: RawParamsFrom<'setTerminationProtection'>) => Promise<ReturnTypeFrom<'setTerminationProtection'>>  = async params => {
  // undefined
    return this.client.setTerminationProtection(params as any).promise();
  }

  setVisibleToAllUsers: (params: RawParamsFrom<'setVisibleToAllUsers'>) => Promise<ReturnTypeFrom<'setVisibleToAllUsers'>>  = async params => {
  // undefined
    return this.client.setVisibleToAllUsers(params as any).promise();
  }

  startNotebookExecution: (params: RawParamsFrom<'startNotebookExecution'>) => Promise<ReturnTypeFrom<'startNotebookExecution'>>  = async params => {
  // undefined
    return this.client.startNotebookExecution(params as any).promise();
  }

  stopNotebookExecution: (params: RawParamsFrom<'stopNotebookExecution'>) => Promise<ReturnTypeFrom<'stopNotebookExecution'>>  = async params => {
  // undefined
    return this.client.stopNotebookExecution(params as any).promise();
  }

  terminateJobFlows: (params: RawParamsFrom<'terminateJobFlows'>) => Promise<ReturnTypeFrom<'terminateJobFlows'>>  = async params => {
  // undefined
    return this.client.terminateJobFlows(params as any).promise();
  }

  updateStudio: (params: RawParamsFrom<'updateStudio'>) => Promise<ReturnTypeFrom<'updateStudio'>>  = async params => {
  // undefined
    return this.client.updateStudio(params as any).promise();
  }

  updateStudioSessionMapping: (params: RawParamsFrom<'updateStudioSessionMapping'>) => Promise<ReturnTypeFrom<'updateStudioSessionMapping'>>  = async params => {
  // undefined
    return this.client.updateStudioSessionMapping(params as any).promise();
  }
  
  static fromClient(client: AWSEMR): EMR {
    return new EMR(client) as any;
  }
  
  static client(options?: AWSEMR.Types.ClientConfiguration): EMR {
    return new EMR(new AWSEMR(options)) as any;
  }
}  
