import { Request, WorkDocs as AWSWorkDocs } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWorkDocs> = AWSWorkDocs[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWorkDocs> = AWSWorkDocs[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWorkDocs[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWorkDocs, Extras> = AWSWorkDocs[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWorkDocs> = AWSWorkDocs[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class WorkDocs {
  private constructor(private readonly client: AWSWorkDocs) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workdocs' as const;
  public readonly global = false as const;
  public readonly category = 'Business Applications' as const;
  public readonly topLevelCalls = ["describeUsers"] as const;
  
  abortDocumentVersionUpload: (params: RawParamsFrom<'abortDocumentVersionUpload'>) => Promise<ReturnTypeFrom<'abortDocumentVersionUpload'>>  = async params => {
  // undefined
    return this.client.abortDocumentVersionUpload(params as any).promise();
  }

  activateUser: (params: RawParamsFrom<'activateUser'>) => Promise<ReturnTypeFrom<'activateUser'>>  = async params => {
  // undefined
    return this.client.activateUser(params as any).promise();
  }

  addResourcePermissions: (params: RawParamsFrom<'addResourcePermissions'>) => Promise<ReturnTypeFrom<'addResourcePermissions'>>  = async params => {
  // undefined
    return this.client.addResourcePermissions(params as any).promise();
  }

  createComment: (params: RawParamsFrom<'createComment'>) => Promise<ReturnTypeFrom<'createComment'>>  = async params => {
  // undefined
    return this.client.createComment(params as any).promise();
  }

  createCustomMetadata: (params: RawParamsFrom<'createCustomMetadata'>) => Promise<ReturnTypeFrom<'createCustomMetadata'>>  = async params => {
  // undefined
    return this.client.createCustomMetadata(params as any).promise();
  }

  createFolder: (params: RawParamsFrom<'createFolder'>) => Promise<ReturnTypeFrom<'createFolder'>>  = async params => {
  // undefined
    return this.client.createFolder(params as any).promise();
  }

  createLabels: (params: RawParamsFrom<'createLabels'>) => Promise<ReturnTypeFrom<'createLabels'>>  = async params => {
  // undefined
    return this.client.createLabels(params as any).promise();
  }

  createNotificationSubscription: (params: RawParamsFrom<'createNotificationSubscription'>) => Promise<ReturnTypeFrom<'createNotificationSubscription'>>  = async params => {
  // undefined
    return this.client.createNotificationSubscription(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  deactivateUser: (params: RawParamsFrom<'deactivateUser'>) => Promise<ReturnTypeFrom<'deactivateUser'>>  = async params => {
  // undefined
    return this.client.deactivateUser(params as any).promise();
  }

  deleteComment: (params: RawParamsFrom<'deleteComment'>) => Promise<ReturnTypeFrom<'deleteComment'>>  = async params => {
  // undefined
    return this.client.deleteComment(params as any).promise();
  }

  deleteCustomMetadata: (params: RawParamsFrom<'deleteCustomMetadata'>) => Promise<ReturnTypeFrom<'deleteCustomMetadata'>>  = async params => {
  // undefined
    return this.client.deleteCustomMetadata(params as any).promise();
  }

  deleteDocument: (params: RawParamsFrom<'deleteDocument'>) => Promise<ReturnTypeFrom<'deleteDocument'>>  = async params => {
  // undefined
    return this.client.deleteDocument(params as any).promise();
  }

  deleteFolder: (params: RawParamsFrom<'deleteFolder'>) => Promise<ReturnTypeFrom<'deleteFolder'>>  = async params => {
  // undefined
    return this.client.deleteFolder(params as any).promise();
  }

  deleteFolderContents: (params: RawParamsFrom<'deleteFolderContents'>) => Promise<ReturnTypeFrom<'deleteFolderContents'>>  = async params => {
  // undefined
    return this.client.deleteFolderContents(params as any).promise();
  }

  deleteLabels: (params: RawParamsFrom<'deleteLabels'>) => Promise<ReturnTypeFrom<'deleteLabels'>>  = async params => {
  // undefined
    return this.client.deleteLabels(params as any).promise();
  }

  deleteNotificationSubscription: (params: RawParamsFrom<'deleteNotificationSubscription'>) => Promise<ReturnTypeFrom<'deleteNotificationSubscription'>>  = async params => {
  // undefined
    return this.client.deleteNotificationSubscription(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  describeActivities: (params: RawParamsFrom<'describeActivities'>) => Promise<ReturnTypeFrom<'describeActivities'>>  = async params => {
  // undefined
    return this.client.describeActivities(params as any).promise();
  }

  describeComments: (params: RawParamsFrom<'describeComments'>) => Promise<ReturnTypeFrom<'describeComments'>>  = async params => {
  // undefined
    return this.client.describeComments(params as any).promise();
  }

  async describeDocumentVersions(params: { [K in keyof ParamsFrom<'describeDocumentVersions', { next?: string, limit?: number }>]: ParamsFrom<'describeDocumentVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDocumentVersions'>]-?: ReturnTypeFrom<'describeDocumentVersions'>[K]}['DocumentVersions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"DocumentVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeDocumentVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDocumentVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DocumentVersions ?? []) ? (result.DocumentVersions ?? []) : [result.DocumentVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeFolderContents: (params: RawParamsFrom<'describeFolderContents'>) => Promise<ReturnTypeFrom<'describeFolderContents'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":["Folders","Documents"]}
    return this.client.describeFolderContents(params as any).promise();
  }

  describeGroups: (params: RawParamsFrom<'describeGroups'>) => Promise<ReturnTypeFrom<'describeGroups'>>  = async params => {
  // undefined
    return this.client.describeGroups(params as any).promise();
  }

  describeNotificationSubscriptions: (params: RawParamsFrom<'describeNotificationSubscriptions'>) => Promise<ReturnTypeFrom<'describeNotificationSubscriptions'>>  = async params => {
  // undefined
    return this.client.describeNotificationSubscriptions(params as any).promise();
  }

  describeResourcePermissions: (params: RawParamsFrom<'describeResourcePermissions'>) => Promise<ReturnTypeFrom<'describeResourcePermissions'>>  = async params => {
  // undefined
    return this.client.describeResourcePermissions(params as any).promise();
  }

  describeRootFolders: (params: RawParamsFrom<'describeRootFolders'>) => Promise<ReturnTypeFrom<'describeRootFolders'>>  = async params => {
  // undefined
    return this.client.describeRootFolders(params as any).promise();
  }

  async describeUsers(params: { [K in keyof ParamsFrom<'describeUsers', { next?: string, limit?: number }>]: ParamsFrom<'describeUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeUsers'>]-?: ReturnTypeFrom<'describeUsers'>[K]}['Users'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeUsers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getCurrentUser: (params: RawParamsFrom<'getCurrentUser'>) => Promise<ReturnTypeFrom<'getCurrentUser'>>  = async params => {
  // undefined
    return this.client.getCurrentUser(params as any).promise();
  }

  getDocument: (params: RawParamsFrom<'getDocument'>) => Promise<ReturnTypeFrom<'getDocument'>>  = async params => {
  // undefined
    return this.client.getDocument(params as any).promise();
  }

  getDocumentPath: (params: RawParamsFrom<'getDocumentPath'>) => Promise<ReturnTypeFrom<'getDocumentPath'>>  = async params => {
  // undefined
    return this.client.getDocumentPath(params as any).promise();
  }

  getDocumentVersion: (params: RawParamsFrom<'getDocumentVersion'>) => Promise<ReturnTypeFrom<'getDocumentVersion'>>  = async params => {
  // undefined
    return this.client.getDocumentVersion(params as any).promise();
  }

  getFolder: (params: RawParamsFrom<'getFolder'>) => Promise<ReturnTypeFrom<'getFolder'>>  = async params => {
  // undefined
    return this.client.getFolder(params as any).promise();
  }

  getFolderPath: (params: RawParamsFrom<'getFolderPath'>) => Promise<ReturnTypeFrom<'getFolderPath'>>  = async params => {
  // undefined
    return this.client.getFolderPath(params as any).promise();
  }

  getResources: (params: RawParamsFrom<'getResources'>) => Promise<ReturnTypeFrom<'getResources'>>  = async params => {
  // undefined
    return this.client.getResources(params as any).promise();
  }

  initiateDocumentVersionUpload: (params: RawParamsFrom<'initiateDocumentVersionUpload'>) => Promise<ReturnTypeFrom<'initiateDocumentVersionUpload'>>  = async params => {
  // undefined
    return this.client.initiateDocumentVersionUpload(params as any).promise();
  }

  removeAllResourcePermissions: (params: RawParamsFrom<'removeAllResourcePermissions'>) => Promise<ReturnTypeFrom<'removeAllResourcePermissions'>>  = async params => {
  // undefined
    return this.client.removeAllResourcePermissions(params as any).promise();
  }

  removeResourcePermission: (params: RawParamsFrom<'removeResourcePermission'>) => Promise<ReturnTypeFrom<'removeResourcePermission'>>  = async params => {
  // undefined
    return this.client.removeResourcePermission(params as any).promise();
  }

  updateDocument: (params: RawParamsFrom<'updateDocument'>) => Promise<ReturnTypeFrom<'updateDocument'>>  = async params => {
  // undefined
    return this.client.updateDocument(params as any).promise();
  }

  updateDocumentVersion: (params: RawParamsFrom<'updateDocumentVersion'>) => Promise<ReturnTypeFrom<'updateDocumentVersion'>>  = async params => {
  // undefined
    return this.client.updateDocumentVersion(params as any).promise();
  }

  updateFolder: (params: RawParamsFrom<'updateFolder'>) => Promise<ReturnTypeFrom<'updateFolder'>>  = async params => {
  // undefined
    return this.client.updateFolder(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }
  
  static fromClient(client: AWSWorkDocs): WorkDocs {
    return new WorkDocs(client) as any;
  }
  
  static client(options?: AWSWorkDocs.Types.ClientConfiguration): WorkDocs {
    return new WorkDocs(new AWSWorkDocs(options)) as any;
  }
}  
