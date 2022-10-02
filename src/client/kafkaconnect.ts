import { Request, KafkaConnect as AWSKafkaConnect } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKafkaConnect> = AWSKafkaConnect[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKafkaConnect> = AWSKafkaConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKafkaConnect[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKafkaConnect, Extras> = AWSKafkaConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kafkaconnect';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listConnectors","listCustomPlugins","listWorkerConfigurations"];
    
  createConnector: FunctionTypeFrom<'createConnector'>;

  createCustomPlugin: FunctionTypeFrom<'createCustomPlugin'>;

  createWorkerConfiguration: FunctionTypeFrom<'createWorkerConfiguration'>;

  deleteConnector: FunctionTypeFrom<'deleteConnector'>;

  deleteCustomPlugin: FunctionTypeFrom<'deleteCustomPlugin'>;

  describeConnector: FunctionTypeFrom<'describeConnector'>;

  describeCustomPlugin: FunctionTypeFrom<'describeCustomPlugin'>;

  describeWorkerConfiguration: FunctionTypeFrom<'describeWorkerConfiguration'>;

  listConnectors(params: { [K in keyof Omit<ParamsFrom<'listConnectors', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listConnectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConnectors'>]-?: ReturnTypeFrom<'listConnectors'>[K]}['connectors'] }>
  listConnectors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConnectors'>]-?: ReturnTypeFrom<'listConnectors'>[K]}['connectors'] }>;

  listCustomPlugins(params: { [K in keyof Omit<ParamsFrom<'listCustomPlugins', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listCustomPlugins', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomPlugins'>]-?: ReturnTypeFrom<'listCustomPlugins'>[K]}['customPlugins'] }>
  listCustomPlugins(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomPlugins'>]-?: ReturnTypeFrom<'listCustomPlugins'>[K]}['customPlugins'] }>;

  listWorkerConfigurations(params: { [K in keyof Omit<ParamsFrom<'listWorkerConfigurations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorkerConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkerConfigurations'>]-?: ReturnTypeFrom<'listWorkerConfigurations'>[K]}['workerConfigurations'] }>
  listWorkerConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkerConfigurations'>]-?: ReturnTypeFrom<'listWorkerConfigurations'>[K]}['workerConfigurations'] }>;

  updateConnector: FunctionTypeFrom<'updateConnector'>
}
 
export class KafkaConnect implements ClientType {
  private constructor(private readonly client: AWSKafkaConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kafkaconnect';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listConnectors","listCustomPlugins","listWorkerConfigurations"] as const;
  
  async createConnector(...args: any): Promise<any> {
  // undefined
    return this.client.createConnector(...args).promise()
  }

  async createCustomPlugin(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomPlugin(...args).promise()
  }

  async createWorkerConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkerConfiguration(...args).promise()
  }

  async deleteConnector(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnector(...args).promise()
  }

  async deleteCustomPlugin(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomPlugin(...args).promise()
  }

  async describeConnector(...args: any): Promise<any> {
  // undefined
    return this.client.describeConnector(...args).promise()
  }

  async describeCustomPlugin(...args: any): Promise<any> {
  // undefined
    return this.client.describeCustomPlugin(...args).promise()
  }

  async describeWorkerConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkerConfiguration(...args).promise()
  }

  async listConnectors(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"connectors"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listConnectors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.connectors ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomPlugins(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"customPlugins"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCustomPlugins(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.customPlugins ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkerConfigurations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workerConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkerConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.workerConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async updateConnector(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnector(...args).promise()
  }
  
  static fromClient(client: AWSKafkaConnect): ClientType {
    return new KafkaConnect(client) as any;
  }
  
  static client(options?: AWSKafkaConnect.Types.ClientConfiguration): ClientType {
    return new KafkaConnect(new AWSKafkaConnect(options)) as any;
  }
}  
