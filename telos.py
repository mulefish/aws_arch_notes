# aws cli is installed 
# Look in .aws in HOME dir for config 
# Example config:  aws configure --profile dispense          
# Example get cred: $token = aws ssm get-parameter --name /enrollment-proxy-api/token --query "Parameter.Value" --output text --with-decryption --profile precheck-dev 
# Yeild: ZW5yb2xsbWVudF9hcGlfdXNlcjpBRjQyb1lOci50aXJ2cjxdK2FDR05fQURoTWV9V0VWYi5eS2F3TWJGd3RHY14qZWVdbFFsWVZPRFhOZ1FkXTU2b29WaC1LaV9GJGJrNVhkSWJsM1B3bnAxbXAjeCwrTFsqOVk+
# $decodedToken = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($token))
# echo decodedToken = enrollment_api_user:AF42oYNr.tirvr<]+aCGN_ADhMe}WEVb.^KawMbFwtGc^*ee]lQlYVODXNgQd]56ooVh-Ki_F$bk5XdIbl3Pwnp1mp#x,+L[*9Y> 
# Before the : is user name and after in password -- this is good for basic auth :wq