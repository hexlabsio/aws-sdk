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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'textract';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly [];
    
  analyzeDocument: FunctionTypeFrom<'analyzeDocument'>;

  analyzeExpense: FunctionTypeFrom<'analyzeExpense'>;

  analyzeID: FunctionTypeFrom<'analyzeID'>;

  detectDocumentText: FunctionTypeFrom<'detectDocumentText'>;

  getDocumentAnalysis: FunctionTypeFrom<'getDocumentAnalysis'>;

  getDocumentTextDetection: FunctionTypeFrom<'getDocumentTextDetection'>;

  getExpenseAnalysis: FunctionTypeFrom<'getExpenseAnalysis'>;

  startDocumentAnalysis: FunctionTypeFrom<'startDocumentAnalysis'>;

  startDocumentTextDetection: FunctionTypeFrom<'startDocumentTextDetection'>;

  startExpenseAnalysis: FunctionTypeFrom<'startExpenseAnalysis'>
}
 
export class Textract implements ClientType {
  private constructor(private readonly client: AWSTextract) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'textract';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = [] as const;
  
  async analyzeDocument(...args: any): Promise<any> {
  // undefined
    return this.client.analyzeDocument(...args).promise()
  }

  async analyzeExpense(...args: any): Promise<any> {
  // undefined
    return this.client.analyzeExpense(...args).promise()
  }

  async analyzeID(...args: any): Promise<any> {
  // undefined
    return this.client.analyzeID(...args).promise()
  }

  async detectDocumentText(...args: any): Promise<any> {
  // undefined
    return this.client.detectDocumentText(...args).promise()
  }

  async getDocumentAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.getDocumentAnalysis(...args).promise()
  }

  async getDocumentTextDetection(...args: any): Promise<any> {
  // undefined
    return this.client.getDocumentTextDetection(...args).promise()
  }

  async getExpenseAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.getExpenseAnalysis(...args).promise()
  }

  async startDocumentAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.startDocumentAnalysis(...args).promise()
  }

  async startDocumentTextDetection(...args: any): Promise<any> {
  // undefined
    return this.client.startDocumentTextDetection(...args).promise()
  }

  async startExpenseAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.startExpenseAnalysis(...args).promise()
  }
  
  static fromClient(client: AWSTextract): ClientType {
    return new Textract(client) as any;
  }
  
  static client(options?: AWSTextract.Types.ClientConfiguration): ClientType {
    return new Textract(new AWSTextract(options)) as any;
  }
}  
