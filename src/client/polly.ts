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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPolly> = AWSPolly[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Polly {
  private constructor(private readonly client: AWSPolly) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'polly' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listSpeechSynthesisTasks"] as const;
  
  deleteLexicon: (params: RawParamsFrom<'deleteLexicon'>) => Promise<ReturnTypeFrom<'deleteLexicon'>>  = async params => {
  // undefined
    return this.client.deleteLexicon(params as any).promise();
  }

  describeVoices: (params: RawParamsFrom<'describeVoices'>) => Promise<ReturnTypeFrom<'describeVoices'>>  = async params => {
  // undefined
    return this.client.describeVoices(params as any).promise();
  }

  getLexicon: (params: RawParamsFrom<'getLexicon'>) => Promise<ReturnTypeFrom<'getLexicon'>>  = async params => {
  // undefined
    return this.client.getLexicon(params as any).promise();
  }

  getSpeechSynthesisTask: (params: RawParamsFrom<'getSpeechSynthesisTask'>) => Promise<ReturnTypeFrom<'getSpeechSynthesisTask'>>  = async params => {
  // undefined
    return this.client.getSpeechSynthesisTask(params as any).promise();
  }

  listLexicons: (params: RawParamsFrom<'listLexicons'>) => Promise<ReturnTypeFrom<'listLexicons'>>  = async params => {
  // undefined
    return this.client.listLexicons(params as any).promise();
  }

  listSpeechSynthesisTasks: (params: RawParamsFrom<'listSpeechSynthesisTasks'>) => Promise<ReturnTypeFrom<'listSpeechSynthesisTasks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSpeechSynthesisTasks(params as any).promise();
  }

  putLexicon: (params: RawParamsFrom<'putLexicon'>) => Promise<ReturnTypeFrom<'putLexicon'>>  = async params => {
  // undefined
    return this.client.putLexicon(params as any).promise();
  }

  startSpeechSynthesisTask: (params: RawParamsFrom<'startSpeechSynthesisTask'>) => Promise<ReturnTypeFrom<'startSpeechSynthesisTask'>>  = async params => {
  // undefined
    return this.client.startSpeechSynthesisTask(params as any).promise();
  }

  synthesizeSpeech: (params: RawParamsFrom<'synthesizeSpeech'>) => Promise<ReturnTypeFrom<'synthesizeSpeech'>>  = async params => {
  // undefined
    return this.client.synthesizeSpeech(params as any).promise();
  }
  
  static fromClient(client: AWSPolly): Polly {
    return new Polly(client) as any;
  }
  
  static client(options?: AWSPolly.Types.ClientConfiguration): Polly {
    return new Polly(new AWSPolly(options)) as any;
  }
}  
