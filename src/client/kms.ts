import { Request, KMS as AWSKMS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKMS> = AWSKMS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKMS> = AWSKMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKMS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKMS, Extras> = AWSKMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kms';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["describeCustomKeyStores","listAliases","listKeys"];
    
  cancelKeyDeletion: FunctionTypeFrom<'cancelKeyDeletion'>;

  connectCustomKeyStore: FunctionTypeFrom<'connectCustomKeyStore'>;

  createAlias: FunctionTypeFrom<'createAlias'>;

  createCustomKeyStore: FunctionTypeFrom<'createCustomKeyStore'>;

  createGrant: FunctionTypeFrom<'createGrant'>;

  createKey: FunctionTypeFrom<'createKey'>;

  decrypt: FunctionTypeFrom<'decrypt'>;

  deleteAlias: FunctionTypeFrom<'deleteAlias'>;

  deleteCustomKeyStore: FunctionTypeFrom<'deleteCustomKeyStore'>;

  deleteImportedKeyMaterial: FunctionTypeFrom<'deleteImportedKeyMaterial'>;

  describeCustomKeyStores(params: { [K in keyof Omit<ParamsFrom<'describeCustomKeyStores', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'describeCustomKeyStores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCustomKeyStores'>]-?: ReturnTypeFrom<'describeCustomKeyStores'>[K]}['CustomKeyStores'] }>
  describeCustomKeyStores(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCustomKeyStores'>]-?: ReturnTypeFrom<'describeCustomKeyStores'>[K]}['CustomKeyStores'] }>;

  describeKey: FunctionTypeFrom<'describeKey'>;

  disableKey: FunctionTypeFrom<'disableKey'>;

  disableKeyRotation: FunctionTypeFrom<'disableKeyRotation'>;

  disconnectCustomKeyStore: FunctionTypeFrom<'disconnectCustomKeyStore'>;

  enableKey: FunctionTypeFrom<'enableKey'>;

  enableKeyRotation: FunctionTypeFrom<'enableKeyRotation'>;

  encrypt: FunctionTypeFrom<'encrypt'>;

  generateDataKey: FunctionTypeFrom<'generateDataKey'>;

  generateDataKeyPair: FunctionTypeFrom<'generateDataKeyPair'>;

  generateDataKeyPairWithoutPlaintext: FunctionTypeFrom<'generateDataKeyPairWithoutPlaintext'>;

  generateDataKeyWithoutPlaintext: FunctionTypeFrom<'generateDataKeyWithoutPlaintext'>;

  generateMac: FunctionTypeFrom<'generateMac'>;

  generateRandom: FunctionTypeFrom<'generateRandom'>;

  getKeyPolicy: FunctionTypeFrom<'getKeyPolicy'>;

  getKeyRotationStatus: FunctionTypeFrom<'getKeyRotationStatus'>;

  getParametersForImport: FunctionTypeFrom<'getParametersForImport'>;

  getPublicKey: FunctionTypeFrom<'getPublicKey'>;

  importKeyMaterial: FunctionTypeFrom<'importKeyMaterial'>;

  listAliases(params: { [K in keyof Omit<ParamsFrom<'listAliases', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAliases'>]-?: ReturnTypeFrom<'listAliases'>[K]}['Aliases'] }>
  listAliases(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAliases'>]-?: ReturnTypeFrom<'listAliases'>[K]}['Aliases'] }>;

  listGrants(params: { [K in keyof Omit<ParamsFrom<'listGrants', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listGrants', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGrants'>]-?: ReturnTypeFrom<'listGrants'>[K]}['Grants'] }>
  ;

  listKeyPolicies(params: { [K in keyof Omit<ParamsFrom<'listKeyPolicies', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listKeyPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listKeyPolicies'>]-?: ReturnTypeFrom<'listKeyPolicies'>[K]}['PolicyNames'] }>
  ;

  listKeys(params: { [K in keyof Omit<ParamsFrom<'listKeys', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listKeys'>]-?: ReturnTypeFrom<'listKeys'>[K]}['Keys'] }>
  listKeys(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listKeys'>]-?: ReturnTypeFrom<'listKeys'>[K]}['Keys'] }>;

  listResourceTags(params: { [K in keyof Omit<ParamsFrom<'listResourceTags', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listResourceTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceTags'>]-?: ReturnTypeFrom<'listResourceTags'>[K]}['Tags'] }>
  ;

  listRetirableGrants(params: { [K in keyof Omit<ParamsFrom<'listRetirableGrants', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listRetirableGrants', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRetirableGrants'>]-?: ReturnTypeFrom<'listRetirableGrants'>[K]}['Grants'] }>
  ;

  putKeyPolicy: FunctionTypeFrom<'putKeyPolicy'>;

  reEncrypt: FunctionTypeFrom<'reEncrypt'>;

  replicateKey: FunctionTypeFrom<'replicateKey'>;

  retireGrant: FunctionTypeFrom<'retireGrant'>;

  revokeGrant: FunctionTypeFrom<'revokeGrant'>;

  scheduleKeyDeletion: FunctionTypeFrom<'scheduleKeyDeletion'>;

  sign: FunctionTypeFrom<'sign'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAlias: FunctionTypeFrom<'updateAlias'>;

  updateCustomKeyStore: FunctionTypeFrom<'updateCustomKeyStore'>;

  updateKeyDescription: FunctionTypeFrom<'updateKeyDescription'>;

  updatePrimaryRegion: FunctionTypeFrom<'updatePrimaryRegion'>;

  verify: FunctionTypeFrom<'verify'>;

  verifyMac: FunctionTypeFrom<'verifyMac'>
}
 
export class KMS implements ClientType {
  private constructor(private readonly client: AWSKMS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kms';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["describeCustomKeyStores","listAliases","listKeys"] as const;
  
  async cancelKeyDeletion(...args: any): Promise<any> {
  // undefined
    return this.client.cancelKeyDeletion(...args).promise()
  }

  async connectCustomKeyStore(...args: any): Promise<any> {
  // undefined
    return this.client.connectCustomKeyStore(...args).promise()
  }

  async createAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createAlias(...args).promise()
  }

  async createCustomKeyStore(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomKeyStore(...args).promise()
  }

  async createGrant(...args: any): Promise<any> {
  // undefined
    return this.client.createGrant(...args).promise()
  }

  async createKey(...args: any): Promise<any> {
  // undefined
    return this.client.createKey(...args).promise()
  }

  async decrypt(...args: any): Promise<any> {
  // undefined
    return this.client.decrypt(...args).promise()
  }

  async deleteAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlias(...args).promise()
  }

  async deleteCustomKeyStore(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomKeyStore(...args).promise()
  }

  async deleteImportedKeyMaterial(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImportedKeyMaterial(...args).promise()
  }

  async describeCustomKeyStores(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"CustomKeyStores"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeCustomKeyStores(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.CustomKeyStores ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeKey(...args: any): Promise<any> {
  // undefined
    return this.client.describeKey(...args).promise()
  }

  async disableKey(...args: any): Promise<any> {
  // undefined
    return this.client.disableKey(...args).promise()
  }

  async disableKeyRotation(...args: any): Promise<any> {
  // undefined
    return this.client.disableKeyRotation(...args).promise()
  }

  async disconnectCustomKeyStore(...args: any): Promise<any> {
  // undefined
    return this.client.disconnectCustomKeyStore(...args).promise()
  }

  async enableKey(...args: any): Promise<any> {
  // undefined
    return this.client.enableKey(...args).promise()
  }

  async enableKeyRotation(...args: any): Promise<any> {
  // undefined
    return this.client.enableKeyRotation(...args).promise()
  }

  async encrypt(...args: any): Promise<any> {
  // undefined
    return this.client.encrypt(...args).promise()
  }

  async generateDataKey(...args: any): Promise<any> {
  // undefined
    return this.client.generateDataKey(...args).promise()
  }

  async generateDataKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.generateDataKeyPair(...args).promise()
  }

  async generateDataKeyPairWithoutPlaintext(...args: any): Promise<any> {
  // undefined
    return this.client.generateDataKeyPairWithoutPlaintext(...args).promise()
  }

  async generateDataKeyWithoutPlaintext(...args: any): Promise<any> {
  // undefined
    return this.client.generateDataKeyWithoutPlaintext(...args).promise()
  }

  async generateMac(...args: any): Promise<any> {
  // undefined
    return this.client.generateMac(...args).promise()
  }

  async generateRandom(...args: any): Promise<any> {
  // undefined
    return this.client.generateRandom(...args).promise()
  }

  async getKeyPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getKeyPolicy(...args).promise()
  }

  async getKeyRotationStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getKeyRotationStatus(...args).promise()
  }

  async getParametersForImport(...args: any): Promise<any> {
  // undefined
    return this.client.getParametersForImport(...args).promise()
  }

  async getPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.getPublicKey(...args).promise()
  }

  async importKeyMaterial(...args: any): Promise<any> {
  // undefined
    return this.client.importKeyMaterial(...args).promise()
  }

  async listAliases(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Aliases"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listAliases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Aliases ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGrants(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Grants"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGrants(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Grants ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listKeyPolicies(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"PolicyNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listKeyPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.PolicyNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listKeys(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Keys"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listKeys(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Keys ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceTags(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listResourceTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRetirableGrants(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Grants"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listRetirableGrants(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Grants ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putKeyPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putKeyPolicy(...args).promise()
  }

  async reEncrypt(...args: any): Promise<any> {
  // undefined
    return this.client.reEncrypt(...args).promise()
  }

  async replicateKey(...args: any): Promise<any> {
  // undefined
    return this.client.replicateKey(...args).promise()
  }

  async retireGrant(...args: any): Promise<any> {
  // undefined
    return this.client.retireGrant(...args).promise()
  }

  async revokeGrant(...args: any): Promise<any> {
  // undefined
    return this.client.revokeGrant(...args).promise()
  }

  async scheduleKeyDeletion(...args: any): Promise<any> {
  // undefined
    return this.client.scheduleKeyDeletion(...args).promise()
  }

  async sign(...args: any): Promise<any> {
  // undefined
    return this.client.sign(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAlias(...args: any): Promise<any> {
  // undefined
    return this.client.updateAlias(...args).promise()
  }

  async updateCustomKeyStore(...args: any): Promise<any> {
  // undefined
    return this.client.updateCustomKeyStore(...args).promise()
  }

  async updateKeyDescription(...args: any): Promise<any> {
  // undefined
    return this.client.updateKeyDescription(...args).promise()
  }

  async updatePrimaryRegion(...args: any): Promise<any> {
  // undefined
    return this.client.updatePrimaryRegion(...args).promise()
  }

  async verify(...args: any): Promise<any> {
  // undefined
    return this.client.verify(...args).promise()
  }

  async verifyMac(...args: any): Promise<any> {
  // undefined
    return this.client.verifyMac(...args).promise()
  }
  
  static fromClient(client: AWSKMS): ClientType {
    return new KMS(client) as any;
  }
  
  static client(options?: AWSKMS.Types.ClientConfiguration): ClientType {
    return new KMS(new AWSKMS(options)) as any;
  }
}  
