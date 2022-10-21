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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeCommit> = AWSCodeCommit[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeCommit {
  private constructor(private readonly client: AWSCodeCommit) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codecommit' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["listApprovalRuleTemplates","listRepositories"] as const;
  
  associateApprovalRuleTemplateWithRepository: (params: RawParamsFrom<'associateApprovalRuleTemplateWithRepository'>) => Promise<ReturnTypeFrom<'associateApprovalRuleTemplateWithRepository'>>  = async params => {
  // undefined
    return this.client.associateApprovalRuleTemplateWithRepository(params as any).promise();
  }

  batchAssociateApprovalRuleTemplateWithRepositories: (params: RawParamsFrom<'batchAssociateApprovalRuleTemplateWithRepositories'>) => Promise<ReturnTypeFrom<'batchAssociateApprovalRuleTemplateWithRepositories'>>  = async params => {
  // undefined
    return this.client.batchAssociateApprovalRuleTemplateWithRepositories(params as any).promise();
  }

  batchDescribeMergeConflicts: (params: RawParamsFrom<'batchDescribeMergeConflicts'>) => Promise<ReturnTypeFrom<'batchDescribeMergeConflicts'>>  = async params => {
  // undefined
    return this.client.batchDescribeMergeConflicts(params as any).promise();
  }

  batchDisassociateApprovalRuleTemplateFromRepositories: (params: RawParamsFrom<'batchDisassociateApprovalRuleTemplateFromRepositories'>) => Promise<ReturnTypeFrom<'batchDisassociateApprovalRuleTemplateFromRepositories'>>  = async params => {
  // undefined
    return this.client.batchDisassociateApprovalRuleTemplateFromRepositories(params as any).promise();
  }

  batchGetCommits: (params: RawParamsFrom<'batchGetCommits'>) => Promise<ReturnTypeFrom<'batchGetCommits'>>  = async params => {
  // undefined
    return this.client.batchGetCommits(params as any).promise();
  }

  batchGetRepositories: (params: RawParamsFrom<'batchGetRepositories'>) => Promise<ReturnTypeFrom<'batchGetRepositories'>>  = async params => {
  // undefined
    return this.client.batchGetRepositories(params as any).promise();
  }

  createApprovalRuleTemplate: (params: RawParamsFrom<'createApprovalRuleTemplate'>) => Promise<ReturnTypeFrom<'createApprovalRuleTemplate'>>  = async params => {
  // undefined
    return this.client.createApprovalRuleTemplate(params as any).promise();
  }

  createBranch: (params: RawParamsFrom<'createBranch'>) => Promise<ReturnTypeFrom<'createBranch'>>  = async params => {
  // undefined
    return this.client.createBranch(params as any).promise();
  }

  createCommit: (params: RawParamsFrom<'createCommit'>) => Promise<ReturnTypeFrom<'createCommit'>>  = async params => {
  // undefined
    return this.client.createCommit(params as any).promise();
  }

  createPullRequest: (params: RawParamsFrom<'createPullRequest'>) => Promise<ReturnTypeFrom<'createPullRequest'>>  = async params => {
  // undefined
    return this.client.createPullRequest(params as any).promise();
  }

  createPullRequestApprovalRule: (params: RawParamsFrom<'createPullRequestApprovalRule'>) => Promise<ReturnTypeFrom<'createPullRequestApprovalRule'>>  = async params => {
  // undefined
    return this.client.createPullRequestApprovalRule(params as any).promise();
  }

  createRepository: (params: RawParamsFrom<'createRepository'>) => Promise<ReturnTypeFrom<'createRepository'>>  = async params => {
  // undefined
    return this.client.createRepository(params as any).promise();
  }

  createUnreferencedMergeCommit: (params: RawParamsFrom<'createUnreferencedMergeCommit'>) => Promise<ReturnTypeFrom<'createUnreferencedMergeCommit'>>  = async params => {
  // undefined
    return this.client.createUnreferencedMergeCommit(params as any).promise();
  }

  deleteApprovalRuleTemplate: (params: RawParamsFrom<'deleteApprovalRuleTemplate'>) => Promise<ReturnTypeFrom<'deleteApprovalRuleTemplate'>>  = async params => {
  // undefined
    return this.client.deleteApprovalRuleTemplate(params as any).promise();
  }

  deleteBranch: (params: RawParamsFrom<'deleteBranch'>) => Promise<ReturnTypeFrom<'deleteBranch'>>  = async params => {
  // undefined
    return this.client.deleteBranch(params as any).promise();
  }

  deleteCommentContent: (params: RawParamsFrom<'deleteCommentContent'>) => Promise<ReturnTypeFrom<'deleteCommentContent'>>  = async params => {
  // undefined
    return this.client.deleteCommentContent(params as any).promise();
  }

  deleteFile: (params: RawParamsFrom<'deleteFile'>) => Promise<ReturnTypeFrom<'deleteFile'>>  = async params => {
  // undefined
    return this.client.deleteFile(params as any).promise();
  }

  deletePullRequestApprovalRule: (params: RawParamsFrom<'deletePullRequestApprovalRule'>) => Promise<ReturnTypeFrom<'deletePullRequestApprovalRule'>>  = async params => {
  // undefined
    return this.client.deletePullRequestApprovalRule(params as any).promise();
  }

  deleteRepository: (params: RawParamsFrom<'deleteRepository'>) => Promise<ReturnTypeFrom<'deleteRepository'>>  = async params => {
  // undefined
    return this.client.deleteRepository(params as any).promise();
  }

  describeMergeConflicts: (params: RawParamsFrom<'describeMergeConflicts'>) => Promise<ReturnTypeFrom<'describeMergeConflicts'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxMergeHunks","outputToken":"nextToken"}
    return this.client.describeMergeConflicts(params as any).promise();
  }

  describePullRequestEvents: (params: RawParamsFrom<'describePullRequestEvents'>) => Promise<ReturnTypeFrom<'describePullRequestEvents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describePullRequestEvents(params as any).promise();
  }

  disassociateApprovalRuleTemplateFromRepository: (params: RawParamsFrom<'disassociateApprovalRuleTemplateFromRepository'>) => Promise<ReturnTypeFrom<'disassociateApprovalRuleTemplateFromRepository'>>  = async params => {
  // undefined
    return this.client.disassociateApprovalRuleTemplateFromRepository(params as any).promise();
  }

  evaluatePullRequestApprovalRules: (params: RawParamsFrom<'evaluatePullRequestApprovalRules'>) => Promise<ReturnTypeFrom<'evaluatePullRequestApprovalRules'>>  = async params => {
  // undefined
    return this.client.evaluatePullRequestApprovalRules(params as any).promise();
  }

  getApprovalRuleTemplate: (params: RawParamsFrom<'getApprovalRuleTemplate'>) => Promise<ReturnTypeFrom<'getApprovalRuleTemplate'>>  = async params => {
  // undefined
    return this.client.getApprovalRuleTemplate(params as any).promise();
  }

  getBlob: (params: RawParamsFrom<'getBlob'>) => Promise<ReturnTypeFrom<'getBlob'>>  = async params => {
  // undefined
    return this.client.getBlob(params as any).promise();
  }

  getBranch: (params: RawParamsFrom<'getBranch'>) => Promise<ReturnTypeFrom<'getBranch'>>  = async params => {
  // undefined
    return this.client.getBranch(params as any).promise();
  }

  getComment: (params: RawParamsFrom<'getComment'>) => Promise<ReturnTypeFrom<'getComment'>>  = async params => {
  // undefined
    return this.client.getComment(params as any).promise();
  }

  getCommentReactions: (params: RawParamsFrom<'getCommentReactions'>) => Promise<ReturnTypeFrom<'getCommentReactions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getCommentReactions(params as any).promise();
  }

  getCommentsForComparedCommit: (params: RawParamsFrom<'getCommentsForComparedCommit'>) => Promise<ReturnTypeFrom<'getCommentsForComparedCommit'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getCommentsForComparedCommit(params as any).promise();
  }

  getCommentsForPullRequest: (params: RawParamsFrom<'getCommentsForPullRequest'>) => Promise<ReturnTypeFrom<'getCommentsForPullRequest'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getCommentsForPullRequest(params as any).promise();
  }

  getCommit: (params: RawParamsFrom<'getCommit'>) => Promise<ReturnTypeFrom<'getCommit'>>  = async params => {
  // undefined
    return this.client.getCommit(params as any).promise();
  }

  getDifferences: (params: RawParamsFrom<'getDifferences'>) => Promise<ReturnTypeFrom<'getDifferences'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getDifferences(params as any).promise();
  }

  getFile: (params: RawParamsFrom<'getFile'>) => Promise<ReturnTypeFrom<'getFile'>>  = async params => {
  // undefined
    return this.client.getFile(params as any).promise();
  }

  getFolder: (params: RawParamsFrom<'getFolder'>) => Promise<ReturnTypeFrom<'getFolder'>>  = async params => {
  // undefined
    return this.client.getFolder(params as any).promise();
  }

  getMergeCommit: (params: RawParamsFrom<'getMergeCommit'>) => Promise<ReturnTypeFrom<'getMergeCommit'>>  = async params => {
  // undefined
    return this.client.getMergeCommit(params as any).promise();
  }

  getMergeConflicts: (params: RawParamsFrom<'getMergeConflicts'>) => Promise<ReturnTypeFrom<'getMergeConflicts'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxConflictFiles","outputToken":"nextToken"}
    return this.client.getMergeConflicts(params as any).promise();
  }

  getMergeOptions: (params: RawParamsFrom<'getMergeOptions'>) => Promise<ReturnTypeFrom<'getMergeOptions'>>  = async params => {
  // undefined
    return this.client.getMergeOptions(params as any).promise();
  }

  getPullRequest: (params: RawParamsFrom<'getPullRequest'>) => Promise<ReturnTypeFrom<'getPullRequest'>>  = async params => {
  // undefined
    return this.client.getPullRequest(params as any).promise();
  }

  getPullRequestApprovalStates: (params: RawParamsFrom<'getPullRequestApprovalStates'>) => Promise<ReturnTypeFrom<'getPullRequestApprovalStates'>>  = async params => {
  // undefined
    return this.client.getPullRequestApprovalStates(params as any).promise();
  }

  getPullRequestOverrideState: (params: RawParamsFrom<'getPullRequestOverrideState'>) => Promise<ReturnTypeFrom<'getPullRequestOverrideState'>>  = async params => {
  // undefined
    return this.client.getPullRequestOverrideState(params as any).promise();
  }

  getRepository: (params: RawParamsFrom<'getRepository'>) => Promise<ReturnTypeFrom<'getRepository'>>  = async params => {
  // undefined
    return this.client.getRepository(params as any).promise();
  }

  getRepositoryTriggers: (params: RawParamsFrom<'getRepositoryTriggers'>) => Promise<ReturnTypeFrom<'getRepositoryTriggers'>>  = async params => {
  // undefined
    return this.client.getRepositoryTriggers(params as any).promise();
  }

  listApprovalRuleTemplates: (params: RawParamsFrom<'listApprovalRuleTemplates'>) => Promise<ReturnTypeFrom<'listApprovalRuleTemplates'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listApprovalRuleTemplates(params as any).promise();
  }

  listAssociatedApprovalRuleTemplatesForRepository: (params: RawParamsFrom<'listAssociatedApprovalRuleTemplatesForRepository'>) => Promise<ReturnTypeFrom<'listAssociatedApprovalRuleTemplatesForRepository'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssociatedApprovalRuleTemplatesForRepository(params as any).promise();
  }

  async listBranches(params: { [K in keyof ParamsFrom<'listBranches', { next?: string }>]: ParamsFrom<'listBranches', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBranches'>]-?: ReturnTypeFrom<'listBranches'>[K]}['branches'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"branches"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listBranches({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.branches ?? []) ? (result.branches ?? []) : [result.branches]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listPullRequests: (params: RawParamsFrom<'listPullRequests'>) => Promise<ReturnTypeFrom<'listPullRequests'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPullRequests(params as any).promise();
  }

  async listRepositories(params: { [K in keyof ParamsFrom<'listRepositories', { next?: string }>]: ParamsFrom<'listRepositories', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRepositories'>]-?: ReturnTypeFrom<'listRepositories'>[K]}['repositories'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"repositories"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listRepositories({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.repositories ?? []) ? (result.repositories ?? []) : [result.repositories]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listRepositoriesForApprovalRuleTemplate: (params: RawParamsFrom<'listRepositoriesForApprovalRuleTemplate'>) => Promise<ReturnTypeFrom<'listRepositoriesForApprovalRuleTemplate'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRepositoriesForApprovalRuleTemplate(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  mergeBranchesByFastForward: (params: RawParamsFrom<'mergeBranchesByFastForward'>) => Promise<ReturnTypeFrom<'mergeBranchesByFastForward'>>  = async params => {
  // undefined
    return this.client.mergeBranchesByFastForward(params as any).promise();
  }

  mergeBranchesBySquash: (params: RawParamsFrom<'mergeBranchesBySquash'>) => Promise<ReturnTypeFrom<'mergeBranchesBySquash'>>  = async params => {
  // undefined
    return this.client.mergeBranchesBySquash(params as any).promise();
  }

  mergeBranchesByThreeWay: (params: RawParamsFrom<'mergeBranchesByThreeWay'>) => Promise<ReturnTypeFrom<'mergeBranchesByThreeWay'>>  = async params => {
  // undefined
    return this.client.mergeBranchesByThreeWay(params as any).promise();
  }

  mergePullRequestByFastForward: (params: RawParamsFrom<'mergePullRequestByFastForward'>) => Promise<ReturnTypeFrom<'mergePullRequestByFastForward'>>  = async params => {
  // undefined
    return this.client.mergePullRequestByFastForward(params as any).promise();
  }

  mergePullRequestBySquash: (params: RawParamsFrom<'mergePullRequestBySquash'>) => Promise<ReturnTypeFrom<'mergePullRequestBySquash'>>  = async params => {
  // undefined
    return this.client.mergePullRequestBySquash(params as any).promise();
  }

  mergePullRequestByThreeWay: (params: RawParamsFrom<'mergePullRequestByThreeWay'>) => Promise<ReturnTypeFrom<'mergePullRequestByThreeWay'>>  = async params => {
  // undefined
    return this.client.mergePullRequestByThreeWay(params as any).promise();
  }

  overridePullRequestApprovalRules: (params: RawParamsFrom<'overridePullRequestApprovalRules'>) => Promise<ReturnTypeFrom<'overridePullRequestApprovalRules'>>  = async params => {
  // undefined
    return this.client.overridePullRequestApprovalRules(params as any).promise();
  }

  postCommentForComparedCommit: (params: RawParamsFrom<'postCommentForComparedCommit'>) => Promise<ReturnTypeFrom<'postCommentForComparedCommit'>>  = async params => {
  // undefined
    return this.client.postCommentForComparedCommit(params as any).promise();
  }

  postCommentForPullRequest: (params: RawParamsFrom<'postCommentForPullRequest'>) => Promise<ReturnTypeFrom<'postCommentForPullRequest'>>  = async params => {
  // undefined
    return this.client.postCommentForPullRequest(params as any).promise();
  }

  postCommentReply: (params: RawParamsFrom<'postCommentReply'>) => Promise<ReturnTypeFrom<'postCommentReply'>>  = async params => {
  // undefined
    return this.client.postCommentReply(params as any).promise();
  }

  putCommentReaction: (params: RawParamsFrom<'putCommentReaction'>) => Promise<ReturnTypeFrom<'putCommentReaction'>>  = async params => {
  // undefined
    return this.client.putCommentReaction(params as any).promise();
  }

  putFile: (params: RawParamsFrom<'putFile'>) => Promise<ReturnTypeFrom<'putFile'>>  = async params => {
  // undefined
    return this.client.putFile(params as any).promise();
  }

  putRepositoryTriggers: (params: RawParamsFrom<'putRepositoryTriggers'>) => Promise<ReturnTypeFrom<'putRepositoryTriggers'>>  = async params => {
  // undefined
    return this.client.putRepositoryTriggers(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testRepositoryTriggers: (params: RawParamsFrom<'testRepositoryTriggers'>) => Promise<ReturnTypeFrom<'testRepositoryTriggers'>>  = async params => {
  // undefined
    return this.client.testRepositoryTriggers(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApprovalRuleTemplateContent: (params: RawParamsFrom<'updateApprovalRuleTemplateContent'>) => Promise<ReturnTypeFrom<'updateApprovalRuleTemplateContent'>>  = async params => {
  // undefined
    return this.client.updateApprovalRuleTemplateContent(params as any).promise();
  }

  updateApprovalRuleTemplateDescription: (params: RawParamsFrom<'updateApprovalRuleTemplateDescription'>) => Promise<ReturnTypeFrom<'updateApprovalRuleTemplateDescription'>>  = async params => {
  // undefined
    return this.client.updateApprovalRuleTemplateDescription(params as any).promise();
  }

  updateApprovalRuleTemplateName: (params: RawParamsFrom<'updateApprovalRuleTemplateName'>) => Promise<ReturnTypeFrom<'updateApprovalRuleTemplateName'>>  = async params => {
  // undefined
    return this.client.updateApprovalRuleTemplateName(params as any).promise();
  }

  updateComment: (params: RawParamsFrom<'updateComment'>) => Promise<ReturnTypeFrom<'updateComment'>>  = async params => {
  // undefined
    return this.client.updateComment(params as any).promise();
  }

  updateDefaultBranch: (params: RawParamsFrom<'updateDefaultBranch'>) => Promise<ReturnTypeFrom<'updateDefaultBranch'>>  = async params => {
  // undefined
    return this.client.updateDefaultBranch(params as any).promise();
  }

  updatePullRequestApprovalRuleContent: (params: RawParamsFrom<'updatePullRequestApprovalRuleContent'>) => Promise<ReturnTypeFrom<'updatePullRequestApprovalRuleContent'>>  = async params => {
  // undefined
    return this.client.updatePullRequestApprovalRuleContent(params as any).promise();
  }

  updatePullRequestApprovalState: (params: RawParamsFrom<'updatePullRequestApprovalState'>) => Promise<ReturnTypeFrom<'updatePullRequestApprovalState'>>  = async params => {
  // undefined
    return this.client.updatePullRequestApprovalState(params as any).promise();
  }

  updatePullRequestDescription: (params: RawParamsFrom<'updatePullRequestDescription'>) => Promise<ReturnTypeFrom<'updatePullRequestDescription'>>  = async params => {
  // undefined
    return this.client.updatePullRequestDescription(params as any).promise();
  }

  updatePullRequestStatus: (params: RawParamsFrom<'updatePullRequestStatus'>) => Promise<ReturnTypeFrom<'updatePullRequestStatus'>>  = async params => {
  // undefined
    return this.client.updatePullRequestStatus(params as any).promise();
  }

  updatePullRequestTitle: (params: RawParamsFrom<'updatePullRequestTitle'>) => Promise<ReturnTypeFrom<'updatePullRequestTitle'>>  = async params => {
  // undefined
    return this.client.updatePullRequestTitle(params as any).promise();
  }

  updateRepositoryDescription: (params: RawParamsFrom<'updateRepositoryDescription'>) => Promise<ReturnTypeFrom<'updateRepositoryDescription'>>  = async params => {
  // undefined
    return this.client.updateRepositoryDescription(params as any).promise();
  }

  updateRepositoryName: (params: RawParamsFrom<'updateRepositoryName'>) => Promise<ReturnTypeFrom<'updateRepositoryName'>>  = async params => {
  // undefined
    return this.client.updateRepositoryName(params as any).promise();
  }
  
  static fromClient(client: AWSCodeCommit): CodeCommit {
    return new CodeCommit(client) as any;
  }
  
  static client(options?: AWSCodeCommit.Types.ClientConfiguration): CodeCommit {
    return new CodeCommit(new AWSCodeCommit(options)) as any;
  }
}  
