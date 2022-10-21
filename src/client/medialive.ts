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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMediaLive> = AWSMediaLive[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MediaLive {
  private constructor(private readonly client: AWSMediaLive) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'medialive' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["listChannels","listInputDevices","listInputSecurityGroups","listInputs","listMultiplexes","listOfferings","listReservations"] as const;
  
  acceptInputDeviceTransfer: (params: RawParamsFrom<'acceptInputDeviceTransfer'>) => Promise<ReturnTypeFrom<'acceptInputDeviceTransfer'>>  = async params => {
  // undefined
    return this.client.acceptInputDeviceTransfer(params as any).promise();
  }

  batchDelete: (params: RawParamsFrom<'batchDelete'>) => Promise<ReturnTypeFrom<'batchDelete'>>  = async params => {
  // undefined
    return this.client.batchDelete(params as any).promise();
  }

  batchStart: (params: RawParamsFrom<'batchStart'>) => Promise<ReturnTypeFrom<'batchStart'>>  = async params => {
  // undefined
    return this.client.batchStart(params as any).promise();
  }

  batchStop: (params: RawParamsFrom<'batchStop'>) => Promise<ReturnTypeFrom<'batchStop'>>  = async params => {
  // undefined
    return this.client.batchStop(params as any).promise();
  }

  batchUpdateSchedule: (params: RawParamsFrom<'batchUpdateSchedule'>) => Promise<ReturnTypeFrom<'batchUpdateSchedule'>>  = async params => {
  // undefined
    return this.client.batchUpdateSchedule(params as any).promise();
  }

  cancelInputDeviceTransfer: (params: RawParamsFrom<'cancelInputDeviceTransfer'>) => Promise<ReturnTypeFrom<'cancelInputDeviceTransfer'>>  = async params => {
  // undefined
    return this.client.cancelInputDeviceTransfer(params as any).promise();
  }

  claimDevice: (params: RawParamsFrom<'claimDevice'>) => Promise<ReturnTypeFrom<'claimDevice'>>  = async params => {
  // undefined
    return this.client.claimDevice(params as any).promise();
  }

  createChannel: (params: RawParamsFrom<'createChannel'>) => Promise<ReturnTypeFrom<'createChannel'>>  = async params => {
  // undefined
    return this.client.createChannel(params as any).promise();
  }

  createInput: (params: RawParamsFrom<'createInput'>) => Promise<ReturnTypeFrom<'createInput'>>  = async params => {
  // undefined
    return this.client.createInput(params as any).promise();
  }

  createInputSecurityGroup: (params: RawParamsFrom<'createInputSecurityGroup'>) => Promise<ReturnTypeFrom<'createInputSecurityGroup'>>  = async params => {
  // undefined
    return this.client.createInputSecurityGroup(params as any).promise();
  }

  createMultiplex: (params: RawParamsFrom<'createMultiplex'>) => Promise<ReturnTypeFrom<'createMultiplex'>>  = async params => {
  // undefined
    return this.client.createMultiplex(params as any).promise();
  }

  createMultiplexProgram: (params: RawParamsFrom<'createMultiplexProgram'>) => Promise<ReturnTypeFrom<'createMultiplexProgram'>>  = async params => {
  // undefined
    return this.client.createMultiplexProgram(params as any).promise();
  }

  createPartnerInput: (params: RawParamsFrom<'createPartnerInput'>) => Promise<ReturnTypeFrom<'createPartnerInput'>>  = async params => {
  // undefined
    return this.client.createPartnerInput(params as any).promise();
  }

  createTags: (params: RawParamsFrom<'createTags'>) => Promise<ReturnTypeFrom<'createTags'>>  = async params => {
  // undefined
    return this.client.createTags(params as any).promise();
  }

  deleteChannel: (params: RawParamsFrom<'deleteChannel'>) => Promise<ReturnTypeFrom<'deleteChannel'>>  = async params => {
  // undefined
    return this.client.deleteChannel(params as any).promise();
  }

  deleteInput: (params: RawParamsFrom<'deleteInput'>) => Promise<ReturnTypeFrom<'deleteInput'>>  = async params => {
  // undefined
    return this.client.deleteInput(params as any).promise();
  }

  deleteInputSecurityGroup: (params: RawParamsFrom<'deleteInputSecurityGroup'>) => Promise<ReturnTypeFrom<'deleteInputSecurityGroup'>>  = async params => {
  // undefined
    return this.client.deleteInputSecurityGroup(params as any).promise();
  }

  deleteMultiplex: (params: RawParamsFrom<'deleteMultiplex'>) => Promise<ReturnTypeFrom<'deleteMultiplex'>>  = async params => {
  // undefined
    return this.client.deleteMultiplex(params as any).promise();
  }

  deleteMultiplexProgram: (params: RawParamsFrom<'deleteMultiplexProgram'>) => Promise<ReturnTypeFrom<'deleteMultiplexProgram'>>  = async params => {
  // undefined
    return this.client.deleteMultiplexProgram(params as any).promise();
  }

  deleteReservation: (params: RawParamsFrom<'deleteReservation'>) => Promise<ReturnTypeFrom<'deleteReservation'>>  = async params => {
  // undefined
    return this.client.deleteReservation(params as any).promise();
  }

  deleteSchedule: (params: RawParamsFrom<'deleteSchedule'>) => Promise<ReturnTypeFrom<'deleteSchedule'>>  = async params => {
  // undefined
    return this.client.deleteSchedule(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  describeChannel: (params: RawParamsFrom<'describeChannel'>) => Promise<ReturnTypeFrom<'describeChannel'>>  = async params => {
  // undefined
    return this.client.describeChannel(params as any).promise();
  }

  describeInput: (params: RawParamsFrom<'describeInput'>) => Promise<ReturnTypeFrom<'describeInput'>>  = async params => {
  // undefined
    return this.client.describeInput(params as any).promise();
  }

  describeInputDevice: (params: RawParamsFrom<'describeInputDevice'>) => Promise<ReturnTypeFrom<'describeInputDevice'>>  = async params => {
  // undefined
    return this.client.describeInputDevice(params as any).promise();
  }

  describeInputDeviceThumbnail: (params: RawParamsFrom<'describeInputDeviceThumbnail'>) => Promise<ReturnTypeFrom<'describeInputDeviceThumbnail'>>  = async params => {
  // undefined
    return this.client.describeInputDeviceThumbnail(params as any).promise();
  }

  describeInputSecurityGroup: (params: RawParamsFrom<'describeInputSecurityGroup'>) => Promise<ReturnTypeFrom<'describeInputSecurityGroup'>>  = async params => {
  // undefined
    return this.client.describeInputSecurityGroup(params as any).promise();
  }

  describeMultiplex: (params: RawParamsFrom<'describeMultiplex'>) => Promise<ReturnTypeFrom<'describeMultiplex'>>  = async params => {
  // undefined
    return this.client.describeMultiplex(params as any).promise();
  }

  describeMultiplexProgram: (params: RawParamsFrom<'describeMultiplexProgram'>) => Promise<ReturnTypeFrom<'describeMultiplexProgram'>>  = async params => {
  // undefined
    return this.client.describeMultiplexProgram(params as any).promise();
  }

  describeOffering: (params: RawParamsFrom<'describeOffering'>) => Promise<ReturnTypeFrom<'describeOffering'>>  = async params => {
  // undefined
    return this.client.describeOffering(params as any).promise();
  }

  describeReservation: (params: RawParamsFrom<'describeReservation'>) => Promise<ReturnTypeFrom<'describeReservation'>>  = async params => {
  // undefined
    return this.client.describeReservation(params as any).promise();
  }

  async describeSchedule(params: { [K in keyof ParamsFrom<'describeSchedule', { next?: string, limit?: number }>]: ParamsFrom<'describeSchedule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSchedule'>]-?: ReturnTypeFrom<'describeSchedule'>[K]}['ScheduleActions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduleActions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSchedule({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSchedule' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ScheduleActions ?? []) ? (result.ScheduleActions ?? []) : [result.ScheduleActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listChannels(params: { [K in keyof ParamsFrom<'listChannels', { next?: string, limit?: number }>]: ParamsFrom<'listChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listChannels'>]-?: ReturnTypeFrom<'listChannels'>[K]}['Channels'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Channels"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listChannels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listChannels' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Channels ?? []) ? (result.Channels ?? []) : [result.Channels]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInputDeviceTransfers(params: { [K in keyof ParamsFrom<'listInputDeviceTransfers', { next?: string, limit?: number }>]: ParamsFrom<'listInputDeviceTransfers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInputDeviceTransfers'>]-?: ReturnTypeFrom<'listInputDeviceTransfers'>[K]}['InputDeviceTransfers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InputDeviceTransfers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInputDeviceTransfers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listInputDeviceTransfers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InputDeviceTransfers ?? []) ? (result.InputDeviceTransfers ?? []) : [result.InputDeviceTransfers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInputDevices(params: { [K in keyof ParamsFrom<'listInputDevices', { next?: string, limit?: number }>]: ParamsFrom<'listInputDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInputDevices'>]-?: ReturnTypeFrom<'listInputDevices'>[K]}['InputDevices'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InputDevices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInputDevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listInputDevices' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InputDevices ?? []) ? (result.InputDevices ?? []) : [result.InputDevices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInputSecurityGroups(params: { [K in keyof ParamsFrom<'listInputSecurityGroups', { next?: string, limit?: number }>]: ParamsFrom<'listInputSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInputSecurityGroups'>]-?: ReturnTypeFrom<'listInputSecurityGroups'>[K]}['InputSecurityGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InputSecurityGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInputSecurityGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listInputSecurityGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InputSecurityGroups ?? []) ? (result.InputSecurityGroups ?? []) : [result.InputSecurityGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInputs(params: { [K in keyof ParamsFrom<'listInputs', { next?: string, limit?: number }>]: ParamsFrom<'listInputs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInputs'>]-?: ReturnTypeFrom<'listInputs'>[K]}['Inputs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Inputs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInputs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listInputs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Inputs ?? []) ? (result.Inputs ?? []) : [result.Inputs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMultiplexPrograms(params: { [K in keyof ParamsFrom<'listMultiplexPrograms', { next?: string, limit?: number }>]: ParamsFrom<'listMultiplexPrograms', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMultiplexPrograms'>]-?: ReturnTypeFrom<'listMultiplexPrograms'>[K]}['MultiplexPrograms'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MultiplexPrograms"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMultiplexPrograms({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listMultiplexPrograms' })).toString('base64') : undefined;
    const member = (Array.isArray(result.MultiplexPrograms ?? []) ? (result.MultiplexPrograms ?? []) : [result.MultiplexPrograms]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMultiplexes(params: { [K in keyof ParamsFrom<'listMultiplexes', { next?: string, limit?: number }>]: ParamsFrom<'listMultiplexes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMultiplexes'>]-?: ReturnTypeFrom<'listMultiplexes'>[K]}['Multiplexes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Multiplexes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMultiplexes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listMultiplexes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Multiplexes ?? []) ? (result.Multiplexes ?? []) : [result.Multiplexes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOfferings(params: { [K in keyof ParamsFrom<'listOfferings', { next?: string, limit?: number }>]: ParamsFrom<'listOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOfferings'>]-?: ReturnTypeFrom<'listOfferings'>[K]}['Offerings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Offerings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listOfferings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Offerings ?? []) ? (result.Offerings ?? []) : [result.Offerings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReservations(params: { [K in keyof ParamsFrom<'listReservations', { next?: string, limit?: number }>]: ParamsFrom<'listReservations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReservations'>]-?: ReturnTypeFrom<'listReservations'>[K]}['Reservations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Reservations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listReservations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listReservations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Reservations ?? []) ? (result.Reservations ?? []) : [result.Reservations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  purchaseOffering: (params: RawParamsFrom<'purchaseOffering'>) => Promise<ReturnTypeFrom<'purchaseOffering'>>  = async params => {
  // undefined
    return this.client.purchaseOffering(params as any).promise();
  }

  rebootInputDevice: (params: RawParamsFrom<'rebootInputDevice'>) => Promise<ReturnTypeFrom<'rebootInputDevice'>>  = async params => {
  // undefined
    return this.client.rebootInputDevice(params as any).promise();
  }

  rejectInputDeviceTransfer: (params: RawParamsFrom<'rejectInputDeviceTransfer'>) => Promise<ReturnTypeFrom<'rejectInputDeviceTransfer'>>  = async params => {
  // undefined
    return this.client.rejectInputDeviceTransfer(params as any).promise();
  }

  startChannel: (params: RawParamsFrom<'startChannel'>) => Promise<ReturnTypeFrom<'startChannel'>>  = async params => {
  // undefined
    return this.client.startChannel(params as any).promise();
  }

  startInputDeviceMaintenanceWindow: (params: RawParamsFrom<'startInputDeviceMaintenanceWindow'>) => Promise<ReturnTypeFrom<'startInputDeviceMaintenanceWindow'>>  = async params => {
  // undefined
    return this.client.startInputDeviceMaintenanceWindow(params as any).promise();
  }

  startMultiplex: (params: RawParamsFrom<'startMultiplex'>) => Promise<ReturnTypeFrom<'startMultiplex'>>  = async params => {
  // undefined
    return this.client.startMultiplex(params as any).promise();
  }

  stopChannel: (params: RawParamsFrom<'stopChannel'>) => Promise<ReturnTypeFrom<'stopChannel'>>  = async params => {
  // undefined
    return this.client.stopChannel(params as any).promise();
  }

  stopMultiplex: (params: RawParamsFrom<'stopMultiplex'>) => Promise<ReturnTypeFrom<'stopMultiplex'>>  = async params => {
  // undefined
    return this.client.stopMultiplex(params as any).promise();
  }

  transferInputDevice: (params: RawParamsFrom<'transferInputDevice'>) => Promise<ReturnTypeFrom<'transferInputDevice'>>  = async params => {
  // undefined
    return this.client.transferInputDevice(params as any).promise();
  }

  updateChannel: (params: RawParamsFrom<'updateChannel'>) => Promise<ReturnTypeFrom<'updateChannel'>>  = async params => {
  // undefined
    return this.client.updateChannel(params as any).promise();
  }

  updateChannelClass: (params: RawParamsFrom<'updateChannelClass'>) => Promise<ReturnTypeFrom<'updateChannelClass'>>  = async params => {
  // undefined
    return this.client.updateChannelClass(params as any).promise();
  }

  updateInput: (params: RawParamsFrom<'updateInput'>) => Promise<ReturnTypeFrom<'updateInput'>>  = async params => {
  // undefined
    return this.client.updateInput(params as any).promise();
  }

  updateInputDevice: (params: RawParamsFrom<'updateInputDevice'>) => Promise<ReturnTypeFrom<'updateInputDevice'>>  = async params => {
  // undefined
    return this.client.updateInputDevice(params as any).promise();
  }

  updateInputSecurityGroup: (params: RawParamsFrom<'updateInputSecurityGroup'>) => Promise<ReturnTypeFrom<'updateInputSecurityGroup'>>  = async params => {
  // undefined
    return this.client.updateInputSecurityGroup(params as any).promise();
  }

  updateMultiplex: (params: RawParamsFrom<'updateMultiplex'>) => Promise<ReturnTypeFrom<'updateMultiplex'>>  = async params => {
  // undefined
    return this.client.updateMultiplex(params as any).promise();
  }

  updateMultiplexProgram: (params: RawParamsFrom<'updateMultiplexProgram'>) => Promise<ReturnTypeFrom<'updateMultiplexProgram'>>  = async params => {
  // undefined
    return this.client.updateMultiplexProgram(params as any).promise();
  }

  updateReservation: (params: RawParamsFrom<'updateReservation'>) => Promise<ReturnTypeFrom<'updateReservation'>>  = async params => {
  // undefined
    return this.client.updateReservation(params as any).promise();
  }
  
  static fromClient(client: AWSMediaLive): MediaLive {
    return new MediaLive(client) as any;
  }
  
  static client(options?: AWSMediaLive.Types.ClientConfiguration): MediaLive {
    return new MediaLive(new AWSMediaLive(options)) as any;
  }
}  
