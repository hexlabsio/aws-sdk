import { Request, WAF as AWSWAF } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWAF> = AWSWAF[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWAF> = AWSWAF[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWAF[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWAF, Extras> = AWSWAF[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'waf';
    global: true;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly [];
    
  createByteMatchSet: FunctionTypeFrom<'createByteMatchSet'>;

  createGeoMatchSet: FunctionTypeFrom<'createGeoMatchSet'>;

  createIPSet: FunctionTypeFrom<'createIPSet'>;

  createRateBasedRule: FunctionTypeFrom<'createRateBasedRule'>;

  createRegexMatchSet: FunctionTypeFrom<'createRegexMatchSet'>;

  createRegexPatternSet: FunctionTypeFrom<'createRegexPatternSet'>;

  createRule: FunctionTypeFrom<'createRule'>;

  createRuleGroup: FunctionTypeFrom<'createRuleGroup'>;

  createSizeConstraintSet: FunctionTypeFrom<'createSizeConstraintSet'>;

  createSqlInjectionMatchSet: FunctionTypeFrom<'createSqlInjectionMatchSet'>;

  createWebACL: FunctionTypeFrom<'createWebACL'>;

  createWebACLMigrationStack: FunctionTypeFrom<'createWebACLMigrationStack'>;

  createXssMatchSet: FunctionTypeFrom<'createXssMatchSet'>;

  deleteByteMatchSet: FunctionTypeFrom<'deleteByteMatchSet'>;

  deleteGeoMatchSet: FunctionTypeFrom<'deleteGeoMatchSet'>;

  deleteIPSet: FunctionTypeFrom<'deleteIPSet'>;

  deleteLoggingConfiguration: FunctionTypeFrom<'deleteLoggingConfiguration'>;

  deletePermissionPolicy: FunctionTypeFrom<'deletePermissionPolicy'>;

  deleteRateBasedRule: FunctionTypeFrom<'deleteRateBasedRule'>;

  deleteRegexMatchSet: FunctionTypeFrom<'deleteRegexMatchSet'>;

  deleteRegexPatternSet: FunctionTypeFrom<'deleteRegexPatternSet'>;

  deleteRule: FunctionTypeFrom<'deleteRule'>;

  deleteRuleGroup: FunctionTypeFrom<'deleteRuleGroup'>;

  deleteSizeConstraintSet: FunctionTypeFrom<'deleteSizeConstraintSet'>;

  deleteSqlInjectionMatchSet: FunctionTypeFrom<'deleteSqlInjectionMatchSet'>;

  deleteWebACL: FunctionTypeFrom<'deleteWebACL'>;

  deleteXssMatchSet: FunctionTypeFrom<'deleteXssMatchSet'>;

  getByteMatchSet: FunctionTypeFrom<'getByteMatchSet'>;

  getChangeToken: FunctionTypeFrom<'getChangeToken'>;

  getChangeTokenStatus: FunctionTypeFrom<'getChangeTokenStatus'>;

  getGeoMatchSet: FunctionTypeFrom<'getGeoMatchSet'>;

  getIPSet: FunctionTypeFrom<'getIPSet'>;

  getLoggingConfiguration: FunctionTypeFrom<'getLoggingConfiguration'>;

  getPermissionPolicy: FunctionTypeFrom<'getPermissionPolicy'>;

  getRateBasedRule: FunctionTypeFrom<'getRateBasedRule'>;

  getRateBasedRuleManagedKeys: FunctionTypeFrom<'getRateBasedRuleManagedKeys'>;

  getRegexMatchSet: FunctionTypeFrom<'getRegexMatchSet'>;

  getRegexPatternSet: FunctionTypeFrom<'getRegexPatternSet'>;

  getRule: FunctionTypeFrom<'getRule'>;

  getRuleGroup: FunctionTypeFrom<'getRuleGroup'>;

  getSampledRequests: FunctionTypeFrom<'getSampledRequests'>;

  getSizeConstraintSet: FunctionTypeFrom<'getSizeConstraintSet'>;

  getSqlInjectionMatchSet: FunctionTypeFrom<'getSqlInjectionMatchSet'>;

  getWebACL: FunctionTypeFrom<'getWebACL'>;

  getXssMatchSet: FunctionTypeFrom<'getXssMatchSet'>;

  listActivatedRulesInRuleGroup: FunctionTypeFrom<'listActivatedRulesInRuleGroup'>;

  listByteMatchSets: FunctionTypeFrom<'listByteMatchSets'>;

  listGeoMatchSets: FunctionTypeFrom<'listGeoMatchSets'>;

  listIPSets: FunctionTypeFrom<'listIPSets'>;

  listLoggingConfigurations: FunctionTypeFrom<'listLoggingConfigurations'>;

  listRateBasedRules: FunctionTypeFrom<'listRateBasedRules'>;

  listRegexMatchSets: FunctionTypeFrom<'listRegexMatchSets'>;

  listRegexPatternSets: FunctionTypeFrom<'listRegexPatternSets'>;

  listRuleGroups: FunctionTypeFrom<'listRuleGroups'>;

  listRules: FunctionTypeFrom<'listRules'>;

  listSizeConstraintSets: FunctionTypeFrom<'listSizeConstraintSets'>;

  listSqlInjectionMatchSets: FunctionTypeFrom<'listSqlInjectionMatchSets'>;

  listSubscribedRuleGroups: FunctionTypeFrom<'listSubscribedRuleGroups'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWebACLs: FunctionTypeFrom<'listWebACLs'>;

  listXssMatchSets: FunctionTypeFrom<'listXssMatchSets'>;

  putLoggingConfiguration: FunctionTypeFrom<'putLoggingConfiguration'>;

  putPermissionPolicy: FunctionTypeFrom<'putPermissionPolicy'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateByteMatchSet: FunctionTypeFrom<'updateByteMatchSet'>;

  updateGeoMatchSet: FunctionTypeFrom<'updateGeoMatchSet'>;

  updateIPSet: FunctionTypeFrom<'updateIPSet'>;

  updateRateBasedRule: FunctionTypeFrom<'updateRateBasedRule'>;

  updateRegexMatchSet: FunctionTypeFrom<'updateRegexMatchSet'>;

  updateRegexPatternSet: FunctionTypeFrom<'updateRegexPatternSet'>;

  updateRule: FunctionTypeFrom<'updateRule'>;

  updateRuleGroup: FunctionTypeFrom<'updateRuleGroup'>;

  updateSizeConstraintSet: FunctionTypeFrom<'updateSizeConstraintSet'>;

  updateSqlInjectionMatchSet: FunctionTypeFrom<'updateSqlInjectionMatchSet'>;

  updateWebACL: FunctionTypeFrom<'updateWebACL'>;

  updateXssMatchSet: FunctionTypeFrom<'updateXssMatchSet'>
}
 
export class WAF implements ClientType {
  private constructor(private readonly client: AWSWAF) {}
  
  public readonly signingRegion = 'us-east-1';
  public readonly service = 'waf';
  public readonly global = true;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = [] as const;
  
  async createByteMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.createByteMatchSet(...args).promise()
  }

  async createGeoMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.createGeoMatchSet(...args).promise()
  }

  async createIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.createIPSet(...args).promise()
  }

  async createRateBasedRule(...args: any): Promise<any> {
  // undefined
    return this.client.createRateBasedRule(...args).promise()
  }

  async createRegexMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.createRegexMatchSet(...args).promise()
  }

  async createRegexPatternSet(...args: any): Promise<any> {
  // undefined
    return this.client.createRegexPatternSet(...args).promise()
  }

  async createRule(...args: any): Promise<any> {
  // undefined
    return this.client.createRule(...args).promise()
  }

  async createRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createRuleGroup(...args).promise()
  }

  async createSizeConstraintSet(...args: any): Promise<any> {
  // undefined
    return this.client.createSizeConstraintSet(...args).promise()
  }

  async createSqlInjectionMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.createSqlInjectionMatchSet(...args).promise()
  }

  async createWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.createWebACL(...args).promise()
  }

  async createWebACLMigrationStack(...args: any): Promise<any> {
  // undefined
    return this.client.createWebACLMigrationStack(...args).promise()
  }

  async createXssMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.createXssMatchSet(...args).promise()
  }

  async deleteByteMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteByteMatchSet(...args).promise()
  }

  async deleteGeoMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGeoMatchSet(...args).promise()
  }

  async deleteIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIPSet(...args).promise()
  }

  async deleteLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoggingConfiguration(...args).promise()
  }

  async deletePermissionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deletePermissionPolicy(...args).promise()
  }

  async deleteRateBasedRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRateBasedRule(...args).promise()
  }

  async deleteRegexMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRegexMatchSet(...args).promise()
  }

  async deleteRegexPatternSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRegexPatternSet(...args).promise()
  }

  async deleteRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRule(...args).promise()
  }

  async deleteRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRuleGroup(...args).promise()
  }

  async deleteSizeConstraintSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSizeConstraintSet(...args).promise()
  }

  async deleteSqlInjectionMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSqlInjectionMatchSet(...args).promise()
  }

  async deleteWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWebACL(...args).promise()
  }

  async deleteXssMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteXssMatchSet(...args).promise()
  }

  async getByteMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.getByteMatchSet(...args).promise()
  }

  async getChangeToken(...args: any): Promise<any> {
  // undefined
    return this.client.getChangeToken(...args).promise()
  }

  async getChangeTokenStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getChangeTokenStatus(...args).promise()
  }

  async getGeoMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.getGeoMatchSet(...args).promise()
  }

  async getIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.getIPSet(...args).promise()
  }

  async getLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getLoggingConfiguration(...args).promise()
  }

  async getPermissionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getPermissionPolicy(...args).promise()
  }

  async getRateBasedRule(...args: any): Promise<any> {
  // undefined
    return this.client.getRateBasedRule(...args).promise()
  }

  async getRateBasedRuleManagedKeys(...args: any): Promise<any> {
  // undefined
    return this.client.getRateBasedRuleManagedKeys(...args).promise()
  }

  async getRegexMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.getRegexMatchSet(...args).promise()
  }

  async getRegexPatternSet(...args: any): Promise<any> {
  // undefined
    return this.client.getRegexPatternSet(...args).promise()
  }

  async getRule(...args: any): Promise<any> {
  // undefined
    return this.client.getRule(...args).promise()
  }

  async getRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getRuleGroup(...args).promise()
  }

  async getSampledRequests(...args: any): Promise<any> {
  // undefined
    return this.client.getSampledRequests(...args).promise()
  }

  async getSizeConstraintSet(...args: any): Promise<any> {
  // undefined
    return this.client.getSizeConstraintSet(...args).promise()
  }

  async getSqlInjectionMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.getSqlInjectionMatchSet(...args).promise()
  }

  async getWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.getWebACL(...args).promise()
  }

  async getXssMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.getXssMatchSet(...args).promise()
  }

  async listActivatedRulesInRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.listActivatedRulesInRuleGroup(...args).promise()
  }

  async listByteMatchSets(...args: any): Promise<any> {
  // undefined
    return this.client.listByteMatchSets(...args).promise()
  }

  async listGeoMatchSets(...args: any): Promise<any> {
  // undefined
    return this.client.listGeoMatchSets(...args).promise()
  }

  async listIPSets(...args: any): Promise<any> {
  // undefined
    return this.client.listIPSets(...args).promise()
  }

  async listLoggingConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listLoggingConfigurations(...args).promise()
  }

  async listRateBasedRules(...args: any): Promise<any> {
  // undefined
    return this.client.listRateBasedRules(...args).promise()
  }

  async listRegexMatchSets(...args: any): Promise<any> {
  // undefined
    return this.client.listRegexMatchSets(...args).promise()
  }

  async listRegexPatternSets(...args: any): Promise<any> {
  // undefined
    return this.client.listRegexPatternSets(...args).promise()
  }

  async listRuleGroups(...args: any): Promise<any> {
  // undefined
    return this.client.listRuleGroups(...args).promise()
  }

  async listRules(...args: any): Promise<any> {
  // undefined
    return this.client.listRules(...args).promise()
  }

  async listSizeConstraintSets(...args: any): Promise<any> {
  // undefined
    return this.client.listSizeConstraintSets(...args).promise()
  }

  async listSqlInjectionMatchSets(...args: any): Promise<any> {
  // undefined
    return this.client.listSqlInjectionMatchSets(...args).promise()
  }

  async listSubscribedRuleGroups(...args: any): Promise<any> {
  // undefined
    return this.client.listSubscribedRuleGroups(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listWebACLs(...args: any): Promise<any> {
  // undefined
    return this.client.listWebACLs(...args).promise()
  }

  async listXssMatchSets(...args: any): Promise<any> {
  // undefined
    return this.client.listXssMatchSets(...args).promise()
  }

  async putLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putLoggingConfiguration(...args).promise()
  }

  async putPermissionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putPermissionPolicy(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateByteMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateByteMatchSet(...args).promise()
  }

  async updateGeoMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateGeoMatchSet(...args).promise()
  }

  async updateIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateIPSet(...args).promise()
  }

  async updateRateBasedRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateRateBasedRule(...args).promise()
  }

  async updateRegexMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateRegexMatchSet(...args).promise()
  }

  async updateRegexPatternSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateRegexPatternSet(...args).promise()
  }

  async updateRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateRule(...args).promise()
  }

  async updateRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateRuleGroup(...args).promise()
  }

  async updateSizeConstraintSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateSizeConstraintSet(...args).promise()
  }

  async updateSqlInjectionMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateSqlInjectionMatchSet(...args).promise()
  }

  async updateWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.updateWebACL(...args).promise()
  }

  async updateXssMatchSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateXssMatchSet(...args).promise()
  }
  
  static fromClient(client: AWSWAF): ClientType {
    return new WAF(client) as any;
  }
  
  static client(options?: AWSWAF.Types.ClientConfiguration): ClientType {
    return new WAF(new AWSWAF(options)) as any;
  }
}  
