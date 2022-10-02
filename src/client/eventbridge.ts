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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'events';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly [];
    
  activateEventSource: FunctionTypeFrom<'activateEventSource'>;

  cancelReplay: FunctionTypeFrom<'cancelReplay'>;

  createApiDestination: FunctionTypeFrom<'createApiDestination'>;

  createArchive: FunctionTypeFrom<'createArchive'>;

  createConnection: FunctionTypeFrom<'createConnection'>;

  createEndpoint: FunctionTypeFrom<'createEndpoint'>;

  createEventBus: FunctionTypeFrom<'createEventBus'>;

  createPartnerEventSource: FunctionTypeFrom<'createPartnerEventSource'>;

  deactivateEventSource: FunctionTypeFrom<'deactivateEventSource'>;

  deauthorizeConnection: FunctionTypeFrom<'deauthorizeConnection'>;

  deleteApiDestination: FunctionTypeFrom<'deleteApiDestination'>;

  deleteArchive: FunctionTypeFrom<'deleteArchive'>;

  deleteConnection: FunctionTypeFrom<'deleteConnection'>;

  deleteEndpoint: FunctionTypeFrom<'deleteEndpoint'>;

  deleteEventBus: FunctionTypeFrom<'deleteEventBus'>;

  deletePartnerEventSource: FunctionTypeFrom<'deletePartnerEventSource'>;

  deleteRule: FunctionTypeFrom<'deleteRule'>;

  describeApiDestination: FunctionTypeFrom<'describeApiDestination'>;

  describeArchive: FunctionTypeFrom<'describeArchive'>;

  describeConnection: FunctionTypeFrom<'describeConnection'>;

  describeEndpoint: FunctionTypeFrom<'describeEndpoint'>;

  describeEventBus: FunctionTypeFrom<'describeEventBus'>;

  describeEventSource: FunctionTypeFrom<'describeEventSource'>;

  describePartnerEventSource: FunctionTypeFrom<'describePartnerEventSource'>;

  describeReplay: FunctionTypeFrom<'describeReplay'>;

  describeRule: FunctionTypeFrom<'describeRule'>;

  disableRule: FunctionTypeFrom<'disableRule'>;

  enableRule: FunctionTypeFrom<'enableRule'>;

  listApiDestinations: FunctionTypeFrom<'listApiDestinations'>;

  listArchives: FunctionTypeFrom<'listArchives'>;

  listConnections: FunctionTypeFrom<'listConnections'>;

  listEndpoints: FunctionTypeFrom<'listEndpoints'>;

  listEventBuses: FunctionTypeFrom<'listEventBuses'>;

  listEventSources: FunctionTypeFrom<'listEventSources'>;

  listPartnerEventSourceAccounts: FunctionTypeFrom<'listPartnerEventSourceAccounts'>;

  listPartnerEventSources: FunctionTypeFrom<'listPartnerEventSources'>;

  listReplays: FunctionTypeFrom<'listReplays'>;

  listRuleNamesByTarget: FunctionTypeFrom<'listRuleNamesByTarget'>;

  listRules: FunctionTypeFrom<'listRules'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTargetsByRule: FunctionTypeFrom<'listTargetsByRule'>;

  putEvents: FunctionTypeFrom<'putEvents'>;

  putPartnerEvents: FunctionTypeFrom<'putPartnerEvents'>;

  putPermission: FunctionTypeFrom<'putPermission'>;

  putRule: FunctionTypeFrom<'putRule'>;

  putTargets: FunctionTypeFrom<'putTargets'>;

  removePermission: FunctionTypeFrom<'removePermission'>;

  removeTargets: FunctionTypeFrom<'removeTargets'>;

  startReplay: FunctionTypeFrom<'startReplay'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testEventPattern: FunctionTypeFrom<'testEventPattern'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApiDestination: FunctionTypeFrom<'updateApiDestination'>;

  updateArchive: FunctionTypeFrom<'updateArchive'>;

  updateConnection: FunctionTypeFrom<'updateConnection'>;

  updateEndpoint: FunctionTypeFrom<'updateEndpoint'>
}
 
export class EventBridge implements ClientType {
  private constructor(private readonly client: AWSEventBridge) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'events';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = [] as const;
  
  async activateEventSource(...args: any): Promise<any> {
  // undefined
    return this.client.activateEventSource(...args).promise()
  }

  async cancelReplay(...args: any): Promise<any> {
  // undefined
    return this.client.cancelReplay(...args).promise()
  }

  async createApiDestination(...args: any): Promise<any> {
  // undefined
    return this.client.createApiDestination(...args).promise()
  }

  async createArchive(...args: any): Promise<any> {
  // undefined
    return this.client.createArchive(...args).promise()
  }

