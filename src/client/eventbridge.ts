import { Request, EventBridge as AWSEventBridge } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEventBridge> = AWSEventBridge[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEventBridge> = AWSEventBridge[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEventBridge[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEventBridge, Extras> = AWSEventBridge[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEventBridge> = AWSEventBridge[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class EventBridge {
  private constructor(private readonly client: AWSEventBridge) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'events' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = [] as const;
  
  activateEventSource: (params: RawParamsFrom<'activateEventSource'>) => Promise<ReturnTypeFrom<'activateEventSource'>>  = async params => {
  // undefined
    return this.client.activateEventSource(params as any).promise();
  }

  cancelReplay: (params: RawParamsFrom<'cancelReplay'>) => Promise<ReturnTypeFrom<'cancelReplay'>>  = async params => {
  // undefined
    return this.client.cancelReplay(params as any).promise();
  }

  createApiDestination: (params: RawParamsFrom<'createApiDestination'>) => Promise<ReturnTypeFrom<'createApiDestination'>>  = async params => {
  // undefined
    return this.client.createApiDestination(params as any).promise();
  }

  createArchive: (params: RawParamsFrom<'createArchive'>) => Promise<ReturnTypeFrom<'createArchive'>>  = async params => {
  // undefined
    return this.client.createArchive(params as any).promise();
  }

  createConnection: (params: RawParamsFrom<'createConnection'>) => Promise<ReturnTypeFrom<'createConnection'>>  = async params => {
  // undefined
    return this.client.createConnection(params as any).promise();
  }

  createEndpoint: (params: RawParamsFrom<'createEndpoint'>) => Promise<ReturnTypeFrom<'createEndpoint'>>  = async params => {
  // undefined
    return this.client.createEndpoint(params as any).promise();
  }

  createEventBus: (params: RawParamsFrom<'createEventBus'>) => Promise<ReturnTypeFrom<'createEventBus'>>  = async params => {
  // undefined
    return this.client.createEventBus(params as any).promise();
  }

  createPartnerEventSource: (params: RawParamsFrom<'createPartnerEventSource'>) => Promise<ReturnTypeFrom<'createPartnerEventSource'>>  = async params => {
  // undefined
    return this.client.createPartnerEventSource(params as any).promise();
  }

  deactivateEventSource: (params: RawParamsFrom<'deactivateEventSource'>) => Promise<ReturnTypeFrom<'deactivateEventSource'>>  = async params => {
  // undefined
    return this.client.deactivateEventSource(params as any).promise();
  }

  deauthorizeConnection: (params: RawParamsFrom<'deauthorizeConnection'>) => Promise<ReturnTypeFrom<'deauthorizeConnection'>>  = async params => {
  // undefined
    return this.client.deauthorizeConnection(params as any).promise();
  }

  deleteApiDestination: (params: RawParamsFrom<'deleteApiDestination'>) => Promise<ReturnTypeFrom<'deleteApiDestination'>>  = async params => {
  // undefined
    return this.client.deleteApiDestination(params as any).promise();
  }

  deleteArchive: (params: RawParamsFrom<'deleteArchive'>) => Promise<ReturnTypeFrom<'deleteArchive'>>  = async params => {
  // undefined
    return this.client.deleteArchive(params as any).promise();
  }

  deleteConnection: (params: RawParamsFrom<'deleteConnection'>) => Promise<ReturnTypeFrom<'deleteConnection'>>  = async params => {
  // undefined
    return this.client.deleteConnection(params as any).promise();
  }

  deleteEndpoint: (params: RawParamsFrom<'deleteEndpoint'>) => Promise<ReturnTypeFrom<'deleteEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteEndpoint(params as any).promise();
  }

  deleteEventBus: (params: RawParamsFrom<'deleteEventBus'>) => Promise<ReturnTypeFrom<'deleteEventBus'>>  = async params => {
  // undefined
    return this.client.deleteEventBus(params as any).promise();
  }

  deletePartnerEventSource: (params: RawParamsFrom<'deletePartnerEventSource'>) => Promise<ReturnTypeFrom<'deletePartnerEventSource'>>  = async params => {
  // undefined
    return this.client.deletePartnerEventSource(params as any).promise();
  }

  deleteRule: (params: RawParamsFrom<'deleteRule'>) => Promise<ReturnTypeFrom<'deleteRule'>>  = async params => {
  // undefined
    return this.client.deleteRule(params as any).promise();
  }

  describeApiDestination: (params: RawParamsFrom<'describeApiDestination'>) => Promise<ReturnTypeFrom<'describeApiDestination'>>  = async params => {
  // undefined
    return this.client.describeApiDestination(params as any).promise();
  }

  describeArchive: (params: RawParamsFrom<'describeArchive'>) => Promise<ReturnTypeFrom<'describeArchive'>>  = async params => {
  // undefined
    return this.client.describeArchive(params as any).promise();
  }

  describeConnection: (params: RawParamsFrom<'describeConnection'>) => Promise<ReturnTypeFrom<'describeConnection'>>  = async params => {
  // undefined
    return this.client.describeConnection(params as any).promise();
  }

  describeEndpoint: (params: RawParamsFrom<'describeEndpoint'>) => Promise<ReturnTypeFrom<'describeEndpoint'>>  = async params => {
  // undefined
    return this.client.describeEndpoint(params as any).promise();
  }

  describeEventBus: (params: RawParamsFrom<'describeEventBus'>) => Promise<ReturnTypeFrom<'describeEventBus'>>  = async params => {
  // undefined
    return this.client.describeEventBus(params as any).promise();
  }

  describeEventSource: (params: RawParamsFrom<'describeEventSource'>) => Promise<ReturnTypeFrom<'describeEventSource'>>  = async params => {
  // undefined
    return this.client.describeEventSource(params as any).promise();
  }

  describePartnerEventSource: (params: RawParamsFrom<'describePartnerEventSource'>) => Promise<ReturnTypeFrom<'describePartnerEventSource'>>  = async params => {
  // undefined
    return this.client.describePartnerEventSource(params as any).promise();
  }

  describeReplay: (params: RawParamsFrom<'describeReplay'>) => Promise<ReturnTypeFrom<'describeReplay'>>  = async params => {
  // undefined
    return this.client.describeReplay(params as any).promise();
  }

  describeRule: (params: RawParamsFrom<'describeRule'>) => Promise<ReturnTypeFrom<'describeRule'>>  = async params => {
  // undefined
    return this.client.describeRule(params as any).promise();
  }

  disableRule: (params: RawParamsFrom<'disableRule'>) => Promise<ReturnTypeFrom<'disableRule'>>  = async params => {
  // undefined
    return this.client.disableRule(params as any).promise();
  }

  enableRule: (params: RawParamsFrom<'enableRule'>) => Promise<ReturnTypeFrom<'enableRule'>>  = async params => {
  // undefined
    return this.client.enableRule(params as any).promise();
  }

  listApiDestinations: (params: RawParamsFrom<'listApiDestinations'>) => Promise<ReturnTypeFrom<'listApiDestinations'>>  = async params => {
  // undefined
    return this.client.listApiDestinations(params as any).promise();
  }

  listArchives: (params: RawParamsFrom<'listArchives'>) => Promise<ReturnTypeFrom<'listArchives'>>  = async params => {
  // undefined
    return this.client.listArchives(params as any).promise();
  }

  listConnections: (params: RawParamsFrom<'listConnections'>) => Promise<ReturnTypeFrom<'listConnections'>>  = async params => {
  // undefined
    return this.client.listConnections(params as any).promise();
  }

  listEndpoints: (params: RawParamsFrom<'listEndpoints'>) => Promise<ReturnTypeFrom<'listEndpoints'>>  = async params => {
  // undefined
    return this.client.listEndpoints(params as any).promise();
  }

  listEventBuses: (params: RawParamsFrom<'listEventBuses'>) => Promise<ReturnTypeFrom<'listEventBuses'>>  = async params => {
  // undefined
    return this.client.listEventBuses(params as any).promise();
  }

  listEventSources: (params: RawParamsFrom<'listEventSources'>) => Promise<ReturnTypeFrom<'listEventSources'>>  = async params => {
  // undefined
    return this.client.listEventSources(params as any).promise();
  }

  listPartnerEventSourceAccounts: (params: RawParamsFrom<'listPartnerEventSourceAccounts'>) => Promise<ReturnTypeFrom<'listPartnerEventSourceAccounts'>>  = async params => {
  // undefined
    return this.client.listPartnerEventSourceAccounts(params as any).promise();
  }

  listPartnerEventSources: (params: RawParamsFrom<'listPartnerEventSources'>) => Promise<ReturnTypeFrom<'listPartnerEventSources'>>  = async params => {
  // undefined
    return this.client.listPartnerEventSources(params as any).promise();
  }

  listReplays: (params: RawParamsFrom<'listReplays'>) => Promise<ReturnTypeFrom<'listReplays'>>  = async params => {
  // undefined
    return this.client.listReplays(params as any).promise();
  }

  listRuleNamesByTarget: (params: RawParamsFrom<'listRuleNamesByTarget'>) => Promise<ReturnTypeFrom<'listRuleNamesByTarget'>>  = async params => {
  // undefined
    return this.client.listRuleNamesByTarget(params as any).promise();
  }

  listRules: (params: RawParamsFrom<'listRules'>) => Promise<ReturnTypeFrom<'listRules'>>  = async params => {
  // undefined
    return this.client.listRules(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTargetsByRule: (params: RawParamsFrom<'listTargetsByRule'>) => Promise<ReturnTypeFrom<'listTargetsByRule'>>  = async params => {
  // undefined
    return this.client.listTargetsByRule(params as any).promise();
  }

  putEvents: (params: RawParamsFrom<'putEvents'>) => Promise<ReturnTypeFrom<'putEvents'>>  = async params => {
  // undefined
    return this.client.putEvents(params as any).promise();
  }

  putPartnerEvents: (params: RawParamsFrom<'putPartnerEvents'>) => Promise<ReturnTypeFrom<'putPartnerEvents'>>  = async params => {
  // undefined
    return this.client.putPartnerEvents(params as any).promise();
  }

  putPermission: (params: RawParamsFrom<'putPermission'>) => Promise<ReturnTypeFrom<'putPermission'>>  = async params => {
  // undefined
    return this.client.putPermission(params as any).promise();
  }

  putRule: (params: RawParamsFrom<'putRule'>) => Promise<ReturnTypeFrom<'putRule'>>  = async params => {
  // undefined
    return this.client.putRule(params as any).promise();
  }

  putTargets: (params: RawParamsFrom<'putTargets'>) => Promise<ReturnTypeFrom<'putTargets'>>  = async params => {
  // undefined
    return this.client.putTargets(params as any).promise();
  }

  removePermission: (params: RawParamsFrom<'removePermission'>) => Promise<ReturnTypeFrom<'removePermission'>>  = async params => {
  // undefined
    return this.client.removePermission(params as any).promise();
  }

  removeTargets: (params: RawParamsFrom<'removeTargets'>) => Promise<ReturnTypeFrom<'removeTargets'>>  = async params => {
  // undefined
    return this.client.removeTargets(params as any).promise();
  }

  startReplay: (params: RawParamsFrom<'startReplay'>) => Promise<ReturnTypeFrom<'startReplay'>>  = async params => {
  // undefined
    return this.client.startReplay(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testEventPattern: (params: RawParamsFrom<'testEventPattern'>) => Promise<ReturnTypeFrom<'testEventPattern'>>  = async params => {
  // undefined
    return this.client.testEventPattern(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApiDestination: (params: RawParamsFrom<'updateApiDestination'>) => Promise<ReturnTypeFrom<'updateApiDestination'>>  = async params => {
  // undefined
    return this.client.updateApiDestination(params as any).promise();
  }

  updateArchive: (params: RawParamsFrom<'updateArchive'>) => Promise<ReturnTypeFrom<'updateArchive'>>  = async params => {
  // undefined
    return this.client.updateArchive(params as any).promise();
  }

  updateConnection: (params: RawParamsFrom<'updateConnection'>) => Promise<ReturnTypeFrom<'updateConnection'>>  = async params => {
  // undefined
    return this.client.updateConnection(params as any).promise();
  }

  updateEndpoint: (params: RawParamsFrom<'updateEndpoint'>) => Promise<ReturnTypeFrom<'updateEndpoint'>>  = async params => {
  // undefined
    return this.client.updateEndpoint(params as any).promise();
  }
  
  static fromClient(client: AWSEventBridge): EventBridge {
    return new EventBridge(client) as any;
  }
  
  static client(options?: AWSEventBridge.Types.ClientConfiguration): EventBridge {
    return new EventBridge(new AWSEventBridge(options)) as any;
  }
}  
