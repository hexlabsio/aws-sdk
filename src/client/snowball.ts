import { Request, Snowball as AWSSnowball } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSnowball> = AWSSnowball[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSnowball> = AWSSnowball[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSnowball[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSnowball, Extras> = AWSSnowball[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'snowball';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["describeAddresses","listJobs"];
    
  cancelCluster: FunctionTypeFrom<'cancelCluster'>;

  cancelJob: FunctionTypeFrom<'cancelJob'>;

  createAddress: FunctionTypeFrom<'createAddress'>;

  createCluster: FunctionTypeFrom<'createCluster'>;

  createJob: FunctionTypeFrom<'createJob'>;

  createLongTermPricing: FunctionTypeFrom<'createLongTermPricing'>;

  createReturnShippingLabel: FunctionTypeFrom<'createReturnShippingLabel'>;

  describeAddress: FunctionTypeFrom<'describeAddress'>;

  describeAddresses(params: { [K in keyof Omit<ParamsFrom<'describeAddresses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAddresses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAddresses'>]-?: ReturnTypeFrom<'describeAddresses'>[K]}['Addresses'] }>
  describeAddresses(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAddresses'>]-?: ReturnTypeFrom<'describeAddresses'>[K]}['Addresses'] }>;

  describeCluster: FunctionTypeFrom<'describeCluster'>;

  describeJob: FunctionTypeFrom<'describeJob'>;

  describeReturnShippingLabel: FunctionTypeFrom<'describeReturnShippingLabel'>;

  getJobManifest: FunctionTypeFrom<'getJobManifest'>;

  getJobUnlockCode: FunctionTypeFrom<'getJobUnlockCode'>;

  getSnowballUsage: FunctionTypeFrom<'getSnowballUsage'>;

  getSoftwareUpdates: FunctionTypeFrom<'getSoftwareUpdates'>;

  listClusterJobs: FunctionTypeFrom<'listClusterJobs'>;

  listClusters: FunctionTypeFrom<'listClusters'>;

  listCompatibleImages: FunctionTypeFrom<'listCompatibleImages'>;

  listJobs(params: { [K in keyof Omit<ParamsFrom<'listJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['JobListEntries'] }>
  listJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['JobListEntries'] }>;

  listLongTermPricing: FunctionTypeFrom<'listLongTermPricing'>;

  updateCluster: FunctionTypeFrom<'updateCluster'>;

  updateJob: FunctionTypeFrom<'updateJob'>;

  updateJobShipmentState: FunctionTypeFrom<'updateJobShipmentState'>;

  updateLongTermPricing: FunctionTypeFrom<'updateLongTermPricing'>
}
 
export class Snowball implements ClientType {
  private constructor(private readonly client: AWSSnowball) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'snowball';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["describeAddresses","listJobs"] as const;
  
  async cancelCluster(...args: any): Promise<any> {
  // undefined
    return this.client.cancelCluster(...args).promise()
  }

  async cancelJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJob(...args).promise()
  }

  async createAddress(...args: any): Promise<any> {
  // undefined
    return this.client.createAddress(...args).promise()
  }

  async createCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCluster(...args).promise()
  }

  async createJob(...args: any): Promise<any> {
  // undefined
    return this.client.createJob(...args).promise()
  }

  async createLongTermPricing(...args: any): Promise<any> {
  // undefined
    return this.client.createLongTermPricing(...args).promise()
  }

  async createReturnShippingLabel(...args: any): Promise<any> {
  // undefined
    return this.client.createReturnShippingLabel(...args).promise()
  }

  async describeAddress(...args: any): Promise<any> {
  // undefined
    return this.client.describeAddress(...args).promise()
  }

  async describeAddresses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Addresses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAddresses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Addresses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCluster(...args: any): Promise<any> {
  // undefined
    return this.client.describeCluster(...args).promise()
  }

  async describeJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeJob(...args).promise()
  }

  async describeReturnShippingLabel(...args: any): Promise<any> {
  // undefined
    return this.client.describeReturnShippingLabel(...args).promise()
  }

  async getJobManifest(...args: any): Promise<any> {
  // undefined
    return this.client.getJobManifest(...args).promise()
  }

  async getJobUnlockCode(...args: any): Promise<any> {
  // undefined
    return this.client.getJobUnlockCode(...args).promise()
  }

  async getSnowballUsage(...args: any): Promise<any> {
  // undefined
    return this.client.getSnowballUsage(...args).promise()
  }

  async getSoftwareUpdates(...args: any): Promise<any> {
  // undefined
    return this.client.getSoftwareUpdates(...args).promise()
  }

  async listClusterJobs(...args: any): Promise<any> {
  // undefined
    return this.client.listClusterJobs(...args).promise()
  }

  async listClusters(...args: any): Promise<any> {
  // undefined
    return this.client.listClusters(...args).promise()
  }

  async listCompatibleImages(...args: any): Promise<any> {
  // undefined
    return this.client.listCompatibleImages(...args).promise()
  }

  async listJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobListEntries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.JobListEntries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLongTermPricing(...args: any): Promise<any> {
  // undefined
    return this.client.listLongTermPricing(...args).promise()
  }

  async updateCluster(...args: any): Promise<any> {
  // undefined
    return this.client.updateCluster(...args).promise()
  }

  async updateJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateJob(...args).promise()
  }

  async updateJobShipmentState(...args: any): Promise<any> {
  // undefined
    return this.client.updateJobShipmentState(...args).promise()
  }

  async updateLongTermPricing(...args: any): Promise<any> {
  // undefined
    return this.client.updateLongTermPricing(...args).promise()
  }
  
  static fromClient(client: AWSSnowball): ClientType {
    return new Snowball(client) as any;
  }
  
  static client(options?: AWSSnowball.Types.ClientConfiguration): ClientType {
    return new Snowball(new AWSSnowball(options)) as any;
  }
}  
