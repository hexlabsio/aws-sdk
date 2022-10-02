import { Request, CloudDirectory as AWSCloudDirectory } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudDirectory> = AWSCloudDirectory[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudDirectory> = AWSCloudDirectory[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudDirectory[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudDirectory, Extras> = AWSCloudDirectory[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'clouddirectory';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly ["listDevelopmentSchemaArns","listDirectories","listManagedSchemaArns","listPublishedSchemaArns"];
    
  addFacetToObject: FunctionTypeFrom<'addFacetToObject'>;

  applySchema: FunctionTypeFrom<'applySchema'>;

  attachObject: FunctionTypeFrom<'attachObject'>;

  attachPolicy: FunctionTypeFrom<'attachPolicy'>;

  attachToIndex: FunctionTypeFrom<'attachToIndex'>;

  attachTypedLink: FunctionTypeFrom<'attachTypedLink'>;

  batchRead: FunctionTypeFrom<'batchRead'>;

  batchWrite: FunctionTypeFrom<'batchWrite'>;

  createDirectory: FunctionTypeFrom<'createDirectory'>;

  createFacet: FunctionTypeFrom<'createFacet'>;

  createIndex: FunctionTypeFrom<'createIndex'>;

  createObject: FunctionTypeFrom<'createObject'>;

  createSchema: FunctionTypeFrom<'createSchema'>;

  createTypedLinkFacet: FunctionTypeFrom<'createTypedLinkFacet'>;

  deleteDirectory: FunctionTypeFrom<'deleteDirectory'>;

  deleteFacet: FunctionTypeFrom<'deleteFacet'>;

  deleteObject: FunctionTypeFrom<'deleteObject'>;

  deleteSchema: FunctionTypeFrom<'deleteSchema'>;

  deleteTypedLinkFacet: FunctionTypeFrom<'deleteTypedLinkFacet'>;

  detachFromIndex: FunctionTypeFrom<'detachFromIndex'>;

  detachObject: FunctionTypeFrom<'detachObject'>;

  detachPolicy: FunctionTypeFrom<'detachPolicy'>;

  detachTypedLink: FunctionTypeFrom<'detachTypedLink'>;

  disableDirectory: FunctionTypeFrom<'disableDirectory'>;

  enableDirectory: FunctionTypeFrom<'enableDirectory'>;

  getAppliedSchemaVersion: FunctionTypeFrom<'getAppliedSchemaVersion'>;

  getDirectory: FunctionTypeFrom<'getDirectory'>;

  getFacet: FunctionTypeFrom<'getFacet'>;

  getLinkAttributes: FunctionTypeFrom<'getLinkAttributes'>;

  getObjectAttributes: FunctionTypeFrom<'getObjectAttributes'>;

  getObjectInformation: FunctionTypeFrom<'getObjectInformation'>;

  getSchemaAsJson: FunctionTypeFrom<'getSchemaAsJson'>;

  getTypedLinkFacetInformation: FunctionTypeFrom<'getTypedLinkFacetInformation'>;

  listAppliedSchemaArns: FunctionTypeFrom<'listAppliedSchemaArns'>;

  listAttachedIndices: FunctionTypeFrom<'listAttachedIndices'>;

  listDevelopmentSchemaArns: FunctionTypeFrom<'listDevelopmentSchemaArns'>;

  listDirectories: FunctionTypeFrom<'listDirectories'>;

  listFacetAttributes: FunctionTypeFrom<'listFacetAttributes'>;

  listFacetNames: FunctionTypeFrom<'listFacetNames'>;

  listIncomingTypedLinks: FunctionTypeFrom<'listIncomingTypedLinks'>;

  listIndex: FunctionTypeFrom<'listIndex'>;

  listManagedSchemaArns: FunctionTypeFrom<'listManagedSchemaArns'>;

  listObjectAttributes: FunctionTypeFrom<'listObjectAttributes'>;

  listObjectChildren: FunctionTypeFrom<'listObjectChildren'>;

  listObjectParentPaths: FunctionTypeFrom<'listObjectParentPaths'>;

  listObjectParents: FunctionTypeFrom<'listObjectParents'>;

  listObjectPolicies: FunctionTypeFrom<'listObjectPolicies'>;

  listOutgoingTypedLinks: FunctionTypeFrom<'listOutgoingTypedLinks'>;

  listPolicyAttachments: FunctionTypeFrom<'listPolicyAttachments'>;

  listPublishedSchemaArns: FunctionTypeFrom<'listPublishedSchemaArns'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTypedLinkFacetAttributes: FunctionTypeFrom<'listTypedLinkFacetAttributes'>;

  listTypedLinkFacetNames: FunctionTypeFrom<'listTypedLinkFacetNames'>;

  lookupPolicy: FunctionTypeFrom<'lookupPolicy'>;

  publishSchema: FunctionTypeFrom<'publishSchema'>;

  putSchemaFromJson: FunctionTypeFrom<'putSchemaFromJson'>;

  removeFacetFromObject: FunctionTypeFrom<'removeFacetFromObject'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateFacet: FunctionTypeFrom<'updateFacet'>;

  updateLinkAttributes: FunctionTypeFrom<'updateLinkAttributes'>;

  updateObjectAttributes: FunctionTypeFrom<'updateObjectAttributes'>;

  updateSchema: FunctionTypeFrom<'updateSchema'>;

  updateTypedLinkFacet: FunctionTypeFrom<'updateTypedLinkFacet'>;

  upgradeAppliedSchema: FunctionTypeFrom<'upgradeAppliedSchema'>;

  upgradePublishedSchema: FunctionTypeFrom<'upgradePublishedSchema'>
}
 
export class CloudDirectory implements ClientType {
  private constructor(private readonly client: AWSCloudDirectory) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'clouddirectory';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = ["listDevelopmentSchemaArns","listDirectories","listManagedSchemaArns","listPublishedSchemaArns"] as const;
  
  async addFacetToObject(...args: any): Promise<any> {
  // undefined
    return this.client.addFacetToObject(...args).promise()
  }

  async applySchema(...args: any): Promise<any> {
  // undefined
    return this.client.applySchema(...args).promise()
  }

  async attachObject(...args: any): Promise<any> {
  // undefined
    return this.client.attachObject(...args).promise()
  }

  async attachPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.attachPolicy(...args).promise()
  }

  async attachToIndex(...args: any): Promise<any> {
  // undefined
    return this.client.attachToIndex(...args).promise()
  }

  async attachTypedLink(...args: any): Promise<any> {
  // undefined
    return this.client.attachTypedLink(...args).promise()
  }

  async batchRead(...args: any): Promise<any> {
  // undefined
    return this.client.batchRead(...args).promise()
  }

  async batchWrite(...args: any): Promise<any> {
  // undefined
    return this.client.batchWrite(...args).promise()
  }

  async createDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.createDirectory(...args).promise()
  }

  async createFacet(...args: any): Promise<any> {
  // undefined
    return this.client.createFacet(...args).promise()
  }

  async createIndex(...args: any): Promise<any> {
  // undefined
    return this.client.createIndex(...args).promise()
  }

  async createObject(...args: any): Promise<any> {
  // undefined
    return this.client.createObject(...args).promise()
  }

  async createSchema(...args: any): Promise<any> {
  // undefined
    return this.client.createSchema(...args).promise()
  }

  async createTypedLinkFacet(...args: any): Promise<any> {
  // undefined
    return this.client.createTypedLinkFacet(...args).promise()
  }

  async deleteDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDirectory(...args).promise()
  }

  async deleteFacet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFacet(...args).promise()
  }

  async deleteObject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteObject(...args).promise()
  }

  async deleteSchema(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSchema(...args).promise()
  }

  async deleteTypedLinkFacet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTypedLinkFacet(...args).promise()
  }

  async detachFromIndex(...args: any): Promise<any> {
  // undefined
    return this.client.detachFromIndex(...args).promise()
  }

  async detachObject(...args: any): Promise<any> {
  // undefined
    return this.client.detachObject(...args).promise()
  }

  async detachPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.detachPolicy(...args).promise()
  }

  async detachTypedLink(...args: any): Promise<any> {
  // undefined
    return this.client.detachTypedLink(...args).promise()
  }

  async disableDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.disableDirectory(...args).promise()
  }

  async enableDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.enableDirectory(...args).promise()
  }

  async getAppliedSchemaVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getAppliedSchemaVersion(...args).promise()
  }

  async getDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.getDirectory(...args).promise()
  }

  async getFacet(...args: any): Promise<any> {
  // undefined
    return this.client.getFacet(...args).promise()
  }

  async getLinkAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getLinkAttributes(...args).promise()
  }

  async getObjectAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectAttributes(...args).promise()
  }

  async getObjectInformation(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectInformation(...args).promise()
  }

  async getSchemaAsJson(...args: any): Promise<any> {
  // undefined
    return this.client.getSchemaAsJson(...args).promise()
  }

  async getTypedLinkFacetInformation(...args: any): Promise<any> {
  // undefined
    return this.client.getTypedLinkFacetInformation(...args).promise()
  }

  async listAppliedSchemaArns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppliedSchemaArns(...args).promise()
  }

  async listAttachedIndices(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAttachedIndices(...args).promise()
  }

  async listDevelopmentSchemaArns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevelopmentSchemaArns(...args).promise()
  }

  async listDirectories(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDirectories(...args).promise()
  }

  async listFacetAttributes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFacetAttributes(...args).promise()
  }

  async listFacetNames(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFacetNames(...args).promise()
  }

  async listIncomingTypedLinks(...args: any): Promise<any> {
  // undefined
    return this.client.listIncomingTypedLinks(...args).promise()
  }

  async listIndex(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listIndex(...args).promise()
  }

  async listManagedSchemaArns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listManagedSchemaArns(...args).promise()
  }

  async listObjectAttributes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectAttributes(...args).promise()
  }

  async listObjectChildren(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectChildren(...args).promise()
  }

  async listObjectParentPaths(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectParentPaths(...args).promise()
  }

  async listObjectParents(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectParents(...args).promise()
  }

  async listObjectPolicies(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectPolicies(...args).promise()
  }

  async listOutgoingTypedLinks(...args: any): Promise<any> {
  // undefined
    return this.client.listOutgoingTypedLinks(...args).promise()
  }

  async listPolicyAttachments(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPolicyAttachments(...args).promise()
  }

  async listPublishedSchemaArns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPublishedSchemaArns(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTagsForResource(...args).promise()
  }

  async listTypedLinkFacetAttributes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTypedLinkFacetAttributes(...args).promise()
  }

  async listTypedLinkFacetNames(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTypedLinkFacetNames(...args).promise()
  }

  async lookupPolicy(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.lookupPolicy(...args).promise()
  }

  async publishSchema(...args: any): Promise<any> {
  // undefined
    return this.client.publishSchema(...args).promise()
  }

  async putSchemaFromJson(...args: any): Promise<any> {
  // undefined
    return this.client.putSchemaFromJson(...args).promise()
  }

  async removeFacetFromObject(...args: any): Promise<any> {
  // undefined
    return this.client.removeFacetFromObject(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateFacet(...args: any): Promise<any> {
  // undefined
    return this.client.updateFacet(...args).promise()
  }

  async updateLinkAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.updateLinkAttributes(...args).promise()
  }

  async updateObjectAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.updateObjectAttributes(...args).promise()
  }

  async updateSchema(...args: any): Promise<any> {
  // undefined
    return this.client.updateSchema(...args).promise()
  }

  async updateTypedLinkFacet(...args: any): Promise<any> {
  // undefined
    return this.client.updateTypedLinkFacet(...args).promise()
  }

  async upgradeAppliedSchema(...args: any): Promise<any> {
  // undefined
    return this.client.upgradeAppliedSchema(...args).promise()
  }

  async upgradePublishedSchema(...args: any): Promise<any> {
  // undefined
    return this.client.upgradePublishedSchema(...args).promise()
  }
  
  static fromClient(client: AWSCloudDirectory): ClientType {
    return new CloudDirectory(client) as any;
  }
  
  static client(options?: AWSCloudDirectory.Types.ClientConfiguration): ClientType {
    return new CloudDirectory(new AWSCloudDirectory(options)) as any;
  }
}  
