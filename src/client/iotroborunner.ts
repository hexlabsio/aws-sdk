import { Request, IoTRoboRunner as AWSIoTRoboRunner } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTRoboRunner> = AWSIoTRoboRunner[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTRoboRunner> = AWSIoTRoboRunner[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTRoboRunner[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTRoboRunner, Extras> = AWSIoTRoboRunner[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTRoboRunner> = AWSIoTRoboRunner[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTRoboRunner {
  private constructor(private readonly client: AWSIoTRoboRunner) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotroborunner' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listSites"] as const;
  
  createDestination: (params: RawParamsFrom<'createDestination'>) => Promise<ReturnTypeFrom<'createDestination'>>  = async params => {
  // undefined
    return this.client.createDestination(params as any).promise();
  }

  createSite: (params: RawParamsFrom<'createSite'>) => Promise<ReturnTypeFrom<'createSite'>>  = async params => {
  // undefined
    return this.client.createSite(params as any).promise();
  }

  createWorker: (params: RawParamsFrom<'createWorker'>) => Promise<ReturnTypeFrom<'createWorker'>>  = async params => {
  // undefined
    return this.client.createWorker(params as any).promise();
  }

  createWorkerFleet: (params: RawParamsFrom<'createWorkerFleet'>) => Promise<ReturnTypeFrom<'createWorkerFleet'>>  = async params => {
  // undefined
    return this.client.createWorkerFleet(params as any).promise();
  }

  deleteDestination: (params: RawParamsFrom<'deleteDestination'>) => Promise<ReturnTypeFrom<'deleteDestination'>>  = async params => {
  // undefined
    return this.client.deleteDestination(params as any).promise();
  }

  deleteSite: (params: RawParamsFrom<'deleteSite'>) => Promise<ReturnTypeFrom<'deleteSite'>>  = async params => {
  // undefined
    return this.client.deleteSite(params as any).promise();
  }

  deleteWorker: (params: RawParamsFrom<'deleteWorker'>) => Promise<ReturnTypeFrom<'deleteWorker'>>  = async params => {
  // undefined
    return this.client.deleteWorker(params as any).promise();
  }

  deleteWorkerFleet: (params: RawParamsFrom<'deleteWorkerFleet'>) => Promise<ReturnTypeFrom<'deleteWorkerFleet'>>  = async params => {
  // undefined
    return this.client.deleteWorkerFleet(params as any).promise();
  }

  getDestination: (params: RawParamsFrom<'getDestination'>) => Promise<ReturnTypeFrom<'getDestination'>>  = async params => {
  // undefined
    return this.client.getDestination(params as any).promise();
  }

  getSite: (params: RawParamsFrom<'getSite'>) => Promise<ReturnTypeFrom<'getSite'>>  = async params => {
  // undefined
    return this.client.getSite(params as any).promise();
  }

  getWorker: (params: RawParamsFrom<'getWorker'>) => Promise<ReturnTypeFrom<'getWorker'>>  = async params => {
  // undefined
    return this.client.getWorker(params as any).promise();
  }

  getWorkerFleet: (params: RawParamsFrom<'getWorkerFleet'>) => Promise<ReturnTypeFrom<'getWorkerFleet'>>  = async params => {
  // undefined
    return this.client.getWorkerFleet(params as any).promise();
  }

  async listDestinations(params: { [K in keyof ParamsFrom<'listDestinations', { next?: string, limit?: number }>]: ParamsFrom<'listDestinations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDestinations'>]-?: ReturnTypeFrom<'listDestinations'>[K]}['destinations'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"destinations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDestinations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDestinations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.destinations ?? []) ? (result.destinations ?? []) : [result.destinations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSites(params: { [K in keyof ParamsFrom<'listSites', { next?: string, limit?: number }>]: ParamsFrom<'listSites', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSites'>]-?: ReturnTypeFrom<'listSites'>[K]}['sites'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"sites"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSites({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSites' })).toString('base64') : undefined;
    const member = (Array.isArray(result.sites ?? []) ? (result.sites ?? []) : [result.sites]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkerFleets(params: { [K in keyof ParamsFrom<'listWorkerFleets', { next?: string, limit?: number }>]: ParamsFrom<'listWorkerFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkerFleets'>]-?: ReturnTypeFrom<'listWorkerFleets'>[K]}['workerFleets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workerFleets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkerFleets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listWorkerFleets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.workerFleets ?? []) ? (result.workerFleets ?? []) : [result.workerFleets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkers(params: { [K in keyof ParamsFrom<'listWorkers', { next?: string, limit?: number }>]: ParamsFrom<'listWorkers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkers'>]-?: ReturnTypeFrom<'listWorkers'>[K]}['workers'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listWorkers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.workers ?? []) ? (result.workers ?? []) : [result.workers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  updateDestination: (params: RawParamsFrom<'updateDestination'>) => Promise<ReturnTypeFrom<'updateDestination'>>  = async params => {
  // undefined
    return this.client.updateDestination(params as any).promise();
  }

  updateSite: (params: RawParamsFrom<'updateSite'>) => Promise<ReturnTypeFrom<'updateSite'>>  = async params => {
  // undefined
    return this.client.updateSite(params as any).promise();
  }

  updateWorker: (params: RawParamsFrom<'updateWorker'>) => Promise<ReturnTypeFrom<'updateWorker'>>  = async params => {
  // undefined
    return this.client.updateWorker(params as any).promise();
  }

  updateWorkerFleet: (params: RawParamsFrom<'updateWorkerFleet'>) => Promise<ReturnTypeFrom<'updateWorkerFleet'>>  = async params => {
  // undefined
    return this.client.updateWorkerFleet(params as any).promise();
  }
  
  static fromClient(client: AWSIoTRoboRunner): IoTRoboRunner {
    return new IoTRoboRunner(client) as any;
  }
  
  static client(options?: AWSIoTRoboRunner.Types.ClientConfiguration): IoTRoboRunner {
    return new IoTRoboRunner(new AWSIoTRoboRunner(options)) as any;
  }
}  
