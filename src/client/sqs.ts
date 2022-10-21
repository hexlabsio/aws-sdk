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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSQS> = AWSSQS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SQS {
  private constructor(private readonly client: AWSSQS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sqs' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = ["listQueues"] as const;
  
  addPermission: (params: RawParamsFrom<'addPermission'>) => Promise<ReturnTypeFrom<'addPermission'>>  = async params => {
  // undefined
    return this.client.addPermission(params as any).promise();
  }

  changeMessageVisibility: (params: RawParamsFrom<'changeMessageVisibility'>) => Promise<ReturnTypeFrom<'changeMessageVisibility'>>  = async params => {
  // undefined
    return this.client.changeMessageVisibility(params as any).promise();
  }

  changeMessageVisibilityBatch: (params: RawParamsFrom<'changeMessageVisibilityBatch'>) => Promise<ReturnTypeFrom<'changeMessageVisibilityBatch'>>  = async params => {
  // undefined
    return this.client.changeMessageVisibilityBatch(params as any).promise();
  }

  createQueue: (params: RawParamsFrom<'createQueue'>) => Promise<ReturnTypeFrom<'createQueue'>>  = async params => {
  // undefined
    return this.client.createQueue(params as any).promise();
  }

  deleteMessage: (params: RawParamsFrom<'deleteMessage'>) => Promise<ReturnTypeFrom<'deleteMessage'>>  = async params => {
  // undefined
    return this.client.deleteMessage(params as any).promise();
  }

  deleteMessageBatch: (params: RawParamsFrom<'deleteMessageBatch'>) => Promise<ReturnTypeFrom<'deleteMessageBatch'>>  = async params => {
  // undefined
    return this.client.deleteMessageBatch(params as any).promise();
  }

  deleteQueue: (params: RawParamsFrom<'deleteQueue'>) => Promise<ReturnTypeFrom<'deleteQueue'>>  = async params => {
  // undefined
    return this.client.deleteQueue(params as any).promise();
  }

  getQueueAttributes: (params: RawParamsFrom<'getQueueAttributes'>) => Promise<ReturnTypeFrom<'getQueueAttributes'>>  = async params => {
  // undefined
    return this.client.getQueueAttributes(params as any).promise();
  }

  getQueueUrl: (params: RawParamsFrom<'getQueueUrl'>) => Promise<ReturnTypeFrom<'getQueueUrl'>>  = async params => {
  // undefined
    return this.client.getQueueUrl(params as any).promise();
  }

  async listDeadLetterSourceQueues(params: { [K in keyof ParamsFrom<'listDeadLetterSourceQueues', { next?: string, limit?: number }>]: ParamsFrom<'listDeadLetterSourceQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeadLetterSourceQueues'>]-?: ReturnTypeFrom<'listDeadLetterSourceQueues'>[K]}['queueUrls'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"queueUrls"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDeadLetterSourceQueues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDeadLetterSourceQueues' })).toString('base64');
    const member = (Array.isArray(result.queueUrls ?? []) ? (result.queueUrls ?? []) : [result.queueUrls]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listQueueTags: (params: RawParamsFrom<'listQueueTags'>) => Promise<ReturnTypeFrom<'listQueueTags'>>  = async params => {
  // undefined
    return this.client.listQueueTags(params as any).promise();
  }

  async listQueues(params: { [K in keyof ParamsFrom<'listQueues', { next?: string, limit?: number }>]: ParamsFrom<'listQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listQueues'>]-?: ReturnTypeFrom<'listQueues'>[K]}['QueueUrls'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QueueUrls"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listQueues' })).toString('base64');
    const member = (Array.isArray(result.QueueUrls ?? []) ? (result.QueueUrls ?? []) : [result.QueueUrls]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  purgeQueue: (params: RawParamsFrom<'purgeQueue'>) => Promise<ReturnTypeFrom<'purgeQueue'>>  = async params => {
  // undefined
    return this.client.purgeQueue(params as any).promise();
  }

  receiveMessage: (params: RawParamsFrom<'receiveMessage'>) => Promise<ReturnTypeFrom<'receiveMessage'>>  = async params => {
  // undefined
    return this.client.receiveMessage(params as any).promise();
  }

  removePermission: (params: RawParamsFrom<'removePermission'>) => Promise<ReturnTypeFrom<'removePermission'>>  = async params => {
  // undefined
    return this.client.removePermission(params as any).promise();
  }

  sendMessage: (params: RawParamsFrom<'sendMessage'>) => Promise<ReturnTypeFrom<'sendMessage'>>  = async params => {
  // undefined
    return this.client.sendMessage(params as any).promise();
  }

  sendMessageBatch: (params: RawParamsFrom<'sendMessageBatch'>) => Promise<ReturnTypeFrom<'sendMessageBatch'>>  = async params => {
  // undefined
    return this.client.sendMessageBatch(params as any).promise();
  }

  setQueueAttributes: (params: RawParamsFrom<'setQueueAttributes'>) => Promise<ReturnTypeFrom<'setQueueAttributes'>>  = async params => {
  // undefined
    return this.client.setQueueAttributes(params as any).promise();
  }

  tagQueue: (params: RawParamsFrom<'tagQueue'>) => Promise<ReturnTypeFrom<'tagQueue'>>  = async params => {
  // undefined
    return this.client.tagQueue(params as any).promise();
  }

  untagQueue: (params: RawParamsFrom<'untagQueue'>) => Promise<ReturnTypeFrom<'untagQueue'>>  = async params => {
  // undefined
    return this.client.untagQueue(params as any).promise();
  }
  
  static fromClient(client: AWSSQS): SQS {
    return new SQS(client) as any;
  }
  
  static client(options?: AWSSQS.Types.ClientConfiguration): SQS {
    return new SQS(new AWSSQS(options)) as any;
  }
}  
