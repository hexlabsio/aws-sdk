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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSNimble> = AWSNimble[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Nimble {
  private constructor(private readonly client: AWSNimble) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'nimble' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["listEulas","listStudios"] as const;
  
  acceptEulas: (params: RawParamsFrom<'acceptEulas'>) => Promise<ReturnTypeFrom<'acceptEulas'>>  = async params => {
  // undefined
    return this.client.acceptEulas(params as any).promise();
  }

  createLaunchProfile: (params: RawParamsFrom<'createLaunchProfile'>) => Promise<ReturnTypeFrom<'createLaunchProfile'>>  = async params => {
  // undefined
    return this.client.createLaunchProfile(params as any).promise();
  }

  createStreamingImage: (params: RawParamsFrom<'createStreamingImage'>) => Promise<ReturnTypeFrom<'createStreamingImage'>>  = async params => {
  // undefined
    return this.client.createStreamingImage(params as any).promise();
  }

  createStreamingSession: (params: RawParamsFrom<'createStreamingSession'>) => Promise<ReturnTypeFrom<'createStreamingSession'>>  = async params => {
  // undefined
    return this.client.createStreamingSession(params as any).promise();
  }

  createStreamingSessionStream: (params: RawParamsFrom<'createStreamingSessionStream'>) => Promise<ReturnTypeFrom<'createStreamingSessionStream'>>  = async params => {
  // undefined
    return this.client.createStreamingSessionStream(params as any).promise();
  }

  createStudio: (params: RawParamsFrom<'createStudio'>) => Promise<ReturnTypeFrom<'createStudio'>>  = async params => {
  // undefined
    return this.client.createStudio(params as any).promise();
  }

  createStudioComponent: (params: RawParamsFrom<'createStudioComponent'>) => Promise<ReturnTypeFrom<'createStudioComponent'>>  = async params => {
  // undefined
    return this.client.createStudioComponent(params as any).promise();
  }

  deleteLaunchProfile: (params: RawParamsFrom<'deleteLaunchProfile'>) => Promise<ReturnTypeFrom<'deleteLaunchProfile'>>  = async params => {
  // undefined
    return this.client.deleteLaunchProfile(params as any).promise();
  }

  deleteLaunchProfileMember: (params: RawParamsFrom<'deleteLaunchProfileMember'>) => Promise<ReturnTypeFrom<'deleteLaunchProfileMember'>>  = async params => {
  // undefined
    return this.client.deleteLaunchProfileMember(params as any).promise();
  }

  deleteStreamingImage: (params: RawParamsFrom<'deleteStreamingImage'>) => Promise<ReturnTypeFrom<'deleteStreamingImage'>>  = async params => {
  // undefined
    return this.client.deleteStreamingImage(params as any).promise();
  }

  deleteStreamingSession: (params: RawParamsFrom<'deleteStreamingSession'>) => Promise<ReturnTypeFrom<'deleteStreamingSession'>>  = async params => {
  // undefined
    return this.client.deleteStreamingSession(params as any).promise();
  }

  deleteStudio: (params: RawParamsFrom<'deleteStudio'>) => Promise<ReturnTypeFrom<'deleteStudio'>>  = async params => {
  // undefined
    return this.client.deleteStudio(params as any).promise();
  }

  deleteStudioComponent: (params: RawParamsFrom<'deleteStudioComponent'>) => Promise<ReturnTypeFrom<'deleteStudioComponent'>>  = async params => {
  // undefined
    return this.client.deleteStudioComponent(params as any).promise();
  }

  deleteStudioMember: (params: RawParamsFrom<'deleteStudioMember'>) => Promise<ReturnTypeFrom<'deleteStudioMember'>>  = async params => {
  // undefined
    return this.client.deleteStudioMember(params as any).promise();
  }

  getEula: (params: RawParamsFrom<'getEula'>) => Promise<ReturnTypeFrom<'getEula'>>  = async params => {
  // undefined
    return this.client.getEula(params as any).promise();
  }

  getLaunchProfile: (params: RawParamsFrom<'getLaunchProfile'>) => Promise<ReturnTypeFrom<'getLaunchProfile'>>  = async params => {
  // undefined
    return this.client.getLaunchProfile(params as any).promise();
  }

  getLaunchProfileDetails: (params: RawParamsFrom<'getLaunchProfileDetails'>) => Promise<ReturnTypeFrom<'getLaunchProfileDetails'>>  = async params => {
  // undefined
    return this.client.getLaunchProfileDetails(params as any).promise();
  }

  getLaunchProfileInitialization: (params: RawParamsFrom<'getLaunchProfileInitialization'>) => Promise<ReturnTypeFrom<'getLaunchProfileInitialization'>>  = async params => {
  // undefined
    return this.client.getLaunchProfileInitialization(params as any).promise();
  }

  getLaunchProfileMember: (params: RawParamsFrom<'getLaunchProfileMember'>) => Promise<ReturnTypeFrom<'getLaunchProfileMember'>>  = async params => {
  // undefined
    return this.client.getLaunchProfileMember(params as any).promise();
  }

  getStreamingImage: (params: RawParamsFrom<'getStreamingImage'>) => Promise<ReturnTypeFrom<'getStreamingImage'>>  = async params => {
  // undefined
    return this.client.getStreamingImage(params as any).promise();
  }

  getStreamingSession: (params: RawParamsFrom<'getStreamingSession'>) => Promise<ReturnTypeFrom<'getStreamingSession'>>  = async params => {
  // undefined
    return this.client.getStreamingSession(params as any).promise();
  }

  getStreamingSessionStream: (params: RawParamsFrom<'getStreamingSessionStream'>) => Promise<ReturnTypeFrom<'getStreamingSessionStream'>>  = async params => {
  // undefined
    return this.client.getStreamingSessionStream(params as any).promise();
  }

  getStudio: (params: RawParamsFrom<'getStudio'>) => Promise<ReturnTypeFrom<'getStudio'>>  = async params => {
  // undefined
    return this.client.getStudio(params as any).promise();
  }

  getStudioComponent: (params: RawParamsFrom<'getStudioComponent'>) => Promise<ReturnTypeFrom<'getStudioComponent'>>  = async params => {
  // undefined
    return this.client.getStudioComponent(params as any).promise();
  }

  getStudioMember: (params: RawParamsFrom<'getStudioMember'>) => Promise<ReturnTypeFrom<'getStudioMember'>>  = async params => {
  // undefined
    return this.client.getStudioMember(params as any).promise();
  }

  async listEulaAcceptances(params: { [K in keyof ParamsFrom<'listEulaAcceptances', { next?: string }>]: ParamsFrom<'listEulaAcceptances', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEulaAcceptances'>]-?: ReturnTypeFrom<'listEulaAcceptances'>[K]}['eulaAcceptances'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"eulaAcceptances"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listEulaAcceptances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.eulaAcceptances ?? []) ? (result.eulaAcceptances ?? []) : [result.eulaAcceptances]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listEulas(params: { [K in keyof ParamsFrom<'listEulas', { next?: string }>]: ParamsFrom<'listEulas', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEulas'>]-?: ReturnTypeFrom<'listEulas'>[K]}['eulas'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"eulas"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listEulas({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.eulas ?? []) ? (result.eulas ?? []) : [result.eulas]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listLaunchProfileMembers(params: { [K in keyof ParamsFrom<'listLaunchProfileMembers', { next?: string, limit?: number }>]: ParamsFrom<'listLaunchProfileMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLaunchProfileMembers'>]-?: ReturnTypeFrom<'listLaunchProfileMembers'>[K]}['members'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"members"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listLaunchProfileMembers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.members ?? []) ? (result.members ?? []) : [result.members]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listLaunchProfiles(params: { [K in keyof ParamsFrom<'listLaunchProfiles', { next?: string, limit?: number }>]: ParamsFrom<'listLaunchProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLaunchProfiles'>]-?: ReturnTypeFrom<'listLaunchProfiles'>[K]}['launchProfiles'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"launchProfiles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listLaunchProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.launchProfiles ?? []) ? (result.launchProfiles ?? []) : [result.launchProfiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listStreamingImages(params: { [K in keyof ParamsFrom<'listStreamingImages', { next?: string }>]: ParamsFrom<'listStreamingImages', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStreamingImages'>]-?: ReturnTypeFrom<'listStreamingImages'>[K]}['streamingImages'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"streamingImages"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listStreamingImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.streamingImages ?? []) ? (result.streamingImages ?? []) : [result.streamingImages]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listStreamingSessions(params: { [K in keyof ParamsFrom<'listStreamingSessions', { next?: string }>]: ParamsFrom<'listStreamingSessions', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStreamingSessions'>]-?: ReturnTypeFrom<'listStreamingSessions'>[K]}['sessions'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"sessions"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listStreamingSessions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.sessions ?? []) ? (result.sessions ?? []) : [result.sessions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listStudioComponents(params: { [K in keyof ParamsFrom<'listStudioComponents', { next?: string, limit?: number }>]: ParamsFrom<'listStudioComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStudioComponents'>]-?: ReturnTypeFrom<'listStudioComponents'>[K]}['studioComponents'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"studioComponents"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStudioComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.studioComponents ?? []) ? (result.studioComponents ?? []) : [result.studioComponents]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listStudioMembers(params: { [K in keyof ParamsFrom<'listStudioMembers', { next?: string, limit?: number }>]: ParamsFrom<'listStudioMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStudioMembers'>]-?: ReturnTypeFrom<'listStudioMembers'>[K]}['members'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"members"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStudioMembers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.members ?? []) ? (result.members ?? []) : [result.members]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listStudios(params: { [K in keyof ParamsFrom<'listStudios', { next?: string }>]: ParamsFrom<'listStudios', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStudios'>]-?: ReturnTypeFrom<'listStudios'>[K]}['studios'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"studios"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listStudios({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.studios ?? []) ? (result.studios ?? []) : [result.studios]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putLaunchProfileMembers: (params: RawParamsFrom<'putLaunchProfileMembers'>) => Promise<ReturnTypeFrom<'putLaunchProfileMembers'>>  = async params => {
  // undefined
    return this.client.putLaunchProfileMembers(params as any).promise();
  }

  putStudioMembers: (params: RawParamsFrom<'putStudioMembers'>) => Promise<ReturnTypeFrom<'putStudioMembers'>>  = async params => {
  // undefined
    return this.client.putStudioMembers(params as any).promise();
  }

  startStreamingSession: (params: RawParamsFrom<'startStreamingSession'>) => Promise<ReturnTypeFrom<'startStreamingSession'>>  = async params => {
  // undefined
    return this.client.startStreamingSession(params as any).promise();
  }

  startStudioSSOConfigurationRepair: (params: RawParamsFrom<'startStudioSSOConfigurationRepair'>) => Promise<ReturnTypeFrom<'startStudioSSOConfigurationRepair'>>  = async params => {
  // undefined
    return this.client.startStudioSSOConfigurationRepair(params as any).promise();
  }

  stopStreamingSession: (params: RawParamsFrom<'stopStreamingSession'>) => Promise<ReturnTypeFrom<'stopStreamingSession'>>  = async params => {
  // undefined
    return this.client.stopStreamingSession(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateLaunchProfile: (params: RawParamsFrom<'updateLaunchProfile'>) => Promise<ReturnTypeFrom<'updateLaunchProfile'>>  = async params => {
  // undefined
    return this.client.updateLaunchProfile(params as any).promise();
  }

  updateLaunchProfileMember: (params: RawParamsFrom<'updateLaunchProfileMember'>) => Promise<ReturnTypeFrom<'updateLaunchProfileMember'>>  = async params => {
  // undefined
    return this.client.updateLaunchProfileMember(params as any).promise();
  }

  updateStreamingImage: (params: RawParamsFrom<'updateStreamingImage'>) => Promise<ReturnTypeFrom<'updateStreamingImage'>>  = async params => {
  // undefined
    return this.client.updateStreamingImage(params as any).promise();
  }

  updateStudio: (params: RawParamsFrom<'updateStudio'>) => Promise<ReturnTypeFrom<'updateStudio'>>  = async params => {
  // undefined
    return this.client.updateStudio(params as any).promise();
  }

  updateStudioComponent: (params: RawParamsFrom<'updateStudioComponent'>) => Promise<ReturnTypeFrom<'updateStudioComponent'>>  = async params => {
  // undefined
    return this.client.updateStudioComponent(params as any).promise();
  }
  
  static fromClient(client: AWSNimble): Nimble {
    return new Nimble(client) as any;
  }
  
  static client(options?: AWSNimble.Types.ClientConfiguration): Nimble {
    return new Nimble(new AWSNimble(options)) as any;
  }
}  
