import { Request, BackupGateway as AWSBackupGateway } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSBackupGateway> = AWSBackupGateway[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSBackupGateway> = AWSBackupGateway[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSBackupGateway[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSBackupGateway, Extras> = AWSBackupGateway[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSBackupGateway> = AWSBackupGateway[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class BackupGateway {
  private constructor(private readonly client: AWSBackupGateway) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'backup-gateway' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listGateways","listHypervisors","listVirtualMachines"] as const;
  
  associateGatewayToServer: (params: RawParamsFrom<'associateGatewayToServer'>) => Promise<ReturnTypeFrom<'associateGatewayToServer'>>  = async params => {
  // undefined
    return this.client.associateGatewayToServer(params as any).promise();
  }

  createGateway: (params: RawParamsFrom<'createGateway'>) => Promise<ReturnTypeFrom<'createGateway'>>  = async params => {
  // undefined
    return this.client.createGateway(params as any).promise();
  }

  deleteGateway: (params: RawParamsFrom<'deleteGateway'>) => Promise<ReturnTypeFrom<'deleteGateway'>>  = async params => {
  // undefined
    return this.client.deleteGateway(params as any).promise();
  }

  deleteHypervisor: (params: RawParamsFrom<'deleteHypervisor'>) => Promise<ReturnTypeFrom<'deleteHypervisor'>>  = async params => {
  // undefined
    return this.client.deleteHypervisor(params as any).promise();
  }

  disassociateGatewayFromServer: (params: RawParamsFrom<'disassociateGatewayFromServer'>) => Promise<ReturnTypeFrom<'disassociateGatewayFromServer'>>  = async params => {
  // undefined
    return this.client.disassociateGatewayFromServer(params as any).promise();
  }

  getBandwidthRateLimitSchedule: (params: RawParamsFrom<'getBandwidthRateLimitSchedule'>) => Promise<ReturnTypeFrom<'getBandwidthRateLimitSchedule'>>  = async params => {
  // undefined
    return this.client.getBandwidthRateLimitSchedule(params as any).promise();
  }

  getGateway: (params: RawParamsFrom<'getGateway'>) => Promise<ReturnTypeFrom<'getGateway'>>  = async params => {
  // undefined
    return this.client.getGateway(params as any).promise();
  }

  getHypervisor: (params: RawParamsFrom<'getHypervisor'>) => Promise<ReturnTypeFrom<'getHypervisor'>>  = async params => {
  // undefined
    return this.client.getHypervisor(params as any).promise();
  }

  getHypervisorPropertyMappings: (params: RawParamsFrom<'getHypervisorPropertyMappings'>) => Promise<ReturnTypeFrom<'getHypervisorPropertyMappings'>>  = async params => {
  // undefined
    return this.client.getHypervisorPropertyMappings(params as any).promise();
  }

  getVirtualMachine: (params: RawParamsFrom<'getVirtualMachine'>) => Promise<ReturnTypeFrom<'getVirtualMachine'>>  = async params => {
  // undefined
    return this.client.getVirtualMachine(params as any).promise();
  }

  importHypervisorConfiguration: (params: RawParamsFrom<'importHypervisorConfiguration'>) => Promise<ReturnTypeFrom<'importHypervisorConfiguration'>>  = async params => {
  // undefined
    return this.client.importHypervisorConfiguration(params as any).promise();
  }

  async listGateways(params: { [K in keyof ParamsFrom<'listGateways', { next?: string, limit?: number }>]: ParamsFrom<'listGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGateways'>]-?: ReturnTypeFrom<'listGateways'>[K]}['Gateways'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Gateways"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listGateways' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Gateways ?? []) ? (result.Gateways ?? []) : [result.Gateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHypervisors(params: { [K in keyof ParamsFrom<'listHypervisors', { next?: string, limit?: number }>]: ParamsFrom<'listHypervisors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listHypervisors'>]-?: ReturnTypeFrom<'listHypervisors'>[K]}['Hypervisors'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Hypervisors"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHypervisors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listHypervisors' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Hypervisors ?? []) ? (result.Hypervisors ?? []) : [result.Hypervisors]) as any;
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

  async listVirtualMachines(params: { [K in keyof ParamsFrom<'listVirtualMachines', { next?: string, limit?: number }>]: ParamsFrom<'listVirtualMachines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVirtualMachines'>]-?: ReturnTypeFrom<'listVirtualMachines'>[K]}['VirtualMachines'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VirtualMachines"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listVirtualMachines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listVirtualMachines' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VirtualMachines ?? []) ? (result.VirtualMachines ?? []) : [result.VirtualMachines]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putBandwidthRateLimitSchedule: (params: RawParamsFrom<'putBandwidthRateLimitSchedule'>) => Promise<ReturnTypeFrom<'putBandwidthRateLimitSchedule'>>  = async params => {
  // undefined
    return this.client.putBandwidthRateLimitSchedule(params as any).promise();
  }

  putHypervisorPropertyMappings: (params: RawParamsFrom<'putHypervisorPropertyMappings'>) => Promise<ReturnTypeFrom<'putHypervisorPropertyMappings'>>  = async params => {
  // undefined
    return this.client.putHypervisorPropertyMappings(params as any).promise();
  }

  putMaintenanceStartTime: (params: RawParamsFrom<'putMaintenanceStartTime'>) => Promise<ReturnTypeFrom<'putMaintenanceStartTime'>>  = async params => {
  // undefined
    return this.client.putMaintenanceStartTime(params as any).promise();
  }

  startVirtualMachinesMetadataSync: (params: RawParamsFrom<'startVirtualMachinesMetadataSync'>) => Promise<ReturnTypeFrom<'startVirtualMachinesMetadataSync'>>  = async params => {
  // undefined
    return this.client.startVirtualMachinesMetadataSync(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testHypervisorConfiguration: (params: RawParamsFrom<'testHypervisorConfiguration'>) => Promise<ReturnTypeFrom<'testHypervisorConfiguration'>>  = async params => {
  // undefined
    return this.client.testHypervisorConfiguration(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateGatewayInformation: (params: RawParamsFrom<'updateGatewayInformation'>) => Promise<ReturnTypeFrom<'updateGatewayInformation'>>  = async params => {
  // undefined
    return this.client.updateGatewayInformation(params as any).promise();
  }

  updateGatewaySoftwareNow: (params: RawParamsFrom<'updateGatewaySoftwareNow'>) => Promise<ReturnTypeFrom<'updateGatewaySoftwareNow'>>  = async params => {
  // undefined
    return this.client.updateGatewaySoftwareNow(params as any).promise();
  }

  updateHypervisor: (params: RawParamsFrom<'updateHypervisor'>) => Promise<ReturnTypeFrom<'updateHypervisor'>>  = async params => {
  // undefined
    return this.client.updateHypervisor(params as any).promise();
  }
  
  static fromClient(client: AWSBackupGateway): BackupGateway {
    return new BackupGateway(client) as any;
  }
  
  static client(options?: AWSBackupGateway.Types.ClientConfiguration): BackupGateway {
    return new BackupGateway(new AWSBackupGateway(options)) as any;
  }
}  
