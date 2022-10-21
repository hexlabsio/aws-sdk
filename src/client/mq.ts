import { Request, MQ as AWSMQ } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMQ> = AWSMQ[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMQ> = AWSMQ[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMQ[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMQ, Extras> = AWSMQ[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMQ> = AWSMQ[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MQ {
  private constructor(private readonly client: AWSMQ) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mq' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = ["listBrokers"] as const;
  
  createBroker: (params: RawParamsFrom<'createBroker'>) => Promise<ReturnTypeFrom<'createBroker'>>  = async params => {
  // undefined
    return this.client.createBroker(params as any).promise();
  }

  createConfiguration: (params: RawParamsFrom<'createConfiguration'>) => Promise<ReturnTypeFrom<'createConfiguration'>>  = async params => {
  // undefined
    return this.client.createConfiguration(params as any).promise();
  }

  createTags: (params: RawParamsFrom<'createTags'>) => Promise<ReturnTypeFrom<'createTags'>>  = async params => {
  // undefined
    return this.client.createTags(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  deleteBroker: (params: RawParamsFrom<'deleteBroker'>) => Promise<ReturnTypeFrom<'deleteBroker'>>  = async params => {
  // undefined
    return this.client.deleteBroker(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  describeBroker: (params: RawParamsFrom<'describeBroker'>) => Promise<ReturnTypeFrom<'describeBroker'>>  = async params => {
  // undefined
    return this.client.describeBroker(params as any).promise();
  }

  describeBrokerEngineTypes: (params: RawParamsFrom<'describeBrokerEngineTypes'>) => Promise<ReturnTypeFrom<'describeBrokerEngineTypes'>>  = async params => {
  // undefined
    return this.client.describeBrokerEngineTypes(params as any).promise();
  }

  describeBrokerInstanceOptions: (params: RawParamsFrom<'describeBrokerInstanceOptions'>) => Promise<ReturnTypeFrom<'describeBrokerInstanceOptions'>>  = async params => {
  // undefined
    return this.client.describeBrokerInstanceOptions(params as any).promise();
  }

  describeConfiguration: (params: RawParamsFrom<'describeConfiguration'>) => Promise<ReturnTypeFrom<'describeConfiguration'>>  = async params => {
  // undefined
    return this.client.describeConfiguration(params as any).promise();
  }

  describeConfigurationRevision: (params: RawParamsFrom<'describeConfigurationRevision'>) => Promise<ReturnTypeFrom<'describeConfigurationRevision'>>  = async params => {
  // undefined
    return this.client.describeConfigurationRevision(params as any).promise();
  }

  describeUser: (params: RawParamsFrom<'describeUser'>) => Promise<ReturnTypeFrom<'describeUser'>>  = async params => {
  // undefined
    return this.client.describeUser(params as any).promise();
  }

  async listBrokers(params: { [K in keyof ParamsFrom<'listBrokers', { next?: string, limit?: number }>]: ParamsFrom<'listBrokers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBrokers'>]-?: ReturnTypeFrom<'listBrokers'>[K]}['BrokerSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BrokerSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBrokers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.BrokerSummaries ?? []) ? (result.BrokerSummaries ?? []) : [result.BrokerSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listConfigurationRevisions: (params: RawParamsFrom<'listConfigurationRevisions'>) => Promise<ReturnTypeFrom<'listConfigurationRevisions'>>  = async params => {
  // undefined
    return this.client.listConfigurationRevisions(params as any).promise();
  }

  listConfigurations: (params: RawParamsFrom<'listConfigurations'>) => Promise<ReturnTypeFrom<'listConfigurations'>>  = async params => {
  // undefined
    return this.client.listConfigurations(params as any).promise();
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // undefined
    return this.client.listTags(params as any).promise();
  }

  listUsers: (params: RawParamsFrom<'listUsers'>) => Promise<ReturnTypeFrom<'listUsers'>>  = async params => {
  // undefined
    return this.client.listUsers(params as any).promise();
  }

  rebootBroker: (params: RawParamsFrom<'rebootBroker'>) => Promise<ReturnTypeFrom<'rebootBroker'>>  = async params => {
  // undefined
    return this.client.rebootBroker(params as any).promise();
  }

  updateBroker: (params: RawParamsFrom<'updateBroker'>) => Promise<ReturnTypeFrom<'updateBroker'>>  = async params => {
  // undefined
    return this.client.updateBroker(params as any).promise();
  }

  updateConfiguration: (params: RawParamsFrom<'updateConfiguration'>) => Promise<ReturnTypeFrom<'updateConfiguration'>>  = async params => {
  // undefined
    return this.client.updateConfiguration(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }
  
  static fromClient(client: AWSMQ): MQ {
    return new MQ(client) as any;
  }
  
  static client(options?: AWSMQ.Types.ClientConfiguration): MQ {
    return new MQ(new AWSMQ(options)) as any;
  }
}  
