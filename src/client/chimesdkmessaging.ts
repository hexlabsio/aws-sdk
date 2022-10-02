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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'messaging-chime';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  associateChannelFlow: FunctionTypeFrom<'associateChannelFlow'>;

  batchCreateChannelMembership: FunctionTypeFrom<'batchCreateChannelMembership'>;

  channelFlowCallback: FunctionTypeFrom<'channelFlowCallback'>;

  createChannel: FunctionTypeFrom<'createChannel'>;

  createChannelBan: FunctionTypeFrom<'createChannelBan'>;

  createChannelFlow: FunctionTypeFrom<'createChannelFlow'>;

  createChannelMembership: FunctionTypeFrom<'createChannelMembership'>;

  createChannelModerator: FunctionTypeFrom<'createChannelModerator'>;

  deleteChannel: FunctionTypeFrom<'deleteChannel'>;

  deleteChannelBan: FunctionTypeFrom<'deleteChannelBan'>;

  deleteChannelFlow: FunctionTypeFrom<'deleteChannelFlow'>;

  deleteChannelMembership: FunctionTypeFrom<'deleteChannelMembership'>;

  deleteChannelMessage: FunctionTypeFrom<'deleteChannelMessage'>;

  deleteChannelModerator: FunctionTypeFrom<'deleteChannelModerator'>;

  describeChannel: FunctionTypeFrom<'describeChannel'>;

  describeChannelBan: FunctionTypeFrom<'describeChannelBan'>;

  describeChannelFlow: FunctionTypeFrom<'describeChannelFlow'>;

  describeChannelMembership: FunctionTypeFrom<'describeChannelMembership'>;

  describeChannelMembershipForAppInstanceUser: FunctionTypeFrom<'describeChannelMembershipForAppInstanceUser'>;

  describeChannelModeratedByAppInstanceUser: FunctionTypeFrom<'describeChannelModeratedByAppInstanceUser'>;

  describeChannelModerator: FunctionTypeFrom<'describeChannelModerator'>;

  disassociateChannelFlow: FunctionTypeFrom<'disassociateChannelFlow'>;

  getChannelMembershipPreferences: FunctionTypeFrom<'getChannelMembershipPreferences'>;

  getChannelMessage: FunctionTypeFrom<'getChannelMessage'>;

  getChannelMessageStatus: FunctionTypeFrom<'getChannelMessageStatus'>;

  getMessagingSessionEndpoint: FunctionTypeFrom<'getMessagingSessionEndpoint'>;

  listChannelBans: FunctionTypeFrom<'listChannelBans'>;

  listChannelFlows: FunctionTypeFrom<'listChannelFlows'>;

  listChannelMemberships: FunctionTypeFrom<'listChannelMemberships'>;

  listChannelMembershipsForAppInstanceUser: FunctionTypeFrom<'listChannelMembershipsForAppInstanceUser'>;

  listChannelMessages: FunctionTypeFrom<'listChannelMessages'>;

  listChannelModerators: FunctionTypeFrom<'listChannelModerators'>;

  listChannels: FunctionTypeFrom<'listChannels'>;

  listChannelsAssociatedWithChannelFlow: FunctionTypeFrom<'listChannelsAssociatedWithChannelFlow'>;

  listChannelsModeratedByAppInstanceUser: FunctionTypeFrom<'listChannelsModeratedByAppInstanceUser'>;

  listSubChannels: FunctionTypeFrom<'listSubChannels'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putChannelMembershipPreferences: FunctionTypeFrom<'putChannelMembershipPreferences'>;

  redactChannelMessage: FunctionTypeFrom<'redactChannelMessage'>;

  searchChannels: FunctionTypeFrom<'searchChannels'>;

  sendChannelMessage: FunctionTypeFrom<'sendChannelMessage'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateChannel: FunctionTypeFrom<'updateChannel'>;

  updateChannelFlow: FunctionTypeFrom<'updateChannelFlow'>;

  updateChannelMessage: FunctionTypeFrom<'updateChannelMessage'>;

  updateChannelReadMarker: FunctionTypeFrom<'updateChannelReadMarker'>
}
 
