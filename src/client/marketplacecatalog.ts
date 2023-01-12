import { Request, MarketplaceCatalog as AWSMarketplaceCatalog } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMarketplaceCatalog> = AWSMarketplaceCatalog[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMarketplaceCatalog> = AWSMarketplaceCatalog[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMarketplaceCatalog[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMarketplaceCatalog, Extras> = AWSMarketplaceCatalog[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMarketplaceCatalog> = AWSMarketplaceCatalog[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MarketplaceCatalog {
  private constructor(private readonly client: AWSMarketplaceCatalog) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'catalog' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  cancelChangeSet: (params: RawParamsFrom<'cancelChangeSet'>) => Promise<ReturnTypeFrom<'cancelChangeSet'>>  = async params => {
  // undefined
    return this.client.cancelChangeSet(params as any).promise();
  }

  describeChangeSet: (params: RawParamsFrom<'describeChangeSet'>) => Promise<ReturnTypeFrom<'describeChangeSet'>>  = async params => {
  // undefined
    return this.client.describeChangeSet(params as any).promise();
  }

  describeEntity: (params: RawParamsFrom<'describeEntity'>) => Promise<ReturnTypeFrom<'describeEntity'>>  = async params => {
  // undefined
    return this.client.describeEntity(params as any).promise();
  }

  listChangeSets: (params: RawParamsFrom<'listChangeSets'>) => Promise<ReturnTypeFrom<'listChangeSets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChangeSets(params as any).promise();
  }

  listEntities: (params: RawParamsFrom<'listEntities'>) => Promise<ReturnTypeFrom<'listEntities'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntities(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startChangeSet: (params: RawParamsFrom<'startChangeSet'>) => Promise<ReturnTypeFrom<'startChangeSet'>>  = async params => {
  // undefined
    return this.client.startChangeSet(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSMarketplaceCatalog): MarketplaceCatalog {
    return new MarketplaceCatalog(client) as any;
  }
  
  static client(options?: AWSMarketplaceCatalog.Types.ClientConfiguration): MarketplaceCatalog {
    return new MarketplaceCatalog(new AWSMarketplaceCatalog(options)) as any;
  }
}  
