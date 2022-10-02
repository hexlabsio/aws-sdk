import { Request, Nimble as AWSNimble } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSNimble> = AWSNimble[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSNimble> = AWSNimble[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSNimble[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSNimble, Extras> = AWSNimble[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'nimble';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listEulas","listStudios"];
    
  acceptEulas: FunctionTypeFrom<'acceptEulas'>;

  createLaunchProfile: FunctionTypeFrom<'createLaunchProfile'>;

  createStreamingImage: FunctionTypeFrom<'createStreamingImage'>;

  createStreamingSession: FunctionTypeFrom<'createStreamingSession'>;

  createStreamingSessionStream: FunctionTypeFrom<'createStreamingSessionStream'>;

  createStudio: FunctionTypeFrom<'createStudio'>;

  createStudioComponent: FunctionTypeFrom<'createStudioComponent'>;

  deleteLaunchProfile: FunctionTypeFrom<'deleteLaunchProfile'>;

  deleteLaunchProfileMember: FunctionTypeFrom<'deleteLaunchProfileMember'>;

  deleteStreamingImage: FunctionTypeFrom<'deleteStreamingImage'>;

  deleteStreamingSession: FunctionTypeFrom<'deleteStreamingSession'>;

  deleteStudio: FunctionTypeFrom<'deleteStudio'>;

  deleteStudioComponent: FunctionTypeFrom<'deleteStudioComponent'>;

  deleteStudioMember: FunctionTypeFrom<'deleteStudioMember'>;

  getEula: FunctionTypeFrom<'getEula'>;

  getLaunchProfile: FunctionTypeFrom<'getLaunchProfile'>;

  getLaunchProfileDetails: FunctionTypeFrom<'getLaunchProfileDetails'>;

  getLaunchProfileInitialization: FunctionTypeFrom<'getLaunchProfileInitialization'>;

  getLaunchProfileMember: FunctionTypeFrom<'getLaunchProfileMember'>;

  getStreamingImage: FunctionTypeFrom<'getStreamingImage'>;

  getStreamingSession: FunctionTypeFrom<'getStreamingSession'>;

  getStreamingSessionStream: FunctionTypeFrom<'getStreamingSessionStream'>;

  getStudio: FunctionTypeFrom<'getStudio'>;

  getStudioComponent: FunctionTypeFrom<'getStudioComponent'>;

  getStudioMember: FunctionTypeFrom<'getStudioMember'>;

  listEulaAcceptances(params: { [K in keyof Omit<ParamsFrom<'listEulaAcceptances', { next?: string }>, 'nextToken'>]: ParamsFrom<'listEulaAcceptances', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEulaAcceptances'>]-?: ReturnTypeFrom<'listEulaAcceptances'>[K]}['eulaAcceptances'] }>
  ;

  listEulas(params: { [K in keyof Omit<ParamsFrom<'listEulas', { next?: string }>, 'nextToken'>]: ParamsFrom<'listEulas', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEulas'>]-?: ReturnTypeFrom<'listEulas'>[K]}['eulas'] }>
  listEulas(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEulas'>]-?: ReturnTypeFrom<'listEulas'>[K]}['eulas'] }>;

  listLaunchProfileMembers(params: { [K in keyof Omit<ParamsFrom<'listLaunchProfileMembers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listLaunchProfileMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLaunchProfileMembers'>]-?: ReturnTypeFrom<'listLaunchProfileMembers'>[K]}['members'] }>
  ;

  listLaunchProfiles(params: { [K in keyof Omit<ParamsFrom<'listLaunchProfiles', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listLaunchProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLaunchProfiles'>]-?: ReturnTypeFrom<'listLaunchProfiles'>[K]}['launchProfiles'] }>
  ;

  listStreamingImages(params: { [K in keyof Omit<ParamsFrom<'listStreamingImages', { next?: string }>, 'nextToken'>]: ParamsFrom<'listStreamingImages', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreamingImages'>]-?: ReturnTypeFrom<'listStreamingImages'>[K]}['streamingImages'] }>
  ;

  listStreamingSessions(params: { [K in keyof Omit<ParamsFrom<'listStreamingSessions', { next?: string }>, 'nextToken'>]: ParamsFrom<'listStreamingSessions', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreamingSessions'>]-?: ReturnTypeFrom<'listStreamingSessions'>[K]}['sessions'] }>
  ;

  listStudioComponents(params: { [K in keyof Omit<ParamsFrom<'listStudioComponents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listStudioComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudioComponents'>]-?: ReturnTypeFrom<'listStudioComponents'>[K]}['studioComponents'] }>
  ;

  listStudioMembers(params: { [K in keyof Omit<ParamsFrom<'listStudioMembers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listStudioMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudioMembers'>]-?: ReturnTypeFrom<'listStudioMembers'>[K]}['members'] }>
  ;

  listStudios(params: { [K in keyof Omit<ParamsFrom<'listStudios', { next?: string }>, 'nextToken'>]: ParamsFrom<'listStudios', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudios'>]-?: ReturnTypeFrom<'listStudios'>[K]}['studios'] }>
  listStudios(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudios'>]-?: ReturnTypeFrom<'listStudios'>[K]}['studios'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putLaunchProfileMembers: FunctionTypeFrom<'putLaunchProfileMembers'>;

  putStudioMembers: FunctionTypeFrom<'putStudioMembers'>;

  startStreamingSession: FunctionTypeFrom<'startStreamingSession'>;

  startStudioSSOConfigurationRepair: FunctionTypeFrom<'startStudioSSOConfigurationRepair'>;

  stopStreamingSession: FunctionTypeFrom<'stopStreamingSession'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateLaunchProfile: FunctionTypeFrom<'updateLaunchProfile'>;

  updateLaunchProfileMember: FunctionTypeFrom<'updateLaunchProfileMember'>;

  updateStreamingImage: FunctionTypeFrom<'updateStreamingImage'>;

  updateStudio: FunctionTypeFrom<'updateStudio'>;

  updateStudioComponent: FunctionTypeFrom<'updateStudioComponent'>
}
 
export class Nimble implements ClientType {
  private constructor(private readonly client: AWSNimble) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'nimble';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listEulas","listStudios"] as const;
  
  async acceptEulas(...args: any): Promise<any> {
  // undefined
    return this.client.acceptEulas(...args).promise()
  }

  async createLaunchProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createLaunchProfile(...args).promise()
  }

  async createStreamingImage(...args: any): Promise<any> {
  // undefined
    return this.client.createStreamingImage(...args).promise()
  }

  async createStreamingSession(...args: any): Promise<any> {
  // undefined
    return this.client.createStreamingSession(...args).promise()
  }

  async createStreamingSessionStream(...args: any): Promise<any> {
  // undefined
    return this.client.createStreamingSessionStream(...args).promise()
  }

  async createStudio(...args: any): Promise<any> {
  // undefined
    return this.client.createStudio(...args).promise()
  }

  async createStudioComponent(...args: any): Promise<any> {
  // undefined
    return this.client.createStudioComponent(...args).promise()
  }

  async deleteLaunchProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLaunchProfile(...args).promise()
  }

  async deleteLaunchProfileMember(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLaunchProfileMember(...args).promise()
  }

  async deleteStreamingImage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStreamingImage(...args).promise()
  }

  async deleteStreamingSession(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStreamingSession(...args).promise()
  }

  async deleteStudio(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStudio(...args).promise()
  }

  async deleteStudioComponent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStudioComponent(...args).promise()
  }

  async deleteStudioMember(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStudioMember(...args).promise()
  }

  async getEula(...args: any): Promise<any> {
  // undefined
    return this.client.getEula(...args).promise()
  }

  async getLaunchProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getLaunchProfile(...args).promise()
  }

  async getLaunchProfileDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getLaunchProfileDetails(...args).promise()
  }

  async getLaunchProfileInitialization(...args: any): Promise<any> {
  // undefined
    return this.client.getLaunchProfileInitialization(...args).promise()
  }

  async getLaunchProfileMember(...args: any): Promise<any> {
  // undefined
    return this.client.getLaunchProfileMember(...args).promise()
  }

  async getStreamingImage(...args: any): Promise<any> {
  // undefined
    return this.client.getStreamingImage(...args).promise()
  }

  async getStreamingSession(...args: any): Promise<any> {
  // undefined
    return this.client.getStreamingSession(...args).promise()
  }

  async getStreamingSessionStream(...args: any): Promise<any> {
  // undefined
    return this.client.getStreamingSessionStream(...args).promise()
  }

  async getStudio(...args: any): Promise<any> {
  // undefined
    return this.client.getStudio(...args).promise()
  }

  async getStudioComponent(...args: any): Promise<any> {
  // undefined
    return this.client.getStudioComponent(...args).promise()
  }

  async getStudioMember(...args: any): Promise<any> {
  // undefined
    return this.client.getStudioMember(...args).promise()
  }

  async listEulaAcceptances(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"eulaAcceptances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listEulaAcceptances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.eulaAcceptances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEulas(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"eulas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listEulas(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.eulas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLaunchProfileMembers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"members"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listLaunchProfileMembers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.members ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLaunchProfiles(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"launchProfiles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listLaunchProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.launchProfiles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStreamingImages(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"streamingImages"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listStreamingImages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.streamingImages ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStreamingSessions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"sessions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listStreamingSessions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.sessions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStudioComponents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"studioComponents"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStudioComponents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.studioComponents ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStudioMembers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"members"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStudioMembers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.members ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStudios(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"studios"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listStudios(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.studios ?? [];
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

  async putLaunchProfileMembers(...args: any): Promise<any> {
  // undefined
    return this.client.putLaunchProfileMembers(...args).promise()
  }

  async putStudioMembers(...args: any): Promise<any> {
  // undefined
    return this.client.putStudioMembers(...args).promise()
  }

  async startStreamingSession(...args: any): Promise<any> {
  // undefined
    return this.client.startStreamingSession(...args).promise()
  }

  async startStudioSSOConfigurationRepair(...args: any): Promise<any> {
  // undefined
    return this.client.startStudioSSOConfigurationRepair(...args).promise()
  }

  async stopStreamingSession(...args: any): Promise<any> {
  // undefined
    return this.client.stopStreamingSession(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateLaunchProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateLaunchProfile(...args).promise()
  }

  async updateLaunchProfileMember(...args: any): Promise<any> {
  // undefined
    return this.client.updateLaunchProfileMember(...args).promise()
  }

  async updateStreamingImage(...args: any): Promise<any> {
  // undefined
    return this.client.updateStreamingImage(...args).promise()
  }

  async updateStudio(...args: any): Promise<any> {
  // undefined
    return this.client.updateStudio(...args).promise()
  }

  async updateStudioComponent(...args: any): Promise<any> {
  // undefined
    return this.client.updateStudioComponent(...args).promise()
  }
  
  static fromClient(client: AWSNimble): ClientType {
    return new Nimble(client) as any;
  }
  
  static client(options?: AWSNimble.Types.ClientConfiguration): ClientType {
    return new Nimble(new AWSNimble(options)) as any;
  }
}  
