import { Request, Polly as AWSPolly } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPolly> = AWSPolly[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPolly> = AWSPolly[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPolly[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPolly, Extras> = AWSPolly[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'polly';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listSpeechSynthesisTasks"];
    
  deleteLexicon: FunctionTypeFrom<'deleteLexicon'>;

  describeVoices: FunctionTypeFrom<'describeVoices'>;

  getLexicon: FunctionTypeFrom<'getLexicon'>;

  getSpeechSynthesisTask: FunctionTypeFrom<'getSpeechSynthesisTask'>;

  listLexicons: FunctionTypeFrom<'listLexicons'>;

  listSpeechSynthesisTasks: FunctionTypeFrom<'listSpeechSynthesisTasks'>;

  putLexicon: FunctionTypeFrom<'putLexicon'>;

  startSpeechSynthesisTask: FunctionTypeFrom<'startSpeechSynthesisTask'>;

  synthesizeSpeech: FunctionTypeFrom<'synthesizeSpeech'>
}
 
export class Polly implements ClientType {
  private constructor(private readonly client: AWSPolly) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'polly';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listSpeechSynthesisTasks"] as const;
  
  async deleteLexicon(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLexicon(...args).promise()
  }

  async describeVoices(...args: any): Promise<any> {
  // undefined
    return this.client.describeVoices(...args).promise()
  }

  async getLexicon(...args: any): Promise<any> {
  // undefined
    return this.client.getLexicon(...args).promise()
  }

  async getSpeechSynthesisTask(...args: any): Promise<any> {
  // undefined
    return this.client.getSpeechSynthesisTask(...args).promise()
  }

  async listLexicons(...args: any): Promise<any> {
  // undefined
    return this.client.listLexicons(...args).promise()
  }

  async listSpeechSynthesisTasks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSpeechSynthesisTasks(...args).promise()
  }

  async putLexicon(...args: any): Promise<any> {
  // undefined
    return this.client.putLexicon(...args).promise()
  }

  async startSpeechSynthesisTask(...args: any): Promise<any> {
  // undefined
    return this.client.startSpeechSynthesisTask(...args).promise()
  }

  async synthesizeSpeech(...args: any): Promise<any> {
  // undefined
    return this.client.synthesizeSpeech(...args).promise()
  }
  
  static fromClient(client: AWSPolly): ClientType {
    return new Polly(client) as any;
  }
  
  static client(options?: AWSPolly.Types.ClientConfiguration): ClientType {
    return new Polly(new AWSPolly(options)) as any;
  }
}  
