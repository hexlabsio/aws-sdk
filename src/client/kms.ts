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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKMS> = AWSKMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KMS {
  private constructor(private readonly client: AWSKMS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kms' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["describeCustomKeyStores","listAliases","listKeys"] as const;
  
  cancelKeyDeletion: (params: RawParamsFrom<'cancelKeyDeletion'>) => Promise<ReturnTypeFrom<'cancelKeyDeletion'>>  = async params => {
  // undefined
    return this.client.cancelKeyDeletion(params as any).promise();
  }

  connectCustomKeyStore: (params: RawParamsFrom<'connectCustomKeyStore'>) => Promise<ReturnTypeFrom<'connectCustomKeyStore'>>  = async params => {
  // undefined
    return this.client.connectCustomKeyStore(params as any).promise();
  }

  createAlias: (params: RawParamsFrom<'createAlias'>) => Promise<ReturnTypeFrom<'createAlias'>>  = async params => {
  // undefined
    return this.client.createAlias(params as any).promise();
  }

  createCustomKeyStore: (params: RawParamsFrom<'createCustomKeyStore'>) => Promise<ReturnTypeFrom<'createCustomKeyStore'>>  = async params => {
  // undefined
    return this.client.createCustomKeyStore(params as any).promise();
  }

  createGrant: (params: RawParamsFrom<'createGrant'>) => Promise<ReturnTypeFrom<'createGrant'>>  = async params => {
  // undefined
    return this.client.createGrant(params as any).promise();
  }

  createKey: (params: RawParamsFrom<'createKey'>) => Promise<ReturnTypeFrom<'createKey'>>  = async params => {
  // undefined
    return this.client.createKey(params as any).promise();
  }

  decrypt: (params: RawParamsFrom<'decrypt'>) => Promise<ReturnTypeFrom<'decrypt'>>  = async params => {
  // undefined
    return this.client.decrypt(params as any).promise();
  }

  deleteAlias: (params: RawParamsFrom<'deleteAlias'>) => Promise<ReturnTypeFrom<'deleteAlias'>>  = async params => {
  // undefined
    return this.client.deleteAlias(params as any).promise();
  }

  deleteCustomKeyStore: (params: RawParamsFrom<'deleteCustomKeyStore'>) => Promise<ReturnTypeFrom<'deleteCustomKeyStore'>>  = async params => {
  // undefined
    return this.client.deleteCustomKeyStore(params as any).promise();
  }

  deleteImportedKeyMaterial: (params: RawParamsFrom<'deleteImportedKeyMaterial'>) => Promise<ReturnTypeFrom<'deleteImportedKeyMaterial'>>  = async params => {
  // undefined
    return this.client.deleteImportedKeyMaterial(params as any).promise();
  }

  async describeCustomKeyStores(params: { [K in keyof ParamsFrom<'describeCustomKeyStores', { next?: string, limit?: number }>]: ParamsFrom<'describeCustomKeyStores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCustomKeyStores'>]-?: ReturnTypeFrom<'describeCustomKeyStores'>[K]}['CustomKeyStores'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"CustomKeyStores"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeCustomKeyStores({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'describeCustomKeyStores' })).toString('base64');
    const member = (Array.isArray(result.CustomKeyStores ?? []) ? (result.CustomKeyStores ?? []) : [result.CustomKeyStores]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeKey: (params: RawParamsFrom<'describeKey'>) => Promise<ReturnTypeFrom<'describeKey'>>  = async params => {
  // undefined
    return this.client.describeKey(params as any).promise();
  }

  disableKey: (params: RawParamsFrom<'disableKey'>) => Promise<ReturnTypeFrom<'disableKey'>>  = async params => {
  // undefined
    return this.client.disableKey(params as any).promise();
  }

  disableKeyRotation: (params: RawParamsFrom<'disableKeyRotation'>) => Promise<ReturnTypeFrom<'disableKeyRotation'>>  = async params => {
  // undefined
    return this.client.disableKeyRotation(params as any).promise();
  }

  disconnectCustomKeyStore: (params: RawParamsFrom<'disconnectCustomKeyStore'>) => Promise<ReturnTypeFrom<'disconnectCustomKeyStore'>>  = async params => {
  // undefined
    return this.client.disconnectCustomKeyStore(params as any).promise();
  }

  enableKey: (params: RawParamsFrom<'enableKey'>) => Promise<ReturnTypeFrom<'enableKey'>>  = async params => {
  // undefined
    return this.client.enableKey(params as any).promise();
  }

  enableKeyRotation: (params: RawParamsFrom<'enableKeyRotation'>) => Promise<ReturnTypeFrom<'enableKeyRotation'>>  = async params => {
  // undefined
    return this.client.enableKeyRotation(params as any).promise();
  }

  encrypt: (params: RawParamsFrom<'encrypt'>) => Promise<ReturnTypeFrom<'encrypt'>>  = async params => {
  // undefined
    return this.client.encrypt(params as any).promise();
  }

  generateDataKey: (params: RawParamsFrom<'generateDataKey'>) => Promise<ReturnTypeFrom<'generateDataKey'>>  = async params => {
  // undefined
    return this.client.generateDataKey(params as any).promise();
  }

  generateDataKeyPair: (params: RawParamsFrom<'generateDataKeyPair'>) => Promise<ReturnTypeFrom<'generateDataKeyPair'>>  = async params => {
  // undefined
    return this.client.generateDataKeyPair(params as any).promise();
  }

  generateDataKeyPairWithoutPlaintext: (params: RawParamsFrom<'generateDataKeyPairWithoutPlaintext'>) => Promise<ReturnTypeFrom<'generateDataKeyPairWithoutPlaintext'>>  = async params => {
  // undefined
    return this.client.generateDataKeyPairWithoutPlaintext(params as any).promise();
  }

  generateDataKeyWithoutPlaintext: (params: RawParamsFrom<'generateDataKeyWithoutPlaintext'>) => Promise<ReturnTypeFrom<'generateDataKeyWithoutPlaintext'>>  = async params => {
  // undefined
    return this.client.generateDataKeyWithoutPlaintext(params as any).promise();
  }

  generateMac: (params: RawParamsFrom<'generateMac'>) => Promise<ReturnTypeFrom<'generateMac'>>  = async params => {
  // undefined
    return this.client.generateMac(params as any).promise();
  }

  generateRandom: (params: RawParamsFrom<'generateRandom'>) => Promise<ReturnTypeFrom<'generateRandom'>>  = async params => {
  // undefined
    return this.client.generateRandom(params as any).promise();
  }

  getKeyPolicy: (params: RawParamsFrom<'getKeyPolicy'>) => Promise<ReturnTypeFrom<'getKeyPolicy'>>  = async params => {
  // undefined
    return this.client.getKeyPolicy(params as any).promise();
  }

  getKeyRotationStatus: (params: RawParamsFrom<'getKeyRotationStatus'>) => Promise<ReturnTypeFrom<'getKeyRotationStatus'>>  = async params => {
  // undefined
    return this.client.getKeyRotationStatus(params as any).promise();
  }

  getParametersForImport: (params: RawParamsFrom<'getParametersForImport'>) => Promise<ReturnTypeFrom<'getParametersForImport'>>  = async params => {
  // undefined
    return this.client.getParametersForImport(params as any).promise();
  }

  getPublicKey: (params: RawParamsFrom<'getPublicKey'>) => Promise<ReturnTypeFrom<'getPublicKey'>>  = async params => {
  // undefined
    return this.client.getPublicKey(params as any).promise();
  }

  importKeyMaterial: (params: RawParamsFrom<'importKeyMaterial'>) => Promise<ReturnTypeFrom<'importKeyMaterial'>>  = async params => {
  // undefined
    return this.client.importKeyMaterial(params as any).promise();
  }

  async listAliases(params: { [K in keyof ParamsFrom<'listAliases', { next?: string, limit?: number }>]: ParamsFrom<'listAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAliases'>]-?: ReturnTypeFrom<'listAliases'>[K]}['Aliases'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Aliases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listAliases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listAliases' })).toString('base64');
    const member = (Array.isArray(result.Aliases ?? []) ? (result.Aliases ?? []) : [result.Aliases]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGrants(params: { [K in keyof ParamsFrom<'listGrants', { next?: string, limit?: number }>]: ParamsFrom<'listGrants', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGrants'>]-?: ReturnTypeFrom<'listGrants'>[K]}['Grants'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Grants"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGrants({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listGrants' })).toString('base64');
    const member = (Array.isArray(result.Grants ?? []) ? (result.Grants ?? []) : [result.Grants]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listKeyPolicies(params: { [K in keyof ParamsFrom<'listKeyPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listKeyPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listKeyPolicies'>]-?: ReturnTypeFrom<'listKeyPolicies'>[K]}['PolicyNames'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"PolicyNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listKeyPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listKeyPolicies' })).toString('base64');
    const member = (Array.isArray(result.PolicyNames ?? []) ? (result.PolicyNames ?? []) : [result.PolicyNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listKeys(params: { [K in keyof ParamsFrom<'listKeys', { next?: string, limit?: number }>]: ParamsFrom<'listKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listKeys'>]-?: ReturnTypeFrom<'listKeys'>[K]}['Keys'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Keys"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listKeys({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listKeys' })).toString('base64');
    const member = (Array.isArray(result.Keys ?? []) ? (result.Keys ?? []) : [result.Keys]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceTags(params: { [K in keyof ParamsFrom<'listResourceTags', { next?: string, limit?: number }>]: ParamsFrom<'listResourceTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourceTags'>]-?: ReturnTypeFrom<'listResourceTags'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listResourceTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listResourceTags' })).toString('base64');
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRetirableGrants(params: { [K in keyof ParamsFrom<'listRetirableGrants', { next?: string, limit?: number }>]: ParamsFrom<'listRetirableGrants', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRetirableGrants'>]-?: ReturnTypeFrom<'listRetirableGrants'>[K]}['Grants'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","moreResults":"Truncated","outputToken":"NextMarker","resultKey":"Grants"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listRetirableGrants({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listRetirableGrants' })).toString('base64');
    const member = (Array.isArray(result.Grants ?? []) ? (result.Grants ?? []) : [result.Grants]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putKeyPolicy: (params: RawParamsFrom<'putKeyPolicy'>) => Promise<ReturnTypeFrom<'putKeyPolicy'>>  = async params => {
  // undefined
    return this.client.putKeyPolicy(params as any).promise();
  }

  reEncrypt: (params: RawParamsFrom<'reEncrypt'>) => Promise<ReturnTypeFrom<'reEncrypt'>>  = async params => {
  // undefined
    return this.client.reEncrypt(params as any).promise();
  }

  replicateKey: (params: RawParamsFrom<'replicateKey'>) => Promise<ReturnTypeFrom<'replicateKey'>>  = async params => {
  // undefined
    return this.client.replicateKey(params as any).promise();
  }

  retireGrant: (params: RawParamsFrom<'retireGrant'>) => Promise<ReturnTypeFrom<'retireGrant'>>  = async params => {
  // undefined
    return this.client.retireGrant(params as any).promise();
  }

  revokeGrant: (params: RawParamsFrom<'revokeGrant'>) => Promise<ReturnTypeFrom<'revokeGrant'>>  = async params => {
  // undefined
    return this.client.revokeGrant(params as any).promise();
  }

  scheduleKeyDeletion: (params: RawParamsFrom<'scheduleKeyDeletion'>) => Promise<ReturnTypeFrom<'scheduleKeyDeletion'>>  = async params => {
  // undefined
    return this.client.scheduleKeyDeletion(params as any).promise();
  }

  sign: (params: RawParamsFrom<'sign'>) => Promise<ReturnTypeFrom<'sign'>>  = async params => {
  // undefined
    return this.client.sign(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAlias: (params: RawParamsFrom<'updateAlias'>) => Promise<ReturnTypeFrom<'updateAlias'>>  = async params => {
  // undefined
    return this.client.updateAlias(params as any).promise();
  }

  updateCustomKeyStore: (params: RawParamsFrom<'updateCustomKeyStore'>) => Promise<ReturnTypeFrom<'updateCustomKeyStore'>>  = async params => {
  // undefined
    return this.client.updateCustomKeyStore(params as any).promise();
  }

  updateKeyDescription: (params: RawParamsFrom<'updateKeyDescription'>) => Promise<ReturnTypeFrom<'updateKeyDescription'>>  = async params => {
  // undefined
    return this.client.updateKeyDescription(params as any).promise();
  }

  updatePrimaryRegion: (params: RawParamsFrom<'updatePrimaryRegion'>) => Promise<ReturnTypeFrom<'updatePrimaryRegion'>>  = async params => {
  // undefined
    return this.client.updatePrimaryRegion(params as any).promise();
  }

  verify: (params: RawParamsFrom<'verify'>) => Promise<ReturnTypeFrom<'verify'>>  = async params => {
  // undefined
    return this.client.verify(params as any).promise();
  }

  verifyMac: (params: RawParamsFrom<'verifyMac'>) => Promise<ReturnTypeFrom<'verifyMac'>>  = async params => {
  // undefined
    return this.client.verifyMac(params as any).promise();
  }
  
  static fromClient(client: AWSKMS): KMS {
    return new KMS(client) as any;
  }
  
  static client(options?: AWSKMS.Types.ClientConfiguration): KMS {
    return new KMS(new AWSKMS(options)) as any;
  }
}  
