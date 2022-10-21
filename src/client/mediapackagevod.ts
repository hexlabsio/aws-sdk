import { Request, MediaPackageVod as AWSMediaPackageVod } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMediaPackageVod> = AWSMediaPackageVod[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMediaPackageVod> = AWSMediaPackageVod[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMediaPackageVod[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMediaPackageVod, Extras> = AWSMediaPackageVod[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMediaPackageVod> = AWSMediaPackageVod[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MediaPackageVod {
  private constructor(private readonly client: AWSMediaPackageVod) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediapackage-vod' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listAssets","listPackagingConfigurations","listPackagingGroups"] as const;
  
  configureLogs: (params: RawParamsFrom<'configureLogs'>) => Promise<ReturnTypeFrom<'configureLogs'>>  = async params => {
  // undefined
    return this.client.configureLogs(params as any).promise();
  }

  createAsset: (params: RawParamsFrom<'createAsset'>) => Promise<ReturnTypeFrom<'createAsset'>>  = async params => {
  // undefined
    return this.client.createAsset(params as any).promise();
  }

  createPackagingConfiguration: (params: RawParamsFrom<'createPackagingConfiguration'>) => Promise<ReturnTypeFrom<'createPackagingConfiguration'>>  = async params => {
  // undefined
    return this.client.createPackagingConfiguration(params as any).promise();
  }

  createPackagingGroup: (params: RawParamsFrom<'createPackagingGroup'>) => Promise<ReturnTypeFrom<'createPackagingGroup'>>  = async params => {
  // undefined
    return this.client.createPackagingGroup(params as any).promise();
  }

  deleteAsset: (params: RawParamsFrom<'deleteAsset'>) => Promise<ReturnTypeFrom<'deleteAsset'>>  = async params => {
  // undefined
    return this.client.deleteAsset(params as any).promise();
  }

  deletePackagingConfiguration: (params: RawParamsFrom<'deletePackagingConfiguration'>) => Promise<ReturnTypeFrom<'deletePackagingConfiguration'>>  = async params => {
  // undefined
    return this.client.deletePackagingConfiguration(params as any).promise();
  }

  deletePackagingGroup: (params: RawParamsFrom<'deletePackagingGroup'>) => Promise<ReturnTypeFrom<'deletePackagingGroup'>>  = async params => {
  // undefined
    return this.client.deletePackagingGroup(params as any).promise();
  }

  describeAsset: (params: RawParamsFrom<'describeAsset'>) => Promise<ReturnTypeFrom<'describeAsset'>>  = async params => {
  // undefined
    return this.client.describeAsset(params as any).promise();
  }

  describePackagingConfiguration: (params: RawParamsFrom<'describePackagingConfiguration'>) => Promise<ReturnTypeFrom<'describePackagingConfiguration'>>  = async params => {
  // undefined
    return this.client.describePackagingConfiguration(params as any).promise();
  }

  describePackagingGroup: (params: RawParamsFrom<'describePackagingGroup'>) => Promise<ReturnTypeFrom<'describePackagingGroup'>>  = async params => {
  // undefined
    return this.client.describePackagingGroup(params as any).promise();
  }

  async listAssets(params: { [K in keyof ParamsFrom<'listAssets', { next?: string, limit?: number }>]: ParamsFrom<'listAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssets'>]-?: ReturnTypeFrom<'listAssets'>[K]}['Assets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Assets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAssets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAssets' })).toString('base64');
    const member = (Array.isArray(result.Assets ?? []) ? (result.Assets ?? []) : [result.Assets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPackagingConfigurations(params: { [K in keyof ParamsFrom<'listPackagingConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'listPackagingConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPackagingConfigurations'>]-?: ReturnTypeFrom<'listPackagingConfigurations'>[K]}['PackagingConfigurations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PackagingConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPackagingConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPackagingConfigurations' })).toString('base64');
    const member = (Array.isArray(result.PackagingConfigurations ?? []) ? (result.PackagingConfigurations ?? []) : [result.PackagingConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPackagingGroups(params: { [K in keyof ParamsFrom<'listPackagingGroups', { next?: string, limit?: number }>]: ParamsFrom<'listPackagingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPackagingGroups'>]-?: ReturnTypeFrom<'listPackagingGroups'>[K]}['PackagingGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PackagingGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPackagingGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPackagingGroups' })).toString('base64');
    const member = (Array.isArray(result.PackagingGroups ?? []) ? (result.PackagingGroups ?? []) : [result.PackagingGroups]) as any;
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

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updatePackagingGroup: (params: RawParamsFrom<'updatePackagingGroup'>) => Promise<ReturnTypeFrom<'updatePackagingGroup'>>  = async params => {
  // undefined
    return this.client.updatePackagingGroup(params as any).promise();
  }
  
  static fromClient(client: AWSMediaPackageVod): MediaPackageVod {
    return new MediaPackageVod(client) as any;
  }
  
  static client(options?: AWSMediaPackageVod.Types.ClientConfiguration): MediaPackageVod {
    return new MediaPackageVod(new AWSMediaPackageVod(options)) as any;
  }
}  
