import { Request, Textract as AWSTextract } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSTextract> = AWSTextract[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSTextract> = AWSTextract[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSTextract[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSTextract, Extras> = AWSTextract[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSTextract> = AWSTextract[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Textract {
  private constructor(private readonly client: AWSTextract) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'textract' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = [] as const;
  
  analyzeDocument: (params: RawParamsFrom<'analyzeDocument'>) => Promise<ReturnTypeFrom<'analyzeDocument'>>  = async params => {
  // undefined
    return this.client.analyzeDocument(params as any).promise();
  }

  analyzeExpense: (params: RawParamsFrom<'analyzeExpense'>) => Promise<ReturnTypeFrom<'analyzeExpense'>>  = async params => {
  // undefined
    return this.client.analyzeExpense(params as any).promise();
  }

  analyzeID: (params: RawParamsFrom<'analyzeID'>) => Promise<ReturnTypeFrom<'analyzeID'>>  = async params => {
  // undefined
    return this.client.analyzeID(params as any).promise();
  }

  detectDocumentText: (params: RawParamsFrom<'detectDocumentText'>) => Promise<ReturnTypeFrom<'detectDocumentText'>>  = async params => {
  // undefined
    return this.client.detectDocumentText(params as any).promise();
  }

  getDocumentAnalysis: (params: RawParamsFrom<'getDocumentAnalysis'>) => Promise<ReturnTypeFrom<'getDocumentAnalysis'>>  = async params => {
  // undefined
    return this.client.getDocumentAnalysis(params as any).promise();
  }

  getDocumentTextDetection: (params: RawParamsFrom<'getDocumentTextDetection'>) => Promise<ReturnTypeFrom<'getDocumentTextDetection'>>  = async params => {
  // undefined
    return this.client.getDocumentTextDetection(params as any).promise();
  }

  getExpenseAnalysis: (params: RawParamsFrom<'getExpenseAnalysis'>) => Promise<ReturnTypeFrom<'getExpenseAnalysis'>>  = async params => {
  // undefined
    return this.client.getExpenseAnalysis(params as any).promise();
  }

  startDocumentAnalysis: (params: RawParamsFrom<'startDocumentAnalysis'>) => Promise<ReturnTypeFrom<'startDocumentAnalysis'>>  = async params => {
  // undefined
    return this.client.startDocumentAnalysis(params as any).promise();
  }

  startDocumentTextDetection: (params: RawParamsFrom<'startDocumentTextDetection'>) => Promise<ReturnTypeFrom<'startDocumentTextDetection'>>  = async params => {
  // undefined
    return this.client.startDocumentTextDetection(params as any).promise();
  }

  startExpenseAnalysis: (params: RawParamsFrom<'startExpenseAnalysis'>) => Promise<ReturnTypeFrom<'startExpenseAnalysis'>>  = async params => {
  // undefined
    return this.client.startExpenseAnalysis(params as any).promise();
  }
  
  static fromClient(client: AWSTextract): Textract {
    return new Textract(client) as any;
  }
  
  static client(options?: AWSTextract.Types.ClientConfiguration): Textract {
    return new Textract(new AWSTextract(options)) as any;
  }
}  
