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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'controltower';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  disableControl: FunctionTypeFrom<'disableControl'>;

  enableControl: FunctionTypeFrom<'enableControl'>;

  getControlOperation: FunctionTypeFrom<'getControlOperation'>;

  listEnabledControls(params: { [K in keyof Omit<ParamsFrom<'listEnabledControls', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEnabledControls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnabledControls'>]-?: ReturnTypeFrom<'listEnabledControls'>[K]}['enabledControls'] }>
  
}
 
export class ControlTower implements ClientType {
  private constructor(private readonly client: AWSControlTower) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'controltower';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async disableControl(...args: any): Promise<any> {
  // undefined
    return this.client.disableControl(...args).promise()
  }

  async enableControl(...args: any): Promise<any> {
  // undefined
    return this.client.enableControl(...args).promise()
  }

  async getControlOperation(...args: any): Promise<any> {
  // undefined
    return this.client.getControlOperation(...args).promise()
  }

  async listEnabledControls(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"enabledControls"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnabledControls(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.enabledControls ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSControlTower): ClientType {
    return new ControlTower(client) as any;
  }
  
  static client(options?: AWSControlTower.Types.ClientConfiguration): ClientType {
    return new ControlTower(new AWSControlTower(options)) as any;
  }
}  
