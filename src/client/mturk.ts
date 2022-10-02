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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mturk-requester';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listBonusPayments","listHITs","listQualificationRequests","listReviewableHITs","listWorkerBlocks"];
    
  acceptQualificationRequest: FunctionTypeFrom<'acceptQualificationRequest'>;

  approveAssignment: FunctionTypeFrom<'approveAssignment'>;

  associateQualificationWithWorker: FunctionTypeFrom<'associateQualificationWithWorker'>;

  createAdditionalAssignmentsForHIT: FunctionTypeFrom<'createAdditionalAssignmentsForHIT'>;

  createHIT: FunctionTypeFrom<'createHIT'>;

  createHITType: FunctionTypeFrom<'createHITType'>;

  createHITWithHITType: FunctionTypeFrom<'createHITWithHITType'>;

  createQualificationType: FunctionTypeFrom<'createQualificationType'>;

  createWorkerBlock: FunctionTypeFrom<'createWorkerBlock'>;

  deleteHIT: FunctionTypeFrom<'deleteHIT'>;

  deleteQualificationType: FunctionTypeFrom<'deleteQualificationType'>;

  deleteWorkerBlock: FunctionTypeFrom<'deleteWorkerBlock'>;

  disassociateQualificationFromWorker: FunctionTypeFrom<'disassociateQualificationFromWorker'>;

  getAccountBalance: FunctionTypeFrom<'getAccountBalance'>;

  getAssignment: FunctionTypeFrom<'getAssignment'>;

  getFileUploadURL: FunctionTypeFrom<'getFileUploadURL'>;

  getHIT: FunctionTypeFrom<'getHIT'>;

  getQualificationScore: FunctionTypeFrom<'getQualificationScore'>;

  getQualificationType: FunctionTypeFrom<'getQualificationType'>;

  listAssignmentsForHIT: FunctionTypeFrom<'listAssignmentsForHIT'>;

  listBonusPayments: FunctionTypeFrom<'listBonusPayments'>;

  listHITs: FunctionTypeFrom<'listHITs'>;

  listHITsForQualificationType: FunctionTypeFrom<'listHITsForQualificationType'>;

  listQualificationRequests: FunctionTypeFrom<'listQualificationRequests'>;

  listQualificationTypes: FunctionTypeFrom<'listQualificationTypes'>;

  listReviewPolicyResultsForHIT: FunctionTypeFrom<'listReviewPolicyResultsForHIT'>;

  listReviewableHITs: FunctionTypeFrom<'listReviewableHITs'>;

  listWorkerBlocks: FunctionTypeFrom<'listWorkerBlocks'>;

  listWorkersWithQualificationType: FunctionTypeFrom<'listWorkersWithQualificationType'>;

  notifyWorkers: FunctionTypeFrom<'notifyWorkers'>;

  rejectAssignment: FunctionTypeFrom<'rejectAssignment'>;

  rejectQualificationRequest: FunctionTypeFrom<'rejectQualificationRequest'>;

  sendBonus: FunctionTypeFrom<'sendBonus'>;

  sendTestEventNotification: FunctionTypeFrom<'sendTestEventNotification'>;

  updateExpirationForHIT: FunctionTypeFrom<'updateExpirationForHIT'>;

  updateHITReviewStatus: FunctionTypeFrom<'updateHITReviewStatus'>;

  updateHITTypeOfHIT: FunctionTypeFrom<'updateHITTypeOfHIT'>;

  updateNotificationSettings: FunctionTypeFrom<'updateNotificationSettings'>;

  updateQualificationType: FunctionTypeFrom<'updateQualificationType'>
}
 
export class MTurk implements ClientType {
  private constructor(private readonly client: AWSMTurk) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mturk-requester';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listBonusPayments","listHITs","listQualificationRequests","listReviewableHITs","listWorkerBlocks"] as const;
  
  async acceptQualificationRequest(...args: any): Promise<any> {
  // undefined
    return this.client.acceptQualificationRequest(...args).promise()
  }

  async approveAssignment(...args: any): Promise<any> {
  // undefined
    return this.client.approveAssignment(...args).promise()
  }

  async associateQualificationWithWorker(...args: any): Promise<any> {
  // undefined
    return this.client.associateQualificationWithWorker(...args).promise()
  }

