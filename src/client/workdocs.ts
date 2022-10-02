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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'workdocs';
    global: false;
    category: 'Business Applications'
    topLevelCalls: readonly ["describeUsers"];
    
  abortDocumentVersionUpload: FunctionTypeFrom<'abortDocumentVersionUpload'>;

  activateUser: FunctionTypeFrom<'activateUser'>;

  addResourcePermissions: FunctionTypeFrom<'addResourcePermissions'>;

  createComment: FunctionTypeFrom<'createComment'>;

  createCustomMetadata: FunctionTypeFrom<'createCustomMetadata'>;

  createFolder: FunctionTypeFrom<'createFolder'>;

  createLabels: FunctionTypeFrom<'createLabels'>;

  createNotificationSubscription: FunctionTypeFrom<'createNotificationSubscription'>;

  createUser: FunctionTypeFrom<'createUser'>;

  deactivateUser: FunctionTypeFrom<'deactivateUser'>;

  deleteComment: FunctionTypeFrom<'deleteComment'>;

  deleteCustomMetadata: FunctionTypeFrom<'deleteCustomMetadata'>;

  deleteDocument: FunctionTypeFrom<'deleteDocument'>;

  deleteFolder: FunctionTypeFrom<'deleteFolder'>;

  deleteFolderContents: FunctionTypeFrom<'deleteFolderContents'>;

  deleteLabels: FunctionTypeFrom<'deleteLabels'>;

  deleteNotificationSubscription: FunctionTypeFrom<'deleteNotificationSubscription'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  describeActivities: FunctionTypeFrom<'describeActivities'>;

  describeComments: FunctionTypeFrom<'describeComments'>;

  describeDocumentVersions(params: { [K in keyof Omit<ParamsFrom<'describeDocumentVersions', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'describeDocumentVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDocumentVersions'>]-?: ReturnTypeFrom<'describeDocumentVersions'>[K]}['DocumentVersions'] }>
  ;

  describeFolderContents: FunctionTypeFrom<'describeFolderContents'>;

  describeGroups: FunctionTypeFrom<'describeGroups'>;

  describeNotificationSubscriptions: FunctionTypeFrom<'describeNotificationSubscriptions'>;

  describeResourcePermissions: FunctionTypeFrom<'describeResourcePermissions'>;

  describeRootFolders: FunctionTypeFrom<'describeRootFolders'>;

  describeUsers(params: { [K in keyof Omit<ParamsFrom<'describeUsers', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'describeUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUsers'>]-?: ReturnTypeFrom<'describeUsers'>[K]}['Users'] }>
  describeUsers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUsers'>]-?: ReturnTypeFrom<'describeUsers'>[K]}['Users'] }>;

  getCurrentUser: FunctionTypeFrom<'getCurrentUser'>;

  getDocument: FunctionTypeFrom<'getDocument'>;

  getDocumentPath: FunctionTypeFrom<'getDocumentPath'>;

  getDocumentVersion: FunctionTypeFrom<'getDocumentVersion'>;

  getFolder: FunctionTypeFrom<'getFolder'>;

  getFolderPath: FunctionTypeFrom<'getFolderPath'>;

  getResources: FunctionTypeFrom<'getResources'>;

  initiateDocumentVersionUpload: FunctionTypeFrom<'initiateDocumentVersionUpload'>;

  removeAllResourcePermissions: FunctionTypeFrom<'removeAllResourcePermissions'>;

  removeResourcePermission: FunctionTypeFrom<'removeResourcePermission'>;

  updateDocument: FunctionTypeFrom<'updateDocument'>;

  updateDocumentVersion: FunctionTypeFrom<'updateDocumentVersion'>;

  updateFolder: FunctionTypeFrom<'updateFolder'>;

  updateUser: FunctionTypeFrom<'updateUser'>
}
 
export class WorkDocs implements ClientType {
  private constructor(private readonly client: AWSWorkDocs) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workdocs';
  public readonly global = false;
  public readonly category = 'Business Applications';
  public readonly topLevelCalls = ["describeUsers"] as const;
  
