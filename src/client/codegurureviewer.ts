import { Request, CodeGuruReviewer as AWSCodeGuruReviewer } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeGuruReviewer> = AWSCodeGuruReviewer[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeGuruReviewer> = AWSCodeGuruReviewer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeGuruReviewer[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeGuruReviewer, Extras> = AWSCodeGuruReviewer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeGuruReviewer> = AWSCodeGuruReviewer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeGuruReviewer {
  private constructor(private readonly client: AWSCodeGuruReviewer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codeguru-reviewer' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["listRepositoryAssociations"] as const;
  
  associateRepository: (params: RawParamsFrom<'associateRepository'>) => Promise<ReturnTypeFrom<'associateRepository'>>  = async params => {
  // undefined
    return this.client.associateRepository(params as any).promise();
  }

  createCodeReview: (params: RawParamsFrom<'createCodeReview'>) => Promise<ReturnTypeFrom<'createCodeReview'>>  = async params => {
  // undefined
    return this.client.createCodeReview(params as any).promise();
  }

  describeCodeReview: (params: RawParamsFrom<'describeCodeReview'>) => Promise<ReturnTypeFrom<'describeCodeReview'>>  = async params => {
  // undefined
    return this.client.describeCodeReview(params as any).promise();
  }

  describeRecommendationFeedback: (params: RawParamsFrom<'describeRecommendationFeedback'>) => Promise<ReturnTypeFrom<'describeRecommendationFeedback'>>  = async params => {
  // undefined
    return this.client.describeRecommendationFeedback(params as any).promise();
  }

  describeRepositoryAssociation: (params: RawParamsFrom<'describeRepositoryAssociation'>) => Promise<ReturnTypeFrom<'describeRepositoryAssociation'>>  = async params => {
  // undefined
    return this.client.describeRepositoryAssociation(params as any).promise();
  }

  disassociateRepository: (params: RawParamsFrom<'disassociateRepository'>) => Promise<ReturnTypeFrom<'disassociateRepository'>>  = async params => {
  // undefined
    return this.client.disassociateRepository(params as any).promise();
  }

  listCodeReviews: (params: RawParamsFrom<'listCodeReviews'>) => Promise<ReturnTypeFrom<'listCodeReviews'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCodeReviews(params as any).promise();
  }

  listRecommendationFeedback: (params: RawParamsFrom<'listRecommendationFeedback'>) => Promise<ReturnTypeFrom<'listRecommendationFeedback'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRecommendationFeedback(params as any).promise();
  }

  listRecommendations: (params: RawParamsFrom<'listRecommendations'>) => Promise<ReturnTypeFrom<'listRecommendations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRecommendations(params as any).promise();
  }

  async listRepositoryAssociations(params: { [K in keyof ParamsFrom<'listRepositoryAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listRepositoryAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRepositoryAssociations'>]-?: ReturnTypeFrom<'listRepositoryAssociations'>[K]}['RepositoryAssociationSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RepositoryAssociationSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRepositoryAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRepositoryAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RepositoryAssociationSummaries ?? []) ? (result.RepositoryAssociationSummaries ?? []) : [result.RepositoryAssociationSummaries]) as any;
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

  putRecommendationFeedback: (params: RawParamsFrom<'putRecommendationFeedback'>) => Promise<ReturnTypeFrom<'putRecommendationFeedback'>>  = async params => {
  // undefined
    return this.client.putRecommendationFeedback(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSCodeGuruReviewer): CodeGuruReviewer {
    return new CodeGuruReviewer(client) as any;
  }
  
  static client(options?: AWSCodeGuruReviewer.Types.ClientConfiguration): CodeGuruReviewer {
    return new CodeGuruReviewer(new AWSCodeGuruReviewer(options)) as any;
  }
}  
