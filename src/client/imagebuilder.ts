import { Request, Imagebuilder as AWSImagebuilder } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSImagebuilder> = AWSImagebuilder[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSImagebuilder> = AWSImagebuilder[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSImagebuilder[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSImagebuilder, Extras> = AWSImagebuilder[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSImagebuilder> = AWSImagebuilder[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Imagebuilder {
  private constructor(private readonly client: AWSImagebuilder) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'imagebuilder' as const;
  public readonly global = false as const;
  public readonly category = 'Compute' as const;
  public readonly topLevelCalls = ["listComponents","listContainerRecipes","listDistributionConfigurations","listImagePipelines","listImageRecipes","listImages","listInfrastructureConfigurations"] as const;
  
  cancelImageCreation: (params: RawParamsFrom<'cancelImageCreation'>) => Promise<ReturnTypeFrom<'cancelImageCreation'>>  = async params => {
  // undefined
    return this.client.cancelImageCreation(params as any).promise();
  }

  createComponent: (params: RawParamsFrom<'createComponent'>) => Promise<ReturnTypeFrom<'createComponent'>>  = async params => {
  // undefined
    return this.client.createComponent(params as any).promise();
  }

  createContainerRecipe: (params: RawParamsFrom<'createContainerRecipe'>) => Promise<ReturnTypeFrom<'createContainerRecipe'>>  = async params => {
  // undefined
    return this.client.createContainerRecipe(params as any).promise();
  }

  createDistributionConfiguration: (params: RawParamsFrom<'createDistributionConfiguration'>) => Promise<ReturnTypeFrom<'createDistributionConfiguration'>>  = async params => {
  // undefined
    return this.client.createDistributionConfiguration(params as any).promise();
  }

  createImage: (params: RawParamsFrom<'createImage'>) => Promise<ReturnTypeFrom<'createImage'>>  = async params => {
  // undefined
    return this.client.createImage(params as any).promise();
  }

  createImagePipeline: (params: RawParamsFrom<'createImagePipeline'>) => Promise<ReturnTypeFrom<'createImagePipeline'>>  = async params => {
  // undefined
    return this.client.createImagePipeline(params as any).promise();
  }

  createImageRecipe: (params: RawParamsFrom<'createImageRecipe'>) => Promise<ReturnTypeFrom<'createImageRecipe'>>  = async params => {
  // undefined
    return this.client.createImageRecipe(params as any).promise();
  }

  createInfrastructureConfiguration: (params: RawParamsFrom<'createInfrastructureConfiguration'>) => Promise<ReturnTypeFrom<'createInfrastructureConfiguration'>>  = async params => {
  // undefined
    return this.client.createInfrastructureConfiguration(params as any).promise();
  }

  deleteComponent: (params: RawParamsFrom<'deleteComponent'>) => Promise<ReturnTypeFrom<'deleteComponent'>>  = async params => {
  // undefined
    return this.client.deleteComponent(params as any).promise();
  }

  deleteContainerRecipe: (params: RawParamsFrom<'deleteContainerRecipe'>) => Promise<ReturnTypeFrom<'deleteContainerRecipe'>>  = async params => {
  // undefined
    return this.client.deleteContainerRecipe(params as any).promise();
  }

  deleteDistributionConfiguration: (params: RawParamsFrom<'deleteDistributionConfiguration'>) => Promise<ReturnTypeFrom<'deleteDistributionConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteDistributionConfiguration(params as any).promise();
  }

  deleteImage: (params: RawParamsFrom<'deleteImage'>) => Promise<ReturnTypeFrom<'deleteImage'>>  = async params => {
  // undefined
    return this.client.deleteImage(params as any).promise();
  }

  deleteImagePipeline: (params: RawParamsFrom<'deleteImagePipeline'>) => Promise<ReturnTypeFrom<'deleteImagePipeline'>>  = async params => {
  // undefined
    return this.client.deleteImagePipeline(params as any).promise();
  }

  deleteImageRecipe: (params: RawParamsFrom<'deleteImageRecipe'>) => Promise<ReturnTypeFrom<'deleteImageRecipe'>>  = async params => {
  // undefined
    return this.client.deleteImageRecipe(params as any).promise();
  }

  deleteInfrastructureConfiguration: (params: RawParamsFrom<'deleteInfrastructureConfiguration'>) => Promise<ReturnTypeFrom<'deleteInfrastructureConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteInfrastructureConfiguration(params as any).promise();
  }

  getComponent: (params: RawParamsFrom<'getComponent'>) => Promise<ReturnTypeFrom<'getComponent'>>  = async params => {
  // undefined
    return this.client.getComponent(params as any).promise();
  }

  getComponentPolicy: (params: RawParamsFrom<'getComponentPolicy'>) => Promise<ReturnTypeFrom<'getComponentPolicy'>>  = async params => {
  // undefined
    return this.client.getComponentPolicy(params as any).promise();
  }

  getContainerRecipe: (params: RawParamsFrom<'getContainerRecipe'>) => Promise<ReturnTypeFrom<'getContainerRecipe'>>  = async params => {
  // undefined
    return this.client.getContainerRecipe(params as any).promise();
  }

  getContainerRecipePolicy: (params: RawParamsFrom<'getContainerRecipePolicy'>) => Promise<ReturnTypeFrom<'getContainerRecipePolicy'>>  = async params => {
  // undefined
    return this.client.getContainerRecipePolicy(params as any).promise();
  }

  getDistributionConfiguration: (params: RawParamsFrom<'getDistributionConfiguration'>) => Promise<ReturnTypeFrom<'getDistributionConfiguration'>>  = async params => {
  // undefined
    return this.client.getDistributionConfiguration(params as any).promise();
  }

  getImage: (params: RawParamsFrom<'getImage'>) => Promise<ReturnTypeFrom<'getImage'>>  = async params => {
  // undefined
    return this.client.getImage(params as any).promise();
  }

  getImagePipeline: (params: RawParamsFrom<'getImagePipeline'>) => Promise<ReturnTypeFrom<'getImagePipeline'>>  = async params => {
  // undefined
    return this.client.getImagePipeline(params as any).promise();
  }

  getImagePolicy: (params: RawParamsFrom<'getImagePolicy'>) => Promise<ReturnTypeFrom<'getImagePolicy'>>  = async params => {
  // undefined
    return this.client.getImagePolicy(params as any).promise();
  }

  getImageRecipe: (params: RawParamsFrom<'getImageRecipe'>) => Promise<ReturnTypeFrom<'getImageRecipe'>>  = async params => {
  // undefined
    return this.client.getImageRecipe(params as any).promise();
  }

  getImageRecipePolicy: (params: RawParamsFrom<'getImageRecipePolicy'>) => Promise<ReturnTypeFrom<'getImageRecipePolicy'>>  = async params => {
  // undefined
    return this.client.getImageRecipePolicy(params as any).promise();
  }

  getInfrastructureConfiguration: (params: RawParamsFrom<'getInfrastructureConfiguration'>) => Promise<ReturnTypeFrom<'getInfrastructureConfiguration'>>  = async params => {
  // undefined
    return this.client.getInfrastructureConfiguration(params as any).promise();
  }

  importComponent: (params: RawParamsFrom<'importComponent'>) => Promise<ReturnTypeFrom<'importComponent'>>  = async params => {
  // undefined
    return this.client.importComponent(params as any).promise();
  }

  importVmImage: (params: RawParamsFrom<'importVmImage'>) => Promise<ReturnTypeFrom<'importVmImage'>>  = async params => {
  // undefined
    return this.client.importVmImage(params as any).promise();
  }

  async listComponentBuildVersions(params: { [K in keyof ParamsFrom<'listComponentBuildVersions', { next?: string, limit?: number }>]: ParamsFrom<'listComponentBuildVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComponentBuildVersions'>]-?: ReturnTypeFrom<'listComponentBuildVersions'>[K]}['componentSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"componentSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponentBuildVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.componentSummaryList ?? []) ? (result.componentSummaryList ?? []) : [result.componentSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listComponents(params: { [K in keyof ParamsFrom<'listComponents', { next?: string, limit?: number }>]: ParamsFrom<'listComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['componentVersionList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"componentVersionList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.componentVersionList ?? []) ? (result.componentVersionList ?? []) : [result.componentVersionList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listContainerRecipes(params: { [K in keyof ParamsFrom<'listContainerRecipes', { next?: string, limit?: number }>]: ParamsFrom<'listContainerRecipes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContainerRecipes'>]-?: ReturnTypeFrom<'listContainerRecipes'>[K]}['containerRecipeSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"containerRecipeSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listContainerRecipes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.containerRecipeSummaryList ?? []) ? (result.containerRecipeSummaryList ?? []) : [result.containerRecipeSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDistributionConfigurations(params: { [K in keyof ParamsFrom<'listDistributionConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'listDistributionConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDistributionConfigurations'>]-?: ReturnTypeFrom<'listDistributionConfigurations'>[K]}['distributionConfigurationSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"distributionConfigurationSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDistributionConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.distributionConfigurationSummaryList ?? []) ? (result.distributionConfigurationSummaryList ?? []) : [result.distributionConfigurationSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listImageBuildVersions(params: { [K in keyof ParamsFrom<'listImageBuildVersions', { next?: string, limit?: number }>]: ParamsFrom<'listImageBuildVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImageBuildVersions'>]-?: ReturnTypeFrom<'listImageBuildVersions'>[K]}['imageSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImageBuildVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.imageSummaryList ?? []) ? (result.imageSummaryList ?? []) : [result.imageSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listImagePackages(params: { [K in keyof ParamsFrom<'listImagePackages', { next?: string, limit?: number }>]: ParamsFrom<'listImagePackages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImagePackages'>]-?: ReturnTypeFrom<'listImagePackages'>[K]}['imagePackageList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imagePackageList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImagePackages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.imagePackageList ?? []) ? (result.imagePackageList ?? []) : [result.imagePackageList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listImagePipelineImages(params: { [K in keyof ParamsFrom<'listImagePipelineImages', { next?: string, limit?: number }>]: ParamsFrom<'listImagePipelineImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImagePipelineImages'>]-?: ReturnTypeFrom<'listImagePipelineImages'>[K]}['imageSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImagePipelineImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.imageSummaryList ?? []) ? (result.imageSummaryList ?? []) : [result.imageSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listImagePipelines(params: { [K in keyof ParamsFrom<'listImagePipelines', { next?: string, limit?: number }>]: ParamsFrom<'listImagePipelines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImagePipelines'>]-?: ReturnTypeFrom<'listImagePipelines'>[K]}['imagePipelineList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imagePipelineList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImagePipelines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.imagePipelineList ?? []) ? (result.imagePipelineList ?? []) : [result.imagePipelineList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listImageRecipes(params: { [K in keyof ParamsFrom<'listImageRecipes', { next?: string, limit?: number }>]: ParamsFrom<'listImageRecipes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImageRecipes'>]-?: ReturnTypeFrom<'listImageRecipes'>[K]}['imageRecipeSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageRecipeSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImageRecipes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.imageRecipeSummaryList ?? []) ? (result.imageRecipeSummaryList ?? []) : [result.imageRecipeSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listImages(params: { [K in keyof ParamsFrom<'listImages', { next?: string, limit?: number }>]: ParamsFrom<'listImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImages'>]-?: ReturnTypeFrom<'listImages'>[K]}['imageVersionList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageVersionList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.imageVersionList ?? []) ? (result.imageVersionList ?? []) : [result.imageVersionList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listInfrastructureConfigurations(params: { [K in keyof ParamsFrom<'listInfrastructureConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'listInfrastructureConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInfrastructureConfigurations'>]-?: ReturnTypeFrom<'listInfrastructureConfigurations'>[K]}['infrastructureConfigurationSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"infrastructureConfigurationSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listInfrastructureConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.infrastructureConfigurationSummaryList ?? []) ? (result.infrastructureConfigurationSummaryList ?? []) : [result.infrastructureConfigurationSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putComponentPolicy: (params: RawParamsFrom<'putComponentPolicy'>) => Promise<ReturnTypeFrom<'putComponentPolicy'>>  = async params => {
  // undefined
    return this.client.putComponentPolicy(params as any).promise();
  }

  putContainerRecipePolicy: (params: RawParamsFrom<'putContainerRecipePolicy'>) => Promise<ReturnTypeFrom<'putContainerRecipePolicy'>>  = async params => {
  // undefined
    return this.client.putContainerRecipePolicy(params as any).promise();
  }

  putImagePolicy: (params: RawParamsFrom<'putImagePolicy'>) => Promise<ReturnTypeFrom<'putImagePolicy'>>  = async params => {
  // undefined
    return this.client.putImagePolicy(params as any).promise();
  }

  putImageRecipePolicy: (params: RawParamsFrom<'putImageRecipePolicy'>) => Promise<ReturnTypeFrom<'putImageRecipePolicy'>>  = async params => {
  // undefined
    return this.client.putImageRecipePolicy(params as any).promise();
  }

  startImagePipelineExecution: (params: RawParamsFrom<'startImagePipelineExecution'>) => Promise<ReturnTypeFrom<'startImagePipelineExecution'>>  = async params => {
  // undefined
    return this.client.startImagePipelineExecution(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDistributionConfiguration: (params: RawParamsFrom<'updateDistributionConfiguration'>) => Promise<ReturnTypeFrom<'updateDistributionConfiguration'>>  = async params => {
  // undefined
    return this.client.updateDistributionConfiguration(params as any).promise();
  }

  updateImagePipeline: (params: RawParamsFrom<'updateImagePipeline'>) => Promise<ReturnTypeFrom<'updateImagePipeline'>>  = async params => {
  // undefined
    return this.client.updateImagePipeline(params as any).promise();
  }

  updateInfrastructureConfiguration: (params: RawParamsFrom<'updateInfrastructureConfiguration'>) => Promise<ReturnTypeFrom<'updateInfrastructureConfiguration'>>  = async params => {
  // undefined
    return this.client.updateInfrastructureConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSImagebuilder): Imagebuilder {
    return new Imagebuilder(client) as any;
  }
  
  static client(options?: AWSImagebuilder.Types.ClientConfiguration): Imagebuilder {
    return new Imagebuilder(new AWSImagebuilder(options)) as any;
  }
}  
