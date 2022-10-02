import { Request, Transfer as AWSTransfer } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSTransfer> = AWSTransfer[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSTransfer> = AWSTransfer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSTransfer[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSTransfer, Extras> = AWSTransfer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'transfer';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["listCertificates","listConnectors","listProfiles","listSecurityPolicies","listServers","listWorkflows"];
    
  createAccess: FunctionTypeFrom<'createAccess'>;

  createAgreement: FunctionTypeFrom<'createAgreement'>;

  createConnector: FunctionTypeFrom<'createConnector'>;

  createProfile: FunctionTypeFrom<'createProfile'>;

  createServer: FunctionTypeFrom<'createServer'>;

  createUser: FunctionTypeFrom<'createUser'>;

  createWorkflow: FunctionTypeFrom<'createWorkflow'>;

  deleteAccess: FunctionTypeFrom<'deleteAccess'>;

  deleteAgreement: FunctionTypeFrom<'deleteAgreement'>;

  deleteCertificate: FunctionTypeFrom<'deleteCertificate'>;

  deleteConnector: FunctionTypeFrom<'deleteConnector'>;

  deleteHostKey: FunctionTypeFrom<'deleteHostKey'>;

  deleteProfile: FunctionTypeFrom<'deleteProfile'>;

  deleteServer: FunctionTypeFrom<'deleteServer'>;

  deleteSshPublicKey: FunctionTypeFrom<'deleteSshPublicKey'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  deleteWorkflow: FunctionTypeFrom<'deleteWorkflow'>;

  describeAccess: FunctionTypeFrom<'describeAccess'>;

  describeAgreement: FunctionTypeFrom<'describeAgreement'>;

  describeCertificate: FunctionTypeFrom<'describeCertificate'>;

  describeConnector: FunctionTypeFrom<'describeConnector'>;

  describeExecution: FunctionTypeFrom<'describeExecution'>;

  describeHostKey: FunctionTypeFrom<'describeHostKey'>;

  describeProfile: FunctionTypeFrom<'describeProfile'>;

  describeSecurityPolicy: FunctionTypeFrom<'describeSecurityPolicy'>;

  describeServer: FunctionTypeFrom<'describeServer'>;

  describeUser: FunctionTypeFrom<'describeUser'>;

  describeWorkflow: FunctionTypeFrom<'describeWorkflow'>;

  importCertificate: FunctionTypeFrom<'importCertificate'>;

  importHostKey: FunctionTypeFrom<'importHostKey'>;

  importSshPublicKey: FunctionTypeFrom<'importSshPublicKey'>;

  listAccesses(params: { [K in keyof Omit<ParamsFrom<'listAccesses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAccesses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccesses'>]-?: ReturnTypeFrom<'listAccesses'>[K]}['Accesses'] }>
  ;

  listAgreements(params: { [K in keyof Omit<ParamsFrom<'listAgreements', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAgreements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAgreements'>]-?: ReturnTypeFrom<'listAgreements'>[K]}['Agreements'] }>
  ;

  listCertificates(params: { [K in keyof Omit<ParamsFrom<'listCertificates', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['Certificates'] }>
  listCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['Certificates'] }>;

  listConnectors(params: { [K in keyof Omit<ParamsFrom<'listConnectors', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listConnectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConnectors'>]-?: ReturnTypeFrom<'listConnectors'>[K]}['Connectors'] }>
  listConnectors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConnectors'>]-?: ReturnTypeFrom<'listConnectors'>[K]}['Connectors'] }>;

  listExecutions(params: { [K in keyof Omit<ParamsFrom<'listExecutions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExecutions'>]-?: ReturnTypeFrom<'listExecutions'>[K]}['Executions'] }>
  ;

  listHostKeys: FunctionTypeFrom<'listHostKeys'>;

  listProfiles(params: { [K in keyof Omit<ParamsFrom<'listProfiles', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProfiles'>]-?: ReturnTypeFrom<'listProfiles'>[K]}['Profiles'] }>
  listProfiles(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProfiles'>]-?: ReturnTypeFrom<'listProfiles'>[K]}['Profiles'] }>;

  listSecurityPolicies(params: { [K in keyof Omit<ParamsFrom<'listSecurityPolicies', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSecurityPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityPolicies'>]-?: ReturnTypeFrom<'listSecurityPolicies'>[K]}['SecurityPolicyNames'] }>
  listSecurityPolicies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityPolicies'>]-?: ReturnTypeFrom<'listSecurityPolicies'>[K]}['SecurityPolicyNames'] }>;

  listServers(params: { [K in keyof Omit<ParamsFrom<'listServers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServers'>]-?: ReturnTypeFrom<'listServers'>[K]}['Servers'] }>
  listServers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServers'>]-?: ReturnTypeFrom<'listServers'>[K]}['Servers'] }>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  listUsers(params: { [K in keyof Omit<ParamsFrom<'listUsers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['Users'] }>
  ;

  listWorkflows(params: { [K in keyof Omit<ParamsFrom<'listWorkflows', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listWorkflows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkflows'>]-?: ReturnTypeFrom<'listWorkflows'>[K]}['Workflows'] }>
  listWorkflows(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkflows'>]-?: ReturnTypeFrom<'listWorkflows'>[K]}['Workflows'] }>;

  sendWorkflowStepState: FunctionTypeFrom<'sendWorkflowStepState'>;

  startFileTransfer: FunctionTypeFrom<'startFileTransfer'>;

  startServer: FunctionTypeFrom<'startServer'>;

  stopServer: FunctionTypeFrom<'stopServer'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testIdentityProvider: FunctionTypeFrom<'testIdentityProvider'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAccess: FunctionTypeFrom<'updateAccess'>;

  updateAgreement: FunctionTypeFrom<'updateAgreement'>;

  updateCertificate: FunctionTypeFrom<'updateCertificate'>;

  updateConnector: FunctionTypeFrom<'updateConnector'>;

  updateHostKey: FunctionTypeFrom<'updateHostKey'>;

  updateProfile: FunctionTypeFrom<'updateProfile'>;

  updateServer: FunctionTypeFrom<'updateServer'>;

  updateUser: FunctionTypeFrom<'updateUser'>
}
 
export class Transfer implements ClientType {
  private constructor(private readonly client: AWSTransfer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'transfer';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["listCertificates","listConnectors","listProfiles","listSecurityPolicies","listServers","listWorkflows"] as const;
  
  async createAccess(...args: any): Promise<any> {
  // undefined
    return this.client.createAccess(...args).promise()
  }

  async createAgreement(...args: any): Promise<any> {
  // undefined
    return this.client.createAgreement(...args).promise()
  }

  async createConnector(...args: any): Promise<any> {
  // undefined
    return this.client.createConnector(...args).promise()
  }

  async createProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createProfile(...args).promise()
  }

  async createServer(...args: any): Promise<any> {
  // undefined
    return this.client.createServer(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async createWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkflow(...args).promise()
  }

  async deleteAccess(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccess(...args).promise()
  }

  async deleteAgreement(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAgreement(...args).promise()
  }

  async deleteCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCertificate(...args).promise()
  }

  async deleteConnector(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnector(...args).promise()
  }

  async deleteHostKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHostKey(...args).promise()
  }

  async deleteProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProfile(...args).promise()
  }

  async deleteServer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServer(...args).promise()
  }

  async deleteSshPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSshPublicKey(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async deleteWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkflow(...args).promise()
  }

  async describeAccess(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccess(...args).promise()
  }

  async describeAgreement(...args: any): Promise<any> {
  // undefined
    return this.client.describeAgreement(...args).promise()
  }

  async describeCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.describeCertificate(...args).promise()
  }

  async describeConnector(...args: any): Promise<any> {
  // undefined
    return this.client.describeConnector(...args).promise()
  }

  async describeExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describeExecution(...args).promise()
  }

  async describeHostKey(...args: any): Promise<any> {
  // undefined
    return this.client.describeHostKey(...args).promise()
  }

  async describeProfile(...args: any): Promise<any> {
  // undefined
    return this.client.describeProfile(...args).promise()
  }

  async describeSecurityPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeSecurityPolicy(...args).promise()
  }

  async describeServer(...args: any): Promise<any> {
  // undefined
    return this.client.describeServer(...args).promise()
  }

  async describeUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeUser(...args).promise()
  }

  async describeWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkflow(...args).promise()
  }

  async importCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.importCertificate(...args).promise()
  }

  async importHostKey(...args: any): Promise<any> {
  // undefined
    return this.client.importHostKey(...args).promise()
  }

  async importSshPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.importSshPublicKey(...args).promise()
  }

  async listAccesses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Accesses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccesses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Accesses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAgreements(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Agreements"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAgreements(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Agreements ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCertificates(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Certificates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Certificates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConnectors(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Connectors"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listConnectors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Connectors ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExecutions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Executions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Executions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHostKeys(...args: any): Promise<any> {
  // undefined
    return this.client.listHostKeys(...args).promise()
  }

  async listProfiles(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Profiles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Profiles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSecurityPolicies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityPolicyNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSecurityPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SecurityPolicyNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Servers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Servers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUsers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkflows(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Workflows"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWorkflows(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Workflows ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async sendWorkflowStepState(...args: any): Promise<any> {
  // undefined
    return this.client.sendWorkflowStepState(...args).promise()
  }

  async startFileTransfer(...args: any): Promise<any> {
  // undefined
    return this.client.startFileTransfer(...args).promise()
  }

  async startServer(...args: any): Promise<any> {
  // undefined
    return this.client.startServer(...args).promise()
  }

  async stopServer(...args: any): Promise<any> {
  // undefined
    return this.client.stopServer(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.testIdentityProvider(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAccess(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccess(...args).promise()
  }

  async updateAgreement(...args: any): Promise<any> {
  // undefined
    return this.client.updateAgreement(...args).promise()
  }

  async updateCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.updateCertificate(...args).promise()
  }

  async updateConnector(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnector(...args).promise()
  }

  async updateHostKey(...args: any): Promise<any> {
  // undefined
    return this.client.updateHostKey(...args).promise()
  }

  async updateProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateProfile(...args).promise()
  }

  async updateServer(...args: any): Promise<any> {
  // undefined
    return this.client.updateServer(...args).promise()
  }

  async updateUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateUser(...args).promise()
  }
  
  static fromClient(client: AWSTransfer): ClientType {
    return new Transfer(client) as any;
  }
  
  static client(options?: AWSTransfer.Types.ClientConfiguration): ClientType {
    return new Transfer(new AWSTransfer(options)) as any;
  }
}  
