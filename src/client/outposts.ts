import { Request, Outposts as AWSOutposts } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSOutposts> = AWSOutposts[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSOutposts> = AWSOutposts[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSOutposts[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSOutposts, Extras> = AWSOutposts[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSOutposts> = AWSOutposts[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Outposts {
  private constructor(private readonly client: AWSOutposts) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'outposts' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listCatalogItems","listOrders","listOutposts","listSites"] as const;
  
  cancelOrder: (params: RawParamsFrom<'cancelOrder'>) => Promise<ReturnTypeFrom<'cancelOrder'>>  = async params => {
  // undefined
    return this.client.cancelOrder(params as any).promise();
  }

  createOrder: (params: RawParamsFrom<'createOrder'>) => Promise<ReturnTypeFrom<'createOrder'>>  = async params => {
  // undefined
    return this.client.createOrder(params as any).promise();
  }

  createOutpost: (params: RawParamsFrom<'createOutpost'>) => Promise<ReturnTypeFrom<'createOutpost'>>  = async params => {
  // undefined
    return this.client.createOutpost(params as any).promise();
  }

  createSite: (params: RawParamsFrom<'createSite'>) => Promise<ReturnTypeFrom<'createSite'>>  = async params => {
  // undefined
    return this.client.createSite(params as any).promise();
  }

  deleteOutpost: (params: RawParamsFrom<'deleteOutpost'>) => Promise<ReturnTypeFrom<'deleteOutpost'>>  = async params => {
  // undefined
    return this.client.deleteOutpost(params as any).promise();
  }

  deleteSite: (params: RawParamsFrom<'deleteSite'>) => Promise<ReturnTypeFrom<'deleteSite'>>  = async params => {
  // undefined
    return this.client.deleteSite(params as any).promise();
  }

  getCatalogItem: (params: RawParamsFrom<'getCatalogItem'>) => Promise<ReturnTypeFrom<'getCatalogItem'>>  = async params => {
  // undefined
    return this.client.getCatalogItem(params as any).promise();
  }

  getConnection: (params: RawParamsFrom<'getConnection'>) => Promise<ReturnTypeFrom<'getConnection'>>  = async params => {
  // undefined
    return this.client.getConnection(params as any).promise();
  }

  getOrder: (params: RawParamsFrom<'getOrder'>) => Promise<ReturnTypeFrom<'getOrder'>>  = async params => {
  // undefined
    return this.client.getOrder(params as any).promise();
  }

  getOutpost: (params: RawParamsFrom<'getOutpost'>) => Promise<ReturnTypeFrom<'getOutpost'>>  = async params => {
  // undefined
    return this.client.getOutpost(params as any).promise();
  }

  getOutpostInstanceTypes: (params: RawParamsFrom<'getOutpostInstanceTypes'>) => Promise<ReturnTypeFrom<'getOutpostInstanceTypes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getOutpostInstanceTypes(params as any).promise();
  }

  getSite: (params: RawParamsFrom<'getSite'>) => Promise<ReturnTypeFrom<'getSite'>>  = async params => {
  // undefined
    return this.client.getSite(params as any).promise();
  }

  getSiteAddress: (params: RawParamsFrom<'getSiteAddress'>) => Promise<ReturnTypeFrom<'getSiteAddress'>>  = async params => {
  // undefined
    return this.client.getSiteAddress(params as any).promise();
  }

  listAssets: (params: RawParamsFrom<'listAssets'>) => Promise<ReturnTypeFrom<'listAssets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAssets(params as any).promise();
  }

  listCatalogItems: (params: RawParamsFrom<'listCatalogItems'>) => Promise<ReturnTypeFrom<'listCatalogItems'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCatalogItems(params as any).promise();
  }

  listOrders: (params: RawParamsFrom<'listOrders'>) => Promise<ReturnTypeFrom<'listOrders'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOrders(params as any).promise();
  }

  listOutposts: (params: RawParamsFrom<'listOutposts'>) => Promise<ReturnTypeFrom<'listOutposts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOutposts(params as any).promise();
  }

  listSites: (params: RawParamsFrom<'listSites'>) => Promise<ReturnTypeFrom<'listSites'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSites(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startConnection: (params: RawParamsFrom<'startConnection'>) => Promise<ReturnTypeFrom<'startConnection'>>  = async params => {
  // undefined
    return this.client.startConnection(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateOutpost: (params: RawParamsFrom<'updateOutpost'>) => Promise<ReturnTypeFrom<'updateOutpost'>>  = async params => {
  // undefined
    return this.client.updateOutpost(params as any).promise();
  }

  updateSite: (params: RawParamsFrom<'updateSite'>) => Promise<ReturnTypeFrom<'updateSite'>>  = async params => {
  // undefined
    return this.client.updateSite(params as any).promise();
  }

  updateSiteAddress: (params: RawParamsFrom<'updateSiteAddress'>) => Promise<ReturnTypeFrom<'updateSiteAddress'>>  = async params => {
  // undefined
    return this.client.updateSiteAddress(params as any).promise();
  }

  updateSiteRackPhysicalProperties: (params: RawParamsFrom<'updateSiteRackPhysicalProperties'>) => Promise<ReturnTypeFrom<'updateSiteRackPhysicalProperties'>>  = async params => {
  // undefined
    return this.client.updateSiteRackPhysicalProperties(params as any).promise();
  }
  
  static fromClient(client: AWSOutposts): Outposts {
    return new Outposts(client) as any;
  }
  
  static client(options?: AWSOutposts.Types.ClientConfiguration): Outposts {
    return new Outposts(new AWSOutposts(options)) as any;
  }
}  