  async abortDocumentVersionUpload(...args: any): Promise<any> {
  // undefined
    return this.client.abortDocumentVersionUpload(...args).promise()
  }

  async activateUser(...args: any): Promise<any> {
  // undefined
    return this.client.activateUser(...args).promise()
  }

  async addResourcePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.addResourcePermissions(...args).promise()
  }

  async createComment(...args: any): Promise<any> {
  // undefined
    return this.client.createComment(...args).promise()
  }

  async createCustomMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomMetadata(...args).promise()
  }

  async createFolder(...args: any): Promise<any> {
  // undefined
    return this.client.createFolder(...args).promise()
  }

  async createLabels(...args: any): Promise<any> {
  // undefined
    return this.client.createLabels(...args).promise()
  }

  async createNotificationSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createNotificationSubscription(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async deactivateUser(...args: any): Promise<any> {
  // undefined
    return this.client.deactivateUser(...args).promise()
  }

  async deleteComment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteComment(...args).promise()
  }

  async deleteCustomMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomMetadata(...args).promise()
  }

  async deleteDocument(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDocument(...args).promise()
  }

  async deleteFolder(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFolder(...args).promise()
  }

  async deleteFolderContents(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFolderContents(...args).promise()
  }

  async deleteLabels(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLabels(...args).promise()
  }

  async deleteNotificationSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNotificationSubscription(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async describeActivities(...args: any): Promise<any> {
  // undefined
    return this.client.describeActivities(...args).promise()
  }

  async describeComments(...args: any): Promise<any> {
  // undefined
    return this.client.describeComments(...args).promise()
  }

  async describeDocumentVersions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"DocumentVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeDocumentVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DocumentVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFolderContents(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":["Folders","Documents"]}
    return this.client.describeFolderContents(...args).promise()
  }

  async describeGroups(...args: any): Promise<any> {
  // undefined
    return this.client.describeGroups(...args).promise()
  }

  async describeNotificationSubscriptions(...args: any): Promise<any> {
  // undefined
    return this.client.describeNotificationSubscriptions(...args).promise()
  }

  async describeResourcePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeResourcePermissions(...args).promise()
  }

  async describeRootFolders(...args: any): Promise<any> {
  // undefined
    return this.client.describeRootFolders(...args).promise()
  }

  async describeUsers(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"Users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeUsers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getCurrentUser(...args: any): Promise<any> {
  // undefined
    return this.client.getCurrentUser(...args).promise()
  }

  async getDocument(...args: any): Promise<any> {
  // undefined
    return this.client.getDocument(...args).promise()
  }

  async getDocumentPath(...args: any): Promise<any> {
  // undefined
    return this.client.getDocumentPath(...args).promise()
  }

  async getDocumentVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getDocumentVersion(...args).promise()
  }

  async getFolder(...args: any): Promise<any> {
  // undefined
    return this.client.getFolder(...args).promise()
  }

  async getFolderPath(...args: any): Promise<any> {
  // undefined
    return this.client.getFolderPath(...args).promise()
  }

  async getResources(...args: any): Promise<any> {
  // undefined
    return this.client.getResources(...args).promise()
  }

  async initiateDocumentVersionUpload(...args: any): Promise<any> {
  // undefined
    return this.client.initiateDocumentVersionUpload(...args).promise()
  }

  async removeAllResourcePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.removeAllResourcePermissions(...args).promise()
  }

  async removeResourcePermission(...args: any): Promise<any> {
  // undefined
    return this.client.removeResourcePermission(...args).promise()
  }

  async updateDocument(...args: any): Promise<any> {
  // undefined
    return this.client.updateDocument(...args).promise()
  }

  async updateDocumentVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateDocumentVersion(...args).promise()
  }

  async updateFolder(...args: any): Promise<any> {
  // undefined
    return this.client.updateFolder(...args).promise()
  }

  async updateUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateUser(...args).promise()
  }
  
  static fromClient(client: AWSWorkDocs): ClientType {
    return new WorkDocs(client) as any;
  }
  
  static client(options?: AWSWorkDocs.Types.ClientConfiguration): ClientType {
    return new WorkDocs(new AWSWorkDocs(options)) as any;
  }
}  
