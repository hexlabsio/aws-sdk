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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'imagebuilder';
    global: false;
    category: 'Compute'
    topLevelCalls: readonly ["listComponents","listContainerRecipes","listDistributionConfigurations","listImagePipelines","listImageRecipes","listImages","listInfrastructureConfigurations"];
    
  cancelImageCreation: FunctionTypeFrom<'cancelImageCreation'>;

  createComponent: FunctionTypeFrom<'createComponent'>;

  createContainerRecipe: FunctionTypeFrom<'createContainerRecipe'>;

  createDistributionConfiguration: FunctionTypeFrom<'createDistributionConfiguration'>;

  createImage: FunctionTypeFrom<'createImage'>;

  createImagePipeline: FunctionTypeFrom<'createImagePipeline'>;

  createImageRecipe: FunctionTypeFrom<'createImageRecipe'>;

  createInfrastructureConfiguration: FunctionTypeFrom<'createInfrastructureConfiguration'>;

  deleteComponent: FunctionTypeFrom<'deleteComponent'>;

  deleteContainerRecipe: FunctionTypeFrom<'deleteContainerRecipe'>;

  deleteDistributionConfiguration: FunctionTypeFrom<'deleteDistributionConfiguration'>;

  deleteImage: FunctionTypeFrom<'deleteImage'>;

  deleteImagePipeline: FunctionTypeFrom<'deleteImagePipeline'>;

  deleteImageRecipe: FunctionTypeFrom<'deleteImageRecipe'>;

  deleteInfrastructureConfiguration: FunctionTypeFrom<'deleteInfrastructureConfiguration'>;

  getComponent: FunctionTypeFrom<'getComponent'>;

  getComponentPolicy: FunctionTypeFrom<'getComponentPolicy'>;

  getContainerRecipe: FunctionTypeFrom<'getContainerRecipe'>;

  getContainerRecipePolicy: FunctionTypeFrom<'getContainerRecipePolicy'>;

  getDistributionConfiguration: FunctionTypeFrom<'getDistributionConfiguration'>;

  getImage: FunctionTypeFrom<'getImage'>;

  getImagePipeline: FunctionTypeFrom<'getImagePipeline'>;

  getImagePolicy: FunctionTypeFrom<'getImagePolicy'>;

  getImageRecipe: FunctionTypeFrom<'getImageRecipe'>;

  getImageRecipePolicy: FunctionTypeFrom<'getImageRecipePolicy'>;

  getInfrastructureConfiguration: FunctionTypeFrom<'getInfrastructureConfiguration'>;

  importComponent: FunctionTypeFrom<'importComponent'>;

  importVmImage: FunctionTypeFrom<'importVmImage'>;

  listComponentBuildVersions(params: { [K in keyof Omit<ParamsFrom<'listComponentBuildVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listComponentBuildVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponentBuildVersions'>]-?: ReturnTypeFrom<'listComponentBuildVersions'>[K]}['componentSummaryList'] }>
  ;

  listComponents(params: { [K in keyof Omit<ParamsFrom<'listComponents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['componentVersionList'] }>
  listComponents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['componentVersionList'] }>;

  listContainerRecipes(params: { [K in keyof Omit<ParamsFrom<'listContainerRecipes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listContainerRecipes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContainerRecipes'>]-?: ReturnTypeFrom<'listContainerRecipes'>[K]}['containerRecipeSummaryList'] }>
  listContainerRecipes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContainerRecipes'>]-?: ReturnTypeFrom<'listContainerRecipes'>[K]}['containerRecipeSummaryList'] }>;

  listDistributionConfigurations(params: { [K in keyof Omit<ParamsFrom<'listDistributionConfigurations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDistributionConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDistributionConfigurations'>]-?: ReturnTypeFrom<'listDistributionConfigurations'>[K]}['distributionConfigurationSummaryList'] }>
  listDistributionConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDistributionConfigurations'>]-?: ReturnTypeFrom<'listDistributionConfigurations'>[K]}['distributionConfigurationSummaryList'] }>;

  listImageBuildVersions(params: { [K in keyof Omit<ParamsFrom<'listImageBuildVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listImageBuildVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImageBuildVersions'>]-?: ReturnTypeFrom<'listImageBuildVersions'>[K]}['imageSummaryList'] }>
  ;

  listImagePackages(params: { [K in keyof Omit<ParamsFrom<'listImagePackages', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listImagePackages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImagePackages'>]-?: ReturnTypeFrom<'listImagePackages'>[K]}['imagePackageList'] }>
  ;

  listImagePipelineImages(params: { [K in keyof Omit<ParamsFrom<'listImagePipelineImages', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listImagePipelineImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImagePipelineImages'>]-?: ReturnTypeFrom<'listImagePipelineImages'>[K]}['imageSummaryList'] }>
  ;

  listImagePipelines(params: { [K in keyof Omit<ParamsFrom<'listImagePipelines', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listImagePipelines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImagePipelines'>]-?: ReturnTypeFrom<'listImagePipelines'>[K]}['imagePipelineList'] }>
  listImagePipelines(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImagePipelines'>]-?: ReturnTypeFrom<'listImagePipelines'>[K]}['imagePipelineList'] }>;

  listImageRecipes(params: { [K in keyof Omit<ParamsFrom<'listImageRecipes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listImageRecipes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImageRecipes'>]-?: ReturnTypeFrom<'listImageRecipes'>[K]}['imageRecipeSummaryList'] }>
  listImageRecipes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImageRecipes'>]-?: ReturnTypeFrom<'listImageRecipes'>[K]}['imageRecipeSummaryList'] }>;

  listImages(params: { [K in keyof Omit<ParamsFrom<'listImages', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImages'>]-?: ReturnTypeFrom<'listImages'>[K]}['imageVersionList'] }>
  listImages(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImages'>]-?: ReturnTypeFrom<'listImages'>[K]}['imageVersionList'] }>;

  listInfrastructureConfigurations(params: { [K in keyof Omit<ParamsFrom<'listInfrastructureConfigurations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listInfrastructureConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInfrastructureConfigurations'>]-?: ReturnTypeFrom<'listInfrastructureConfigurations'>[K]}['infrastructureConfigurationSummaryList'] }>
  listInfrastructureConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInfrastructureConfigurations'>]-?: ReturnTypeFrom<'listInfrastructureConfigurations'>[K]}['infrastructureConfigurationSummaryList'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putComponentPolicy: FunctionTypeFrom<'putComponentPolicy'>;

  putContainerRecipePolicy: FunctionTypeFrom<'putContainerRecipePolicy'>;

  putImagePolicy: FunctionTypeFrom<'putImagePolicy'>;

  putImageRecipePolicy: FunctionTypeFrom<'putImageRecipePolicy'>;

  startImagePipelineExecution: FunctionTypeFrom<'startImagePipelineExecution'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDistributionConfiguration: FunctionTypeFrom<'updateDistributionConfiguration'>;

  updateImagePipeline: FunctionTypeFrom<'updateImagePipeline'>;

  updateInfrastructureConfiguration: FunctionTypeFrom<'updateInfrastructureConfiguration'>
}
 
export class Imagebuilder implements ClientType {
  private constructor(private readonly client: AWSImagebuilder) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'imagebuilder';
  public readonly global = false;
  public readonly category = 'Compute';
  public readonly topLevelCalls = ["listComponents","listContainerRecipes","listDistributionConfigurations","listImagePipelines","listImageRecipes","listImages","listInfrastructureConfigurations"] as const;
  
  async cancelImageCreation(...args: any): Promise<any> {
  // undefined
    return this.client.cancelImageCreation(...args).promise()
  }

  async createComponent(...args: any): Promise<any> {
  // undefined
    return this.client.createComponent(...args).promise()
  }

  async createContainerRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.createContainerRecipe(...args).promise()
  }

  async createDistributionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createDistributionConfiguration(...args).promise()
  }

  async createImage(...args: any): Promise<any> {
  // undefined
    return this.client.createImage(...args).promise()
  }

  async createImagePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createImagePipeline(...args).promise()
  }

  async createImageRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.createImageRecipe(...args).promise()
  }

  async createInfrastructureConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createInfrastructureConfiguration(...args).promise()
  }

  async deleteComponent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteComponent(...args).promise()
  }

  async deleteContainerRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContainerRecipe(...args).promise()
  }

  async deleteDistributionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDistributionConfiguration(...args).promise()
  }

  async deleteImage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImage(...args).promise()
  }

  async deleteImagePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImagePipeline(...args).promise()
  }

  async deleteImageRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImageRecipe(...args).promise()
  }

  async deleteInfrastructureConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInfrastructureConfiguration(...args).promise()
  }

  async getComponent(...args: any): Promise<any> {
  // undefined
    return this.client.getComponent(...args).promise()
  }

  async getComponentPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getComponentPolicy(...args).promise()
  }

  async getContainerRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerRecipe(...args).promise()
  }

  async getContainerRecipePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerRecipePolicy(...args).promise()
  }

  async getDistributionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getDistributionConfiguration(...args).promise()
  }

  async getImage(...args: any): Promise<any> {
  // undefined
    return this.client.getImage(...args).promise()
  }

  async getImagePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.getImagePipeline(...args).promise()
  }

  async getImagePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getImagePolicy(...args).promise()
  }

  async getImageRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.getImageRecipe(...args).promise()
  }

  async getImageRecipePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getImageRecipePolicy(...args).promise()
  }

  async getInfrastructureConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getInfrastructureConfiguration(...args).promise()
  }

  async importComponent(...args: any): Promise<any> {
  // undefined
    return this.client.importComponent(...args).promise()
  }

  async importVmImage(...args: any): Promise<any> {
  // undefined
    return this.client.importVmImage(...args).promise()
  }

  async listComponentBuildVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"componentSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponentBuildVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.componentSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"componentVersionList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.componentVersionList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContainerRecipes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"containerRecipeSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listContainerRecipes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.containerRecipeSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDistributionConfigurations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"distributionConfigurationSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDistributionConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.distributionConfigurationSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImageBuildVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImageBuildVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.imageSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImagePackages(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imagePackageList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImagePackages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.imagePackageList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImagePipelineImages(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImagePipelineImages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.imageSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImagePipelines(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imagePipelineList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImagePipelines(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.imagePipelineList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImageRecipes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageRecipeSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImageRecipes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.imageRecipeSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImages(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageVersionList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.imageVersionList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInfrastructureConfigurations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"infrastructureConfigurationSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listInfrastructureConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.infrastructureConfigurationSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putComponentPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putComponentPolicy(...args).promise()
  }

  async putContainerRecipePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putContainerRecipePolicy(...args).promise()
  }

  async putImagePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putImagePolicy(...args).promise()
  }

  async putImageRecipePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putImageRecipePolicy(...args).promise()
  }

  async startImagePipelineExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startImagePipelineExecution(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDistributionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateDistributionConfiguration(...args).promise()
  }

  async updateImagePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.updateImagePipeline(...args).promise()
  }

  async updateInfrastructureConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateInfrastructureConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSImagebuilder): ClientType {
    return new Imagebuilder(client) as any;
  }
  
  static client(options?: AWSImagebuilder.Types.ClientConfiguration): ClientType {
    return new Imagebuilder(new AWSImagebuilder(options)) as any;
  }
}  
