import { Request, ACM as AWSACM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSACM> = AWSACM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSACM> = AWSACM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSACM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSACM, Extras> = AWSACM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSACM> = AWSACM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ACM {
  private constructor(private readonly client: AWSACM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'acm' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listCertificates"] as const;
  
  addTagsToCertificate: (params: RawParamsFrom<'addTagsToCertificate'>) => Promise<ReturnTypeFrom<'addTagsToCertificate'>>  = async params => {
  // undefined
    return this.client.addTagsToCertificate(params as any).promise();
  }

  deleteCertificate: (params: RawParamsFrom<'deleteCertificate'>) => Promise<ReturnTypeFrom<'deleteCertificate'>>  = async params => {
  // undefined
    return this.client.deleteCertificate(params as any).promise();
  }

  describeCertificate: (params: RawParamsFrom<'describeCertificate'>) => Promise<ReturnTypeFrom<'describeCertificate'>>  = async params => {
  // undefined
    return this.client.describeCertificate(params as any).promise();
  }

  exportCertificate: (params: RawParamsFrom<'exportCertificate'>) => Promise<ReturnTypeFrom<'exportCertificate'>>  = async params => {
  // undefined
    return this.client.exportCertificate(params as any).promise();
  }

  getAccountConfiguration: (params: RawParamsFrom<'getAccountConfiguration'>) => Promise<ReturnTypeFrom<'getAccountConfiguration'>>  = async params => {
  // undefined
    return this.client.getAccountConfiguration(params as any).promise();
  }

  getCertificate: (params: RawParamsFrom<'getCertificate'>) => Promise<ReturnTypeFrom<'getCertificate'>>  = async params => {
  // undefined
    return this.client.getCertificate(params as any).promise();
  }

  importCertificate: (params: RawParamsFrom<'importCertificate'>) => Promise<ReturnTypeFrom<'importCertificate'>>  = async params => {
  // undefined
    return this.client.importCertificate(params as any).promise();
  }

  async listCertificates(params: { [K in keyof ParamsFrom<'listCertificates', { next?: string, limit?: number }>]: ParamsFrom<'listCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['CertificateSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken","resultKey":"CertificateSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.CertificateSummaryList ?? []) ? (result.CertificateSummaryList ?? []) : [result.CertificateSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForCertificate: (params: RawParamsFrom<'listTagsForCertificate'>) => Promise<ReturnTypeFrom<'listTagsForCertificate'>>  = async params => {
  // undefined
    return this.client.listTagsForCertificate(params as any).promise();
  }

  putAccountConfiguration: (params: RawParamsFrom<'putAccountConfiguration'>) => Promise<ReturnTypeFrom<'putAccountConfiguration'>>  = async params => {
  // undefined
    return this.client.putAccountConfiguration(params as any).promise();
  }

  removeTagsFromCertificate: (params: RawParamsFrom<'removeTagsFromCertificate'>) => Promise<ReturnTypeFrom<'removeTagsFromCertificate'>>  = async params => {
  // undefined
    return this.client.removeTagsFromCertificate(params as any).promise();
  }

  renewCertificate: (params: RawParamsFrom<'renewCertificate'>) => Promise<ReturnTypeFrom<'renewCertificate'>>  = async params => {
  // undefined
    return this.client.renewCertificate(params as any).promise();
  }

  requestCertificate: (params: RawParamsFrom<'requestCertificate'>) => Promise<ReturnTypeFrom<'requestCertificate'>>  = async params => {
  // undefined
    return this.client.requestCertificate(params as any).promise();
  }

  resendValidationEmail: (params: RawParamsFrom<'resendValidationEmail'>) => Promise<ReturnTypeFrom<'resendValidationEmail'>>  = async params => {
  // undefined
    return this.client.resendValidationEmail(params as any).promise();
  }

  updateCertificateOptions: (params: RawParamsFrom<'updateCertificateOptions'>) => Promise<ReturnTypeFrom<'updateCertificateOptions'>>  = async params => {
  // undefined
    return this.client.updateCertificateOptions(params as any).promise();
  }
  
  static fromClient(client: AWSACM): ACM {
    return new ACM(client) as any;
  }
  
  static client(options?: AWSACM.Types.ClientConfiguration): ACM {
    return new ACM(new AWSACM(options)) as any;
  }
}  
