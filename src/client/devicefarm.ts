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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'devicefarm';
    global: false;
    category: 'Front-End Web & Mobile'
    topLevelCalls: readonly ["getOfferingStatus","listDevices","listOfferingTransactions","listOfferings","listProjects","listTestGridProjects"];
    
  createDevicePool: FunctionTypeFrom<'createDevicePool'>;

  createInstanceProfile: FunctionTypeFrom<'createInstanceProfile'>;

  createNetworkProfile: FunctionTypeFrom<'createNetworkProfile'>;

  createProject: FunctionTypeFrom<'createProject'>;

  createRemoteAccessSession: FunctionTypeFrom<'createRemoteAccessSession'>;

  createTestGridProject: FunctionTypeFrom<'createTestGridProject'>;

  createTestGridUrl: FunctionTypeFrom<'createTestGridUrl'>;

  createUpload: FunctionTypeFrom<'createUpload'>;

  createVPCEConfiguration: FunctionTypeFrom<'createVPCEConfiguration'>;

  deleteDevicePool: FunctionTypeFrom<'deleteDevicePool'>;

  deleteInstanceProfile: FunctionTypeFrom<'deleteInstanceProfile'>;

  deleteNetworkProfile: FunctionTypeFrom<'deleteNetworkProfile'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  deleteRemoteAccessSession: FunctionTypeFrom<'deleteRemoteAccessSession'>;

  deleteRun: FunctionTypeFrom<'deleteRun'>;

  deleteTestGridProject: FunctionTypeFrom<'deleteTestGridProject'>;

  deleteUpload: FunctionTypeFrom<'deleteUpload'>;

  deleteVPCEConfiguration: FunctionTypeFrom<'deleteVPCEConfiguration'>;

  getAccountSettings: FunctionTypeFrom<'getAccountSettings'>;

  getDevice: FunctionTypeFrom<'getDevice'>;

  getDeviceInstance: FunctionTypeFrom<'getDeviceInstance'>;

  getDevicePool: FunctionTypeFrom<'getDevicePool'>;

  getDevicePoolCompatibility: FunctionTypeFrom<'getDevicePoolCompatibility'>;

  getInstanceProfile: FunctionTypeFrom<'getInstanceProfile'>;

  getJob: FunctionTypeFrom<'getJob'>;

  getNetworkProfile: FunctionTypeFrom<'getNetworkProfile'>;

  getOfferingStatus: FunctionTypeFrom<'getOfferingStatus'>;

  getProject: FunctionTypeFrom<'getProject'>;

  getRemoteAccessSession: FunctionTypeFrom<'getRemoteAccessSession'>;

  getRun: FunctionTypeFrom<'getRun'>;

  getSuite: FunctionTypeFrom<'getSuite'>;

  getTest: FunctionTypeFrom<'getTest'>;

  getTestGridProject: FunctionTypeFrom<'getTestGridProject'>;

  getTestGridSession: FunctionTypeFrom<'getTestGridSession'>;

  getUpload: FunctionTypeFrom<'getUpload'>;

  getVPCEConfiguration: FunctionTypeFrom<'getVPCEConfiguration'>;

  installToRemoteAccessSession: FunctionTypeFrom<'installToRemoteAccessSession'>;

  listArtifacts(params: { [K in keyof Omit<ParamsFrom<'listArtifacts', { next?: string }>, 'nextToken'>]: ParamsFrom<'listArtifacts', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listArtifacts'>]-?: ReturnTypeFrom<'listArtifacts'>[K]}['artifacts'] }>
  ;

  listDeviceInstances: FunctionTypeFrom<'listDeviceInstances'>;

  listDevicePools(params: { [K in keyof Omit<ParamsFrom<'listDevicePools', { next?: string }>, 'nextToken'>]: ParamsFrom<'listDevicePools', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDevicePools'>]-?: ReturnTypeFrom<'listDevicePools'>[K]}['devicePools'] }>
  ;

  listDevices(params: { [K in keyof Omit<ParamsFrom<'listDevices', { next?: string }>, 'nextToken'>]: ParamsFrom<'listDevices', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDevices'>]-?: ReturnTypeFrom<'listDevices'>[K]}['devices'] }>
  listDevices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDevices'>]-?: ReturnTypeFrom<'listDevices'>[K]}['devices'] }>;

  listInstanceProfiles: FunctionTypeFrom<'listInstanceProfiles'>;

  listJobs(params: { [K in keyof Omit<ParamsFrom<'listJobs', { next?: string }>, 'nextToken'>]: ParamsFrom<'listJobs', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['jobs'] }>
  ;

  listNetworkProfiles: FunctionTypeFrom<'listNetworkProfiles'>;

  listOfferingPromotions: FunctionTypeFrom<'listOfferingPromotions'>;

  listOfferingTransactions(params: { [K in keyof Omit<ParamsFrom<'listOfferingTransactions', { next?: string }>, 'nextToken'>]: ParamsFrom<'listOfferingTransactions', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOfferingTransactions'>]-?: ReturnTypeFrom<'listOfferingTransactions'>[K]}['offeringTransactions'] }>
  listOfferingTransactions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOfferingTransactions'>]-?: ReturnTypeFrom<'listOfferingTransactions'>[K]}['offeringTransactions'] }>;

  listOfferings(params: { [K in keyof Omit<ParamsFrom<'listOfferings', { next?: string }>, 'nextToken'>]: ParamsFrom<'listOfferings', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOfferings'>]-?: ReturnTypeFrom<'listOfferings'>[K]}['offerings'] }>
  listOfferings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOfferings'>]-?: ReturnTypeFrom<'listOfferings'>[K]}['offerings'] }>;

  listProjects(params: { [K in keyof Omit<ParamsFrom<'listProjects', { next?: string }>, 'nextToken'>]: ParamsFrom<'listProjects', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'] }>
  listProjects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'] }>;

  listRemoteAccessSessions: FunctionTypeFrom<'listRemoteAccessSessions'>;

  listRuns(params: { [K in keyof Omit<ParamsFrom<'listRuns', { next?: string }>, 'nextToken'>]: ParamsFrom<'listRuns', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRuns'>]-?: ReturnTypeFrom<'listRuns'>[K]}['runs'] }>
  ;

  listSamples(params: { [K in keyof Omit<ParamsFrom<'listSamples', { next?: string }>, 'nextToken'>]: ParamsFrom<'listSamples', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSamples'>]-?: ReturnTypeFrom<'listSamples'>[K]}['samples'] }>
  ;

  listSuites(params: { [K in keyof Omit<ParamsFrom<'listSuites', { next?: string }>, 'nextToken'>]: ParamsFrom<'listSuites', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSuites'>]-?: ReturnTypeFrom<'listSuites'>[K]}['suites'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTestGridProjects: FunctionTypeFrom<'listTestGridProjects'>;

  listTestGridSessionActions: FunctionTypeFrom<'listTestGridSessionActions'>;

  listTestGridSessionArtifacts: FunctionTypeFrom<'listTestGridSessionArtifacts'>;

  listTestGridSessions: FunctionTypeFrom<'listTestGridSessions'>;

  listTests(params: { [K in keyof Omit<ParamsFrom<'listTests', { next?: string }>, 'nextToken'>]: ParamsFrom<'listTests', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTests'>]-?: ReturnTypeFrom<'listTests'>[K]}['tests'] }>
  ;

  listUniqueProblems(params: { [K in keyof Omit<ParamsFrom<'listUniqueProblems', { next?: string }>, 'nextToken'>]: ParamsFrom<'listUniqueProblems', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUniqueProblems'>]-?: ReturnTypeFrom<'listUniqueProblems'>[K]}['uniqueProblems'] }>
  ;

  listUploads(params: { [K in keyof Omit<ParamsFrom<'listUploads', { next?: string }>, 'nextToken'>]: ParamsFrom<'listUploads', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUploads'>]-?: ReturnTypeFrom<'listUploads'>[K]}['uploads'] }>
  ;

  listVPCEConfigurations: FunctionTypeFrom<'listVPCEConfigurations'>;

  purchaseOffering: FunctionTypeFrom<'purchaseOffering'>;

  renewOffering: FunctionTypeFrom<'renewOffering'>;

  scheduleRun: FunctionTypeFrom<'scheduleRun'>;

  stopJob: FunctionTypeFrom<'stopJob'>;

  stopRemoteAccessSession: FunctionTypeFrom<'stopRemoteAccessSession'>;

  stopRun: FunctionTypeFrom<'stopRun'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDeviceInstance: FunctionTypeFrom<'updateDeviceInstance'>;

  updateDevicePool: FunctionTypeFrom<'updateDevicePool'>;

  updateInstanceProfile: FunctionTypeFrom<'updateInstanceProfile'>;

  updateNetworkProfile: FunctionTypeFrom<'updateNetworkProfile'>;

  updateProject: FunctionTypeFrom<'updateProject'>;

  updateTestGridProject: FunctionTypeFrom<'updateTestGridProject'>;

  updateUpload: FunctionTypeFrom<'updateUpload'>;

  updateVPCEConfiguration: FunctionTypeFrom<'updateVPCEConfiguration'>
}
 
export class DeviceFarm implements ClientType {
  private constructor(private readonly client: AWSDeviceFarm) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'devicefarm';
  public readonly global = false;
  public readonly category = 'Front-End Web & Mobile';
  public readonly topLevelCalls = ["getOfferingStatus","listDevices","listOfferingTransactions","listOfferings","listProjects","listTestGridProjects"] as const;
  
  async createDevicePool(...args: any): Promise<any> {
  // undefined
    return this.client.createDevicePool(...args).promise()
  }

  async createInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createInstanceProfile(...args).promise()
  }

  async createNetworkProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkProfile(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async createRemoteAccessSession(...args: any): Promise<any> {
  // undefined
    return this.client.createRemoteAccessSession(...args).promise()
  }

  async createTestGridProject(...args: any): Promise<any> {
  // undefined
    return this.client.createTestGridProject(...args).promise()
  }

  async createTestGridUrl(...args: any): Promise<any> {
  // undefined
    return this.client.createTestGridUrl(...args).promise()
  }

  async createUpload(...args: any): Promise<any> {
  // undefined
    return this.client.createUpload(...args).promise()
  }

  async createVPCEConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createVPCEConfiguration(...args).promise()
  }

  async deleteDevicePool(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDevicePool(...args).promise()
  }

  async deleteInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInstanceProfile(...args).promise()
  }

  async deleteNetworkProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkProfile(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async deleteRemoteAccessSession(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRemoteAccessSession(...args).promise()
  }

  async deleteRun(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRun(...args).promise()
  }

  async deleteTestGridProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTestGridProject(...args).promise()
  }

  async deleteUpload(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUpload(...args).promise()
  }

  async deleteVPCEConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVPCEConfiguration(...args).promise()
  }

  async getAccountSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountSettings(...args).promise()
  }

  async getDevice(...args: any): Promise<any> {
  // undefined
    return this.client.getDevice(...args).promise()
  }

  async getDeviceInstance(...args: any): Promise<any> {
  // undefined
    return this.client.getDeviceInstance(...args).promise()
  }

  async getDevicePool(...args: any): Promise<any> {
  // undefined
    return this.client.getDevicePool(...args).promise()
  }

  async getDevicePoolCompatibility(...args: any): Promise<any> {
  // undefined
    return this.client.getDevicePoolCompatibility(...args).promise()
  }

  async getInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceProfile(...args).promise()
  }

  async getJob(...args: any): Promise<any> {
  // undefined
    return this.client.getJob(...args).promise()
  }

  async getNetworkProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getNetworkProfile(...args).promise()
  }

  async getOfferingStatus(...args: any): Promise<any> {
  // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":["current","nextPeriod"]}
    return this.client.getOfferingStatus(...args).promise()
  }

  async getProject(...args: any): Promise<any> {
  // undefined
    return this.client.getProject(...args).promise()
  }

  async getRemoteAccessSession(...args: any): Promise<any> {
  // undefined
    return this.client.getRemoteAccessSession(...args).promise()
  }

  async getRun(...args: any): Promise<any> {
  // undefined
    return this.client.getRun(...args).promise()
  }

  async getSuite(...args: any): Promise<any> {
  // undefined
    return this.client.getSuite(...args).promise()
  }

  async getTest(...args: any): Promise<any> {
  // undefined
    return this.client.getTest(...args).promise()
  }

  async getTestGridProject(...args: any): Promise<any> {
  // undefined
    return this.client.getTestGridProject(...args).promise()
  }

  async getTestGridSession(...args: any): Promise<any> {
  // undefined
    return this.client.getTestGridSession(...args).promise()
  }

  async getUpload(...args: any): Promise<any> {
  // undefined
    return this.client.getUpload(...args).promise()
  }

  async getVPCEConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getVPCEConfiguration(...args).promise()
  }

  async installToRemoteAccessSession(...args: any): Promise<any> {
  // undefined
    return this.client.installToRemoteAccessSession(...args).promise()
  }

  async listArtifacts(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"artifacts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listArtifacts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.artifacts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeviceInstances(...args: any): Promise<any> {
  // undefined
    return this.client.listDeviceInstances(...args).promise()
  }

  async listDevicePools(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"devicePools"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listDevicePools(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.devicePools ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDevices(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"devices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listDevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.devices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceProfiles(...args: any): Promise<any> {
  // undefined
    return this.client.listInstanceProfiles(...args).promise()
  }

  async listJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNetworkProfiles(...args: any): Promise<any> {
  // undefined
    return this.client.listNetworkProfiles(...args).promise()
  }

  async listOfferingPromotions(...args: any): Promise<any> {
  // undefined
    return this.client.listOfferingPromotions(...args).promise()
  }

  async listOfferingTransactions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"offeringTransactions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listOfferingTransactions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.offeringTransactions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOfferings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"offerings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.offerings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"projects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listProjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.projects ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRemoteAccessSessions(...args: any): Promise<any> {
  // undefined
    return this.client.listRemoteAccessSessions(...args).promise()
  }

  async listRuns(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"runs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listRuns(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.runs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSamples(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"samples"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listSamples(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.samples ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSuites(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"suites"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listSuites(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.suites ?? [];
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

  async listTestGridProjects(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResult","outputToken":"nextToken"}
    return this.client.listTestGridProjects(...args).promise()
  }

  async listTestGridSessionActions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResult","outputToken":"nextToken"}
    return this.client.listTestGridSessionActions(...args).promise()
  }

  async listTestGridSessionArtifacts(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResult","outputToken":"nextToken"}
    return this.client.listTestGridSessionArtifacts(...args).promise()
  }

  async listTestGridSessions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResult","outputToken":"nextToken"}
    return this.client.listTestGridSessions(...args).promise()
  }

  async listTests(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"tests"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listTests(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tests ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUniqueProblems(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"uniqueProblems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listUniqueProblems(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.uniqueProblems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUploads(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"uploads"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listUploads(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.uploads ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVPCEConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listVPCEConfigurations(...args).promise()
  }

  async purchaseOffering(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseOffering(...args).promise()
  }

  async renewOffering(...args: any): Promise<any> {
  // undefined
    return this.client.renewOffering(...args).promise()
  }

  async scheduleRun(...args: any): Promise<any> {
  // undefined
    return this.client.scheduleRun(...args).promise()
  }

  async stopJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopJob(...args).promise()
  }

  async stopRemoteAccessSession(...args: any): Promise<any> {
  // undefined
    return this.client.stopRemoteAccessSession(...args).promise()
  }

  async stopRun(...args: any): Promise<any> {
  // undefined
    return this.client.stopRun(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDeviceInstance(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeviceInstance(...args).promise()
  }

  async updateDevicePool(...args: any): Promise<any> {
  // undefined
    return this.client.updateDevicePool(...args).promise()
  }

  async updateInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateInstanceProfile(...args).promise()
  }

  async updateNetworkProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateNetworkProfile(...args).promise()
  }

  async updateProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateProject(...args).promise()
  }

  async updateTestGridProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateTestGridProject(...args).promise()
  }

  async updateUpload(...args: any): Promise<any> {
  // undefined
    return this.client.updateUpload(...args).promise()
  }

  async updateVPCEConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateVPCEConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSDeviceFarm): ClientType {
    return new DeviceFarm(client) as any;
  }
  
  static client(options?: AWSDeviceFarm.Types.ClientConfiguration): ClientType {
    return new DeviceFarm(new AWSDeviceFarm(options)) as any;
  }
}  
