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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSTransfer> = AWSTransfer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Transfer {
  private constructor(private readonly client: AWSTransfer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'transfer' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["listCertificates","listConnectors","listProfiles","listSecurityPolicies","listServers","listWorkflows"] as const;
  
  createAccess: (params: RawParamsFrom<'createAccess'>) => Promise<ReturnTypeFrom<'createAccess'>>  = async params => {
  // undefined
    return this.client.createAccess(params as any).promise();
  }

  createAgreement: (params: RawParamsFrom<'createAgreement'>) => Promise<ReturnTypeFrom<'createAgreement'>>  = async params => {
  // undefined
    return this.client.createAgreement(params as any).promise();
  }

  createConnector: (params: RawParamsFrom<'createConnector'>) => Promise<ReturnTypeFrom<'createConnector'>>  = async params => {
  // undefined
    return this.client.createConnector(params as any).promise();
  }

  createProfile: (params: RawParamsFrom<'createProfile'>) => Promise<ReturnTypeFrom<'createProfile'>>  = async params => {
  // undefined
    return this.client.createProfile(params as any).promise();
  }

  createServer: (params: RawParamsFrom<'createServer'>) => Promise<ReturnTypeFrom<'createServer'>>  = async params => {
  // undefined
    return this.client.createServer(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  createWorkflow: (params: RawParamsFrom<'createWorkflow'>) => Promise<ReturnTypeFrom<'createWorkflow'>>  = async params => {
  // undefined
    return this.client.createWorkflow(params as any).promise();
  }

  deleteAccess: (params: RawParamsFrom<'deleteAccess'>) => Promise<ReturnTypeFrom<'deleteAccess'>>  = async params => {
  // undefined
    return this.client.deleteAccess(params as any).promise();
  }

  deleteAgreement: (params: RawParamsFrom<'deleteAgreement'>) => Promise<ReturnTypeFrom<'deleteAgreement'>>  = async params => {
  // undefined
    return this.client.deleteAgreement(params as any).promise();
  }

  deleteCertificate: (params: RawParamsFrom<'deleteCertificate'>) => Promise<ReturnTypeFrom<'deleteCertificate'>>  = async params => {
  // undefined
    return this.client.deleteCertificate(params as any).promise();
  }

  deleteConnector: (params: RawParamsFrom<'deleteConnector'>) => Promise<ReturnTypeFrom<'deleteConnector'>>  = async params => {
  // undefined
    return this.client.deleteConnector(params as any).promise();
  }

  deleteHostKey: (params: RawParamsFrom<'deleteHostKey'>) => Promise<ReturnTypeFrom<'deleteHostKey'>>  = async params => {
  // undefined
    return this.client.deleteHostKey(params as any).promise();
  }

  deleteProfile: (params: RawParamsFrom<'deleteProfile'>) => Promise<ReturnTypeFrom<'deleteProfile'>>  = async params => {
  // undefined
    return this.client.deleteProfile(params as any).promise();
  }

  deleteServer: (params: RawParamsFrom<'deleteServer'>) => Promise<ReturnTypeFrom<'deleteServer'>>  = async params => {
  // undefined
    return this.client.deleteServer(params as any).promise();
  }

  deleteSshPublicKey: (params: RawParamsFrom<'deleteSshPublicKey'>) => Promise<ReturnTypeFrom<'deleteSshPublicKey'>>  = async params => {
  // undefined
    return this.client.deleteSshPublicKey(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  deleteWorkflow: (params: RawParamsFrom<'deleteWorkflow'>) => Promise<ReturnTypeFrom<'deleteWorkflow'>>  = async params => {
  // undefined
    return this.client.deleteWorkflow(params as any).promise();
  }

  describeAccess: (params: RawParamsFrom<'describeAccess'>) => Promise<ReturnTypeFrom<'describeAccess'>>  = async params => {
  // undefined
    return this.client.describeAccess(params as any).promise();
  }

  describeAgreement: (params: RawParamsFrom<'describeAgreement'>) => Promise<ReturnTypeFrom<'describeAgreement'>>  = async params => {
  // undefined
    return this.client.describeAgreement(params as any).promise();
  }

  describeCertificate: (params: RawParamsFrom<'describeCertificate'>) => Promise<ReturnTypeFrom<'describeCertificate'>>  = async params => {
  // undefined
    return this.client.describeCertificate(params as any).promise();
  }

  describeConnector: (params: RawParamsFrom<'describeConnector'>) => Promise<ReturnTypeFrom<'describeConnector'>>  = async params => {
  // undefined
    return this.client.describeConnector(params as any).promise();
  }

  describeExecution: (params: RawParamsFrom<'describeExecution'>) => Promise<ReturnTypeFrom<'describeExecution'>>  = async params => {
  // undefined
    return this.client.describeExecution(params as any).promise();
  }

  describeHostKey: (params: RawParamsFrom<'describeHostKey'>) => Promise<ReturnTypeFrom<'describeHostKey'>>  = async params => {
  // undefined
    return this.client.describeHostKey(params as any).promise();
  }

  describeProfile: (params: RawParamsFrom<'describeProfile'>) => Promise<ReturnTypeFrom<'describeProfile'>>  = async params => {
  // undefined
    return this.client.describeProfile(params as any).promise();
  }

  describeSecurityPolicy: (params: RawParamsFrom<'describeSecurityPolicy'>) => Promise<ReturnTypeFrom<'describeSecurityPolicy'>>  = async params => {
  // undefined
    return this.client.describeSecurityPolicy(params as any).promise();
  }

  describeServer: (params: RawParamsFrom<'describeServer'>) => Promise<ReturnTypeFrom<'describeServer'>>  = async params => {
  // undefined
    return this.client.describeServer(params as any).promise();
  }

  describeUser: (params: RawParamsFrom<'describeUser'>) => Promise<ReturnTypeFrom<'describeUser'>>  = async params => {
  // undefined
    return this.client.describeUser(params as any).promise();
  }

  describeWorkflow: (params: RawParamsFrom<'describeWorkflow'>) => Promise<ReturnTypeFrom<'describeWorkflow'>>  = async params => {
  // undefined
    return this.client.describeWorkflow(params as any).promise();
  }

  importCertificate: (params: RawParamsFrom<'importCertificate'>) => Promise<ReturnTypeFrom<'importCertificate'>>  = async params => {
  // undefined
    return this.client.importCertificate(params as any).promise();
  }

  importHostKey: (params: RawParamsFrom<'importHostKey'>) => Promise<ReturnTypeFrom<'importHostKey'>>  = async params => {
  // undefined
    return this.client.importHostKey(params as any).promise();
  }

  importSshPublicKey: (params: RawParamsFrom<'importSshPublicKey'>) => Promise<ReturnTypeFrom<'importSshPublicKey'>>  = async params => {
  // undefined
    return this.client.importSshPublicKey(params as any).promise();
  }

  async listAccesses(params: { [K in keyof ParamsFrom<'listAccesses', { next?: string, limit?: number }>]: ParamsFrom<'listAccesses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccesses'>]-?: ReturnTypeFrom<'listAccesses'>[K]}['Accesses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Accesses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccesses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAccesses' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Accesses ?? []) ? (result.Accesses ?? []) : [result.Accesses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAgreements(params: { [K in keyof ParamsFrom<'listAgreements', { next?: string, limit?: number }>]: ParamsFrom<'listAgreements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAgreements'>]-?: ReturnTypeFrom<'listAgreements'>[K]}['Agreements'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Agreements"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAgreements({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAgreements' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Agreements ?? []) ? (result.Agreements ?? []) : [result.Agreements]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCertificates(params: { [K in keyof ParamsFrom<'listCertificates', { next?: string, limit?: number }>]: ParamsFrom<'listCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['Certificates'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Certificates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCertificates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Certificates ?? []) ? (result.Certificates ?? []) : [result.Certificates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConnectors(params: { [K in keyof ParamsFrom<'listConnectors', { next?: string, limit?: number }>]: ParamsFrom<'listConnectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listConnectors'>]-?: ReturnTypeFrom<'listConnectors'>[K]}['Connectors'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Connectors"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listConnectors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listConnectors' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Connectors ?? []) ? (result.Connectors ?? []) : [result.Connectors]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExecutions(params: { [K in keyof ParamsFrom<'listExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExecutions'>]-?: ReturnTypeFrom<'listExecutions'>[K]}['Executions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Executions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Executions ?? []) ? (result.Executions ?? []) : [result.Executions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listHostKeys: (params: RawParamsFrom<'listHostKeys'>) => Promise<ReturnTypeFrom<'listHostKeys'>>  = async params => {
  // undefined
    return this.client.listHostKeys(params as any).promise();
  }

  async listProfiles(params: { [K in keyof ParamsFrom<'listProfiles', { next?: string, limit?: number }>]: ParamsFrom<'listProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProfiles'>]-?: ReturnTypeFrom<'listProfiles'>[K]}['Profiles'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Profiles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listProfiles' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Profiles ?? []) ? (result.Profiles ?? []) : [result.Profiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSecurityPolicies(params: { [K in keyof ParamsFrom<'listSecurityPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listSecurityPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSecurityPolicies'>]-?: ReturnTypeFrom<'listSecurityPolicies'>[K]}['SecurityPolicyNames'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityPolicyNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSecurityPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSecurityPolicies' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SecurityPolicyNames ?? []) ? (result.SecurityPolicyNames ?? []) : [result.SecurityPolicyNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServers(params: { [K in keyof ParamsFrom<'listServers', { next?: string, limit?: number }>]: ParamsFrom<'listServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServers'>]-?: ReturnTypeFrom<'listServers'>[K]}['Servers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Servers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listServers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Servers ?? []) ? (result.Servers ?? []) : [result.Servers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTagsForResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsers(params: { [K in keyof ParamsFrom<'listUsers', { next?: string, limit?: number }>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['Users'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listUsers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkflows(params: { [K in keyof ParamsFrom<'listWorkflows', { next?: string, limit?: number }>]: ParamsFrom<'listWorkflows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkflows'>]-?: ReturnTypeFrom<'listWorkflows'>[K]}['Workflows'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Workflows"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWorkflows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listWorkflows' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Workflows ?? []) ? (result.Workflows ?? []) : [result.Workflows]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  sendWorkflowStepState: (params: RawParamsFrom<'sendWorkflowStepState'>) => Promise<ReturnTypeFrom<'sendWorkflowStepState'>>  = async params => {
  // undefined
    return this.client.sendWorkflowStepState(params as any).promise();
  }

  startFileTransfer: (params: RawParamsFrom<'startFileTransfer'>) => Promise<ReturnTypeFrom<'startFileTransfer'>>  = async params => {
  // undefined
    return this.client.startFileTransfer(params as any).promise();
  }

  startServer: (params: RawParamsFrom<'startServer'>) => Promise<ReturnTypeFrom<'startServer'>>  = async params => {
  // undefined
    return this.client.startServer(params as any).promise();
  }

  stopServer: (params: RawParamsFrom<'stopServer'>) => Promise<ReturnTypeFrom<'stopServer'>>  = async params => {
  // undefined
    return this.client.stopServer(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testIdentityProvider: (params: RawParamsFrom<'testIdentityProvider'>) => Promise<ReturnTypeFrom<'testIdentityProvider'>>  = async params => {
  // undefined
    return this.client.testIdentityProvider(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAccess: (params: RawParamsFrom<'updateAccess'>) => Promise<ReturnTypeFrom<'updateAccess'>>  = async params => {
  // undefined
    return this.client.updateAccess(params as any).promise();
  }

  updateAgreement: (params: RawParamsFrom<'updateAgreement'>) => Promise<ReturnTypeFrom<'updateAgreement'>>  = async params => {
  // undefined
    return this.client.updateAgreement(params as any).promise();
  }

  updateCertificate: (params: RawParamsFrom<'updateCertificate'>) => Promise<ReturnTypeFrom<'updateCertificate'>>  = async params => {
  // undefined
    return this.client.updateCertificate(params as any).promise();
  }

  updateConnector: (params: RawParamsFrom<'updateConnector'>) => Promise<ReturnTypeFrom<'updateConnector'>>  = async params => {
  // undefined
    return this.client.updateConnector(params as any).promise();
  }

  updateHostKey: (params: RawParamsFrom<'updateHostKey'>) => Promise<ReturnTypeFrom<'updateHostKey'>>  = async params => {
  // undefined
    return this.client.updateHostKey(params as any).promise();
  }

  updateProfile: (params: RawParamsFrom<'updateProfile'>) => Promise<ReturnTypeFrom<'updateProfile'>>  = async params => {
  // undefined
    return this.client.updateProfile(params as any).promise();
  }

  updateServer: (params: RawParamsFrom<'updateServer'>) => Promise<ReturnTypeFrom<'updateServer'>>  = async params => {
  // undefined
    return this.client.updateServer(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }
  
  static fromClient(client: AWSTransfer): Transfer {
    return new Transfer(client) as any;
  }
  
  static client(options?: AWSTransfer.Types.ClientConfiguration): Transfer {
    return new Transfer(new AWSTransfer(options)) as any;
  }
}  
