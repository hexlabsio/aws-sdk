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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeStar> = AWSCodeStar[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeStar {
  private constructor(private readonly client: AWSCodeStar) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codestar' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = [] as const;
  
  associateTeamMember: (params: RawParamsFrom<'associateTeamMember'>) => Promise<ReturnTypeFrom<'associateTeamMember'>>  = async params => {
  // undefined
    return this.client.associateTeamMember(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  createUserProfile: (params: RawParamsFrom<'createUserProfile'>) => Promise<ReturnTypeFrom<'createUserProfile'>>  = async params => {
  // undefined
    return this.client.createUserProfile(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  deleteUserProfile: (params: RawParamsFrom<'deleteUserProfile'>) => Promise<ReturnTypeFrom<'deleteUserProfile'>>  = async params => {
  // undefined
    return this.client.deleteUserProfile(params as any).promise();
  }

  describeProject: (params: RawParamsFrom<'describeProject'>) => Promise<ReturnTypeFrom<'describeProject'>>  = async params => {
  // undefined
    return this.client.describeProject(params as any).promise();
  }

  describeUserProfile: (params: RawParamsFrom<'describeUserProfile'>) => Promise<ReturnTypeFrom<'describeUserProfile'>>  = async params => {
  // undefined
    return this.client.describeUserProfile(params as any).promise();
  }

  disassociateTeamMember: (params: RawParamsFrom<'disassociateTeamMember'>) => Promise<ReturnTypeFrom<'disassociateTeamMember'>>  = async params => {
  // undefined
    return this.client.disassociateTeamMember(params as any).promise();
  }

  listProjects: (params: RawParamsFrom<'listProjects'>) => Promise<ReturnTypeFrom<'listProjects'>>  = async params => {
  // undefined
    return this.client.listProjects(params as any).promise();
  }

  listResources: (params: RawParamsFrom<'listResources'>) => Promise<ReturnTypeFrom<'listResources'>>  = async params => {
  // undefined
    return this.client.listResources(params as any).promise();
  }

  listTagsForProject: (params: RawParamsFrom<'listTagsForProject'>) => Promise<ReturnTypeFrom<'listTagsForProject'>>  = async params => {
  // undefined
    return this.client.listTagsForProject(params as any).promise();
  }

  listTeamMembers: (params: RawParamsFrom<'listTeamMembers'>) => Promise<ReturnTypeFrom<'listTeamMembers'>>  = async params => {
  // undefined
    return this.client.listTeamMembers(params as any).promise();
  }

  listUserProfiles: (params: RawParamsFrom<'listUserProfiles'>) => Promise<ReturnTypeFrom<'listUserProfiles'>>  = async params => {
  // undefined
    return this.client.listUserProfiles(params as any).promise();
  }

  tagProject: (params: RawParamsFrom<'tagProject'>) => Promise<ReturnTypeFrom<'tagProject'>>  = async params => {
  // undefined
    return this.client.tagProject(params as any).promise();
  }

  untagProject: (params: RawParamsFrom<'untagProject'>) => Promise<ReturnTypeFrom<'untagProject'>>  = async params => {
  // undefined
    return this.client.untagProject(params as any).promise();
  }

  updateProject: (params: RawParamsFrom<'updateProject'>) => Promise<ReturnTypeFrom<'updateProject'>>  = async params => {
  // undefined
    return this.client.updateProject(params as any).promise();
  }

  updateTeamMember: (params: RawParamsFrom<'updateTeamMember'>) => Promise<ReturnTypeFrom<'updateTeamMember'>>  = async params => {
  // undefined
    return this.client.updateTeamMember(params as any).promise();
  }

  updateUserProfile: (params: RawParamsFrom<'updateUserProfile'>) => Promise<ReturnTypeFrom<'updateUserProfile'>>  = async params => {
  // undefined
    return this.client.updateUserProfile(params as any).promise();
  }
  
  static fromClient(client: AWSCodeStar): CodeStar {
    return new CodeStar(client) as any;
  }
  
  static client(options?: AWSCodeStar.Types.ClientConfiguration): CodeStar {
    return new CodeStar(new AWSCodeStar(options)) as any;
  }
}  
