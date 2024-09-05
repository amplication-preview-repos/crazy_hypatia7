import { Module } from "@nestjs/common";
import { CheckTwitterSubscriptionService } from "./checktwittersubscription.service";
import { CheckTwitterSubscriptionController } from "./checktwittersubscription.controller";
import { CheckTwitterSubscriptionResolver } from "./checktwittersubscription.resolver";

@Module({
  controllers: [CheckTwitterSubscriptionController],
  providers: [CheckTwitterSubscriptionService, CheckTwitterSubscriptionResolver],
  exports: [CheckTwitterSubscriptionService],
})
export class CheckTwitterSubscriptionModule {}
