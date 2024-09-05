import * as graphql from "@nestjs/graphql";
import { CheckSubscriptionInput } from "../checkTwitterSubscription/CheckSubscriptionInput";
import { CheckTwitterSubscriptionService } from "./checktwittersubscription.service";

export class CheckTwitterSubscriptionResolver {
  constructor(protected readonly service: CheckTwitterSubscriptionService) {}

  @graphql.Query(() => Boolean)
  async CheckTwitterAccount(
    @graphql.Args("args")
    args: string
  ): Promise<boolean> {
    return this.service.CheckTwitterAccount(args);
  }

  @graphql.Query(() => Boolean)
  async CheckTwitterSubscription(
    @graphql.Args()
    args: CheckSubscriptionInput
  ): Promise<boolean> {
    return this.service.CheckTwitterSubscription(args);
  }
}
