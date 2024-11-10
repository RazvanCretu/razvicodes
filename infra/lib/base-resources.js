import { Stack, Duration, NestedStack } from "aws-cdk-lib";
// const sqs = require('aws-cdk-lib/aws-sqs');

export class InfraNestedStack extends NestedStack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    console.log("This is a Nested stack.");
    console.log("PROPS Nested Stack: ", props);

    scope.vpc = "VPC Nested";

    // this.bind(scope);

    console.log(this.kek);
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'InfraQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

// export default { InfraStack };
