import { Request, MTurk as AWSMTurk } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMTurk> = AWSMTurk[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMTurk> = AWSMTurk[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMTurk[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMTurk, Extras> = AWSMTurk[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMTurk> = AWSMTurk[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MTurk {
  private constructor(private readonly client: AWSMTurk) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mturk-requester' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listBonusPayments","listHITs","listQualificationRequests","listReviewableHITs","listWorkerBlocks"] as const;
  
  acceptQualificationRequest: (params: RawParamsFrom<'acceptQualificationRequest'>) => Promise<ReturnTypeFrom<'acceptQualificationRequest'>>  = async params => {
  // undefined
    return this.client.acceptQualificationRequest(params as any).promise();
  }

  approveAssignment: (params: RawParamsFrom<'approveAssignment'>) => Promise<ReturnTypeFrom<'approveAssignment'>>  = async params => {
  // undefined
    return this.client.approveAssignment(params as any).promise();
  }

  associateQualificationWithWorker: (params: RawParamsFrom<'associateQualificationWithWorker'>) => Promise<ReturnTypeFrom<'associateQualificationWithWorker'>>  = async params => {
  // undefined
    return this.client.associateQualificationWithWorker(params as any).promise();
  }

  createAdditionalAssignmentsForHIT: (params: RawParamsFrom<'createAdditionalAssignmentsForHIT'>) => Promise<ReturnTypeFrom<'createAdditionalAssignmentsForHIT'>>  = async params => {
  // undefined
    return this.client.createAdditionalAssignmentsForHIT(params as any).promise();
  }

  createHIT: (params: RawParamsFrom<'createHIT'>) => Promise<ReturnTypeFrom<'createHIT'>>  = async params => {
  // undefined
    return this.client.createHIT(params as any).promise();
  }

  createHITType: (params: RawParamsFrom<'createHITType'>) => Promise<ReturnTypeFrom<'createHITType'>>  = async params => {
  // undefined
    return this.client.createHITType(params as any).promise();
  }

  createHITWithHITType: (params: RawParamsFrom<'createHITWithHITType'>) => Promise<ReturnTypeFrom<'createHITWithHITType'>>  = async params => {
  // undefined
    return this.client.createHITWithHITType(params as any).promise();
  }

  createQualificationType: (params: RawParamsFrom<'createQualificationType'>) => Promise<ReturnTypeFrom<'createQualificationType'>>  = async params => {
  // undefined
    return this.client.createQualificationType(params as any).promise();
  }

  createWorkerBlock: (params: RawParamsFrom<'createWorkerBlock'>) => Promise<ReturnTypeFrom<'createWorkerBlock'>>  = async params => {
  // undefined
    return this.client.createWorkerBlock(params as any).promise();
  }

  deleteHIT: (params: RawParamsFrom<'deleteHIT'>) => Promise<ReturnTypeFrom<'deleteHIT'>>  = async params => {
  // undefined
    return this.client.deleteHIT(params as any).promise();
  }

  deleteQualificationType: (params: RawParamsFrom<'deleteQualificationType'>) => Promise<ReturnTypeFrom<'deleteQualificationType'>>  = async params => {
  // undefined
    return this.client.deleteQualificationType(params as any).promise();
  }

  deleteWorkerBlock: (params: RawParamsFrom<'deleteWorkerBlock'>) => Promise<ReturnTypeFrom<'deleteWorkerBlock'>>  = async params => {
  // undefined
    return this.client.deleteWorkerBlock(params as any).promise();
  }

  disassociateQualificationFromWorker: (params: RawParamsFrom<'disassociateQualificationFromWorker'>) => Promise<ReturnTypeFrom<'disassociateQualificationFromWorker'>>  = async params => {
  // undefined
    return this.client.disassociateQualificationFromWorker(params as any).promise();
  }

  getAccountBalance: (params: RawParamsFrom<'getAccountBalance'>) => Promise<ReturnTypeFrom<'getAccountBalance'>>  = async params => {
  // undefined
    return this.client.getAccountBalance(params as any).promise();
  }

  getAssignment: (params: RawParamsFrom<'getAssignment'>) => Promise<ReturnTypeFrom<'getAssignment'>>  = async params => {
  // undefined
    return this.client.getAssignment(params as any).promise();
  }

  getFileUploadURL: (params: RawParamsFrom<'getFileUploadURL'>) => Promise<ReturnTypeFrom<'getFileUploadURL'>>  = async params => {
  // undefined
    return this.client.getFileUploadURL(params as any).promise();
  }

  getHIT: (params: RawParamsFrom<'getHIT'>) => Promise<ReturnTypeFrom<'getHIT'>>  = async params => {
  // undefined
    return this.client.getHIT(params as any).promise();
  }

  getQualificationScore: (params: RawParamsFrom<'getQualificationScore'>) => Promise<ReturnTypeFrom<'getQualificationScore'>>  = async params => {
  // undefined
    return this.client.getQualificationScore(params as any).promise();
  }

  getQualificationType: (params: RawParamsFrom<'getQualificationType'>) => Promise<ReturnTypeFrom<'getQualificationType'>>  = async params => {
  // undefined
    return this.client.getQualificationType(params as any).promise();
  }

  listAssignmentsForHIT: (params: RawParamsFrom<'listAssignmentsForHIT'>) => Promise<ReturnTypeFrom<'listAssignmentsForHIT'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAssignmentsForHIT(params as any).promise();
  }

  listBonusPayments: (params: RawParamsFrom<'listBonusPayments'>) => Promise<ReturnTypeFrom<'listBonusPayments'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listBonusPayments(params as any).promise();
  }

  listHITs: (params: RawParamsFrom<'listHITs'>) => Promise<ReturnTypeFrom<'listHITs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHITs(params as any).promise();
  }

  listHITsForQualificationType: (params: RawParamsFrom<'listHITsForQualificationType'>) => Promise<ReturnTypeFrom<'listHITsForQualificationType'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHITsForQualificationType(params as any).promise();
  }

  listQualificationRequests: (params: RawParamsFrom<'listQualificationRequests'>) => Promise<ReturnTypeFrom<'listQualificationRequests'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQualificationRequests(params as any).promise();
  }

  listQualificationTypes: (params: RawParamsFrom<'listQualificationTypes'>) => Promise<ReturnTypeFrom<'listQualificationTypes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQualificationTypes(params as any).promise();
  }

  listReviewPolicyResultsForHIT: (params: RawParamsFrom<'listReviewPolicyResultsForHIT'>) => Promise<ReturnTypeFrom<'listReviewPolicyResultsForHIT'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReviewPolicyResultsForHIT(params as any).promise();
  }

  listReviewableHITs: (params: RawParamsFrom<'listReviewableHITs'>) => Promise<ReturnTypeFrom<'listReviewableHITs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReviewableHITs(params as any).promise();
  }

  listWorkerBlocks: (params: RawParamsFrom<'listWorkerBlocks'>) => Promise<ReturnTypeFrom<'listWorkerBlocks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkerBlocks(params as any).promise();
  }

  listWorkersWithQualificationType: (params: RawParamsFrom<'listWorkersWithQualificationType'>) => Promise<ReturnTypeFrom<'listWorkersWithQualificationType'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkersWithQualificationType(params as any).promise();
  }

  notifyWorkers: (params: RawParamsFrom<'notifyWorkers'>) => Promise<ReturnTypeFrom<'notifyWorkers'>>  = async params => {
  // undefined
    return this.client.notifyWorkers(params as any).promise();
  }

  rejectAssignment: (params: RawParamsFrom<'rejectAssignment'>) => Promise<ReturnTypeFrom<'rejectAssignment'>>  = async params => {
  // undefined
    return this.client.rejectAssignment(params as any).promise();
  }

  rejectQualificationRequest: (params: RawParamsFrom<'rejectQualificationRequest'>) => Promise<ReturnTypeFrom<'rejectQualificationRequest'>>  = async params => {
  // undefined
    return this.client.rejectQualificationRequest(params as any).promise();
  }

  sendBonus: (params: RawParamsFrom<'sendBonus'>) => Promise<ReturnTypeFrom<'sendBonus'>>  = async params => {
  // undefined
    return this.client.sendBonus(params as any).promise();
  }

  sendTestEventNotification: (params: RawParamsFrom<'sendTestEventNotification'>) => Promise<ReturnTypeFrom<'sendTestEventNotification'>>  = async params => {
  // undefined
    return this.client.sendTestEventNotification(params as any).promise();
  }

  updateExpirationForHIT: (params: RawParamsFrom<'updateExpirationForHIT'>) => Promise<ReturnTypeFrom<'updateExpirationForHIT'>>  = async params => {
  // undefined
    return this.client.updateExpirationForHIT(params as any).promise();
  }

  updateHITReviewStatus: (params: RawParamsFrom<'updateHITReviewStatus'>) => Promise<ReturnTypeFrom<'updateHITReviewStatus'>>  = async params => {
  // undefined
    return this.client.updateHITReviewStatus(params as any).promise();
  }

  updateHITTypeOfHIT: (params: RawParamsFrom<'updateHITTypeOfHIT'>) => Promise<ReturnTypeFrom<'updateHITTypeOfHIT'>>  = async params => {
  // undefined
    return this.client.updateHITTypeOfHIT(params as any).promise();
  }

  updateNotificationSettings: (params: RawParamsFrom<'updateNotificationSettings'>) => Promise<ReturnTypeFrom<'updateNotificationSettings'>>  = async params => {
  // undefined
    return this.client.updateNotificationSettings(params as any).promise();
  }

  updateQualificationType: (params: RawParamsFrom<'updateQualificationType'>) => Promise<ReturnTypeFrom<'updateQualificationType'>>  = async params => {
  // undefined
    return this.client.updateQualificationType(params as any).promise();
  }
  
  static fromClient(client: AWSMTurk): MTurk {
    return new MTurk(client) as any;
  }
  
  static client(options?: AWSMTurk.Types.ClientConfiguration): MTurk {
    return new MTurk(new AWSMTurk(options)) as any;
  }
}  
