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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'backup-gateway';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listGateways","listHypervisors","listVirtualMachines"];
    
  associateGatewayToServer: FunctionTypeFrom<'associateGatewayToServer'>;

  createGateway: FunctionTypeFrom<'createGateway'>;

  deleteGateway: FunctionTypeFrom<'deleteGateway'>;

  deleteHypervisor: FunctionTypeFrom<'deleteHypervisor'>;

  disassociateGatewayFromServer: FunctionTypeFrom<'disassociateGatewayFromServer'>;

  getGateway: FunctionTypeFrom<'getGateway'>;

  getVirtualMachine: FunctionTypeFrom<'getVirtualMachine'>;

  importHypervisorConfiguration: FunctionTypeFrom<'importHypervisorConfiguration'>;

  listGateways(params: { [K in keyof Omit<ParamsFrom<'listGateways', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGateways'>]-?: ReturnTypeFrom<'listGateways'>[K]}['Gateways'] }>
  listGateways(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGateways'>]-?: ReturnTypeFrom<'listGateways'>[K]}['Gateways'] }>;

  listHypervisors(params: { [K in keyof Omit<ParamsFrom<'listHypervisors', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listHypervisors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHypervisors'>]-?: ReturnTypeFrom<'listHypervisors'>[K]}['Hypervisors'] }>
  listHypervisors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHypervisors'>]-?: ReturnTypeFrom<'listHypervisors'>[K]}['Hypervisors'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listVirtualMachines(params: { [K in keyof Omit<ParamsFrom<'listVirtualMachines', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listVirtualMachines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualMachines'>]-?: ReturnTypeFrom<'listVirtualMachines'>[K]}['VirtualMachines'] }>
  listVirtualMachines(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualMachines'>]-?: ReturnTypeFrom<'listVirtualMachines'>[K]}['VirtualMachines'] }>;

  putMaintenanceStartTime: FunctionTypeFrom<'putMaintenanceStartTime'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testHypervisorConfiguration: FunctionTypeFrom<'testHypervisorConfiguration'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateGatewayInformation: FunctionTypeFrom<'updateGatewayInformation'>;

  updateGatewaySoftwareNow: FunctionTypeFrom<'updateGatewaySoftwareNow'>;

  updateHypervisor: FunctionTypeFrom<'updateHypervisor'>
}
 
export class BackupGateway implements ClientType {
  private constructor(private readonly client: AWSBackupGateway) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'backup-gateway';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listGateways","listHypervisors","listVirtualMachines"] as const;
  
  async associateGatewayToServer(...args: any): Promise<any> {
  // undefined
    return this.client.associateGatewayToServer(...args).promise()
  }

  async createGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createGateway(...args).promise()
  }

  async deleteGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGateway(...args).promise()
  }

  async deleteHypervisor(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHypervisor(...args).promise()
  }

  async disassociateGatewayFromServer(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateGatewayFromServer(...args).promise()
  }

  async getGateway(...args: any): Promise<any> {
  // undefined
    return this.client.getGateway(...args).promise()
  }

  async getVirtualMachine(...args: any): Promise<any> {
  // undefined
    return this.client.getVirtualMachine(...args).promise()
  }

  async importHypervisorConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.importHypervisorConfiguration(...args).promise()
  }

  async listGateways(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Gateways"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Gateways ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHypervisors(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Hypervisors"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHypervisors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Hypervisors ?? [];
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

  async listVirtualMachines(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VirtualMachines"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listVirtualMachines(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.VirtualMachines ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putMaintenanceStartTime(...args: any): Promise<any> {
  // undefined
    return this.client.putMaintenanceStartTime(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testHypervisorConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.testHypervisorConfiguration(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateGatewayInformation(...args: any): Promise<any> {
  // undefined
    return this.client.updateGatewayInformation(...args).promise()
  }

  async updateGatewaySoftwareNow(...args: any): Promise<any> {
  // undefined
    return this.client.updateGatewaySoftwareNow(...args).promise()
  }

  async updateHypervisor(...args: any): Promise<any> {
  // undefined
    return this.client.updateHypervisor(...args).promise()
  }
  
  static fromClient(client: AWSBackupGateway): ClientType {
    return new BackupGateway(client) as any;
  }
  
  static client(options?: AWSBackupGateway.Types.ClientConfiguration): ClientType {
    return new BackupGateway(new AWSBackupGateway(options)) as any;
  }
}  
