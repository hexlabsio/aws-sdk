import { Request, Fis as AWSFis } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSFis> = AWSFis[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSFis> = AWSFis[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSFis[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSFis, Extras> = AWSFis[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'fis';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["listActions","listExperimentTemplates","listExperiments","listTargetResourceTypes"];
    
  createExperimentTemplate: FunctionTypeFrom<'createExperimentTemplate'>;

  deleteExperimentTemplate: FunctionTypeFrom<'deleteExperimentTemplate'>;

  getAction: FunctionTypeFrom<'getAction'>;

  getExperiment: FunctionTypeFrom<'getExperiment'>;

  getExperimentTemplate: FunctionTypeFrom<'getExperimentTemplate'>;

  getTargetResourceType: FunctionTypeFrom<'getTargetResourceType'>;

  listActions: FunctionTypeFrom<'listActions'>;

  listExperimentTemplates: FunctionTypeFrom<'listExperimentTemplates'>;

  listExperiments: FunctionTypeFrom<'listExperiments'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTargetResourceTypes: FunctionTypeFrom<'listTargetResourceTypes'>;

  startExperiment: FunctionTypeFrom<'startExperiment'>;

  stopExperiment: FunctionTypeFrom<'stopExperiment'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateExperimentTemplate: FunctionTypeFrom<'updateExperimentTemplate'>
}
 
export class Fis implements ClientType {
  private constructor(private readonly client: AWSFis) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'fis';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["listActions","listExperimentTemplates","listExperiments","listTargetResourceTypes"] as const;
  
  async createExperimentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createExperimentTemplate(...args).promise()
  }

  async deleteExperimentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExperimentTemplate(...args).promise()
  }

  async getAction(...args: any): Promise<any> {
  // undefined
    return this.client.getAction(...args).promise()
  }

  async getExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.getExperiment(...args).promise()
  }

  async getExperimentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getExperimentTemplate(...args).promise()
  }

  async getTargetResourceType(...args: any): Promise<any> {
  // undefined
    return this.client.getTargetResourceType(...args).promise()
  }

  async listActions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listActions(...args).promise()
  }

  async listExperimentTemplates(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listExperimentTemplates(...args).promise()
  }

  async listExperiments(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listExperiments(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTargetResourceTypes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTargetResourceTypes(...args).promise()
  }

  async startExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.startExperiment(...args).promise()
  }

  async stopExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.stopExperiment(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateExperimentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateExperimentTemplate(...args).promise()
  }
  
  static fromClient(client: AWSFis): ClientType {
    return new Fis(client) as any;
  }
  
  static client(options?: AWSFis.Types.ClientConfiguration): ClientType {
    return new Fis(new AWSFis(options)) as any;
  }
}  
