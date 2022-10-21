import { Request, MigrationHubConfig as AWSMigrationHubConfig } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMigrationHubConfig> = AWSMigrationHubConfig[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMigrationHubConfig> = AWSMigrationHubConfig[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMigrationHubConfig[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMigrationHubConfig, Extras> = AWSMigrationHubConfig[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMigrationHubConfig> = AWSMigrationHubConfig[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MigrationHubConfig {
  private constructor(private readonly client: AWSMigrationHubConfig) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'migrationhub-config' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["describeHomeRegionControls"] as const;
  
  createHomeRegionControl: (params: RawParamsFrom<'createHomeRegionControl'>) => Promise<ReturnTypeFrom<'createHomeRegionControl'>>  = async params => {
  // undefined
    return this.client.createHomeRegionControl(params as any).promise();
  }

  describeHomeRegionControls: (params: RawParamsFrom<'describeHomeRegionControls'>) => Promise<ReturnTypeFrom<'describeHomeRegionControls'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeHomeRegionControls(params as any).promise();
  }

  getHomeRegion: (params: RawParamsFrom<'getHomeRegion'>) => Promise<ReturnTypeFrom<'getHomeRegion'>>  = async params => {
  // undefined
    return this.client.getHomeRegion(params as any).promise();
  }
  
  static fromClient(client: AWSMigrationHubConfig): MigrationHubConfig {
    return new MigrationHubConfig(client) as any;
  }
  
  static client(options?: AWSMigrationHubConfig.Types.ClientConfiguration): MigrationHubConfig {
    return new MigrationHubConfig(new AWSMigrationHubConfig(options)) as any;
  }
}  
