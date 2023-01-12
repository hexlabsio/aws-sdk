import { Request, Omics as AWSOmics } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSOmics> = AWSOmics[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSOmics> = AWSOmics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSOmics[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSOmics, Extras> = AWSOmics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSOmics> = AWSOmics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Omics {
  private constructor(private readonly client: AWSOmics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'omics' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listAnnotationImportJobs","listAnnotationStores","listReferenceStores","listRunGroups","listRuns","listSequenceStores","listVariantImportJobs","listVariantStores","listWorkflows"] as const;
  
  batchDeleteReadSet: (params: RawParamsFrom<'batchDeleteReadSet'>) => Promise<ReturnTypeFrom<'batchDeleteReadSet'>>  = async params => {
  // undefined
    return this.client.batchDeleteReadSet(params as any).promise();
  }

  cancelAnnotationImportJob: (params: RawParamsFrom<'cancelAnnotationImportJob'>) => Promise<ReturnTypeFrom<'cancelAnnotationImportJob'>>  = async params => {
  // undefined
    return this.client.cancelAnnotationImportJob(params as any).promise();
  }

  cancelRun: (params: RawParamsFrom<'cancelRun'>) => Promise<ReturnTypeFrom<'cancelRun'>>  = async params => {
  // undefined
    return this.client.cancelRun(params as any).promise();
  }

  cancelVariantImportJob: (params: RawParamsFrom<'cancelVariantImportJob'>) => Promise<ReturnTypeFrom<'cancelVariantImportJob'>>  = async params => {
  // undefined
    return this.client.cancelVariantImportJob(params as any).promise();
  }

  createAnnotationStore: (params: RawParamsFrom<'createAnnotationStore'>) => Promise<ReturnTypeFrom<'createAnnotationStore'>>  = async params => {
  // undefined
    return this.client.createAnnotationStore(params as any).promise();
  }

  createReferenceStore: (params: RawParamsFrom<'createReferenceStore'>) => Promise<ReturnTypeFrom<'createReferenceStore'>>  = async params => {
  // undefined
    return this.client.createReferenceStore(params as any).promise();
  }

  createRunGroup: (params: RawParamsFrom<'createRunGroup'>) => Promise<ReturnTypeFrom<'createRunGroup'>>  = async params => {
  // undefined
    return this.client.createRunGroup(params as any).promise();
  }

  createSequenceStore: (params: RawParamsFrom<'createSequenceStore'>) => Promise<ReturnTypeFrom<'createSequenceStore'>>  = async params => {
  // undefined
    return this.client.createSequenceStore(params as any).promise();
  }

  createVariantStore: (params: RawParamsFrom<'createVariantStore'>) => Promise<ReturnTypeFrom<'createVariantStore'>>  = async params => {
  // undefined
    return this.client.createVariantStore(params as any).promise();
  }

  createWorkflow: (params: RawParamsFrom<'createWorkflow'>) => Promise<ReturnTypeFrom<'createWorkflow'>>  = async params => {
  // undefined
    return this.client.createWorkflow(params as any).promise();
  }

  deleteAnnotationStore: (params: RawParamsFrom<'deleteAnnotationStore'>) => Promise<ReturnTypeFrom<'deleteAnnotationStore'>>  = async params => {
  // undefined
    return this.client.deleteAnnotationStore(params as any).promise();
  }

  deleteReference: (params: RawParamsFrom<'deleteReference'>) => Promise<ReturnTypeFrom<'deleteReference'>>  = async params => {
  // undefined
    return this.client.deleteReference(params as any).promise();
  }

  deleteReferenceStore: (params: RawParamsFrom<'deleteReferenceStore'>) => Promise<ReturnTypeFrom<'deleteReferenceStore'>>  = async params => {
  // undefined
    return this.client.deleteReferenceStore(params as any).promise();
  }

  deleteRun: (params: RawParamsFrom<'deleteRun'>) => Promise<ReturnTypeFrom<'deleteRun'>>  = async params => {
  // undefined
    return this.client.deleteRun(params as any).promise();
  }

  deleteRunGroup: (params: RawParamsFrom<'deleteRunGroup'>) => Promise<ReturnTypeFrom<'deleteRunGroup'>>  = async params => {
  // undefined
    return this.client.deleteRunGroup(params as any).promise();
  }

  deleteSequenceStore: (params: RawParamsFrom<'deleteSequenceStore'>) => Promise<ReturnTypeFrom<'deleteSequenceStore'>>  = async params => {
  // undefined
    return this.client.deleteSequenceStore(params as any).promise();
  }

  deleteVariantStore: (params: RawParamsFrom<'deleteVariantStore'>) => Promise<ReturnTypeFrom<'deleteVariantStore'>>  = async params => {
  // undefined
    return this.client.deleteVariantStore(params as any).promise();
  }

  deleteWorkflow: (params: RawParamsFrom<'deleteWorkflow'>) => Promise<ReturnTypeFrom<'deleteWorkflow'>>  = async params => {
  // undefined
    return this.client.deleteWorkflow(params as any).promise();
  }

  getAnnotationImportJob: (params: RawParamsFrom<'getAnnotationImportJob'>) => Promise<ReturnTypeFrom<'getAnnotationImportJob'>>  = async params => {
  // undefined
    return this.client.getAnnotationImportJob(params as any).promise();
  }

  getAnnotationStore: (params: RawParamsFrom<'getAnnotationStore'>) => Promise<ReturnTypeFrom<'getAnnotationStore'>>  = async params => {
  // undefined
    return this.client.getAnnotationStore(params as any).promise();
  }

  getReadSet: (params: RawParamsFrom<'getReadSet'>) => Promise<ReturnTypeFrom<'getReadSet'>>  = async params => {
  // undefined
    return this.client.getReadSet(params as any).promise();
  }

  getReadSetActivationJob: (params: RawParamsFrom<'getReadSetActivationJob'>) => Promise<ReturnTypeFrom<'getReadSetActivationJob'>>  = async params => {
  // undefined
    return this.client.getReadSetActivationJob(params as any).promise();
  }

  getReadSetExportJob: (params: RawParamsFrom<'getReadSetExportJob'>) => Promise<ReturnTypeFrom<'getReadSetExportJob'>>  = async params => {
  // undefined
    return this.client.getReadSetExportJob(params as any).promise();
  }

  getReadSetImportJob: (params: RawParamsFrom<'getReadSetImportJob'>) => Promise<ReturnTypeFrom<'getReadSetImportJob'>>  = async params => {
  // undefined
    return this.client.getReadSetImportJob(params as any).promise();
  }

  getReadSetMetadata: (params: RawParamsFrom<'getReadSetMetadata'>) => Promise<ReturnTypeFrom<'getReadSetMetadata'>>  = async params => {
  // undefined
    return this.client.getReadSetMetadata(params as any).promise();
  }

  getReference: (params: RawParamsFrom<'getReference'>) => Promise<ReturnTypeFrom<'getReference'>>  = async params => {
  // undefined
    return this.client.getReference(params as any).promise();
  }

  getReferenceImportJob: (params: RawParamsFrom<'getReferenceImportJob'>) => Promise<ReturnTypeFrom<'getReferenceImportJob'>>  = async params => {
  // undefined
    return this.client.getReferenceImportJob(params as any).promise();
  }

  getReferenceMetadata: (params: RawParamsFrom<'getReferenceMetadata'>) => Promise<ReturnTypeFrom<'getReferenceMetadata'>>  = async params => {
  // undefined
    return this.client.getReferenceMetadata(params as any).promise();
  }

  getReferenceStore: (params: RawParamsFrom<'getReferenceStore'>) => Promise<ReturnTypeFrom<'getReferenceStore'>>  = async params => {
  // undefined
    return this.client.getReferenceStore(params as any).promise();
  }

  getRun: (params: RawParamsFrom<'getRun'>) => Promise<ReturnTypeFrom<'getRun'>>  = async params => {
  // undefined
    return this.client.getRun(params as any).promise();
  }

  getRunGroup: (params: RawParamsFrom<'getRunGroup'>) => Promise<ReturnTypeFrom<'getRunGroup'>>  = async params => {
  // undefined
    return this.client.getRunGroup(params as any).promise();
  }

  getRunTask: (params: RawParamsFrom<'getRunTask'>) => Promise<ReturnTypeFrom<'getRunTask'>>  = async params => {
  // undefined
    return this.client.getRunTask(params as any).promise();
  }

  getSequenceStore: (params: RawParamsFrom<'getSequenceStore'>) => Promise<ReturnTypeFrom<'getSequenceStore'>>  = async params => {
  // undefined
    return this.client.getSequenceStore(params as any).promise();
  }

  getVariantImportJob: (params: RawParamsFrom<'getVariantImportJob'>) => Promise<ReturnTypeFrom<'getVariantImportJob'>>  = async params => {
  // undefined
    return this.client.getVariantImportJob(params as any).promise();
  }

  getVariantStore: (params: RawParamsFrom<'getVariantStore'>) => Promise<ReturnTypeFrom<'getVariantStore'>>  = async params => {
  // undefined
    return this.client.getVariantStore(params as any).promise();
  }

  getWorkflow: (params: RawParamsFrom<'getWorkflow'>) => Promise<ReturnTypeFrom<'getWorkflow'>>  = async params => {
  // undefined
    return this.client.getWorkflow(params as any).promise();
  }

  async listAnnotationImportJobs(params: { [K in keyof ParamsFrom<'listAnnotationImportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listAnnotationImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAnnotationImportJobs'>]-?: ReturnTypeFrom<'listAnnotationImportJobs'>[K]}['annotationImportJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"annotationImportJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAnnotationImportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAnnotationImportJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.annotationImportJobs ?? []) ? (result.annotationImportJobs ?? []) : [result.annotationImportJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAnnotationStores(params: { [K in keyof ParamsFrom<'listAnnotationStores', { next?: string, limit?: number }>]: ParamsFrom<'listAnnotationStores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAnnotationStores'>]-?: ReturnTypeFrom<'listAnnotationStores'>[K]}['annotationStores'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"annotationStores"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAnnotationStores({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAnnotationStores' })).toString('base64') : undefined;
    const member = (Array.isArray(result.annotationStores ?? []) ? (result.annotationStores ?? []) : [result.annotationStores]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReadSetActivationJobs(params: { [K in keyof ParamsFrom<'listReadSetActivationJobs', { next?: string, limit?: number }>]: ParamsFrom<'listReadSetActivationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReadSetActivationJobs'>]-?: ReturnTypeFrom<'listReadSetActivationJobs'>[K]}['activationJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"activationJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReadSetActivationJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReadSetActivationJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.activationJobs ?? []) ? (result.activationJobs ?? []) : [result.activationJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReadSetExportJobs(params: { [K in keyof ParamsFrom<'listReadSetExportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listReadSetExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReadSetExportJobs'>]-?: ReturnTypeFrom<'listReadSetExportJobs'>[K]}['exportJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"exportJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReadSetExportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReadSetExportJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.exportJobs ?? []) ? (result.exportJobs ?? []) : [result.exportJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReadSetImportJobs(params: { [K in keyof ParamsFrom<'listReadSetImportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listReadSetImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReadSetImportJobs'>]-?: ReturnTypeFrom<'listReadSetImportJobs'>[K]}['importJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"importJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReadSetImportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReadSetImportJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.importJobs ?? []) ? (result.importJobs ?? []) : [result.importJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReadSets(params: { [K in keyof ParamsFrom<'listReadSets', { next?: string, limit?: number }>]: ParamsFrom<'listReadSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReadSets'>]-?: ReturnTypeFrom<'listReadSets'>[K]}['readSets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"readSets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReadSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReadSets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.readSets ?? []) ? (result.readSets ?? []) : [result.readSets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReferenceImportJobs(params: { [K in keyof ParamsFrom<'listReferenceImportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listReferenceImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReferenceImportJobs'>]-?: ReturnTypeFrom<'listReferenceImportJobs'>[K]}['importJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"importJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReferenceImportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReferenceImportJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.importJobs ?? []) ? (result.importJobs ?? []) : [result.importJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReferenceStores(params: { [K in keyof ParamsFrom<'listReferenceStores', { next?: string, limit?: number }>]: ParamsFrom<'listReferenceStores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReferenceStores'>]-?: ReturnTypeFrom<'listReferenceStores'>[K]}['referenceStores'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"referenceStores"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReferenceStores({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReferenceStores' })).toString('base64') : undefined;
    const member = (Array.isArray(result.referenceStores ?? []) ? (result.referenceStores ?? []) : [result.referenceStores]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReferences(params: { [K in keyof ParamsFrom<'listReferences', { next?: string, limit?: number }>]: ParamsFrom<'listReferences', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReferences'>]-?: ReturnTypeFrom<'listReferences'>[K]}['references'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"references"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReferences({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReferences' })).toString('base64') : undefined;
    const member = (Array.isArray(result.references ?? []) ? (result.references ?? []) : [result.references]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRunGroups(params: { [K in keyof ParamsFrom<'listRunGroups', { next?: string, limit?: number }>]: ParamsFrom<'listRunGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRunGroups'>]-?: ReturnTypeFrom<'listRunGroups'>[K]}['items'], undefined>}> {
    // {"inputToken":"startingToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { startingToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRunGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRunGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRunTasks(params: { [K in keyof ParamsFrom<'listRunTasks', { next?: string, limit?: number }>]: ParamsFrom<'listRunTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRunTasks'>]-?: ReturnTypeFrom<'listRunTasks'>[K]}['items'], undefined>}> {
    // {"inputToken":"startingToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { startingToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRunTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRunTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRuns(params: { [K in keyof ParamsFrom<'listRuns', { next?: string, limit?: number }>]: ParamsFrom<'listRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRuns'>]-?: ReturnTypeFrom<'listRuns'>[K]}['items'], undefined>}> {
    // {"inputToken":"startingToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { startingToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRuns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRuns' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSequenceStores(params: { [K in keyof ParamsFrom<'listSequenceStores', { next?: string, limit?: number }>]: ParamsFrom<'listSequenceStores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSequenceStores'>]-?: ReturnTypeFrom<'listSequenceStores'>[K]}['sequenceStores'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"sequenceStores"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSequenceStores({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSequenceStores' })).toString('base64') : undefined;
    const member = (Array.isArray(result.sequenceStores ?? []) ? (result.sequenceStores ?? []) : [result.sequenceStores]) as any;
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

  async listVariantImportJobs(params: { [K in keyof ParamsFrom<'listVariantImportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listVariantImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVariantImportJobs'>]-?: ReturnTypeFrom<'listVariantImportJobs'>[K]}['variantImportJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"variantImportJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listVariantImportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listVariantImportJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.variantImportJobs ?? []) ? (result.variantImportJobs ?? []) : [result.variantImportJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVariantStores(params: { [K in keyof ParamsFrom<'listVariantStores', { next?: string, limit?: number }>]: ParamsFrom<'listVariantStores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVariantStores'>]-?: ReturnTypeFrom<'listVariantStores'>[K]}['variantStores'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"variantStores"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listVariantStores({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listVariantStores' })).toString('base64') : undefined;
    const member = (Array.isArray(result.variantStores ?? []) ? (result.variantStores ?? []) : [result.variantStores]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkflows(params: { [K in keyof ParamsFrom<'listWorkflows', { next?: string, limit?: number }>]: ParamsFrom<'listWorkflows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkflows'>]-?: ReturnTypeFrom<'listWorkflows'>[K]}['items'], undefined>}> {
    // {"inputToken":"startingToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { startingToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkflows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listWorkflows' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startAnnotationImportJob: (params: RawParamsFrom<'startAnnotationImportJob'>) => Promise<ReturnTypeFrom<'startAnnotationImportJob'>>  = async params => {
  // undefined
    return this.client.startAnnotationImportJob(params as any).promise();
  }

  startReadSetActivationJob: (params: RawParamsFrom<'startReadSetActivationJob'>) => Promise<ReturnTypeFrom<'startReadSetActivationJob'>>  = async params => {
  // undefined
    return this.client.startReadSetActivationJob(params as any).promise();
  }

  startReadSetExportJob: (params: RawParamsFrom<'startReadSetExportJob'>) => Promise<ReturnTypeFrom<'startReadSetExportJob'>>  = async params => {
  // undefined
    return this.client.startReadSetExportJob(params as any).promise();
  }

  startReadSetImportJob: (params: RawParamsFrom<'startReadSetImportJob'>) => Promise<ReturnTypeFrom<'startReadSetImportJob'>>  = async params => {
  // undefined
    return this.client.startReadSetImportJob(params as any).promise();
  }

  startReferenceImportJob: (params: RawParamsFrom<'startReferenceImportJob'>) => Promise<ReturnTypeFrom<'startReferenceImportJob'>>  = async params => {
  // undefined
    return this.client.startReferenceImportJob(params as any).promise();
  }

  startRun: (params: RawParamsFrom<'startRun'>) => Promise<ReturnTypeFrom<'startRun'>>  = async params => {
  // undefined
    return this.client.startRun(params as any).promise();
  }

  startVariantImportJob: (params: RawParamsFrom<'startVariantImportJob'>) => Promise<ReturnTypeFrom<'startVariantImportJob'>>  = async params => {
  // undefined
    return this.client.startVariantImportJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAnnotationStore: (params: RawParamsFrom<'updateAnnotationStore'>) => Promise<ReturnTypeFrom<'updateAnnotationStore'>>  = async params => {
  // undefined
    return this.client.updateAnnotationStore(params as any).promise();
  }

  updateRunGroup: (params: RawParamsFrom<'updateRunGroup'>) => Promise<ReturnTypeFrom<'updateRunGroup'>>  = async params => {
  // undefined
    return this.client.updateRunGroup(params as any).promise();
  }

  updateVariantStore: (params: RawParamsFrom<'updateVariantStore'>) => Promise<ReturnTypeFrom<'updateVariantStore'>>  = async params => {
  // undefined
    return this.client.updateVariantStore(params as any).promise();
  }

  updateWorkflow: (params: RawParamsFrom<'updateWorkflow'>) => Promise<ReturnTypeFrom<'updateWorkflow'>>  = async params => {
  // undefined
    return this.client.updateWorkflow(params as any).promise();
  }
  
  static fromClient(client: AWSOmics): Omics {
    return new Omics(client) as any;
  }
  
  static client(options?: AWSOmics.Types.ClientConfiguration): Omics {
    return new Omics(new AWSOmics(options)) as any;
  }
}  
