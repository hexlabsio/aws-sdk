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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'catalog';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  cancelChangeSet: FunctionTypeFrom<'cancelChangeSet'>;

  describeChangeSet: FunctionTypeFrom<'describeChangeSet'>;

  describeEntity: FunctionTypeFrom<'describeEntity'>;

  listChangeSets: FunctionTypeFrom<'listChangeSets'>;

  listEntities: FunctionTypeFrom<'listEntities'>;

  startChangeSet: FunctionTypeFrom<'startChangeSet'>
}
 
export class MarketplaceCatalog implements ClientType {
  private constructor(private readonly client: AWSMarketplaceCatalog) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'catalog';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async cancelChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.cancelChangeSet(...args).promise()
  }

  async describeChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.describeChangeSet(...args).promise()
  }

  async describeEntity(...args: any): Promise<any> {
  // undefined
    return this.client.describeEntity(...args).promise()
  }

  async listChangeSets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChangeSets(...args).promise()
  }

  async listEntities(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntities(...args).promise()
  }

  async startChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.startChangeSet(...args).promise()
  }
  
  static fromClient(client: AWSMarketplaceCatalog): ClientType {
    return new MarketplaceCatalog(client) as any;
  }
  
  static client(options?: AWSMarketplaceCatalog.Types.ClientConfiguration): ClientType {
    return new MarketplaceCatalog(new AWSMarketplaceCatalog(options)) as any;
  }
}  
