import { Request, WellArchitected as AWSWellArchitected } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWellArchitected> = AWSWellArchitected[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWellArchitected> = AWSWellArchitected[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWellArchitected[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWellArchitected, Extras> = AWSWellArchitected[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWellArchitected> = AWSWellArchitected[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class WellArchitected {
  private constructor(private readonly client: AWSWellArchitected) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'wellarchitected' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listLenses","listNotifications","listShareInvitations","listWorkloads"] as const;
  
  associateLenses: (params: RawParamsFrom<'associateLenses'>) => Promise<ReturnTypeFrom<'associateLenses'>>  = async params => {
  // undefined
    return this.client.associateLenses(params as any).promise();
  }

  createLensShare: (params: RawParamsFrom<'createLensShare'>) => Promise<ReturnTypeFrom<'createLensShare'>>  = async params => {
  // undefined
    return this.client.createLensShare(params as any).promise();
  }

  createLensVersion: (params: RawParamsFrom<'createLensVersion'>) => Promise<ReturnTypeFrom<'createLensVersion'>>  = async params => {
  // undefined
    return this.client.createLensVersion(params as any).promise();
  }

  createMilestone: (params: RawParamsFrom<'createMilestone'>) => Promise<ReturnTypeFrom<'createMilestone'>>  = async params => {
  // undefined
    return this.client.createMilestone(params as any).promise();
  }

  createWorkload: (params: RawParamsFrom<'createWorkload'>) => Promise<ReturnTypeFrom<'createWorkload'>>  = async params => {
  // undefined
    return this.client.createWorkload(params as any).promise();
  }

  createWorkloadShare: (params: RawParamsFrom<'createWorkloadShare'>) => Promise<ReturnTypeFrom<'createWorkloadShare'>>  = async params => {
  // undefined
    return this.client.createWorkloadShare(params as any).promise();
  }

  deleteLens: (params: RawParamsFrom<'deleteLens'>) => Promise<ReturnTypeFrom<'deleteLens'>>  = async params => {
  // undefined
    return this.client.deleteLens(params as any).promise();
  }

  deleteLensShare: (params: RawParamsFrom<'deleteLensShare'>) => Promise<ReturnTypeFrom<'deleteLensShare'>>  = async params => {
  // undefined
    return this.client.deleteLensShare(params as any).promise();
  }

  deleteWorkload: (params: RawParamsFrom<'deleteWorkload'>) => Promise<ReturnTypeFrom<'deleteWorkload'>>  = async params => {
  // undefined
    return this.client.deleteWorkload(params as any).promise();
  }

  deleteWorkloadShare: (params: RawParamsFrom<'deleteWorkloadShare'>) => Promise<ReturnTypeFrom<'deleteWorkloadShare'>>  = async params => {
  // undefined
    return this.client.deleteWorkloadShare(params as any).promise();
  }

  disassociateLenses: (params: RawParamsFrom<'disassociateLenses'>) => Promise<ReturnTypeFrom<'disassociateLenses'>>  = async params => {
  // undefined
    return this.client.disassociateLenses(params as any).promise();
  }

  exportLens: (params: RawParamsFrom<'exportLens'>) => Promise<ReturnTypeFrom<'exportLens'>>  = async params => {
  // undefined
    return this.client.exportLens(params as any).promise();
  }

  getAnswer: (params: RawParamsFrom<'getAnswer'>) => Promise<ReturnTypeFrom<'getAnswer'>>  = async params => {
  // undefined
    return this.client.getAnswer(params as any).promise();
  }

  getLens: (params: RawParamsFrom<'getLens'>) => Promise<ReturnTypeFrom<'getLens'>>  = async params => {
  // undefined
    return this.client.getLens(params as any).promise();
  }

  getLensReview: (params: RawParamsFrom<'getLensReview'>) => Promise<ReturnTypeFrom<'getLensReview'>>  = async params => {
  // undefined
    return this.client.getLensReview(params as any).promise();
  }

  getLensReviewReport: (params: RawParamsFrom<'getLensReviewReport'>) => Promise<ReturnTypeFrom<'getLensReviewReport'>>  = async params => {
  // undefined
    return this.client.getLensReviewReport(params as any).promise();
  }

  getLensVersionDifference: (params: RawParamsFrom<'getLensVersionDifference'>) => Promise<ReturnTypeFrom<'getLensVersionDifference'>>  = async params => {
  // undefined
    return this.client.getLensVersionDifference(params as any).promise();
  }

  getMilestone: (params: RawParamsFrom<'getMilestone'>) => Promise<ReturnTypeFrom<'getMilestone'>>  = async params => {
  // undefined
    return this.client.getMilestone(params as any).promise();
  }

  getWorkload: (params: RawParamsFrom<'getWorkload'>) => Promise<ReturnTypeFrom<'getWorkload'>>  = async params => {
  // undefined
    return this.client.getWorkload(params as any).promise();
  }

  importLens: (params: RawParamsFrom<'importLens'>) => Promise<ReturnTypeFrom<'importLens'>>  = async params => {
  // undefined
    return this.client.importLens(params as any).promise();
  }

  listAnswers: (params: RawParamsFrom<'listAnswers'>) => Promise<ReturnTypeFrom<'listAnswers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnswers(params as any).promise();
  }

  listLensReviewImprovements: (params: RawParamsFrom<'listLensReviewImprovements'>) => Promise<ReturnTypeFrom<'listLensReviewImprovements'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLensReviewImprovements(params as any).promise();
  }

  listLensReviews: (params: RawParamsFrom<'listLensReviews'>) => Promise<ReturnTypeFrom<'listLensReviews'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLensReviews(params as any).promise();
  }

  listLensShares: (params: RawParamsFrom<'listLensShares'>) => Promise<ReturnTypeFrom<'listLensShares'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLensShares(params as any).promise();
  }

  listLenses: (params: RawParamsFrom<'listLenses'>) => Promise<ReturnTypeFrom<'listLenses'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLenses(params as any).promise();
  }

  listMilestones: (params: RawParamsFrom<'listMilestones'>) => Promise<ReturnTypeFrom<'listMilestones'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMilestones(params as any).promise();
  }

  listNotifications: (params: RawParamsFrom<'listNotifications'>) => Promise<ReturnTypeFrom<'listNotifications'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNotifications(params as any).promise();
  }

  listShareInvitations: (params: RawParamsFrom<'listShareInvitations'>) => Promise<ReturnTypeFrom<'listShareInvitations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listShareInvitations(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listWorkloadShares: (params: RawParamsFrom<'listWorkloadShares'>) => Promise<ReturnTypeFrom<'listWorkloadShares'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkloadShares(params as any).promise();
  }

  listWorkloads: (params: RawParamsFrom<'listWorkloads'>) => Promise<ReturnTypeFrom<'listWorkloads'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkloads(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAnswer: (params: RawParamsFrom<'updateAnswer'>) => Promise<ReturnTypeFrom<'updateAnswer'>>  = async params => {
  // undefined
    return this.client.updateAnswer(params as any).promise();
  }

  updateGlobalSettings: (params: RawParamsFrom<'updateGlobalSettings'>) => Promise<ReturnTypeFrom<'updateGlobalSettings'>>  = async params => {
  // undefined
    return this.client.updateGlobalSettings(params as any).promise();
  }

  updateLensReview: (params: RawParamsFrom<'updateLensReview'>) => Promise<ReturnTypeFrom<'updateLensReview'>>  = async params => {
  // undefined
    return this.client.updateLensReview(params as any).promise();
  }

  updateShareInvitation: (params: RawParamsFrom<'updateShareInvitation'>) => Promise<ReturnTypeFrom<'updateShareInvitation'>>  = async params => {
  // undefined
    return this.client.updateShareInvitation(params as any).promise();
  }

  updateWorkload: (params: RawParamsFrom<'updateWorkload'>) => Promise<ReturnTypeFrom<'updateWorkload'>>  = async params => {
  // undefined
    return this.client.updateWorkload(params as any).promise();
  }

  updateWorkloadShare: (params: RawParamsFrom<'updateWorkloadShare'>) => Promise<ReturnTypeFrom<'updateWorkloadShare'>>  = async params => {
  // undefined
    return this.client.updateWorkloadShare(params as any).promise();
  }

  upgradeLensReview: (params: RawParamsFrom<'upgradeLensReview'>) => Promise<ReturnTypeFrom<'upgradeLensReview'>>  = async params => {
  // undefined
    return this.client.upgradeLensReview(params as any).promise();
  }
  
  static fromClient(client: AWSWellArchitected): WellArchitected {
    return new WellArchitected(client) as any;
  }
  
  static client(options?: AWSWellArchitected.Types.ClientConfiguration): WellArchitected {
    return new WellArchitected(new AWSWellArchitected(options)) as any;
  }
}  
