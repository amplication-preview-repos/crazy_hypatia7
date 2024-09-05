import { Injectable } from "@nestjs/common";
import { CheckSubscriptionInput } from "../checkTwitterSubscription/CheckSubscriptionInput";

@Injectable()
export class CheckTwitterSubscriptionService {
  constructor() {}
  async CheckTwitterAccount(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async CheckTwitterSubscription(args: CheckSubscriptionInput): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
