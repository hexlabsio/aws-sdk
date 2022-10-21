import { Request, WAFV2 as AWSWAFV2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWAFV2> = AWSWAFV2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWAFV2> = AWSWAFV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWAFV2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWAFV2, Extras> = AWSWAFV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWAFV2> = AWSWAFV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class WAFV2 {
  private constructor(private readonly client: AWSWAFV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'wafv2' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = [] as const;
  
  associateWebACL: (params: RawParamsFrom<'associateWebACL'>) => Promise<ReturnTypeFrom<'associateWebACL'>>  = async params => {
  // undefined
    return this.client.associateWebACL(params as any).promise();
  }

  checkCapacity: (params: RawParamsFrom<'checkCapacity'>) => Promise<ReturnTypeFrom<'checkCapacity'>>  = async params => {
  // undefined
    return this.client.checkCapacity(params as any).promise();
  }

  createIPSet: (params: RawParamsFrom<'createIPSet'>) => Promise<ReturnTypeFrom<'createIPSet'>>  = async params => {
  // undefined
    return this.client.createIPSet(params as any).promise();
  }

  createRegexPatternSet: (params: RawParamsFrom<'createRegexPatternSet'>) => Promise<ReturnTypeFrom<'createRegexPatternSet'>>  = async params => {
  // undefined
    return this.client.createRegexPatternSet(params as any).promise();
  }

  createRuleGroup: (params: RawParamsFrom<'createRuleGroup'>) => Promise<ReturnTypeFrom<'createRuleGroup'>>  = async params => {
  // undefined
    return this.client.createRuleGroup(params as any).promise();
  }

  createWebACL: (params: RawParamsFrom<'createWebACL'>) => Promise<ReturnTypeFrom<'createWebACL'>>  = async params => {
  // undefined
    return this.client.createWebACL(params as any).promise();
  }

  deleteFirewallManagerRuleGroups: (params: RawParamsFrom<'deleteFirewallManagerRuleGroups'>) => Promise<ReturnTypeFrom<'deleteFirewallManagerRuleGroups'>>  = async params => {
  // undefined
    return this.client.deleteFirewallManagerRuleGroups(params as any).promise();
  }

  deleteIPSet: (params: RawParamsFrom<'deleteIPSet'>) => Promise<ReturnTypeFrom<'deleteIPSet'>>  = async params => {
  // undefined
    return this.client.deleteIPSet(params as any).promise();
  }

  deleteLoggingConfiguration: (params: RawParamsFrom<'deleteLoggingConfiguration'>) => Promise<ReturnTypeFrom<'deleteLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteLoggingConfiguration(params as any).promise();
  }

  deletePermissionPolicy: (params: RawParamsFrom<'deletePermissionPolicy'>) => Promise<ReturnTypeFrom<'deletePermissionPolicy'>>  = async params => {
  // undefined
    return this.client.deletePermissionPolicy(params as any).promise();
  }

  deleteRegexPatternSet: (params: RawParamsFrom<'deleteRegexPatternSet'>) => Promise<ReturnTypeFrom<'deleteRegexPatternSet'>>  = async params => {
  // undefined
    return this.client.deleteRegexPatternSet(params as any).promise();
  }

  deleteRuleGroup: (params: RawParamsFrom<'deleteRuleGroup'>) => Promise<ReturnTypeFrom<'deleteRuleGroup'>>  = async params => {
  // undefined
    return this.client.deleteRuleGroup(params as any).promise();
  }

  deleteWebACL: (params: RawParamsFrom<'deleteWebACL'>) => Promise<ReturnTypeFrom<'deleteWebACL'>>  = async params => {
  // undefined
    return this.client.deleteWebACL(params as any).promise();
  }

  describeManagedRuleGroup: (params: RawParamsFrom<'describeManagedRuleGroup'>) => Promise<ReturnTypeFrom<'describeManagedRuleGroup'>>  = async params => {
  // undefined
    return this.client.describeManagedRuleGroup(params as any).promise();
  }

  disassociateWebACL: (params: RawParamsFrom<'disassociateWebACL'>) => Promise<ReturnTypeFrom<'disassociateWebACL'>>  = async params => {
  // undefined
    return this.client.disassociateWebACL(params as any).promise();
  }

  generateMobileSdkReleaseUrl: (params: RawParamsFrom<'generateMobileSdkReleaseUrl'>) => Promise<ReturnTypeFrom<'generateMobileSdkReleaseUrl'>>  = async params => {
  // undefined
    return this.client.generateMobileSdkReleaseUrl(params as any).promise();
  }

  getIPSet: (params: RawParamsFrom<'getIPSet'>) => Promise<ReturnTypeFrom<'getIPSet'>>  = async params => {
  // undefined
    return this.client.getIPSet(params as any).promise();
  }

  getLoggingConfiguration: (params: RawParamsFrom<'getLoggingConfiguration'>) => Promise<ReturnTypeFrom<'getLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.getLoggingConfiguration(params as any).promise();
  }

  getManagedRuleSet: (params: RawParamsFrom<'getManagedRuleSet'>) => Promise<ReturnTypeFrom<'getManagedRuleSet'>>  = async params => {
  // undefined
    return this.client.getManagedRuleSet(params as any).promise();
  }

  getMobileSdkRelease: (params: RawParamsFrom<'getMobileSdkRelease'>) => Promise<ReturnTypeFrom<'getMobileSdkRelease'>>  = async params => {
  // undefined
    return this.client.getMobileSdkRelease(params as any).promise();
  }

  getPermissionPolicy: (params: RawParamsFrom<'getPermissionPolicy'>) => Promise<ReturnTypeFrom<'getPermissionPolicy'>>  = async params => {
  // undefined
    return this.client.getPermissionPolicy(params as any).promise();
  }

  getRateBasedStatementManagedKeys: (params: RawParamsFrom<'getRateBasedStatementManagedKeys'>) => Promise<ReturnTypeFrom<'getRateBasedStatementManagedKeys'>>  = async params => {
  // undefined
    return this.client.getRateBasedStatementManagedKeys(params as any).promise();
  }

  getRegexPatternSet: (params: RawParamsFrom<'getRegexPatternSet'>) => Promise<ReturnTypeFrom<'getRegexPatternSet'>>  = async params => {
  // undefined
    return this.client.getRegexPatternSet(params as any).promise();
  }

  getRuleGroup: (params: RawParamsFrom<'getRuleGroup'>) => Promise<ReturnTypeFrom<'getRuleGroup'>>  = async params => {
  // undefined
    return this.client.getRuleGroup(params as any).promise();
  }

  getSampledRequests: (params: RawParamsFrom<'getSampledRequests'>) => Promise<ReturnTypeFrom<'getSampledRequests'>>  = async params => {
  // undefined
    return this.client.getSampledRequests(params as any).promise();
  }

  getWebACL: (params: RawParamsFrom<'getWebACL'>) => Promise<ReturnTypeFrom<'getWebACL'>>  = async params => {
  // undefined
    return this.client.getWebACL(params as any).promise();
  }

  getWebACLForResource: (params: RawParamsFrom<'getWebACLForResource'>) => Promise<ReturnTypeFrom<'getWebACLForResource'>>  = async params => {
  // undefined
    return this.client.getWebACLForResource(params as any).promise();
  }

  listAvailableManagedRuleGroupVersions: (params: RawParamsFrom<'listAvailableManagedRuleGroupVersions'>) => Promise<ReturnTypeFrom<'listAvailableManagedRuleGroupVersions'>>  = async params => {
  // undefined
    return this.client.listAvailableManagedRuleGroupVersions(params as any).promise();
  }

  listAvailableManagedRuleGroups: (params: RawParamsFrom<'listAvailableManagedRuleGroups'>) => Promise<ReturnTypeFrom<'listAvailableManagedRuleGroups'>>  = async params => {
  // undefined
    return this.client.listAvailableManagedRuleGroups(params as any).promise();
  }

  listIPSets: (params: RawParamsFrom<'listIPSets'>) => Promise<ReturnTypeFrom<'listIPSets'>>  = async params => {
  // undefined
    return this.client.listIPSets(params as any).promise();
  }

  listLoggingConfigurations: (params: RawParamsFrom<'listLoggingConfigurations'>) => Promise<ReturnTypeFrom<'listLoggingConfigurations'>>  = async params => {
  // undefined
    return this.client.listLoggingConfigurations(params as any).promise();
  }

  listManagedRuleSets: (params: RawParamsFrom<'listManagedRuleSets'>) => Promise<ReturnTypeFrom<'listManagedRuleSets'>>  = async params => {
  // undefined
    return this.client.listManagedRuleSets(params as any).promise();
  }

  listMobileSdkReleases: (params: RawParamsFrom<'listMobileSdkReleases'>) => Promise<ReturnTypeFrom<'listMobileSdkReleases'>>  = async params => {
  // undefined
    return this.client.listMobileSdkReleases(params as any).promise();
  }

  listRegexPatternSets: (params: RawParamsFrom<'listRegexPatternSets'>) => Promise<ReturnTypeFrom<'listRegexPatternSets'>>  = async params => {
  // undefined
    return this.client.listRegexPatternSets(params as any).promise();
  }

  listResourcesForWebACL: (params: RawParamsFrom<'listResourcesForWebACL'>) => Promise<ReturnTypeFrom<'listResourcesForWebACL'>>  = async params => {
  // undefined
    return this.client.listResourcesForWebACL(params as any).promise();
  }

  listRuleGroups: (params: RawParamsFrom<'listRuleGroups'>) => Promise<ReturnTypeFrom<'listRuleGroups'>>  = async params => {
  // undefined
    return this.client.listRuleGroups(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listWebACLs: (params: RawParamsFrom<'listWebACLs'>) => Promise<ReturnTypeFrom<'listWebACLs'>>  = async params => {
  // undefined
    return this.client.listWebACLs(params as any).promise();
  }

  putLoggingConfiguration: (params: RawParamsFrom<'putLoggingConfiguration'>) => Promise<ReturnTypeFrom<'putLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.putLoggingConfiguration(params as any).promise();
  }

  putManagedRuleSetVersions: (params: RawParamsFrom<'putManagedRuleSetVersions'>) => Promise<ReturnTypeFrom<'putManagedRuleSetVersions'>>  = async params => {
  // undefined
    return this.client.putManagedRuleSetVersions(params as any).promise();
  }

  putPermissionPolicy: (params: RawParamsFrom<'putPermissionPolicy'>) => Promise<ReturnTypeFrom<'putPermissionPolicy'>>  = async params => {
  // undefined
    return this.client.putPermissionPolicy(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateIPSet: (params: RawParamsFrom<'updateIPSet'>) => Promise<ReturnTypeFrom<'updateIPSet'>>  = async params => {
  // undefined
    return this.client.updateIPSet(params as any).promise();
  }

  updateManagedRuleSetVersionExpiryDate: (params: RawParamsFrom<'updateManagedRuleSetVersionExpiryDate'>) => Promise<ReturnTypeFrom<'updateManagedRuleSetVersionExpiryDate'>>  = async params => {
  // undefined
    return this.client.updateManagedRuleSetVersionExpiryDate(params as any).promise();
  }

  updateRegexPatternSet: (params: RawParamsFrom<'updateRegexPatternSet'>) => Promise<ReturnTypeFrom<'updateRegexPatternSet'>>  = async params => {
  // undefined
    return this.client.updateRegexPatternSet(params as any).promise();
  }

  updateRuleGroup: (params: RawParamsFrom<'updateRuleGroup'>) => Promise<ReturnTypeFrom<'updateRuleGroup'>>  = async params => {
  // undefined
    return this.client.updateRuleGroup(params as any).promise();
  }

  updateWebACL: (params: RawParamsFrom<'updateWebACL'>) => Promise<ReturnTypeFrom<'updateWebACL'>>  = async params => {
  // undefined
    return this.client.updateWebACL(params as any).promise();
  }
  
  static fromClient(client: AWSWAFV2): WAFV2 {
    return new WAFV2(client) as any;
  }
  
  static client(options?: AWSWAFV2.Types.ClientConfiguration): WAFV2 {
    return new WAFV2(new AWSWAFV2(options)) as any;
  }
}  
