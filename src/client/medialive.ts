import { Request, MediaLive as AWSMediaLive } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMediaLive> = AWSMediaLive[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMediaLive> = AWSMediaLive[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMediaLive[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMediaLive, Extras> = AWSMediaLive[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'medialive';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listChannels","listInputDevices","listInputSecurityGroups","listInputs","listMultiplexes","listOfferings","listReservations"];
    
  acceptInputDeviceTransfer: FunctionTypeFrom<'acceptInputDeviceTransfer'>;

  batchDelete: FunctionTypeFrom<'batchDelete'>;

  batchStart: FunctionTypeFrom<'batchStart'>;

  batchStop: FunctionTypeFrom<'batchStop'>;

  batchUpdateSchedule: FunctionTypeFrom<'batchUpdateSchedule'>;

  cancelInputDeviceTransfer: FunctionTypeFrom<'cancelInputDeviceTransfer'>;

  claimDevice: FunctionTypeFrom<'claimDevice'>;

  createChannel: FunctionTypeFrom<'createChannel'>;

  createInput: FunctionTypeFrom<'createInput'>;

  createInputSecurityGroup: FunctionTypeFrom<'createInputSecurityGroup'>;

  createMultiplex: FunctionTypeFrom<'createMultiplex'>;

  createMultiplexProgram: FunctionTypeFrom<'createMultiplexProgram'>;

  createPartnerInput: FunctionTypeFrom<'createPartnerInput'>;

  createTags: FunctionTypeFrom<'createTags'>;

  deleteChannel: FunctionTypeFrom<'deleteChannel'>;

  deleteInput: FunctionTypeFrom<'deleteInput'>;

  deleteInputSecurityGroup: FunctionTypeFrom<'deleteInputSecurityGroup'>;

  deleteMultiplex: FunctionTypeFrom<'deleteMultiplex'>;

  deleteMultiplexProgram: FunctionTypeFrom<'deleteMultiplexProgram'>;

  deleteReservation: FunctionTypeFrom<'deleteReservation'>;

  deleteSchedule: FunctionTypeFrom<'deleteSchedule'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  describeChannel: FunctionTypeFrom<'describeChannel'>;

  describeInput: FunctionTypeFrom<'describeInput'>;

  describeInputDevice: FunctionTypeFrom<'describeInputDevice'>;

  describeInputDeviceThumbnail: FunctionTypeFrom<'describeInputDeviceThumbnail'>;

  describeInputSecurityGroup: FunctionTypeFrom<'describeInputSecurityGroup'>;

  describeMultiplex: FunctionTypeFrom<'describeMultiplex'>;

  describeMultiplexProgram: FunctionTypeFrom<'describeMultiplexProgram'>;

  describeOffering: FunctionTypeFrom<'describeOffering'>;

  describeReservation: FunctionTypeFrom<'describeReservation'>;

  describeSchedule(params: { [K in keyof Omit<ParamsFrom<'describeSchedule', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSchedule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSchedule'>]-?: ReturnTypeFrom<'describeSchedule'>[K]}['ScheduleActions'] }>
  ;

  listChannels(params: { [K in keyof Omit<ParamsFrom<'listChannels', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listChannels'>]-?: ReturnTypeFrom<'listChannels'>[K]}['Channels'] }>
  listChannels(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listChannels'>]-?: ReturnTypeFrom<'listChannels'>[K]}['Channels'] }>;

  listInputDeviceTransfers(params: { [K in keyof Omit<ParamsFrom<'listInputDeviceTransfers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInputDeviceTransfers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInputDeviceTransfers'>]-?: ReturnTypeFrom<'listInputDeviceTransfers'>[K]}['InputDeviceTransfers'] }>
  ;

  listInputDevices(params: { [K in keyof Omit<ParamsFrom<'listInputDevices', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInputDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInputDevices'>]-?: ReturnTypeFrom<'listInputDevices'>[K]}['InputDevices'] }>
  listInputDevices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInputDevices'>]-?: ReturnTypeFrom<'listInputDevices'>[K]}['InputDevices'] }>;

  listInputSecurityGroups(params: { [K in keyof Omit<ParamsFrom<'listInputSecurityGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInputSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInputSecurityGroups'>]-?: ReturnTypeFrom<'listInputSecurityGroups'>[K]}['InputSecurityGroups'] }>
  listInputSecurityGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInputSecurityGroups'>]-?: ReturnTypeFrom<'listInputSecurityGroups'>[K]}['InputSecurityGroups'] }>;

  listInputs(params: { [K in keyof Omit<ParamsFrom<'listInputs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInputs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInputs'>]-?: ReturnTypeFrom<'listInputs'>[K]}['Inputs'] }>
  listInputs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInputs'>]-?: ReturnTypeFrom<'listInputs'>[K]}['Inputs'] }>;

  listMultiplexPrograms(params: { [K in keyof Omit<ParamsFrom<'listMultiplexPrograms', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMultiplexPrograms', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMultiplexPrograms'>]-?: ReturnTypeFrom<'listMultiplexPrograms'>[K]}['MultiplexPrograms'] }>
  ;

  listMultiplexes(params: { [K in keyof Omit<ParamsFrom<'listMultiplexes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMultiplexes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMultiplexes'>]-?: ReturnTypeFrom<'listMultiplexes'>[K]}['Multiplexes'] }>
  listMultiplexes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMultiplexes'>]-?: ReturnTypeFrom<'listMultiplexes'>[K]}['Multiplexes'] }>;

  listOfferings(params: { [K in keyof Omit<ParamsFrom<'listOfferings', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOfferings'>]-?: ReturnTypeFrom<'listOfferings'>[K]}['Offerings'] }>
  listOfferings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOfferings'>]-?: ReturnTypeFrom<'listOfferings'>[K]}['Offerings'] }>;

  listReservations(params: { [K in keyof Omit<ParamsFrom<'listReservations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listReservations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReservations'>]-?: ReturnTypeFrom<'listReservations'>[K]}['Reservations'] }>
  listReservations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReservations'>]-?: ReturnTypeFrom<'listReservations'>[K]}['Reservations'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  purchaseOffering: FunctionTypeFrom<'purchaseOffering'>;

  rebootInputDevice: FunctionTypeFrom<'rebootInputDevice'>;

  rejectInputDeviceTransfer: FunctionTypeFrom<'rejectInputDeviceTransfer'>;

  startChannel: FunctionTypeFrom<'startChannel'>;

  startInputDeviceMaintenanceWindow: FunctionTypeFrom<'startInputDeviceMaintenanceWindow'>;

  startMultiplex: FunctionTypeFrom<'startMultiplex'>;

  stopChannel: FunctionTypeFrom<'stopChannel'>;

  stopMultiplex: FunctionTypeFrom<'stopMultiplex'>;

  transferInputDevice: FunctionTypeFrom<'transferInputDevice'>;

  updateChannel: FunctionTypeFrom<'updateChannel'>;

  updateChannelClass: FunctionTypeFrom<'updateChannelClass'>;

  updateInput: FunctionTypeFrom<'updateInput'>;

  updateInputDevice: FunctionTypeFrom<'updateInputDevice'>;

  updateInputSecurityGroup: FunctionTypeFrom<'updateInputSecurityGroup'>;

  updateMultiplex: FunctionTypeFrom<'updateMultiplex'>;

  updateMultiplexProgram: FunctionTypeFrom<'updateMultiplexProgram'>;

  updateReservation: FunctionTypeFrom<'updateReservation'>
}
 
export class MediaLive implements ClientType {
  private constructor(private readonly client: AWSMediaLive) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'medialive';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listChannels","listInputDevices","listInputSecurityGroups","listInputs","listMultiplexes","listOfferings","listReservations"] as const;
  
  async acceptInputDeviceTransfer(...args: any): Promise<any> {
  // undefined
    return this.client.acceptInputDeviceTransfer(...args).promise()
  }

  async batchDelete(...args: any): Promise<any> {
  // undefined
    return this.client.batchDelete(...args).promise()
  }

  async batchStart(...args: any): Promise<any> {
  // undefined
    return this.client.batchStart(...args).promise()
  }

  async batchStop(...args: any): Promise<any> {
  // undefined
    return this.client.batchStop(...args).promise()
  }

  async batchUpdateSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdateSchedule(...args).promise()
  }

  async cancelInputDeviceTransfer(...args: any): Promise<any> {
  // undefined
    return this.client.cancelInputDeviceTransfer(...args).promise()
  }

  async claimDevice(...args: any): Promise<any> {
  // undefined
    return this.client.claimDevice(...args).promise()
  }

  async createChannel(...args: any): Promise<any> {
  // undefined
    return this.client.createChannel(...args).promise()
  }

  async createInput(...args: any): Promise<any> {
  // undefined
    return this.client.createInput(...args).promise()
  }

  async createInputSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createInputSecurityGroup(...args).promise()
  }

  async createMultiplex(...args: any): Promise<any> {
  // undefined
    return this.client.createMultiplex(...args).promise()
  }

  async createMultiplexProgram(...args: any): Promise<any> {
  // undefined
    return this.client.createMultiplexProgram(...args).promise()
  }

  async createPartnerInput(...args: any): Promise<any> {
  // undefined
    return this.client.createPartnerInput(...args).promise()
  }

  async createTags(...args: any): Promise<any> {
  // undefined
    return this.client.createTags(...args).promise()
  }

  async deleteChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannel(...args).promise()
  }

  async deleteInput(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInput(...args).promise()
  }

  async deleteInputSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInputSecurityGroup(...args).promise()
  }

  async deleteMultiplex(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMultiplex(...args).promise()
  }

  async deleteMultiplexProgram(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMultiplexProgram(...args).promise()
  }

  async deleteReservation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReservation(...args).promise()
  }

  async deleteSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSchedule(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async describeChannel(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannel(...args).promise()
  }

  async describeInput(...args: any): Promise<any> {
  // undefined
    return this.client.describeInput(...args).promise()
  }

  async describeInputDevice(...args: any): Promise<any> {
  // undefined
    return this.client.describeInputDevice(...args).promise()
  }

  async describeInputDeviceThumbnail(...args: any): Promise<any> {
  // undefined
    return this.client.describeInputDeviceThumbnail(...args).promise()
  }

  async describeInputSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeInputSecurityGroup(...args).promise()
  }

  async describeMultiplex(...args: any): Promise<any> {
  // undefined
    return this.client.describeMultiplex(...args).promise()
  }

  async describeMultiplexProgram(...args: any): Promise<any> {
  // undefined
    return this.client.describeMultiplexProgram(...args).promise()
  }

  async describeOffering(...args: any): Promise<any> {
  // undefined
    return this.client.describeOffering(...args).promise()
  }

  async describeReservation(...args: any): Promise<any> {
  // undefined
    return this.client.describeReservation(...args).promise()
  }

  async describeSchedule(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduleActions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSchedule(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScheduleActions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listChannels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Channels"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listChannels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Channels ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInputDeviceTransfers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InputDeviceTransfers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInputDeviceTransfers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InputDeviceTransfers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInputDevices(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InputDevices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInputDevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InputDevices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInputSecurityGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InputSecurityGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInputSecurityGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InputSecurityGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInputs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Inputs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInputs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Inputs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMultiplexPrograms(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MultiplexPrograms"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMultiplexPrograms(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.MultiplexPrograms ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMultiplexes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Multiplexes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMultiplexes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Multiplexes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOfferings(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Offerings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Offerings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReservations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Reservations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listReservations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Reservations ?? [];
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

  async purchaseOffering(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseOffering(...args).promise()
  }

  async rebootInputDevice(...args: any): Promise<any> {
  // undefined
    return this.client.rebootInputDevice(...args).promise()
  }

  async rejectInputDeviceTransfer(...args: any): Promise<any> {
  // undefined
    return this.client.rejectInputDeviceTransfer(...args).promise()
  }

  async startChannel(...args: any): Promise<any> {
  // undefined
    return this.client.startChannel(...args).promise()
  }

  async startInputDeviceMaintenanceWindow(...args: any): Promise<any> {
  // undefined
    return this.client.startInputDeviceMaintenanceWindow(...args).promise()
  }

  async startMultiplex(...args: any): Promise<any> {
  // undefined
    return this.client.startMultiplex(...args).promise()
  }

  async stopChannel(...args: any): Promise<any> {
  // undefined
    return this.client.stopChannel(...args).promise()
  }

  async stopMultiplex(...args: any): Promise<any> {
  // undefined
    return this.client.stopMultiplex(...args).promise()
  }

  async transferInputDevice(...args: any): Promise<any> {
  // undefined
    return this.client.transferInputDevice(...args).promise()
  }

  async updateChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannel(...args).promise()
  }

  async updateChannelClass(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannelClass(...args).promise()
  }

  async updateInput(...args: any): Promise<any> {
  // undefined
    return this.client.updateInput(...args).promise()
  }

  async updateInputDevice(...args: any): Promise<any> {
  // undefined
    return this.client.updateInputDevice(...args).promise()
  }

  async updateInputSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateInputSecurityGroup(...args).promise()
  }

  async updateMultiplex(...args: any): Promise<any> {
  // undefined
    return this.client.updateMultiplex(...args).promise()
  }

  async updateMultiplexProgram(...args: any): Promise<any> {
  // undefined
    return this.client.updateMultiplexProgram(...args).promise()
  }

  async updateReservation(...args: any): Promise<any> {
  // undefined
    return this.client.updateReservation(...args).promise()
  }
  
  static fromClient(client: AWSMediaLive): ClientType {
    return new MediaLive(client) as any;
  }
  
  static client(options?: AWSMediaLive.Types.ClientConfiguration): ClientType {
    return new MediaLive(new AWSMediaLive(options)) as any;
  }
}  
