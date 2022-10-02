import { Request, SQS as AWSSQS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSQS> = AWSSQS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSQS> = AWSSQS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSQS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSQS, Extras> = AWSSQS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'sqs';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly ["listQueues"];
    
  addPermission: FunctionTypeFrom<'addPermission'>;

  changeMessageVisibility: FunctionTypeFrom<'changeMessageVisibility'>;

  changeMessageVisibilityBatch: FunctionTypeFrom<'changeMessageVisibilityBatch'>;

  createQueue: FunctionTypeFrom<'createQueue'>;

  deleteMessage: FunctionTypeFrom<'deleteMessage'>;

  deleteMessageBatch: FunctionTypeFrom<'deleteMessageBatch'>;

  deleteQueue: FunctionTypeFrom<'deleteQueue'>;

  getQueueAttributes: FunctionTypeFrom<'getQueueAttributes'>;

  getQueueUrl: FunctionTypeFrom<'getQueueUrl'>;

  listDeadLetterSourceQueues(params: { [K in keyof Omit<ParamsFrom<'listDeadLetterSourceQueues', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDeadLetterSourceQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeadLetterSourceQueues'>]-?: ReturnTypeFrom<'listDeadLetterSourceQueues'>[K]}['queueUrls'] }>
  ;

  listQueueTags: FunctionTypeFrom<'listQueueTags'>;

  listQueues(params: { [K in keyof Omit<ParamsFrom<'listQueues', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listQueues'>]-?: ReturnTypeFrom<'listQueues'>[K]}['QueueUrls'] }>
  listQueues(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listQueues'>]-?: ReturnTypeFrom<'listQueues'>[K]}['QueueUrls'] }>;

  purgeQueue: FunctionTypeFrom<'purgeQueue'>;

  receiveMessage: FunctionTypeFrom<'receiveMessage'>;

  removePermission: FunctionTypeFrom<'removePermission'>;

  sendMessage: FunctionTypeFrom<'sendMessage'>;

  sendMessageBatch: FunctionTypeFrom<'sendMessageBatch'>;

  setQueueAttributes: FunctionTypeFrom<'setQueueAttributes'>;

  tagQueue: FunctionTypeFrom<'tagQueue'>;

  untagQueue: FunctionTypeFrom<'untagQueue'>
}
 
export class SQS implements ClientType {
  private constructor(private readonly client: AWSSQS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sqs';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = ["listQueues"] as const;
  
  async addPermission(...args: any): Promise<any> {
  // undefined
    return this.client.addPermission(...args).promise()
  }

  async changeMessageVisibility(...args: any): Promise<any> {
  // undefined
    return this.client.changeMessageVisibility(...args).promise()
  }

  async changeMessageVisibilityBatch(...args: any): Promise<any> {
  // undefined
    return this.client.changeMessageVisibilityBatch(...args).promise()
  }

  async createQueue(...args: any): Promise<any> {
  // undefined
    return this.client.createQueue(...args).promise()
  }

  async deleteMessage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMessage(...args).promise()
  }

  async deleteMessageBatch(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMessageBatch(...args).promise()
  }

  async deleteQueue(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQueue(...args).promise()
  }

  async getQueueAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getQueueAttributes(...args).promise()
  }

  async getQueueUrl(...args: any): Promise<any> {
  // undefined
    return this.client.getQueueUrl(...args).promise()
  }

  async listDeadLetterSourceQueues(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"queueUrls"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDeadLetterSourceQueues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.queueUrls ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listQueueTags(...args: any): Promise<any> {
  // undefined
    return this.client.listQueueTags(...args).promise()
  }

  async listQueues(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QueueUrls"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.QueueUrls ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async purgeQueue(...args: any): Promise<any> {
  // undefined
    return this.client.purgeQueue(...args).promise()
  }

  async receiveMessage(...args: any): Promise<any> {
  // undefined
    return this.client.receiveMessage(...args).promise()
  }

  async removePermission(...args: any): Promise<any> {
  // undefined
    return this.client.removePermission(...args).promise()
  }

  async sendMessage(...args: any): Promise<any> {
  // undefined
    return this.client.sendMessage(...args).promise()
  }

  async sendMessageBatch(...args: any): Promise<any> {
  // undefined
    return this.client.sendMessageBatch(...args).promise()
  }

  async setQueueAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.setQueueAttributes(...args).promise()
  }

  async tagQueue(...args: any): Promise<any> {
  // undefined
    return this.client.tagQueue(...args).promise()
  }

  async untagQueue(...args: any): Promise<any> {
  // undefined
    return this.client.untagQueue(...args).promise()
  }
  
  static fromClient(client: AWSSQS): ClientType {
    return new SQS(client) as any;
  }
  
  static client(options?: AWSSQS.Types.ClientConfiguration): ClientType {
    return new SQS(new AWSSQS(options)) as any;
  }
}  
