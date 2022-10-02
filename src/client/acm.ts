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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'acm';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listCertificates"];
    
  addTagsToCertificate: FunctionTypeFrom<'addTagsToCertificate'>;

  deleteCertificate: FunctionTypeFrom<'deleteCertificate'>;

  describeCertificate: FunctionTypeFrom<'describeCertificate'>;

  exportCertificate: FunctionTypeFrom<'exportCertificate'>;

  getAccountConfiguration: FunctionTypeFrom<'getAccountConfiguration'>;

  getCertificate: FunctionTypeFrom<'getCertificate'>;

  importCertificate: FunctionTypeFrom<'importCertificate'>;

  listCertificates(params: { [K in keyof Omit<ParamsFrom<'listCertificates', { next?: string, limit?: number }>, 'NextToken' | 'MaxItems'>]: ParamsFrom<'listCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['CertificateSummaryList'] }>
  listCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['CertificateSummaryList'] }>;

  listTagsForCertificate: FunctionTypeFrom<'listTagsForCertificate'>;

  putAccountConfiguration: FunctionTypeFrom<'putAccountConfiguration'>;

  removeTagsFromCertificate: FunctionTypeFrom<'removeTagsFromCertificate'>;

  renewCertificate: FunctionTypeFrom<'renewCertificate'>;

  requestCertificate: FunctionTypeFrom<'requestCertificate'>;

  resendValidationEmail: FunctionTypeFrom<'resendValidationEmail'>;

  updateCertificateOptions: FunctionTypeFrom<'updateCertificateOptions'>
}
 
export class ACM implements ClientType {
  private constructor(private readonly client: AWSACM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'acm';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listCertificates"] as const;
  
  async addTagsToCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToCertificate(...args).promise()
  }

  async deleteCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCertificate(...args).promise()
  }

  async describeCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.describeCertificate(...args).promise()
  }

  async exportCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.exportCertificate(...args).promise()
  }

  async getAccountConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountConfiguration(...args).promise()
  }

  async getCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.getCertificate(...args).promise()
  }

  async importCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.importCertificate(...args).promise()
  }

  async listCertificates(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken","resultKey":"CertificateSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listCertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CertificateSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForCertificate(...args).promise()
  }

  async putAccountConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountConfiguration(...args).promise()
  }

  async removeTagsFromCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromCertificate(...args).promise()
  }

  async renewCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.renewCertificate(...args).promise()
  }

  async requestCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.requestCertificate(...args).promise()
  }

  async resendValidationEmail(...args: any): Promise<any> {
  // undefined
    return this.client.resendValidationEmail(...args).promise()
  }

  async updateCertificateOptions(...args: any): Promise<any> {
  // undefined
    return this.client.updateCertificateOptions(...args).promise()
  }
  
  static fromClient(client: AWSACM): ClientType {
    return new ACM(client) as any;
  }
  
  static client(options?: AWSACM.Types.ClientConfiguration): ClientType {
    return new ACM(new AWSACM(options)) as any;
  }
}  
