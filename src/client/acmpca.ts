import { Request, ACMPCA as AWSACMPCA } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSACMPCA> = AWSACMPCA[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSACMPCA> = AWSACMPCA[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSACMPCA[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSACMPCA, Extras> = AWSACMPCA[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'acm-pca';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listCertificateAuthorities"];
    
  createCertificateAuthority: FunctionTypeFrom<'createCertificateAuthority'>;

  createCertificateAuthorityAuditReport: FunctionTypeFrom<'createCertificateAuthorityAuditReport'>;

  createPermission: FunctionTypeFrom<'createPermission'>;

  deleteCertificateAuthority: FunctionTypeFrom<'deleteCertificateAuthority'>;

  deletePermission: FunctionTypeFrom<'deletePermission'>;

  deletePolicy: FunctionTypeFrom<'deletePolicy'>;

  describeCertificateAuthority: FunctionTypeFrom<'describeCertificateAuthority'>;

  describeCertificateAuthorityAuditReport: FunctionTypeFrom<'describeCertificateAuthorityAuditReport'>;

  getCertificate: FunctionTypeFrom<'getCertificate'>;

  getCertificateAuthorityCertificate: FunctionTypeFrom<'getCertificateAuthorityCertificate'>;

  getCertificateAuthorityCsr: FunctionTypeFrom<'getCertificateAuthorityCsr'>;

  getPolicy: FunctionTypeFrom<'getPolicy'>;

  importCertificateAuthorityCertificate: FunctionTypeFrom<'importCertificateAuthorityCertificate'>;

  issueCertificate: FunctionTypeFrom<'issueCertificate'>;

  listCertificateAuthorities(params: { [K in keyof Omit<ParamsFrom<'listCertificateAuthorities', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCertificateAuthorities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCertificateAuthorities'>]-?: ReturnTypeFrom<'listCertificateAuthorities'>[K]}['CertificateAuthorities'] }>
  listCertificateAuthorities(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCertificateAuthorities'>]-?: ReturnTypeFrom<'listCertificateAuthorities'>[K]}['CertificateAuthorities'] }>;

  listPermissions(params: { [K in keyof Omit<ParamsFrom<'listPermissions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPermissions'>]-?: ReturnTypeFrom<'listPermissions'>[K]}['Permissions'] }>
  ;

  listTags(params: { [K in keyof Omit<ParamsFrom<'listTags', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTags'>]-?: ReturnTypeFrom<'listTags'>[K]}['Tags'] }>
  ;

  putPolicy: FunctionTypeFrom<'putPolicy'>;

  restoreCertificateAuthority: FunctionTypeFrom<'restoreCertificateAuthority'>;

  revokeCertificate: FunctionTypeFrom<'revokeCertificate'>;

  tagCertificateAuthority: FunctionTypeFrom<'tagCertificateAuthority'>;

  untagCertificateAuthority: FunctionTypeFrom<'untagCertificateAuthority'>;

  updateCertificateAuthority: FunctionTypeFrom<'updateCertificateAuthority'>
}
 
export class ACMPCA implements ClientType {
  private constructor(private readonly client: AWSACMPCA) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'acm-pca';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listCertificateAuthorities"] as const;
  
  async createCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.createCertificateAuthority(...args).promise()
  }

  async createCertificateAuthorityAuditReport(...args: any): Promise<any> {
  // undefined
    return this.client.createCertificateAuthorityAuditReport(...args).promise()
  }

  async createPermission(...args: any): Promise<any> {
  // undefined
    return this.client.createPermission(...args).promise()
  }

  async deleteCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCertificateAuthority(...args).promise()
  }

  async deletePermission(...args: any): Promise<any> {
  // undefined
    return this.client.deletePermission(...args).promise()
  }

  async deletePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deletePolicy(...args).promise()
  }

  async describeCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.describeCertificateAuthority(...args).promise()
  }

  async describeCertificateAuthorityAuditReport(...args: any): Promise<any> {
  // undefined
    return this.client.describeCertificateAuthorityAuditReport(...args).promise()
  }

  async getCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.getCertificate(...args).promise()
  }

  async getCertificateAuthorityCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.getCertificateAuthorityCertificate(...args).promise()
  }

  async getCertificateAuthorityCsr(...args: any): Promise<any> {
  // undefined
    return this.client.getCertificateAuthorityCsr(...args).promise()
  }

  async getPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getPolicy(...args).promise()
  }

  async importCertificateAuthorityCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.importCertificateAuthorityCertificate(...args).promise()
  }

  async issueCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.issueCertificate(...args).promise()
  }

  async listCertificateAuthorities(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CertificateAuthorities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCertificateAuthorities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CertificateAuthorities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Permissions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPermissions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Permissions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTags(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putPolicy(...args).promise()
  }

  async restoreCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.restoreCertificateAuthority(...args).promise()
  }

  async revokeCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.revokeCertificate(...args).promise()
  }

  async tagCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.tagCertificateAuthority(...args).promise()
  }

  async untagCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.untagCertificateAuthority(...args).promise()
  }

  async updateCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.updateCertificateAuthority(...args).promise()
  }
  
  static fromClient(client: AWSACMPCA): ClientType {
    return new ACMPCA(client) as any;
  }
  
  static client(options?: AWSACMPCA.Types.ClientConfiguration): ClientType {
    return new ACMPCA(new AWSACMPCA(options)) as any;
  }
}  
