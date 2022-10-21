import { Request, SageMaker as AWSSageMaker } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSageMaker> = AWSSageMaker[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSageMaker> = AWSSageMaker[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSageMaker[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSageMaker, Extras> = AWSSageMaker[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSageMaker> = AWSSageMaker[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SageMaker {
  private constructor(private readonly client: AWSSageMaker) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sagemaker' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listActions","listAlgorithms","listAppImageConfigs","listApps","listArtifacts","listAssociations","listAutoMLJobs","listCodeRepositories","listCompilationJobs","listContexts","listDataQualityJobDefinitions","listDeviceFleets","listDevices","listDomains","listEdgeDeploymentPlans","listEdgePackagingJobs","listEndpointConfigs","listEndpoints","listExperiments","listFeatureGroups","listFlowDefinitions","listHumanTaskUis","listHyperParameterTuningJobs","listImages","listInferenceRecommendationsJobs","listLabelingJobs","listLineageGroups","listModelBiasJobDefinitions","listModelExplainabilityJobDefinitions","listModelMetadata","listModelPackageGroups","listModelPackages","listModelQualityJobDefinitions","listModels","listMonitoringExecutions","listMonitoringSchedules","listNotebookInstanceLifecycleConfigs","listNotebookInstances","listPipelineExecutionSteps","listPipelines","listProcessingJobs","listProjects","listStudioLifecycleConfigs","listSubscribedWorkteams","listTrainingJobs","listTransformJobs","listTrialComponents","listTrials","listUserProfiles","listWorkforces","listWorkteams","queryLineage"] as const;
  
  addAssociation: (params: RawParamsFrom<'addAssociation'>) => Promise<ReturnTypeFrom<'addAssociation'>>  = async params => {
  // undefined
    return this.client.addAssociation(params as any).promise();
  }

  addTags: (params: RawParamsFrom<'addTags'>) => Promise<ReturnTypeFrom<'addTags'>>  = async params => {
  // undefined
    return this.client.addTags(params as any).promise();
  }

  associateTrialComponent: (params: RawParamsFrom<'associateTrialComponent'>) => Promise<ReturnTypeFrom<'associateTrialComponent'>>  = async params => {
  // undefined
    return this.client.associateTrialComponent(params as any).promise();
  }

  batchDescribeModelPackage: (params: RawParamsFrom<'batchDescribeModelPackage'>) => Promise<ReturnTypeFrom<'batchDescribeModelPackage'>>  = async params => {
  // undefined
    return this.client.batchDescribeModelPackage(params as any).promise();
  }

  createAction: (params: RawParamsFrom<'createAction'>) => Promise<ReturnTypeFrom<'createAction'>>  = async params => {
  // undefined
    return this.client.createAction(params as any).promise();
  }

  createAlgorithm: (params: RawParamsFrom<'createAlgorithm'>) => Promise<ReturnTypeFrom<'createAlgorithm'>>  = async params => {
  // undefined
    return this.client.createAlgorithm(params as any).promise();
  }

  createApp: (params: RawParamsFrom<'createApp'>) => Promise<ReturnTypeFrom<'createApp'>>  = async params => {
  // undefined
    return this.client.createApp(params as any).promise();
  }

  createAppImageConfig: (params: RawParamsFrom<'createAppImageConfig'>) => Promise<ReturnTypeFrom<'createAppImageConfig'>>  = async params => {
  // undefined
    return this.client.createAppImageConfig(params as any).promise();
  }

  createArtifact: (params: RawParamsFrom<'createArtifact'>) => Promise<ReturnTypeFrom<'createArtifact'>>  = async params => {
  // undefined
    return this.client.createArtifact(params as any).promise();
  }

  createAutoMLJob: (params: RawParamsFrom<'createAutoMLJob'>) => Promise<ReturnTypeFrom<'createAutoMLJob'>>  = async params => {
  // undefined
    return this.client.createAutoMLJob(params as any).promise();
  }

  createCodeRepository: (params: RawParamsFrom<'createCodeRepository'>) => Promise<ReturnTypeFrom<'createCodeRepository'>>  = async params => {
  // undefined
    return this.client.createCodeRepository(params as any).promise();
  }

  createCompilationJob: (params: RawParamsFrom<'createCompilationJob'>) => Promise<ReturnTypeFrom<'createCompilationJob'>>  = async params => {
  // undefined
    return this.client.createCompilationJob(params as any).promise();
  }

  createContext: (params: RawParamsFrom<'createContext'>) => Promise<ReturnTypeFrom<'createContext'>>  = async params => {
  // undefined
    return this.client.createContext(params as any).promise();
  }

  createDataQualityJobDefinition: (params: RawParamsFrom<'createDataQualityJobDefinition'>) => Promise<ReturnTypeFrom<'createDataQualityJobDefinition'>>  = async params => {
  // undefined
    return this.client.createDataQualityJobDefinition(params as any).promise();
  }

  createDeviceFleet: (params: RawParamsFrom<'createDeviceFleet'>) => Promise<ReturnTypeFrom<'createDeviceFleet'>>  = async params => {
  // undefined
    return this.client.createDeviceFleet(params as any).promise();
  }

  createDomain: (params: RawParamsFrom<'createDomain'>) => Promise<ReturnTypeFrom<'createDomain'>>  = async params => {
  // undefined
    return this.client.createDomain(params as any).promise();
  }

  createEdgeDeploymentPlan: (params: RawParamsFrom<'createEdgeDeploymentPlan'>) => Promise<ReturnTypeFrom<'createEdgeDeploymentPlan'>>  = async params => {
  // undefined
    return this.client.createEdgeDeploymentPlan(params as any).promise();
  }

  createEdgeDeploymentStage: (params: RawParamsFrom<'createEdgeDeploymentStage'>) => Promise<ReturnTypeFrom<'createEdgeDeploymentStage'>>  = async params => {
  // undefined
    return this.client.createEdgeDeploymentStage(params as any).promise();
  }

  createEdgePackagingJob: (params: RawParamsFrom<'createEdgePackagingJob'>) => Promise<ReturnTypeFrom<'createEdgePackagingJob'>>  = async params => {
  // undefined
    return this.client.createEdgePackagingJob(params as any).promise();
  }

  createEndpoint: (params: RawParamsFrom<'createEndpoint'>) => Promise<ReturnTypeFrom<'createEndpoint'>>  = async params => {
  // undefined
    return this.client.createEndpoint(params as any).promise();
  }

  createEndpointConfig: (params: RawParamsFrom<'createEndpointConfig'>) => Promise<ReturnTypeFrom<'createEndpointConfig'>>  = async params => {
  // undefined
    return this.client.createEndpointConfig(params as any).promise();
  }

  createExperiment: (params: RawParamsFrom<'createExperiment'>) => Promise<ReturnTypeFrom<'createExperiment'>>  = async params => {
  // undefined
    return this.client.createExperiment(params as any).promise();
  }

  createFeatureGroup: (params: RawParamsFrom<'createFeatureGroup'>) => Promise<ReturnTypeFrom<'createFeatureGroup'>>  = async params => {
  // undefined
    return this.client.createFeatureGroup(params as any).promise();
  }

  createFlowDefinition: (params: RawParamsFrom<'createFlowDefinition'>) => Promise<ReturnTypeFrom<'createFlowDefinition'>>  = async params => {
  // undefined
    return this.client.createFlowDefinition(params as any).promise();
  }

  createHumanTaskUi: (params: RawParamsFrom<'createHumanTaskUi'>) => Promise<ReturnTypeFrom<'createHumanTaskUi'>>  = async params => {
  // undefined
    return this.client.createHumanTaskUi(params as any).promise();
  }

  createHyperParameterTuningJob: (params: RawParamsFrom<'createHyperParameterTuningJob'>) => Promise<ReturnTypeFrom<'createHyperParameterTuningJob'>>  = async params => {
  // undefined
    return this.client.createHyperParameterTuningJob(params as any).promise();
  }

  createImage: (params: RawParamsFrom<'createImage'>) => Promise<ReturnTypeFrom<'createImage'>>  = async params => {
  // undefined
    return this.client.createImage(params as any).promise();
  }

  createImageVersion: (params: RawParamsFrom<'createImageVersion'>) => Promise<ReturnTypeFrom<'createImageVersion'>>  = async params => {
  // undefined
    return this.client.createImageVersion(params as any).promise();
  }

  createInferenceRecommendationsJob: (params: RawParamsFrom<'createInferenceRecommendationsJob'>) => Promise<ReturnTypeFrom<'createInferenceRecommendationsJob'>>  = async params => {
  // undefined
    return this.client.createInferenceRecommendationsJob(params as any).promise();
  }

  createLabelingJob: (params: RawParamsFrom<'createLabelingJob'>) => Promise<ReturnTypeFrom<'createLabelingJob'>>  = async params => {
  // undefined
    return this.client.createLabelingJob(params as any).promise();
  }

  createModel: (params: RawParamsFrom<'createModel'>) => Promise<ReturnTypeFrom<'createModel'>>  = async params => {
  // undefined
    return this.client.createModel(params as any).promise();
  }

  createModelBiasJobDefinition: (params: RawParamsFrom<'createModelBiasJobDefinition'>) => Promise<ReturnTypeFrom<'createModelBiasJobDefinition'>>  = async params => {
  // undefined
    return this.client.createModelBiasJobDefinition(params as any).promise();
  }

  createModelExplainabilityJobDefinition: (params: RawParamsFrom<'createModelExplainabilityJobDefinition'>) => Promise<ReturnTypeFrom<'createModelExplainabilityJobDefinition'>>  = async params => {
  // undefined
    return this.client.createModelExplainabilityJobDefinition(params as any).promise();
  }

  createModelPackage: (params: RawParamsFrom<'createModelPackage'>) => Promise<ReturnTypeFrom<'createModelPackage'>>  = async params => {
  // undefined
    return this.client.createModelPackage(params as any).promise();
  }

  createModelPackageGroup: (params: RawParamsFrom<'createModelPackageGroup'>) => Promise<ReturnTypeFrom<'createModelPackageGroup'>>  = async params => {
  // undefined
    return this.client.createModelPackageGroup(params as any).promise();
  }

  createModelQualityJobDefinition: (params: RawParamsFrom<'createModelQualityJobDefinition'>) => Promise<ReturnTypeFrom<'createModelQualityJobDefinition'>>  = async params => {
  // undefined
    return this.client.createModelQualityJobDefinition(params as any).promise();
  }

  createMonitoringSchedule: (params: RawParamsFrom<'createMonitoringSchedule'>) => Promise<ReturnTypeFrom<'createMonitoringSchedule'>>  = async params => {
  // undefined
    return this.client.createMonitoringSchedule(params as any).promise();
  }

  createNotebookInstance: (params: RawParamsFrom<'createNotebookInstance'>) => Promise<ReturnTypeFrom<'createNotebookInstance'>>  = async params => {
  // undefined
    return this.client.createNotebookInstance(params as any).promise();
  }

  createNotebookInstanceLifecycleConfig: (params: RawParamsFrom<'createNotebookInstanceLifecycleConfig'>) => Promise<ReturnTypeFrom<'createNotebookInstanceLifecycleConfig'>>  = async params => {
  // undefined
    return this.client.createNotebookInstanceLifecycleConfig(params as any).promise();
  }

  createPipeline: (params: RawParamsFrom<'createPipeline'>) => Promise<ReturnTypeFrom<'createPipeline'>>  = async params => {
  // undefined
    return this.client.createPipeline(params as any).promise();
  }

  createPresignedDomainUrl: (params: RawParamsFrom<'createPresignedDomainUrl'>) => Promise<ReturnTypeFrom<'createPresignedDomainUrl'>>  = async params => {
  // undefined
    return this.client.createPresignedDomainUrl(params as any).promise();
  }

  createPresignedNotebookInstanceUrl: (params: RawParamsFrom<'createPresignedNotebookInstanceUrl'>) => Promise<ReturnTypeFrom<'createPresignedNotebookInstanceUrl'>>  = async params => {
  // undefined
    return this.client.createPresignedNotebookInstanceUrl(params as any).promise();
  }

  createProcessingJob: (params: RawParamsFrom<'createProcessingJob'>) => Promise<ReturnTypeFrom<'createProcessingJob'>>  = async params => {
  // undefined
    return this.client.createProcessingJob(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  createStudioLifecycleConfig: (params: RawParamsFrom<'createStudioLifecycleConfig'>) => Promise<ReturnTypeFrom<'createStudioLifecycleConfig'>>  = async params => {
  // undefined
    return this.client.createStudioLifecycleConfig(params as any).promise();
  }

  createTrainingJob: (params: RawParamsFrom<'createTrainingJob'>) => Promise<ReturnTypeFrom<'createTrainingJob'>>  = async params => {
  // undefined
    return this.client.createTrainingJob(params as any).promise();
  }

  createTransformJob: (params: RawParamsFrom<'createTransformJob'>) => Promise<ReturnTypeFrom<'createTransformJob'>>  = async params => {
  // undefined
    return this.client.createTransformJob(params as any).promise();
  }

  createTrial: (params: RawParamsFrom<'createTrial'>) => Promise<ReturnTypeFrom<'createTrial'>>  = async params => {
  // undefined
    return this.client.createTrial(params as any).promise();
  }

  createTrialComponent: (params: RawParamsFrom<'createTrialComponent'>) => Promise<ReturnTypeFrom<'createTrialComponent'>>  = async params => {
  // undefined
    return this.client.createTrialComponent(params as any).promise();
  }

  createUserProfile: (params: RawParamsFrom<'createUserProfile'>) => Promise<ReturnTypeFrom<'createUserProfile'>>  = async params => {
  // undefined
    return this.client.createUserProfile(params as any).promise();
  }

  createWorkforce: (params: RawParamsFrom<'createWorkforce'>) => Promise<ReturnTypeFrom<'createWorkforce'>>  = async params => {
  // undefined
    return this.client.createWorkforce(params as any).promise();
  }

  createWorkteam: (params: RawParamsFrom<'createWorkteam'>) => Promise<ReturnTypeFrom<'createWorkteam'>>  = async params => {
  // undefined
    return this.client.createWorkteam(params as any).promise();
  }

  deleteAction: (params: RawParamsFrom<'deleteAction'>) => Promise<ReturnTypeFrom<'deleteAction'>>  = async params => {
  // undefined
    return this.client.deleteAction(params as any).promise();
  }

  deleteAlgorithm: (params: RawParamsFrom<'deleteAlgorithm'>) => Promise<ReturnTypeFrom<'deleteAlgorithm'>>  = async params => {
  // undefined
    return this.client.deleteAlgorithm(params as any).promise();
  }

  deleteApp: (params: RawParamsFrom<'deleteApp'>) => Promise<ReturnTypeFrom<'deleteApp'>>  = async params => {
  // undefined
    return this.client.deleteApp(params as any).promise();
  }

  deleteAppImageConfig: (params: RawParamsFrom<'deleteAppImageConfig'>) => Promise<ReturnTypeFrom<'deleteAppImageConfig'>>  = async params => {
  // undefined
    return this.client.deleteAppImageConfig(params as any).promise();
  }

  deleteArtifact: (params: RawParamsFrom<'deleteArtifact'>) => Promise<ReturnTypeFrom<'deleteArtifact'>>  = async params => {
  // undefined
    return this.client.deleteArtifact(params as any).promise();
  }

  deleteAssociation: (params: RawParamsFrom<'deleteAssociation'>) => Promise<ReturnTypeFrom<'deleteAssociation'>>  = async params => {
  // undefined
    return this.client.deleteAssociation(params as any).promise();
  }

  deleteCodeRepository: (params: RawParamsFrom<'deleteCodeRepository'>) => Promise<ReturnTypeFrom<'deleteCodeRepository'>>  = async params => {
  // undefined
    return this.client.deleteCodeRepository(params as any).promise();
  }

  deleteContext: (params: RawParamsFrom<'deleteContext'>) => Promise<ReturnTypeFrom<'deleteContext'>>  = async params => {
  // undefined
    return this.client.deleteContext(params as any).promise();
  }

  deleteDataQualityJobDefinition: (params: RawParamsFrom<'deleteDataQualityJobDefinition'>) => Promise<ReturnTypeFrom<'deleteDataQualityJobDefinition'>>  = async params => {
  // undefined
    return this.client.deleteDataQualityJobDefinition(params as any).promise();
  }

  deleteDeviceFleet: (params: RawParamsFrom<'deleteDeviceFleet'>) => Promise<ReturnTypeFrom<'deleteDeviceFleet'>>  = async params => {
  // undefined
    return this.client.deleteDeviceFleet(params as any).promise();
  }

  deleteDomain: (params: RawParamsFrom<'deleteDomain'>) => Promise<ReturnTypeFrom<'deleteDomain'>>  = async params => {
  // undefined
    return this.client.deleteDomain(params as any).promise();
  }

  deleteEdgeDeploymentPlan: (params: RawParamsFrom<'deleteEdgeDeploymentPlan'>) => Promise<ReturnTypeFrom<'deleteEdgeDeploymentPlan'>>  = async params => {
  // undefined
    return this.client.deleteEdgeDeploymentPlan(params as any).promise();
  }

  deleteEdgeDeploymentStage: (params: RawParamsFrom<'deleteEdgeDeploymentStage'>) => Promise<ReturnTypeFrom<'deleteEdgeDeploymentStage'>>  = async params => {
  // undefined
    return this.client.deleteEdgeDeploymentStage(params as any).promise();
  }

  deleteEndpoint: (params: RawParamsFrom<'deleteEndpoint'>) => Promise<ReturnTypeFrom<'deleteEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteEndpoint(params as any).promise();
  }

  deleteEndpointConfig: (params: RawParamsFrom<'deleteEndpointConfig'>) => Promise<ReturnTypeFrom<'deleteEndpointConfig'>>  = async params => {
  // undefined
    return this.client.deleteEndpointConfig(params as any).promise();
  }

  deleteExperiment: (params: RawParamsFrom<'deleteExperiment'>) => Promise<ReturnTypeFrom<'deleteExperiment'>>  = async params => {
  // undefined
    return this.client.deleteExperiment(params as any).promise();
  }

  deleteFeatureGroup: (params: RawParamsFrom<'deleteFeatureGroup'>) => Promise<ReturnTypeFrom<'deleteFeatureGroup'>>  = async params => {
  // undefined
    return this.client.deleteFeatureGroup(params as any).promise();
  }

  deleteFlowDefinition: (params: RawParamsFrom<'deleteFlowDefinition'>) => Promise<ReturnTypeFrom<'deleteFlowDefinition'>>  = async params => {
  // undefined
    return this.client.deleteFlowDefinition(params as any).promise();
  }

  deleteHumanTaskUi: (params: RawParamsFrom<'deleteHumanTaskUi'>) => Promise<ReturnTypeFrom<'deleteHumanTaskUi'>>  = async params => {
  // undefined
    return this.client.deleteHumanTaskUi(params as any).promise();
  }

  deleteImage: (params: RawParamsFrom<'deleteImage'>) => Promise<ReturnTypeFrom<'deleteImage'>>  = async params => {
  // undefined
    return this.client.deleteImage(params as any).promise();
  }

  deleteImageVersion: (params: RawParamsFrom<'deleteImageVersion'>) => Promise<ReturnTypeFrom<'deleteImageVersion'>>  = async params => {
  // undefined
    return this.client.deleteImageVersion(params as any).promise();
  }

  deleteModel: (params: RawParamsFrom<'deleteModel'>) => Promise<ReturnTypeFrom<'deleteModel'>>  = async params => {
  // undefined
    return this.client.deleteModel(params as any).promise();
  }

  deleteModelBiasJobDefinition: (params: RawParamsFrom<'deleteModelBiasJobDefinition'>) => Promise<ReturnTypeFrom<'deleteModelBiasJobDefinition'>>  = async params => {
  // undefined
    return this.client.deleteModelBiasJobDefinition(params as any).promise();
  }

  deleteModelExplainabilityJobDefinition: (params: RawParamsFrom<'deleteModelExplainabilityJobDefinition'>) => Promise<ReturnTypeFrom<'deleteModelExplainabilityJobDefinition'>>  = async params => {
  // undefined
    return this.client.deleteModelExplainabilityJobDefinition(params as any).promise();
  }

  deleteModelPackage: (params: RawParamsFrom<'deleteModelPackage'>) => Promise<ReturnTypeFrom<'deleteModelPackage'>>  = async params => {
  // undefined
    return this.client.deleteModelPackage(params as any).promise();
  }

  deleteModelPackageGroup: (params: RawParamsFrom<'deleteModelPackageGroup'>) => Promise<ReturnTypeFrom<'deleteModelPackageGroup'>>  = async params => {
  // undefined
    return this.client.deleteModelPackageGroup(params as any).promise();
  }

  deleteModelPackageGroupPolicy: (params: RawParamsFrom<'deleteModelPackageGroupPolicy'>) => Promise<ReturnTypeFrom<'deleteModelPackageGroupPolicy'>>  = async params => {
  // undefined
    return this.client.deleteModelPackageGroupPolicy(params as any).promise();
  }

  deleteModelQualityJobDefinition: (params: RawParamsFrom<'deleteModelQualityJobDefinition'>) => Promise<ReturnTypeFrom<'deleteModelQualityJobDefinition'>>  = async params => {
  // undefined
    return this.client.deleteModelQualityJobDefinition(params as any).promise();
  }

  deleteMonitoringSchedule: (params: RawParamsFrom<'deleteMonitoringSchedule'>) => Promise<ReturnTypeFrom<'deleteMonitoringSchedule'>>  = async params => {
  // undefined
    return this.client.deleteMonitoringSchedule(params as any).promise();
  }

  deleteNotebookInstance: (params: RawParamsFrom<'deleteNotebookInstance'>) => Promise<ReturnTypeFrom<'deleteNotebookInstance'>>  = async params => {
  // undefined
    return this.client.deleteNotebookInstance(params as any).promise();
  }

  deleteNotebookInstanceLifecycleConfig: (params: RawParamsFrom<'deleteNotebookInstanceLifecycleConfig'>) => Promise<ReturnTypeFrom<'deleteNotebookInstanceLifecycleConfig'>>  = async params => {
  // undefined
    return this.client.deleteNotebookInstanceLifecycleConfig(params as any).promise();
  }

  deletePipeline: (params: RawParamsFrom<'deletePipeline'>) => Promise<ReturnTypeFrom<'deletePipeline'>>  = async params => {
  // undefined
    return this.client.deletePipeline(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  deleteStudioLifecycleConfig: (params: RawParamsFrom<'deleteStudioLifecycleConfig'>) => Promise<ReturnTypeFrom<'deleteStudioLifecycleConfig'>>  = async params => {
  // undefined
    return this.client.deleteStudioLifecycleConfig(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  deleteTrial: (params: RawParamsFrom<'deleteTrial'>) => Promise<ReturnTypeFrom<'deleteTrial'>>  = async params => {
  // undefined
    return this.client.deleteTrial(params as any).promise();
  }

  deleteTrialComponent: (params: RawParamsFrom<'deleteTrialComponent'>) => Promise<ReturnTypeFrom<'deleteTrialComponent'>>  = async params => {
  // undefined
    return this.client.deleteTrialComponent(params as any).promise();
  }

  deleteUserProfile: (params: RawParamsFrom<'deleteUserProfile'>) => Promise<ReturnTypeFrom<'deleteUserProfile'>>  = async params => {
  // undefined
    return this.client.deleteUserProfile(params as any).promise();
  }

  deleteWorkforce: (params: RawParamsFrom<'deleteWorkforce'>) => Promise<ReturnTypeFrom<'deleteWorkforce'>>  = async params => {
  // undefined
    return this.client.deleteWorkforce(params as any).promise();
  }

  deleteWorkteam: (params: RawParamsFrom<'deleteWorkteam'>) => Promise<ReturnTypeFrom<'deleteWorkteam'>>  = async params => {
  // undefined
    return this.client.deleteWorkteam(params as any).promise();
  }

  deregisterDevices: (params: RawParamsFrom<'deregisterDevices'>) => Promise<ReturnTypeFrom<'deregisterDevices'>>  = async params => {
  // undefined
    return this.client.deregisterDevices(params as any).promise();
  }

  describeAction: (params: RawParamsFrom<'describeAction'>) => Promise<ReturnTypeFrom<'describeAction'>>  = async params => {
  // undefined
    return this.client.describeAction(params as any).promise();
  }

  describeAlgorithm: (params: RawParamsFrom<'describeAlgorithm'>) => Promise<ReturnTypeFrom<'describeAlgorithm'>>  = async params => {
  // undefined
    return this.client.describeAlgorithm(params as any).promise();
  }

  describeApp: (params: RawParamsFrom<'describeApp'>) => Promise<ReturnTypeFrom<'describeApp'>>  = async params => {
  // undefined
    return this.client.describeApp(params as any).promise();
  }

  describeAppImageConfig: (params: RawParamsFrom<'describeAppImageConfig'>) => Promise<ReturnTypeFrom<'describeAppImageConfig'>>  = async params => {
  // undefined
    return this.client.describeAppImageConfig(params as any).promise();
  }

  describeArtifact: (params: RawParamsFrom<'describeArtifact'>) => Promise<ReturnTypeFrom<'describeArtifact'>>  = async params => {
  // undefined
    return this.client.describeArtifact(params as any).promise();
  }

  describeAutoMLJob: (params: RawParamsFrom<'describeAutoMLJob'>) => Promise<ReturnTypeFrom<'describeAutoMLJob'>>  = async params => {
  // undefined
    return this.client.describeAutoMLJob(params as any).promise();
  }

  describeCodeRepository: (params: RawParamsFrom<'describeCodeRepository'>) => Promise<ReturnTypeFrom<'describeCodeRepository'>>  = async params => {
  // undefined
    return this.client.describeCodeRepository(params as any).promise();
  }

  describeCompilationJob: (params: RawParamsFrom<'describeCompilationJob'>) => Promise<ReturnTypeFrom<'describeCompilationJob'>>  = async params => {
  // undefined
    return this.client.describeCompilationJob(params as any).promise();
  }

  describeContext: (params: RawParamsFrom<'describeContext'>) => Promise<ReturnTypeFrom<'describeContext'>>  = async params => {
  // undefined
    return this.client.describeContext(params as any).promise();
  }

  describeDataQualityJobDefinition: (params: RawParamsFrom<'describeDataQualityJobDefinition'>) => Promise<ReturnTypeFrom<'describeDataQualityJobDefinition'>>  = async params => {
  // undefined
    return this.client.describeDataQualityJobDefinition(params as any).promise();
  }

  describeDevice: (params: RawParamsFrom<'describeDevice'>) => Promise<ReturnTypeFrom<'describeDevice'>>  = async params => {
  // undefined
    return this.client.describeDevice(params as any).promise();
  }

  describeDeviceFleet: (params: RawParamsFrom<'describeDeviceFleet'>) => Promise<ReturnTypeFrom<'describeDeviceFleet'>>  = async params => {
  // undefined
    return this.client.describeDeviceFleet(params as any).promise();
  }

  describeDomain: (params: RawParamsFrom<'describeDomain'>) => Promise<ReturnTypeFrom<'describeDomain'>>  = async params => {
  // undefined
    return this.client.describeDomain(params as any).promise();
  }

  describeEdgeDeploymentPlan: (params: RawParamsFrom<'describeEdgeDeploymentPlan'>) => Promise<ReturnTypeFrom<'describeEdgeDeploymentPlan'>>  = async params => {
  // undefined
    return this.client.describeEdgeDeploymentPlan(params as any).promise();
  }

  describeEdgePackagingJob: (params: RawParamsFrom<'describeEdgePackagingJob'>) => Promise<ReturnTypeFrom<'describeEdgePackagingJob'>>  = async params => {
  // undefined
    return this.client.describeEdgePackagingJob(params as any).promise();
  }

  describeEndpoint: (params: RawParamsFrom<'describeEndpoint'>) => Promise<ReturnTypeFrom<'describeEndpoint'>>  = async params => {
  // undefined
    return this.client.describeEndpoint(params as any).promise();
  }

  describeEndpointConfig: (params: RawParamsFrom<'describeEndpointConfig'>) => Promise<ReturnTypeFrom<'describeEndpointConfig'>>  = async params => {
  // undefined
    return this.client.describeEndpointConfig(params as any).promise();
  }

  describeExperiment: (params: RawParamsFrom<'describeExperiment'>) => Promise<ReturnTypeFrom<'describeExperiment'>>  = async params => {
  // undefined
    return this.client.describeExperiment(params as any).promise();
  }

  describeFeatureGroup: (params: RawParamsFrom<'describeFeatureGroup'>) => Promise<ReturnTypeFrom<'describeFeatureGroup'>>  = async params => {
  // undefined
    return this.client.describeFeatureGroup(params as any).promise();
  }

  describeFeatureMetadata: (params: RawParamsFrom<'describeFeatureMetadata'>) => Promise<ReturnTypeFrom<'describeFeatureMetadata'>>  = async params => {
  // undefined
    return this.client.describeFeatureMetadata(params as any).promise();
  }

  describeFlowDefinition: (params: RawParamsFrom<'describeFlowDefinition'>) => Promise<ReturnTypeFrom<'describeFlowDefinition'>>  = async params => {
  // undefined
    return this.client.describeFlowDefinition(params as any).promise();
  }

  describeHumanTaskUi: (params: RawParamsFrom<'describeHumanTaskUi'>) => Promise<ReturnTypeFrom<'describeHumanTaskUi'>>  = async params => {
  // undefined
    return this.client.describeHumanTaskUi(params as any).promise();
  }

  describeHyperParameterTuningJob: (params: RawParamsFrom<'describeHyperParameterTuningJob'>) => Promise<ReturnTypeFrom<'describeHyperParameterTuningJob'>>  = async params => {
  // undefined
    return this.client.describeHyperParameterTuningJob(params as any).promise();
  }

  describeImage: (params: RawParamsFrom<'describeImage'>) => Promise<ReturnTypeFrom<'describeImage'>>  = async params => {
  // undefined
    return this.client.describeImage(params as any).promise();
  }

  describeImageVersion: (params: RawParamsFrom<'describeImageVersion'>) => Promise<ReturnTypeFrom<'describeImageVersion'>>  = async params => {
  // undefined
    return this.client.describeImageVersion(params as any).promise();
  }

  describeInferenceRecommendationsJob: (params: RawParamsFrom<'describeInferenceRecommendationsJob'>) => Promise<ReturnTypeFrom<'describeInferenceRecommendationsJob'>>  = async params => {
  // undefined
    return this.client.describeInferenceRecommendationsJob(params as any).promise();
  }

  describeLabelingJob: (params: RawParamsFrom<'describeLabelingJob'>) => Promise<ReturnTypeFrom<'describeLabelingJob'>>  = async params => {
  // undefined
    return this.client.describeLabelingJob(params as any).promise();
  }

  describeLineageGroup: (params: RawParamsFrom<'describeLineageGroup'>) => Promise<ReturnTypeFrom<'describeLineageGroup'>>  = async params => {
  // undefined
    return this.client.describeLineageGroup(params as any).promise();
  }

  describeModel: (params: RawParamsFrom<'describeModel'>) => Promise<ReturnTypeFrom<'describeModel'>>  = async params => {
  // undefined
    return this.client.describeModel(params as any).promise();
  }

  describeModelBiasJobDefinition: (params: RawParamsFrom<'describeModelBiasJobDefinition'>) => Promise<ReturnTypeFrom<'describeModelBiasJobDefinition'>>  = async params => {
  // undefined
    return this.client.describeModelBiasJobDefinition(params as any).promise();
  }

  describeModelExplainabilityJobDefinition: (params: RawParamsFrom<'describeModelExplainabilityJobDefinition'>) => Promise<ReturnTypeFrom<'describeModelExplainabilityJobDefinition'>>  = async params => {
  // undefined
    return this.client.describeModelExplainabilityJobDefinition(params as any).promise();
  }

  describeModelPackage: (params: RawParamsFrom<'describeModelPackage'>) => Promise<ReturnTypeFrom<'describeModelPackage'>>  = async params => {
  // undefined
    return this.client.describeModelPackage(params as any).promise();
  }

  describeModelPackageGroup: (params: RawParamsFrom<'describeModelPackageGroup'>) => Promise<ReturnTypeFrom<'describeModelPackageGroup'>>  = async params => {
  // undefined
    return this.client.describeModelPackageGroup(params as any).promise();
  }

  describeModelQualityJobDefinition: (params: RawParamsFrom<'describeModelQualityJobDefinition'>) => Promise<ReturnTypeFrom<'describeModelQualityJobDefinition'>>  = async params => {
  // undefined
    return this.client.describeModelQualityJobDefinition(params as any).promise();
  }

  describeMonitoringSchedule: (params: RawParamsFrom<'describeMonitoringSchedule'>) => Promise<ReturnTypeFrom<'describeMonitoringSchedule'>>  = async params => {
  // undefined
    return this.client.describeMonitoringSchedule(params as any).promise();
  }

  describeNotebookInstance: (params: RawParamsFrom<'describeNotebookInstance'>) => Promise<ReturnTypeFrom<'describeNotebookInstance'>>  = async params => {
  // undefined
    return this.client.describeNotebookInstance(params as any).promise();
  }

  describeNotebookInstanceLifecycleConfig: (params: RawParamsFrom<'describeNotebookInstanceLifecycleConfig'>) => Promise<ReturnTypeFrom<'describeNotebookInstanceLifecycleConfig'>>  = async params => {
  // undefined
    return this.client.describeNotebookInstanceLifecycleConfig(params as any).promise();
  }

  describePipeline: (params: RawParamsFrom<'describePipeline'>) => Promise<ReturnTypeFrom<'describePipeline'>>  = async params => {
  // undefined
    return this.client.describePipeline(params as any).promise();
  }

  describePipelineDefinitionForExecution: (params: RawParamsFrom<'describePipelineDefinitionForExecution'>) => Promise<ReturnTypeFrom<'describePipelineDefinitionForExecution'>>  = async params => {
  // undefined
    return this.client.describePipelineDefinitionForExecution(params as any).promise();
  }

  describePipelineExecution: (params: RawParamsFrom<'describePipelineExecution'>) => Promise<ReturnTypeFrom<'describePipelineExecution'>>  = async params => {
  // undefined
    return this.client.describePipelineExecution(params as any).promise();
  }

  describeProcessingJob: (params: RawParamsFrom<'describeProcessingJob'>) => Promise<ReturnTypeFrom<'describeProcessingJob'>>  = async params => {
  // undefined
    return this.client.describeProcessingJob(params as any).promise();
  }

  describeProject: (params: RawParamsFrom<'describeProject'>) => Promise<ReturnTypeFrom<'describeProject'>>  = async params => {
  // undefined
    return this.client.describeProject(params as any).promise();
  }

  describeStudioLifecycleConfig: (params: RawParamsFrom<'describeStudioLifecycleConfig'>) => Promise<ReturnTypeFrom<'describeStudioLifecycleConfig'>>  = async params => {
  // undefined
    return this.client.describeStudioLifecycleConfig(params as any).promise();
  }

  describeSubscribedWorkteam: (params: RawParamsFrom<'describeSubscribedWorkteam'>) => Promise<ReturnTypeFrom<'describeSubscribedWorkteam'>>  = async params => {
  // undefined
    return this.client.describeSubscribedWorkteam(params as any).promise();
  }

  describeTrainingJob: (params: RawParamsFrom<'describeTrainingJob'>) => Promise<ReturnTypeFrom<'describeTrainingJob'>>  = async params => {
  // undefined
    return this.client.describeTrainingJob(params as any).promise();
  }

  describeTransformJob: (params: RawParamsFrom<'describeTransformJob'>) => Promise<ReturnTypeFrom<'describeTransformJob'>>  = async params => {
  // undefined
    return this.client.describeTransformJob(params as any).promise();
  }

  describeTrial: (params: RawParamsFrom<'describeTrial'>) => Promise<ReturnTypeFrom<'describeTrial'>>  = async params => {
  // undefined
    return this.client.describeTrial(params as any).promise();
  }

  describeTrialComponent: (params: RawParamsFrom<'describeTrialComponent'>) => Promise<ReturnTypeFrom<'describeTrialComponent'>>  = async params => {
  // undefined
    return this.client.describeTrialComponent(params as any).promise();
  }

  describeUserProfile: (params: RawParamsFrom<'describeUserProfile'>) => Promise<ReturnTypeFrom<'describeUserProfile'>>  = async params => {
  // undefined
    return this.client.describeUserProfile(params as any).promise();
  }

  describeWorkforce: (params: RawParamsFrom<'describeWorkforce'>) => Promise<ReturnTypeFrom<'describeWorkforce'>>  = async params => {
  // undefined
    return this.client.describeWorkforce(params as any).promise();
  }

  describeWorkteam: (params: RawParamsFrom<'describeWorkteam'>) => Promise<ReturnTypeFrom<'describeWorkteam'>>  = async params => {
  // undefined
    return this.client.describeWorkteam(params as any).promise();
  }

  disableSagemakerServicecatalogPortfolio: (params: RawParamsFrom<'disableSagemakerServicecatalogPortfolio'>) => Promise<ReturnTypeFrom<'disableSagemakerServicecatalogPortfolio'>>  = async params => {
  // undefined
    return this.client.disableSagemakerServicecatalogPortfolio(params as any).promise();
  }

  disassociateTrialComponent: (params: RawParamsFrom<'disassociateTrialComponent'>) => Promise<ReturnTypeFrom<'disassociateTrialComponent'>>  = async params => {
  // undefined
    return this.client.disassociateTrialComponent(params as any).promise();
  }

  enableSagemakerServicecatalogPortfolio: (params: RawParamsFrom<'enableSagemakerServicecatalogPortfolio'>) => Promise<ReturnTypeFrom<'enableSagemakerServicecatalogPortfolio'>>  = async params => {
  // undefined
    return this.client.enableSagemakerServicecatalogPortfolio(params as any).promise();
  }

  getDeviceFleetReport: (params: RawParamsFrom<'getDeviceFleetReport'>) => Promise<ReturnTypeFrom<'getDeviceFleetReport'>>  = async params => {
  // undefined
    return this.client.getDeviceFleetReport(params as any).promise();
  }

  getLineageGroupPolicy: (params: RawParamsFrom<'getLineageGroupPolicy'>) => Promise<ReturnTypeFrom<'getLineageGroupPolicy'>>  = async params => {
  // undefined
    return this.client.getLineageGroupPolicy(params as any).promise();
  }

  getModelPackageGroupPolicy: (params: RawParamsFrom<'getModelPackageGroupPolicy'>) => Promise<ReturnTypeFrom<'getModelPackageGroupPolicy'>>  = async params => {
  // undefined
    return this.client.getModelPackageGroupPolicy(params as any).promise();
  }

  getSagemakerServicecatalogPortfolioStatus: (params: RawParamsFrom<'getSagemakerServicecatalogPortfolioStatus'>) => Promise<ReturnTypeFrom<'getSagemakerServicecatalogPortfolioStatus'>>  = async params => {
  // undefined
    return this.client.getSagemakerServicecatalogPortfolioStatus(params as any).promise();
  }

  getSearchSuggestions: (params: RawParamsFrom<'getSearchSuggestions'>) => Promise<ReturnTypeFrom<'getSearchSuggestions'>>  = async params => {
  // undefined
    return this.client.getSearchSuggestions(params as any).promise();
  }

  async listActions(params: { [K in keyof ParamsFrom<'listActions', { next?: string, limit?: number }>]: ParamsFrom<'listActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listActions'>]-?: ReturnTypeFrom<'listActions'>[K]}['ActionSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ActionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listActions' })).toString('base64');
    const member = (Array.isArray(result.ActionSummaries ?? []) ? (result.ActionSummaries ?? []) : [result.ActionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAlgorithms(params: { [K in keyof ParamsFrom<'listAlgorithms', { next?: string, limit?: number }>]: ParamsFrom<'listAlgorithms', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAlgorithms'>]-?: ReturnTypeFrom<'listAlgorithms'>[K]}['AlgorithmSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AlgorithmSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAlgorithms({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAlgorithms' })).toString('base64');
    const member = (Array.isArray(result.AlgorithmSummaryList ?? []) ? (result.AlgorithmSummaryList ?? []) : [result.AlgorithmSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAppImageConfigs(params: { [K in keyof ParamsFrom<'listAppImageConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listAppImageConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAppImageConfigs'>]-?: ReturnTypeFrom<'listAppImageConfigs'>[K]}['AppImageConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AppImageConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAppImageConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAppImageConfigs' })).toString('base64');
    const member = (Array.isArray(result.AppImageConfigs ?? []) ? (result.AppImageConfigs ?? []) : [result.AppImageConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listApps(params: { [K in keyof ParamsFrom<'listApps', { next?: string, limit?: number }>]: ParamsFrom<'listApps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApps'>]-?: ReturnTypeFrom<'listApps'>[K]}['Apps'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Apps"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listApps({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listApps' })).toString('base64');
    const member = (Array.isArray(result.Apps ?? []) ? (result.Apps ?? []) : [result.Apps]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listArtifacts(params: { [K in keyof ParamsFrom<'listArtifacts', { next?: string, limit?: number }>]: ParamsFrom<'listArtifacts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listArtifacts'>]-?: ReturnTypeFrom<'listArtifacts'>[K]}['ArtifactSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ArtifactSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listArtifacts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listArtifacts' })).toString('base64');
    const member = (Array.isArray(result.ArtifactSummaries ?? []) ? (result.ArtifactSummaries ?? []) : [result.ArtifactSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociations(params: { [K in keyof ParamsFrom<'listAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssociations'>]-?: ReturnTypeFrom<'listAssociations'>[K]}['AssociationSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociationSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAssociations' })).toString('base64');
    const member = (Array.isArray(result.AssociationSummaries ?? []) ? (result.AssociationSummaries ?? []) : [result.AssociationSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAutoMLJobs(params: { [K in keyof ParamsFrom<'listAutoMLJobs', { next?: string, limit?: number }>]: ParamsFrom<'listAutoMLJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAutoMLJobs'>]-?: ReturnTypeFrom<'listAutoMLJobs'>[K]}['AutoMLJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AutoMLJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAutoMLJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAutoMLJobs' })).toString('base64');
    const member = (Array.isArray(result.AutoMLJobSummaries ?? []) ? (result.AutoMLJobSummaries ?? []) : [result.AutoMLJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCandidatesForAutoMLJob(params: { [K in keyof ParamsFrom<'listCandidatesForAutoMLJob', { next?: string, limit?: number }>]: ParamsFrom<'listCandidatesForAutoMLJob', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCandidatesForAutoMLJob'>]-?: ReturnTypeFrom<'listCandidatesForAutoMLJob'>[K]}['Candidates'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Candidates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCandidatesForAutoMLJob({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCandidatesForAutoMLJob' })).toString('base64');
    const member = (Array.isArray(result.Candidates ?? []) ? (result.Candidates ?? []) : [result.Candidates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCodeRepositories(params: { [K in keyof ParamsFrom<'listCodeRepositories', { next?: string, limit?: number }>]: ParamsFrom<'listCodeRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCodeRepositories'>]-?: ReturnTypeFrom<'listCodeRepositories'>[K]}['CodeRepositorySummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CodeRepositorySummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCodeRepositories({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCodeRepositories' })).toString('base64');
    const member = (Array.isArray(result.CodeRepositorySummaryList ?? []) ? (result.CodeRepositorySummaryList ?? []) : [result.CodeRepositorySummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCompilationJobs(params: { [K in keyof ParamsFrom<'listCompilationJobs', { next?: string, limit?: number }>]: ParamsFrom<'listCompilationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCompilationJobs'>]-?: ReturnTypeFrom<'listCompilationJobs'>[K]}['CompilationJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CompilationJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCompilationJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCompilationJobs' })).toString('base64');
    const member = (Array.isArray(result.CompilationJobSummaries ?? []) ? (result.CompilationJobSummaries ?? []) : [result.CompilationJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContexts(params: { [K in keyof ParamsFrom<'listContexts', { next?: string, limit?: number }>]: ParamsFrom<'listContexts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContexts'>]-?: ReturnTypeFrom<'listContexts'>[K]}['ContextSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ContextSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContexts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listContexts' })).toString('base64');
    const member = (Array.isArray(result.ContextSummaries ?? []) ? (result.ContextSummaries ?? []) : [result.ContextSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataQualityJobDefinitions(params: { [K in keyof ParamsFrom<'listDataQualityJobDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'listDataQualityJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataQualityJobDefinitions'>]-?: ReturnTypeFrom<'listDataQualityJobDefinitions'>[K]}['JobDefinitionSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobDefinitionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataQualityJobDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDataQualityJobDefinitions' })).toString('base64');
    const member = (Array.isArray(result.JobDefinitionSummaries ?? []) ? (result.JobDefinitionSummaries ?? []) : [result.JobDefinitionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeviceFleets(params: { [K in keyof ParamsFrom<'listDeviceFleets', { next?: string, limit?: number }>]: ParamsFrom<'listDeviceFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeviceFleets'>]-?: ReturnTypeFrom<'listDeviceFleets'>[K]}['DeviceFleetSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DeviceFleetSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDeviceFleets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDeviceFleets' })).toString('base64');
    const member = (Array.isArray(result.DeviceFleetSummaries ?? []) ? (result.DeviceFleetSummaries ?? []) : [result.DeviceFleetSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDevices(params: { [K in keyof ParamsFrom<'listDevices', { next?: string, limit?: number }>]: ParamsFrom<'listDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDevices'>]-?: ReturnTypeFrom<'listDevices'>[K]}['DeviceSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DeviceSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDevices' })).toString('base64');
    const member = (Array.isArray(result.DeviceSummaries ?? []) ? (result.DeviceSummaries ?? []) : [result.DeviceSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDomains(params: { [K in keyof ParamsFrom<'listDomains', { next?: string, limit?: number }>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['Domains'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Domains"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDomains({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDomains' })).toString('base64');
    const member = (Array.isArray(result.Domains ?? []) ? (result.Domains ?? []) : [result.Domains]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEdgeDeploymentPlans(params: { [K in keyof ParamsFrom<'listEdgeDeploymentPlans', { next?: string, limit?: number }>]: ParamsFrom<'listEdgeDeploymentPlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEdgeDeploymentPlans'>]-?: ReturnTypeFrom<'listEdgeDeploymentPlans'>[K]}['EdgeDeploymentPlanSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EdgeDeploymentPlanSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEdgeDeploymentPlans({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEdgeDeploymentPlans' })).toString('base64');
    const member = (Array.isArray(result.EdgeDeploymentPlanSummaries ?? []) ? (result.EdgeDeploymentPlanSummaries ?? []) : [result.EdgeDeploymentPlanSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEdgePackagingJobs(params: { [K in keyof ParamsFrom<'listEdgePackagingJobs', { next?: string, limit?: number }>]: ParamsFrom<'listEdgePackagingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEdgePackagingJobs'>]-?: ReturnTypeFrom<'listEdgePackagingJobs'>[K]}['EdgePackagingJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EdgePackagingJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEdgePackagingJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEdgePackagingJobs' })).toString('base64');
    const member = (Array.isArray(result.EdgePackagingJobSummaries ?? []) ? (result.EdgePackagingJobSummaries ?? []) : [result.EdgePackagingJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEndpointConfigs(params: { [K in keyof ParamsFrom<'listEndpointConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listEndpointConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEndpointConfigs'>]-?: ReturnTypeFrom<'listEndpointConfigs'>[K]}['EndpointConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EndpointConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEndpointConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEndpointConfigs' })).toString('base64');
    const member = (Array.isArray(result.EndpointConfigs ?? []) ? (result.EndpointConfigs ?? []) : [result.EndpointConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEndpoints(params: { [K in keyof ParamsFrom<'listEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'listEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEndpoints'>]-?: ReturnTypeFrom<'listEndpoints'>[K]}['Endpoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Endpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEndpoints' })).toString('base64');
    const member = (Array.isArray(result.Endpoints ?? []) ? (result.Endpoints ?? []) : [result.Endpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExperiments(params: { [K in keyof ParamsFrom<'listExperiments', { next?: string, limit?: number }>]: ParamsFrom<'listExperiments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExperiments'>]-?: ReturnTypeFrom<'listExperiments'>[K]}['ExperimentSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ExperimentSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExperiments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listExperiments' })).toString('base64');
    const member = (Array.isArray(result.ExperimentSummaries ?? []) ? (result.ExperimentSummaries ?? []) : [result.ExperimentSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFeatureGroups(params: { [K in keyof ParamsFrom<'listFeatureGroups', { next?: string, limit?: number }>]: ParamsFrom<'listFeatureGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFeatureGroups'>]-?: ReturnTypeFrom<'listFeatureGroups'>[K]}['FeatureGroupSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FeatureGroupSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFeatureGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFeatureGroups' })).toString('base64');
    const member = (Array.isArray(result.FeatureGroupSummaries ?? []) ? (result.FeatureGroupSummaries ?? []) : [result.FeatureGroupSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFlowDefinitions(params: { [K in keyof ParamsFrom<'listFlowDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'listFlowDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFlowDefinitions'>]-?: ReturnTypeFrom<'listFlowDefinitions'>[K]}['FlowDefinitionSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FlowDefinitionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFlowDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFlowDefinitions' })).toString('base64');
    const member = (Array.isArray(result.FlowDefinitionSummaries ?? []) ? (result.FlowDefinitionSummaries ?? []) : [result.FlowDefinitionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHumanTaskUis(params: { [K in keyof ParamsFrom<'listHumanTaskUis', { next?: string, limit?: number }>]: ParamsFrom<'listHumanTaskUis', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listHumanTaskUis'>]-?: ReturnTypeFrom<'listHumanTaskUis'>[K]}['HumanTaskUiSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HumanTaskUiSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHumanTaskUis({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listHumanTaskUis' })).toString('base64');
    const member = (Array.isArray(result.HumanTaskUiSummaries ?? []) ? (result.HumanTaskUiSummaries ?? []) : [result.HumanTaskUiSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHyperParameterTuningJobs(params: { [K in keyof ParamsFrom<'listHyperParameterTuningJobs', { next?: string, limit?: number }>]: ParamsFrom<'listHyperParameterTuningJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listHyperParameterTuningJobs'>]-?: ReturnTypeFrom<'listHyperParameterTuningJobs'>[K]}['HyperParameterTuningJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HyperParameterTuningJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHyperParameterTuningJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listHyperParameterTuningJobs' })).toString('base64');
    const member = (Array.isArray(result.HyperParameterTuningJobSummaries ?? []) ? (result.HyperParameterTuningJobSummaries ?? []) : [result.HyperParameterTuningJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImageVersions(params: { [K in keyof ParamsFrom<'listImageVersions', { next?: string, limit?: number }>]: ParamsFrom<'listImageVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImageVersions'>]-?: ReturnTypeFrom<'listImageVersions'>[K]}['ImageVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ImageVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImageVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listImageVersions' })).toString('base64');
    const member = (Array.isArray(result.ImageVersions ?? []) ? (result.ImageVersions ?? []) : [result.ImageVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImages(params: { [K in keyof ParamsFrom<'listImages', { next?: string, limit?: number }>]: ParamsFrom<'listImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImages'>]-?: ReturnTypeFrom<'listImages'>[K]}['Images'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Images"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listImages' })).toString('base64');
    const member = (Array.isArray(result.Images ?? []) ? (result.Images ?? []) : [result.Images]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInferenceRecommendationsJobs(params: { [K in keyof ParamsFrom<'listInferenceRecommendationsJobs', { next?: string, limit?: number }>]: ParamsFrom<'listInferenceRecommendationsJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInferenceRecommendationsJobs'>]-?: ReturnTypeFrom<'listInferenceRecommendationsJobs'>[K]}['InferenceRecommendationsJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InferenceRecommendationsJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInferenceRecommendationsJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listInferenceRecommendationsJobs' })).toString('base64');
    const member = (Array.isArray(result.InferenceRecommendationsJobs ?? []) ? (result.InferenceRecommendationsJobs ?? []) : [result.InferenceRecommendationsJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLabelingJobs(params: { [K in keyof ParamsFrom<'listLabelingJobs', { next?: string, limit?: number }>]: ParamsFrom<'listLabelingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLabelingJobs'>]-?: ReturnTypeFrom<'listLabelingJobs'>[K]}['LabelingJobSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LabelingJobSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLabelingJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listLabelingJobs' })).toString('base64');
    const member = (Array.isArray(result.LabelingJobSummaryList ?? []) ? (result.LabelingJobSummaryList ?? []) : [result.LabelingJobSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLabelingJobsForWorkteam(params: { [K in keyof ParamsFrom<'listLabelingJobsForWorkteam', { next?: string, limit?: number }>]: ParamsFrom<'listLabelingJobsForWorkteam', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLabelingJobsForWorkteam'>]-?: ReturnTypeFrom<'listLabelingJobsForWorkteam'>[K]}['LabelingJobSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LabelingJobSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLabelingJobsForWorkteam({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listLabelingJobsForWorkteam' })).toString('base64');
    const member = (Array.isArray(result.LabelingJobSummaryList ?? []) ? (result.LabelingJobSummaryList ?? []) : [result.LabelingJobSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLineageGroups(params: { [K in keyof ParamsFrom<'listLineageGroups', { next?: string, limit?: number }>]: ParamsFrom<'listLineageGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLineageGroups'>]-?: ReturnTypeFrom<'listLineageGroups'>[K]}['LineageGroupSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LineageGroupSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLineageGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listLineageGroups' })).toString('base64');
    const member = (Array.isArray(result.LineageGroupSummaries ?? []) ? (result.LineageGroupSummaries ?? []) : [result.LineageGroupSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelBiasJobDefinitions(params: { [K in keyof ParamsFrom<'listModelBiasJobDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'listModelBiasJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModelBiasJobDefinitions'>]-?: ReturnTypeFrom<'listModelBiasJobDefinitions'>[K]}['JobDefinitionSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobDefinitionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelBiasJobDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listModelBiasJobDefinitions' })).toString('base64');
    const member = (Array.isArray(result.JobDefinitionSummaries ?? []) ? (result.JobDefinitionSummaries ?? []) : [result.JobDefinitionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelExplainabilityJobDefinitions(params: { [K in keyof ParamsFrom<'listModelExplainabilityJobDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'listModelExplainabilityJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModelExplainabilityJobDefinitions'>]-?: ReturnTypeFrom<'listModelExplainabilityJobDefinitions'>[K]}['JobDefinitionSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobDefinitionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelExplainabilityJobDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listModelExplainabilityJobDefinitions' })).toString('base64');
    const member = (Array.isArray(result.JobDefinitionSummaries ?? []) ? (result.JobDefinitionSummaries ?? []) : [result.JobDefinitionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelMetadata(params: { [K in keyof ParamsFrom<'listModelMetadata', { next?: string, limit?: number }>]: ParamsFrom<'listModelMetadata', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModelMetadata'>]-?: ReturnTypeFrom<'listModelMetadata'>[K]}['ModelMetadataSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ModelMetadataSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelMetadata({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listModelMetadata' })).toString('base64');
    const member = (Array.isArray(result.ModelMetadataSummaries ?? []) ? (result.ModelMetadataSummaries ?? []) : [result.ModelMetadataSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelPackageGroups(params: { [K in keyof ParamsFrom<'listModelPackageGroups', { next?: string, limit?: number }>]: ParamsFrom<'listModelPackageGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModelPackageGroups'>]-?: ReturnTypeFrom<'listModelPackageGroups'>[K]}['ModelPackageGroupSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ModelPackageGroupSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelPackageGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listModelPackageGroups' })).toString('base64');
    const member = (Array.isArray(result.ModelPackageGroupSummaryList ?? []) ? (result.ModelPackageGroupSummaryList ?? []) : [result.ModelPackageGroupSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelPackages(params: { [K in keyof ParamsFrom<'listModelPackages', { next?: string, limit?: number }>]: ParamsFrom<'listModelPackages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModelPackages'>]-?: ReturnTypeFrom<'listModelPackages'>[K]}['ModelPackageSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ModelPackageSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelPackages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listModelPackages' })).toString('base64');
    const member = (Array.isArray(result.ModelPackageSummaryList ?? []) ? (result.ModelPackageSummaryList ?? []) : [result.ModelPackageSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelQualityJobDefinitions(params: { [K in keyof ParamsFrom<'listModelQualityJobDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'listModelQualityJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModelQualityJobDefinitions'>]-?: ReturnTypeFrom<'listModelQualityJobDefinitions'>[K]}['JobDefinitionSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobDefinitionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelQualityJobDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listModelQualityJobDefinitions' })).toString('base64');
    const member = (Array.isArray(result.JobDefinitionSummaries ?? []) ? (result.JobDefinitionSummaries ?? []) : [result.JobDefinitionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModels(params: { [K in keyof ParamsFrom<'listModels', { next?: string, limit?: number }>]: ParamsFrom<'listModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModels'>]-?: ReturnTypeFrom<'listModels'>[K]}['Models'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Models"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listModels' })).toString('base64');
    const member = (Array.isArray(result.Models ?? []) ? (result.Models ?? []) : [result.Models]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMonitoringExecutions(params: { [K in keyof ParamsFrom<'listMonitoringExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listMonitoringExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMonitoringExecutions'>]-?: ReturnTypeFrom<'listMonitoringExecutions'>[K]}['MonitoringExecutionSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MonitoringExecutionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMonitoringExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listMonitoringExecutions' })).toString('base64');
    const member = (Array.isArray(result.MonitoringExecutionSummaries ?? []) ? (result.MonitoringExecutionSummaries ?? []) : [result.MonitoringExecutionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMonitoringSchedules(params: { [K in keyof ParamsFrom<'listMonitoringSchedules', { next?: string, limit?: number }>]: ParamsFrom<'listMonitoringSchedules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMonitoringSchedules'>]-?: ReturnTypeFrom<'listMonitoringSchedules'>[K]}['MonitoringScheduleSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MonitoringScheduleSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMonitoringSchedules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listMonitoringSchedules' })).toString('base64');
    const member = (Array.isArray(result.MonitoringScheduleSummaries ?? []) ? (result.MonitoringScheduleSummaries ?? []) : [result.MonitoringScheduleSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNotebookInstanceLifecycleConfigs(params: { [K in keyof ParamsFrom<'listNotebookInstanceLifecycleConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listNotebookInstanceLifecycleConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNotebookInstanceLifecycleConfigs'>]-?: ReturnTypeFrom<'listNotebookInstanceLifecycleConfigs'>[K]}['NotebookInstanceLifecycleConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NotebookInstanceLifecycleConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNotebookInstanceLifecycleConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listNotebookInstanceLifecycleConfigs' })).toString('base64');
    const member = (Array.isArray(result.NotebookInstanceLifecycleConfigs ?? []) ? (result.NotebookInstanceLifecycleConfigs ?? []) : [result.NotebookInstanceLifecycleConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNotebookInstances(params: { [K in keyof ParamsFrom<'listNotebookInstances', { next?: string, limit?: number }>]: ParamsFrom<'listNotebookInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNotebookInstances'>]-?: ReturnTypeFrom<'listNotebookInstances'>[K]}['NotebookInstances'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NotebookInstances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNotebookInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listNotebookInstances' })).toString('base64');
    const member = (Array.isArray(result.NotebookInstances ?? []) ? (result.NotebookInstances ?? []) : [result.NotebookInstances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelineExecutionSteps(params: { [K in keyof ParamsFrom<'listPipelineExecutionSteps', { next?: string, limit?: number }>]: ParamsFrom<'listPipelineExecutionSteps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPipelineExecutionSteps'>]-?: ReturnTypeFrom<'listPipelineExecutionSteps'>[K]}['PipelineExecutionSteps'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PipelineExecutionSteps"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPipelineExecutionSteps({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPipelineExecutionSteps' })).toString('base64');
    const member = (Array.isArray(result.PipelineExecutionSteps ?? []) ? (result.PipelineExecutionSteps ?? []) : [result.PipelineExecutionSteps]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelineExecutions(params: { [K in keyof ParamsFrom<'listPipelineExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listPipelineExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPipelineExecutions'>]-?: ReturnTypeFrom<'listPipelineExecutions'>[K]}['PipelineExecutionSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PipelineExecutionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPipelineExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPipelineExecutions' })).toString('base64');
    const member = (Array.isArray(result.PipelineExecutionSummaries ?? []) ? (result.PipelineExecutionSummaries ?? []) : [result.PipelineExecutionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelineParametersForExecution(params: { [K in keyof ParamsFrom<'listPipelineParametersForExecution', { next?: string, limit?: number }>]: ParamsFrom<'listPipelineParametersForExecution', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPipelineParametersForExecution'>]-?: ReturnTypeFrom<'listPipelineParametersForExecution'>[K]}['PipelineParameters'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PipelineParameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPipelineParametersForExecution({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPipelineParametersForExecution' })).toString('base64');
    const member = (Array.isArray(result.PipelineParameters ?? []) ? (result.PipelineParameters ?? []) : [result.PipelineParameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelines(params: { [K in keyof ParamsFrom<'listPipelines', { next?: string, limit?: number }>]: ParamsFrom<'listPipelines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['PipelineSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PipelineSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPipelines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPipelines' })).toString('base64');
    const member = (Array.isArray(result.PipelineSummaries ?? []) ? (result.PipelineSummaries ?? []) : [result.PipelineSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProcessingJobs(params: { [K in keyof ParamsFrom<'listProcessingJobs', { next?: string, limit?: number }>]: ParamsFrom<'listProcessingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProcessingJobs'>]-?: ReturnTypeFrom<'listProcessingJobs'>[K]}['ProcessingJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProcessingJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProcessingJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listProcessingJobs' })).toString('base64');
    const member = (Array.isArray(result.ProcessingJobSummaries ?? []) ? (result.ProcessingJobSummaries ?? []) : [result.ProcessingJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listProjects: (params: RawParamsFrom<'listProjects'>) => Promise<ReturnTypeFrom<'listProjects'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProjects(params as any).promise();
  }

  async listStageDevices(params: { [K in keyof ParamsFrom<'listStageDevices', { next?: string, limit?: number }>]: ParamsFrom<'listStageDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStageDevices'>]-?: ReturnTypeFrom<'listStageDevices'>[K]}['DeviceDeploymentSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DeviceDeploymentSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStageDevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStageDevices' })).toString('base64');
    const member = (Array.isArray(result.DeviceDeploymentSummaries ?? []) ? (result.DeviceDeploymentSummaries ?? []) : [result.DeviceDeploymentSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStudioLifecycleConfigs(params: { [K in keyof ParamsFrom<'listStudioLifecycleConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listStudioLifecycleConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStudioLifecycleConfigs'>]-?: ReturnTypeFrom<'listStudioLifecycleConfigs'>[K]}['StudioLifecycleConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StudioLifecycleConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStudioLifecycleConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStudioLifecycleConfigs' })).toString('base64');
    const member = (Array.isArray(result.StudioLifecycleConfigs ?? []) ? (result.StudioLifecycleConfigs ?? []) : [result.StudioLifecycleConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSubscribedWorkteams(params: { [K in keyof ParamsFrom<'listSubscribedWorkteams', { next?: string, limit?: number }>]: ParamsFrom<'listSubscribedWorkteams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSubscribedWorkteams'>]-?: ReturnTypeFrom<'listSubscribedWorkteams'>[K]}['SubscribedWorkteams'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SubscribedWorkteams"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSubscribedWorkteams({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSubscribedWorkteams' })).toString('base64');
    const member = (Array.isArray(result.SubscribedWorkteams ?? []) ? (result.SubscribedWorkteams ?? []) : [result.SubscribedWorkteams]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTags(params: { [K in keyof ParamsFrom<'listTags', { next?: string, limit?: number }>]: ParamsFrom<'listTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTags'>]-?: ReturnTypeFrom<'listTags'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTags' })).toString('base64');
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrainingJobs(params: { [K in keyof ParamsFrom<'listTrainingJobs', { next?: string, limit?: number }>]: ParamsFrom<'listTrainingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTrainingJobs'>]-?: ReturnTypeFrom<'listTrainingJobs'>[K]}['TrainingJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrainingJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrainingJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTrainingJobs' })).toString('base64');
    const member = (Array.isArray(result.TrainingJobSummaries ?? []) ? (result.TrainingJobSummaries ?? []) : [result.TrainingJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrainingJobsForHyperParameterTuningJob(params: { [K in keyof ParamsFrom<'listTrainingJobsForHyperParameterTuningJob', { next?: string, limit?: number }>]: ParamsFrom<'listTrainingJobsForHyperParameterTuningJob', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTrainingJobsForHyperParameterTuningJob'>]-?: ReturnTypeFrom<'listTrainingJobsForHyperParameterTuningJob'>[K]}['TrainingJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrainingJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrainingJobsForHyperParameterTuningJob({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTrainingJobsForHyperParameterTuningJob' })).toString('base64');
    const member = (Array.isArray(result.TrainingJobSummaries ?? []) ? (result.TrainingJobSummaries ?? []) : [result.TrainingJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTransformJobs(params: { [K in keyof ParamsFrom<'listTransformJobs', { next?: string, limit?: number }>]: ParamsFrom<'listTransformJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTransformJobs'>]-?: ReturnTypeFrom<'listTransformJobs'>[K]}['TransformJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransformJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTransformJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTransformJobs' })).toString('base64');
    const member = (Array.isArray(result.TransformJobSummaries ?? []) ? (result.TransformJobSummaries ?? []) : [result.TransformJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrialComponents(params: { [K in keyof ParamsFrom<'listTrialComponents', { next?: string, limit?: number }>]: ParamsFrom<'listTrialComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTrialComponents'>]-?: ReturnTypeFrom<'listTrialComponents'>[K]}['TrialComponentSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrialComponentSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrialComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTrialComponents' })).toString('base64');
    const member = (Array.isArray(result.TrialComponentSummaries ?? []) ? (result.TrialComponentSummaries ?? []) : [result.TrialComponentSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrials(params: { [K in keyof ParamsFrom<'listTrials', { next?: string, limit?: number }>]: ParamsFrom<'listTrials', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTrials'>]-?: ReturnTypeFrom<'listTrials'>[K]}['TrialSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrialSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrials({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTrials' })).toString('base64');
    const member = (Array.isArray(result.TrialSummaries ?? []) ? (result.TrialSummaries ?? []) : [result.TrialSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserProfiles(params: { [K in keyof ParamsFrom<'listUserProfiles', { next?: string, limit?: number }>]: ParamsFrom<'listUserProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUserProfiles'>]-?: ReturnTypeFrom<'listUserProfiles'>[K]}['UserProfiles'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserProfiles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listUserProfiles' })).toString('base64');
    const member = (Array.isArray(result.UserProfiles ?? []) ? (result.UserProfiles ?? []) : [result.UserProfiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkforces(params: { [K in keyof ParamsFrom<'listWorkforces', { next?: string, limit?: number }>]: ParamsFrom<'listWorkforces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkforces'>]-?: ReturnTypeFrom<'listWorkforces'>[K]}['Workforces'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Workforces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWorkforces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listWorkforces' })).toString('base64');
    const member = (Array.isArray(result.Workforces ?? []) ? (result.Workforces ?? []) : [result.Workforces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkteams(params: { [K in keyof ParamsFrom<'listWorkteams', { next?: string, limit?: number }>]: ParamsFrom<'listWorkteams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkteams'>]-?: ReturnTypeFrom<'listWorkteams'>[K]}['Workteams'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Workteams"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWorkteams({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listWorkteams' })).toString('base64');
    const member = (Array.isArray(result.Workteams ?? []) ? (result.Workteams ?? []) : [result.Workteams]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putModelPackageGroupPolicy: (params: RawParamsFrom<'putModelPackageGroupPolicy'>) => Promise<ReturnTypeFrom<'putModelPackageGroupPolicy'>>  = async params => {
  // undefined
    return this.client.putModelPackageGroupPolicy(params as any).promise();
  }

  queryLineage: (params: RawParamsFrom<'queryLineage'>) => Promise<ReturnTypeFrom<'queryLineage'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.queryLineage(params as any).promise();
  }

  registerDevices: (params: RawParamsFrom<'registerDevices'>) => Promise<ReturnTypeFrom<'registerDevices'>>  = async params => {
  // undefined
    return this.client.registerDevices(params as any).promise();
  }

  renderUiTemplate: (params: RawParamsFrom<'renderUiTemplate'>) => Promise<ReturnTypeFrom<'renderUiTemplate'>>  = async params => {
  // undefined
    return this.client.renderUiTemplate(params as any).promise();
  }

  retryPipelineExecution: (params: RawParamsFrom<'retryPipelineExecution'>) => Promise<ReturnTypeFrom<'retryPipelineExecution'>>  = async params => {
  // undefined
    return this.client.retryPipelineExecution(params as any).promise();
  }

  async search(params: { [K in keyof ParamsFrom<'search', { next?: string, limit?: number }>]: ParamsFrom<'search', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'search'>]-?: ReturnTypeFrom<'search'>[K]}['Results'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Results"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.search({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'search' })).toString('base64');
    const member = (Array.isArray(result.Results ?? []) ? (result.Results ?? []) : [result.Results]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  sendPipelineExecutionStepFailure: (params: RawParamsFrom<'sendPipelineExecutionStepFailure'>) => Promise<ReturnTypeFrom<'sendPipelineExecutionStepFailure'>>  = async params => {
  // undefined
    return this.client.sendPipelineExecutionStepFailure(params as any).promise();
  }

  sendPipelineExecutionStepSuccess: (params: RawParamsFrom<'sendPipelineExecutionStepSuccess'>) => Promise<ReturnTypeFrom<'sendPipelineExecutionStepSuccess'>>  = async params => {
  // undefined
    return this.client.sendPipelineExecutionStepSuccess(params as any).promise();
  }

  startEdgeDeploymentStage: (params: RawParamsFrom<'startEdgeDeploymentStage'>) => Promise<ReturnTypeFrom<'startEdgeDeploymentStage'>>  = async params => {
  // undefined
    return this.client.startEdgeDeploymentStage(params as any).promise();
  }

  startMonitoringSchedule: (params: RawParamsFrom<'startMonitoringSchedule'>) => Promise<ReturnTypeFrom<'startMonitoringSchedule'>>  = async params => {
  // undefined
    return this.client.startMonitoringSchedule(params as any).promise();
  }

  startNotebookInstance: (params: RawParamsFrom<'startNotebookInstance'>) => Promise<ReturnTypeFrom<'startNotebookInstance'>>  = async params => {
  // undefined
    return this.client.startNotebookInstance(params as any).promise();
  }

  startPipelineExecution: (params: RawParamsFrom<'startPipelineExecution'>) => Promise<ReturnTypeFrom<'startPipelineExecution'>>  = async params => {
  // undefined
    return this.client.startPipelineExecution(params as any).promise();
  }

  stopAutoMLJob: (params: RawParamsFrom<'stopAutoMLJob'>) => Promise<ReturnTypeFrom<'stopAutoMLJob'>>  = async params => {
  // undefined
    return this.client.stopAutoMLJob(params as any).promise();
  }

  stopCompilationJob: (params: RawParamsFrom<'stopCompilationJob'>) => Promise<ReturnTypeFrom<'stopCompilationJob'>>  = async params => {
  // undefined
    return this.client.stopCompilationJob(params as any).promise();
  }

  stopEdgeDeploymentStage: (params: RawParamsFrom<'stopEdgeDeploymentStage'>) => Promise<ReturnTypeFrom<'stopEdgeDeploymentStage'>>  = async params => {
  // undefined
    return this.client.stopEdgeDeploymentStage(params as any).promise();
  }

  stopEdgePackagingJob: (params: RawParamsFrom<'stopEdgePackagingJob'>) => Promise<ReturnTypeFrom<'stopEdgePackagingJob'>>  = async params => {
  // undefined
    return this.client.stopEdgePackagingJob(params as any).promise();
  }

  stopHyperParameterTuningJob: (params: RawParamsFrom<'stopHyperParameterTuningJob'>) => Promise<ReturnTypeFrom<'stopHyperParameterTuningJob'>>  = async params => {
  // undefined
    return this.client.stopHyperParameterTuningJob(params as any).promise();
  }

  stopInferenceRecommendationsJob: (params: RawParamsFrom<'stopInferenceRecommendationsJob'>) => Promise<ReturnTypeFrom<'stopInferenceRecommendationsJob'>>  = async params => {
  // undefined
    return this.client.stopInferenceRecommendationsJob(params as any).promise();
  }

  stopLabelingJob: (params: RawParamsFrom<'stopLabelingJob'>) => Promise<ReturnTypeFrom<'stopLabelingJob'>>  = async params => {
  // undefined
    return this.client.stopLabelingJob(params as any).promise();
  }

  stopMonitoringSchedule: (params: RawParamsFrom<'stopMonitoringSchedule'>) => Promise<ReturnTypeFrom<'stopMonitoringSchedule'>>  = async params => {
  // undefined
    return this.client.stopMonitoringSchedule(params as any).promise();
  }

  stopNotebookInstance: (params: RawParamsFrom<'stopNotebookInstance'>) => Promise<ReturnTypeFrom<'stopNotebookInstance'>>  = async params => {
  // undefined
    return this.client.stopNotebookInstance(params as any).promise();
  }

  stopPipelineExecution: (params: RawParamsFrom<'stopPipelineExecution'>) => Promise<ReturnTypeFrom<'stopPipelineExecution'>>  = async params => {
  // undefined
    return this.client.stopPipelineExecution(params as any).promise();
  }

  stopProcessingJob: (params: RawParamsFrom<'stopProcessingJob'>) => Promise<ReturnTypeFrom<'stopProcessingJob'>>  = async params => {
  // undefined
    return this.client.stopProcessingJob(params as any).promise();
  }

  stopTrainingJob: (params: RawParamsFrom<'stopTrainingJob'>) => Promise<ReturnTypeFrom<'stopTrainingJob'>>  = async params => {
  // undefined
    return this.client.stopTrainingJob(params as any).promise();
  }

  stopTransformJob: (params: RawParamsFrom<'stopTransformJob'>) => Promise<ReturnTypeFrom<'stopTransformJob'>>  = async params => {
  // undefined
    return this.client.stopTransformJob(params as any).promise();
  }

  updateAction: (params: RawParamsFrom<'updateAction'>) => Promise<ReturnTypeFrom<'updateAction'>>  = async params => {
  // undefined
    return this.client.updateAction(params as any).promise();
  }

  updateAppImageConfig: (params: RawParamsFrom<'updateAppImageConfig'>) => Promise<ReturnTypeFrom<'updateAppImageConfig'>>  = async params => {
  // undefined
    return this.client.updateAppImageConfig(params as any).promise();
  }

  updateArtifact: (params: RawParamsFrom<'updateArtifact'>) => Promise<ReturnTypeFrom<'updateArtifact'>>  = async params => {
  // undefined
    return this.client.updateArtifact(params as any).promise();
  }

  updateCodeRepository: (params: RawParamsFrom<'updateCodeRepository'>) => Promise<ReturnTypeFrom<'updateCodeRepository'>>  = async params => {
  // undefined
    return this.client.updateCodeRepository(params as any).promise();
  }

  updateContext: (params: RawParamsFrom<'updateContext'>) => Promise<ReturnTypeFrom<'updateContext'>>  = async params => {
  // undefined
    return this.client.updateContext(params as any).promise();
  }

  updateDeviceFleet: (params: RawParamsFrom<'updateDeviceFleet'>) => Promise<ReturnTypeFrom<'updateDeviceFleet'>>  = async params => {
  // undefined
    return this.client.updateDeviceFleet(params as any).promise();
  }

  updateDevices: (params: RawParamsFrom<'updateDevices'>) => Promise<ReturnTypeFrom<'updateDevices'>>  = async params => {
  // undefined
    return this.client.updateDevices(params as any).promise();
  }

  updateDomain: (params: RawParamsFrom<'updateDomain'>) => Promise<ReturnTypeFrom<'updateDomain'>>  = async params => {
  // undefined
    return this.client.updateDomain(params as any).promise();
  }

  updateEndpoint: (params: RawParamsFrom<'updateEndpoint'>) => Promise<ReturnTypeFrom<'updateEndpoint'>>  = async params => {
  // undefined
    return this.client.updateEndpoint(params as any).promise();
  }

  updateEndpointWeightsAndCapacities: (params: RawParamsFrom<'updateEndpointWeightsAndCapacities'>) => Promise<ReturnTypeFrom<'updateEndpointWeightsAndCapacities'>>  = async params => {
  // undefined
    return this.client.updateEndpointWeightsAndCapacities(params as any).promise();
  }

  updateExperiment: (params: RawParamsFrom<'updateExperiment'>) => Promise<ReturnTypeFrom<'updateExperiment'>>  = async params => {
  // undefined
    return this.client.updateExperiment(params as any).promise();
  }

  updateFeatureGroup: (params: RawParamsFrom<'updateFeatureGroup'>) => Promise<ReturnTypeFrom<'updateFeatureGroup'>>  = async params => {
  // undefined
    return this.client.updateFeatureGroup(params as any).promise();
  }

  updateFeatureMetadata: (params: RawParamsFrom<'updateFeatureMetadata'>) => Promise<ReturnTypeFrom<'updateFeatureMetadata'>>  = async params => {
  // undefined
    return this.client.updateFeatureMetadata(params as any).promise();
  }

  updateImage: (params: RawParamsFrom<'updateImage'>) => Promise<ReturnTypeFrom<'updateImage'>>  = async params => {
  // undefined
    return this.client.updateImage(params as any).promise();
  }

  updateModelPackage: (params: RawParamsFrom<'updateModelPackage'>) => Promise<ReturnTypeFrom<'updateModelPackage'>>  = async params => {
  // undefined
    return this.client.updateModelPackage(params as any).promise();
  }

  updateMonitoringSchedule: (params: RawParamsFrom<'updateMonitoringSchedule'>) => Promise<ReturnTypeFrom<'updateMonitoringSchedule'>>  = async params => {
  // undefined
    return this.client.updateMonitoringSchedule(params as any).promise();
  }

  updateNotebookInstance: (params: RawParamsFrom<'updateNotebookInstance'>) => Promise<ReturnTypeFrom<'updateNotebookInstance'>>  = async params => {
  // undefined
    return this.client.updateNotebookInstance(params as any).promise();
  }

  updateNotebookInstanceLifecycleConfig: (params: RawParamsFrom<'updateNotebookInstanceLifecycleConfig'>) => Promise<ReturnTypeFrom<'updateNotebookInstanceLifecycleConfig'>>  = async params => {
  // undefined
    return this.client.updateNotebookInstanceLifecycleConfig(params as any).promise();
  }

  updatePipeline: (params: RawParamsFrom<'updatePipeline'>) => Promise<ReturnTypeFrom<'updatePipeline'>>  = async params => {
  // undefined
    return this.client.updatePipeline(params as any).promise();
  }

  updatePipelineExecution: (params: RawParamsFrom<'updatePipelineExecution'>) => Promise<ReturnTypeFrom<'updatePipelineExecution'>>  = async params => {
  // undefined
    return this.client.updatePipelineExecution(params as any).promise();
  }

  updateProject: (params: RawParamsFrom<'updateProject'>) => Promise<ReturnTypeFrom<'updateProject'>>  = async params => {
  // undefined
    return this.client.updateProject(params as any).promise();
  }

  updateTrainingJob: (params: RawParamsFrom<'updateTrainingJob'>) => Promise<ReturnTypeFrom<'updateTrainingJob'>>  = async params => {
  // undefined
    return this.client.updateTrainingJob(params as any).promise();
  }

  updateTrial: (params: RawParamsFrom<'updateTrial'>) => Promise<ReturnTypeFrom<'updateTrial'>>  = async params => {
  // undefined
    return this.client.updateTrial(params as any).promise();
  }

  updateTrialComponent: (params: RawParamsFrom<'updateTrialComponent'>) => Promise<ReturnTypeFrom<'updateTrialComponent'>>  = async params => {
  // undefined
    return this.client.updateTrialComponent(params as any).promise();
  }

  updateUserProfile: (params: RawParamsFrom<'updateUserProfile'>) => Promise<ReturnTypeFrom<'updateUserProfile'>>  = async params => {
  // undefined
    return this.client.updateUserProfile(params as any).promise();
  }

  updateWorkforce: (params: RawParamsFrom<'updateWorkforce'>) => Promise<ReturnTypeFrom<'updateWorkforce'>>  = async params => {
  // undefined
    return this.client.updateWorkforce(params as any).promise();
  }

  updateWorkteam: (params: RawParamsFrom<'updateWorkteam'>) => Promise<ReturnTypeFrom<'updateWorkteam'>>  = async params => {
  // undefined
    return this.client.updateWorkteam(params as any).promise();
  }
  
  static fromClient(client: AWSSageMaker): SageMaker {
    return new SageMaker(client) as any;
  }
  
  static client(options?: AWSSageMaker.Types.ClientConfiguration): SageMaker {
    return new SageMaker(new AWSSageMaker(options)) as any;
  }
}  
