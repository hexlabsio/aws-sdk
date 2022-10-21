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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSConnectCampaigns> = AWSConnectCampaigns[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ConnectCampaigns {
  private constructor(private readonly client: AWSConnectCampaigns) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'connect-campaigns' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listCampaigns"] as const;
  
  createCampaign: (params: RawParamsFrom<'createCampaign'>) => Promise<ReturnTypeFrom<'createCampaign'>>  = async params => {
  // undefined
    return this.client.createCampaign(params as any).promise();
  }

  deleteCampaign: (params: RawParamsFrom<'deleteCampaign'>) => Promise<ReturnTypeFrom<'deleteCampaign'>>  = async params => {
  // undefined
    return this.client.deleteCampaign(params as any).promise();
  }

  deleteConnectInstanceConfig: (params: RawParamsFrom<'deleteConnectInstanceConfig'>) => Promise<ReturnTypeFrom<'deleteConnectInstanceConfig'>>  = async params => {
  // undefined
    return this.client.deleteConnectInstanceConfig(params as any).promise();
  }

  deleteInstanceOnboardingJob: (params: RawParamsFrom<'deleteInstanceOnboardingJob'>) => Promise<ReturnTypeFrom<'deleteInstanceOnboardingJob'>>  = async params => {
  // undefined
    return this.client.deleteInstanceOnboardingJob(params as any).promise();
  }

  describeCampaign: (params: RawParamsFrom<'describeCampaign'>) => Promise<ReturnTypeFrom<'describeCampaign'>>  = async params => {
  // undefined
    return this.client.describeCampaign(params as any).promise();
  }

  getCampaignState: (params: RawParamsFrom<'getCampaignState'>) => Promise<ReturnTypeFrom<'getCampaignState'>>  = async params => {
  // undefined
    return this.client.getCampaignState(params as any).promise();
  }

  getCampaignStateBatch: (params: RawParamsFrom<'getCampaignStateBatch'>) => Promise<ReturnTypeFrom<'getCampaignStateBatch'>>  = async params => {
  // undefined
    return this.client.getCampaignStateBatch(params as any).promise();
  }

  getConnectInstanceConfig: (params: RawParamsFrom<'getConnectInstanceConfig'>) => Promise<ReturnTypeFrom<'getConnectInstanceConfig'>>  = async params => {
  // undefined
    return this.client.getConnectInstanceConfig(params as any).promise();
  }

  getInstanceOnboardingJobStatus: (params: RawParamsFrom<'getInstanceOnboardingJobStatus'>) => Promise<ReturnTypeFrom<'getInstanceOnboardingJobStatus'>>  = async params => {
  // undefined
    return this.client.getInstanceOnboardingJobStatus(params as any).promise();
  }

  async listCampaigns(params: { [K in keyof ParamsFrom<'listCampaigns', { next?: string, limit?: number }>]: ParamsFrom<'listCampaigns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCampaigns'>]-?: ReturnTypeFrom<'listCampaigns'>[K]}['campaignSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"campaignSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCampaigns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCampaigns' })).toString('base64') : undefined;
    const member = (Array.isArray(result.campaignSummaryList ?? []) ? (result.campaignSummaryList ?? []) : [result.campaignSummaryList]) as any;
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

  pauseCampaign: (params: RawParamsFrom<'pauseCampaign'>) => Promise<ReturnTypeFrom<'pauseCampaign'>>  = async params => {
  // undefined
    return this.client.pauseCampaign(params as any).promise();
  }

  putDialRequestBatch: (params: RawParamsFrom<'putDialRequestBatch'>) => Promise<ReturnTypeFrom<'putDialRequestBatch'>>  = async params => {
  // undefined
    return this.client.putDialRequestBatch(params as any).promise();
  }

  resumeCampaign: (params: RawParamsFrom<'resumeCampaign'>) => Promise<ReturnTypeFrom<'resumeCampaign'>>  = async params => {
  // undefined
    return this.client.resumeCampaign(params as any).promise();
  }

  startCampaign: (params: RawParamsFrom<'startCampaign'>) => Promise<ReturnTypeFrom<'startCampaign'>>  = async params => {
  // undefined
    return this.client.startCampaign(params as any).promise();
  }

  startInstanceOnboardingJob: (params: RawParamsFrom<'startInstanceOnboardingJob'>) => Promise<ReturnTypeFrom<'startInstanceOnboardingJob'>>  = async params => {
  // undefined
    return this.client.startInstanceOnboardingJob(params as any).promise();
  }

  stopCampaign: (params: RawParamsFrom<'stopCampaign'>) => Promise<ReturnTypeFrom<'stopCampaign'>>  = async params => {
  // undefined
    return this.client.stopCampaign(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCampaignDialerConfig: (params: RawParamsFrom<'updateCampaignDialerConfig'>) => Promise<ReturnTypeFrom<'updateCampaignDialerConfig'>>  = async params => {
  // undefined
    return this.client.updateCampaignDialerConfig(params as any).promise();
  }

  updateCampaignName: (params: RawParamsFrom<'updateCampaignName'>) => Promise<ReturnTypeFrom<'updateCampaignName'>>  = async params => {
  // undefined
    return this.client.updateCampaignName(params as any).promise();
  }

  updateCampaignOutboundCallConfig: (params: RawParamsFrom<'updateCampaignOutboundCallConfig'>) => Promise<ReturnTypeFrom<'updateCampaignOutboundCallConfig'>>  = async params => {
  // undefined
    return this.client.updateCampaignOutboundCallConfig(params as any).promise();
  }
  
  static fromClient(client: AWSConnectCampaigns): ConnectCampaigns {
    return new ConnectCampaigns(client) as any;
  }
  
  static client(options?: AWSConnectCampaigns.Types.ClientConfiguration): ConnectCampaigns {
    return new ConnectCampaigns(new AWSConnectCampaigns(options)) as any;
  }
}  
