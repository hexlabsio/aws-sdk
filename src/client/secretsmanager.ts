import { Request, SecretsManager as AWSSecretsManager } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSecretsManager> = AWSSecretsManager[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSecretsManager> = AWSSecretsManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSecretsManager[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSecretsManager, Extras> = AWSSecretsManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSecretsManager> = AWSSecretsManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SecretsManager {
  private constructor(private readonly client: AWSSecretsManager) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'secretsmanager' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listSecrets"] as const;
  
  cancelRotateSecret: (params: RawParamsFrom<'cancelRotateSecret'>) => Promise<ReturnTypeFrom<'cancelRotateSecret'>>  = async params => {
  // undefined
    return this.client.cancelRotateSecret(params as any).promise();
  }

  createSecret: (params: RawParamsFrom<'createSecret'>) => Promise<ReturnTypeFrom<'createSecret'>>  = async params => {
  // undefined
    return this.client.createSecret(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteSecret: (params: RawParamsFrom<'deleteSecret'>) => Promise<ReturnTypeFrom<'deleteSecret'>>  = async params => {
  // undefined
    return this.client.deleteSecret(params as any).promise();
  }

  describeSecret: (params: RawParamsFrom<'describeSecret'>) => Promise<ReturnTypeFrom<'describeSecret'>>  = async params => {
  // undefined
    return this.client.describeSecret(params as any).promise();
  }

  getRandomPassword: (params: RawParamsFrom<'getRandomPassword'>) => Promise<ReturnTypeFrom<'getRandomPassword'>>  = async params => {
  // undefined
    return this.client.getRandomPassword(params as any).promise();
  }

  getResourcePolicy: (params: RawParamsFrom<'getResourcePolicy'>) => Promise<ReturnTypeFrom<'getResourcePolicy'>>  = async params => {
  // undefined
    return this.client.getResourcePolicy(params as any).promise();
  }

  getSecretValue: (params: RawParamsFrom<'getSecretValue'>) => Promise<ReturnTypeFrom<'getSecretValue'>>  = async params => {
  // undefined
    return this.client.getSecretValue(params as any).promise();
  }

  listSecretVersionIds: (params: RawParamsFrom<'listSecretVersionIds'>) => Promise<ReturnTypeFrom<'listSecretVersionIds'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSecretVersionIds(params as any).promise();
  }

  listSecrets: (params: RawParamsFrom<'listSecrets'>) => Promise<ReturnTypeFrom<'listSecrets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSecrets(params as any).promise();
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  putSecretValue: (params: RawParamsFrom<'putSecretValue'>) => Promise<ReturnTypeFrom<'putSecretValue'>>  = async params => {
  // undefined
    return this.client.putSecretValue(params as any).promise();
  }

  removeRegionsFromReplication: (params: RawParamsFrom<'removeRegionsFromReplication'>) => Promise<ReturnTypeFrom<'removeRegionsFromReplication'>>  = async params => {
  // undefined
    return this.client.removeRegionsFromReplication(params as any).promise();
  }

  replicateSecretToRegions: (params: RawParamsFrom<'replicateSecretToRegions'>) => Promise<ReturnTypeFrom<'replicateSecretToRegions'>>  = async params => {
  // undefined
    return this.client.replicateSecretToRegions(params as any).promise();
  }

  restoreSecret: (params: RawParamsFrom<'restoreSecret'>) => Promise<ReturnTypeFrom<'restoreSecret'>>  = async params => {
  // undefined
    return this.client.restoreSecret(params as any).promise();
  }

  rotateSecret: (params: RawParamsFrom<'rotateSecret'>) => Promise<ReturnTypeFrom<'rotateSecret'>>  = async params => {
  // undefined
    return this.client.rotateSecret(params as any).promise();
  }

  stopReplicationToReplica: (params: RawParamsFrom<'stopReplicationToReplica'>) => Promise<ReturnTypeFrom<'stopReplicationToReplica'>>  = async params => {
  // undefined
    return this.client.stopReplicationToReplica(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateSecret: (params: RawParamsFrom<'updateSecret'>) => Promise<ReturnTypeFrom<'updateSecret'>>  = async params => {
  // undefined
    return this.client.updateSecret(params as any).promise();
  }

  updateSecretVersionStage: (params: RawParamsFrom<'updateSecretVersionStage'>) => Promise<ReturnTypeFrom<'updateSecretVersionStage'>>  = async params => {
  // undefined
    return this.client.updateSecretVersionStage(params as any).promise();
  }

  validateResourcePolicy: (params: RawParamsFrom<'validateResourcePolicy'>) => Promise<ReturnTypeFrom<'validateResourcePolicy'>>  = async params => {
  // undefined
    return this.client.validateResourcePolicy(params as any).promise();
  }
  
  static fromClient(client: AWSSecretsManager): SecretsManager {
    return new SecretsManager(client) as any;
  }
  
  static client(options?: AWSSecretsManager.Types.ClientConfiguration): SecretsManager {
    return new SecretsManager(new AWSSecretsManager(options)) as any;
  }
}  
