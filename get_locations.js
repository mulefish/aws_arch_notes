console.log( "HAVE TO ME ON THE VPN!")
const myHeaders = new Headers();
myHeaders.append("Authorization", "Basic ZW5yb2xsbWVudF9hcGlfdXNlcjpBRjQyb1lOci50aXJ2cjxdK2FDR05fQURoTWV9V0VWYi5eS2F3TWJGd3RHY14qZWVdbFFsWVZPRFhOZ1FkXTU2b29WaC1LaV9GJGJrNVhkSWJsM1B3bnAxbXAjeCwrTFsqOVk+");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://enrollment-proxy-api.telos-tsa-precheck.com/locations", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));