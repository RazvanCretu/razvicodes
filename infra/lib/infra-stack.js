import { Stack, Duration } from "aws-cdk-lib";
import { InfraNestedStack } from "./base-resources.js";
// const sqs = require('aws-cdk-lib/aws-sqs');

export class InfraStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    console.log("ENV: ", props.env);
    console.log("PROPS: ", props);

    new InfraNestedStack(this, "Infra-Nested", {
      hello: "Hei",
    });

    this.kek = "kEkeke";

    console.log(this.vpc);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'InfraQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

// export default { InfraStack };
