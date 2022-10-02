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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'migrationhub-config';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["describeHomeRegionControls"];
    
  createHomeRegionControl: FunctionTypeFrom<'createHomeRegionControl'>;

  describeHomeRegionControls: FunctionTypeFrom<'describeHomeRegionControls'>;

  getHomeRegion: FunctionTypeFrom<'getHomeRegion'>
}
 
export class MigrationHubConfig implements ClientType {
  private constructor(private readonly client: AWSMigrationHubConfig) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'migrationhub-config';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["describeHomeRegionControls"] as const;
  
  async createHomeRegionControl(...args: any): Promise<any> {
  // undefined
    return this.client.createHomeRegionControl(...args).promise()
  }

  async describeHomeRegionControls(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeHomeRegionControls(...args).promise()
  }

  async getHomeRegion(...args: any): Promise<any> {
  // undefined
    return this.client.getHomeRegion(...args).promise()
  }
  
  static fromClient(client: AWSMigrationHubConfig): ClientType {
    return new MigrationHubConfig(client) as any;
  }
  
  static client(options?: AWSMigrationHubConfig.Types.ClientConfiguration): ClientType {
    return new MigrationHubConfig(new AWSMigrationHubConfig(options)) as any;
  }
}  
