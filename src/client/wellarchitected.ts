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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'wellarchitected';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listLenses","listNotifications","listShareInvitations","listWorkloads"];
    
  associateLenses: FunctionTypeFrom<'associateLenses'>;

  createLensShare: FunctionTypeFrom<'createLensShare'>;

  createLensVersion: FunctionTypeFrom<'createLensVersion'>;

  createMilestone: FunctionTypeFrom<'createMilestone'>;

  createWorkload: FunctionTypeFrom<'createWorkload'>;

  createWorkloadShare: FunctionTypeFrom<'createWorkloadShare'>;

  deleteLens: FunctionTypeFrom<'deleteLens'>;

  deleteLensShare: FunctionTypeFrom<'deleteLensShare'>;

  deleteWorkload: FunctionTypeFrom<'deleteWorkload'>;

  deleteWorkloadShare: FunctionTypeFrom<'deleteWorkloadShare'>;

  disassociateLenses: FunctionTypeFrom<'disassociateLenses'>;

  exportLens: FunctionTypeFrom<'exportLens'>;

  getAnswer: FunctionTypeFrom<'getAnswer'>;

  getLens: FunctionTypeFrom<'getLens'>;

  getLensReview: FunctionTypeFrom<'getLensReview'>;

  getLensReviewReport: FunctionTypeFrom<'getLensReviewReport'>;

  getLensVersionDifference: FunctionTypeFrom<'getLensVersionDifference'>;

  getMilestone: FunctionTypeFrom<'getMilestone'>;

  getWorkload: FunctionTypeFrom<'getWorkload'>;

  importLens: FunctionTypeFrom<'importLens'>;

  listAnswers: FunctionTypeFrom<'listAnswers'>;

  listLensReviewImprovements: FunctionTypeFrom<'listLensReviewImprovements'>;

  listLensReviews: FunctionTypeFrom<'listLensReviews'>;

  listLensShares: FunctionTypeFrom<'listLensShares'>;

  listLenses: FunctionTypeFrom<'listLenses'>;

  listMilestones: FunctionTypeFrom<'listMilestones'>;

  listNotifications: FunctionTypeFrom<'listNotifications'>;

  listShareInvitations: FunctionTypeFrom<'listShareInvitations'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWorkloadShares: FunctionTypeFrom<'listWorkloadShares'>;

  listWorkloads: FunctionTypeFrom<'listWorkloads'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAnswer: FunctionTypeFrom<'updateAnswer'>;

  updateGlobalSettings: FunctionTypeFrom<'updateGlobalSettings'>;

  updateLensReview: FunctionTypeFrom<'updateLensReview'>;

  updateShareInvitation: FunctionTypeFrom<'updateShareInvitation'>;

  updateWorkload: FunctionTypeFrom<'updateWorkload'>;

  updateWorkloadShare: FunctionTypeFrom<'updateWorkloadShare'>;

  upgradeLensReview: FunctionTypeFrom<'upgradeLensReview'>
}
 
export class WellArchitected implements ClientType {
  private constructor(private readonly client: AWSWellArchitected) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'wellarchitected';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listLenses","listNotifications","listShareInvitations","listWorkloads"] as const;
  
  async associateLenses(...args: any): Promise<any> {
  // undefined
    return this.client.associateLenses(...args).promise()
  }

  async createLensShare(...args: any): Promise<any> {
  // undefined
    return this.client.createLensShare(...args).promise()
  }

  async createLensVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createLensVersion(...args).promise()
  }

  async createMilestone(...args: any): Promise<any> {
  // undefined
    return this.client.createMilestone(...args).promise()
  }

  async createWorkload(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkload(...args).promise()
  }

  async createWorkloadShare(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkloadShare(...args).promise()
  }

  async deleteLens(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLens(...args).promise()
  }

  async deleteLensShare(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLensShare(...args).promise()
  }

  async deleteWorkload(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkload(...args).promise()
  }

  async deleteWorkloadShare(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkloadShare(...args).promise()
  }

  async disassociateLenses(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateLenses(...args).promise()
  }

  async exportLens(...args: any): Promise<any> {
  // undefined
    return this.client.exportLens(...args).promise()
  }

  async getAnswer(...args: any): Promise<any> {
  // undefined
    return this.client.getAnswer(...args).promise()
  }

  async getLens(...args: any): Promise<any> {
  // undefined
    return this.client.getLens(...args).promise()
  }

  async getLensReview(...args: any): Promise<any> {
  // undefined
    return this.client.getLensReview(...args).promise()
  }

  async getLensReviewReport(...args: any): Promise<any> {
  // undefined
    return this.client.getLensReviewReport(...args).promise()
  }

  async getLensVersionDifference(...args: any): Promise<any> {
  // undefined
    return this.client.getLensVersionDifference(...args).promise()
  }

  async getMilestone(...args: any): Promise<any> {
  // undefined
    return this.client.getMilestone(...args).promise()
  }

  async getWorkload(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkload(...args).promise()
  }

  async importLens(...args: any): Promise<any> {
  // undefined
    return this.client.importLens(...args).promise()
  }

  async listAnswers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnswers(...args).promise()
  }

  async listLensReviewImprovements(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLensReviewImprovements(...args).promise()
  }

  async listLensReviews(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLensReviews(...args).promise()
  }

  async listLensShares(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLensShares(...args).promise()
  }

  async listLenses(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLenses(...args).promise()
  }

  async listMilestones(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMilestones(...args).promise()
  }

  async listNotifications(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNotifications(...args).promise()
  }

  async listShareInvitations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listShareInvitations(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listWorkloadShares(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkloadShares(...args).promise()
  }

  async listWorkloads(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkloads(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAnswer(...args: any): Promise<any> {
  // undefined
    return this.client.updateAnswer(...args).promise()
  }

  async updateGlobalSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateGlobalSettings(...args).promise()
  }

  async updateLensReview(...args: any): Promise<any> {
  // undefined
    return this.client.updateLensReview(...args).promise()
  }

  async updateShareInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.updateShareInvitation(...args).promise()
  }

  async updateWorkload(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkload(...args).promise()
  }

  async updateWorkloadShare(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkloadShare(...args).promise()
  }

  async upgradeLensReview(...args: any): Promise<any> {
  // undefined
    return this.client.upgradeLensReview(...args).promise()
  }
  
  static fromClient(client: AWSWellArchitected): ClientType {
    return new WellArchitected(client) as any;
  }
  
  static client(options?: AWSWellArchitected.Types.ClientConfiguration): ClientType {
    return new WellArchitected(new AWSWellArchitected(options)) as any;
  }
}  
