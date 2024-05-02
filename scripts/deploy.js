async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Forecast = await ethers.getContractFactory("ForecastSubmission");
  const forecast = await Forecast.deploy();

  console.log("ForecastSubmission contract deployed to:", forecast.address);

  // Submit initial forecasts
  // await (await forecast.submitForecast("COMPANY123", "Q1 2024", "500000", "1000000")).wait();
  // await (await forecast.submitForecast("COMPANY456", "Q1 2024", "300000", "600000")).wait();

  console.log("Initial forecasts submitted");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
  });





