import { Request, CodeStar as AWSCodeStar } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeStar> = AWSCodeStar[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeStar> = AWSCodeStar[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeStar[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeStar, Extras> = AWSCodeStar[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codestar';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly [];
    
  associateTeamMember: FunctionTypeFrom<'associateTeamMember'>;

  createProject: FunctionTypeFrom<'createProject'>;

  createUserProfile: FunctionTypeFrom<'createUserProfile'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  deleteUserProfile: FunctionTypeFrom<'deleteUserProfile'>;

  describeProject: FunctionTypeFrom<'describeProject'>;

  describeUserProfile: FunctionTypeFrom<'describeUserProfile'>;

  disassociateTeamMember: FunctionTypeFrom<'disassociateTeamMember'>;

  listProjects: FunctionTypeFrom<'listProjects'>;

  listResources: FunctionTypeFrom<'listResources'>;

  listTagsForProject: FunctionTypeFrom<'listTagsForProject'>;

  listTeamMembers: FunctionTypeFrom<'listTeamMembers'>;

  listUserProfiles: FunctionTypeFrom<'listUserProfiles'>;

  tagProject: FunctionTypeFrom<'tagProject'>;

  untagProject: FunctionTypeFrom<'untagProject'>;

  updateProject: FunctionTypeFrom<'updateProject'>;

  updateTeamMember: FunctionTypeFrom<'updateTeamMember'>;

  updateUserProfile: FunctionTypeFrom<'updateUserProfile'>
}
 
export class CodeStar implements ClientType {
  private constructor(private readonly client: AWSCodeStar) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codestar';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = [] as const;
  
  async associateTeamMember(...args: any): Promise<any> {
  // undefined
    return this.client.associateTeamMember(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async createUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createUserProfile(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async deleteUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserProfile(...args).promise()
  }

  async describeProject(...args: any): Promise<any> {
  // undefined
    return this.client.describeProject(...args).promise()
  }

  async describeUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.describeUserProfile(...args).promise()
  }

  async disassociateTeamMember(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTeamMember(...args).promise()
  }

  async listProjects(...args: any): Promise<any> {
  // undefined
    return this.client.listProjects(...args).promise()
  }

  async listResources(...args: any): Promise<any> {
  // undefined
    return this.client.listResources(...args).promise()
  }

  async listTagsForProject(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForProject(...args).promise()
  }

  async listTeamMembers(...args: any): Promise<any> {
  // undefined
    return this.client.listTeamMembers(...args).promise()
  }

  async listUserProfiles(...args: any): Promise<any> {
  // undefined
    return this.client.listUserProfiles(...args).promise()
  }

  async tagProject(...args: any): Promise<any> {
  // undefined
    return this.client.tagProject(...args).promise()
  }

  async untagProject(...args: any): Promise<any> {
  // undefined
    return this.client.untagProject(...args).promise()
  }

  async updateProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateProject(...args).promise()
  }

  async updateTeamMember(...args: any): Promise<any> {
  // undefined
    return this.client.updateTeamMember(...args).promise()
  }

  async updateUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserProfile(...args).promise()
  }
  
  static fromClient(client: AWSCodeStar): ClientType {
    return new CodeStar(client) as any;
  }
  
  static client(options?: AWSCodeStar.Types.ClientConfiguration): ClientType {
    return new CodeStar(new AWSCodeStar(options)) as any;
  }
}  
