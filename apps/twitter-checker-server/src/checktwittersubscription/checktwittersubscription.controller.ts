import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CheckTwitterSubscriptionService } from "./checktwittersubscription.service";
import { CheckSubscriptionInput } from "../checkTwitterSubscription/CheckSubscriptionInput";

@swagger.ApiTags("checkTwitterSubscriptions")
@common.Controller("checkTwitterSubscriptions")
export class CheckTwitterSubscriptionController {
  constructor(protected readonly service: CheckTwitterSubscriptionService) {}

  @common.Post("/check-twitter-account")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckTwitterAccount(
    @common.Body()
    body: CheckSubscriptionInput
  ): Promise<boolean> {
        return this.service.CheckTwitterAccount(body);
      }

  @common.Post("/check-twitter-subscription")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckTwitterSubscription(
    @common.Body()
    body: CheckSubscriptionInput
  ): Promise<boolean> {
        return this.service.CheckTwitterSubscription(body);
      }
}
