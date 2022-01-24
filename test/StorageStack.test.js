import { Template } from "aws-cdk-lib/assertions";
import * as sst from "@serverless-stack/resources";
import StorageStack from "../stacks/StorageStack";
test("Test StorageStack", () => {
  const app = new sst.App();
  const stack = new StorageStack(app, "test-stack"); // THEN
  const template = Template.fromStack(stack);

  template.hasResource("AWS::DynamoDB::Table", {
    BillingMode: "PAY_PER_REQUEST",
  });
});
// const app = new sst.App();
// // WHEN
// const stack = new StorageStack(app, "test-stack"); // THEN
// template(stack).to(
//   haveResource("AWS::DynamoDB::Table", {
//     BillingMode: "PAY_PER_REQUEST",
//   })
// );
// };
// );
