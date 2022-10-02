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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'managedblockchain';
    global: false;
    category: 'Blockchain'
    topLevelCalls: readonly ["listInvitations","listNetworks"];
    
  createMember: FunctionTypeFrom<'createMember'>;

  createNetwork: FunctionTypeFrom<'createNetwork'>;

  createNode: FunctionTypeFrom<'createNode'>;

  createProposal: FunctionTypeFrom<'createProposal'>;

  deleteMember: FunctionTypeFrom<'deleteMember'>;

  deleteNode: FunctionTypeFrom<'deleteNode'>;

  getMember: FunctionTypeFrom<'getMember'>;

  getNetwork: FunctionTypeFrom<'getNetwork'>;

  getNode: FunctionTypeFrom<'getNode'>;

  getProposal: FunctionTypeFrom<'getProposal'>;

  listInvitations: FunctionTypeFrom<'listInvitations'>;

  listMembers: FunctionTypeFrom<'listMembers'>;

  listNetworks: FunctionTypeFrom<'listNetworks'>;

  listNodes: FunctionTypeFrom<'listNodes'>;

  listProposalVotes: FunctionTypeFrom<'listProposalVotes'>;

  listProposals: FunctionTypeFrom<'listProposals'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  rejectInvitation: FunctionTypeFrom<'rejectInvitation'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateMember: FunctionTypeFrom<'updateMember'>;

  updateNode: FunctionTypeFrom<'updateNode'>;

  voteOnProposal: FunctionTypeFrom<'voteOnProposal'>
}
 
export class ManagedBlockchain implements ClientType {
  private constructor(private readonly client: AWSManagedBlockchain) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'managedblockchain';
  public readonly global = false;
  public readonly category = 'Blockchain';
  public readonly topLevelCalls = ["listInvitations","listNetworks"] as const;
  
  async createMember(...args: any): Promise<any> {
  // undefined
    return this.client.createMember(...args).promise()
  }

  async createNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.createNetwork(...args).promise()
  }

  async createNode(...args: any): Promise<any> {
  // undefined
    return this.client.createNode(...args).promise()
  }

  async createProposal(...args: any): Promise<any> {
  // undefined
    return this.client.createProposal(...args).promise()
  }

  async deleteMember(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMember(...args).promise()
  }

  async deleteNode(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNode(...args).promise()
  }

  async getMember(...args: any): Promise<any> {
  // undefined
    return this.client.getMember(...args).promise()
  }

  async getNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.getNetwork(...args).promise()
  }

  async getNode(...args: any): Promise<any> {
  // undefined
    return this.client.getNode(...args).promise()
  }

  async getProposal(...args: any): Promise<any> {
  // undefined
    return this.client.getProposal(...args).promise()
  }

  async listInvitations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInvitations(...args).promise()
  }

  async listMembers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMembers(...args).promise()
  }

  async listNetworks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNetworks(...args).promise()
  }

  async listNodes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNodes(...args).promise()
  }

  async listProposalVotes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProposalVotes(...args).promise()
  }

  async listProposals(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProposals(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async rejectInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.rejectInvitation(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateMember(...args: any): Promise<any> {
  // undefined
    return this.client.updateMember(...args).promise()
  }

  async updateNode(...args: any): Promise<any> {
  // undefined
    return this.client.updateNode(...args).promise()
  }

  async voteOnProposal(...args: any): Promise<any> {
  // undefined
    return this.client.voteOnProposal(...args).promise()
  }
  
  static fromClient(client: AWSManagedBlockchain): ClientType {
    return new ManagedBlockchain(client) as any;
  }
  
  static client(options?: AWSManagedBlockchain.Types.ClientConfiguration): ClientType {
    return new ManagedBlockchain(new AWSManagedBlockchain(options)) as any;
  }
}  
