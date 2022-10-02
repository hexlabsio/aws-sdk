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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codeguru-reviewer';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["listRepositoryAssociations"];
    
  associateRepository: FunctionTypeFrom<'associateRepository'>;

  createCodeReview: FunctionTypeFrom<'createCodeReview'>;

  describeCodeReview: FunctionTypeFrom<'describeCodeReview'>;

  describeRecommendationFeedback: FunctionTypeFrom<'describeRecommendationFeedback'>;

  describeRepositoryAssociation: FunctionTypeFrom<'describeRepositoryAssociation'>;

  disassociateRepository: FunctionTypeFrom<'disassociateRepository'>;

  listCodeReviews: FunctionTypeFrom<'listCodeReviews'>;

  listRecommendationFeedback: FunctionTypeFrom<'listRecommendationFeedback'>;

  listRecommendations: FunctionTypeFrom<'listRecommendations'>;

  listRepositoryAssociations(params: { [K in keyof Omit<ParamsFrom<'listRepositoryAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRepositoryAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositoryAssociations'>]-?: ReturnTypeFrom<'listRepositoryAssociations'>[K]}['RepositoryAssociationSummaries'] }>
  listRepositoryAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositoryAssociations'>]-?: ReturnTypeFrom<'listRepositoryAssociations'>[K]}['RepositoryAssociationSummaries'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putRecommendationFeedback: FunctionTypeFrom<'putRecommendationFeedback'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class CodeGuruReviewer implements ClientType {
  private constructor(private readonly client: AWSCodeGuruReviewer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codeguru-reviewer';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["listRepositoryAssociations"] as const;
  
  async associateRepository(...args: any): Promise<any> {
  // undefined
    return this.client.associateRepository(...args).promise()
  }

  async createCodeReview(...args: any): Promise<any> {
  // undefined
    return this.client.createCodeReview(...args).promise()
  }

  async describeCodeReview(...args: any): Promise<any> {
  // undefined
    return this.client.describeCodeReview(...args).promise()
  }

  async describeRecommendationFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.describeRecommendationFeedback(...args).promise()
  }

  async describeRepositoryAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.describeRepositoryAssociation(...args).promise()
  }

  async disassociateRepository(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateRepository(...args).promise()
  }

  async listCodeReviews(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCodeReviews(...args).promise()
  }

  async listRecommendationFeedback(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRecommendationFeedback(...args).promise()
  }

  async listRecommendations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRecommendations(...args).promise()
  }

  async listRepositoryAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RepositoryAssociationSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRepositoryAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RepositoryAssociationSummaries ?? [];
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

  async putRecommendationFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.putRecommendationFeedback(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSCodeGuruReviewer): ClientType {
    return new CodeGuruReviewer(client) as any;
  }
  
  static client(options?: AWSCodeGuruReviewer.Types.ClientConfiguration): ClientType {
    return new CodeGuruReviewer(new AWSCodeGuruReviewer(options)) as any;
  }
}  
