import { Request, Kafka as AWSKafka } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKafka> = AWSKafka[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKafka> = AWSKafka[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKafka[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKafka, Extras> = AWSKafka[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKafka> = AWSKafka[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Kafka {
  private constructor(private readonly client: AWSKafka) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kafka' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = ["listClusters","listClustersV2","listConfigurations","listKafkaVersions"] as const;
  
  batchAssociateScramSecret: (params: RawParamsFrom<'batchAssociateScramSecret'>) => Promise<ReturnTypeFrom<'batchAssociateScramSecret'>>  = async params => {
  // undefined
    return this.client.batchAssociateScramSecret(params as any).promise();
  }

  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createClusterV2: (params: RawParamsFrom<'createClusterV2'>) => Promise<ReturnTypeFrom<'createClusterV2'>>  = async params => {
  // undefined
    return this.client.createClusterV2(params as any).promise();
  }

  createConfiguration: (params: RawParamsFrom<'createConfiguration'>) => Promise<ReturnTypeFrom<'createConfiguration'>>  = async params => {
  // undefined
    return this.client.createConfiguration(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteConfiguration: (params: RawParamsFrom<'deleteConfiguration'>) => Promise<ReturnTypeFrom<'deleteConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteConfiguration(params as any).promise();
  }

  describeCluster: (params: RawParamsFrom<'describeCluster'>) => Promise<ReturnTypeFrom<'describeCluster'>>  = async params => {
  // undefined
    return this.client.describeCluster(params as any).promise();
  }

  describeClusterV2: (params: RawParamsFrom<'describeClusterV2'>) => Promise<ReturnTypeFrom<'describeClusterV2'>>  = async params => {
  // undefined
    return this.client.describeClusterV2(params as any).promise();
  }

  describeClusterOperation: (params: RawParamsFrom<'describeClusterOperation'>) => Promise<ReturnTypeFrom<'describeClusterOperation'>>  = async params => {
  // undefined
    return this.client.describeClusterOperation(params as any).promise();
  }

  describeConfiguration: (params: RawParamsFrom<'describeConfiguration'>) => Promise<ReturnTypeFrom<'describeConfiguration'>>  = async params => {
  // undefined
    return this.client.describeConfiguration(params as any).promise();
  }

  describeConfigurationRevision: (params: RawParamsFrom<'describeConfigurationRevision'>) => Promise<ReturnTypeFrom<'describeConfigurationRevision'>>  = async params => {
  // undefined
    return this.client.describeConfigurationRevision(params as any).promise();
  }

  batchDisassociateScramSecret: (params: RawParamsFrom<'batchDisassociateScramSecret'>) => Promise<ReturnTypeFrom<'batchDisassociateScramSecret'>>  = async params => {
  // undefined
    return this.client.batchDisassociateScramSecret(params as any).promise();
  }

  getBootstrapBrokers: (params: RawParamsFrom<'getBootstrapBrokers'>) => Promise<ReturnTypeFrom<'getBootstrapBrokers'>>  = async params => {
  // undefined
    return this.client.getBootstrapBrokers(params as any).promise();
  }

  getCompatibleKafkaVersions: (params: RawParamsFrom<'getCompatibleKafkaVersions'>) => Promise<ReturnTypeFrom<'getCompatibleKafkaVersions'>>  = async params => {
  // undefined
    return this.client.getCompatibleKafkaVersions(params as any).promise();
  }

  async listClusterOperations(params: { [K in keyof ParamsFrom<'listClusterOperations', { next?: string, limit?: number }>]: ParamsFrom<'listClusterOperations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClusterOperations'>]-?: ReturnTypeFrom<'listClusterOperations'>[K]}['ClusterOperationInfoList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClusterOperationInfoList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listClusterOperations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listClusterOperations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClusterOperationInfoList ?? []) ? (result.ClusterOperationInfoList ?? []) : [result.ClusterOperationInfoList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClusters(params: { [K in keyof ParamsFrom<'listClusters', { next?: string, limit?: number }>]: ParamsFrom<'listClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['ClusterInfoList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClusterInfoList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listClusters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClusterInfoList ?? []) ? (result.ClusterInfoList ?? []) : [result.ClusterInfoList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClustersV2(params: { [K in keyof ParamsFrom<'listClustersV2', { next?: string, limit?: number }>]: ParamsFrom<'listClustersV2', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClustersV2'>]-?: ReturnTypeFrom<'listClustersV2'>[K]}['ClusterInfoList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClusterInfoList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listClustersV2({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listClustersV2' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClusterInfoList ?? []) ? (result.ClusterInfoList ?? []) : [result.ClusterInfoList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConfigurationRevisions(params: { [K in keyof ParamsFrom<'listConfigurationRevisions', { next?: string, limit?: number }>]: ParamsFrom<'listConfigurationRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listConfigurationRevisions'>]-?: ReturnTypeFrom<'listConfigurationRevisions'>[K]}['Revisions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Revisions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listConfigurationRevisions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listConfigurationRevisions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Revisions ?? []) ? (result.Revisions ?? []) : [result.Revisions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConfigurations(params: { [K in keyof ParamsFrom<'listConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'listConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listConfigurations'>]-?: ReturnTypeFrom<'listConfigurations'>[K]}['Configurations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Configurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Configurations ?? []) ? (result.Configurations ?? []) : [result.Configurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listKafkaVersions(params: { [K in keyof ParamsFrom<'listKafkaVersions', { next?: string, limit?: number }>]: ParamsFrom<'listKafkaVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listKafkaVersions'>]-?: ReturnTypeFrom<'listKafkaVersions'>[K]}['KafkaVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"KafkaVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listKafkaVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listKafkaVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.KafkaVersions ?? []) ? (result.KafkaVersions ?? []) : [result.KafkaVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNodes(params: { [K in keyof ParamsFrom<'listNodes', { next?: string, limit?: number }>]: ParamsFrom<'listNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNodes'>]-?: ReturnTypeFrom<'listNodes'>[K]}['NodeInfoList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NodeInfoList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNodes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listNodes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NodeInfoList ?? []) ? (result.NodeInfoList ?? []) : [result.NodeInfoList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listScramSecrets(params: { [K in keyof ParamsFrom<'listScramSecrets', { next?: string, limit?: number }>]: ParamsFrom<'listScramSecrets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listScramSecrets'>]-?: ReturnTypeFrom<'listScramSecrets'>[K]}['SecretArnList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecretArnList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listScramSecrets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listScramSecrets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SecretArnList ?? []) ? (result.SecretArnList ?? []) : [result.SecretArnList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  rebootBroker: (params: RawParamsFrom<'rebootBroker'>) => Promise<ReturnTypeFrom<'rebootBroker'>>  = async params => {
  // undefined
    return this.client.rebootBroker(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateBrokerCount: (params: RawParamsFrom<'updateBrokerCount'>) => Promise<ReturnTypeFrom<'updateBrokerCount'>>  = async params => {
  // undefined
    return this.client.updateBrokerCount(params as any).promise();
  }

  updateBrokerType: (params: RawParamsFrom<'updateBrokerType'>) => Promise<ReturnTypeFrom<'updateBrokerType'>>  = async params => {
  // undefined
    return this.client.updateBrokerType(params as any).promise();
  }

  updateBrokerStorage: (params: RawParamsFrom<'updateBrokerStorage'>) => Promise<ReturnTypeFrom<'updateBrokerStorage'>>  = async params => {
  // undefined
    return this.client.updateBrokerStorage(params as any).promise();
  }

  updateConfiguration: (params: RawParamsFrom<'updateConfiguration'>) => Promise<ReturnTypeFrom<'updateConfiguration'>>  = async params => {
  // undefined
    return this.client.updateConfiguration(params as any).promise();
  }

  updateConnectivity: (params: RawParamsFrom<'updateConnectivity'>) => Promise<ReturnTypeFrom<'updateConnectivity'>>  = async params => {
  // undefined
    return this.client.updateConnectivity(params as any).promise();
  }

  updateClusterConfiguration: (params: RawParamsFrom<'updateClusterConfiguration'>) => Promise<ReturnTypeFrom<'updateClusterConfiguration'>>  = async params => {
  // undefined
    return this.client.updateClusterConfiguration(params as any).promise();
  }

  updateClusterKafkaVersion: (params: RawParamsFrom<'updateClusterKafkaVersion'>) => Promise<ReturnTypeFrom<'updateClusterKafkaVersion'>>  = async params => {
  // undefined
    return this.client.updateClusterKafkaVersion(params as any).promise();
  }

  updateMonitoring: (params: RawParamsFrom<'updateMonitoring'>) => Promise<ReturnTypeFrom<'updateMonitoring'>>  = async params => {
  // undefined
    return this.client.updateMonitoring(params as any).promise();
  }

  updateSecurity: (params: RawParamsFrom<'updateSecurity'>) => Promise<ReturnTypeFrom<'updateSecurity'>>  = async params => {
  // undefined
    return this.client.updateSecurity(params as any).promise();
  }
  
  static fromClient(client: AWSKafka): Kafka {
    return new Kafka(client) as any;
  }
  
  static client(options?: AWSKafka.Types.ClientConfiguration): Kafka {
    return new Kafka(new AWSKafka(options)) as any;
  }
}  
