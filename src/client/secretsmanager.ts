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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'secretsmanager';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listSecrets"];
    
  cancelRotateSecret: FunctionTypeFrom<'cancelRotateSecret'>;

  createSecret: FunctionTypeFrom<'createSecret'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteSecret: FunctionTypeFrom<'deleteSecret'>;

  describeSecret: FunctionTypeFrom<'describeSecret'>;

  getRandomPassword: FunctionTypeFrom<'getRandomPassword'>;

  getResourcePolicy: FunctionTypeFrom<'getResourcePolicy'>;

  getSecretValue: FunctionTypeFrom<'getSecretValue'>;

  listSecretVersionIds: FunctionTypeFrom<'listSecretVersionIds'>;

  listSecrets: FunctionTypeFrom<'listSecrets'>;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  putSecretValue: FunctionTypeFrom<'putSecretValue'>;

  removeRegionsFromReplication: FunctionTypeFrom<'removeRegionsFromReplication'>;

  replicateSecretToRegions: FunctionTypeFrom<'replicateSecretToRegions'>;

  restoreSecret: FunctionTypeFrom<'restoreSecret'>;

  rotateSecret: FunctionTypeFrom<'rotateSecret'>;

  stopReplicationToReplica: FunctionTypeFrom<'stopReplicationToReplica'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateSecret: FunctionTypeFrom<'updateSecret'>;

  updateSecretVersionStage: FunctionTypeFrom<'updateSecretVersionStage'>;

  validateResourcePolicy: FunctionTypeFrom<'validateResourcePolicy'>
}
 
export class SecretsManager implements ClientType {
  private constructor(private readonly client: AWSSecretsManager) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'secretsmanager';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listSecrets"] as const;
  
  async cancelRotateSecret(...args: any): Promise<any> {
  // undefined
    return this.client.cancelRotateSecret(...args).promise()
  }

  async createSecret(...args: any): Promise<any> {
  // undefined
    return this.client.createSecret(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteSecret(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSecret(...args).promise()
  }

  async describeSecret(...args: any): Promise<any> {
  // undefined
    return this.client.describeSecret(...args).promise()
  }

  async getRandomPassword(...args: any): Promise<any> {
  // undefined
    return this.client.getRandomPassword(...args).promise()
  }

  async getResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResourcePolicy(...args).promise()
  }

  async getSecretValue(...args: any): Promise<any> {
  // undefined
    return this.client.getSecretValue(...args).promise()
  }

  async listSecretVersionIds(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSecretVersionIds(...args).promise()
  }

  async listSecrets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSecrets(...args).promise()
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async putSecretValue(...args: any): Promise<any> {
  // undefined
    return this.client.putSecretValue(...args).promise()
  }

  async removeRegionsFromReplication(...args: any): Promise<any> {
  // undefined
    return this.client.removeRegionsFromReplication(...args).promise()
  }

  async replicateSecretToRegions(...args: any): Promise<any> {
  // undefined
    return this.client.replicateSecretToRegions(...args).promise()
  }

  async restoreSecret(...args: any): Promise<any> {
  // undefined
    return this.client.restoreSecret(...args).promise()
  }

  async rotateSecret(...args: any): Promise<any> {
  // undefined
    return this.client.rotateSecret(...args).promise()
  }

  async stopReplicationToReplica(...args: any): Promise<any> {
  // undefined
    return this.client.stopReplicationToReplica(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateSecret(...args: any): Promise<any> {
  // undefined
    return this.client.updateSecret(...args).promise()
  }

  async updateSecretVersionStage(...args: any): Promise<any> {
  // undefined
    return this.client.updateSecretVersionStage(...args).promise()
  }

  async validateResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.validateResourcePolicy(...args).promise()
  }
  
  static fromClient(client: AWSSecretsManager): ClientType {
    return new SecretsManager(client) as any;
  }
  
  static client(options?: AWSSecretsManager.Types.ClientConfiguration): ClientType {
    return new SecretsManager(new AWSSecretsManager(options)) as any;
  }
}  
