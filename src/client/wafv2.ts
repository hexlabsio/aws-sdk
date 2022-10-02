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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'wafv2';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly [];
    
  associateWebACL: FunctionTypeFrom<'associateWebACL'>;

  checkCapacity: FunctionTypeFrom<'checkCapacity'>;

  createIPSet: FunctionTypeFrom<'createIPSet'>;

  createRegexPatternSet: FunctionTypeFrom<'createRegexPatternSet'>;

  createRuleGroup: FunctionTypeFrom<'createRuleGroup'>;

  createWebACL: FunctionTypeFrom<'createWebACL'>;

  deleteFirewallManagerRuleGroups: FunctionTypeFrom<'deleteFirewallManagerRuleGroups'>;

  deleteIPSet: FunctionTypeFrom<'deleteIPSet'>;

  deleteLoggingConfiguration: FunctionTypeFrom<'deleteLoggingConfiguration'>;

  deletePermissionPolicy: FunctionTypeFrom<'deletePermissionPolicy'>;

  deleteRegexPatternSet: FunctionTypeFrom<'deleteRegexPatternSet'>;

  deleteRuleGroup: FunctionTypeFrom<'deleteRuleGroup'>;

  deleteWebACL: FunctionTypeFrom<'deleteWebACL'>;

  describeManagedRuleGroup: FunctionTypeFrom<'describeManagedRuleGroup'>;

  disassociateWebACL: FunctionTypeFrom<'disassociateWebACL'>;

  generateMobileSdkReleaseUrl: FunctionTypeFrom<'generateMobileSdkReleaseUrl'>;

  getIPSet: FunctionTypeFrom<'getIPSet'>;

  getLoggingConfiguration: FunctionTypeFrom<'getLoggingConfiguration'>;

  getManagedRuleSet: FunctionTypeFrom<'getManagedRuleSet'>;

  getMobileSdkRelease: FunctionTypeFrom<'getMobileSdkRelease'>;

  getPermissionPolicy: FunctionTypeFrom<'getPermissionPolicy'>;

  getRateBasedStatementManagedKeys: FunctionTypeFrom<'getRateBasedStatementManagedKeys'>;

  getRegexPatternSet: FunctionTypeFrom<'getRegexPatternSet'>;

  getRuleGroup: FunctionTypeFrom<'getRuleGroup'>;

  getSampledRequests: FunctionTypeFrom<'getSampledRequests'>;

  getWebACL: FunctionTypeFrom<'getWebACL'>;

  getWebACLForResource: FunctionTypeFrom<'getWebACLForResource'>;

  listAvailableManagedRuleGroupVersions: FunctionTypeFrom<'listAvailableManagedRuleGroupVersions'>;

  listAvailableManagedRuleGroups: FunctionTypeFrom<'listAvailableManagedRuleGroups'>;

  listIPSets: FunctionTypeFrom<'listIPSets'>;

  listLoggingConfigurations: FunctionTypeFrom<'listLoggingConfigurations'>;

  listManagedRuleSets: FunctionTypeFrom<'listManagedRuleSets'>;

  listMobileSdkReleases: FunctionTypeFrom<'listMobileSdkReleases'>;

  listRegexPatternSets: FunctionTypeFrom<'listRegexPatternSets'>;

  listResourcesForWebACL: FunctionTypeFrom<'listResourcesForWebACL'>;

  listRuleGroups: FunctionTypeFrom<'listRuleGroups'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWebACLs: FunctionTypeFrom<'listWebACLs'>;

  putLoggingConfiguration: FunctionTypeFrom<'putLoggingConfiguration'>;

  putManagedRuleSetVersions: FunctionTypeFrom<'putManagedRuleSetVersions'>;

  putPermissionPolicy: FunctionTypeFrom<'putPermissionPolicy'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateIPSet: FunctionTypeFrom<'updateIPSet'>;

  updateManagedRuleSetVersionExpiryDate: FunctionTypeFrom<'updateManagedRuleSetVersionExpiryDate'>;

  updateRegexPatternSet: FunctionTypeFrom<'updateRegexPatternSet'>;

  updateRuleGroup: FunctionTypeFrom<'updateRuleGroup'>;

  updateWebACL: FunctionTypeFrom<'updateWebACL'>
}
 
export class WAFV2 implements ClientType {
  private constructor(private readonly client: AWSWAFV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'wafv2';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = [] as const;
  
  async associateWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.associateWebACL(...args).promise()
  }

