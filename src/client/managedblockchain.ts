import { Request, ManagedBlockchain as AWSManagedBlockchain } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSManagedBlockchain> = AWSManagedBlockchain[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSManagedBlockchain> = AWSManagedBlockchain[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSManagedBlockchain[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSManagedBlockchain, Extras> = AWSManagedBlockchain[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSManagedBlockchain> = AWSManagedBlockchain[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ManagedBlockchain {
  private constructor(private readonly client: AWSManagedBlockchain) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'managedblockchain' as const;
  public readonly global = false as const;
  public readonly category = 'Blockchain' as const;
  public readonly topLevelCalls = ["listAccessors","listInvitations","listNetworks"] as const;
  
  createAccessor: (params: RawParamsFrom<'createAccessor'>) => Promise<ReturnTypeFrom<'createAccessor'>>  = async params => {
  // undefined
    return this.client.createAccessor(params as any).promise();
  }

  createMember: (params: RawParamsFrom<'createMember'>) => Promise<ReturnTypeFrom<'createMember'>>  = async params => {
  // undefined
    return this.client.createMember(params as any).promise();
  }

  createNetwork: (params: RawParamsFrom<'createNetwork'>) => Promise<ReturnTypeFrom<'createNetwork'>>  = async params => {
  // undefined
    return this.client.createNetwork(params as any).promise();
  }

  createNode: (params: RawParamsFrom<'createNode'>) => Promise<ReturnTypeFrom<'createNode'>>  = async params => {
  // undefined
    return this.client.createNode(params as any).promise();
  }

  createProposal: (params: RawParamsFrom<'createProposal'>) => Promise<ReturnTypeFrom<'createProposal'>>  = async params => {
  // undefined
    return this.client.createProposal(params as any).promise();
  }

  deleteAccessor: (params: RawParamsFrom<'deleteAccessor'>) => Promise<ReturnTypeFrom<'deleteAccessor'>>  = async params => {
  // undefined
    return this.client.deleteAccessor(params as any).promise();
  }

  deleteMember: (params: RawParamsFrom<'deleteMember'>) => Promise<ReturnTypeFrom<'deleteMember'>>  = async params => {
  // undefined
    return this.client.deleteMember(params as any).promise();
  }

  deleteNode: (params: RawParamsFrom<'deleteNode'>) => Promise<ReturnTypeFrom<'deleteNode'>>  = async params => {
  // undefined
    return this.client.deleteNode(params as any).promise();
  }

  getAccessor: (params: RawParamsFrom<'getAccessor'>) => Promise<ReturnTypeFrom<'getAccessor'>>  = async params => {
  // undefined
    return this.client.getAccessor(params as any).promise();
  }

  getMember: (params: RawParamsFrom<'getMember'>) => Promise<ReturnTypeFrom<'getMember'>>  = async params => {
  // undefined
    return this.client.getMember(params as any).promise();
  }

  getNetwork: (params: RawParamsFrom<'getNetwork'>) => Promise<ReturnTypeFrom<'getNetwork'>>  = async params => {
  // undefined
    return this.client.getNetwork(params as any).promise();
  }

  getNode: (params: RawParamsFrom<'getNode'>) => Promise<ReturnTypeFrom<'getNode'>>  = async params => {
  // undefined
    return this.client.getNode(params as any).promise();
  }

  getProposal: (params: RawParamsFrom<'getProposal'>) => Promise<ReturnTypeFrom<'getProposal'>>  = async params => {
  // undefined
    return this.client.getProposal(params as any).promise();
  }

  async listAccessors(params: { [K in keyof ParamsFrom<'listAccessors', { next?: string, limit?: number }>]: ParamsFrom<'listAccessors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccessors'>]-?: ReturnTypeFrom<'listAccessors'>[K]}['Accessors'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Accessors"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccessors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAccessors' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Accessors ?? []) ? (result.Accessors ?? []) : [result.Accessors]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listInvitations: (params: RawParamsFrom<'listInvitations'>) => Promise<ReturnTypeFrom<'listInvitations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInvitations(params as any).promise();
  }

  listMembers: (params: RawParamsFrom<'listMembers'>) => Promise<ReturnTypeFrom<'listMembers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMembers(params as any).promise();
  }

  listNetworks: (params: RawParamsFrom<'listNetworks'>) => Promise<ReturnTypeFrom<'listNetworks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNetworks(params as any).promise();
  }

  listNodes: (params: RawParamsFrom<'listNodes'>) => Promise<ReturnTypeFrom<'listNodes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNodes(params as any).promise();
  }

  listProposalVotes: (params: RawParamsFrom<'listProposalVotes'>) => Promise<ReturnTypeFrom<'listProposalVotes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProposalVotes(params as any).promise();
  }

  listProposals: (params: RawParamsFrom<'listProposals'>) => Promise<ReturnTypeFrom<'listProposals'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProposals(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  rejectInvitation: (params: RawParamsFrom<'rejectInvitation'>) => Promise<ReturnTypeFrom<'rejectInvitation'>>  = async params => {
  // undefined
    return this.client.rejectInvitation(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateMember: (params: RawParamsFrom<'updateMember'>) => Promise<ReturnTypeFrom<'updateMember'>>  = async params => {
  // undefined
    return this.client.updateMember(params as any).promise();
  }

  updateNode: (params: RawParamsFrom<'updateNode'>) => Promise<ReturnTypeFrom<'updateNode'>>  = async params => {
  // undefined
    return this.client.updateNode(params as any).promise();
  }

  voteOnProposal: (params: RawParamsFrom<'voteOnProposal'>) => Promise<ReturnTypeFrom<'voteOnProposal'>>  = async params => {
  // undefined
    return this.client.voteOnProposal(params as any).promise();
  }
  
  static fromClient(client: AWSManagedBlockchain): ManagedBlockchain {
    return new ManagedBlockchain(client) as any;
  }
  
  static client(options?: AWSManagedBlockchain.Types.ClientConfiguration): ManagedBlockchain {
    return new ManagedBlockchain(new AWSManagedBlockchain(options)) as any;
  }
}  
