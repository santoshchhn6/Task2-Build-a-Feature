import { IInterViewSettings, IJobDetails, IRequisitionDetails } from "./forms";

export interface IJobType {
  requisitionDetails: IRequisitionDetails;
  jobDetails: IJobDetails;
  interviewSettings: IInterViewSettings;
}

