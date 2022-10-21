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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSServiceCatalog> = AWSServiceCatalog[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ServiceCatalog {
  private constructor(private readonly client: AWSServiceCatalog) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'servicecatalog' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["getProvisionedProductOutputs","listAcceptedPortfolioShares","listPortfolios","listServiceActions","listTagOptions","searchProducts","searchProductsAsAdmin","searchProvisionedProducts"] as const;
  
  acceptPortfolioShare: (params: RawParamsFrom<'acceptPortfolioShare'>) => Promise<ReturnTypeFrom<'acceptPortfolioShare'>>  = async params => {
  // undefined
    return this.client.acceptPortfolioShare(params as any).promise();
  }

  associateBudgetWithResource: (params: RawParamsFrom<'associateBudgetWithResource'>) => Promise<ReturnTypeFrom<'associateBudgetWithResource'>>  = async params => {
  // undefined
    return this.client.associateBudgetWithResource(params as any).promise();
  }

  associatePrincipalWithPortfolio: (params: RawParamsFrom<'associatePrincipalWithPortfolio'>) => Promise<ReturnTypeFrom<'associatePrincipalWithPortfolio'>>  = async params => {
  // undefined
    return this.client.associatePrincipalWithPortfolio(params as any).promise();
  }

  associateProductWithPortfolio: (params: RawParamsFrom<'associateProductWithPortfolio'>) => Promise<ReturnTypeFrom<'associateProductWithPortfolio'>>  = async params => {
  // undefined
    return this.client.associateProductWithPortfolio(params as any).promise();
  }

  associateServiceActionWithProvisioningArtifact: (params: RawParamsFrom<'associateServiceActionWithProvisioningArtifact'>) => Promise<ReturnTypeFrom<'associateServiceActionWithProvisioningArtifact'>>  = async params => {
  // undefined
    return this.client.associateServiceActionWithProvisioningArtifact(params as any).promise();
  }

  associateTagOptionWithResource: (params: RawParamsFrom<'associateTagOptionWithResource'>) => Promise<ReturnTypeFrom<'associateTagOptionWithResource'>>  = async params => {
  // undefined
    return this.client.associateTagOptionWithResource(params as any).promise();
  }

  batchAssociateServiceActionWithProvisioningArtifact: (params: RawParamsFrom<'batchAssociateServiceActionWithProvisioningArtifact'>) => Promise<ReturnTypeFrom<'batchAssociateServiceActionWithProvisioningArtifact'>>  = async params => {
  // undefined
    return this.client.batchAssociateServiceActionWithProvisioningArtifact(params as any).promise();
  }

  batchDisassociateServiceActionFromProvisioningArtifact: (params: RawParamsFrom<'batchDisassociateServiceActionFromProvisioningArtifact'>) => Promise<ReturnTypeFrom<'batchDisassociateServiceActionFromProvisioningArtifact'>>  = async params => {
  // undefined
    return this.client.batchDisassociateServiceActionFromProvisioningArtifact(params as any).promise();
  }

  copyProduct: (params: RawParamsFrom<'copyProduct'>) => Promise<ReturnTypeFrom<'copyProduct'>>  = async params => {
  // undefined
    return this.client.copyProduct(params as any).promise();
  }

  createConstraint: (params: RawParamsFrom<'createConstraint'>) => Promise<ReturnTypeFrom<'createConstraint'>>  = async params => {
  // undefined
    return this.client.createConstraint(params as any).promise();
  }

  createPortfolio: (params: RawParamsFrom<'createPortfolio'>) => Promise<ReturnTypeFrom<'createPortfolio'>>  = async params => {
  // undefined
    return this.client.createPortfolio(params as any).promise();
  }

  createPortfolioShare: (params: RawParamsFrom<'createPortfolioShare'>) => Promise<ReturnTypeFrom<'createPortfolioShare'>>  = async params => {
  // undefined
    return this.client.createPortfolioShare(params as any).promise();
  }

  createProduct: (params: RawParamsFrom<'createProduct'>) => Promise<ReturnTypeFrom<'createProduct'>>  = async params => {
  // undefined
    return this.client.createProduct(params as any).promise();
  }

  createProvisionedProductPlan: (params: RawParamsFrom<'createProvisionedProductPlan'>) => Promise<ReturnTypeFrom<'createProvisionedProductPlan'>>  = async params => {
  // undefined
    return this.client.createProvisionedProductPlan(params as any).promise();
  }

  createProvisioningArtifact: (params: RawParamsFrom<'createProvisioningArtifact'>) => Promise<ReturnTypeFrom<'createProvisioningArtifact'>>  = async params => {
  // undefined
    return this.client.createProvisioningArtifact(params as any).promise();
  }

  createServiceAction: (params: RawParamsFrom<'createServiceAction'>) => Promise<ReturnTypeFrom<'createServiceAction'>>  = async params => {
  // undefined
    return this.client.createServiceAction(params as any).promise();
  }

  createTagOption: (params: RawParamsFrom<'createTagOption'>) => Promise<ReturnTypeFrom<'createTagOption'>>  = async params => {
  // undefined
    return this.client.createTagOption(params as any).promise();
  }

  deleteConstraint: (params: RawParamsFrom<'deleteConstraint'>) => Promise<ReturnTypeFrom<'deleteConstraint'>>  = async params => {
  // undefined
    return this.client.deleteConstraint(params as any).promise();
  }

  deletePortfolio: (params: RawParamsFrom<'deletePortfolio'>) => Promise<ReturnTypeFrom<'deletePortfolio'>>  = async params => {
  // undefined
    return this.client.deletePortfolio(params as any).promise();
  }

  deletePortfolioShare: (params: RawParamsFrom<'deletePortfolioShare'>) => Promise<ReturnTypeFrom<'deletePortfolioShare'>>  = async params => {
  // undefined
    return this.client.deletePortfolioShare(params as any).promise();
  }

  deleteProduct: (params: RawParamsFrom<'deleteProduct'>) => Promise<ReturnTypeFrom<'deleteProduct'>>  = async params => {
  // undefined
    return this.client.deleteProduct(params as any).promise();
  }

  deleteProvisionedProductPlan: (params: RawParamsFrom<'deleteProvisionedProductPlan'>) => Promise<ReturnTypeFrom<'deleteProvisionedProductPlan'>>  = async params => {
  // undefined
    return this.client.deleteProvisionedProductPlan(params as any).promise();
  }

  deleteProvisioningArtifact: (params: RawParamsFrom<'deleteProvisioningArtifact'>) => Promise<ReturnTypeFrom<'deleteProvisioningArtifact'>>  = async params => {
  // undefined
    return this.client.deleteProvisioningArtifact(params as any).promise();
  }

  deleteServiceAction: (params: RawParamsFrom<'deleteServiceAction'>) => Promise<ReturnTypeFrom<'deleteServiceAction'>>  = async params => {
  // undefined
    return this.client.deleteServiceAction(params as any).promise();
  }

  deleteTagOption: (params: RawParamsFrom<'deleteTagOption'>) => Promise<ReturnTypeFrom<'deleteTagOption'>>  = async params => {
  // undefined
    return this.client.deleteTagOption(params as any).promise();
  }

  describeConstraint: (params: RawParamsFrom<'describeConstraint'>) => Promise<ReturnTypeFrom<'describeConstraint'>>  = async params => {
  // undefined
    return this.client.describeConstraint(params as any).promise();
  }

  describeCopyProductStatus: (params: RawParamsFrom<'describeCopyProductStatus'>) => Promise<ReturnTypeFrom<'describeCopyProductStatus'>>  = async params => {
  // undefined
    return this.client.describeCopyProductStatus(params as any).promise();
  }

  describePortfolio: (params: RawParamsFrom<'describePortfolio'>) => Promise<ReturnTypeFrom<'describePortfolio'>>  = async params => {
  // undefined
    return this.client.describePortfolio(params as any).promise();
  }

  describePortfolioShareStatus: (params: RawParamsFrom<'describePortfolioShareStatus'>) => Promise<ReturnTypeFrom<'describePortfolioShareStatus'>>  = async params => {
  // undefined
    return this.client.describePortfolioShareStatus(params as any).promise();
  }

  describePortfolioShares: (params: RawParamsFrom<'describePortfolioShares'>) => Promise<ReturnTypeFrom<'describePortfolioShares'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.describePortfolioShares(params as any).promise();
  }

  describeProduct: (params: RawParamsFrom<'describeProduct'>) => Promise<ReturnTypeFrom<'describeProduct'>>  = async params => {
  // undefined
    return this.client.describeProduct(params as any).promise();
  }

  describeProductAsAdmin: (params: RawParamsFrom<'describeProductAsAdmin'>) => Promise<ReturnTypeFrom<'describeProductAsAdmin'>>  = async params => {
  // undefined
    return this.client.describeProductAsAdmin(params as any).promise();
  }

  describeProductView: (params: RawParamsFrom<'describeProductView'>) => Promise<ReturnTypeFrom<'describeProductView'>>  = async params => {
  // undefined
    return this.client.describeProductView(params as any).promise();
  }

  describeProvisionedProduct: (params: RawParamsFrom<'describeProvisionedProduct'>) => Promise<ReturnTypeFrom<'describeProvisionedProduct'>>  = async params => {
  // undefined
    return this.client.describeProvisionedProduct(params as any).promise();
  }

  describeProvisionedProductPlan: (params: RawParamsFrom<'describeProvisionedProductPlan'>) => Promise<ReturnTypeFrom<'describeProvisionedProductPlan'>>  = async params => {
  // undefined
    return this.client.describeProvisionedProductPlan(params as any).promise();
  }

  describeProvisioningArtifact: (params: RawParamsFrom<'describeProvisioningArtifact'>) => Promise<ReturnTypeFrom<'describeProvisioningArtifact'>>  = async params => {
  // undefined
    return this.client.describeProvisioningArtifact(params as any).promise();
  }

  describeProvisioningParameters: (params: RawParamsFrom<'describeProvisioningParameters'>) => Promise<ReturnTypeFrom<'describeProvisioningParameters'>>  = async params => {
  // undefined
    return this.client.describeProvisioningParameters(params as any).promise();
  }

  describeRecord: (params: RawParamsFrom<'describeRecord'>) => Promise<ReturnTypeFrom<'describeRecord'>>  = async params => {
  // undefined
    return this.client.describeRecord(params as any).promise();
  }

  describeServiceAction: (params: RawParamsFrom<'describeServiceAction'>) => Promise<ReturnTypeFrom<'describeServiceAction'>>  = async params => {
  // undefined
    return this.client.describeServiceAction(params as any).promise();
  }

  describeServiceActionExecutionParameters: (params: RawParamsFrom<'describeServiceActionExecutionParameters'>) => Promise<ReturnTypeFrom<'describeServiceActionExecutionParameters'>>  = async params => {
  // undefined
    return this.client.describeServiceActionExecutionParameters(params as any).promise();
  }

  describeTagOption: (params: RawParamsFrom<'describeTagOption'>) => Promise<ReturnTypeFrom<'describeTagOption'>>  = async params => {
  // undefined
    return this.client.describeTagOption(params as any).promise();
  }

  disableAWSOrganizationsAccess: (params: RawParamsFrom<'disableAWSOrganizationsAccess'>) => Promise<ReturnTypeFrom<'disableAWSOrganizationsAccess'>>  = async params => {
  // undefined
    return this.client.disableAWSOrganizationsAccess(params as any).promise();
  }

  disassociateBudgetFromResource: (params: RawParamsFrom<'disassociateBudgetFromResource'>) => Promise<ReturnTypeFrom<'disassociateBudgetFromResource'>>  = async params => {
  // undefined
    return this.client.disassociateBudgetFromResource(params as any).promise();
  }

  disassociatePrincipalFromPortfolio: (params: RawParamsFrom<'disassociatePrincipalFromPortfolio'>) => Promise<ReturnTypeFrom<'disassociatePrincipalFromPortfolio'>>  = async params => {
  // undefined
    return this.client.disassociatePrincipalFromPortfolio(params as any).promise();
  }

  disassociateProductFromPortfolio: (params: RawParamsFrom<'disassociateProductFromPortfolio'>) => Promise<ReturnTypeFrom<'disassociateProductFromPortfolio'>>  = async params => {
  // undefined
    return this.client.disassociateProductFromPortfolio(params as any).promise();
  }

  disassociateServiceActionFromProvisioningArtifact: (params: RawParamsFrom<'disassociateServiceActionFromProvisioningArtifact'>) => Promise<ReturnTypeFrom<'disassociateServiceActionFromProvisioningArtifact'>>  = async params => {
  // undefined
    return this.client.disassociateServiceActionFromProvisioningArtifact(params as any).promise();
  }

  disassociateTagOptionFromResource: (params: RawParamsFrom<'disassociateTagOptionFromResource'>) => Promise<ReturnTypeFrom<'disassociateTagOptionFromResource'>>  = async params => {
  // undefined
    return this.client.disassociateTagOptionFromResource(params as any).promise();
  }

  enableAWSOrganizationsAccess: (params: RawParamsFrom<'enableAWSOrganizationsAccess'>) => Promise<ReturnTypeFrom<'enableAWSOrganizationsAccess'>>  = async params => {
  // undefined
    return this.client.enableAWSOrganizationsAccess(params as any).promise();
  }

  executeProvisionedProductPlan: (params: RawParamsFrom<'executeProvisionedProductPlan'>) => Promise<ReturnTypeFrom<'executeProvisionedProductPlan'>>  = async params => {
  // undefined
    return this.client.executeProvisionedProductPlan(params as any).promise();
  }

  executeProvisionedProductServiceAction: (params: RawParamsFrom<'executeProvisionedProductServiceAction'>) => Promise<ReturnTypeFrom<'executeProvisionedProductServiceAction'>>  = async params => {
  // undefined
    return this.client.executeProvisionedProductServiceAction(params as any).promise();
  }

  getAWSOrganizationsAccessStatus: (params: RawParamsFrom<'getAWSOrganizationsAccessStatus'>) => Promise<ReturnTypeFrom<'getAWSOrganizationsAccessStatus'>>  = async params => {
  // undefined
    return this.client.getAWSOrganizationsAccessStatus(params as any).promise();
  }

  getProvisionedProductOutputs: (params: RawParamsFrom<'getProvisionedProductOutputs'>) => Promise<ReturnTypeFrom<'getProvisionedProductOutputs'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.getProvisionedProductOutputs(params as any).promise();
  }

  importAsProvisionedProduct: (params: RawParamsFrom<'importAsProvisionedProduct'>) => Promise<ReturnTypeFrom<'importAsProvisionedProduct'>>  = async params => {
  // undefined
    return this.client.importAsProvisionedProduct(params as any).promise();
  }

  listAcceptedPortfolioShares: (params: RawParamsFrom<'listAcceptedPortfolioShares'>) => Promise<ReturnTypeFrom<'listAcceptedPortfolioShares'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listAcceptedPortfolioShares(params as any).promise();
  }

  listBudgetsForResource: (params: RawParamsFrom<'listBudgetsForResource'>) => Promise<ReturnTypeFrom<'listBudgetsForResource'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listBudgetsForResource(params as any).promise();
  }

  listConstraintsForPortfolio: (params: RawParamsFrom<'listConstraintsForPortfolio'>) => Promise<ReturnTypeFrom<'listConstraintsForPortfolio'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listConstraintsForPortfolio(params as any).promise();
  }

  listLaunchPaths: (params: RawParamsFrom<'listLaunchPaths'>) => Promise<ReturnTypeFrom<'listLaunchPaths'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listLaunchPaths(params as any).promise();
  }

  listOrganizationPortfolioAccess: (params: RawParamsFrom<'listOrganizationPortfolioAccess'>) => Promise<ReturnTypeFrom<'listOrganizationPortfolioAccess'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listOrganizationPortfolioAccess(params as any).promise();
  }

  listPortfolioAccess: (params: RawParamsFrom<'listPortfolioAccess'>) => Promise<ReturnTypeFrom<'listPortfolioAccess'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listPortfolioAccess(params as any).promise();
  }

  listPortfolios: (params: RawParamsFrom<'listPortfolios'>) => Promise<ReturnTypeFrom<'listPortfolios'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listPortfolios(params as any).promise();
  }

  listPortfoliosForProduct: (params: RawParamsFrom<'listPortfoliosForProduct'>) => Promise<ReturnTypeFrom<'listPortfoliosForProduct'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listPortfoliosForProduct(params as any).promise();
  }

  listPrincipalsForPortfolio: (params: RawParamsFrom<'listPrincipalsForPortfolio'>) => Promise<ReturnTypeFrom<'listPrincipalsForPortfolio'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listPrincipalsForPortfolio(params as any).promise();
  }

  listProvisionedProductPlans: (params: RawParamsFrom<'listProvisionedProductPlans'>) => Promise<ReturnTypeFrom<'listProvisionedProductPlans'>>  = async params => {
  // undefined
    return this.client.listProvisionedProductPlans(params as any).promise();
  }

  listProvisioningArtifacts: (params: RawParamsFrom<'listProvisioningArtifacts'>) => Promise<ReturnTypeFrom<'listProvisioningArtifacts'>>  = async params => {
  // undefined
    return this.client.listProvisioningArtifacts(params as any).promise();
  }

  listProvisioningArtifactsForServiceAction: (params: RawParamsFrom<'listProvisioningArtifactsForServiceAction'>) => Promise<ReturnTypeFrom<'listProvisioningArtifactsForServiceAction'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listProvisioningArtifactsForServiceAction(params as any).promise();
  }

  listRecordHistory: (params: RawParamsFrom<'listRecordHistory'>) => Promise<ReturnTypeFrom<'listRecordHistory'>>  = async params => {
  // undefined
    return this.client.listRecordHistory(params as any).promise();
  }

  listResourcesForTagOption: (params: RawParamsFrom<'listResourcesForTagOption'>) => Promise<ReturnTypeFrom<'listResourcesForTagOption'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"PageToken"}
    return this.client.listResourcesForTagOption(params as any).promise();
  }

  listServiceActions: (params: RawParamsFrom<'listServiceActions'>) => Promise<ReturnTypeFrom<'listServiceActions'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listServiceActions(params as any).promise();
  }

  listServiceActionsForProvisioningArtifact: (params: RawParamsFrom<'listServiceActionsForProvisioningArtifact'>) => Promise<ReturnTypeFrom<'listServiceActionsForProvisioningArtifact'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.listServiceActionsForProvisioningArtifact(params as any).promise();
  }

  listStackInstancesForProvisionedProduct: (params: RawParamsFrom<'listStackInstancesForProvisionedProduct'>) => Promise<ReturnTypeFrom<'listStackInstancesForProvisionedProduct'>>  = async params => {
  // undefined
    return this.client.listStackInstancesForProvisionedProduct(params as any).promise();
  }

  listTagOptions: (params: RawParamsFrom<'listTagOptions'>) => Promise<ReturnTypeFrom<'listTagOptions'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"PageToken"}
    return this.client.listTagOptions(params as any).promise();
  }

  provisionProduct: (params: RawParamsFrom<'provisionProduct'>) => Promise<ReturnTypeFrom<'provisionProduct'>>  = async params => {
  // undefined
    return this.client.provisionProduct(params as any).promise();
  }

  rejectPortfolioShare: (params: RawParamsFrom<'rejectPortfolioShare'>) => Promise<ReturnTypeFrom<'rejectPortfolioShare'>>  = async params => {
  // undefined
    return this.client.rejectPortfolioShare(params as any).promise();
  }

  scanProvisionedProducts: (params: RawParamsFrom<'scanProvisionedProducts'>) => Promise<ReturnTypeFrom<'scanProvisionedProducts'>>  = async params => {
  // undefined
    return this.client.scanProvisionedProducts(params as any).promise();
  }

  searchProducts: (params: RawParamsFrom<'searchProducts'>) => Promise<ReturnTypeFrom<'searchProducts'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.searchProducts(params as any).promise();
  }

  searchProductsAsAdmin: (params: RawParamsFrom<'searchProductsAsAdmin'>) => Promise<ReturnTypeFrom<'searchProductsAsAdmin'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.searchProductsAsAdmin(params as any).promise();
  }

  searchProvisionedProducts: (params: RawParamsFrom<'searchProvisionedProducts'>) => Promise<ReturnTypeFrom<'searchProvisionedProducts'>>  = async params => {
  // {"inputToken":"PageToken","limitKey":"PageSize","outputToken":"NextPageToken"}
    return this.client.searchProvisionedProducts(params as any).promise();
  }

  terminateProvisionedProduct: (params: RawParamsFrom<'terminateProvisionedProduct'>) => Promise<ReturnTypeFrom<'terminateProvisionedProduct'>>  = async params => {
  // undefined
    return this.client.terminateProvisionedProduct(params as any).promise();
  }

  updateConstraint: (params: RawParamsFrom<'updateConstraint'>) => Promise<ReturnTypeFrom<'updateConstraint'>>  = async params => {
  // undefined
    return this.client.updateConstraint(params as any).promise();
  }

  updatePortfolio: (params: RawParamsFrom<'updatePortfolio'>) => Promise<ReturnTypeFrom<'updatePortfolio'>>  = async params => {
  // undefined
    return this.client.updatePortfolio(params as any).promise();
  }

  updatePortfolioShare: (params: RawParamsFrom<'updatePortfolioShare'>) => Promise<ReturnTypeFrom<'updatePortfolioShare'>>  = async params => {
  // undefined
    return this.client.updatePortfolioShare(params as any).promise();
  }

  updateProduct: (params: RawParamsFrom<'updateProduct'>) => Promise<ReturnTypeFrom<'updateProduct'>>  = async params => {
  // undefined
    return this.client.updateProduct(params as any).promise();
  }

  updateProvisionedProduct: (params: RawParamsFrom<'updateProvisionedProduct'>) => Promise<ReturnTypeFrom<'updateProvisionedProduct'>>  = async params => {
  // undefined
    return this.client.updateProvisionedProduct(params as any).promise();
  }

  updateProvisionedProductProperties: (params: RawParamsFrom<'updateProvisionedProductProperties'>) => Promise<ReturnTypeFrom<'updateProvisionedProductProperties'>>  = async params => {
  // undefined
    return this.client.updateProvisionedProductProperties(params as any).promise();
  }

  updateProvisioningArtifact: (params: RawParamsFrom<'updateProvisioningArtifact'>) => Promise<ReturnTypeFrom<'updateProvisioningArtifact'>>  = async params => {
  // undefined
    return this.client.updateProvisioningArtifact(params as any).promise();
  }

  updateServiceAction: (params: RawParamsFrom<'updateServiceAction'>) => Promise<ReturnTypeFrom<'updateServiceAction'>>  = async params => {
  // undefined
    return this.client.updateServiceAction(params as any).promise();
  }

  updateTagOption: (params: RawParamsFrom<'updateTagOption'>) => Promise<ReturnTypeFrom<'updateTagOption'>>  = async params => {
  // undefined
    return this.client.updateTagOption(params as any).promise();
  }
  
  static fromClient(client: AWSServiceCatalog): ServiceCatalog {
    return new ServiceCatalog(client) as any;
  }
  
  static client(options?: AWSServiceCatalog.Types.ClientConfiguration): ServiceCatalog {
    return new ServiceCatalog(new AWSServiceCatalog(options)) as any;
  }
}  
