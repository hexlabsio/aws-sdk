import { Request, ConnectCampaigns as AWSConnectCampaigns } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSConnectCampaigns> = AWSConnectCampaigns[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSConnectCampaigns> = AWSConnectCampaigns[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSConnectCampaigns[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSConnectCampaigns, Extras> = AWSConnectCampaigns[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'connect-campaigns';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listCampaigns"];
    
  createCampaign: FunctionTypeFrom<'createCampaign'>;

  deleteCampaign: FunctionTypeFrom<'deleteCampaign'>;

  deleteConnectInstanceConfig: FunctionTypeFrom<'deleteConnectInstanceConfig'>;

  deleteInstanceOnboardingJob: FunctionTypeFrom<'deleteInstanceOnboardingJob'>;

  describeCampaign: FunctionTypeFrom<'describeCampaign'>;

  getCampaignState: FunctionTypeFrom<'getCampaignState'>;

  getCampaignStateBatch: FunctionTypeFrom<'getCampaignStateBatch'>;

  getConnectInstanceConfig: FunctionTypeFrom<'getConnectInstanceConfig'>;

  getInstanceOnboardingJobStatus: FunctionTypeFrom<'getInstanceOnboardingJobStatus'>;

  listCampaigns(params: { [K in keyof Omit<ParamsFrom<'listCampaigns', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listCampaigns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCampaigns'>]-?: ReturnTypeFrom<'listCampaigns'>[K]}['campaignSummaryList'] }>
  listCampaigns(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCampaigns'>]-?: ReturnTypeFrom<'listCampaigns'>[K]}['campaignSummaryList'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  pauseCampaign: FunctionTypeFrom<'pauseCampaign'>;

  putDialRequestBatch: FunctionTypeFrom<'putDialRequestBatch'>;

  resumeCampaign: FunctionTypeFrom<'resumeCampaign'>;

  startCampaign: FunctionTypeFrom<'startCampaign'>;

  startInstanceOnboardingJob: FunctionTypeFrom<'startInstanceOnboardingJob'>;

  stopCampaign: FunctionTypeFrom<'stopCampaign'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCampaignDialerConfig: FunctionTypeFrom<'updateCampaignDialerConfig'>;

  updateCampaignName: FunctionTypeFrom<'updateCampaignName'>;

  updateCampaignOutboundCallConfig: FunctionTypeFrom<'updateCampaignOutboundCallConfig'>
}
 
export class ConnectCampaigns implements ClientType {
  private constructor(private readonly client: AWSConnectCampaigns) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'connect-campaigns';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listCampaigns"] as const;
  
  async createCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.createCampaign(...args).promise()
  }

  async deleteCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCampaign(...args).promise()
  }

  async deleteConnectInstanceConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnectInstanceConfig(...args).promise()
  }

  async deleteInstanceOnboardingJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInstanceOnboardingJob(...args).promise()
  }

  async describeCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.describeCampaign(...args).promise()
  }

  async getCampaignState(...args: any): Promise<any> {
  // undefined
    return this.client.getCampaignState(...args).promise()
  }

  async getCampaignStateBatch(...args: any): Promise<any> {
  // undefined
    return this.client.getCampaignStateBatch(...args).promise()
  }

  async getConnectInstanceConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getConnectInstanceConfig(...args).promise()
  }

  async getInstanceOnboardingJobStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceOnboardingJobStatus(...args).promise()
  }

  async listCampaigns(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"campaignSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCampaigns(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.campaignSummaryList ?? [];
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

  async pauseCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.pauseCampaign(...args).promise()
  }

  async putDialRequestBatch(...args: any): Promise<any> {
  // undefined
    return this.client.putDialRequestBatch(...args).promise()
  }

  async resumeCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.resumeCampaign(...args).promise()
  }

  async startCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.startCampaign(...args).promise()
  }

  async startInstanceOnboardingJob(...args: any): Promise<any> {
  // undefined
    return this.client.startInstanceOnboardingJob(...args).promise()
  }

  async stopCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.stopCampaign(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateCampaignDialerConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateCampaignDialerConfig(...args).promise()
  }

  async updateCampaignName(...args: any): Promise<any> {
  // undefined
    return this.client.updateCampaignName(...args).promise()
  }

  async updateCampaignOutboundCallConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateCampaignOutboundCallConfig(...args).promise()
  }
  
  static fromClient(client: AWSConnectCampaigns): ClientType {
    return new ConnectCampaigns(client) as any;
  }
  
  static client(options?: AWSConnectCampaigns.Types.ClientConfiguration): ClientType {
    return new ConnectCampaigns(new AWSConnectCampaigns(options)) as any;
  }
}  
