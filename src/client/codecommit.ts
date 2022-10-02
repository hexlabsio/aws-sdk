import { Request, CodeCommit as AWSCodeCommit } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeCommit> = AWSCodeCommit[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeCommit> = AWSCodeCommit[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeCommit[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeCommit, Extras> = AWSCodeCommit[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codecommit';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["listApprovalRuleTemplates","listRepositories"];
    
  associateApprovalRuleTemplateWithRepository: FunctionTypeFrom<'associateApprovalRuleTemplateWithRepository'>;

  batchAssociateApprovalRuleTemplateWithRepositories: FunctionTypeFrom<'batchAssociateApprovalRuleTemplateWithRepositories'>;

  batchDescribeMergeConflicts: FunctionTypeFrom<'batchDescribeMergeConflicts'>;

  batchDisassociateApprovalRuleTemplateFromRepositories: FunctionTypeFrom<'batchDisassociateApprovalRuleTemplateFromRepositories'>;

  batchGetCommits: FunctionTypeFrom<'batchGetCommits'>;

  batchGetRepositories: FunctionTypeFrom<'batchGetRepositories'>;

  createApprovalRuleTemplate: FunctionTypeFrom<'createApprovalRuleTemplate'>;

  createBranch: FunctionTypeFrom<'createBranch'>;

  createCommit: FunctionTypeFrom<'createCommit'>;

  createPullRequest: FunctionTypeFrom<'createPullRequest'>;

  createPullRequestApprovalRule: FunctionTypeFrom<'createPullRequestApprovalRule'>;

  createRepository: FunctionTypeFrom<'createRepository'>;

  createUnreferencedMergeCommit: FunctionTypeFrom<'createUnreferencedMergeCommit'>;

  deleteApprovalRuleTemplate: FunctionTypeFrom<'deleteApprovalRuleTemplate'>;

  deleteBranch: FunctionTypeFrom<'deleteBranch'>;

  deleteCommentContent: FunctionTypeFrom<'deleteCommentContent'>;

  deleteFile: FunctionTypeFrom<'deleteFile'>;

  deletePullRequestApprovalRule: FunctionTypeFrom<'deletePullRequestApprovalRule'>;

  deleteRepository: FunctionTypeFrom<'deleteRepository'>;

  describeMergeConflicts: FunctionTypeFrom<'describeMergeConflicts'>;

  describePullRequestEvents: FunctionTypeFrom<'describePullRequestEvents'>;

  disassociateApprovalRuleTemplateFromRepository: FunctionTypeFrom<'disassociateApprovalRuleTemplateFromRepository'>;

  evaluatePullRequestApprovalRules: FunctionTypeFrom<'evaluatePullRequestApprovalRules'>;

  getApprovalRuleTemplate: FunctionTypeFrom<'getApprovalRuleTemplate'>;

  getBlob: FunctionTypeFrom<'getBlob'>;

  getBranch: FunctionTypeFrom<'getBranch'>;

  getComment: FunctionTypeFrom<'getComment'>;

  getCommentReactions: FunctionTypeFrom<'getCommentReactions'>;

  getCommentsForComparedCommit: FunctionTypeFrom<'getCommentsForComparedCommit'>;

  getCommentsForPullRequest: FunctionTypeFrom<'getCommentsForPullRequest'>;

  getCommit: FunctionTypeFrom<'getCommit'>;

  getDifferences: FunctionTypeFrom<'getDifferences'>;

  getFile: FunctionTypeFrom<'getFile'>;

  getFolder: FunctionTypeFrom<'getFolder'>;

  getMergeCommit: FunctionTypeFrom<'getMergeCommit'>;

  getMergeConflicts: FunctionTypeFrom<'getMergeConflicts'>;

  getMergeOptions: FunctionTypeFrom<'getMergeOptions'>;

  getPullRequest: FunctionTypeFrom<'getPullRequest'>;

  getPullRequestApprovalStates: FunctionTypeFrom<'getPullRequestApprovalStates'>;

  getPullRequestOverrideState: FunctionTypeFrom<'getPullRequestOverrideState'>;

  getRepository: FunctionTypeFrom<'getRepository'>;

  getRepositoryTriggers: FunctionTypeFrom<'getRepositoryTriggers'>;

  listApprovalRuleTemplates: FunctionTypeFrom<'listApprovalRuleTemplates'>;

  listAssociatedApprovalRuleTemplatesForRepository: FunctionTypeFrom<'listAssociatedApprovalRuleTemplatesForRepository'>;

  listBranches(params: { [K in keyof Omit<ParamsFrom<'listBranches', { next?: string }>, 'nextToken'>]: ParamsFrom<'listBranches', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBranches'>]-?: ReturnTypeFrom<'listBranches'>[K]}['branches'] }>
  ;

  listPullRequests: FunctionTypeFrom<'listPullRequests'>;

  listRepositories(params: { [K in keyof Omit<ParamsFrom<'listRepositories', { next?: string }>, 'nextToken'>]: ParamsFrom<'listRepositories', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositories'>]-?: ReturnTypeFrom<'listRepositories'>[K]}['repositories'] }>
  listRepositories(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositories'>]-?: ReturnTypeFrom<'listRepositories'>[K]}['repositories'] }>;

  listRepositoriesForApprovalRuleTemplate: FunctionTypeFrom<'listRepositoriesForApprovalRuleTemplate'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  mergeBranchesByFastForward: FunctionTypeFrom<'mergeBranchesByFastForward'>;

  mergeBranchesBySquash: FunctionTypeFrom<'mergeBranchesBySquash'>;

  mergeBranchesByThreeWay: FunctionTypeFrom<'mergeBranchesByThreeWay'>;

  mergePullRequestByFastForward: FunctionTypeFrom<'mergePullRequestByFastForward'>;

  mergePullRequestBySquash: FunctionTypeFrom<'mergePullRequestBySquash'>;

  mergePullRequestByThreeWay: FunctionTypeFrom<'mergePullRequestByThreeWay'>;

  overridePullRequestApprovalRules: FunctionTypeFrom<'overridePullRequestApprovalRules'>;

  postCommentForComparedCommit: FunctionTypeFrom<'postCommentForComparedCommit'>;

  postCommentForPullRequest: FunctionTypeFrom<'postCommentForPullRequest'>;

  postCommentReply: FunctionTypeFrom<'postCommentReply'>;

  putCommentReaction: FunctionTypeFrom<'putCommentReaction'>;

  putFile: FunctionTypeFrom<'putFile'>;

  putRepositoryTriggers: FunctionTypeFrom<'putRepositoryTriggers'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testRepositoryTriggers: FunctionTypeFrom<'testRepositoryTriggers'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApprovalRuleTemplateContent: FunctionTypeFrom<'updateApprovalRuleTemplateContent'>;

  updateApprovalRuleTemplateDescription: FunctionTypeFrom<'updateApprovalRuleTemplateDescription'>;

  updateApprovalRuleTemplateName: FunctionTypeFrom<'updateApprovalRuleTemplateName'>;

  updateComment: FunctionTypeFrom<'updateComment'>;

  updateDefaultBranch: FunctionTypeFrom<'updateDefaultBranch'>;

  updatePullRequestApprovalRuleContent: FunctionTypeFrom<'updatePullRequestApprovalRuleContent'>;

  updatePullRequestApprovalState: FunctionTypeFrom<'updatePullRequestApprovalState'>;

  updatePullRequestDescription: FunctionTypeFrom<'updatePullRequestDescription'>;

  updatePullRequestStatus: FunctionTypeFrom<'updatePullRequestStatus'>;

  updatePullRequestTitle: FunctionTypeFrom<'updatePullRequestTitle'>;

  updateRepositoryDescription: FunctionTypeFrom<'updateRepositoryDescription'>;

  updateRepositoryName: FunctionTypeFrom<'updateRepositoryName'>
}
 
export class CodeCommit implements ClientType {
  private constructor(private readonly client: AWSCodeCommit) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codecommit';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["listApprovalRuleTemplates","listRepositories"] as const;
  
  async associateApprovalRuleTemplateWithRepository(...args: any): Promise<any> {
  // undefined
    return this.client.associateApprovalRuleTemplateWithRepository(...args).promise()
  }

  async batchAssociateApprovalRuleTemplateWithRepositories(...args: any): Promise<any> {
  // undefined
    return this.client.batchAssociateApprovalRuleTemplateWithRepositories(...args).promise()
  }

  async batchDescribeMergeConflicts(...args: any): Promise<any> {
  // undefined
    return this.client.batchDescribeMergeConflicts(...args).promise()
  }

  async batchDisassociateApprovalRuleTemplateFromRepositories(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisassociateApprovalRuleTemplateFromRepositories(...args).promise()
  }

  async batchGetCommits(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetCommits(...args).promise()
  }

  async batchGetRepositories(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetRepositories(...args).promise()
  }

  async createApprovalRuleTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createApprovalRuleTemplate(...args).promise()
  }

  async createBranch(...args: any): Promise<any> {
  // undefined
    return this.client.createBranch(...args).promise()
  }

  async createCommit(...args: any): Promise<any> {
  // undefined
    return this.client.createCommit(...args).promise()
  }

  async createPullRequest(...args: any): Promise<any> {
  // undefined
    return this.client.createPullRequest(...args).promise()
  }

  async createPullRequestApprovalRule(...args: any): Promise<any> {
  // undefined
    return this.client.createPullRequestApprovalRule(...args).promise()
  }

  async createRepository(...args: any): Promise<any> {
  // undefined
    return this.client.createRepository(...args).promise()
  }

  async createUnreferencedMergeCommit(...args: any): Promise<any> {
  // undefined
    return this.client.createUnreferencedMergeCommit(...args).promise()
  }

  async deleteApprovalRuleTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApprovalRuleTemplate(...args).promise()
  }

  async deleteBranch(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBranch(...args).promise()
  }

  async deleteCommentContent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCommentContent(...args).promise()
  }

  async deleteFile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFile(...args).promise()
  }

  async deletePullRequestApprovalRule(...args: any): Promise<any> {
  // undefined
    return this.client.deletePullRequestApprovalRule(...args).promise()
  }

  async deleteRepository(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRepository(...args).promise()
  }

  async describeMergeConflicts(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxMergeHunks","outputToken":"nextToken"}
    return this.client.describeMergeConflicts(...args).promise()
  }

  async describePullRequestEvents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describePullRequestEvents(...args).promise()
  }

  async disassociateApprovalRuleTemplateFromRepository(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateApprovalRuleTemplateFromRepository(...args).promise()
  }

  async evaluatePullRequestApprovalRules(...args: any): Promise<any> {
  // undefined
    return this.client.evaluatePullRequestApprovalRules(...args).promise()
  }

  async getApprovalRuleTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getApprovalRuleTemplate(...args).promise()
  }

  async getBlob(...args: any): Promise<any> {
  // undefined
    return this.client.getBlob(...args).promise()
  }

  async getBranch(...args: any): Promise<any> {
  // undefined
    return this.client.getBranch(...args).promise()
  }

  async getComment(...args: any): Promise<any> {
  // undefined
    return this.client.getComment(...args).promise()
  }

  async getCommentReactions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getCommentReactions(...args).promise()
  }

  async getCommentsForComparedCommit(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getCommentsForComparedCommit(...args).promise()
  }

  async getCommentsForPullRequest(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getCommentsForPullRequest(...args).promise()
  }

  async getCommit(...args: any): Promise<any> {
  // undefined
    return this.client.getCommit(...args).promise()
  }

  async getDifferences(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getDifferences(...args).promise()
  }

  async getFile(...args: any): Promise<any> {
  // undefined
    return this.client.getFile(...args).promise()
  }

  async getFolder(...args: any): Promise<any> {
  // undefined
    return this.client.getFolder(...args).promise()
  }

  async getMergeCommit(...args: any): Promise<any> {
  // undefined
    return this.client.getMergeCommit(...args).promise()
  }

  async getMergeConflicts(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxConflictFiles","outputToken":"nextToken"}
    return this.client.getMergeConflicts(...args).promise()
  }

  async getMergeOptions(...args: any): Promise<any> {
  // undefined
    return this.client.getMergeOptions(...args).promise()
  }

  async getPullRequest(...args: any): Promise<any> {
  // undefined
    return this.client.getPullRequest(...args).promise()
  }

  async getPullRequestApprovalStates(...args: any): Promise<any> {
  // undefined
    return this.client.getPullRequestApprovalStates(...args).promise()
  }

  async getPullRequestOverrideState(...args: any): Promise<any> {
  // undefined
    return this.client.getPullRequestOverrideState(...args).promise()
  }

  async getRepository(...args: any): Promise<any> {
  // undefined
    return this.client.getRepository(...args).promise()
  }

  async getRepositoryTriggers(...args: any): Promise<any> {
  // undefined
    return this.client.getRepositoryTriggers(...args).promise()
  }

  async listApprovalRuleTemplates(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listApprovalRuleTemplates(...args).promise()
  }

  async listAssociatedApprovalRuleTemplatesForRepository(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssociatedApprovalRuleTemplatesForRepository(...args).promise()
  }

  async listBranches(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"branches"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listBranches(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.branches ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPullRequests(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPullRequests(...args).promise()
  }

  async listRepositories(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"repositories"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listRepositories(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.repositories ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRepositoriesForApprovalRuleTemplate(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRepositoriesForApprovalRuleTemplate(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async mergeBranchesByFastForward(...args: any): Promise<any> {
  // undefined
    return this.client.mergeBranchesByFastForward(...args).promise()
  }

  async mergeBranchesBySquash(...args: any): Promise<any> {
  // undefined
    return this.client.mergeBranchesBySquash(...args).promise()
  }

  async mergeBranchesByThreeWay(...args: any): Promise<any> {
  // undefined
    return this.client.mergeBranchesByThreeWay(...args).promise()
  }

  async mergePullRequestByFastForward(...args: any): Promise<any> {
  // undefined
    return this.client.mergePullRequestByFastForward(...args).promise()
  }

  async mergePullRequestBySquash(...args: any): Promise<any> {
  // undefined
    return this.client.mergePullRequestBySquash(...args).promise()
  }

  async mergePullRequestByThreeWay(...args: any): Promise<any> {
  // undefined
    return this.client.mergePullRequestByThreeWay(...args).promise()
  }

  async overridePullRequestApprovalRules(...args: any): Promise<any> {
  // undefined
    return this.client.overridePullRequestApprovalRules(...args).promise()
  }

  async postCommentForComparedCommit(...args: any): Promise<any> {
  // undefined
    return this.client.postCommentForComparedCommit(...args).promise()
  }

  async postCommentForPullRequest(...args: any): Promise<any> {
  // undefined
    return this.client.postCommentForPullRequest(...args).promise()
  }

  async postCommentReply(...args: any): Promise<any> {
  // undefined
    return this.client.postCommentReply(...args).promise()
  }

  async putCommentReaction(...args: any): Promise<any> {
  // undefined
    return this.client.putCommentReaction(...args).promise()
  }

  async putFile(...args: any): Promise<any> {
  // undefined
    return this.client.putFile(...args).promise()
  }

  async putRepositoryTriggers(...args: any): Promise<any> {
  // undefined
    return this.client.putRepositoryTriggers(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testRepositoryTriggers(...args: any): Promise<any> {
  // undefined
    return this.client.testRepositoryTriggers(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApprovalRuleTemplateContent(...args: any): Promise<any> {
  // undefined
    return this.client.updateApprovalRuleTemplateContent(...args).promise()
  }

  async updateApprovalRuleTemplateDescription(...args: any): Promise<any> {
  // undefined
    return this.client.updateApprovalRuleTemplateDescription(...args).promise()
  }

  async updateApprovalRuleTemplateName(...args: any): Promise<any> {
  // undefined
    return this.client.updateApprovalRuleTemplateName(...args).promise()
  }

  async updateComment(...args: any): Promise<any> {
  // undefined
    return this.client.updateComment(...args).promise()
  }

  async updateDefaultBranch(...args: any): Promise<any> {
  // undefined
    return this.client.updateDefaultBranch(...args).promise()
  }

  async updatePullRequestApprovalRuleContent(...args: any): Promise<any> {
  // undefined
    return this.client.updatePullRequestApprovalRuleContent(...args).promise()
  }

  async updatePullRequestApprovalState(...args: any): Promise<any> {
  // undefined
    return this.client.updatePullRequestApprovalState(...args).promise()
  }

  async updatePullRequestDescription(...args: any): Promise<any> {
  // undefined
    return this.client.updatePullRequestDescription(...args).promise()
  }

  async updatePullRequestStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updatePullRequestStatus(...args).promise()
  }

  async updatePullRequestTitle(...args: any): Promise<any> {
  // undefined
    return this.client.updatePullRequestTitle(...args).promise()
  }

  async updateRepositoryDescription(...args: any): Promise<any> {
  // undefined
    return this.client.updateRepositoryDescription(...args).promise()
  }

  async updateRepositoryName(...args: any): Promise<any> {
  // undefined
    return this.client.updateRepositoryName(...args).promise()
  }
  
  static fromClient(client: AWSCodeCommit): ClientType {
    return new CodeCommit(client) as any;
  }
  
  static client(options?: AWSCodeCommit.Types.ClientConfiguration): ClientType {
    return new CodeCommit(new AWSCodeCommit(options)) as any;
  }
}  
