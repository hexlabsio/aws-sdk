import { Request, WAFRegional as AWSWAFRegional } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWAFRegional> = AWSWAFRegional[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWAFRegional> = AWSWAFRegional[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWAFRegional[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWAFRegional, Extras> = AWSWAFRegional[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWAFRegional> = AWSWAFRegional[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class WAFRegional {
  private constructor(private readonly client: AWSWAFRegional) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'waf-regional' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = [] as const;
  
  associateWebACL: (params: RawParamsFrom<'associateWebACL'>) => Promise<ReturnTypeFrom<'associateWebACL'>>  = async params => {
  // undefined
    return this.client.associateWebACL(params as any).promise();
  }

  createByteMatchSet: (params: RawParamsFrom<'createByteMatchSet'>) => Promise<ReturnTypeFrom<'createByteMatchSet'>>  = async params => {
  // undefined
    return this.client.createByteMatchSet(params as any).promise();
  }

  createGeoMatchSet: (params: RawParamsFrom<'createGeoMatchSet'>) => Promise<ReturnTypeFrom<'createGeoMatchSet'>>  = async params => {
  // undefined
    return this.client.createGeoMatchSet(params as any).promise();
  }

  createIPSet: (params: RawParamsFrom<'createIPSet'>) => Promise<ReturnTypeFrom<'createIPSet'>>  = async params => {
  // undefined
    return this.client.createIPSet(params as any).promise();
  }

  createRateBasedRule: (params: RawParamsFrom<'createRateBasedRule'>) => Promise<ReturnTypeFrom<'createRateBasedRule'>>  = async params => {
  // undefined
    return this.client.createRateBasedRule(params as any).promise();
  }

  createRegexMatchSet: (params: RawParamsFrom<'createRegexMatchSet'>) => Promise<ReturnTypeFrom<'createRegexMatchSet'>>  = async params => {
  // undefined
    return this.client.createRegexMatchSet(params as any).promise();
  }

  createRegexPatternSet: (params: RawParamsFrom<'createRegexPatternSet'>) => Promise<ReturnTypeFrom<'createRegexPatternSet'>>  = async params => {
  // undefined
    return this.client.createRegexPatternSet(params as any).promise();
  }

  createRule: (params: RawParamsFrom<'createRule'>) => Promise<ReturnTypeFrom<'createRule'>>  = async params => {
  // undefined
    return this.client.createRule(params as any).promise();
  }

  createRuleGroup: (params: RawParamsFrom<'createRuleGroup'>) => Promise<ReturnTypeFrom<'createRuleGroup'>>  = async params => {
  // undefined
    return this.client.createRuleGroup(params as any).promise();
  }

  createSizeConstraintSet: (params: RawParamsFrom<'createSizeConstraintSet'>) => Promise<ReturnTypeFrom<'createSizeConstraintSet'>>  = async params => {
  // undefined
    return this.client.createSizeConstraintSet(params as any).promise();
  }

  createSqlInjectionMatchSet: (params: RawParamsFrom<'createSqlInjectionMatchSet'>) => Promise<ReturnTypeFrom<'createSqlInjectionMatchSet'>>  = async params => {
  // undefined
    return this.client.createSqlInjectionMatchSet(params as any).promise();
  }

  createWebACL: (params: RawParamsFrom<'createWebACL'>) => Promise<ReturnTypeFrom<'createWebACL'>>  = async params => {
  // undefined
    return this.client.createWebACL(params as any).promise();
  }

  createWebACLMigrationStack: (params: RawParamsFrom<'createWebACLMigrationStack'>) => Promise<ReturnTypeFrom<'createWebACLMigrationStack'>>  = async params => {
  // undefined
    return this.client.createWebACLMigrationStack(params as any).promise();
  }

  createXssMatchSet: (params: RawParamsFrom<'createXssMatchSet'>) => Promise<ReturnTypeFrom<'createXssMatchSet'>>  = async params => {
  // undefined
    return this.client.createXssMatchSet(params as any).promise();
  }

  deleteByteMatchSet: (params: RawParamsFrom<'deleteByteMatchSet'>) => Promise<ReturnTypeFrom<'deleteByteMatchSet'>>  = async params => {
  // undefined
    return this.client.deleteByteMatchSet(params as any).promise();
  }

  deleteGeoMatchSet: (params: RawParamsFrom<'deleteGeoMatchSet'>) => Promise<ReturnTypeFrom<'deleteGeoMatchSet'>>  = async params => {
  // undefined
    return this.client.deleteGeoMatchSet(params as any).promise();
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

  deleteRateBasedRule: (params: RawParamsFrom<'deleteRateBasedRule'>) => Promise<ReturnTypeFrom<'deleteRateBasedRule'>>  = async params => {
  // undefined
    return this.client.deleteRateBasedRule(params as any).promise();
  }

  deleteRegexMatchSet: (params: RawParamsFrom<'deleteRegexMatchSet'>) => Promise<ReturnTypeFrom<'deleteRegexMatchSet'>>  = async params => {
  // undefined
    return this.client.deleteRegexMatchSet(params as any).promise();
  }

  deleteRegexPatternSet: (params: RawParamsFrom<'deleteRegexPatternSet'>) => Promise<ReturnTypeFrom<'deleteRegexPatternSet'>>  = async params => {
  // undefined
    return this.client.deleteRegexPatternSet(params as any).promise();
  }

  deleteRule: (params: RawParamsFrom<'deleteRule'>) => Promise<ReturnTypeFrom<'deleteRule'>>  = async params => {
  // undefined
    return this.client.deleteRule(params as any).promise();
  }

  deleteRuleGroup: (params: RawParamsFrom<'deleteRuleGroup'>) => Promise<ReturnTypeFrom<'deleteRuleGroup'>>  = async params => {
  // undefined
    return this.client.deleteRuleGroup(params as any).promise();
  }

  deleteSizeConstraintSet: (params: RawParamsFrom<'deleteSizeConstraintSet'>) => Promise<ReturnTypeFrom<'deleteSizeConstraintSet'>>  = async params => {
  // undefined
    return this.client.deleteSizeConstraintSet(params as any).promise();
  }

  deleteSqlInjectionMatchSet: (params: RawParamsFrom<'deleteSqlInjectionMatchSet'>) => Promise<ReturnTypeFrom<'deleteSqlInjectionMatchSet'>>  = async params => {
  // undefined
    return this.client.deleteSqlInjectionMatchSet(params as any).promise();
  }

  deleteWebACL: (params: RawParamsFrom<'deleteWebACL'>) => Promise<ReturnTypeFrom<'deleteWebACL'>>  = async params => {
  // undefined
    return this.client.deleteWebACL(params as any).promise();
  }

  deleteXssMatchSet: (params: RawParamsFrom<'deleteXssMatchSet'>) => Promise<ReturnTypeFrom<'deleteXssMatchSet'>>  = async params => {
  // undefined
    return this.client.deleteXssMatchSet(params as any).promise();
  }

  disassociateWebACL: (params: RawParamsFrom<'disassociateWebACL'>) => Promise<ReturnTypeFrom<'disassociateWebACL'>>  = async params => {
  // undefined
    return this.client.disassociateWebACL(params as any).promise();
  }

  getByteMatchSet: (params: RawParamsFrom<'getByteMatchSet'>) => Promise<ReturnTypeFrom<'getByteMatchSet'>>  = async params => {
  // undefined
    return this.client.getByteMatchSet(params as any).promise();
  }

  getChangeToken: (params: RawParamsFrom<'getChangeToken'>) => Promise<ReturnTypeFrom<'getChangeToken'>>  = async params => {
  // undefined
    return this.client.getChangeToken(params as any).promise();
  }

  getChangeTokenStatus: (params: RawParamsFrom<'getChangeTokenStatus'>) => Promise<ReturnTypeFrom<'getChangeTokenStatus'>>  = async params => {
  // undefined
    return this.client.getChangeTokenStatus(params as any).promise();
  }

  getGeoMatchSet: (params: RawParamsFrom<'getGeoMatchSet'>) => Promise<ReturnTypeFrom<'getGeoMatchSet'>>  = async params => {
  // undefined
    return this.client.getGeoMatchSet(params as any).promise();
  }

  getIPSet: (params: RawParamsFrom<'getIPSet'>) => Promise<ReturnTypeFrom<'getIPSet'>>  = async params => {
  // undefined
    return this.client.getIPSet(params as any).promise();
  }

  getLoggingConfiguration: (params: RawParamsFrom<'getLoggingConfiguration'>) => Promise<ReturnTypeFrom<'getLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.getLoggingConfiguration(params as any).promise();
  }

  getPermissionPolicy: (params: RawParamsFrom<'getPermissionPolicy'>) => Promise<ReturnTypeFrom<'getPermissionPolicy'>>  = async params => {
  // undefined
    return this.client.getPermissionPolicy(params as any).promise();
  }

  getRateBasedRule: (params: RawParamsFrom<'getRateBasedRule'>) => Promise<ReturnTypeFrom<'getRateBasedRule'>>  = async params => {
  // undefined
    return this.client.getRateBasedRule(params as any).promise();
  }

  getRateBasedRuleManagedKeys: (params: RawParamsFrom<'getRateBasedRuleManagedKeys'>) => Promise<ReturnTypeFrom<'getRateBasedRuleManagedKeys'>>  = async params => {
  // undefined
    return this.client.getRateBasedRuleManagedKeys(params as any).promise();
  }

  getRegexMatchSet: (params: RawParamsFrom<'getRegexMatchSet'>) => Promise<ReturnTypeFrom<'getRegexMatchSet'>>  = async params => {
  // undefined
    return this.client.getRegexMatchSet(params as any).promise();
  }

  getRegexPatternSet: (params: RawParamsFrom<'getRegexPatternSet'>) => Promise<ReturnTypeFrom<'getRegexPatternSet'>>  = async params => {
  // undefined
    return this.client.getRegexPatternSet(params as any).promise();
  }

  getRule: (params: RawParamsFrom<'getRule'>) => Promise<ReturnTypeFrom<'getRule'>>  = async params => {
  // undefined
    return this.client.getRule(params as any).promise();
  }

  getRuleGroup: (params: RawParamsFrom<'getRuleGroup'>) => Promise<ReturnTypeFrom<'getRuleGroup'>>  = async params => {
  // undefined
    return this.client.getRuleGroup(params as any).promise();
  }

  getSampledRequests: (params: RawParamsFrom<'getSampledRequests'>) => Promise<ReturnTypeFrom<'getSampledRequests'>>  = async params => {
  // undefined
    return this.client.getSampledRequests(params as any).promise();
  }

  getSizeConstraintSet: (params: RawParamsFrom<'getSizeConstraintSet'>) => Promise<ReturnTypeFrom<'getSizeConstraintSet'>>  = async params => {
  // undefined
    return this.client.getSizeConstraintSet(params as any).promise();
  }

  getSqlInjectionMatchSet: (params: RawParamsFrom<'getSqlInjectionMatchSet'>) => Promise<ReturnTypeFrom<'getSqlInjectionMatchSet'>>  = async params => {
  // undefined
    return this.client.getSqlInjectionMatchSet(params as any).promise();
  }

  getWebACL: (params: RawParamsFrom<'getWebACL'>) => Promise<ReturnTypeFrom<'getWebACL'>>  = async params => {
  // undefined
    return this.client.getWebACL(params as any).promise();
  }

  getWebACLForResource: (params: RawParamsFrom<'getWebACLForResource'>) => Promise<ReturnTypeFrom<'getWebACLForResource'>>  = async params => {
  // undefined
    return this.client.getWebACLForResource(params as any).promise();
  }

  getXssMatchSet: (params: RawParamsFrom<'getXssMatchSet'>) => Promise<ReturnTypeFrom<'getXssMatchSet'>>  = async params => {
  // undefined
    return this.client.getXssMatchSet(params as any).promise();
  }

  listActivatedRulesInRuleGroup: (params: RawParamsFrom<'listActivatedRulesInRuleGroup'>) => Promise<ReturnTypeFrom<'listActivatedRulesInRuleGroup'>>  = async params => {
  // undefined
    return this.client.listActivatedRulesInRuleGroup(params as any).promise();
  }

  listByteMatchSets: (params: RawParamsFrom<'listByteMatchSets'>) => Promise<ReturnTypeFrom<'listByteMatchSets'>>  = async params => {
  // undefined
    return this.client.listByteMatchSets(params as any).promise();
  }

  listGeoMatchSets: (params: RawParamsFrom<'listGeoMatchSets'>) => Promise<ReturnTypeFrom<'listGeoMatchSets'>>  = async params => {
  // undefined
    return this.client.listGeoMatchSets(params as any).promise();
  }

  listIPSets: (params: RawParamsFrom<'listIPSets'>) => Promise<ReturnTypeFrom<'listIPSets'>>  = async params => {
  // undefined
    return this.client.listIPSets(params as any).promise();
  }

  listLoggingConfigurations: (params: RawParamsFrom<'listLoggingConfigurations'>) => Promise<ReturnTypeFrom<'listLoggingConfigurations'>>  = async params => {
  // undefined
    return this.client.listLoggingConfigurations(params as any).promise();
  }

  listRateBasedRules: (params: RawParamsFrom<'listRateBasedRules'>) => Promise<ReturnTypeFrom<'listRateBasedRules'>>  = async params => {
  // undefined
    return this.client.listRateBasedRules(params as any).promise();
  }

  listRegexMatchSets: (params: RawParamsFrom<'listRegexMatchSets'>) => Promise<ReturnTypeFrom<'listRegexMatchSets'>>  = async params => {
  // undefined
    return this.client.listRegexMatchSets(params as any).promise();
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

  listRules: (params: RawParamsFrom<'listRules'>) => Promise<ReturnTypeFrom<'listRules'>>  = async params => {
  // undefined
    return this.client.listRules(params as any).promise();
  }

  listSizeConstraintSets: (params: RawParamsFrom<'listSizeConstraintSets'>) => Promise<ReturnTypeFrom<'listSizeConstraintSets'>>  = async params => {
  // undefined
    return this.client.listSizeConstraintSets(params as any).promise();
  }

  listSqlInjectionMatchSets: (params: RawParamsFrom<'listSqlInjectionMatchSets'>) => Promise<ReturnTypeFrom<'listSqlInjectionMatchSets'>>  = async params => {
  // undefined
    return this.client.listSqlInjectionMatchSets(params as any).promise();
  }

  listSubscribedRuleGroups: (params: RawParamsFrom<'listSubscribedRuleGroups'>) => Promise<ReturnTypeFrom<'listSubscribedRuleGroups'>>  = async params => {
  // undefined
    return this.client.listSubscribedRuleGroups(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listWebACLs: (params: RawParamsFrom<'listWebACLs'>) => Promise<ReturnTypeFrom<'listWebACLs'>>  = async params => {
  // undefined
    return this.client.listWebACLs(params as any).promise();
  }

  listXssMatchSets: (params: RawParamsFrom<'listXssMatchSets'>) => Promise<ReturnTypeFrom<'listXssMatchSets'>>  = async params => {
  // undefined
    return this.client.listXssMatchSets(params as any).promise();
  }

  putLoggingConfiguration: (params: RawParamsFrom<'putLoggingConfiguration'>) => Promise<ReturnTypeFrom<'putLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.putLoggingConfiguration(params as any).promise();
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

  updateByteMatchSet: (params: RawParamsFrom<'updateByteMatchSet'>) => Promise<ReturnTypeFrom<'updateByteMatchSet'>>  = async params => {
  // undefined
    return this.client.updateByteMatchSet(params as any).promise();
  }

  updateGeoMatchSet: (params: RawParamsFrom<'updateGeoMatchSet'>) => Promise<ReturnTypeFrom<'updateGeoMatchSet'>>  = async params => {
  // undefined
    return this.client.updateGeoMatchSet(params as any).promise();
  }

  updateIPSet: (params: RawParamsFrom<'updateIPSet'>) => Promise<ReturnTypeFrom<'updateIPSet'>>  = async params => {
  // undefined
    return this.client.updateIPSet(params as any).promise();
  }

  updateRateBasedRule: (params: RawParamsFrom<'updateRateBasedRule'>) => Promise<ReturnTypeFrom<'updateRateBasedRule'>>  = async params => {
  // undefined
    return this.client.updateRateBasedRule(params as any).promise();
  }

  updateRegexMatchSet: (params: RawParamsFrom<'updateRegexMatchSet'>) => Promise<ReturnTypeFrom<'updateRegexMatchSet'>>  = async params => {
  // undefined
    return this.client.updateRegexMatchSet(params as any).promise();
  }

  updateRegexPatternSet: (params: RawParamsFrom<'updateRegexPatternSet'>) => Promise<ReturnTypeFrom<'updateRegexPatternSet'>>  = async params => {
  // undefined
    return this.client.updateRegexPatternSet(params as any).promise();
  }

  updateRule: (params: RawParamsFrom<'updateRule'>) => Promise<ReturnTypeFrom<'updateRule'>>  = async params => {
  // undefined
    return this.client.updateRule(params as any).promise();
  }

  updateRuleGroup: (params: RawParamsFrom<'updateRuleGroup'>) => Promise<ReturnTypeFrom<'updateRuleGroup'>>  = async params => {
  // undefined
    return this.client.updateRuleGroup(params as any).promise();
  }

  updateSizeConstraintSet: (params: RawParamsFrom<'updateSizeConstraintSet'>) => Promise<ReturnTypeFrom<'updateSizeConstraintSet'>>  = async params => {
  // undefined
    return this.client.updateSizeConstraintSet(params as any).promise();
  }

  updateSqlInjectionMatchSet: (params: RawParamsFrom<'updateSqlInjectionMatchSet'>) => Promise<ReturnTypeFrom<'updateSqlInjectionMatchSet'>>  = async params => {
  // undefined
    return this.client.updateSqlInjectionMatchSet(params as any).promise();
  }

  updateWebACL: (params: RawParamsFrom<'updateWebACL'>) => Promise<ReturnTypeFrom<'updateWebACL'>>  = async params => {
  // undefined
    return this.client.updateWebACL(params as any).promise();
  }

  updateXssMatchSet: (params: RawParamsFrom<'updateXssMatchSet'>) => Promise<ReturnTypeFrom<'updateXssMatchSet'>>  = async params => {
  // undefined
    return this.client.updateXssMatchSet(params as any).promise();
  }
  
  static fromClient(client: AWSWAFRegional): WAFRegional {
    return new WAFRegional(client) as any;
  }
  
  static client(options?: AWSWAFRegional.Types.ClientConfiguration): WAFRegional {
    return new WAFRegional(new AWSWAFRegional(options)) as any;
  }
}  
