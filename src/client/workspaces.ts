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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWorkSpaces> = AWSWorkSpaces[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class WorkSpaces {
  private constructor(private readonly client: AWSWorkSpaces) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workspaces' as const;
  public readonly global = false as const;
  public readonly category = 'End User Computing' as const;
  public readonly topLevelCalls = ["describeWorkspaceBundles","describeWorkspaceDirectories","describeWorkspaces"] as const;
  
  associateConnectionAlias: (params: RawParamsFrom<'associateConnectionAlias'>) => Promise<ReturnTypeFrom<'associateConnectionAlias'>>  = async params => {
  // undefined
    return this.client.associateConnectionAlias(params as any).promise();
  }

  associateIpGroups: (params: RawParamsFrom<'associateIpGroups'>) => Promise<ReturnTypeFrom<'associateIpGroups'>>  = async params => {
  // undefined
    return this.client.associateIpGroups(params as any).promise();
  }

  authorizeIpRules: (params: RawParamsFrom<'authorizeIpRules'>) => Promise<ReturnTypeFrom<'authorizeIpRules'>>  = async params => {
  // undefined
    return this.client.authorizeIpRules(params as any).promise();
  }

  copyWorkspaceImage: (params: RawParamsFrom<'copyWorkspaceImage'>) => Promise<ReturnTypeFrom<'copyWorkspaceImage'>>  = async params => {
  // undefined
    return this.client.copyWorkspaceImage(params as any).promise();
  }

  createConnectClientAddIn: (params: RawParamsFrom<'createConnectClientAddIn'>) => Promise<ReturnTypeFrom<'createConnectClientAddIn'>>  = async params => {
  // undefined
    return this.client.createConnectClientAddIn(params as any).promise();
  }

  createConnectionAlias: (params: RawParamsFrom<'createConnectionAlias'>) => Promise<ReturnTypeFrom<'createConnectionAlias'>>  = async params => {
  // undefined
    return this.client.createConnectionAlias(params as any).promise();
  }

  createIpGroup: (params: RawParamsFrom<'createIpGroup'>) => Promise<ReturnTypeFrom<'createIpGroup'>>  = async params => {
  // undefined
    return this.client.createIpGroup(params as any).promise();
  }

  createTags: (params: RawParamsFrom<'createTags'>) => Promise<ReturnTypeFrom<'createTags'>>  = async params => {
  // undefined
    return this.client.createTags(params as any).promise();
  }

  createUpdatedWorkspaceImage: (params: RawParamsFrom<'createUpdatedWorkspaceImage'>) => Promise<ReturnTypeFrom<'createUpdatedWorkspaceImage'>>  = async params => {
  // undefined
    return this.client.createUpdatedWorkspaceImage(params as any).promise();
  }

  createWorkspaceBundle: (params: RawParamsFrom<'createWorkspaceBundle'>) => Promise<ReturnTypeFrom<'createWorkspaceBundle'>>  = async params => {
  // undefined
    return this.client.createWorkspaceBundle(params as any).promise();
  }

  createWorkspaceImage: (params: RawParamsFrom<'createWorkspaceImage'>) => Promise<ReturnTypeFrom<'createWorkspaceImage'>>  = async params => {
  // undefined
    return this.client.createWorkspaceImage(params as any).promise();
  }

  createWorkspaces: (params: RawParamsFrom<'createWorkspaces'>) => Promise<ReturnTypeFrom<'createWorkspaces'>>  = async params => {
  // undefined
    return this.client.createWorkspaces(params as any).promise();
  }

  deleteClientBranding: (params: RawParamsFrom<'deleteClientBranding'>) => Promise<ReturnTypeFrom<'deleteClientBranding'>>  = async params => {
  // undefined
    return this.client.deleteClientBranding(params as any).promise();
  }

  deleteConnectClientAddIn: (params: RawParamsFrom<'deleteConnectClientAddIn'>) => Promise<ReturnTypeFrom<'deleteConnectClientAddIn'>>  = async params => {
  // undefined
    return this.client.deleteConnectClientAddIn(params as any).promise();
  }

  deleteConnectionAlias: (params: RawParamsFrom<'deleteConnectionAlias'>) => Promise<ReturnTypeFrom<'deleteConnectionAlias'>>  = async params => {
  // undefined
    return this.client.deleteConnectionAlias(params as any).promise();
  }

  deleteIpGroup: (params: RawParamsFrom<'deleteIpGroup'>) => Promise<ReturnTypeFrom<'deleteIpGroup'>>  = async params => {
  // undefined
    return this.client.deleteIpGroup(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  deleteWorkspaceBundle: (params: RawParamsFrom<'deleteWorkspaceBundle'>) => Promise<ReturnTypeFrom<'deleteWorkspaceBundle'>>  = async params => {
  // undefined
    return this.client.deleteWorkspaceBundle(params as any).promise();
  }

  deleteWorkspaceImage: (params: RawParamsFrom<'deleteWorkspaceImage'>) => Promise<ReturnTypeFrom<'deleteWorkspaceImage'>>  = async params => {
  // undefined
    return this.client.deleteWorkspaceImage(params as any).promise();
  }

  deregisterWorkspaceDirectory: (params: RawParamsFrom<'deregisterWorkspaceDirectory'>) => Promise<ReturnTypeFrom<'deregisterWorkspaceDirectory'>>  = async params => {
  // undefined
    return this.client.deregisterWorkspaceDirectory(params as any).promise();
  }

  describeAccount: (params: RawParamsFrom<'describeAccount'>) => Promise<ReturnTypeFrom<'describeAccount'>>  = async params => {
  // undefined
    return this.client.describeAccount(params as any).promise();
  }

  describeAccountModifications: (params: RawParamsFrom<'describeAccountModifications'>) => Promise<ReturnTypeFrom<'describeAccountModifications'>>  = async params => {
  // undefined
    return this.client.describeAccountModifications(params as any).promise();
  }

  describeClientBranding: (params: RawParamsFrom<'describeClientBranding'>) => Promise<ReturnTypeFrom<'describeClientBranding'>>  = async params => {
  // undefined
    return this.client.describeClientBranding(params as any).promise();
  }

  describeClientProperties: (params: RawParamsFrom<'describeClientProperties'>) => Promise<ReturnTypeFrom<'describeClientProperties'>>  = async params => {
  // undefined
    return this.client.describeClientProperties(params as any).promise();
  }

  describeConnectClientAddIns: (params: RawParamsFrom<'describeConnectClientAddIns'>) => Promise<ReturnTypeFrom<'describeConnectClientAddIns'>>  = async params => {
  // undefined
    return this.client.describeConnectClientAddIns(params as any).promise();
  }

  describeConnectionAliasPermissions: (params: RawParamsFrom<'describeConnectionAliasPermissions'>) => Promise<ReturnTypeFrom<'describeConnectionAliasPermissions'>>  = async params => {
  // undefined
    return this.client.describeConnectionAliasPermissions(params as any).promise();
  }

  describeConnectionAliases: (params: RawParamsFrom<'describeConnectionAliases'>) => Promise<ReturnTypeFrom<'describeConnectionAliases'>>  = async params => {
  // undefined
    return this.client.describeConnectionAliases(params as any).promise();
  }

  describeIpGroups: (params: RawParamsFrom<'describeIpGroups'>) => Promise<ReturnTypeFrom<'describeIpGroups'>>  = async params => {
  // undefined
    return this.client.describeIpGroups(params as any).promise();
  }

  describeTags: (params: RawParamsFrom<'describeTags'>) => Promise<ReturnTypeFrom<'describeTags'>>  = async params => {
  // undefined
    return this.client.describeTags(params as any).promise();
  }

  async describeWorkspaceBundles(params: { [K in keyof ParamsFrom<'describeWorkspaceBundles', { next?: string }>]: ParamsFrom<'describeWorkspaceBundles', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeWorkspaceBundles'>]-?: ReturnTypeFrom<'describeWorkspaceBundles'>[K]}['Bundles'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Bundles"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeWorkspaceBundles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeWorkspaceBundles' })).toString('base64');
    const member = (Array.isArray(result.Bundles ?? []) ? (result.Bundles ?? []) : [result.Bundles]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeWorkspaceDirectories(params: { [K in keyof ParamsFrom<'describeWorkspaceDirectories', { next?: string }>]: ParamsFrom<'describeWorkspaceDirectories', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeWorkspaceDirectories'>]-?: ReturnTypeFrom<'describeWorkspaceDirectories'>[K]}['Directories'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Directories"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeWorkspaceDirectories({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeWorkspaceDirectories' })).toString('base64');
    const member = (Array.isArray(result.Directories ?? []) ? (result.Directories ?? []) : [result.Directories]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeWorkspaceImagePermissions: (params: RawParamsFrom<'describeWorkspaceImagePermissions'>) => Promise<ReturnTypeFrom<'describeWorkspaceImagePermissions'>>  = async params => {
  // undefined
    return this.client.describeWorkspaceImagePermissions(params as any).promise();
  }

  describeWorkspaceImages: (params: RawParamsFrom<'describeWorkspaceImages'>) => Promise<ReturnTypeFrom<'describeWorkspaceImages'>>  = async params => {
  // undefined
    return this.client.describeWorkspaceImages(params as any).promise();
  }

  describeWorkspaceSnapshots: (params: RawParamsFrom<'describeWorkspaceSnapshots'>) => Promise<ReturnTypeFrom<'describeWorkspaceSnapshots'>>  = async params => {
  // undefined
    return this.client.describeWorkspaceSnapshots(params as any).promise();
  }

  async describeWorkspaces(params: { [K in keyof ParamsFrom<'describeWorkspaces', { next?: string, limit?: number }>]: ParamsFrom<'describeWorkspaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeWorkspaces'>]-?: ReturnTypeFrom<'describeWorkspaces'>[K]}['Workspaces'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Workspaces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeWorkspaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeWorkspaces' })).toString('base64');
    const member = (Array.isArray(result.Workspaces ?? []) ? (result.Workspaces ?? []) : [result.Workspaces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeWorkspacesConnectionStatus: (params: RawParamsFrom<'describeWorkspacesConnectionStatus'>) => Promise<ReturnTypeFrom<'describeWorkspacesConnectionStatus'>>  = async params => {
  // undefined
    return this.client.describeWorkspacesConnectionStatus(params as any).promise();
  }

  disassociateConnectionAlias: (params: RawParamsFrom<'disassociateConnectionAlias'>) => Promise<ReturnTypeFrom<'disassociateConnectionAlias'>>  = async params => {
  // undefined
    return this.client.disassociateConnectionAlias(params as any).promise();
  }

  disassociateIpGroups: (params: RawParamsFrom<'disassociateIpGroups'>) => Promise<ReturnTypeFrom<'disassociateIpGroups'>>  = async params => {
  // undefined
    return this.client.disassociateIpGroups(params as any).promise();
  }

  importClientBranding: (params: RawParamsFrom<'importClientBranding'>) => Promise<ReturnTypeFrom<'importClientBranding'>>  = async params => {
  // undefined
    return this.client.importClientBranding(params as any).promise();
  }

  importWorkspaceImage: (params: RawParamsFrom<'importWorkspaceImage'>) => Promise<ReturnTypeFrom<'importWorkspaceImage'>>  = async params => {
  // undefined
    return this.client.importWorkspaceImage(params as any).promise();
  }

  listAvailableManagementCidrRanges: (params: RawParamsFrom<'listAvailableManagementCidrRanges'>) => Promise<ReturnTypeFrom<'listAvailableManagementCidrRanges'>>  = async params => {
  // undefined
    return this.client.listAvailableManagementCidrRanges(params as any).promise();
  }

  migrateWorkspace: (params: RawParamsFrom<'migrateWorkspace'>) => Promise<ReturnTypeFrom<'migrateWorkspace'>>  = async params => {
  // undefined
    return this.client.migrateWorkspace(params as any).promise();
  }

  modifyAccount: (params: RawParamsFrom<'modifyAccount'>) => Promise<ReturnTypeFrom<'modifyAccount'>>  = async params => {
  // undefined
    return this.client.modifyAccount(params as any).promise();
  }

  modifyClientProperties: (params: RawParamsFrom<'modifyClientProperties'>) => Promise<ReturnTypeFrom<'modifyClientProperties'>>  = async params => {
  // undefined
    return this.client.modifyClientProperties(params as any).promise();
  }

  modifySamlProperties: (params: RawParamsFrom<'modifySamlProperties'>) => Promise<ReturnTypeFrom<'modifySamlProperties'>>  = async params => {
  // undefined
    return this.client.modifySamlProperties(params as any).promise();
  }

  modifySelfservicePermissions: (params: RawParamsFrom<'modifySelfservicePermissions'>) => Promise<ReturnTypeFrom<'modifySelfservicePermissions'>>  = async params => {
  // undefined
    return this.client.modifySelfservicePermissions(params as any).promise();
  }

  modifyWorkspaceAccessProperties: (params: RawParamsFrom<'modifyWorkspaceAccessProperties'>) => Promise<ReturnTypeFrom<'modifyWorkspaceAccessProperties'>>  = async params => {
  // undefined
    return this.client.modifyWorkspaceAccessProperties(params as any).promise();
  }

  modifyWorkspaceCreationProperties: (params: RawParamsFrom<'modifyWorkspaceCreationProperties'>) => Promise<ReturnTypeFrom<'modifyWorkspaceCreationProperties'>>  = async params => {
  // undefined
    return this.client.modifyWorkspaceCreationProperties(params as any).promise();
  }

  modifyWorkspaceProperties: (params: RawParamsFrom<'modifyWorkspaceProperties'>) => Promise<ReturnTypeFrom<'modifyWorkspaceProperties'>>  = async params => {
  // undefined
    return this.client.modifyWorkspaceProperties(params as any).promise();
  }

  modifyWorkspaceState: (params: RawParamsFrom<'modifyWorkspaceState'>) => Promise<ReturnTypeFrom<'modifyWorkspaceState'>>  = async params => {
  // undefined
    return this.client.modifyWorkspaceState(params as any).promise();
  }

  rebootWorkspaces: (params: RawParamsFrom<'rebootWorkspaces'>) => Promise<ReturnTypeFrom<'rebootWorkspaces'>>  = async params => {
  // undefined
    return this.client.rebootWorkspaces(params as any).promise();
  }

  rebuildWorkspaces: (params: RawParamsFrom<'rebuildWorkspaces'>) => Promise<ReturnTypeFrom<'rebuildWorkspaces'>>  = async params => {
  // undefined
    return this.client.rebuildWorkspaces(params as any).promise();
  }

  registerWorkspaceDirectory: (params: RawParamsFrom<'registerWorkspaceDirectory'>) => Promise<ReturnTypeFrom<'registerWorkspaceDirectory'>>  = async params => {
  // undefined
    return this.client.registerWorkspaceDirectory(params as any).promise();
  }

  restoreWorkspace: (params: RawParamsFrom<'restoreWorkspace'>) => Promise<ReturnTypeFrom<'restoreWorkspace'>>  = async params => {
  // undefined
    return this.client.restoreWorkspace(params as any).promise();
  }

  revokeIpRules: (params: RawParamsFrom<'revokeIpRules'>) => Promise<ReturnTypeFrom<'revokeIpRules'>>  = async params => {
  // undefined
    return this.client.revokeIpRules(params as any).promise();
  }

  startWorkspaces: (params: RawParamsFrom<'startWorkspaces'>) => Promise<ReturnTypeFrom<'startWorkspaces'>>  = async params => {
  // undefined
    return this.client.startWorkspaces(params as any).promise();
  }

  stopWorkspaces: (params: RawParamsFrom<'stopWorkspaces'>) => Promise<ReturnTypeFrom<'stopWorkspaces'>>  = async params => {
  // undefined
    return this.client.stopWorkspaces(params as any).promise();
  }

  terminateWorkspaces: (params: RawParamsFrom<'terminateWorkspaces'>) => Promise<ReturnTypeFrom<'terminateWorkspaces'>>  = async params => {
  // undefined
    return this.client.terminateWorkspaces(params as any).promise();
  }

  updateConnectClientAddIn: (params: RawParamsFrom<'updateConnectClientAddIn'>) => Promise<ReturnTypeFrom<'updateConnectClientAddIn'>>  = async params => {
  // undefined
    return this.client.updateConnectClientAddIn(params as any).promise();
  }

  updateConnectionAliasPermission: (params: RawParamsFrom<'updateConnectionAliasPermission'>) => Promise<ReturnTypeFrom<'updateConnectionAliasPermission'>>  = async params => {
  // undefined
    return this.client.updateConnectionAliasPermission(params as any).promise();
  }

  updateRulesOfIpGroup: (params: RawParamsFrom<'updateRulesOfIpGroup'>) => Promise<ReturnTypeFrom<'updateRulesOfIpGroup'>>  = async params => {
  // undefined
    return this.client.updateRulesOfIpGroup(params as any).promise();
  }

  updateWorkspaceBundle: (params: RawParamsFrom<'updateWorkspaceBundle'>) => Promise<ReturnTypeFrom<'updateWorkspaceBundle'>>  = async params => {
  // undefined
    return this.client.updateWorkspaceBundle(params as any).promise();
  }

  updateWorkspaceImagePermission: (params: RawParamsFrom<'updateWorkspaceImagePermission'>) => Promise<ReturnTypeFrom<'updateWorkspaceImagePermission'>>  = async params => {
  // undefined
    return this.client.updateWorkspaceImagePermission(params as any).promise();
  }
  
  static fromClient(client: AWSWorkSpaces): WorkSpaces {
    return new WorkSpaces(client) as any;
  }
  
  static client(options?: AWSWorkSpaces.Types.ClientConfiguration): WorkSpaces {
    return new WorkSpaces(new AWSWorkSpaces(options)) as any;
  }
}  
