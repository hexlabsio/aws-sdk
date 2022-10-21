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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSnowball> = AWSSnowball[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Snowball {
  private constructor(private readonly client: AWSSnowball) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'snowball' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["describeAddresses","listJobs"] as const;
  
  cancelCluster: (params: RawParamsFrom<'cancelCluster'>) => Promise<ReturnTypeFrom<'cancelCluster'>>  = async params => {
  // undefined
    return this.client.cancelCluster(params as any).promise();
  }

  cancelJob: (params: RawParamsFrom<'cancelJob'>) => Promise<ReturnTypeFrom<'cancelJob'>>  = async params => {
  // undefined
    return this.client.cancelJob(params as any).promise();
  }

  createAddress: (params: RawParamsFrom<'createAddress'>) => Promise<ReturnTypeFrom<'createAddress'>>  = async params => {
  // undefined
    return this.client.createAddress(params as any).promise();
  }

  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createJob: (params: RawParamsFrom<'createJob'>) => Promise<ReturnTypeFrom<'createJob'>>  = async params => {
  // undefined
    return this.client.createJob(params as any).promise();
  }

  createLongTermPricing: (params: RawParamsFrom<'createLongTermPricing'>) => Promise<ReturnTypeFrom<'createLongTermPricing'>>  = async params => {
  // undefined
    return this.client.createLongTermPricing(params as any).promise();
  }

  createReturnShippingLabel: (params: RawParamsFrom<'createReturnShippingLabel'>) => Promise<ReturnTypeFrom<'createReturnShippingLabel'>>  = async params => {
  // undefined
    return this.client.createReturnShippingLabel(params as any).promise();
  }

  describeAddress: (params: RawParamsFrom<'describeAddress'>) => Promise<ReturnTypeFrom<'describeAddress'>>  = async params => {
  // undefined
    return this.client.describeAddress(params as any).promise();
  }

  async describeAddresses(params: { [K in keyof ParamsFrom<'describeAddresses', { next?: string, limit?: number }>]: ParamsFrom<'describeAddresses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAddresses'>]-?: ReturnTypeFrom<'describeAddresses'>[K]}['Addresses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Addresses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAddresses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAddresses' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Addresses ?? []) ? (result.Addresses ?? []) : [result.Addresses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeCluster: (params: RawParamsFrom<'describeCluster'>) => Promise<ReturnTypeFrom<'describeCluster'>>  = async params => {
  // undefined
    return this.client.describeCluster(params as any).promise();
  }

  describeJob: (params: RawParamsFrom<'describeJob'>) => Promise<ReturnTypeFrom<'describeJob'>>  = async params => {
  // undefined
    return this.client.describeJob(params as any).promise();
  }

  describeReturnShippingLabel: (params: RawParamsFrom<'describeReturnShippingLabel'>) => Promise<ReturnTypeFrom<'describeReturnShippingLabel'>>  = async params => {
  // undefined
    return this.client.describeReturnShippingLabel(params as any).promise();
  }

  getJobManifest: (params: RawParamsFrom<'getJobManifest'>) => Promise<ReturnTypeFrom<'getJobManifest'>>  = async params => {
  // undefined
    return this.client.getJobManifest(params as any).promise();
  }

  getJobUnlockCode: (params: RawParamsFrom<'getJobUnlockCode'>) => Promise<ReturnTypeFrom<'getJobUnlockCode'>>  = async params => {
  // undefined
    return this.client.getJobUnlockCode(params as any).promise();
  }

  getSnowballUsage: (params: RawParamsFrom<'getSnowballUsage'>) => Promise<ReturnTypeFrom<'getSnowballUsage'>>  = async params => {
  // undefined
    return this.client.getSnowballUsage(params as any).promise();
  }

  getSoftwareUpdates: (params: RawParamsFrom<'getSoftwareUpdates'>) => Promise<ReturnTypeFrom<'getSoftwareUpdates'>>  = async params => {
  // undefined
    return this.client.getSoftwareUpdates(params as any).promise();
  }

  listClusterJobs: (params: RawParamsFrom<'listClusterJobs'>) => Promise<ReturnTypeFrom<'listClusterJobs'>>  = async params => {
  // undefined
    return this.client.listClusterJobs(params as any).promise();
  }

  listClusters: (params: RawParamsFrom<'listClusters'>) => Promise<ReturnTypeFrom<'listClusters'>>  = async params => {
  // undefined
    return this.client.listClusters(params as any).promise();
  }

  listCompatibleImages: (params: RawParamsFrom<'listCompatibleImages'>) => Promise<ReturnTypeFrom<'listCompatibleImages'>>  = async params => {
  // undefined
    return this.client.listCompatibleImages(params as any).promise();
  }

  async listJobs(params: { [K in keyof ParamsFrom<'listJobs', { next?: string, limit?: number }>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['JobListEntries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobListEntries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.JobListEntries ?? []) ? (result.JobListEntries ?? []) : [result.JobListEntries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listLongTermPricing: (params: RawParamsFrom<'listLongTermPricing'>) => Promise<ReturnTypeFrom<'listLongTermPricing'>>  = async params => {
  // undefined
    return this.client.listLongTermPricing(params as any).promise();
  }

  updateCluster: (params: RawParamsFrom<'updateCluster'>) => Promise<ReturnTypeFrom<'updateCluster'>>  = async params => {
  // undefined
    return this.client.updateCluster(params as any).promise();
  }

  updateJob: (params: RawParamsFrom<'updateJob'>) => Promise<ReturnTypeFrom<'updateJob'>>  = async params => {
  // undefined
    return this.client.updateJob(params as any).promise();
  }

  updateJobShipmentState: (params: RawParamsFrom<'updateJobShipmentState'>) => Promise<ReturnTypeFrom<'updateJobShipmentState'>>  = async params => {
  // undefined
    return this.client.updateJobShipmentState(params as any).promise();
  }

  updateLongTermPricing: (params: RawParamsFrom<'updateLongTermPricing'>) => Promise<ReturnTypeFrom<'updateLongTermPricing'>>  = async params => {
  // undefined
    return this.client.updateLongTermPricing(params as any).promise();
  }
  
  static fromClient(client: AWSSnowball): Snowball {
    return new Snowball(client) as any;
  }
  
  static client(options?: AWSSnowball.Types.ClientConfiguration): Snowball {
    return new Snowball(new AWSSnowball(options)) as any;
  }
}  
