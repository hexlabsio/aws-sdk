import { Request, ControlTower as AWSControlTower } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSControlTower> = AWSControlTower[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSControlTower> = AWSControlTower[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSControlTower[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSControlTower, Extras> = AWSControlTower[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSControlTower> = AWSControlTower[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ControlTower {
  private constructor(private readonly client: AWSControlTower) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'controltower' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  disableControl: (params: RawParamsFrom<'disableControl'>) => Promise<ReturnTypeFrom<'disableControl'>>  = async params => {
  // undefined
    return this.client.disableControl(params as any).promise();
  }

  enableControl: (params: RawParamsFrom<'enableControl'>) => Promise<ReturnTypeFrom<'enableControl'>>  = async params => {
  // undefined
    return this.client.enableControl(params as any).promise();
  }

  getControlOperation: (params: RawParamsFrom<'getControlOperation'>) => Promise<ReturnTypeFrom<'getControlOperation'>>  = async params => {
  // undefined
    return this.client.getControlOperation(params as any).promise();
  }

  async listEnabledControls(params: { [K in keyof ParamsFrom<'listEnabledControls', { next?: string, limit?: number }>]: ParamsFrom<'listEnabledControls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnabledControls'>]-?: ReturnTypeFrom<'listEnabledControls'>[K]}['enabledControls'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"enabledControls"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnabledControls({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEnabledControls' })).toString('base64') : undefined;
    const member = (Array.isArray(result.enabledControls ?? []) ? (result.enabledControls ?? []) : [result.enabledControls]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSControlTower): ControlTower {
    return new ControlTower(client) as any;
  }
  
  static client(options?: AWSControlTower.Types.ClientConfiguration): ControlTower {
    return new ControlTower(new AWSControlTower(options)) as any;
  }
}  
