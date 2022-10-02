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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kafka';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly ["listClusters","listClustersV2","listConfigurations","listKafkaVersions"];
    
  batchAssociateScramSecret: FunctionTypeFrom<'batchAssociateScramSecret'>;

  createCluster: FunctionTypeFrom<'createCluster'>;

  createClusterV2: FunctionTypeFrom<'createClusterV2'>;

  createConfiguration: FunctionTypeFrom<'createConfiguration'>;

  deleteCluster: FunctionTypeFrom<'deleteCluster'>;

  deleteConfiguration: FunctionTypeFrom<'deleteConfiguration'>;

  describeCluster: FunctionTypeFrom<'describeCluster'>;

  describeClusterV2: FunctionTypeFrom<'describeClusterV2'>;

  describeClusterOperation: FunctionTypeFrom<'describeClusterOperation'>;

  describeConfiguration: FunctionTypeFrom<'describeConfiguration'>;

  describeConfigurationRevision: FunctionTypeFrom<'describeConfigurationRevision'>;

  batchDisassociateScramSecret: FunctionTypeFrom<'batchDisassociateScramSecret'>;

  getBootstrapBrokers: FunctionTypeFrom<'getBootstrapBrokers'>;

  getCompatibleKafkaVersions: FunctionTypeFrom<'getCompatibleKafkaVersions'>;

  listClusterOperations(params: { [K in keyof Omit<ParamsFrom<'listClusterOperations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listClusterOperations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClusterOperations'>]-?: ReturnTypeFrom<'listClusterOperations'>[K]}['ClusterOperationInfoList'] }>
  ;

  listClusters(params: { [K in keyof Omit<ParamsFrom<'listClusters', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['ClusterInfoList'] }>
  listClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['ClusterInfoList'] }>;

  listClustersV2(params: { [K in keyof Omit<ParamsFrom<'listClustersV2', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listClustersV2', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClustersV2'>]-?: ReturnTypeFrom<'listClustersV2'>[K]}['ClusterInfoList'] }>
  listClustersV2(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClustersV2'>]-?: ReturnTypeFrom<'listClustersV2'>[K]}['ClusterInfoList'] }>;

  listConfigurationRevisions(params: { [K in keyof Omit<ParamsFrom<'listConfigurationRevisions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listConfigurationRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConfigurationRevisions'>]-?: ReturnTypeFrom<'listConfigurationRevisions'>[K]}['Revisions'] }>
  ;

  listConfigurations(params: { [K in keyof Omit<ParamsFrom<'listConfigurations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConfigurations'>]-?: ReturnTypeFrom<'listConfigurations'>[K]}['Configurations'] }>
  listConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConfigurations'>]-?: ReturnTypeFrom<'listConfigurations'>[K]}['Configurations'] }>;

  listKafkaVersions(params: { [K in keyof Omit<ParamsFrom<'listKafkaVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listKafkaVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listKafkaVersions'>]-?: ReturnTypeFrom<'listKafkaVersions'>[K]}['KafkaVersions'] }>
  listKafkaVersions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listKafkaVersions'>]-?: ReturnTypeFrom<'listKafkaVersions'>[K]}['KafkaVersions'] }>;

  listNodes(params: { [K in keyof Omit<ParamsFrom<'listNodes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNodes'>]-?: ReturnTypeFrom<'listNodes'>[K]}['NodeInfoList'] }>
  ;

  listScramSecrets(params: { [K in keyof Omit<ParamsFrom<'listScramSecrets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listScramSecrets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listScramSecrets'>]-?: ReturnTypeFrom<'listScramSecrets'>[K]}['SecretArnList'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  rebootBroker: FunctionTypeFrom<'rebootBroker'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateBrokerCount: FunctionTypeFrom<'updateBrokerCount'>;

  updateBrokerType: FunctionTypeFrom<'updateBrokerType'>;

  updateBrokerStorage: FunctionTypeFrom<'updateBrokerStorage'>;

  updateConfiguration: FunctionTypeFrom<'updateConfiguration'>;

  updateConnectivity: FunctionTypeFrom<'updateConnectivity'>;

  updateClusterConfiguration: FunctionTypeFrom<'updateClusterConfiguration'>;

  updateClusterKafkaVersion: FunctionTypeFrom<'updateClusterKafkaVersion'>;

  updateMonitoring: FunctionTypeFrom<'updateMonitoring'>;

  updateSecurity: FunctionTypeFrom<'updateSecurity'>
}
 
export class Kafka implements ClientType {
  private constructor(private readonly client: AWSKafka) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kafka';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = ["listClusters","listClustersV2","listConfigurations","listKafkaVersions"] as const;
  
  async batchAssociateScramSecret(...args: any): Promise<any> {
  // undefined
    return this.client.batchAssociateScramSecret(...args).promise()
  }

  async createCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCluster(...args).promise()
  }

  async createClusterV2(...args: any): Promise<any> {
  // undefined
    return this.client.createClusterV2(...args).promise()
  }

  async createConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createConfiguration(...args).promise()
  }

  async deleteCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCluster(...args).promise()
  }

  async deleteConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfiguration(...args).promise()
  }

  async describeCluster(...args: any): Promise<any> {
  // undefined
    return this.client.describeCluster(...args).promise()
  }

  async describeClusterV2(...args: any): Promise<any> {
  // undefined
    return this.client.describeClusterV2(...args).promise()
  }

  async describeClusterOperation(...args: any): Promise<any> {
  // undefined
    return this.client.describeClusterOperation(...args).promise()
  }

  async describeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeConfiguration(...args).promise()
  }

  async describeConfigurationRevision(...args: any): Promise<any> {
  // undefined
    return this.client.describeConfigurationRevision(...args).promise()
  }

  async batchDisassociateScramSecret(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisassociateScramSecret(...args).promise()
  }

  async getBootstrapBrokers(...args: any): Promise<any> {
  // undefined
    return this.client.getBootstrapBrokers(...args).promise()
  }

  async getCompatibleKafkaVersions(...args: any): Promise<any> {
  // undefined
    return this.client.getCompatibleKafkaVersions(...args).promise()
  }

  async listClusterOperations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClusterOperationInfoList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listClusterOperations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ClusterOperationInfoList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClusters(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClusterInfoList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ClusterInfoList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClustersV2(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClusterInfoList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listClustersV2(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ClusterInfoList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConfigurationRevisions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Revisions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listConfigurationRevisions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Revisions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Configurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Configurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listKafkaVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"KafkaVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listKafkaVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.KafkaVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNodes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NodeInfoList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNodes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NodeInfoList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listScramSecrets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecretArnList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listScramSecrets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SecretArnList ?? [];
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

  async rebootBroker(...args: any): Promise<any> {
  // undefined
    return this.client.rebootBroker(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateBrokerCount(...args: any): Promise<any> {
  // undefined
    return this.client.updateBrokerCount(...args).promise()
  }

  async updateBrokerType(...args: any): Promise<any> {
  // undefined
    return this.client.updateBrokerType(...args).promise()
  }

  async updateBrokerStorage(...args: any): Promise<any> {
  // undefined
    return this.client.updateBrokerStorage(...args).promise()
  }

  async updateConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfiguration(...args).promise()
  }

  async updateConnectivity(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnectivity(...args).promise()
  }

  async updateClusterConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateClusterConfiguration(...args).promise()
  }

  async updateClusterKafkaVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateClusterKafkaVersion(...args).promise()
  }

  async updateMonitoring(...args: any): Promise<any> {
  // undefined
    return this.client.updateMonitoring(...args).promise()
  }

  async updateSecurity(...args: any): Promise<any> {
  // undefined
    return this.client.updateSecurity(...args).promise()
  }
  
  static fromClient(client: AWSKafka): ClientType {
    return new Kafka(client) as any;
  }
  
  static client(options?: AWSKafka.Types.ClientConfiguration): ClientType {
    return new Kafka(new AWSKafka(options)) as any;
  }
}  
