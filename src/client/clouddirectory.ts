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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudDirectory> = AWSCloudDirectory[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudDirectory {
  private constructor(private readonly client: AWSCloudDirectory) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'clouddirectory' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = ["listDevelopmentSchemaArns","listDirectories","listManagedSchemaArns","listPublishedSchemaArns"] as const;
  
  addFacetToObject: (params: RawParamsFrom<'addFacetToObject'>) => Promise<ReturnTypeFrom<'addFacetToObject'>>  = async params => {
  // undefined
    return this.client.addFacetToObject(params as any).promise();
  }

  applySchema: (params: RawParamsFrom<'applySchema'>) => Promise<ReturnTypeFrom<'applySchema'>>  = async params => {
  // undefined
    return this.client.applySchema(params as any).promise();
  }

  attachObject: (params: RawParamsFrom<'attachObject'>) => Promise<ReturnTypeFrom<'attachObject'>>  = async params => {
  // undefined
    return this.client.attachObject(params as any).promise();
  }

  attachPolicy: (params: RawParamsFrom<'attachPolicy'>) => Promise<ReturnTypeFrom<'attachPolicy'>>  = async params => {
  // undefined
    return this.client.attachPolicy(params as any).promise();
  }

  attachToIndex: (params: RawParamsFrom<'attachToIndex'>) => Promise<ReturnTypeFrom<'attachToIndex'>>  = async params => {
  // undefined
    return this.client.attachToIndex(params as any).promise();
  }

  attachTypedLink: (params: RawParamsFrom<'attachTypedLink'>) => Promise<ReturnTypeFrom<'attachTypedLink'>>  = async params => {
  // undefined
    return this.client.attachTypedLink(params as any).promise();
  }

  batchRead: (params: RawParamsFrom<'batchRead'>) => Promise<ReturnTypeFrom<'batchRead'>>  = async params => {
  // undefined
    return this.client.batchRead(params as any).promise();
  }

  batchWrite: (params: RawParamsFrom<'batchWrite'>) => Promise<ReturnTypeFrom<'batchWrite'>>  = async params => {
  // undefined
    return this.client.batchWrite(params as any).promise();
  }

  createDirectory: (params: RawParamsFrom<'createDirectory'>) => Promise<ReturnTypeFrom<'createDirectory'>>  = async params => {
  // undefined
    return this.client.createDirectory(params as any).promise();
  }

  createFacet: (params: RawParamsFrom<'createFacet'>) => Promise<ReturnTypeFrom<'createFacet'>>  = async params => {
  // undefined
    return this.client.createFacet(params as any).promise();
  }

  createIndex: (params: RawParamsFrom<'createIndex'>) => Promise<ReturnTypeFrom<'createIndex'>>  = async params => {
  // undefined
    return this.client.createIndex(params as any).promise();
  }

  createObject: (params: RawParamsFrom<'createObject'>) => Promise<ReturnTypeFrom<'createObject'>>  = async params => {
  // undefined
    return this.client.createObject(params as any).promise();
  }

  createSchema: (params: RawParamsFrom<'createSchema'>) => Promise<ReturnTypeFrom<'createSchema'>>  = async params => {
  // undefined
    return this.client.createSchema(params as any).promise();
  }

  createTypedLinkFacet: (params: RawParamsFrom<'createTypedLinkFacet'>) => Promise<ReturnTypeFrom<'createTypedLinkFacet'>>  = async params => {
  // undefined
    return this.client.createTypedLinkFacet(params as any).promise();
  }

  deleteDirectory: (params: RawParamsFrom<'deleteDirectory'>) => Promise<ReturnTypeFrom<'deleteDirectory'>>  = async params => {
  // undefined
    return this.client.deleteDirectory(params as any).promise();
  }

  deleteFacet: (params: RawParamsFrom<'deleteFacet'>) => Promise<ReturnTypeFrom<'deleteFacet'>>  = async params => {
  // undefined
    return this.client.deleteFacet(params as any).promise();
  }

  deleteObject: (params: RawParamsFrom<'deleteObject'>) => Promise<ReturnTypeFrom<'deleteObject'>>  = async params => {
  // undefined
    return this.client.deleteObject(params as any).promise();
  }

  deleteSchema: (params: RawParamsFrom<'deleteSchema'>) => Promise<ReturnTypeFrom<'deleteSchema'>>  = async params => {
  // undefined
    return this.client.deleteSchema(params as any).promise();
  }

  deleteTypedLinkFacet: (params: RawParamsFrom<'deleteTypedLinkFacet'>) => Promise<ReturnTypeFrom<'deleteTypedLinkFacet'>>  = async params => {
  // undefined
    return this.client.deleteTypedLinkFacet(params as any).promise();
  }

  detachFromIndex: (params: RawParamsFrom<'detachFromIndex'>) => Promise<ReturnTypeFrom<'detachFromIndex'>>  = async params => {
  // undefined
    return this.client.detachFromIndex(params as any).promise();
  }

  detachObject: (params: RawParamsFrom<'detachObject'>) => Promise<ReturnTypeFrom<'detachObject'>>  = async params => {
  // undefined
    return this.client.detachObject(params as any).promise();
  }

  detachPolicy: (params: RawParamsFrom<'detachPolicy'>) => Promise<ReturnTypeFrom<'detachPolicy'>>  = async params => {
  // undefined
    return this.client.detachPolicy(params as any).promise();
  }

  detachTypedLink: (params: RawParamsFrom<'detachTypedLink'>) => Promise<ReturnTypeFrom<'detachTypedLink'>>  = async params => {
  // undefined
    return this.client.detachTypedLink(params as any).promise();
  }

  disableDirectory: (params: RawParamsFrom<'disableDirectory'>) => Promise<ReturnTypeFrom<'disableDirectory'>>  = async params => {
  // undefined
    return this.client.disableDirectory(params as any).promise();
  }

  enableDirectory: (params: RawParamsFrom<'enableDirectory'>) => Promise<ReturnTypeFrom<'enableDirectory'>>  = async params => {
  // undefined
    return this.client.enableDirectory(params as any).promise();
  }

  getAppliedSchemaVersion: (params: RawParamsFrom<'getAppliedSchemaVersion'>) => Promise<ReturnTypeFrom<'getAppliedSchemaVersion'>>  = async params => {
  // undefined
    return this.client.getAppliedSchemaVersion(params as any).promise();
  }

  getDirectory: (params: RawParamsFrom<'getDirectory'>) => Promise<ReturnTypeFrom<'getDirectory'>>  = async params => {
  // undefined
    return this.client.getDirectory(params as any).promise();
  }

  getFacet: (params: RawParamsFrom<'getFacet'>) => Promise<ReturnTypeFrom<'getFacet'>>  = async params => {
  // undefined
    return this.client.getFacet(params as any).promise();
  }

  getLinkAttributes: (params: RawParamsFrom<'getLinkAttributes'>) => Promise<ReturnTypeFrom<'getLinkAttributes'>>  = async params => {
  // undefined
    return this.client.getLinkAttributes(params as any).promise();
  }

  getObjectAttributes: (params: RawParamsFrom<'getObjectAttributes'>) => Promise<ReturnTypeFrom<'getObjectAttributes'>>  = async params => {
  // undefined
    return this.client.getObjectAttributes(params as any).promise();
  }

  getObjectInformation: (params: RawParamsFrom<'getObjectInformation'>) => Promise<ReturnTypeFrom<'getObjectInformation'>>  = async params => {
  // undefined
    return this.client.getObjectInformation(params as any).promise();
  }

  getSchemaAsJson: (params: RawParamsFrom<'getSchemaAsJson'>) => Promise<ReturnTypeFrom<'getSchemaAsJson'>>  = async params => {
  // undefined
    return this.client.getSchemaAsJson(params as any).promise();
  }

  getTypedLinkFacetInformation: (params: RawParamsFrom<'getTypedLinkFacetInformation'>) => Promise<ReturnTypeFrom<'getTypedLinkFacetInformation'>>  = async params => {
  // undefined
    return this.client.getTypedLinkFacetInformation(params as any).promise();
  }

  listAppliedSchemaArns: (params: RawParamsFrom<'listAppliedSchemaArns'>) => Promise<ReturnTypeFrom<'listAppliedSchemaArns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppliedSchemaArns(params as any).promise();
  }

  listAttachedIndices: (params: RawParamsFrom<'listAttachedIndices'>) => Promise<ReturnTypeFrom<'listAttachedIndices'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAttachedIndices(params as any).promise();
  }

  listDevelopmentSchemaArns: (params: RawParamsFrom<'listDevelopmentSchemaArns'>) => Promise<ReturnTypeFrom<'listDevelopmentSchemaArns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevelopmentSchemaArns(params as any).promise();
  }

  listDirectories: (params: RawParamsFrom<'listDirectories'>) => Promise<ReturnTypeFrom<'listDirectories'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDirectories(params as any).promise();
  }

  listFacetAttributes: (params: RawParamsFrom<'listFacetAttributes'>) => Promise<ReturnTypeFrom<'listFacetAttributes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFacetAttributes(params as any).promise();
  }

  listFacetNames: (params: RawParamsFrom<'listFacetNames'>) => Promise<ReturnTypeFrom<'listFacetNames'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFacetNames(params as any).promise();
  }

  listIncomingTypedLinks: (params: RawParamsFrom<'listIncomingTypedLinks'>) => Promise<ReturnTypeFrom<'listIncomingTypedLinks'>>  = async params => {
  // undefined
    return this.client.listIncomingTypedLinks(params as any).promise();
  }

  listIndex: (params: RawParamsFrom<'listIndex'>) => Promise<ReturnTypeFrom<'listIndex'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listIndex(params as any).promise();
  }

  listManagedSchemaArns: (params: RawParamsFrom<'listManagedSchemaArns'>) => Promise<ReturnTypeFrom<'listManagedSchemaArns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listManagedSchemaArns(params as any).promise();
  }

  listObjectAttributes: (params: RawParamsFrom<'listObjectAttributes'>) => Promise<ReturnTypeFrom<'listObjectAttributes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectAttributes(params as any).promise();
  }

  listObjectChildren: (params: RawParamsFrom<'listObjectChildren'>) => Promise<ReturnTypeFrom<'listObjectChildren'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectChildren(params as any).promise();
  }

  listObjectParentPaths: (params: RawParamsFrom<'listObjectParentPaths'>) => Promise<ReturnTypeFrom<'listObjectParentPaths'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectParentPaths(params as any).promise();
  }

  listObjectParents: (params: RawParamsFrom<'listObjectParents'>) => Promise<ReturnTypeFrom<'listObjectParents'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectParents(params as any).promise();
  }

  listObjectPolicies: (params: RawParamsFrom<'listObjectPolicies'>) => Promise<ReturnTypeFrom<'listObjectPolicies'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjectPolicies(params as any).promise();
  }

  listOutgoingTypedLinks: (params: RawParamsFrom<'listOutgoingTypedLinks'>) => Promise<ReturnTypeFrom<'listOutgoingTypedLinks'>>  = async params => {
  // undefined
    return this.client.listOutgoingTypedLinks(params as any).promise();
  }

  listPolicyAttachments: (params: RawParamsFrom<'listPolicyAttachments'>) => Promise<ReturnTypeFrom<'listPolicyAttachments'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPolicyAttachments(params as any).promise();
  }

  listPublishedSchemaArns: (params: RawParamsFrom<'listPublishedSchemaArns'>) => Promise<ReturnTypeFrom<'listPublishedSchemaArns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPublishedSchemaArns(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTagsForResource(params as any).promise();
  }

  listTypedLinkFacetAttributes: (params: RawParamsFrom<'listTypedLinkFacetAttributes'>) => Promise<ReturnTypeFrom<'listTypedLinkFacetAttributes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTypedLinkFacetAttributes(params as any).promise();
  }

  listTypedLinkFacetNames: (params: RawParamsFrom<'listTypedLinkFacetNames'>) => Promise<ReturnTypeFrom<'listTypedLinkFacetNames'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTypedLinkFacetNames(params as any).promise();
  }

  lookupPolicy: (params: RawParamsFrom<'lookupPolicy'>) => Promise<ReturnTypeFrom<'lookupPolicy'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.lookupPolicy(params as any).promise();
  }

  publishSchema: (params: RawParamsFrom<'publishSchema'>) => Promise<ReturnTypeFrom<'publishSchema'>>  = async params => {
  // undefined
    return this.client.publishSchema(params as any).promise();
  }

  putSchemaFromJson: (params: RawParamsFrom<'putSchemaFromJson'>) => Promise<ReturnTypeFrom<'putSchemaFromJson'>>  = async params => {
  // undefined
    return this.client.putSchemaFromJson(params as any).promise();
  }

  removeFacetFromObject: (params: RawParamsFrom<'removeFacetFromObject'>) => Promise<ReturnTypeFrom<'removeFacetFromObject'>>  = async params => {
  // undefined
    return this.client.removeFacetFromObject(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateFacet: (params: RawParamsFrom<'updateFacet'>) => Promise<ReturnTypeFrom<'updateFacet'>>  = async params => {
  // undefined
    return this.client.updateFacet(params as any).promise();
  }

  updateLinkAttributes: (params: RawParamsFrom<'updateLinkAttributes'>) => Promise<ReturnTypeFrom<'updateLinkAttributes'>>  = async params => {
  // undefined
    return this.client.updateLinkAttributes(params as any).promise();
  }

  updateObjectAttributes: (params: RawParamsFrom<'updateObjectAttributes'>) => Promise<ReturnTypeFrom<'updateObjectAttributes'>>  = async params => {
  // undefined
    return this.client.updateObjectAttributes(params as any).promise();
  }

  updateSchema: (params: RawParamsFrom<'updateSchema'>) => Promise<ReturnTypeFrom<'updateSchema'>>  = async params => {
  // undefined
    return this.client.updateSchema(params as any).promise();
  }

  updateTypedLinkFacet: (params: RawParamsFrom<'updateTypedLinkFacet'>) => Promise<ReturnTypeFrom<'updateTypedLinkFacet'>>  = async params => {
  // undefined
    return this.client.updateTypedLinkFacet(params as any).promise();
  }

  upgradeAppliedSchema: (params: RawParamsFrom<'upgradeAppliedSchema'>) => Promise<ReturnTypeFrom<'upgradeAppliedSchema'>>  = async params => {
  // undefined
    return this.client.upgradeAppliedSchema(params as any).promise();
  }

  upgradePublishedSchema: (params: RawParamsFrom<'upgradePublishedSchema'>) => Promise<ReturnTypeFrom<'upgradePublishedSchema'>>  = async params => {
  // undefined
    return this.client.upgradePublishedSchema(params as any).promise();
  }
  
  static fromClient(client: AWSCloudDirectory): CloudDirectory {
    return new CloudDirectory(client) as any;
  }
  
  static client(options?: AWSCloudDirectory.Types.ClientConfiguration): CloudDirectory {
    return new CloudDirectory(new AWSCloudDirectory(options)) as any;
  }
}  
