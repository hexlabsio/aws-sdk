import { Request, DeviceFarm as AWSDeviceFarm } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDeviceFarm> = AWSDeviceFarm[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDeviceFarm> = AWSDeviceFarm[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDeviceFarm[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDeviceFarm, Extras> = AWSDeviceFarm[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDeviceFarm> = AWSDeviceFarm[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DeviceFarm {
  private constructor(private readonly client: AWSDeviceFarm) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'devicefarm' as const;
  public readonly global = false as const;
  public readonly category = 'Front-End Web & Mobile' as const;
  public readonly topLevelCalls = ["getOfferingStatus","listDevices","listOfferingTransactions","listOfferings","listProjects","listTestGridProjects"] as const;
  
  createDevicePool: (params: RawParamsFrom<'createDevicePool'>) => Promise<ReturnTypeFrom<'createDevicePool'>>  = async params => {
  // undefined
    return this.client.createDevicePool(params as any).promise();
  }

  createInstanceProfile: (params: RawParamsFrom<'createInstanceProfile'>) => Promise<ReturnTypeFrom<'createInstanceProfile'>>  = async params => {
  // undefined
    return this.client.createInstanceProfile(params as any).promise();
  }

  createNetworkProfile: (params: RawParamsFrom<'createNetworkProfile'>) => Promise<ReturnTypeFrom<'createNetworkProfile'>>  = async params => {
  // undefined
    return this.client.createNetworkProfile(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  createRemoteAccessSession: (params: RawParamsFrom<'createRemoteAccessSession'>) => Promise<ReturnTypeFrom<'createRemoteAccessSession'>>  = async params => {
  // undefined
    return this.client.createRemoteAccessSession(params as any).promise();
  }

  createTestGridProject: (params: RawParamsFrom<'createTestGridProject'>) => Promise<ReturnTypeFrom<'createTestGridProject'>>  = async params => {
  // undefined
    return this.client.createTestGridProject(params as any).promise();
  }

  createTestGridUrl: (params: RawParamsFrom<'createTestGridUrl'>) => Promise<ReturnTypeFrom<'createTestGridUrl'>>  = async params => {
  // undefined
    return this.client.createTestGridUrl(params as any).promise();
  }

  createUpload: (params: RawParamsFrom<'createUpload'>) => Promise<ReturnTypeFrom<'createUpload'>>  = async params => {
  // undefined
    return this.client.createUpload(params as any).promise();
  }

  createVPCEConfiguration: (params: RawParamsFrom<'createVPCEConfiguration'>) => Promise<ReturnTypeFrom<'createVPCEConfiguration'>>  = async params => {
  // undefined
    return this.client.createVPCEConfiguration(params as any).promise();
  }

  deleteDevicePool: (params: RawParamsFrom<'deleteDevicePool'>) => Promise<ReturnTypeFrom<'deleteDevicePool'>>  = async params => {
  // undefined
    return this.client.deleteDevicePool(params as any).promise();
  }

  deleteInstanceProfile: (params: RawParamsFrom<'deleteInstanceProfile'>) => Promise<ReturnTypeFrom<'deleteInstanceProfile'>>  = async params => {
  // undefined
    return this.client.deleteInstanceProfile(params as any).promise();
  }

  deleteNetworkProfile: (params: RawParamsFrom<'deleteNetworkProfile'>) => Promise<ReturnTypeFrom<'deleteNetworkProfile'>>  = async params => {
  // undefined
    return this.client.deleteNetworkProfile(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  deleteRemoteAccessSession: (params: RawParamsFrom<'deleteRemoteAccessSession'>) => Promise<ReturnTypeFrom<'deleteRemoteAccessSession'>>  = async params => {
  // undefined
    return this.client.deleteRemoteAccessSession(params as any).promise();
  }

  deleteRun: (params: RawParamsFrom<'deleteRun'>) => Promise<ReturnTypeFrom<'deleteRun'>>  = async params => {
  // undefined
    return this.client.deleteRun(params as any).promise();
  }

  deleteTestGridProject: (params: RawParamsFrom<'deleteTestGridProject'>) => Promise<ReturnTypeFrom<'deleteTestGridProject'>>  = async params => {
  // undefined
    return this.client.deleteTestGridProject(params as any).promise();
  }

  deleteUpload: (params: RawParamsFrom<'deleteUpload'>) => Promise<ReturnTypeFrom<'deleteUpload'>>  = async params => {
  // undefined
    return this.client.deleteUpload(params as any).promise();
  }

  deleteVPCEConfiguration: (params: RawParamsFrom<'deleteVPCEConfiguration'>) => Promise<ReturnTypeFrom<'deleteVPCEConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteVPCEConfiguration(params as any).promise();
  }

  getAccountSettings: (params: RawParamsFrom<'getAccountSettings'>) => Promise<ReturnTypeFrom<'getAccountSettings'>>  = async params => {
  // undefined
    return this.client.getAccountSettings(params as any).promise();
  }

  getDevice: (params: RawParamsFrom<'getDevice'>) => Promise<ReturnTypeFrom<'getDevice'>>  = async params => {
  // undefined
    return this.client.getDevice(params as any).promise();
  }

  getDeviceInstance: (params: RawParamsFrom<'getDeviceInstance'>) => Promise<ReturnTypeFrom<'getDeviceInstance'>>  = async params => {
  // undefined
    return this.client.getDeviceInstance(params as any).promise();
  }

  getDevicePool: (params: RawParamsFrom<'getDevicePool'>) => Promise<ReturnTypeFrom<'getDevicePool'>>  = async params => {
  // undefined
    return this.client.getDevicePool(params as any).promise();
  }

  getDevicePoolCompatibility: (params: RawParamsFrom<'getDevicePoolCompatibility'>) => Promise<ReturnTypeFrom<'getDevicePoolCompatibility'>>  = async params => {
  // undefined
    return this.client.getDevicePoolCompatibility(params as any).promise();
  }

  getInstanceProfile: (params: RawParamsFrom<'getInstanceProfile'>) => Promise<ReturnTypeFrom<'getInstanceProfile'>>  = async params => {
  // undefined
    return this.client.getInstanceProfile(params as any).promise();
  }

  getJob: (params: RawParamsFrom<'getJob'>) => Promise<ReturnTypeFrom<'getJob'>>  = async params => {
  // undefined
    return this.client.getJob(params as any).promise();
  }

  getNetworkProfile: (params: RawParamsFrom<'getNetworkProfile'>) => Promise<ReturnTypeFrom<'getNetworkProfile'>>  = async params => {
  // undefined
    return this.client.getNetworkProfile(params as any).promise();
  }

  getOfferingStatus: (params: RawParamsFrom<'getOfferingStatus'>) => Promise<ReturnTypeFrom<'getOfferingStatus'>>  = async params => {
  // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":["current","nextPeriod"]}
    return this.client.getOfferingStatus(params as any).promise();
  }

  getProject: (params: RawParamsFrom<'getProject'>) => Promise<ReturnTypeFrom<'getProject'>>  = async params => {
  // undefined
    return this.client.getProject(params as any).promise();
  }

  getRemoteAccessSession: (params: RawParamsFrom<'getRemoteAccessSession'>) => Promise<ReturnTypeFrom<'getRemoteAccessSession'>>  = async params => {
  // undefined
    return this.client.getRemoteAccessSession(params as any).promise();
  }

  getRun: (params: RawParamsFrom<'getRun'>) => Promise<ReturnTypeFrom<'getRun'>>  = async params => {
  // undefined
    return this.client.getRun(params as any).promise();
  }

  getSuite: (params: RawParamsFrom<'getSuite'>) => Promise<ReturnTypeFrom<'getSuite'>>  = async params => {
  // undefined
    return this.client.getSuite(params as any).promise();
  }

  getTest: (params: RawParamsFrom<'getTest'>) => Promise<ReturnTypeFrom<'getTest'>>  = async params => {
  // undefined
    return this.client.getTest(params as any).promise();
  }

  getTestGridProject: (params: RawParamsFrom<'getTestGridProject'>) => Promise<ReturnTypeFrom<'getTestGridProject'>>  = async params => {
  // undefined
    return this.client.getTestGridProject(params as any).promise();
  }

  getTestGridSession: (params: RawParamsFrom<'getTestGridSession'>) => Promise<ReturnTypeFrom<'getTestGridSession'>>  = async params => {
  // undefined
    return this.client.getTestGridSession(params as any).promise();
  }

  getUpload: (params: RawParamsFrom<'getUpload'>) => Promise<ReturnTypeFrom<'getUpload'>>  = async params => {
  // undefined
    return this.client.getUpload(params as any).promise();
  }

  getVPCEConfiguration: (params: RawParamsFrom<'getVPCEConfiguration'>) => Promise<ReturnTypeFrom<'getVPCEConfiguration'>>  = async params => {
  // undefined
    return this.client.getVPCEConfiguration(params as any).promise();
  }

  installToRemoteAccessSession: (params: RawParamsFrom<'installToRemoteAccessSession'>) => Promise<ReturnTypeFrom<'installToRemoteAccessSession'>>  = async params => {
  // undefined
    return this.client.installToRemoteAccessSession(params as any).promise();
  }

  async listArtifacts(params: { [K in keyof ParamsFrom<'listArtifacts', { next?: string }>]: ParamsFrom<'listArtifacts', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listArtifacts'>]-?: ReturnTypeFrom<'listArtifacts'>[K]}['artifacts'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"artifacts"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listArtifacts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listArtifacts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.artifacts ?? []) ? (result.artifacts ?? []) : [result.artifacts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listDeviceInstances: (params: RawParamsFrom<'listDeviceInstances'>) => Promise<ReturnTypeFrom<'listDeviceInstances'>>  = async params => {
  // undefined
    return this.client.listDeviceInstances(params as any).promise();
  }

  async listDevicePools(params: { [K in keyof ParamsFrom<'listDevicePools', { next?: string }>]: ParamsFrom<'listDevicePools', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDevicePools'>]-?: ReturnTypeFrom<'listDevicePools'>[K]}['devicePools'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"devicePools"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listDevicePools({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDevicePools' })).toString('base64') : undefined;
    const member = (Array.isArray(result.devicePools ?? []) ? (result.devicePools ?? []) : [result.devicePools]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDevices(params: { [K in keyof ParamsFrom<'listDevices', { next?: string }>]: ParamsFrom<'listDevices', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDevices'>]-?: ReturnTypeFrom<'listDevices'>[K]}['devices'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"devices"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listDevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDevices' })).toString('base64') : undefined;
    const member = (Array.isArray(result.devices ?? []) ? (result.devices ?? []) : [result.devices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listInstanceProfiles: (params: RawParamsFrom<'listInstanceProfiles'>) => Promise<ReturnTypeFrom<'listInstanceProfiles'>>  = async params => {
  // undefined
    return this.client.listInstanceProfiles(params as any).promise();
  }

  async listJobs(params: { [K in keyof ParamsFrom<'listJobs', { next?: string }>]: ParamsFrom<'listJobs', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['jobs'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"jobs"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.jobs ?? []) ? (result.jobs ?? []) : [result.jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listNetworkProfiles: (params: RawParamsFrom<'listNetworkProfiles'>) => Promise<ReturnTypeFrom<'listNetworkProfiles'>>  = async params => {
  // undefined
    return this.client.listNetworkProfiles(params as any).promise();
  }

  listOfferingPromotions: (params: RawParamsFrom<'listOfferingPromotions'>) => Promise<ReturnTypeFrom<'listOfferingPromotions'>>  = async params => {
  // undefined
    return this.client.listOfferingPromotions(params as any).promise();
  }

  async listOfferingTransactions(params: { [K in keyof ParamsFrom<'listOfferingTransactions', { next?: string }>]: ParamsFrom<'listOfferingTransactions', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOfferingTransactions'>]-?: ReturnTypeFrom<'listOfferingTransactions'>[K]}['offeringTransactions'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"offeringTransactions"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listOfferingTransactions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listOfferingTransactions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.offeringTransactions ?? []) ? (result.offeringTransactions ?? []) : [result.offeringTransactions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOfferings(params: { [K in keyof ParamsFrom<'listOfferings', { next?: string }>]: ParamsFrom<'listOfferings', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOfferings'>]-?: ReturnTypeFrom<'listOfferings'>[K]}['offerings'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"offerings"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listOfferings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.offerings ?? []) ? (result.offerings ?? []) : [result.offerings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(params: { [K in keyof ParamsFrom<'listProjects', { next?: string }>]: ParamsFrom<'listProjects', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"projects"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProjects' })).toString('base64') : undefined;
    const member = (Array.isArray(result.projects ?? []) ? (result.projects ?? []) : [result.projects]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listRemoteAccessSessions: (params: RawParamsFrom<'listRemoteAccessSessions'>) => Promise<ReturnTypeFrom<'listRemoteAccessSessions'>>  = async params => {
  // undefined
    return this.client.listRemoteAccessSessions(params as any).promise();
  }

  async listRuns(params: { [K in keyof ParamsFrom<'listRuns', { next?: string }>]: ParamsFrom<'listRuns', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRuns'>]-?: ReturnTypeFrom<'listRuns'>[K]}['runs'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"runs"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listRuns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRuns' })).toString('base64') : undefined;
    const member = (Array.isArray(result.runs ?? []) ? (result.runs ?? []) : [result.runs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSamples(params: { [K in keyof ParamsFrom<'listSamples', { next?: string }>]: ParamsFrom<'listSamples', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSamples'>]-?: ReturnTypeFrom<'listSamples'>[K]}['samples'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"samples"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listSamples({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSamples' })).toString('base64') : undefined;
    const member = (Array.isArray(result.samples ?? []) ? (result.samples ?? []) : [result.samples]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSuites(params: { [K in keyof ParamsFrom<'listSuites', { next?: string }>]: ParamsFrom<'listSuites', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSuites'>]-?: ReturnTypeFrom<'listSuites'>[K]}['suites'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"suites"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listSuites({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSuites' })).toString('base64') : undefined;
    const member = (Array.isArray(result.suites ?? []) ? (result.suites ?? []) : [result.suites]) as any;
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

  listTestGridProjects: (params: RawParamsFrom<'listTestGridProjects'>) => Promise<ReturnTypeFrom<'listTestGridProjects'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResult","outputToken":"nextToken"}
    return this.client.listTestGridProjects(params as any).promise();
  }

  listTestGridSessionActions: (params: RawParamsFrom<'listTestGridSessionActions'>) => Promise<ReturnTypeFrom<'listTestGridSessionActions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResult","outputToken":"nextToken"}
    return this.client.listTestGridSessionActions(params as any).promise();
  }

  listTestGridSessionArtifacts: (params: RawParamsFrom<'listTestGridSessionArtifacts'>) => Promise<ReturnTypeFrom<'listTestGridSessionArtifacts'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResult","outputToken":"nextToken"}
    return this.client.listTestGridSessionArtifacts(params as any).promise();
  }

  listTestGridSessions: (params: RawParamsFrom<'listTestGridSessions'>) => Promise<ReturnTypeFrom<'listTestGridSessions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResult","outputToken":"nextToken"}
    return this.client.listTestGridSessions(params as any).promise();
  }

  async listTests(params: { [K in keyof ParamsFrom<'listTests', { next?: string }>]: ParamsFrom<'listTests', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTests'>]-?: ReturnTypeFrom<'listTests'>[K]}['tests'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"tests"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listTests({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTests' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tests ?? []) ? (result.tests ?? []) : [result.tests]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUniqueProblems(params: { [K in keyof ParamsFrom<'listUniqueProblems', { next?: string }>]: ParamsFrom<'listUniqueProblems', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUniqueProblems'>]-?: ReturnTypeFrom<'listUniqueProblems'>[K]}['uniqueProblems'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"uniqueProblems"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listUniqueProblems({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listUniqueProblems' })).toString('base64') : undefined;
    const member = (Array.isArray(result.uniqueProblems ?? []) ? (result.uniqueProblems ?? []) : [result.uniqueProblems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUploads(params: { [K in keyof ParamsFrom<'listUploads', { next?: string }>]: ParamsFrom<'listUploads', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUploads'>]-?: ReturnTypeFrom<'listUploads'>[K]}['uploads'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"uploads"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listUploads({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listUploads' })).toString('base64') : undefined;
    const member = (Array.isArray(result.uploads ?? []) ? (result.uploads ?? []) : [result.uploads]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listVPCEConfigurations: (params: RawParamsFrom<'listVPCEConfigurations'>) => Promise<ReturnTypeFrom<'listVPCEConfigurations'>>  = async params => {
  // undefined
    return this.client.listVPCEConfigurations(params as any).promise();
  }

  purchaseOffering: (params: RawParamsFrom<'purchaseOffering'>) => Promise<ReturnTypeFrom<'purchaseOffering'>>  = async params => {
  // undefined
    return this.client.purchaseOffering(params as any).promise();
  }

  renewOffering: (params: RawParamsFrom<'renewOffering'>) => Promise<ReturnTypeFrom<'renewOffering'>>  = async params => {
  // undefined
    return this.client.renewOffering(params as any).promise();
  }

  scheduleRun: (params: RawParamsFrom<'scheduleRun'>) => Promise<ReturnTypeFrom<'scheduleRun'>>  = async params => {
  // undefined
    return this.client.scheduleRun(params as any).promise();
  }

  stopJob: (params: RawParamsFrom<'stopJob'>) => Promise<ReturnTypeFrom<'stopJob'>>  = async params => {
  // undefined
    return this.client.stopJob(params as any).promise();
  }

  stopRemoteAccessSession: (params: RawParamsFrom<'stopRemoteAccessSession'>) => Promise<ReturnTypeFrom<'stopRemoteAccessSession'>>  = async params => {
  // undefined
    return this.client.stopRemoteAccessSession(params as any).promise();
  }

  stopRun: (params: RawParamsFrom<'stopRun'>) => Promise<ReturnTypeFrom<'stopRun'>>  = async params => {
  // undefined
    return this.client.stopRun(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDeviceInstance: (params: RawParamsFrom<'updateDeviceInstance'>) => Promise<ReturnTypeFrom<'updateDeviceInstance'>>  = async params => {
  // undefined
    return this.client.updateDeviceInstance(params as any).promise();
  }

  updateDevicePool: (params: RawParamsFrom<'updateDevicePool'>) => Promise<ReturnTypeFrom<'updateDevicePool'>>  = async params => {
  // undefined
    return this.client.updateDevicePool(params as any).promise();
  }

  updateInstanceProfile: (params: RawParamsFrom<'updateInstanceProfile'>) => Promise<ReturnTypeFrom<'updateInstanceProfile'>>  = async params => {
  // undefined
    return this.client.updateInstanceProfile(params as any).promise();
  }

  updateNetworkProfile: (params: RawParamsFrom<'updateNetworkProfile'>) => Promise<ReturnTypeFrom<'updateNetworkProfile'>>  = async params => {
  // undefined
    return this.client.updateNetworkProfile(params as any).promise();
  }

  updateProject: (params: RawParamsFrom<'updateProject'>) => Promise<ReturnTypeFrom<'updateProject'>>  = async params => {
  // undefined
    return this.client.updateProject(params as any).promise();
  }

  updateTestGridProject: (params: RawParamsFrom<'updateTestGridProject'>) => Promise<ReturnTypeFrom<'updateTestGridProject'>>  = async params => {
  // undefined
    return this.client.updateTestGridProject(params as any).promise();
  }

  updateUpload: (params: RawParamsFrom<'updateUpload'>) => Promise<ReturnTypeFrom<'updateUpload'>>  = async params => {
  // undefined
    return this.client.updateUpload(params as any).promise();
  }

  updateVPCEConfiguration: (params: RawParamsFrom<'updateVPCEConfiguration'>) => Promise<ReturnTypeFrom<'updateVPCEConfiguration'>>  = async params => {
  // undefined
    return this.client.updateVPCEConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSDeviceFarm): DeviceFarm {
    return new DeviceFarm(client) as any;
  }
  
  static client(options?: AWSDeviceFarm.Types.ClientConfiguration): DeviceFarm {
    return new DeviceFarm(new AWSDeviceFarm(options)) as any;
  }
}  
