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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSACMPCA> = AWSACMPCA[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ACMPCA {
  private constructor(private readonly client: AWSACMPCA) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'acm-pca' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listCertificateAuthorities"] as const;
  
  createCertificateAuthority: (params: RawParamsFrom<'createCertificateAuthority'>) => Promise<ReturnTypeFrom<'createCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.createCertificateAuthority(params as any).promise();
  }

  createCertificateAuthorityAuditReport: (params: RawParamsFrom<'createCertificateAuthorityAuditReport'>) => Promise<ReturnTypeFrom<'createCertificateAuthorityAuditReport'>>  = async params => {
  // undefined
    return this.client.createCertificateAuthorityAuditReport(params as any).promise();
  }

  createPermission: (params: RawParamsFrom<'createPermission'>) => Promise<ReturnTypeFrom<'createPermission'>>  = async params => {
  // undefined
    return this.client.createPermission(params as any).promise();
  }

  deleteCertificateAuthority: (params: RawParamsFrom<'deleteCertificateAuthority'>) => Promise<ReturnTypeFrom<'deleteCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.deleteCertificateAuthority(params as any).promise();
  }

  deletePermission: (params: RawParamsFrom<'deletePermission'>) => Promise<ReturnTypeFrom<'deletePermission'>>  = async params => {
  // undefined
    return this.client.deletePermission(params as any).promise();
  }

  deletePolicy: (params: RawParamsFrom<'deletePolicy'>) => Promise<ReturnTypeFrom<'deletePolicy'>>  = async params => {
  // undefined
    return this.client.deletePolicy(params as any).promise();
  }

  describeCertificateAuthority: (params: RawParamsFrom<'describeCertificateAuthority'>) => Promise<ReturnTypeFrom<'describeCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.describeCertificateAuthority(params as any).promise();
  }

  describeCertificateAuthorityAuditReport: (params: RawParamsFrom<'describeCertificateAuthorityAuditReport'>) => Promise<ReturnTypeFrom<'describeCertificateAuthorityAuditReport'>>  = async params => {
  // undefined
    return this.client.describeCertificateAuthorityAuditReport(params as any).promise();
  }

  getCertificate: (params: RawParamsFrom<'getCertificate'>) => Promise<ReturnTypeFrom<'getCertificate'>>  = async params => {
  // undefined
    return this.client.getCertificate(params as any).promise();
  }

  getCertificateAuthorityCertificate: (params: RawParamsFrom<'getCertificateAuthorityCertificate'>) => Promise<ReturnTypeFrom<'getCertificateAuthorityCertificate'>>  = async params => {
  // undefined
    return this.client.getCertificateAuthorityCertificate(params as any).promise();
  }

  getCertificateAuthorityCsr: (params: RawParamsFrom<'getCertificateAuthorityCsr'>) => Promise<ReturnTypeFrom<'getCertificateAuthorityCsr'>>  = async params => {
  // undefined
    return this.client.getCertificateAuthorityCsr(params as any).promise();
  }

  getPolicy: (params: RawParamsFrom<'getPolicy'>) => Promise<ReturnTypeFrom<'getPolicy'>>  = async params => {
  // undefined
    return this.client.getPolicy(params as any).promise();
  }

  importCertificateAuthorityCertificate: (params: RawParamsFrom<'importCertificateAuthorityCertificate'>) => Promise<ReturnTypeFrom<'importCertificateAuthorityCertificate'>>  = async params => {
  // undefined
    return this.client.importCertificateAuthorityCertificate(params as any).promise();
  }

  issueCertificate: (params: RawParamsFrom<'issueCertificate'>) => Promise<ReturnTypeFrom<'issueCertificate'>>  = async params => {
  // undefined
    return this.client.issueCertificate(params as any).promise();
  }

  async listCertificateAuthorities(params: { [K in keyof ParamsFrom<'listCertificateAuthorities', { next?: string, limit?: number }>]: ParamsFrom<'listCertificateAuthorities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCertificateAuthorities'>]-?: ReturnTypeFrom<'listCertificateAuthorities'>[K]}['CertificateAuthorities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CertificateAuthorities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCertificateAuthorities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.CertificateAuthorities ?? []) ? (result.CertificateAuthorities ?? []) : [result.CertificateAuthorities]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPermissions(params: { [K in keyof ParamsFrom<'listPermissions', { next?: string, limit?: number }>]: ParamsFrom<'listPermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPermissions'>]-?: ReturnTypeFrom<'listPermissions'>[K]}['Permissions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Permissions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPermissions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Permissions ?? []) ? (result.Permissions ?? []) : [result.Permissions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTags(params: { [K in keyof ParamsFrom<'listTags', { next?: string, limit?: number }>]: ParamsFrom<'listTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTags'>]-?: ReturnTypeFrom<'listTags'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putPolicy: (params: RawParamsFrom<'putPolicy'>) => Promise<ReturnTypeFrom<'putPolicy'>>  = async params => {
  // undefined
    return this.client.putPolicy(params as any).promise();
  }

  restoreCertificateAuthority: (params: RawParamsFrom<'restoreCertificateAuthority'>) => Promise<ReturnTypeFrom<'restoreCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.restoreCertificateAuthority(params as any).promise();
  }

  revokeCertificate: (params: RawParamsFrom<'revokeCertificate'>) => Promise<ReturnTypeFrom<'revokeCertificate'>>  = async params => {
  // undefined
    return this.client.revokeCertificate(params as any).promise();
  }

  tagCertificateAuthority: (params: RawParamsFrom<'tagCertificateAuthority'>) => Promise<ReturnTypeFrom<'tagCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.tagCertificateAuthority(params as any).promise();
  }

  untagCertificateAuthority: (params: RawParamsFrom<'untagCertificateAuthority'>) => Promise<ReturnTypeFrom<'untagCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.untagCertificateAuthority(params as any).promise();
  }

  updateCertificateAuthority: (params: RawParamsFrom<'updateCertificateAuthority'>) => Promise<ReturnTypeFrom<'updateCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.updateCertificateAuthority(params as any).promise();
  }
  
  static fromClient(client: AWSACMPCA): ACMPCA {
    return new ACMPCA(client) as any;
  }
  
  static client(options?: AWSACMPCA.Types.ClientConfiguration): ACMPCA {
    return new ACMPCA(new AWSACMPCA(options)) as any;
  }
}  