  async checkCapacity(...args: any): Promise<any> {
  // undefined
    return this.client.checkCapacity(...args).promise()
  }

  async createIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.createIPSet(...args).promise()
  }

  async createRegexPatternSet(...args: any): Promise<any> {
  // undefined
    return this.client.createRegexPatternSet(...args).promise()
  }

  async createRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createRuleGroup(...args).promise()
  }

  async createWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.createWebACL(...args).promise()
  }

  async deleteFirewallManagerRuleGroups(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFirewallManagerRuleGroups(...args).promise()
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

  async deleteRegexPatternSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRegexPatternSet(...args).promise()
  }

  async deleteRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRuleGroup(...args).promise()
  }

  async deleteWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWebACL(...args).promise()
  }

  async describeManagedRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeManagedRuleGroup(...args).promise()
  }

  async disassociateWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateWebACL(...args).promise()
  }

  async generateMobileSdkReleaseUrl(...args: any): Promise<any> {
  // undefined
    return this.client.generateMobileSdkReleaseUrl(...args).promise()
  }

  async getIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.getIPSet(...args).promise()
  }

  async getLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getLoggingConfiguration(...args).promise()
  }

  async getManagedRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.getManagedRuleSet(...args).promise()
  }

  async getMobileSdkRelease(...args: any): Promise<any> {
  // undefined
    return this.client.getMobileSdkRelease(...args).promise()
  }

  async getPermissionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getPermissionPolicy(...args).promise()
  }

  async getRateBasedStatementManagedKeys(...args: any): Promise<any> {
  // undefined
    return this.client.getRateBasedStatementManagedKeys(...args).promise()
  }

  async getRegexPatternSet(...args: any): Promise<any> {
  // undefined
    return this.client.getRegexPatternSet(...args).promise()
  }

  async getRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getRuleGroup(...args).promise()
  }

  async getSampledRequests(...args: any): Promise<any> {
  // undefined
    return this.client.getSampledRequests(...args).promise()
  }

  async getWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.getWebACL(...args).promise()
  }

  async getWebACLForResource(...args: any): Promise<any> {
  // undefined
    return this.client.getWebACLForResource(...args).promise()
  }

  async listAvailableManagedRuleGroupVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listAvailableManagedRuleGroupVersions(...args).promise()
  }

  async listAvailableManagedRuleGroups(...args: any): Promise<any> {
  // undefined
    return this.client.listAvailableManagedRuleGroups(...args).promise()
  }

  async listIPSets(...args: any): Promise<any> {
  // undefined
    return this.client.listIPSets(...args).promise()
  }

  async listLoggingConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listLoggingConfigurations(...args).promise()
  }

  async listManagedRuleSets(...args: any): Promise<any> {
  // undefined
    return this.client.listManagedRuleSets(...args).promise()
  }

  async listMobileSdkReleases(...args: any): Promise<any> {
  // undefined
    return this.client.listMobileSdkReleases(...args).promise()
  }

  async listRegexPatternSets(...args: any): Promise<any> {
  // undefined
    return this.client.listRegexPatternSets(...args).promise()
  }

  async listResourcesForWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.listResourcesForWebACL(...args).promise()
  }

  async listRuleGroups(...args: any): Promise<any> {
  // undefined
    return this.client.listRuleGroups(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listWebACLs(...args: any): Promise<any> {
  // undefined
    return this.client.listWebACLs(...args).promise()
  }

  async putLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putLoggingConfiguration(...args).promise()
  }

  async putManagedRuleSetVersions(...args: any): Promise<any> {
  // undefined
    return this.client.putManagedRuleSetVersions(...args).promise()
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

  async updateIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateIPSet(...args).promise()
  }

  async updateManagedRuleSetVersionExpiryDate(...args: any): Promise<any> {
  // undefined
    return this.client.updateManagedRuleSetVersionExpiryDate(...args).promise()
  }

  async updateRegexPatternSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateRegexPatternSet(...args).promise()
  }

  async updateRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateRuleGroup(...args).promise()
  }

  async updateWebACL(...args: any): Promise<any> {
  // undefined
    return this.client.updateWebACL(...args).promise()
  }
  
  static fromClient(client: AWSWAFV2): ClientType {
    return new WAFV2(client) as any;
  }
  
  static client(options?: AWSWAFV2.Types.ClientConfiguration): ClientType {
    return new WAFV2(new AWSWAFV2(options)) as any;
  }
}  