  async createAdditionalAssignmentsForHIT(...args: any): Promise<any> {
  // undefined
    return this.client.createAdditionalAssignmentsForHIT(...args).promise()
  }

  async createHIT(...args: any): Promise<any> {
  // undefined
    return this.client.createHIT(...args).promise()
  }

  async createHITType(...args: any): Promise<any> {
  // undefined
    return this.client.createHITType(...args).promise()
  }

  async createHITWithHITType(...args: any): Promise<any> {
  // undefined
    return this.client.createHITWithHITType(...args).promise()
  }

  async createQualificationType(...args: any): Promise<any> {
  // undefined
    return this.client.createQualificationType(...args).promise()
  }

  async createWorkerBlock(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkerBlock(...args).promise()
  }

  async deleteHIT(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHIT(...args).promise()
  }

  async deleteQualificationType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQualificationType(...args).promise()
  }

  async deleteWorkerBlock(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkerBlock(...args).promise()
  }

  async disassociateQualificationFromWorker(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateQualificationFromWorker(...args).promise()
  }

  async getAccountBalance(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountBalance(...args).promise()
  }

  async getAssignment(...args: any): Promise<any> {
  // undefined
    return this.client.getAssignment(...args).promise()
  }

  async getFileUploadURL(...args: any): Promise<any> {
  // undefined
    return this.client.getFileUploadURL(...args).promise()
  }

  async getHIT(...args: any): Promise<any> {
  // undefined
    return this.client.getHIT(...args).promise()
  }

  async getQualificationScore(...args: any): Promise<any> {
  // undefined
    return this.client.getQualificationScore(...args).promise()
  }

  async getQualificationType(...args: any): Promise<any> {
  // undefined
    return this.client.getQualificationType(...args).promise()
  }

  async listAssignmentsForHIT(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAssignmentsForHIT(...args).promise()
  }

  async listBonusPayments(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listBonusPayments(...args).promise()
  }

  async listHITs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHITs(...args).promise()
  }

  async listHITsForQualificationType(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHITsForQualificationType(...args).promise()
  }

  async listQualificationRequests(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQualificationRequests(...args).promise()
  }

  async listQualificationTypes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQualificationTypes(...args).promise()
  }

  async listReviewPolicyResultsForHIT(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReviewPolicyResultsForHIT(...args).promise()
  }

  async listReviewableHITs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReviewableHITs(...args).promise()
  }

  async listWorkerBlocks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkerBlocks(...args).promise()
  }

  async listWorkersWithQualificationType(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkersWithQualificationType(...args).promise()
  }

  async notifyWorkers(...args: any): Promise<any> {
  // undefined
    return this.client.notifyWorkers(...args).promise()
  }

  async rejectAssignment(...args: any): Promise<any> {
  // undefined
    return this.client.rejectAssignment(...args).promise()
  }

  async rejectQualificationRequest(...args: any): Promise<any> {
  // undefined
    return this.client.rejectQualificationRequest(...args).promise()
  }

  async sendBonus(...args: any): Promise<any> {
  // undefined
    return this.client.sendBonus(...args).promise()
  }

  async sendTestEventNotification(...args: any): Promise<any> {
  // undefined
    return this.client.sendTestEventNotification(...args).promise()
  }

  async updateExpirationForHIT(...args: any): Promise<any> {
  // undefined
    return this.client.updateExpirationForHIT(...args).promise()
  }

  async updateHITReviewStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateHITReviewStatus(...args).promise()
  }

  async updateHITTypeOfHIT(...args: any): Promise<any> {
  // undefined
    return this.client.updateHITTypeOfHIT(...args).promise()
  }

  async updateNotificationSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateNotificationSettings(...args).promise()
  }

  async updateQualificationType(...args: any): Promise<any> {
  // undefined
    return this.client.updateQualificationType(...args).promise()
  }
  
  static fromClient(client: AWSMTurk): ClientType {
    return new MTurk(client) as any;
  }
  
  static client(options?: AWSMTurk.Types.ClientConfiguration): ClientType {
    return new MTurk(new AWSMTurk(options)) as any;
  }
}  
