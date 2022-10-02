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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mediapackage-vod';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listAssets","listPackagingConfigurations","listPackagingGroups"];
    
  configureLogs: FunctionTypeFrom<'configureLogs'>;

  createAsset: FunctionTypeFrom<'createAsset'>;

  createPackagingConfiguration: FunctionTypeFrom<'createPackagingConfiguration'>;

  createPackagingGroup: FunctionTypeFrom<'createPackagingGroup'>;

  deleteAsset: FunctionTypeFrom<'deleteAsset'>;

  deletePackagingConfiguration: FunctionTypeFrom<'deletePackagingConfiguration'>;

  deletePackagingGroup: FunctionTypeFrom<'deletePackagingGroup'>;

  describeAsset: FunctionTypeFrom<'describeAsset'>;

  describePackagingConfiguration: FunctionTypeFrom<'describePackagingConfiguration'>;

  describePackagingGroup: FunctionTypeFrom<'describePackagingGroup'>;

  listAssets(params: { [K in keyof Omit<ParamsFrom<'listAssets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssets'>]-?: ReturnTypeFrom<'listAssets'>[K]}['Assets'] }>
  listAssets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssets'>]-?: ReturnTypeFrom<'listAssets'>[K]}['Assets'] }>;

  listPackagingConfigurations(params: { [K in keyof Omit<ParamsFrom<'listPackagingConfigurations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPackagingConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPackagingConfigurations'>]-?: ReturnTypeFrom<'listPackagingConfigurations'>[K]}['PackagingConfigurations'] }>
  listPackagingConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPackagingConfigurations'>]-?: ReturnTypeFrom<'listPackagingConfigurations'>[K]}['PackagingConfigurations'] }>;

  listPackagingGroups(params: { [K in keyof Omit<ParamsFrom<'listPackagingGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPackagingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPackagingGroups'>]-?: ReturnTypeFrom<'listPackagingGroups'>[K]}['PackagingGroups'] }>
  listPackagingGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPackagingGroups'>]-?: ReturnTypeFrom<'listPackagingGroups'>[K]}['PackagingGroups'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updatePackagingGroup: FunctionTypeFrom<'updatePackagingGroup'>
}
 
export class MediaPackageVod implements ClientType {
  private constructor(private readonly client: AWSMediaPackageVod) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediapackage-vod';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listAssets","listPackagingConfigurations","listPackagingGroups"] as const;
  
  async configureLogs(...args: any): Promise<any> {
  // undefined
    return this.client.configureLogs(...args).promise()
  }

  async createAsset(...args: any): Promise<any> {
  // undefined
    return this.client.createAsset(...args).promise()
  }

  async createPackagingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createPackagingConfiguration(...args).promise()
  }

  async createPackagingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createPackagingGroup(...args).promise()
  }

  async deleteAsset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAsset(...args).promise()
  }

  async deletePackagingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deletePackagingConfiguration(...args).promise()
  }

  async deletePackagingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deletePackagingGroup(...args).promise()
  }

  async describeAsset(...args: any): Promise<any> {
  // undefined
    return this.client.describeAsset(...args).promise()
  }

  async describePackagingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describePackagingConfiguration(...args).promise()
  }

  async describePackagingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describePackagingGroup(...args).promise()
  }

  async listAssets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Assets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAssets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Assets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPackagingConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PackagingConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPackagingConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PackagingConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPackagingGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PackagingGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPackagingGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PackagingGroups ?? [];
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

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updatePackagingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updatePackagingGroup(...args).promise()
  }
  
  static fromClient(client: AWSMediaPackageVod): ClientType {
    return new MediaPackageVod(client) as any;
  }
  
  static client(options?: AWSMediaPackageVod.Types.ClientConfiguration): ClientType {
    return new MediaPackageVod(new AWSMediaPackageVod(options)) as any;
  }
}  