export class ChimeSDKMessaging implements ClientType {
  private constructor(private readonly client: AWSChimeSDKMessaging) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'messaging-chime';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async associateChannelFlow(...args: any): Promise<any> {
  // undefined
    return this.client.associateChannelFlow(...args).promise()
  }

  async batchCreateChannelMembership(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreateChannelMembership(...args).promise()
  }

  async channelFlowCallback(...args: any): Promise<any> {
  // undefined
    return this.client.channelFlowCallback(...args).promise()
  }

  async createChannel(...args: any): Promise<any> {
  // undefined
    return this.client.createChannel(...args).promise()
  }

  async createChannelBan(...args: any): Promise<any> {
  // undefined
    return this.client.createChannelBan(...args).promise()
  }

  async createChannelFlow(...args: any): Promise<any> {
  // undefined
    return this.client.createChannelFlow(...args).promise()
  }

  async createChannelMembership(...args: any): Promise<any> {
  // undefined
    return this.client.createChannelMembership(...args).promise()
  }

  async createChannelModerator(...args: any): Promise<any> {
  // undefined
    return this.client.createChannelModerator(...args).promise()
  }

  async deleteChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannel(...args).promise()
  }

  async deleteChannelBan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelBan(...args).promise()
  }

  async deleteChannelFlow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelFlow(...args).promise()
  }

  async deleteChannelMembership(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelMembership(...args).promise()
  }

  async deleteChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelMessage(...args).promise()
  }

  async deleteChannelModerator(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelModerator(...args).promise()
  }

  async describeChannel(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannel(...args).promise()
  }

  async describeChannelBan(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelBan(...args).promise()
  }

  async describeChannelFlow(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelFlow(...args).promise()
  }

  async describeChannelMembership(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelMembership(...args).promise()
  }

  async describeChannelMembershipForAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelMembershipForAppInstanceUser(...args).promise()
  }

  async describeChannelModeratedByAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelModeratedByAppInstanceUser(...args).promise()
  }

  async describeChannelModerator(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelModerator(...args).promise()
  }

  async disassociateChannelFlow(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateChannelFlow(...args).promise()
  }

  async getChannelMembershipPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.getChannelMembershipPreferences(...args).promise()
  }

  async getChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.getChannelMessage(...args).promise()
  }

  async getChannelMessageStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getChannelMessageStatus(...args).promise()
  }

  async getMessagingSessionEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getMessagingSessionEndpoint(...args).promise()
  }

  async listChannelBans(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelBans(...args).promise()
  }

  async listChannelFlows(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelFlows(...args).promise()
  }

  async listChannelMemberships(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMemberships(...args).promise()
  }

  async listChannelMembershipsForAppInstanceUser(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMembershipsForAppInstanceUser(...args).promise()
  }

  async listChannelMessages(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMessages(...args).promise()
  }

  async listChannelModerators(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelModerators(...args).promise()
  }

  async listChannels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannels(...args).promise()
  }

  async listChannelsAssociatedWithChannelFlow(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelsAssociatedWithChannelFlow(...args).promise()
  }

  async listChannelsModeratedByAppInstanceUser(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelsModeratedByAppInstanceUser(...args).promise()
  }

  async listSubChannels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSubChannels(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putChannelMembershipPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.putChannelMembershipPreferences(...args).promise()
  }

  async redactChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.redactChannelMessage(...args).promise()
  }

  async searchChannels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchChannels(...args).promise()
  }

  async sendChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.sendChannelMessage(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannel(...args).promise()
  }

  async updateChannelFlow(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannelFlow(...args).promise()
  }

  async updateChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannelMessage(...args).promise()
  }

  async updateChannelReadMarker(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannelReadMarker(...args).promise()
  }
  
  static fromClient(client: AWSChimeSDKMessaging): ClientType {
    return new ChimeSDKMessaging(client) as any;
  }
  
  static client(options?: AWSChimeSDKMessaging.Types.ClientConfiguration): ClientType {
    return new ChimeSDKMessaging(new AWSChimeSDKMessaging(options)) as any;
  }
}  