  async createConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createConnection(...args).promise()
  }

  async createEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createEndpoint(...args).promise()
  }

  async createEventBus(...args: any): Promise<any> {
  // undefined
    return this.client.createEventBus(...args).promise()
  }

  async createPartnerEventSource(...args: any): Promise<any> {
  // undefined
    return this.client.createPartnerEventSource(...args).promise()
  }

  async deactivateEventSource(...args: any): Promise<any> {
  // undefined
    return this.client.deactivateEventSource(...args).promise()
  }

  async deauthorizeConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deauthorizeConnection(...args).promise()
  }

  async deleteApiDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApiDestination(...args).promise()
  }

  async deleteArchive(...args: any): Promise<any> {
  // undefined
    return this.client.deleteArchive(...args).promise()
  }

  async deleteConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnection(...args).promise()
  }

  async deleteEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpoint(...args).promise()
  }

  async deleteEventBus(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventBus(...args).promise()
  }

  async deletePartnerEventSource(...args: any): Promise<any> {
  // undefined
    return this.client.deletePartnerEventSource(...args).promise()
  }

  async deleteRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRule(...args).promise()
  }

  async describeApiDestination(...args: any): Promise<any> {
  // undefined
    return this.client.describeApiDestination(...args).promise()
  }

  async describeArchive(...args: any): Promise<any> {
  // undefined
    return this.client.describeArchive(...args).promise()
  }

  async describeConnection(...args: any): Promise<any> {
  // undefined
    return this.client.describeConnection(...args).promise()
  }

  async describeEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.describeEndpoint(...args).promise()
  }

  async describeEventBus(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventBus(...args).promise()
  }

  async describeEventSource(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventSource(...args).promise()
  }

  async describePartnerEventSource(...args: any): Promise<any> {
  // undefined
    return this.client.describePartnerEventSource(...args).promise()
  }

  async describeReplay(...args: any): Promise<any> {
  // undefined
    return this.client.describeReplay(...args).promise()
  }

  async describeRule(...args: any): Promise<any> {
  // undefined
    return this.client.describeRule(...args).promise()
  }

  async disableRule(...args: any): Promise<any> {
  // undefined
    return this.client.disableRule(...args).promise()
  }

  async enableRule(...args: any): Promise<any> {
  // undefined
    return this.client.enableRule(...args).promise()
  }

  async listApiDestinations(...args: any): Promise<any> {
  // undefined
    return this.client.listApiDestinations(...args).promise()
  }

  async listArchives(...args: any): Promise<any> {
  // undefined
    return this.client.listArchives(...args).promise()
  }

  async listConnections(...args: any): Promise<any> {
  // undefined
    return this.client.listConnections(...args).promise()
  }

  async listEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.listEndpoints(...args).promise()
  }

  async listEventBuses(...args: any): Promise<any> {
  // undefined
    return this.client.listEventBuses(...args).promise()
  }

  async listEventSources(...args: any): Promise<any> {
  // undefined
    return this.client.listEventSources(...args).promise()
  }

  async listPartnerEventSourceAccounts(...args: any): Promise<any> {
  // undefined
    return this.client.listPartnerEventSourceAccounts(...args).promise()
  }

  async listPartnerEventSources(...args: any): Promise<any> {
  // undefined
    return this.client.listPartnerEventSources(...args).promise()
  }

  async listReplays(...args: any): Promise<any> {
  // undefined
    return this.client.listReplays(...args).promise()
  }

  async listRuleNamesByTarget(...args: any): Promise<any> {
  // undefined
    return this.client.listRuleNamesByTarget(...args).promise()
  }

  async listRules(...args: any): Promise<any> {
  // undefined
    return this.client.listRules(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTargetsByRule(...args: any): Promise<any> {
  // undefined
    return this.client.listTargetsByRule(...args).promise()
  }

  async putEvents(...args: any): Promise<any> {
  // undefined
    return this.client.putEvents(...args).promise()
  }

  async putPartnerEvents(...args: any): Promise<any> {
  // undefined
    return this.client.putPartnerEvents(...args).promise()
  }

  async putPermission(...args: any): Promise<any> {
  // undefined
    return this.client.putPermission(...args).promise()
  }

  async putRule(...args: any): Promise<any> {
  // undefined
    return this.client.putRule(...args).promise()
  }

  async putTargets(...args: any): Promise<any> {
  // undefined
    return this.client.putTargets(...args).promise()
  }

  async removePermission(...args: any): Promise<any> {
  // undefined
    return this.client.removePermission(...args).promise()
  }

  async removeTargets(...args: any): Promise<any> {
  // undefined
    return this.client.removeTargets(...args).promise()
  }

  async startReplay(...args: any): Promise<any> {
  // undefined
    return this.client.startReplay(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testEventPattern(...args: any): Promise<any> {
  // undefined
    return this.client.testEventPattern(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApiDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updateApiDestination(...args).promise()
  }

  async updateArchive(...args: any): Promise<any> {
  // undefined
    return this.client.updateArchive(...args).promise()
  }

  async updateConnection(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnection(...args).promise()
  }

  async updateEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.updateEndpoint(...args).promise()
  }
  
  static fromClient(client: AWSEventBridge): ClientType {
    return new EventBridge(client) as any;
  }
  
  static client(options?: AWSEventBridge.Types.ClientConfiguration): ClientType {
    return new EventBridge(new AWSEventBridge(options)) as any;
  }
}  
