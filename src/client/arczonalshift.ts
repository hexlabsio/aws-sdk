import { Request, ARCZonalShift as AWSARCZonalShift } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSARCZonalShift> = AWSARCZonalShift[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSARCZonalShift> = AWSARCZonalShift[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSARCZonalShift[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSARCZonalShift, Extras> = AWSARCZonalShift[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSARCZonalShift> = AWSARCZonalShift[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ARCZonalShift {
  private constructor(private readonly client: AWSARCZonalShift) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'arc-zonal-shift' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listManagedResources","listZonalShifts"] as const;
  
  cancelZonalShift: (params: RawParamsFrom<'cancelZonalShift'>) => Promise<ReturnTypeFrom<'cancelZonalShift'>>  = async params => {
  // undefined
    return this.client.cancelZonalShift(params as any).promise();
  }

  getManagedResource: (params: RawParamsFrom<'getManagedResource'>) => Promise<ReturnTypeFrom<'getManagedResource'>>  = async params => {
  // undefined
    return this.client.getManagedResource(params as any).promise();
  }

  async listManagedResources(params: { [K in keyof ParamsFrom<'listManagedResources', { next?: string, limit?: number }>]: ParamsFrom<'listManagedResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listManagedResources'>]-?: ReturnTypeFrom<'listManagedResources'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listManagedResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listManagedResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listZonalShifts(params: { [K in keyof ParamsFrom<'listZonalShifts', { next?: string, limit?: number }>]: ParamsFrom<'listZonalShifts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listZonalShifts'>]-?: ReturnTypeFrom<'listZonalShifts'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listZonalShifts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listZonalShifts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startZonalShift: (params: RawParamsFrom<'startZonalShift'>) => Promise<ReturnTypeFrom<'startZonalShift'>>  = async params => {
  // undefined
    return this.client.startZonalShift(params as any).promise();
  }

  updateZonalShift: (params: RawParamsFrom<'updateZonalShift'>) => Promise<ReturnTypeFrom<'updateZonalShift'>>  = async params => {
  // undefined
    return this.client.updateZonalShift(params as any).promise();
  }
  
  static fromClient(client: AWSARCZonalShift): ARCZonalShift {
    return new ARCZonalShift(client) as any;
  }
  
  static client(options?: AWSARCZonalShift.Types.ClientConfiguration): ARCZonalShift {
    return new ARCZonalShift(new AWSARCZonalShift(options)) as any;
  }
}  
