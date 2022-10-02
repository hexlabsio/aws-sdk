import { Request, ServiceCatalog as AWSServiceCatalog } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSServiceCatalog> = AWSServiceCatalog[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSServiceCatalog> = AWSServiceCatalog[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSServiceCatalog[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSServiceCatalog, Extras> = AWSServiceCatalog[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'servicecatalog';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["getProvisionedProductOutputs","listAcceptedPortfolioShares","listPortfolios","listServiceActions","listTagOptions","searchProducts","searchProductsAsAdmin","searchProvisionedProducts"];
    
  acceptPortfolioShare: FunctionTypeFrom<'acceptPortfolioShare'>;

  associateBudgetWithResource: FunctionTypeFrom<'associateBudgetWithResource'>;

  associatePrincipalWithPortfolio: FunctionTypeFrom<'associatePrincipalWithPortfolio'>;

  associateProductWithPortfolio: FunctionTypeFrom<'associateProductWithPortfolio'>;

  associateServiceActionWithProvisioningArtifact: FunctionTypeFrom<'associateServiceActionWithProvisioningArtifact'>;

  associateTagOptionWithResource: FunctionTypeFrom<'associateTagOptionWithResource'>;

  batchAssociateServiceActionWithProvisioningArtifact: FunctionTypeFrom<'batchAssociateServiceActionWithProvisioningArtifact'>;

  batchDisassociateServiceActionFromProvisioningArtifact: FunctionTypeFrom<'batchDisassociateServiceActionFromProvisioningArtifact'>;

  copyProduct: FunctionTypeFrom<'copyProduct'>;

  createConstraint: FunctionTypeFrom<'createConstraint'>;

  createPortfolio: FunctionTypeFrom<'createPortfolio'>;

  createPortfolioShare: FunctionTypeFrom<'createPortfolioShare'>;

  createProduct: FunctionTypeFrom<'createProduct'>;

  createProvisionedProductPlan: FunctionTypeFrom<'createProvisionedProductPlan'>;

  createProvisioningArtifact: FunctionTypeFrom<'createProvisioningArtifact'>;

  createServiceAction: FunctionTypeFrom<'createServiceAction'>;

  createTagOption: FunctionTypeFrom<'createTagOption'>;

  deleteConstraint: FunctionTypeFrom<'deleteConstraint'>;

  deletePortfolio: FunctionTypeFrom<'deletePortfolio'>;

  deletePortfolioShare: FunctionTypeFrom<'deletePortfolioShare'>;

  deleteProduct: FunctionTypeFrom<'deleteProduct'>;

  deleteProvisionedProductPlan: FunctionTypeFrom<'deleteProvisionedProductPlan'>;

  deleteProvisioningArtifact: FunctionTypeFrom<'deleteProvisioningArtifact'>;

  deleteServiceAction: FunctionTypeFrom<'deleteServiceAction'>;

  deleteTagOption: FunctionTypeFrom<'deleteTagOption'>;

  describeConstraint: FunctionTypeFrom<'describeConstraint'>;

  describeCopyProductStatus: FunctionTypeFrom<'describeCopyProductStatus'>;

  describePortfolio: FunctionTypeFrom<'describePortfolio'>;

  describePortfolioShareStatus: FunctionTypeFrom<'describePortfolioShareStatus'>;

  describePortfolioShares: FunctionTypeFrom<'describePortfolioShares'>;

  describeProduct: FunctionTypeFrom<'describeProduct'>;

  describeProductAsAdmin: FunctionTypeFrom<'describeProductAsAdmin'>;

  describeProductView: FunctionTypeFrom<'describeProductView'>;

  describeProvisionedProduct: FunctionTypeFrom<'describeProvisionedProduct'>;

  describeProvisionedProductPlan: FunctionTypeFrom<'describeProvisionedProductPlan'>;

  describeProvisioningArtifact: FunctionTypeFrom<'describeProvisioningArtifact'>;

  describeProvisioningParameters: FunctionTypeFrom<'describeProvisioningParameters'>;

  describeRecord: FunctionTypeFrom<'describeRecord'>;

  describeServiceAction: FunctionTypeFrom<'describeServiceAction'>;

  describeServiceActionExecutionParameters: FunctionTypeFrom<'describeServiceActionExecutionParameters'>;

  describeTagOption: FunctionTypeFrom<'describeTagOption'>;

  disableAWSOrganizationsAccess: FunctionTypeFrom<'disableAWSOrganizationsAccess'>;

  disassociateBudgetFromResource: FunctionTypeFrom<'disassociateBudgetFromResource'>;

  disassociatePrincipalFromPortfolio: FunctionTypeFrom<'disassociatePrincipalFromPortfolio'>;

  disassociateProductFromPortfolio: FunctionTypeFrom<'disassociateProductFromPortfolio'>;

  disassociateServiceActionFromProvisioningArtifact: FunctionTypeFrom<'disassociateServiceActionFromProvisioningArtifact'>;

  disassociateTagOptionFromResource: FunctionTypeFrom<'disassociateTagOptionFromResource'>;

  enableAWSOrganizationsAccess: FunctionTypeFrom<'enableAWSOrganizationsAccess'>;

  executeProvisionedProductPlan: FunctionTypeFrom<'executeProvisionedProductPlan'>;

  executeProvisionedProductServiceAction: FunctionTypeFrom<'executeProvisionedProductServiceAction'>;

  getAWSOrganizationsAccessStatus: FunctionTypeFrom<'getAWSOrganizationsAccessStatus'>;

  getProvisionedProductOutputs: FunctionTypeFrom<'getProvisionedProductOutputs'>;

  importAsProvisionedProduct: FunctionTypeFrom<'importAsProvisionedProduct'>;

  listAcceptedPortfolioShares: FunctionTypeFrom<'listAcceptedPortfolioShares'>;

  listBudgetsForResource: FunctionTypeFrom<'listBudgetsForResource'>;

  listConstraintsForPortfolio: FunctionTypeFrom<'listConstraintsForPortfolio'>;

  listLaunchPaths: FunctionTypeFrom<'listLaunchPaths'>;

  listOrganizationPortfolioAccess: FunctionTypeFrom<'listOrganizationPortfolioAccess'>;

  listPortfolioAccess: FunctionTypeFrom<'listPortfolioAccess'>;

  listPortfolios: FunctionTypeFrom<'listPortfolios'>;

  listPortfoliosForProduct: FunctionTypeFrom<'listPortfoliosForProduct'>;

  listPrincipalsForPortfolio: FunctionTypeFrom<'listPrincipalsForPortfolio'>;

  listProvisionedProductPlans: FunctionTypeFrom<'listProvisionedProductPlans'>;

  listProvisioningArtifacts: FunctionTypeFrom<'listProvisioningArtifacts'>;

  listProvisioningArtifactsForServiceAction: FunctionTypeFrom<'listProvisioningArtifactsForServiceAction'>;

  listRecordHistory: FunctionTypeFrom<'listRecordHistory'>;

  listResourcesForTagOption: FunctionTypeFrom<'listResourcesForTagOption'>;

  listServiceActions: FunctionTypeFrom<'listServiceActions'>;

  listServiceActionsForProvisioningArtifact: FunctionTypeFrom<'listServiceActionsForProvisioningArtifact'>;

  listStackInstancesForProvisionedProduct: FunctionTypeFrom<'listStackInstancesForProvisionedProduct'>;

  listTagOptions: FunctionTypeFrom<'listTagOptions'>;

  provisionProduct: FunctionTypeFrom<'provisionProduct'>;

  rejectPortfolioShare: FunctionTypeFrom<'rejectPortfolioShare'>;

  scanProvisionedProducts: FunctionTypeFrom<'scanProvisionedProducts'>;

  searchProducts: FunctionTypeFrom<'searchProducts'>;

  searchProductsAsAdmin: FunctionTypeFrom<'searchProductsAsAdmin'>;

  searchProvisionedProducts: FunctionTypeFrom<'searchProvisionedProducts'>;

  terminateProvisionedProduct: FunctionTypeFrom<'terminateProvisionedProduct'>;

  updateConstraint: FunctionTypeFrom<'updateConstraint'>;

  updatePortfolio: FunctionTypeFrom<'updatePortfolio'>;

  updatePortfolioShare: FunctionTypeFrom<'updatePortfolioShare'>;

  updateProduct: FunctionTypeFrom<'updateProduct'>;

  updateProvisionedProduct: FunctionTypeFrom<'updateProvisionedProduct'>;

  updateProvisionedProductProperties: FunctionTypeFrom<'updateProvisionedProductProperties'>;

  updateProvisioningArtifact: FunctionTypeFrom<'updateProvisioningArtifact'>;

  updateServiceAction: FunctionTypeFrom<'updateServiceAction'>;

  updateTagOption: FunctionTypeFrom<'updateTagOption'>
}
 
export class ServiceCatalog implements ClientType {
  private constructor(private readonly client: AWSServiceCatalog) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'servicecatalog';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["getProvisionedProductOutputs","listAcceptedPortfolioShares","listPortfolios","listServiceActions","listTagOptions","searchProducts","searchProductsAsAdmin","searchProvisionedProducts"] as const;
  
  async acceptPortfolioShare(...args: any): Promise<any> {
  // undefined
    return this.client.acceptPortfolioShare(...args).promise()
  }

  async associateBudgetWithResource(...args: any): Promise<any> {
  // undefined
    return this.client.associateBudgetWithResource(...args).promise()
  }

  async associatePrincipalWithPortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.associatePrincipalWithPortfolio(...args).promise()
  }

  async associateProductWithPortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.associateProductWithPortfolio(...args).promise()
  }

  async associateServiceActionWithProvisioningArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.associateServiceActionWithProvisioningArtifact(...args).promise()
  }

  async associateTagOptionWithResource(...args: any): Promise<any> {
  // undefined
    return this.client.associateTagOptionWithResource(...args).promise()
  }

  async batchAssociateServiceActionWithProvisioningArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.batchAssociateServiceActionWithProvisioningArtifact(...args).promise()
  }

  async batchDisassociateServiceActionFromProvisioningArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisassociateServiceActionFromProvisioningArtifact(...args).promise()
  }

  async copyProduct(...args: any): Promise<any> {
  // undefined
    return this.client.copyProduct(...args).promise()
  }

  async createConstraint(...args: any): Promise<any> {
  // undefined
    return this.client.createConstraint(...args).promise()
  }

  async createPortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.createPortfolio(...args).promise()
  }

  async createPortfolioShare(...args: any): Promise<any> {
  // undefined
    return this.client.createPortfolioShare(...args).promise()
  }

  async createProduct(...args: any): Promise<any> {
  // undefined
    return this.client.createProduct(...args).promise()
  }

  async createProvisionedProductPlan(...args: any): Promise<any> {
  // undefined
    return this.client.createProvisionedProductPlan(...args).promise()
  }

  async createProvisioningArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.createProvisioningArtifact(...args).promise()
  }

  async createServiceAction(...args: any): Promise<any> {
  // undefined
    return this.client.createServiceAction(...args).promise()
  }

  async createTagOption(...args: any): Promise<any> {
  // undefined
    return this.client.createTagOption(...args).promise()
  }

  async deleteConstraint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConstraint(...args).promise()
  }

  async deletePortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.deletePortfolio(...args).promise()
  }

  async deletePortfolioShare(...args: any): Promise<any> {
  // undefined
    return this.client.deletePortfolioShare(...args).promise()
  }

  async deleteProduct(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProduct(...args).promise()
  }

  async deleteProvisionedProductPlan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProvisionedProductPlan(...args).promise()
  }

  async deleteProvisioningArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProvisioningArtifact(...args).promise()
  }

  async deleteServiceAction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServiceAction(...args).promise()
  }

  async deleteTagOption(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTagOption(...args).promise()
  }

  async describeConstraint(...args: any): Promise<any> {
  // undefined
    return this.client.describeConstraint(...args).promise()
  }

  async describeCopyProductStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeCopyProductStatus(...args).promise()
  }

  async describePortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.describePortfolio(...args).promise()
  }

  async describePortfolioShareStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describePortfolioShareStatus(...args).promise()
  }

  async describePortfolioShares(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.describePortfolioShares(...args).promise()
  }

  async describeProduct(...args: any): Promise<any> {
  // undefined
    return this.client.describeProduct(...args).promise()
  }

  async describeProductAsAdmin(...args: any): Promise<any> {
  // undefined
    return this.client.describeProductAsAdmin(...args).promise()
  }

  async describeProductView(...args: any): Promise<any> {
  // undefined
    return this.client.describeProductView(...args).promise()
  }

  async describeProvisionedProduct(...args: any): Promise<any> {
  // undefined
    return this.client.describeProvisionedProduct(...args).promise()
  }

  async describeProvisionedProductPlan(...args: any): Promise<any> {
  // undefined
    return this.client.describeProvisionedProductPlan(...args).promise()
  }

  async describeProvisioningArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.describeProvisioningArtifact(...args).promise()
  }

  async describeProvisioningParameters(...args: any): Promise<any> {
  // undefined
    return this.client.describeProvisioningParameters(...args).promise()
  }

  async describeRecord(...args: any): Promise<any> {
  // undefined
    return this.client.describeRecord(...args).promise()
  }

  async describeServiceAction(...args: any): Promise<any> {
  // undefined
    return this.client.describeServiceAction(...args).promise()
  }

  async describeServiceActionExecutionParameters(...args: any): Promise<any> {
  // undefined
    return this.client.describeServiceActionExecutionParameters(...args).promise()
  }

  async describeTagOption(...args: any): Promise<any> {
  // undefined
    return this.client.describeTagOption(...args).promise()
  }

  async disableAWSOrganizationsAccess(...args: any): Promise<any> {
  // undefined
    return this.client.disableAWSOrganizationsAccess(...args).promise()
  }

  async disassociateBudgetFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateBudgetFromResource(...args).promise()
  }

  async disassociatePrincipalFromPortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.disassociatePrincipalFromPortfolio(...args).promise()
  }

  async disassociateProductFromPortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateProductFromPortfolio(...args).promise()
  }

  async disassociateServiceActionFromProvisioningArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateServiceActionFromProvisioningArtifact(...args).promise()
  }

  async disassociateTagOptionFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTagOptionFromResource(...args).promise()
  }

  async enableAWSOrganizationsAccess(...args: any): Promise<any> {
  // undefined
    return this.client.enableAWSOrganizationsAccess(...args).promise()
  }

  async executeProvisionedProductPlan(...args: any): Promise<any> {
  // undefined
    return this.client.executeProvisionedProductPlan(...args).promise()
  }

  async executeProvisionedProductServiceAction(...args: any): Promise<any> {
  // undefined
    return this.client.executeProvisionedProductServiceAction(...args).promise()
  }

  async getAWSOrganizationsAccessStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getAWSOrganizationsAccessStatus(...args).promise()
  }

  async getProvisionedProductOutputs(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.getProvisionedProductOutputs(...args).promise()
  }

  async importAsProvisionedProduct(...args: any): Promise<any> {
  // undefined
    return this.client.importAsProvisionedProduct(...args).promise()
  }

  async listAcceptedPortfolioShares(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listAcceptedPortfolioShares(...args).promise()
  }

  async listBudgetsForResource(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listBudgetsForResource(...args).promise()
  }

  async listConstraintsForPortfolio(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listConstraintsForPortfolio(...args).promise()
  }

  async listLaunchPaths(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listLaunchPaths(...args).promise()
  }

  async listOrganizationPortfolioAccess(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listOrganizationPortfolioAccess(...args).promise()
  }

  async listPortfolioAccess(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listPortfolioAccess(...args).promise()
  }

  async listPortfolios(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listPortfolios(...args).promise()
  }

  async listPortfoliosForProduct(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listPortfoliosForProduct(...args).promise()
  }

  async listPrincipalsForPortfolio(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listPrincipalsForPortfolio(...args).promise()
  }

  async listProvisionedProductPlans(...args: any): Promise<any> {
  // undefined
    return this.client.listProvisionedProductPlans(...args).promise()
  }

  async listProvisioningArtifacts(...args: any): Promise<any> {
  // undefined
    return this.client.listProvisioningArtifacts(...args).promise()
  }

  async listProvisioningArtifactsForServiceAction(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listProvisioningArtifactsForServiceAction(...args).promise()
  }

  async listRecordHistory(...args: any): Promise<any> {
  // undefined
    return this.client.listRecordHistory(...args).promise()
  }

  async listResourcesForTagOption(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"PageToken"}
    return this.client.listResourcesForTagOption(...args).promise()
  }

  async listServiceActions(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listServiceActions(...args).promise()
  }

  async listServiceActionsForProvisioningArtifact(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listServiceActionsForProvisioningArtifact(...args).promise()
  }

  async listStackInstancesForProvisionedProduct(...args: any): Promise<any> {
  // undefined
    return this.client.listStackInstancesForProvisionedProduct(...args).promise()
  }

  async listTagOptions(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"PageToken"}
    return this.client.listTagOptions(...args).promise()
  }

  async provisionProduct(...args: any): Promise<any> {
  // undefined
    return this.client.provisionProduct(...args).promise()
  }

  async rejectPortfolioShare(...args: any): Promise<any> {
  // undefined
    return this.client.rejectPortfolioShare(...args).promise()
  }

  async scanProvisionedProducts(...args: any): Promise<any> {
  // undefined
    return this.client.scanProvisionedProducts(...args).promise()
  }

  async searchProducts(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.searchProducts(...args).promise()
  }

  async searchProductsAsAdmin(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.searchProductsAsAdmin(...args).promise()
  }

  async searchProvisionedProducts(...args: any): Promise<any> {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.searchProvisionedProducts(...args).promise()
  }

  async terminateProvisionedProduct(...args: any): Promise<any> {
  // undefined
    return this.client.terminateProvisionedProduct(...args).promise()
  }

  async updateConstraint(...args: any): Promise<any> {
  // undefined
    return this.client.updateConstraint(...args).promise()
  }

  async updatePortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.updatePortfolio(...args).promise()
  }

  async updatePortfolioShare(...args: any): Promise<any> {
  // undefined
    return this.client.updatePortfolioShare(...args).promise()
  }

  async updateProduct(...args: any): Promise<any> {
  // undefined
    return this.client.updateProduct(...args).promise()
  }

  async updateProvisionedProduct(...args: any): Promise<any> {
  // undefined
    return this.client.updateProvisionedProduct(...args).promise()
  }

  async updateProvisionedProductProperties(...args: any): Promise<any> {
  // undefined
    return this.client.updateProvisionedProductProperties(...args).promise()
  }

  async updateProvisioningArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.updateProvisioningArtifact(...args).promise()
  }

  async updateServiceAction(...args: any): Promise<any> {
  // undefined
    return this.client.updateServiceAction(...args).promise()
  }

  async updateTagOption(...args: any): Promise<any> {
  // undefined
    return this.client.updateTagOption(...args).promise()
  }
  
  static fromClient(client: AWSServiceCatalog): ClientType {
    return new ServiceCatalog(client) as any;
  }
  
  static client(options?: AWSServiceCatalog.Types.ClientConfiguration): ClientType {
    return new ServiceCatalog(new AWSServiceCatalog(options)) as any;
  }
}  
