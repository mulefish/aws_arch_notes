// enrollment_api_user:AF42oYNr.tirvr<]+aCGN_ADhMe}WEVb.^KawMbFwtGc^*ee]lQlYVODXNgQd]56ooVh-Ki_F$bk5XdIbl3Pwnp1mp#x,+L[*9Y>
console.log("HAVE TO BE ON VPN!")

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic ZW5yb2xsbWVudF9hcGlfdXNlcjpBRjQyb1lOci50aXJ2cjxdK2FDR05fQURoTWV9V0VWYi5eS2F3TWJGd3RHY14qZWVdbFFsWVZPRFhOZ1FkXTU2b29WaC1LaV9GJGJrNVhkSWJsM1B3bnAxbXAjeCwrTFsqOVk+");

const raw = JSON.stringify({
  "firstName": "2",
  "lastName": "lname",
  "countryOfBirth": "US",
  "dateOfBirth": "2000-01-01"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://enrollment-proxy-api.telos-tsa-precheck.com/customers", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


