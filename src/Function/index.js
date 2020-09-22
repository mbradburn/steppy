const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  console.log(process.env.STATE_MACHINE_ARN);

  const stepFunctions = new AWS.StepFunctions();
  const result = await stepFunctions.startExecution({
    stateMachineArn: process.env.STATE_MACHINE_ARN,
    input: '{ }'
  }).promise()

  console.log('Result: ', result);

  return {};
};
