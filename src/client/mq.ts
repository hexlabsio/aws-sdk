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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mq';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly ["listBrokers"];
    
  createBroker: FunctionTypeFrom<'createBroker'>;

  createConfiguration: FunctionTypeFrom<'createConfiguration'>;

  createTags: FunctionTypeFrom<'createTags'>;

  createUser: FunctionTypeFrom<'createUser'>;

  deleteBroker: FunctionTypeFrom<'deleteBroker'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  describeBroker: FunctionTypeFrom<'describeBroker'>;

  describeBrokerEngineTypes: FunctionTypeFrom<'describeBrokerEngineTypes'>;

  describeBrokerInstanceOptions: FunctionTypeFrom<'describeBrokerInstanceOptions'>;

  describeConfiguration: FunctionTypeFrom<'describeConfiguration'>;

  describeConfigurationRevision: FunctionTypeFrom<'describeConfigurationRevision'>;

  describeUser: FunctionTypeFrom<'describeUser'>;

  listBrokers(params: { [K in keyof Omit<ParamsFrom<'listBrokers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBrokers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBrokers'>]-?: ReturnTypeFrom<'listBrokers'>[K]}['BrokerSummaries'] }>
  listBrokers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBrokers'>]-?: ReturnTypeFrom<'listBrokers'>[K]}['BrokerSummaries'] }>;

  listConfigurationRevisions: FunctionTypeFrom<'listConfigurationRevisions'>;

  listConfigurations: FunctionTypeFrom<'listConfigurations'>;

  listTags: FunctionTypeFrom<'listTags'>;

  listUsers: FunctionTypeFrom<'listUsers'>;

  rebootBroker: FunctionTypeFrom<'rebootBroker'>;

  updateBroker: FunctionTypeFrom<'updateBroker'>;

  updateConfiguration: FunctionTypeFrom<'updateConfiguration'>;

  updateUser: FunctionTypeFrom<'updateUser'>
}
 
export class MQ implements ClientType {
  private constructor(private readonly client: AWSMQ) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mq';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = ["listBrokers"] as const;
  
  async createBroker(...args: any): Promise<any> {
  // undefined
    return this.client.createBroker(...args).promise()
  }

  async createConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createConfiguration(...args).promise()
  }

  async createTags(...args: any): Promise<any> {
  // undefined
    return this.client.createTags(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async deleteBroker(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBroker(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async describeBroker(...args: any): Promise<any> {
  // undefined
    return this.client.describeBroker(...args).promise()
  }

  async describeBrokerEngineTypes(...args: any): Promise<any> {
  // undefined
    return this.client.describeBrokerEngineTypes(...args).promise()
  }

  async describeBrokerInstanceOptions(...args: any): Promise<any> {
  // undefined
    return this.client.describeBrokerInstanceOptions(...args).promise()
  }

  async describeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeConfiguration(...args).promise()
  }

  async describeConfigurationRevision(...args: any): Promise<any> {
  // undefined
    return this.client.describeConfigurationRevision(...args).promise()
  }

  async describeUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeUser(...args).promise()
  }

  async listBrokers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BrokerSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBrokers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BrokerSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConfigurationRevisions(...args: any): Promise<any> {
  // undefined
    return this.client.listConfigurationRevisions(...args).promise()
  }

  async listConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listConfigurations(...args).promise()
  }

  async listTags(...args: any): Promise<any> {
  // undefined
    return this.client.listTags(...args).promise()
  }

  async listUsers(...args: any): Promise<any> {
  // undefined
    return this.client.listUsers(...args).promise()
  }

  async rebootBroker(...args: any): Promise<any> {
  // undefined
    return this.client.rebootBroker(...args).promise()
  }

  async updateBroker(...args: any): Promise<any> {
  // undefined
    return this.client.updateBroker(...args).promise()
  }

  async updateConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfiguration(...args).promise()
  }

  async updateUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateUser(...args).promise()
  }
  
  static fromClient(client: AWSMQ): ClientType {
    return new MQ(client) as any;
  }
  
  static client(options?: AWSMQ.Types.ClientConfiguration): ClientType {
    return new MQ(new AWSMQ(options)) as any;
  }
}  
