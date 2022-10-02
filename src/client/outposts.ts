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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'outposts';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listCatalogItems","listOrders","listOutposts","listSites"];
    
  cancelOrder: FunctionTypeFrom<'cancelOrder'>;

  createOrder: FunctionTypeFrom<'createOrder'>;

  createOutpost: FunctionTypeFrom<'createOutpost'>;

  createSite: FunctionTypeFrom<'createSite'>;

  deleteOutpost: FunctionTypeFrom<'deleteOutpost'>;

  deleteSite: FunctionTypeFrom<'deleteSite'>;

  getCatalogItem: FunctionTypeFrom<'getCatalogItem'>;

  getConnection: FunctionTypeFrom<'getConnection'>;

  getOrder: FunctionTypeFrom<'getOrder'>;

  getOutpost: FunctionTypeFrom<'getOutpost'>;

  getOutpostInstanceTypes: FunctionTypeFrom<'getOutpostInstanceTypes'>;

  getSite: FunctionTypeFrom<'getSite'>;

  getSiteAddress: FunctionTypeFrom<'getSiteAddress'>;

  listAssets: FunctionTypeFrom<'listAssets'>;

  listCatalogItems: FunctionTypeFrom<'listCatalogItems'>;

  listOrders: FunctionTypeFrom<'listOrders'>;

  listOutposts: FunctionTypeFrom<'listOutposts'>;

  listSites: FunctionTypeFrom<'listSites'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startConnection: FunctionTypeFrom<'startConnection'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateOutpost: FunctionTypeFrom<'updateOutpost'>;

  updateSite: FunctionTypeFrom<'updateSite'>;

  updateSiteAddress: FunctionTypeFrom<'updateSiteAddress'>;

  updateSiteRackPhysicalProperties: FunctionTypeFrom<'updateSiteRackPhysicalProperties'>
}
 
export class Outposts implements ClientType {
  private constructor(private readonly client: AWSOutposts) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'outposts';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listCatalogItems","listOrders","listOutposts","listSites"] as const;
  
  async cancelOrder(...args: any): Promise<any> {
  // undefined
    return this.client.cancelOrder(...args).promise()
  }

  async createOrder(...args: any): Promise<any> {
  // undefined
    return this.client.createOrder(...args).promise()
  }

  async createOutpost(...args: any): Promise<any> {
  // undefined
    return this.client.createOutpost(...args).promise()
  }

  async createSite(...args: any): Promise<any> {
  // undefined
    return this.client.createSite(...args).promise()
  }

  async deleteOutpost(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOutpost(...args).promise()
  }

  async deleteSite(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSite(...args).promise()
  }

  async getCatalogItem(...args: any): Promise<any> {
  // undefined
    return this.client.getCatalogItem(...args).promise()
  }

  async getConnection(...args: any): Promise<any> {
  // undefined
    return this.client.getConnection(...args).promise()
  }

  async getOrder(...args: any): Promise<any> {
  // undefined
    return this.client.getOrder(...args).promise()
  }

  async getOutpost(...args: any): Promise<any> {
  // undefined
    return this.client.getOutpost(...args).promise()
  }

  async getOutpostInstanceTypes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getOutpostInstanceTypes(...args).promise()
  }

  async getSite(...args: any): Promise<any> {
  // undefined
    return this.client.getSite(...args).promise()
  }

  async getSiteAddress(...args: any): Promise<any> {
  // undefined
    return this.client.getSiteAddress(...args).promise()
  }

  async listAssets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAssets(...args).promise()
  }

  async listCatalogItems(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCatalogItems(...args).promise()
  }

  async listOrders(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOrders(...args).promise()
  }

  async listOutposts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOutposts(...args).promise()
  }

  async listSites(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSites(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async startConnection(...args: any): Promise<any> {
  // undefined
    return this.client.startConnection(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateOutpost(...args: any): Promise<any> {
  // undefined
    return this.client.updateOutpost(...args).promise()
  }

  async updateSite(...args: any): Promise<any> {
  // undefined
    return this.client.updateSite(...args).promise()
  }

  async updateSiteAddress(...args: any): Promise<any> {
  // undefined
    return this.client.updateSiteAddress(...args).promise()
  }

  async updateSiteRackPhysicalProperties(...args: any): Promise<any> {
  // undefined
    return this.client.updateSiteRackPhysicalProperties(...args).promise()
  }
  
  static fromClient(client: AWSOutposts): ClientType {
    return new Outposts(client) as any;
  }
  
  static client(options?: AWSOutposts.Types.ClientConfiguration): ClientType {
    return new Outposts(new AWSOutposts(options)) as any;
  }
}  
