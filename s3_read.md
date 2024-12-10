
```mermaid
graph TD
    Client(Client Application) -->|HTTP GET Request| APIGateway(API Gateway)
    APIGateway -->|Invoke| Lambda(AWS Lambda Function)
    Lambda -->|Fetch File| S3Bucket(S3 Bucket)
    S3Bucket -->|Return File| Lambda
    Lambda -->|Return File Data| APIGateway
    APIGateway -->|HTTP Response| Client
    ```

### CURL
curl -X GET "https://<api-id>.execute-api.us-east-1.amazonaws.com/read?file=test.txt"



### To read a file from S3, 
The architecture and IAM policies are slightly different, as you'll require permissions to GetObject instead of PutObject. Here are the differences:

Differences Between Reading and Writing to S3
IAM Permissions:

For writing to S3: s3:PutObject is required.
For reading from S3: s3:GetObject is required.
Lambda Function Logic:

For reading, the Lambda function will use the getObject method from the AWS SDK to fetch the file's contents.
API Gateway Integration:

Similar setup, but the client receives the file data or metadata in the HTTP response.



# Create IAM Policy for S3 Read Access
resource "aws_iam_role_policy" "s3_read_access" {
  name = "s3_read_access_policy"
  role = aws_iam_role.lambda_execution.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect   = "Allow",
        Action   = ["s3:GetObject"],
        Resource = "arn:aws:s3:::my-lambda-s3-bucket/*"
      }
    ]
  })
}

# Lambda Function for Reading S3
resource "aws_lambda_function" "s3_reader" {
  function_name    = "ReadFromS3Lambda"
  runtime          = "nodejs18.x"
  role             = aws_iam_role.lambda_execution.arn
  handler          = "index.handler"
  filename         = "lambda_function.zip"
  source_code_hash = filebase64sha256("lambda_function.zip")

  environment {
    variables = {
      BUCKET_NAME = aws_s3_bucket.my_bucket.bucket
    }
  }
}

# API Gateway Setup remains the same
resource "aws_apigatewayv2_route" "route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /read"

  target = "integrations/${aws_apigatewayv2_integration.lambda_integration.id}"
}
