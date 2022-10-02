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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'sagemaker';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listActions","listAlgorithms","listAppImageConfigs","listApps","listArtifacts","listAssociations","listAutoMLJobs","listCodeRepositories","listCompilationJobs","listContexts","listDataQualityJobDefinitions","listDeviceFleets","listDevices","listDomains","listEdgeDeploymentPlans","listEdgePackagingJobs","listEndpointConfigs","listEndpoints","listExperiments","listFeatureGroups","listFlowDefinitions","listHumanTaskUis","listHyperParameterTuningJobs","listImages","listInferenceRecommendationsJobs","listLabelingJobs","listLineageGroups","listModelBiasJobDefinitions","listModelExplainabilityJobDefinitions","listModelMetadata","listModelPackageGroups","listModelPackages","listModelQualityJobDefinitions","listModels","listMonitoringExecutions","listMonitoringSchedules","listNotebookInstanceLifecycleConfigs","listNotebookInstances","listPipelineExecutionSteps","listPipelines","listProcessingJobs","listProjects","listStudioLifecycleConfigs","listSubscribedWorkteams","listTrainingJobs","listTransformJobs","listTrialComponents","listTrials","listUserProfiles","listWorkforces","listWorkteams","queryLineage"];
    
  addAssociation: FunctionTypeFrom<'addAssociation'>;

  addTags: FunctionTypeFrom<'addTags'>;

  associateTrialComponent: FunctionTypeFrom<'associateTrialComponent'>;

  batchDescribeModelPackage: FunctionTypeFrom<'batchDescribeModelPackage'>;

  createAction: FunctionTypeFrom<'createAction'>;

  createAlgorithm: FunctionTypeFrom<'createAlgorithm'>;

  createApp: FunctionTypeFrom<'createApp'>;

  createAppImageConfig: FunctionTypeFrom<'createAppImageConfig'>;

  createArtifact: FunctionTypeFrom<'createArtifact'>;

  createAutoMLJob: FunctionTypeFrom<'createAutoMLJob'>;

  createCodeRepository: FunctionTypeFrom<'createCodeRepository'>;

  createCompilationJob: FunctionTypeFrom<'createCompilationJob'>;

  createContext: FunctionTypeFrom<'createContext'>;

  createDataQualityJobDefinition: FunctionTypeFrom<'createDataQualityJobDefinition'>;

  createDeviceFleet: FunctionTypeFrom<'createDeviceFleet'>;

  createDomain: FunctionTypeFrom<'createDomain'>;

  createEdgeDeploymentPlan: FunctionTypeFrom<'createEdgeDeploymentPlan'>;

  createEdgeDeploymentStage: FunctionTypeFrom<'createEdgeDeploymentStage'>;

  createEdgePackagingJob: FunctionTypeFrom<'createEdgePackagingJob'>;

  createEndpoint: FunctionTypeFrom<'createEndpoint'>;

  createEndpointConfig: FunctionTypeFrom<'createEndpointConfig'>;

  createExperiment: FunctionTypeFrom<'createExperiment'>;

  createFeatureGroup: FunctionTypeFrom<'createFeatureGroup'>;

  createFlowDefinition: FunctionTypeFrom<'createFlowDefinition'>;

  createHumanTaskUi: FunctionTypeFrom<'createHumanTaskUi'>;

  createHyperParameterTuningJob: FunctionTypeFrom<'createHyperParameterTuningJob'>;

  createImage: FunctionTypeFrom<'createImage'>;

  createImageVersion: FunctionTypeFrom<'createImageVersion'>;

  createInferenceRecommendationsJob: FunctionTypeFrom<'createInferenceRecommendationsJob'>;

  createLabelingJob: FunctionTypeFrom<'createLabelingJob'>;

  createModel: FunctionTypeFrom<'createModel'>;

  createModelBiasJobDefinition: FunctionTypeFrom<'createModelBiasJobDefinition'>;

  createModelExplainabilityJobDefinition: FunctionTypeFrom<'createModelExplainabilityJobDefinition'>;

  createModelPackage: FunctionTypeFrom<'createModelPackage'>;

  createModelPackageGroup: FunctionTypeFrom<'createModelPackageGroup'>;

  createModelQualityJobDefinition: FunctionTypeFrom<'createModelQualityJobDefinition'>;

  createMonitoringSchedule: FunctionTypeFrom<'createMonitoringSchedule'>;

  createNotebookInstance: FunctionTypeFrom<'createNotebookInstance'>;

  createNotebookInstanceLifecycleConfig: FunctionTypeFrom<'createNotebookInstanceLifecycleConfig'>;

  createPipeline: FunctionTypeFrom<'createPipeline'>;

  createPresignedDomainUrl: FunctionTypeFrom<'createPresignedDomainUrl'>;

  createPresignedNotebookInstanceUrl: FunctionTypeFrom<'createPresignedNotebookInstanceUrl'>;

  createProcessingJob: FunctionTypeFrom<'createProcessingJob'>;

  createProject: FunctionTypeFrom<'createProject'>;

  createStudioLifecycleConfig: FunctionTypeFrom<'createStudioLifecycleConfig'>;

  createTrainingJob: FunctionTypeFrom<'createTrainingJob'>;

  createTransformJob: FunctionTypeFrom<'createTransformJob'>;

  createTrial: FunctionTypeFrom<'createTrial'>;

  createTrialComponent: FunctionTypeFrom<'createTrialComponent'>;

  createUserProfile: FunctionTypeFrom<'createUserProfile'>;

  createWorkforce: FunctionTypeFrom<'createWorkforce'>;

  createWorkteam: FunctionTypeFrom<'createWorkteam'>;

  deleteAction: FunctionTypeFrom<'deleteAction'>;

  deleteAlgorithm: FunctionTypeFrom<'deleteAlgorithm'>;

  deleteApp: FunctionTypeFrom<'deleteApp'>;

  deleteAppImageConfig: FunctionTypeFrom<'deleteAppImageConfig'>;

  deleteArtifact: FunctionTypeFrom<'deleteArtifact'>;

  deleteAssociation: FunctionTypeFrom<'deleteAssociation'>;

  deleteCodeRepository: FunctionTypeFrom<'deleteCodeRepository'>;

  deleteContext: FunctionTypeFrom<'deleteContext'>;

  deleteDataQualityJobDefinition: FunctionTypeFrom<'deleteDataQualityJobDefinition'>;

  deleteDeviceFleet: FunctionTypeFrom<'deleteDeviceFleet'>;

  deleteDomain: FunctionTypeFrom<'deleteDomain'>;

  deleteEdgeDeploymentPlan: FunctionTypeFrom<'deleteEdgeDeploymentPlan'>;

  deleteEdgeDeploymentStage: FunctionTypeFrom<'deleteEdgeDeploymentStage'>;

  deleteEndpoint: FunctionTypeFrom<'deleteEndpoint'>;

  deleteEndpointConfig: FunctionTypeFrom<'deleteEndpointConfig'>;

  deleteExperiment: FunctionTypeFrom<'deleteExperiment'>;

  deleteFeatureGroup: FunctionTypeFrom<'deleteFeatureGroup'>;

  deleteFlowDefinition: FunctionTypeFrom<'deleteFlowDefinition'>;

  deleteHumanTaskUi: FunctionTypeFrom<'deleteHumanTaskUi'>;

  deleteImage: FunctionTypeFrom<'deleteImage'>;

  deleteImageVersion: FunctionTypeFrom<'deleteImageVersion'>;

  deleteModel: FunctionTypeFrom<'deleteModel'>;

  deleteModelBiasJobDefinition: FunctionTypeFrom<'deleteModelBiasJobDefinition'>;

  deleteModelExplainabilityJobDefinition: FunctionTypeFrom<'deleteModelExplainabilityJobDefinition'>;

  deleteModelPackage: FunctionTypeFrom<'deleteModelPackage'>;

  deleteModelPackageGroup: FunctionTypeFrom<'deleteModelPackageGroup'>;

  deleteModelPackageGroupPolicy: FunctionTypeFrom<'deleteModelPackageGroupPolicy'>;

  deleteModelQualityJobDefinition: FunctionTypeFrom<'deleteModelQualityJobDefinition'>;

  deleteMonitoringSchedule: FunctionTypeFrom<'deleteMonitoringSchedule'>;

  deleteNotebookInstance: FunctionTypeFrom<'deleteNotebookInstance'>;

  deleteNotebookInstanceLifecycleConfig: FunctionTypeFrom<'deleteNotebookInstanceLifecycleConfig'>;

  deletePipeline: FunctionTypeFrom<'deletePipeline'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  deleteStudioLifecycleConfig: FunctionTypeFrom<'deleteStudioLifecycleConfig'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  deleteTrial: FunctionTypeFrom<'deleteTrial'>;

  deleteTrialComponent: FunctionTypeFrom<'deleteTrialComponent'>;

  deleteUserProfile: FunctionTypeFrom<'deleteUserProfile'>;

  deleteWorkforce: FunctionTypeFrom<'deleteWorkforce'>;

  deleteWorkteam: FunctionTypeFrom<'deleteWorkteam'>;

  deregisterDevices: FunctionTypeFrom<'deregisterDevices'>;

  describeAction: FunctionTypeFrom<'describeAction'>;

  describeAlgorithm: FunctionTypeFrom<'describeAlgorithm'>;

  describeApp: FunctionTypeFrom<'describeApp'>;

  describeAppImageConfig: FunctionTypeFrom<'describeAppImageConfig'>;

  describeArtifact: FunctionTypeFrom<'describeArtifact'>;

  describeAutoMLJob: FunctionTypeFrom<'describeAutoMLJob'>;

  describeCodeRepository: FunctionTypeFrom<'describeCodeRepository'>;

  describeCompilationJob: FunctionTypeFrom<'describeCompilationJob'>;

  describeContext: FunctionTypeFrom<'describeContext'>;

  describeDataQualityJobDefinition: FunctionTypeFrom<'describeDataQualityJobDefinition'>;

  describeDevice: FunctionTypeFrom<'describeDevice'>;

  describeDeviceFleet: FunctionTypeFrom<'describeDeviceFleet'>;

  describeDomain: FunctionTypeFrom<'describeDomain'>;

  describeEdgeDeploymentPlan: FunctionTypeFrom<'describeEdgeDeploymentPlan'>;

  describeEdgePackagingJob: FunctionTypeFrom<'describeEdgePackagingJob'>;

  describeEndpoint: FunctionTypeFrom<'describeEndpoint'>;

  describeEndpointConfig: FunctionTypeFrom<'describeEndpointConfig'>;

  describeExperiment: FunctionTypeFrom<'describeExperiment'>;

  describeFeatureGroup: FunctionTypeFrom<'describeFeatureGroup'>;

  describeFeatureMetadata: FunctionTypeFrom<'describeFeatureMetadata'>;

  describeFlowDefinition: FunctionTypeFrom<'describeFlowDefinition'>;

  describeHumanTaskUi: FunctionTypeFrom<'describeHumanTaskUi'>;

  describeHyperParameterTuningJob: FunctionTypeFrom<'describeHyperParameterTuningJob'>;

  describeImage: FunctionTypeFrom<'describeImage'>;

  describeImageVersion: FunctionTypeFrom<'describeImageVersion'>;

  describeInferenceRecommendationsJob: FunctionTypeFrom<'describeInferenceRecommendationsJob'>;

  describeLabelingJob: FunctionTypeFrom<'describeLabelingJob'>;

  describeLineageGroup: FunctionTypeFrom<'describeLineageGroup'>;

  describeModel: FunctionTypeFrom<'describeModel'>;

  describeModelBiasJobDefinition: FunctionTypeFrom<'describeModelBiasJobDefinition'>;

  describeModelExplainabilityJobDefinition: FunctionTypeFrom<'describeModelExplainabilityJobDefinition'>;

  describeModelPackage: FunctionTypeFrom<'describeModelPackage'>;

  describeModelPackageGroup: FunctionTypeFrom<'describeModelPackageGroup'>;

  describeModelQualityJobDefinition: FunctionTypeFrom<'describeModelQualityJobDefinition'>;

  describeMonitoringSchedule: FunctionTypeFrom<'describeMonitoringSchedule'>;

  describeNotebookInstance: FunctionTypeFrom<'describeNotebookInstance'>;

  describeNotebookInstanceLifecycleConfig: FunctionTypeFrom<'describeNotebookInstanceLifecycleConfig'>;

  describePipeline: FunctionTypeFrom<'describePipeline'>;

  describePipelineDefinitionForExecution: FunctionTypeFrom<'describePipelineDefinitionForExecution'>;

  describePipelineExecution: FunctionTypeFrom<'describePipelineExecution'>;

  describeProcessingJob: FunctionTypeFrom<'describeProcessingJob'>;

  describeProject: FunctionTypeFrom<'describeProject'>;

  describeStudioLifecycleConfig: FunctionTypeFrom<'describeStudioLifecycleConfig'>;

  describeSubscribedWorkteam: FunctionTypeFrom<'describeSubscribedWorkteam'>;

  describeTrainingJob: FunctionTypeFrom<'describeTrainingJob'>;

  describeTransformJob: FunctionTypeFrom<'describeTransformJob'>;

  describeTrial: FunctionTypeFrom<'describeTrial'>;

  describeTrialComponent: FunctionTypeFrom<'describeTrialComponent'>;

  describeUserProfile: FunctionTypeFrom<'describeUserProfile'>;

  describeWorkforce: FunctionTypeFrom<'describeWorkforce'>;

  describeWorkteam: FunctionTypeFrom<'describeWorkteam'>;

  disableSagemakerServicecatalogPortfolio: FunctionTypeFrom<'disableSagemakerServicecatalogPortfolio'>;

  disassociateTrialComponent: FunctionTypeFrom<'disassociateTrialComponent'>;

  enableSagemakerServicecatalogPortfolio: FunctionTypeFrom<'enableSagemakerServicecatalogPortfolio'>;

  getDeviceFleetReport: FunctionTypeFrom<'getDeviceFleetReport'>;

  getLineageGroupPolicy: FunctionTypeFrom<'getLineageGroupPolicy'>;

  getModelPackageGroupPolicy: FunctionTypeFrom<'getModelPackageGroupPolicy'>;

  getSagemakerServicecatalogPortfolioStatus: FunctionTypeFrom<'getSagemakerServicecatalogPortfolioStatus'>;

  getSearchSuggestions: FunctionTypeFrom<'getSearchSuggestions'>;

  listActions(params: { [K in keyof Omit<ParamsFrom<'listActions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActions'>]-?: ReturnTypeFrom<'listActions'>[K]}['ActionSummaries'] }>
  listActions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActions'>]-?: ReturnTypeFrom<'listActions'>[K]}['ActionSummaries'] }>;

  listAlgorithms(params: { [K in keyof Omit<ParamsFrom<'listAlgorithms', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAlgorithms', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAlgorithms'>]-?: ReturnTypeFrom<'listAlgorithms'>[K]}['AlgorithmSummaryList'] }>
  listAlgorithms(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAlgorithms'>]-?: ReturnTypeFrom<'listAlgorithms'>[K]}['AlgorithmSummaryList'] }>;

  listAppImageConfigs(params: { [K in keyof Omit<ParamsFrom<'listAppImageConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAppImageConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAppImageConfigs'>]-?: ReturnTypeFrom<'listAppImageConfigs'>[K]}['AppImageConfigs'] }>
  listAppImageConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAppImageConfigs'>]-?: ReturnTypeFrom<'listAppImageConfigs'>[K]}['AppImageConfigs'] }>;

  listApps(params: { [K in keyof Omit<ParamsFrom<'listApps', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listApps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApps'>]-?: ReturnTypeFrom<'listApps'>[K]}['Apps'] }>
  listApps(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApps'>]-?: ReturnTypeFrom<'listApps'>[K]}['Apps'] }>;

  listArtifacts(params: { [K in keyof Omit<ParamsFrom<'listArtifacts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listArtifacts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listArtifacts'>]-?: ReturnTypeFrom<'listArtifacts'>[K]}['ArtifactSummaries'] }>
  listArtifacts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listArtifacts'>]-?: ReturnTypeFrom<'listArtifacts'>[K]}['ArtifactSummaries'] }>;

  listAssociations(params: { [K in keyof Omit<ParamsFrom<'listAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssociations'>]-?: ReturnTypeFrom<'listAssociations'>[K]}['AssociationSummaries'] }>
  listAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssociations'>]-?: ReturnTypeFrom<'listAssociations'>[K]}['AssociationSummaries'] }>;

  listAutoMLJobs(params: { [K in keyof Omit<ParamsFrom<'listAutoMLJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAutoMLJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAutoMLJobs'>]-?: ReturnTypeFrom<'listAutoMLJobs'>[K]}['AutoMLJobSummaries'] }>
  listAutoMLJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAutoMLJobs'>]-?: ReturnTypeFrom<'listAutoMLJobs'>[K]}['AutoMLJobSummaries'] }>;

  listCandidatesForAutoMLJob(params: { [K in keyof Omit<ParamsFrom<'listCandidatesForAutoMLJob', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCandidatesForAutoMLJob', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCandidatesForAutoMLJob'>]-?: ReturnTypeFrom<'listCandidatesForAutoMLJob'>[K]}['Candidates'] }>
  ;

  listCodeRepositories(params: { [K in keyof Omit<ParamsFrom<'listCodeRepositories', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCodeRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCodeRepositories'>]-?: ReturnTypeFrom<'listCodeRepositories'>[K]}['CodeRepositorySummaryList'] }>
  listCodeRepositories(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCodeRepositories'>]-?: ReturnTypeFrom<'listCodeRepositories'>[K]}['CodeRepositorySummaryList'] }>;

  listCompilationJobs(params: { [K in keyof Omit<ParamsFrom<'listCompilationJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCompilationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCompilationJobs'>]-?: ReturnTypeFrom<'listCompilationJobs'>[K]}['CompilationJobSummaries'] }>
  listCompilationJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCompilationJobs'>]-?: ReturnTypeFrom<'listCompilationJobs'>[K]}['CompilationJobSummaries'] }>;

  listContexts(params: { [K in keyof Omit<ParamsFrom<'listContexts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listContexts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContexts'>]-?: ReturnTypeFrom<'listContexts'>[K]}['ContextSummaries'] }>
  listContexts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContexts'>]-?: ReturnTypeFrom<'listContexts'>[K]}['ContextSummaries'] }>;

  listDataQualityJobDefinitions(params: { [K in keyof Omit<ParamsFrom<'listDataQualityJobDefinitions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDataQualityJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataQualityJobDefinitions'>]-?: ReturnTypeFrom<'listDataQualityJobDefinitions'>[K]}['JobDefinitionSummaries'] }>
  listDataQualityJobDefinitions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataQualityJobDefinitions'>]-?: ReturnTypeFrom<'listDataQualityJobDefinitions'>[K]}['JobDefinitionSummaries'] }>;

  listDeviceFleets(params: { [K in keyof Omit<ParamsFrom<'listDeviceFleets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDeviceFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeviceFleets'>]-?: ReturnTypeFrom<'listDeviceFleets'>[K]}['DeviceFleetSummaries'] }>
  listDeviceFleets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeviceFleets'>]-?: ReturnTypeFrom<'listDeviceFleets'>[K]}['DeviceFleetSummaries'] }>;

  listDevices(params: { [K in keyof Omit<ParamsFrom<'listDevices', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDevices'>]-?: ReturnTypeFrom<'listDevices'>[K]}['DeviceSummaries'] }>
  listDevices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDevices'>]-?: ReturnTypeFrom<'listDevices'>[K]}['DeviceSummaries'] }>;

  listDomains(params: { [K in keyof Omit<ParamsFrom<'listDomains', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['Domains'] }>
  listDomains(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['Domains'] }>;

  listEdgeDeploymentPlans(params: { [K in keyof Omit<ParamsFrom<'listEdgeDeploymentPlans', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEdgeDeploymentPlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEdgeDeploymentPlans'>]-?: ReturnTypeFrom<'listEdgeDeploymentPlans'>[K]}['EdgeDeploymentPlanSummaries'] }>
  listEdgeDeploymentPlans(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEdgeDeploymentPlans'>]-?: ReturnTypeFrom<'listEdgeDeploymentPlans'>[K]}['EdgeDeploymentPlanSummaries'] }>;

  listEdgePackagingJobs(params: { [K in keyof Omit<ParamsFrom<'listEdgePackagingJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEdgePackagingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEdgePackagingJobs'>]-?: ReturnTypeFrom<'listEdgePackagingJobs'>[K]}['EdgePackagingJobSummaries'] }>
  listEdgePackagingJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEdgePackagingJobs'>]-?: ReturnTypeFrom<'listEdgePackagingJobs'>[K]}['EdgePackagingJobSummaries'] }>;

  listEndpointConfigs(params: { [K in keyof Omit<ParamsFrom<'listEndpointConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEndpointConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpointConfigs'>]-?: ReturnTypeFrom<'listEndpointConfigs'>[K]}['EndpointConfigs'] }>
  listEndpointConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpointConfigs'>]-?: ReturnTypeFrom<'listEndpointConfigs'>[K]}['EndpointConfigs'] }>;

  listEndpoints(params: { [K in keyof Omit<ParamsFrom<'listEndpoints', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpoints'>]-?: ReturnTypeFrom<'listEndpoints'>[K]}['Endpoints'] }>
  listEndpoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpoints'>]-?: ReturnTypeFrom<'listEndpoints'>[K]}['Endpoints'] }>;

  listExperiments(params: { [K in keyof Omit<ParamsFrom<'listExperiments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listExperiments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExperiments'>]-?: ReturnTypeFrom<'listExperiments'>[K]}['ExperimentSummaries'] }>
  listExperiments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExperiments'>]-?: ReturnTypeFrom<'listExperiments'>[K]}['ExperimentSummaries'] }>;

  listFeatureGroups(params: { [K in keyof Omit<ParamsFrom<'listFeatureGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFeatureGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFeatureGroups'>]-?: ReturnTypeFrom<'listFeatureGroups'>[K]}['FeatureGroupSummaries'] }>
  listFeatureGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFeatureGroups'>]-?: ReturnTypeFrom<'listFeatureGroups'>[K]}['FeatureGroupSummaries'] }>;

  listFlowDefinitions(params: { [K in keyof Omit<ParamsFrom<'listFlowDefinitions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFlowDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFlowDefinitions'>]-?: ReturnTypeFrom<'listFlowDefinitions'>[K]}['FlowDefinitionSummaries'] }>
  listFlowDefinitions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFlowDefinitions'>]-?: ReturnTypeFrom<'listFlowDefinitions'>[K]}['FlowDefinitionSummaries'] }>;

  listHumanTaskUis(params: { [K in keyof Omit<ParamsFrom<'listHumanTaskUis', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listHumanTaskUis', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHumanTaskUis'>]-?: ReturnTypeFrom<'listHumanTaskUis'>[K]}['HumanTaskUiSummaries'] }>
  listHumanTaskUis(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHumanTaskUis'>]-?: ReturnTypeFrom<'listHumanTaskUis'>[K]}['HumanTaskUiSummaries'] }>;

  listHyperParameterTuningJobs(params: { [K in keyof Omit<ParamsFrom<'listHyperParameterTuningJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listHyperParameterTuningJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHyperParameterTuningJobs'>]-?: ReturnTypeFrom<'listHyperParameterTuningJobs'>[K]}['HyperParameterTuningJobSummaries'] }>
  listHyperParameterTuningJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHyperParameterTuningJobs'>]-?: ReturnTypeFrom<'listHyperParameterTuningJobs'>[K]}['HyperParameterTuningJobSummaries'] }>;

  listImageVersions(params: { [K in keyof Omit<ParamsFrom<'listImageVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listImageVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImageVersions'>]-?: ReturnTypeFrom<'listImageVersions'>[K]}['ImageVersions'] }>
  ;

  listImages(params: { [K in keyof Omit<ParamsFrom<'listImages', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImages'>]-?: ReturnTypeFrom<'listImages'>[K]}['Images'] }>
  listImages(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImages'>]-?: ReturnTypeFrom<'listImages'>[K]}['Images'] }>;

  listInferenceRecommendationsJobs(params: { [K in keyof Omit<ParamsFrom<'listInferenceRecommendationsJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInferenceRecommendationsJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInferenceRecommendationsJobs'>]-?: ReturnTypeFrom<'listInferenceRecommendationsJobs'>[K]}['InferenceRecommendationsJobs'] }>
  listInferenceRecommendationsJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInferenceRecommendationsJobs'>]-?: ReturnTypeFrom<'listInferenceRecommendationsJobs'>[K]}['InferenceRecommendationsJobs'] }>;

  listLabelingJobs(params: { [K in keyof Omit<ParamsFrom<'listLabelingJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listLabelingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLabelingJobs'>]-?: ReturnTypeFrom<'listLabelingJobs'>[K]}['LabelingJobSummaryList'] }>
  listLabelingJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLabelingJobs'>]-?: ReturnTypeFrom<'listLabelingJobs'>[K]}['LabelingJobSummaryList'] }>;

  listLabelingJobsForWorkteam(params: { [K in keyof Omit<ParamsFrom<'listLabelingJobsForWorkteam', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listLabelingJobsForWorkteam', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLabelingJobsForWorkteam'>]-?: ReturnTypeFrom<'listLabelingJobsForWorkteam'>[K]}['LabelingJobSummaryList'] }>
  ;

  listLineageGroups(params: { [K in keyof Omit<ParamsFrom<'listLineageGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listLineageGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLineageGroups'>]-?: ReturnTypeFrom<'listLineageGroups'>[K]}['LineageGroupSummaries'] }>
  listLineageGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLineageGroups'>]-?: ReturnTypeFrom<'listLineageGroups'>[K]}['LineageGroupSummaries'] }>;

  listModelBiasJobDefinitions(params: { [K in keyof Omit<ParamsFrom<'listModelBiasJobDefinitions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listModelBiasJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelBiasJobDefinitions'>]-?: ReturnTypeFrom<'listModelBiasJobDefinitions'>[K]}['JobDefinitionSummaries'] }>
  listModelBiasJobDefinitions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelBiasJobDefinitions'>]-?: ReturnTypeFrom<'listModelBiasJobDefinitions'>[K]}['JobDefinitionSummaries'] }>;

  listModelExplainabilityJobDefinitions(params: { [K in keyof Omit<ParamsFrom<'listModelExplainabilityJobDefinitions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listModelExplainabilityJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelExplainabilityJobDefinitions'>]-?: ReturnTypeFrom<'listModelExplainabilityJobDefinitions'>[K]}['JobDefinitionSummaries'] }>
  listModelExplainabilityJobDefinitions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelExplainabilityJobDefinitions'>]-?: ReturnTypeFrom<'listModelExplainabilityJobDefinitions'>[K]}['JobDefinitionSummaries'] }>;

  listModelMetadata(params: { [K in keyof Omit<ParamsFrom<'listModelMetadata', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listModelMetadata', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelMetadata'>]-?: ReturnTypeFrom<'listModelMetadata'>[K]}['ModelMetadataSummaries'] }>
  listModelMetadata(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelMetadata'>]-?: ReturnTypeFrom<'listModelMetadata'>[K]}['ModelMetadataSummaries'] }>;

  listModelPackageGroups(params: { [K in keyof Omit<ParamsFrom<'listModelPackageGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listModelPackageGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelPackageGroups'>]-?: ReturnTypeFrom<'listModelPackageGroups'>[K]}['ModelPackageGroupSummaryList'] }>
  listModelPackageGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelPackageGroups'>]-?: ReturnTypeFrom<'listModelPackageGroups'>[K]}['ModelPackageGroupSummaryList'] }>;

  listModelPackages(params: { [K in keyof Omit<ParamsFrom<'listModelPackages', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listModelPackages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelPackages'>]-?: ReturnTypeFrom<'listModelPackages'>[K]}['ModelPackageSummaryList'] }>
  listModelPackages(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelPackages'>]-?: ReturnTypeFrom<'listModelPackages'>[K]}['ModelPackageSummaryList'] }>;

  listModelQualityJobDefinitions(params: { [K in keyof Omit<ParamsFrom<'listModelQualityJobDefinitions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listModelQualityJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelQualityJobDefinitions'>]-?: ReturnTypeFrom<'listModelQualityJobDefinitions'>[K]}['JobDefinitionSummaries'] }>
  listModelQualityJobDefinitions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelQualityJobDefinitions'>]-?: ReturnTypeFrom<'listModelQualityJobDefinitions'>[K]}['JobDefinitionSummaries'] }>;

  listModels(params: { [K in keyof Omit<ParamsFrom<'listModels', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModels'>]-?: ReturnTypeFrom<'listModels'>[K]}['Models'] }>
  listModels(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModels'>]-?: ReturnTypeFrom<'listModels'>[K]}['Models'] }>;

  listMonitoringExecutions(params: { [K in keyof Omit<ParamsFrom<'listMonitoringExecutions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMonitoringExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMonitoringExecutions'>]-?: ReturnTypeFrom<'listMonitoringExecutions'>[K]}['MonitoringExecutionSummaries'] }>
  listMonitoringExecutions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMonitoringExecutions'>]-?: ReturnTypeFrom<'listMonitoringExecutions'>[K]}['MonitoringExecutionSummaries'] }>;

  listMonitoringSchedules(params: { [K in keyof Omit<ParamsFrom<'listMonitoringSchedules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMonitoringSchedules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMonitoringSchedules'>]-?: ReturnTypeFrom<'listMonitoringSchedules'>[K]}['MonitoringScheduleSummaries'] }>
  listMonitoringSchedules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMonitoringSchedules'>]-?: ReturnTypeFrom<'listMonitoringSchedules'>[K]}['MonitoringScheduleSummaries'] }>;

  listNotebookInstanceLifecycleConfigs(params: { [K in keyof Omit<ParamsFrom<'listNotebookInstanceLifecycleConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listNotebookInstanceLifecycleConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotebookInstanceLifecycleConfigs'>]-?: ReturnTypeFrom<'listNotebookInstanceLifecycleConfigs'>[K]}['NotebookInstanceLifecycleConfigs'] }>
  listNotebookInstanceLifecycleConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotebookInstanceLifecycleConfigs'>]-?: ReturnTypeFrom<'listNotebookInstanceLifecycleConfigs'>[K]}['NotebookInstanceLifecycleConfigs'] }>;

  listNotebookInstances(params: { [K in keyof Omit<ParamsFrom<'listNotebookInstances', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listNotebookInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotebookInstances'>]-?: ReturnTypeFrom<'listNotebookInstances'>[K]}['NotebookInstances'] }>
  listNotebookInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotebookInstances'>]-?: ReturnTypeFrom<'listNotebookInstances'>[K]}['NotebookInstances'] }>;

  listPipelineExecutionSteps(params: { [K in keyof Omit<ParamsFrom<'listPipelineExecutionSteps', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPipelineExecutionSteps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelineExecutionSteps'>]-?: ReturnTypeFrom<'listPipelineExecutionSteps'>[K]}['PipelineExecutionSteps'] }>
  listPipelineExecutionSteps(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelineExecutionSteps'>]-?: ReturnTypeFrom<'listPipelineExecutionSteps'>[K]}['PipelineExecutionSteps'] }>;

  listPipelineExecutions(params: { [K in keyof Omit<ParamsFrom<'listPipelineExecutions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPipelineExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelineExecutions'>]-?: ReturnTypeFrom<'listPipelineExecutions'>[K]}['PipelineExecutionSummaries'] }>
  ;

  listPipelineParametersForExecution(params: { [K in keyof Omit<ParamsFrom<'listPipelineParametersForExecution', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPipelineParametersForExecution', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelineParametersForExecution'>]-?: ReturnTypeFrom<'listPipelineParametersForExecution'>[K]}['PipelineParameters'] }>
  ;

  listPipelines(params: { [K in keyof Omit<ParamsFrom<'listPipelines', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPipelines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['PipelineSummaries'] }>
  listPipelines(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['PipelineSummaries'] }>;

  listProcessingJobs(params: { [K in keyof Omit<ParamsFrom<'listProcessingJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProcessingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProcessingJobs'>]-?: ReturnTypeFrom<'listProcessingJobs'>[K]}['ProcessingJobSummaries'] }>
  listProcessingJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProcessingJobs'>]-?: ReturnTypeFrom<'listProcessingJobs'>[K]}['ProcessingJobSummaries'] }>;

  listProjects: FunctionTypeFrom<'listProjects'>;

  listStageDevices(params: { [K in keyof Omit<ParamsFrom<'listStageDevices', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStageDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStageDevices'>]-?: ReturnTypeFrom<'listStageDevices'>[K]}['DeviceDeploymentSummaries'] }>
  ;

  listStudioLifecycleConfigs(params: { [K in keyof Omit<ParamsFrom<'listStudioLifecycleConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStudioLifecycleConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudioLifecycleConfigs'>]-?: ReturnTypeFrom<'listStudioLifecycleConfigs'>[K]}['StudioLifecycleConfigs'] }>
  listStudioLifecycleConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStudioLifecycleConfigs'>]-?: ReturnTypeFrom<'listStudioLifecycleConfigs'>[K]}['StudioLifecycleConfigs'] }>;

  listSubscribedWorkteams(params: { [K in keyof Omit<ParamsFrom<'listSubscribedWorkteams', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSubscribedWorkteams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSubscribedWorkteams'>]-?: ReturnTypeFrom<'listSubscribedWorkteams'>[K]}['SubscribedWorkteams'] }>
  listSubscribedWorkteams(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSubscribedWorkteams'>]-?: ReturnTypeFrom<'listSubscribedWorkteams'>[K]}['SubscribedWorkteams'] }>;

  listTags(params: { [K in keyof Omit<ParamsFrom<'listTags', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTags'>]-?: ReturnTypeFrom<'listTags'>[K]}['Tags'] }>
  ;

  listTrainingJobs(params: { [K in keyof Omit<ParamsFrom<'listTrainingJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTrainingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrainingJobs'>]-?: ReturnTypeFrom<'listTrainingJobs'>[K]}['TrainingJobSummaries'] }>
  listTrainingJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrainingJobs'>]-?: ReturnTypeFrom<'listTrainingJobs'>[K]}['TrainingJobSummaries'] }>;

  listTrainingJobsForHyperParameterTuningJob(params: { [K in keyof Omit<ParamsFrom<'listTrainingJobsForHyperParameterTuningJob', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTrainingJobsForHyperParameterTuningJob', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrainingJobsForHyperParameterTuningJob'>]-?: ReturnTypeFrom<'listTrainingJobsForHyperParameterTuningJob'>[K]}['TrainingJobSummaries'] }>
  ;

  listTransformJobs(params: { [K in keyof Omit<ParamsFrom<'listTransformJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTransformJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTransformJobs'>]-?: ReturnTypeFrom<'listTransformJobs'>[K]}['TransformJobSummaries'] }>
  listTransformJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTransformJobs'>]-?: ReturnTypeFrom<'listTransformJobs'>[K]}['TransformJobSummaries'] }>;

  listTrialComponents(params: { [K in keyof Omit<ParamsFrom<'listTrialComponents', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTrialComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrialComponents'>]-?: ReturnTypeFrom<'listTrialComponents'>[K]}['TrialComponentSummaries'] }>
  listTrialComponents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrialComponents'>]-?: ReturnTypeFrom<'listTrialComponents'>[K]}['TrialComponentSummaries'] }>;

  listTrials(params: { [K in keyof Omit<ParamsFrom<'listTrials', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTrials', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrials'>]-?: ReturnTypeFrom<'listTrials'>[K]}['TrialSummaries'] }>
  listTrials(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrials'>]-?: ReturnTypeFrom<'listTrials'>[K]}['TrialSummaries'] }>;

  listUserProfiles(params: { [K in keyof Omit<ParamsFrom<'listUserProfiles', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listUserProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUserProfiles'>]-?: ReturnTypeFrom<'listUserProfiles'>[K]}['UserProfiles'] }>
  listUserProfiles(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUserProfiles'>]-?: ReturnTypeFrom<'listUserProfiles'>[K]}['UserProfiles'] }>;

  listWorkforces(params: { [K in keyof Omit<ParamsFrom<'listWorkforces', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listWorkforces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkforces'>]-?: ReturnTypeFrom<'listWorkforces'>[K]}['Workforces'] }>
  listWorkforces(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkforces'>]-?: ReturnTypeFrom<'listWorkforces'>[K]}['Workforces'] }>;

  listWorkteams(params: { [K in keyof Omit<ParamsFrom<'listWorkteams', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listWorkteams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkteams'>]-?: ReturnTypeFrom<'listWorkteams'>[K]}['Workteams'] }>
  listWorkteams(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkteams'>]-?: ReturnTypeFrom<'listWorkteams'>[K]}['Workteams'] }>;

  putModelPackageGroupPolicy: FunctionTypeFrom<'putModelPackageGroupPolicy'>;

  queryLineage: FunctionTypeFrom<'queryLineage'>;

  registerDevices: FunctionTypeFrom<'registerDevices'>;

  renderUiTemplate: FunctionTypeFrom<'renderUiTemplate'>;

  retryPipelineExecution: FunctionTypeFrom<'retryPipelineExecution'>;

  search(params: { [K in keyof Omit<ParamsFrom<'search', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'search', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'search'>]-?: ReturnTypeFrom<'search'>[K]}['Results'] }>
  ;

  sendPipelineExecutionStepFailure: FunctionTypeFrom<'sendPipelineExecutionStepFailure'>;

  sendPipelineExecutionStepSuccess: FunctionTypeFrom<'sendPipelineExecutionStepSuccess'>;

  startEdgeDeploymentStage: FunctionTypeFrom<'startEdgeDeploymentStage'>;

  startMonitoringSchedule: FunctionTypeFrom<'startMonitoringSchedule'>;

  startNotebookInstance: FunctionTypeFrom<'startNotebookInstance'>;

  startPipelineExecution: FunctionTypeFrom<'startPipelineExecution'>;

  stopAutoMLJob: FunctionTypeFrom<'stopAutoMLJob'>;

  stopCompilationJob: FunctionTypeFrom<'stopCompilationJob'>;

  stopEdgeDeploymentStage: FunctionTypeFrom<'stopEdgeDeploymentStage'>;

  stopEdgePackagingJob: FunctionTypeFrom<'stopEdgePackagingJob'>;

  stopHyperParameterTuningJob: FunctionTypeFrom<'stopHyperParameterTuningJob'>;

  stopInferenceRecommendationsJob: FunctionTypeFrom<'stopInferenceRecommendationsJob'>;

  stopLabelingJob: FunctionTypeFrom<'stopLabelingJob'>;

  stopMonitoringSchedule: FunctionTypeFrom<'stopMonitoringSchedule'>;

  stopNotebookInstance: FunctionTypeFrom<'stopNotebookInstance'>;

  stopPipelineExecution: FunctionTypeFrom<'stopPipelineExecution'>;

  stopProcessingJob: FunctionTypeFrom<'stopProcessingJob'>;

  stopTrainingJob: FunctionTypeFrom<'stopTrainingJob'>;

  stopTransformJob: FunctionTypeFrom<'stopTransformJob'>;

  updateAction: FunctionTypeFrom<'updateAction'>;

  updateAppImageConfig: FunctionTypeFrom<'updateAppImageConfig'>;

  updateArtifact: FunctionTypeFrom<'updateArtifact'>;

  updateCodeRepository: FunctionTypeFrom<'updateCodeRepository'>;

  updateContext: FunctionTypeFrom<'updateContext'>;

  updateDeviceFleet: FunctionTypeFrom<'updateDeviceFleet'>;

  updateDevices: FunctionTypeFrom<'updateDevices'>;

  updateDomain: FunctionTypeFrom<'updateDomain'>;

  updateEndpoint: FunctionTypeFrom<'updateEndpoint'>;

  updateEndpointWeightsAndCapacities: FunctionTypeFrom<'updateEndpointWeightsAndCapacities'>;

  updateExperiment: FunctionTypeFrom<'updateExperiment'>;

  updateFeatureGroup: FunctionTypeFrom<'updateFeatureGroup'>;

  updateFeatureMetadata: FunctionTypeFrom<'updateFeatureMetadata'>;

  updateImage: FunctionTypeFrom<'updateImage'>;

  updateModelPackage: FunctionTypeFrom<'updateModelPackage'>;

  updateMonitoringSchedule: FunctionTypeFrom<'updateMonitoringSchedule'>;

  updateNotebookInstance: FunctionTypeFrom<'updateNotebookInstance'>;

  updateNotebookInstanceLifecycleConfig: FunctionTypeFrom<'updateNotebookInstanceLifecycleConfig'>;

  updatePipeline: FunctionTypeFrom<'updatePipeline'>;

  updatePipelineExecution: FunctionTypeFrom<'updatePipelineExecution'>;

  updateProject: FunctionTypeFrom<'updateProject'>;

  updateTrainingJob: FunctionTypeFrom<'updateTrainingJob'>;

  updateTrial: FunctionTypeFrom<'updateTrial'>;

  updateTrialComponent: FunctionTypeFrom<'updateTrialComponent'>;

  updateUserProfile: FunctionTypeFrom<'updateUserProfile'>;

  updateWorkforce: FunctionTypeFrom<'updateWorkforce'>;

  updateWorkteam: FunctionTypeFrom<'updateWorkteam'>
}
 
export class SageMaker implements ClientType {
  private constructor(private readonly client: AWSSageMaker) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sagemaker';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listActions","listAlgorithms","listAppImageConfigs","listApps","listArtifacts","listAssociations","listAutoMLJobs","listCodeRepositories","listCompilationJobs","listContexts","listDataQualityJobDefinitions","listDeviceFleets","listDevices","listDomains","listEdgeDeploymentPlans","listEdgePackagingJobs","listEndpointConfigs","listEndpoints","listExperiments","listFeatureGroups","listFlowDefinitions","listHumanTaskUis","listHyperParameterTuningJobs","listImages","listInferenceRecommendationsJobs","listLabelingJobs","listLineageGroups","listModelBiasJobDefinitions","listModelExplainabilityJobDefinitions","listModelMetadata","listModelPackageGroups","listModelPackages","listModelQualityJobDefinitions","listModels","listMonitoringExecutions","listMonitoringSchedules","listNotebookInstanceLifecycleConfigs","listNotebookInstances","listPipelineExecutionSteps","listPipelines","listProcessingJobs","listProjects","listStudioLifecycleConfigs","listSubscribedWorkteams","listTrainingJobs","listTransformJobs","listTrialComponents","listTrials","listUserProfiles","listWorkforces","listWorkteams","queryLineage"] as const;
  
  async addAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.addAssociation(...args).promise()
  }

  async addTags(...args: any): Promise<any> {
  // undefined
    return this.client.addTags(...args).promise()
  }

  async associateTrialComponent(...args: any): Promise<any> {
  // undefined
    return this.client.associateTrialComponent(...args).promise()
  }

  async batchDescribeModelPackage(...args: any): Promise<any> {
  // undefined
    return this.client.batchDescribeModelPackage(...args).promise()
  }

  async createAction(...args: any): Promise<any> {
  // undefined
    return this.client.createAction(...args).promise()
  }

  async createAlgorithm(...args: any): Promise<any> {
  // undefined
    return this.client.createAlgorithm(...args).promise()
  }

  async createApp(...args: any): Promise<any> {
  // undefined
    return this.client.createApp(...args).promise()
  }

  async createAppImageConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createAppImageConfig(...args).promise()
  }

  async createArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.createArtifact(...args).promise()
  }

  async createAutoMLJob(...args: any): Promise<any> {
  // undefined
    return this.client.createAutoMLJob(...args).promise()
  }

  async createCodeRepository(...args: any): Promise<any> {
  // undefined
    return this.client.createCodeRepository(...args).promise()
  }

  async createCompilationJob(...args: any): Promise<any> {
  // undefined
    return this.client.createCompilationJob(...args).promise()
  }

  async createContext(...args: any): Promise<any> {
  // undefined
    return this.client.createContext(...args).promise()
  }

  async createDataQualityJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createDataQualityJobDefinition(...args).promise()
  }

  async createDeviceFleet(...args: any): Promise<any> {
  // undefined
    return this.client.createDeviceFleet(...args).promise()
  }

  async createDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createDomain(...args).promise()
  }

  async createEdgeDeploymentPlan(...args: any): Promise<any> {
  // undefined
    return this.client.createEdgeDeploymentPlan(...args).promise()
  }

  async createEdgeDeploymentStage(...args: any): Promise<any> {
  // undefined
    return this.client.createEdgeDeploymentStage(...args).promise()
  }

  async createEdgePackagingJob(...args: any): Promise<any> {
  // undefined
    return this.client.createEdgePackagingJob(...args).promise()
  }

  async createEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createEndpoint(...args).promise()
  }

  async createEndpointConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createEndpointConfig(...args).promise()
  }

  async createExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.createExperiment(...args).promise()
  }

  async createFeatureGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createFeatureGroup(...args).promise()
  }

  async createFlowDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createFlowDefinition(...args).promise()
  }

  async createHumanTaskUi(...args: any): Promise<any> {
  // undefined
    return this.client.createHumanTaskUi(...args).promise()
  }

  async createHyperParameterTuningJob(...args: any): Promise<any> {
  // undefined
    return this.client.createHyperParameterTuningJob(...args).promise()
  }

  async createImage(...args: any): Promise<any> {
  // undefined
    return this.client.createImage(...args).promise()
  }

  async createImageVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createImageVersion(...args).promise()
  }

  async createInferenceRecommendationsJob(...args: any): Promise<any> {
  // undefined
    return this.client.createInferenceRecommendationsJob(...args).promise()
  }

  async createLabelingJob(...args: any): Promise<any> {
  // undefined
    return this.client.createLabelingJob(...args).promise()
  }

  async createModel(...args: any): Promise<any> {
  // undefined
    return this.client.createModel(...args).promise()
  }

  async createModelBiasJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createModelBiasJobDefinition(...args).promise()
  }

  async createModelExplainabilityJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createModelExplainabilityJobDefinition(...args).promise()
  }

  async createModelPackage(...args: any): Promise<any> {
  // undefined
    return this.client.createModelPackage(...args).promise()
  }

  async createModelPackageGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createModelPackageGroup(...args).promise()
  }

  async createModelQualityJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createModelQualityJobDefinition(...args).promise()
  }

  async createMonitoringSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.createMonitoringSchedule(...args).promise()
  }

  async createNotebookInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createNotebookInstance(...args).promise()
  }

  async createNotebookInstanceLifecycleConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createNotebookInstanceLifecycleConfig(...args).promise()
  }

  async createPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createPipeline(...args).promise()
  }

  async createPresignedDomainUrl(...args: any): Promise<any> {
  // undefined
    return this.client.createPresignedDomainUrl(...args).promise()
  }

  async createPresignedNotebookInstanceUrl(...args: any): Promise<any> {
  // undefined
    return this.client.createPresignedNotebookInstanceUrl(...args).promise()
  }

  async createProcessingJob(...args: any): Promise<any> {
  // undefined
    return this.client.createProcessingJob(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async createStudioLifecycleConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createStudioLifecycleConfig(...args).promise()
  }

  async createTrainingJob(...args: any): Promise<any> {
  // undefined
    return this.client.createTrainingJob(...args).promise()
  }

  async createTransformJob(...args: any): Promise<any> {
  // undefined
    return this.client.createTransformJob(...args).promise()
  }

  async createTrial(...args: any): Promise<any> {
  // undefined
    return this.client.createTrial(...args).promise()
  }

  async createTrialComponent(...args: any): Promise<any> {
  // undefined
    return this.client.createTrialComponent(...args).promise()
  }

  async createUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createUserProfile(...args).promise()
  }

  async createWorkforce(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkforce(...args).promise()
  }

  async createWorkteam(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkteam(...args).promise()
  }

  async deleteAction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAction(...args).promise()
  }

  async deleteAlgorithm(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlgorithm(...args).promise()
  }

  async deleteApp(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApp(...args).promise()
  }

  async deleteAppImageConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppImageConfig(...args).promise()
  }

  async deleteArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.deleteArtifact(...args).promise()
  }

  async deleteAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssociation(...args).promise()
  }

  async deleteCodeRepository(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCodeRepository(...args).promise()
  }

  async deleteContext(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContext(...args).promise()
  }

  async deleteDataQualityJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataQualityJobDefinition(...args).promise()
  }

  async deleteDeviceFleet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeviceFleet(...args).promise()
  }

  async deleteDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomain(...args).promise()
  }

  async deleteEdgeDeploymentPlan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEdgeDeploymentPlan(...args).promise()
  }

  async deleteEdgeDeploymentStage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEdgeDeploymentStage(...args).promise()
  }

  async deleteEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpoint(...args).promise()
  }

  async deleteEndpointConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpointConfig(...args).promise()
  }

  async deleteExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExperiment(...args).promise()
  }

  async deleteFeatureGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFeatureGroup(...args).promise()
  }

  async deleteFlowDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFlowDefinition(...args).promise()
  }

  async deleteHumanTaskUi(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHumanTaskUi(...args).promise()
  }

  async deleteImage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImage(...args).promise()
  }

  async deleteImageVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImageVersion(...args).promise()
  }

  async deleteModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModel(...args).promise()
  }

  async deleteModelBiasJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModelBiasJobDefinition(...args).promise()
  }

  async deleteModelExplainabilityJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModelExplainabilityJobDefinition(...args).promise()
  }

  async deleteModelPackage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModelPackage(...args).promise()
  }

  async deleteModelPackageGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModelPackageGroup(...args).promise()
  }

  async deleteModelPackageGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModelPackageGroupPolicy(...args).promise()
  }

  async deleteModelQualityJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModelQualityJobDefinition(...args).promise()
  }

  async deleteMonitoringSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMonitoringSchedule(...args).promise()
  }

  async deleteNotebookInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNotebookInstance(...args).promise()
  }

  async deleteNotebookInstanceLifecycleConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNotebookInstanceLifecycleConfig(...args).promise()
  }

  async deletePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deletePipeline(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async deleteStudioLifecycleConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStudioLifecycleConfig(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async deleteTrial(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrial(...args).promise()
  }

  async deleteTrialComponent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrialComponent(...args).promise()
  }

  async deleteUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserProfile(...args).promise()
  }

  async deleteWorkforce(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkforce(...args).promise()
  }

  async deleteWorkteam(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkteam(...args).promise()
  }

  async deregisterDevices(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterDevices(...args).promise()
  }

  async describeAction(...args: any): Promise<any> {
  // undefined
    return this.client.describeAction(...args).promise()
  }

  async describeAlgorithm(...args: any): Promise<any> {
  // undefined
    return this.client.describeAlgorithm(...args).promise()
  }

  async describeApp(...args: any): Promise<any> {
  // undefined
    return this.client.describeApp(...args).promise()
  }

  async describeAppImageConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppImageConfig(...args).promise()
  }

  async describeArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.describeArtifact(...args).promise()
  }

  async describeAutoMLJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeAutoMLJob(...args).promise()
  }

  async describeCodeRepository(...args: any): Promise<any> {
  // undefined
    return this.client.describeCodeRepository(...args).promise()
  }

  async describeCompilationJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeCompilationJob(...args).promise()
  }

  async describeContext(...args: any): Promise<any> {
  // undefined
    return this.client.describeContext(...args).promise()
  }

  async describeDataQualityJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataQualityJobDefinition(...args).promise()
  }

  async describeDevice(...args: any): Promise<any> {
  // undefined
    return this.client.describeDevice(...args).promise()
  }

  async describeDeviceFleet(...args: any): Promise<any> {
  // undefined
    return this.client.describeDeviceFleet(...args).promise()
  }

  async describeDomain(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomain(...args).promise()
  }

  async describeEdgeDeploymentPlan(...args: any): Promise<any> {
  // undefined
    return this.client.describeEdgeDeploymentPlan(...args).promise()
  }

  async describeEdgePackagingJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeEdgePackagingJob(...args).promise()
  }

  async describeEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.describeEndpoint(...args).promise()
  }

  async describeEndpointConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeEndpointConfig(...args).promise()
  }

  async describeExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.describeExperiment(...args).promise()
  }

  async describeFeatureGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeFeatureGroup(...args).promise()
  }

  async describeFeatureMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.describeFeatureMetadata(...args).promise()
  }

  async describeFlowDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.describeFlowDefinition(...args).promise()
  }

  async describeHumanTaskUi(...args: any): Promise<any> {
  // undefined
    return this.client.describeHumanTaskUi(...args).promise()
  }

  async describeHyperParameterTuningJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeHyperParameterTuningJob(...args).promise()
  }

  async describeImage(...args: any): Promise<any> {
  // undefined
    return this.client.describeImage(...args).promise()
  }

  async describeImageVersion(...args: any): Promise<any> {
  // undefined
    return this.client.describeImageVersion(...args).promise()
  }

  async describeInferenceRecommendationsJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeInferenceRecommendationsJob(...args).promise()
  }

  async describeLabelingJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeLabelingJob(...args).promise()
  }

  async describeLineageGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeLineageGroup(...args).promise()
  }

  async describeModel(...args: any): Promise<any> {
  // undefined
    return this.client.describeModel(...args).promise()
  }

  async describeModelBiasJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.describeModelBiasJobDefinition(...args).promise()
  }

  async describeModelExplainabilityJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.describeModelExplainabilityJobDefinition(...args).promise()
  }

  async describeModelPackage(...args: any): Promise<any> {
  // undefined
    return this.client.describeModelPackage(...args).promise()
  }

  async describeModelPackageGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeModelPackageGroup(...args).promise()
  }

  async describeModelQualityJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.describeModelQualityJobDefinition(...args).promise()
  }

  async describeMonitoringSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.describeMonitoringSchedule(...args).promise()
  }

  async describeNotebookInstance(...args: any): Promise<any> {
  // undefined
    return this.client.describeNotebookInstance(...args).promise()
  }

  async describeNotebookInstanceLifecycleConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeNotebookInstanceLifecycleConfig(...args).promise()
  }

  async describePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.describePipeline(...args).promise()
  }

  async describePipelineDefinitionForExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describePipelineDefinitionForExecution(...args).promise()
  }

  async describePipelineExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describePipelineExecution(...args).promise()
  }

  async describeProcessingJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeProcessingJob(...args).promise()
  }

  async describeProject(...args: any): Promise<any> {
  // undefined
    return this.client.describeProject(...args).promise()
  }

  async describeStudioLifecycleConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeStudioLifecycleConfig(...args).promise()
  }

  async describeSubscribedWorkteam(...args: any): Promise<any> {
  // undefined
    return this.client.describeSubscribedWorkteam(...args).promise()
  }

  async describeTrainingJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeTrainingJob(...args).promise()
  }

  async describeTransformJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeTransformJob(...args).promise()
  }

  async describeTrial(...args: any): Promise<any> {
  // undefined
    return this.client.describeTrial(...args).promise()
  }

  async describeTrialComponent(...args: any): Promise<any> {
  // undefined
    return this.client.describeTrialComponent(...args).promise()
  }

  async describeUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.describeUserProfile(...args).promise()
  }

  async describeWorkforce(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkforce(...args).promise()
  }

  async describeWorkteam(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkteam(...args).promise()
  }

  async disableSagemakerServicecatalogPortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.disableSagemakerServicecatalogPortfolio(...args).promise()
  }

  async disassociateTrialComponent(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTrialComponent(...args).promise()
  }

  async enableSagemakerServicecatalogPortfolio(...args: any): Promise<any> {
  // undefined
    return this.client.enableSagemakerServicecatalogPortfolio(...args).promise()
  }

  async getDeviceFleetReport(...args: any): Promise<any> {
  // undefined
    return this.client.getDeviceFleetReport(...args).promise()
  }

  async getLineageGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getLineageGroupPolicy(...args).promise()
  }

  async getModelPackageGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getModelPackageGroupPolicy(...args).promise()
  }

  async getSagemakerServicecatalogPortfolioStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getSagemakerServicecatalogPortfolioStatus(...args).promise()
  }

  async getSearchSuggestions(...args: any): Promise<any> {
  // undefined
    return this.client.getSearchSuggestions(...args).promise()
  }

  async listActions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ActionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listActions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ActionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAlgorithms(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AlgorithmSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAlgorithms(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AlgorithmSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAppImageConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AppImageConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAppImageConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AppImageConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listApps(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Apps"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listApps(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Apps ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listArtifacts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ArtifactSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listArtifacts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ArtifactSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociationSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AssociationSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAutoMLJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AutoMLJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAutoMLJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AutoMLJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCandidatesForAutoMLJob(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Candidates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCandidatesForAutoMLJob(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Candidates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCodeRepositories(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CodeRepositorySummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCodeRepositories(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CodeRepositorySummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCompilationJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CompilationJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCompilationJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CompilationJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContexts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ContextSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContexts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ContextSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataQualityJobDefinitions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobDefinitionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataQualityJobDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.JobDefinitionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeviceFleets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DeviceFleetSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDeviceFleets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DeviceFleetSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDevices(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DeviceSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DeviceSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDomains(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Domains"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDomains(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Domains ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEdgeDeploymentPlans(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EdgeDeploymentPlanSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEdgeDeploymentPlans(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EdgeDeploymentPlanSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEdgePackagingJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EdgePackagingJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEdgePackagingJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EdgePackagingJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEndpointConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EndpointConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEndpointConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EndpointConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEndpoints(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Endpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Endpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExperiments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ExperimentSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExperiments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ExperimentSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFeatureGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FeatureGroupSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFeatureGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FeatureGroupSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFlowDefinitions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FlowDefinitionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFlowDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FlowDefinitionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHumanTaskUis(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HumanTaskUiSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHumanTaskUis(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.HumanTaskUiSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHyperParameterTuningJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HyperParameterTuningJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHyperParameterTuningJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.HyperParameterTuningJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImageVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ImageVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImageVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ImageVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImages(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Images"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Images ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInferenceRecommendationsJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InferenceRecommendationsJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInferenceRecommendationsJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InferenceRecommendationsJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLabelingJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LabelingJobSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLabelingJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LabelingJobSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLabelingJobsForWorkteam(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LabelingJobSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLabelingJobsForWorkteam(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LabelingJobSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLineageGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LineageGroupSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLineageGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LineageGroupSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelBiasJobDefinitions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobDefinitionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelBiasJobDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.JobDefinitionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelExplainabilityJobDefinitions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobDefinitionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelExplainabilityJobDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.JobDefinitionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelMetadata(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ModelMetadataSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelMetadata(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ModelMetadataSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelPackageGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ModelPackageGroupSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelPackageGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ModelPackageGroupSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelPackages(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ModelPackageSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelPackages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ModelPackageSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelQualityJobDefinitions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobDefinitionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelQualityJobDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.JobDefinitionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Models"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Models ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMonitoringExecutions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MonitoringExecutionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMonitoringExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.MonitoringExecutionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMonitoringSchedules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MonitoringScheduleSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMonitoringSchedules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.MonitoringScheduleSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNotebookInstanceLifecycleConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NotebookInstanceLifecycleConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNotebookInstanceLifecycleConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NotebookInstanceLifecycleConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNotebookInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NotebookInstances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNotebookInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NotebookInstances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelineExecutionSteps(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PipelineExecutionSteps"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPipelineExecutionSteps(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PipelineExecutionSteps ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelineExecutions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PipelineExecutionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPipelineExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PipelineExecutionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelineParametersForExecution(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PipelineParameters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPipelineParametersForExecution(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PipelineParameters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelines(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PipelineSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPipelines(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PipelineSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProcessingJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProcessingJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProcessingJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ProcessingJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProjects(...args).promise()
  }

  async listStageDevices(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DeviceDeploymentSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStageDevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DeviceDeploymentSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStudioLifecycleConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StudioLifecycleConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStudioLifecycleConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StudioLifecycleConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSubscribedWorkteams(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SubscribedWorkteams"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSubscribedWorkteams(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SubscribedWorkteams ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTags(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrainingJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrainingJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrainingJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TrainingJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrainingJobsForHyperParameterTuningJob(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrainingJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrainingJobsForHyperParameterTuningJob(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TrainingJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTransformJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransformJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTransformJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransformJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrialComponents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrialComponentSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrialComponents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TrialComponentSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrials(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrialSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrials(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TrialSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserProfiles(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserProfiles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.UserProfiles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkforces(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Workforces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWorkforces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Workforces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkteams(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Workteams"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWorkteams(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Workteams ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putModelPackageGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putModelPackageGroupPolicy(...args).promise()
  }

  async queryLineage(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.queryLineage(...args).promise()
  }

  async registerDevices(...args: any): Promise<any> {
  // undefined
    return this.client.registerDevices(...args).promise()
  }

  async renderUiTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.renderUiTemplate(...args).promise()
  }

  async retryPipelineExecution(...args: any): Promise<any> {
  // undefined
    return this.client.retryPipelineExecution(...args).promise()
  }

  async search(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Results"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.search(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Results ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async sendPipelineExecutionStepFailure(...args: any): Promise<any> {
  // undefined
    return this.client.sendPipelineExecutionStepFailure(...args).promise()
  }

  async sendPipelineExecutionStepSuccess(...args: any): Promise<any> {
  // undefined
    return this.client.sendPipelineExecutionStepSuccess(...args).promise()
  }

  async startEdgeDeploymentStage(...args: any): Promise<any> {
  // undefined
    return this.client.startEdgeDeploymentStage(...args).promise()
  }

  async startMonitoringSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.startMonitoringSchedule(...args).promise()
  }

  async startNotebookInstance(...args: any): Promise<any> {
  // undefined
    return this.client.startNotebookInstance(...args).promise()
  }

  async startPipelineExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startPipelineExecution(...args).promise()
  }

  async stopAutoMLJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopAutoMLJob(...args).promise()
  }

  async stopCompilationJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopCompilationJob(...args).promise()
  }

  async stopEdgeDeploymentStage(...args: any): Promise<any> {
  // undefined
    return this.client.stopEdgeDeploymentStage(...args).promise()
  }

  async stopEdgePackagingJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopEdgePackagingJob(...args).promise()
  }

  async stopHyperParameterTuningJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopHyperParameterTuningJob(...args).promise()
  }

  async stopInferenceRecommendationsJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopInferenceRecommendationsJob(...args).promise()
  }

  async stopLabelingJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopLabelingJob(...args).promise()
  }

  async stopMonitoringSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.stopMonitoringSchedule(...args).promise()
  }

  async stopNotebookInstance(...args: any): Promise<any> {
  // undefined
    return this.client.stopNotebookInstance(...args).promise()
  }

  async stopPipelineExecution(...args: any): Promise<any> {
  // undefined
    return this.client.stopPipelineExecution(...args).promise()
  }

  async stopProcessingJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopProcessingJob(...args).promise()
  }

  async stopTrainingJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopTrainingJob(...args).promise()
  }

  async stopTransformJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopTransformJob(...args).promise()
  }

  async updateAction(...args: any): Promise<any> {
  // undefined
    return this.client.updateAction(...args).promise()
  }

  async updateAppImageConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateAppImageConfig(...args).promise()
  }

  async updateArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.updateArtifact(...args).promise()
  }

  async updateCodeRepository(...args: any): Promise<any> {
  // undefined
    return this.client.updateCodeRepository(...args).promise()
  }

  async updateContext(...args: any): Promise<any> {
  // undefined
    return this.client.updateContext(...args).promise()
  }

  async updateDeviceFleet(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeviceFleet(...args).promise()
  }

  async updateDevices(...args: any): Promise<any> {
  // undefined
    return this.client.updateDevices(...args).promise()
  }

  async updateDomain(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomain(...args).promise()
  }

  async updateEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.updateEndpoint(...args).promise()
  }

  async updateEndpointWeightsAndCapacities(...args: any): Promise<any> {
  // undefined
    return this.client.updateEndpointWeightsAndCapacities(...args).promise()
  }

  async updateExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.updateExperiment(...args).promise()
  }

  async updateFeatureGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateFeatureGroup(...args).promise()
  }

  async updateFeatureMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateFeatureMetadata(...args).promise()
  }

  async updateImage(...args: any): Promise<any> {
  // undefined
    return this.client.updateImage(...args).promise()
  }

  async updateModelPackage(...args: any): Promise<any> {
  // undefined
    return this.client.updateModelPackage(...args).promise()
  }

  async updateMonitoringSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.updateMonitoringSchedule(...args).promise()
  }

  async updateNotebookInstance(...args: any): Promise<any> {
  // undefined
    return this.client.updateNotebookInstance(...args).promise()
  }

  async updateNotebookInstanceLifecycleConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateNotebookInstanceLifecycleConfig(...args).promise()
  }

  async updatePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.updatePipeline(...args).promise()
  }

  async updatePipelineExecution(...args: any): Promise<any> {
  // undefined
    return this.client.updatePipelineExecution(...args).promise()
  }

  async updateProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateProject(...args).promise()
  }

  async updateTrainingJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrainingJob(...args).promise()
  }

  async updateTrial(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrial(...args).promise()
  }

  async updateTrialComponent(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrialComponent(...args).promise()
  }

  async updateUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserProfile(...args).promise()
  }

  async updateWorkforce(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkforce(...args).promise()
  }

  async updateWorkteam(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkteam(...args).promise()
  }
  
  static fromClient(client: AWSSageMaker): ClientType {
    return new SageMaker(client) as any;
  }
  
  static client(options?: AWSSageMaker.Types.ClientConfiguration): ClientType {
    return new SageMaker(new AWSSageMaker(options)) as any;
  }
}  
