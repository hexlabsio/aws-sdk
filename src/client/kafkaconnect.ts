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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKafkaConnect> = AWSKafkaConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KafkaConnect {
  private constructor(private readonly client: AWSKafkaConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kafkaconnect' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listConnectors","listCustomPlugins","listWorkerConfigurations"] as const;
  
  createConnector: (params: RawParamsFrom<'createConnector'>) => Promise<ReturnTypeFrom<'createConnector'>>  = async params => {
  // undefined
    return this.client.createConnector(params as any).promise();
  }

  createCustomPlugin: (params: RawParamsFrom<'createCustomPlugin'>) => Promise<ReturnTypeFrom<'createCustomPlugin'>>  = async params => {
  // undefined
    return this.client.createCustomPlugin(params as any).promise();
  }

  createWorkerConfiguration: (params: RawParamsFrom<'createWorkerConfiguration'>) => Promise<ReturnTypeFrom<'createWorkerConfiguration'>>  = async params => {
  // undefined
    return this.client.createWorkerConfiguration(params as any).promise();
  }

  deleteConnector: (params: RawParamsFrom<'deleteConnector'>) => Promise<ReturnTypeFrom<'deleteConnector'>>  = async params => {
  // undefined
    return this.client.deleteConnector(params as any).promise();
  }

  deleteCustomPlugin: (params: RawParamsFrom<'deleteCustomPlugin'>) => Promise<ReturnTypeFrom<'deleteCustomPlugin'>>  = async params => {
  // undefined
    return this.client.deleteCustomPlugin(params as any).promise();
  }

  describeConnector: (params: RawParamsFrom<'describeConnector'>) => Promise<ReturnTypeFrom<'describeConnector'>>  = async params => {
  // undefined
    return this.client.describeConnector(params as any).promise();
  }

  describeCustomPlugin: (params: RawParamsFrom<'describeCustomPlugin'>) => Promise<ReturnTypeFrom<'describeCustomPlugin'>>  = async params => {
  // undefined
    return this.client.describeCustomPlugin(params as any).promise();
  }

  describeWorkerConfiguration: (params: RawParamsFrom<'describeWorkerConfiguration'>) => Promise<ReturnTypeFrom<'describeWorkerConfiguration'>>  = async params => {
  // undefined
    return this.client.describeWorkerConfiguration(params as any).promise();
  }

  async listConnectors(params: { [K in keyof ParamsFrom<'listConnectors', { next?: string, limit?: number }>]: ParamsFrom<'listConnectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listConnectors'>]-?: ReturnTypeFrom<'listConnectors'>[K]}['connectors'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"connectors"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listConnectors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listConnectors' })).toString('base64') : undefined;
    const member = (Array.isArray(result.connectors ?? []) ? (result.connectors ?? []) : [result.connectors]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomPlugins(params: { [K in keyof ParamsFrom<'listCustomPlugins', { next?: string, limit?: number }>]: ParamsFrom<'listCustomPlugins', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomPlugins'>]-?: ReturnTypeFrom<'listCustomPlugins'>[K]}['customPlugins'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"customPlugins"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCustomPlugins({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCustomPlugins' })).toString('base64') : undefined;
    const member = (Array.isArray(result.customPlugins ?? []) ? (result.customPlugins ?? []) : [result.customPlugins]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkerConfigurations(params: { [K in keyof ParamsFrom<'listWorkerConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'listWorkerConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkerConfigurations'>]-?: ReturnTypeFrom<'listWorkerConfigurations'>[K]}['workerConfigurations'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workerConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkerConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listWorkerConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.workerConfigurations ?? []) ? (result.workerConfigurations ?? []) : [result.workerConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  updateConnector: (params: RawParamsFrom<'updateConnector'>) => Promise<ReturnTypeFrom<'updateConnector'>>  = async params => {
  // undefined
    return this.client.updateConnector(params as any).promise();
  }
  
  static fromClient(client: AWSKafkaConnect): KafkaConnect {
    return new KafkaConnect(client) as any;
  }
  
  static client(options?: AWSKafkaConnect.Types.ClientConfiguration): KafkaConnect {
    return new KafkaConnect(new AWSKafkaConnect(options)) as any;
  }
}  
