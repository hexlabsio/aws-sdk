import { Request, WorkSpaces as AWSWorkSpaces } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWorkSpaces> = AWSWorkSpaces[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWorkSpaces> = AWSWorkSpaces[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWorkSpaces[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWorkSpaces, Extras> = AWSWorkSpaces[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'workspaces';
    global: false;
    category: 'End User Computing'
    topLevelCalls: readonly ["describeWorkspaceBundles","describeWorkspaceDirectories","describeWorkspaces"];
    
  associateConnectionAlias: FunctionTypeFrom<'associateConnectionAlias'>;

  associateIpGroups: FunctionTypeFrom<'associateIpGroups'>;

  authorizeIpRules: FunctionTypeFrom<'authorizeIpRules'>;

  copyWorkspaceImage: FunctionTypeFrom<'copyWorkspaceImage'>;

  createConnectClientAddIn: FunctionTypeFrom<'createConnectClientAddIn'>;

  createConnectionAlias: FunctionTypeFrom<'createConnectionAlias'>;

  createIpGroup: FunctionTypeFrom<'createIpGroup'>;

  createTags: FunctionTypeFrom<'createTags'>;

  createUpdatedWorkspaceImage: FunctionTypeFrom<'createUpdatedWorkspaceImage'>;

  createWorkspaceBundle: FunctionTypeFrom<'createWorkspaceBundle'>;

  createWorkspaceImage: FunctionTypeFrom<'createWorkspaceImage'>;

  createWorkspaces: FunctionTypeFrom<'createWorkspaces'>;

  deleteClientBranding: FunctionTypeFrom<'deleteClientBranding'>;

  deleteConnectClientAddIn: FunctionTypeFrom<'deleteConnectClientAddIn'>;

  deleteConnectionAlias: FunctionTypeFrom<'deleteConnectionAlias'>;

  deleteIpGroup: FunctionTypeFrom<'deleteIpGroup'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  deleteWorkspaceBundle: FunctionTypeFrom<'deleteWorkspaceBundle'>;

  deleteWorkspaceImage: FunctionTypeFrom<'deleteWorkspaceImage'>;

  deregisterWorkspaceDirectory: FunctionTypeFrom<'deregisterWorkspaceDirectory'>;

  describeAccount: FunctionTypeFrom<'describeAccount'>;

  describeAccountModifications: FunctionTypeFrom<'describeAccountModifications'>;

  describeClientBranding: FunctionTypeFrom<'describeClientBranding'>;

  describeClientProperties: FunctionTypeFrom<'describeClientProperties'>;

  describeConnectClientAddIns: FunctionTypeFrom<'describeConnectClientAddIns'>;

  describeConnectionAliasPermissions: FunctionTypeFrom<'describeConnectionAliasPermissions'>;

  describeConnectionAliases: FunctionTypeFrom<'describeConnectionAliases'>;

  describeIpGroups: FunctionTypeFrom<'describeIpGroups'>;

  describeTags: FunctionTypeFrom<'describeTags'>;

  describeWorkspaceBundles(params: { [K in keyof Omit<ParamsFrom<'describeWorkspaceBundles', { next?: string }>, 'NextToken'>]: ParamsFrom<'describeWorkspaceBundles', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeWorkspaceBundles'>]-?: ReturnTypeFrom<'describeWorkspaceBundles'>[K]}['Bundles'] }>
  describeWorkspaceBundles(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeWorkspaceBundles'>]-?: ReturnTypeFrom<'describeWorkspaceBundles'>[K]}['Bundles'] }>;

  describeWorkspaceDirectories(params: { [K in keyof Omit<ParamsFrom<'describeWorkspaceDirectories', { next?: string }>, 'NextToken'>]: ParamsFrom<'describeWorkspaceDirectories', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeWorkspaceDirectories'>]-?: ReturnTypeFrom<'describeWorkspaceDirectories'>[K]}['Directories'] }>
  describeWorkspaceDirectories(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeWorkspaceDirectories'>]-?: ReturnTypeFrom<'describeWorkspaceDirectories'>[K]}['Directories'] }>;

  describeWorkspaceImagePermissions: FunctionTypeFrom<'describeWorkspaceImagePermissions'>;

  describeWorkspaceImages: FunctionTypeFrom<'describeWorkspaceImages'>;

  describeWorkspaceSnapshots: FunctionTypeFrom<'describeWorkspaceSnapshots'>;

  describeWorkspaces(params: { [K in keyof Omit<ParamsFrom<'describeWorkspaces', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeWorkspaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeWorkspaces'>]-?: ReturnTypeFrom<'describeWorkspaces'>[K]}['Workspaces'] }>
  describeWorkspaces(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeWorkspaces'>]-?: ReturnTypeFrom<'describeWorkspaces'>[K]}['Workspaces'] }>;

  describeWorkspacesConnectionStatus: FunctionTypeFrom<'describeWorkspacesConnectionStatus'>;

  disassociateConnectionAlias: FunctionTypeFrom<'disassociateConnectionAlias'>;

  disassociateIpGroups: FunctionTypeFrom<'disassociateIpGroups'>;

  importClientBranding: FunctionTypeFrom<'importClientBranding'>;

  importWorkspaceImage: FunctionTypeFrom<'importWorkspaceImage'>;

  listAvailableManagementCidrRanges: FunctionTypeFrom<'listAvailableManagementCidrRanges'>;

  migrateWorkspace: FunctionTypeFrom<'migrateWorkspace'>;

  modifyAccount: FunctionTypeFrom<'modifyAccount'>;

  modifyClientProperties: FunctionTypeFrom<'modifyClientProperties'>;

  modifySamlProperties: FunctionTypeFrom<'modifySamlProperties'>;

  modifySelfservicePermissions: FunctionTypeFrom<'modifySelfservicePermissions'>;

  modifyWorkspaceAccessProperties: FunctionTypeFrom<'modifyWorkspaceAccessProperties'>;

  modifyWorkspaceCreationProperties: FunctionTypeFrom<'modifyWorkspaceCreationProperties'>;

  modifyWorkspaceProperties: FunctionTypeFrom<'modifyWorkspaceProperties'>;

  modifyWorkspaceState: FunctionTypeFrom<'modifyWorkspaceState'>;

  rebootWorkspaces: FunctionTypeFrom<'rebootWorkspaces'>;

  rebuildWorkspaces: FunctionTypeFrom<'rebuildWorkspaces'>;

  registerWorkspaceDirectory: FunctionTypeFrom<'registerWorkspaceDirectory'>;

  restoreWorkspace: FunctionTypeFrom<'restoreWorkspace'>;

  revokeIpRules: FunctionTypeFrom<'revokeIpRules'>;

  startWorkspaces: FunctionTypeFrom<'startWorkspaces'>;

  stopWorkspaces: FunctionTypeFrom<'stopWorkspaces'>;

  terminateWorkspaces: FunctionTypeFrom<'terminateWorkspaces'>;

  updateConnectClientAddIn: FunctionTypeFrom<'updateConnectClientAddIn'>;

  updateConnectionAliasPermission: FunctionTypeFrom<'updateConnectionAliasPermission'>;

  updateRulesOfIpGroup: FunctionTypeFrom<'updateRulesOfIpGroup'>;

  updateWorkspaceBundle: FunctionTypeFrom<'updateWorkspaceBundle'>;

  updateWorkspaceImagePermission: FunctionTypeFrom<'updateWorkspaceImagePermission'>
}
 
export class WorkSpaces implements ClientType {
  private constructor(private readonly client: AWSWorkSpaces) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workspaces';
  public readonly global = false;
  public readonly category = 'End User Computing';
  public readonly topLevelCalls = ["describeWorkspaceBundles","describeWorkspaceDirectories","describeWorkspaces"] as const;
  
  async associateConnectionAlias(...args: any): Promise<any> {
  // undefined
    return this.client.associateConnectionAlias(...args).promise()
  }

  async associateIpGroups(...args: any): Promise<any> {
  // undefined
    return this.client.associateIpGroups(...args).promise()
  }

  async authorizeIpRules(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeIpRules(...args).promise()
  }

  async copyWorkspaceImage(...args: any): Promise<any> {
  // undefined
    return this.client.copyWorkspaceImage(...args).promise()
  }

  async createConnectClientAddIn(...args: any): Promise<any> {
  // undefined
    return this.client.createConnectClientAddIn(...args).promise()
  }

  async createConnectionAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createConnectionAlias(...args).promise()
  }

  async createIpGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createIpGroup(...args).promise()
  }

  async createTags(...args: any): Promise<any> {
  // undefined
    return this.client.createTags(...args).promise()
  }

  async createUpdatedWorkspaceImage(...args: any): Promise<any> {
  // undefined
    return this.client.createUpdatedWorkspaceImage(...args).promise()
  }

  async createWorkspaceBundle(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkspaceBundle(...args).promise()
  }

  async createWorkspaceImage(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkspaceImage(...args).promise()
  }

  async createWorkspaces(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkspaces(...args).promise()
  }

  async deleteClientBranding(...args: any): Promise<any> {
  // undefined
    return this.client.deleteClientBranding(...args).promise()
  }

  async deleteConnectClientAddIn(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnectClientAddIn(...args).promise()
  }

  async deleteConnectionAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnectionAlias(...args).promise()
  }

  async deleteIpGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIpGroup(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async deleteWorkspaceBundle(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkspaceBundle(...args).promise()
  }

  async deleteWorkspaceImage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkspaceImage(...args).promise()
  }

  async deregisterWorkspaceDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterWorkspaceDirectory(...args).promise()
  }

  async describeAccount(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccount(...args).promise()
  }

  async describeAccountModifications(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountModifications(...args).promise()
  }

  async describeClientBranding(...args: any): Promise<any> {
  // undefined
    return this.client.describeClientBranding(...args).promise()
  }

  async describeClientProperties(...args: any): Promise<any> {
  // undefined
    return this.client.describeClientProperties(...args).promise()
  }

  async describeConnectClientAddIns(...args: any): Promise<any> {
  // undefined
    return this.client.describeConnectClientAddIns(...args).promise()
  }

  async describeConnectionAliasPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeConnectionAliasPermissions(...args).promise()
  }

  async describeConnectionAliases(...args: any): Promise<any> {
  // undefined
    return this.client.describeConnectionAliases(...args).promise()
  }

  async describeIpGroups(...args: any): Promise<any> {
  // undefined
    return this.client.describeIpGroups(...args).promise()
  }

  async describeTags(...args: any): Promise<any> {
  // undefined
    return this.client.describeTags(...args).promise()
  }

  async describeWorkspaceBundles(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Bundles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeWorkspaceBundles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Bundles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeWorkspaceDirectories(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Directories"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeWorkspaceDirectories(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Directories ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeWorkspaceImagePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkspaceImagePermissions(...args).promise()
  }

  async describeWorkspaceImages(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkspaceImages(...args).promise()
  }

  async describeWorkspaceSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkspaceSnapshots(...args).promise()
  }

  async describeWorkspaces(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Workspaces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeWorkspaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Workspaces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeWorkspacesConnectionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkspacesConnectionStatus(...args).promise()
  }

  async disassociateConnectionAlias(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateConnectionAlias(...args).promise()
  }

  async disassociateIpGroups(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateIpGroups(...args).promise()
  }

  async importClientBranding(...args: any): Promise<any> {
  // undefined
    return this.client.importClientBranding(...args).promise()
  }

  async importWorkspaceImage(...args: any): Promise<any> {
  // undefined
    return this.client.importWorkspaceImage(...args).promise()
  }

  async listAvailableManagementCidrRanges(...args: any): Promise<any> {
  // undefined
    return this.client.listAvailableManagementCidrRanges(...args).promise()
  }

  async migrateWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.migrateWorkspace(...args).promise()
  }

  async modifyAccount(...args: any): Promise<any> {
  // undefined
    return this.client.modifyAccount(...args).promise()
  }

  async modifyClientProperties(...args: any): Promise<any> {
  // undefined
    return this.client.modifyClientProperties(...args).promise()
  }

  async modifySamlProperties(...args: any): Promise<any> {
  // undefined
    return this.client.modifySamlProperties(...args).promise()
  }

  async modifySelfservicePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.modifySelfservicePermissions(...args).promise()
  }

  async modifyWorkspaceAccessProperties(...args: any): Promise<any> {
  // undefined
    return this.client.modifyWorkspaceAccessProperties(...args).promise()
  }

  async modifyWorkspaceCreationProperties(...args: any): Promise<any> {
  // undefined
    return this.client.modifyWorkspaceCreationProperties(...args).promise()
  }

  async modifyWorkspaceProperties(...args: any): Promise<any> {
  // undefined
    return this.client.modifyWorkspaceProperties(...args).promise()
  }

  async modifyWorkspaceState(...args: any): Promise<any> {
  // undefined
    return this.client.modifyWorkspaceState(...args).promise()
  }

  async rebootWorkspaces(...args: any): Promise<any> {
  // undefined
    return this.client.rebootWorkspaces(...args).promise()
  }

  async rebuildWorkspaces(...args: any): Promise<any> {
  // undefined
    return this.client.rebuildWorkspaces(...args).promise()
  }

  async registerWorkspaceDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.registerWorkspaceDirectory(...args).promise()
  }

  async restoreWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.restoreWorkspace(...args).promise()
  }

  async revokeIpRules(...args: any): Promise<any> {
  // undefined
    return this.client.revokeIpRules(...args).promise()
  }

  async startWorkspaces(...args: any): Promise<any> {
  // undefined
    return this.client.startWorkspaces(...args).promise()
  }

  async stopWorkspaces(...args: any): Promise<any> {
  // undefined
    return this.client.stopWorkspaces(...args).promise()
  }

  async terminateWorkspaces(...args: any): Promise<any> {
  // undefined
    return this.client.terminateWorkspaces(...args).promise()
  }

  async updateConnectClientAddIn(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnectClientAddIn(...args).promise()
  }

  async updateConnectionAliasPermission(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnectionAliasPermission(...args).promise()
  }

  async updateRulesOfIpGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateRulesOfIpGroup(...args).promise()
  }

  async updateWorkspaceBundle(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkspaceBundle(...args).promise()
  }

  async updateWorkspaceImagePermission(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkspaceImagePermission(...args).promise()
  }
  
  static fromClient(client: AWSWorkSpaces): ClientType {
    return new WorkSpaces(client) as any;
  }
  
  static client(options?: AWSWorkSpaces.Types.ClientConfiguration): ClientType {
    return new WorkSpaces(new AWSWorkSpaces(options)) as any;
  }
}  
