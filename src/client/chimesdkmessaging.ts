import { Request, ChimeSDKMessaging as AWSChimeSDKMessaging } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSChimeSDKMessaging> = AWSChimeSDKMessaging[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSChimeSDKMessaging> = AWSChimeSDKMessaging[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSChimeSDKMessaging[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSChimeSDKMessaging, Extras> = AWSChimeSDKMessaging[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSChimeSDKMessaging> = AWSChimeSDKMessaging[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ChimeSDKMessaging {
  private constructor(private readonly client: AWSChimeSDKMessaging) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'messaging-chime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  associateChannelFlow: (params: RawParamsFrom<'associateChannelFlow'>) => Promise<ReturnTypeFrom<'associateChannelFlow'>>  = async params => {
  // undefined
    return this.client.associateChannelFlow(params as any).promise();
  }

  batchCreateChannelMembership: (params: RawParamsFrom<'batchCreateChannelMembership'>) => Promise<ReturnTypeFrom<'batchCreateChannelMembership'>>  = async params => {
  // undefined
    return this.client.batchCreateChannelMembership(params as any).promise();
  }

  channelFlowCallback: (params: RawParamsFrom<'channelFlowCallback'>) => Promise<ReturnTypeFrom<'channelFlowCallback'>>  = async params => {
  // undefined
    return this.client.channelFlowCallback(params as any).promise();
  }

  createChannel: (params: RawParamsFrom<'createChannel'>) => Promise<ReturnTypeFrom<'createChannel'>>  = async params => {
  // undefined
    return this.client.createChannel(params as any).promise();
  }

  createChannelBan: (params: RawParamsFrom<'createChannelBan'>) => Promise<ReturnTypeFrom<'createChannelBan'>>  = async params => {
  // undefined
    return this.client.createChannelBan(params as any).promise();
  }

  createChannelFlow: (params: RawParamsFrom<'createChannelFlow'>) => Promise<ReturnTypeFrom<'createChannelFlow'>>  = async params => {
  // undefined
    return this.client.createChannelFlow(params as any).promise();
  }

  createChannelMembership: (params: RawParamsFrom<'createChannelMembership'>) => Promise<ReturnTypeFrom<'createChannelMembership'>>  = async params => {
  // undefined
    return this.client.createChannelMembership(params as any).promise();
  }

  createChannelModerator: (params: RawParamsFrom<'createChannelModerator'>) => Promise<ReturnTypeFrom<'createChannelModerator'>>  = async params => {
  // undefined
    return this.client.createChannelModerator(params as any).promise();
  }

  deleteChannel: (params: RawParamsFrom<'deleteChannel'>) => Promise<ReturnTypeFrom<'deleteChannel'>>  = async params => {
  // undefined
    return this.client.deleteChannel(params as any).promise();
  }

  deleteChannelBan: (params: RawParamsFrom<'deleteChannelBan'>) => Promise<ReturnTypeFrom<'deleteChannelBan'>>  = async params => {
  // undefined
    return this.client.deleteChannelBan(params as any).promise();
  }

  deleteChannelFlow: (params: RawParamsFrom<'deleteChannelFlow'>) => Promise<ReturnTypeFrom<'deleteChannelFlow'>>  = async params => {
  // undefined
    return this.client.deleteChannelFlow(params as any).promise();
  }

  deleteChannelMembership: (params: RawParamsFrom<'deleteChannelMembership'>) => Promise<ReturnTypeFrom<'deleteChannelMembership'>>  = async params => {
  // undefined
    return this.client.deleteChannelMembership(params as any).promise();
  }

  deleteChannelMessage: (params: RawParamsFrom<'deleteChannelMessage'>) => Promise<ReturnTypeFrom<'deleteChannelMessage'>>  = async params => {
  // undefined
    return this.client.deleteChannelMessage(params as any).promise();
  }

  deleteChannelModerator: (params: RawParamsFrom<'deleteChannelModerator'>) => Promise<ReturnTypeFrom<'deleteChannelModerator'>>  = async params => {
  // undefined
    return this.client.deleteChannelModerator(params as any).promise();
  }

  describeChannel: (params: RawParamsFrom<'describeChannel'>) => Promise<ReturnTypeFrom<'describeChannel'>>  = async params => {
  // undefined
    return this.client.describeChannel(params as any).promise();
  }

  describeChannelBan: (params: RawParamsFrom<'describeChannelBan'>) => Promise<ReturnTypeFrom<'describeChannelBan'>>  = async params => {
  // undefined
    return this.client.describeChannelBan(params as any).promise();
  }

  describeChannelFlow: (params: RawParamsFrom<'describeChannelFlow'>) => Promise<ReturnTypeFrom<'describeChannelFlow'>>  = async params => {
  // undefined
    return this.client.describeChannelFlow(params as any).promise();
  }

  describeChannelMembership: (params: RawParamsFrom<'describeChannelMembership'>) => Promise<ReturnTypeFrom<'describeChannelMembership'>>  = async params => {
  // undefined
    return this.client.describeChannelMembership(params as any).promise();
  }

  describeChannelMembershipForAppInstanceUser: (params: RawParamsFrom<'describeChannelMembershipForAppInstanceUser'>) => Promise<ReturnTypeFrom<'describeChannelMembershipForAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.describeChannelMembershipForAppInstanceUser(params as any).promise();
  }

  describeChannelModeratedByAppInstanceUser: (params: RawParamsFrom<'describeChannelModeratedByAppInstanceUser'>) => Promise<ReturnTypeFrom<'describeChannelModeratedByAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.describeChannelModeratedByAppInstanceUser(params as any).promise();
  }

  describeChannelModerator: (params: RawParamsFrom<'describeChannelModerator'>) => Promise<ReturnTypeFrom<'describeChannelModerator'>>  = async params => {
  // undefined
    return this.client.describeChannelModerator(params as any).promise();
  }

  disassociateChannelFlow: (params: RawParamsFrom<'disassociateChannelFlow'>) => Promise<ReturnTypeFrom<'disassociateChannelFlow'>>  = async params => {
  // undefined
    return this.client.disassociateChannelFlow(params as any).promise();
  }

  getChannelMembershipPreferences: (params: RawParamsFrom<'getChannelMembershipPreferences'>) => Promise<ReturnTypeFrom<'getChannelMembershipPreferences'>>  = async params => {
  // undefined
    return this.client.getChannelMembershipPreferences(params as any).promise();
  }

  getChannelMessage: (params: RawParamsFrom<'getChannelMessage'>) => Promise<ReturnTypeFrom<'getChannelMessage'>>  = async params => {
  // undefined
    return this.client.getChannelMessage(params as any).promise();
  }

  getChannelMessageStatus: (params: RawParamsFrom<'getChannelMessageStatus'>) => Promise<ReturnTypeFrom<'getChannelMessageStatus'>>  = async params => {
  // undefined
    return this.client.getChannelMessageStatus(params as any).promise();
  }

  getMessagingSessionEndpoint: (params: RawParamsFrom<'getMessagingSessionEndpoint'>) => Promise<ReturnTypeFrom<'getMessagingSessionEndpoint'>>  = async params => {
  // undefined
    return this.client.getMessagingSessionEndpoint(params as any).promise();
  }

  listChannelBans: (params: RawParamsFrom<'listChannelBans'>) => Promise<ReturnTypeFrom<'listChannelBans'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelBans(params as any).promise();
  }

  listChannelFlows: (params: RawParamsFrom<'listChannelFlows'>) => Promise<ReturnTypeFrom<'listChannelFlows'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelFlows(params as any).promise();
  }

  listChannelMemberships: (params: RawParamsFrom<'listChannelMemberships'>) => Promise<ReturnTypeFrom<'listChannelMemberships'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMemberships(params as any).promise();
  }

  listChannelMembershipsForAppInstanceUser: (params: RawParamsFrom<'listChannelMembershipsForAppInstanceUser'>) => Promise<ReturnTypeFrom<'listChannelMembershipsForAppInstanceUser'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMembershipsForAppInstanceUser(params as any).promise();
  }

  listChannelMessages: (params: RawParamsFrom<'listChannelMessages'>) => Promise<ReturnTypeFrom<'listChannelMessages'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMessages(params as any).promise();
  }

  listChannelModerators: (params: RawParamsFrom<'listChannelModerators'>) => Promise<ReturnTypeFrom<'listChannelModerators'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelModerators(params as any).promise();
  }

  listChannels: (params: RawParamsFrom<'listChannels'>) => Promise<ReturnTypeFrom<'listChannels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannels(params as any).promise();
  }

  listChannelsAssociatedWithChannelFlow: (params: RawParamsFrom<'listChannelsAssociatedWithChannelFlow'>) => Promise<ReturnTypeFrom<'listChannelsAssociatedWithChannelFlow'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelsAssociatedWithChannelFlow(params as any).promise();
  }

  listChannelsModeratedByAppInstanceUser: (params: RawParamsFrom<'listChannelsModeratedByAppInstanceUser'>) => Promise<ReturnTypeFrom<'listChannelsModeratedByAppInstanceUser'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelsModeratedByAppInstanceUser(params as any).promise();
  }

  listSubChannels: (params: RawParamsFrom<'listSubChannels'>) => Promise<ReturnTypeFrom<'listSubChannels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSubChannels(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putChannelMembershipPreferences: (params: RawParamsFrom<'putChannelMembershipPreferences'>) => Promise<ReturnTypeFrom<'putChannelMembershipPreferences'>>  = async params => {
  // undefined
    return this.client.putChannelMembershipPreferences(params as any).promise();
  }

  redactChannelMessage: (params: RawParamsFrom<'redactChannelMessage'>) => Promise<ReturnTypeFrom<'redactChannelMessage'>>  = async params => {
  // undefined
    return this.client.redactChannelMessage(params as any).promise();
  }

  searchChannels: (params: RawParamsFrom<'searchChannels'>) => Promise<ReturnTypeFrom<'searchChannels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchChannels(params as any).promise();
  }

  sendChannelMessage: (params: RawParamsFrom<'sendChannelMessage'>) => Promise<ReturnTypeFrom<'sendChannelMessage'>>  = async params => {
  // undefined
    return this.client.sendChannelMessage(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateChannel: (params: RawParamsFrom<'updateChannel'>) => Promise<ReturnTypeFrom<'updateChannel'>>  = async params => {
  // undefined
    return this.client.updateChannel(params as any).promise();
  }

  updateChannelFlow: (params: RawParamsFrom<'updateChannelFlow'>) => Promise<ReturnTypeFrom<'updateChannelFlow'>>  = async params => {
  // undefined
    return this.client.updateChannelFlow(params as any).promise();
  }

  updateChannelMessage: (params: RawParamsFrom<'updateChannelMessage'>) => Promise<ReturnTypeFrom<'updateChannelMessage'>>  = async params => {
  // undefined
    return this.client.updateChannelMessage(params as any).promise();
  }

  updateChannelReadMarker: (params: RawParamsFrom<'updateChannelReadMarker'>) => Promise<ReturnTypeFrom<'updateChannelReadMarker'>>  = async params => {
  // undefined
    return this.client.updateChannelReadMarker(params as any).promise();
  }
  
  static fromClient(client: AWSChimeSDKMessaging): ChimeSDKMessaging {
    return new ChimeSDKMessaging(client) as any;
  }
  
  static client(options?: AWSChimeSDKMessaging.Types.ClientConfiguration): ChimeSDKMessaging {
    return new ChimeSDKMessaging(new AWSChimeSDKMessaging(options)) as any;
  }
}  
