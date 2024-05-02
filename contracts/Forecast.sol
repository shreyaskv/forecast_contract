// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ForecastSubmission {
    struct Forecast {
        address user;  // Address of the user submitting the forecast, stored as a string
        string companyID;  // Company ID as set during submission
        string reportingPeriod;
        string earningsEstimate;
        string revenueEstimate;
    }

    Forecast[] public forecasts;
    mapping(address => mapping(string => bool)) public senderCompanySubmitted;  // Track submissions by address and company ID

    address public owner;
    uint256 public submissionStart;
    uint256 public submissionEnd;

    event ForecastSubmitted(
        address user,
        string companyID,
        string reportingPeriod,
        string earningsEstimate,
        string revenueEstimate
    );

    constructor() {
        owner = msg.sender;  // Convert msg.sender to string and set it as the owner
        submissionStart = block.timestamp;  // Set the start time of submissions
        submissionEnd = block.timestamp + 30 days;  // Set the end time to 30 days after deployment
    }

    function submitForecast(
        string memory _companyID,
        string memory _reportingPeriod,
        string memory _earningsEstimate,
        string memory _revenueEstimate
    ) public {
        require(block.timestamp >= submissionStart && block.timestamp <= submissionEnd, "Submission period is currently closed.");
        require(!senderCompanySubmitted[msg.sender][_companyID], "Sender has already submitted a forecast for this company.");

        senderCompanySubmitted[msg.sender][_companyID] = true;  // Mark this combination as submitted
        _submitForecast(_companyID, _reportingPeriod, _earningsEstimate, _revenueEstimate);
    }

    function _submitForecast(
        string memory _companyID,
        string memory _reportingPeriod,
        string memory _earningsEstimate,
        string memory _revenueEstimate
    ) internal {
        Forecast memory newForecast = Forecast({
            user: msg.sender,  // Convert msg.sender to string
            companyID: _companyID,
            reportingPeriod: _reportingPeriod,
            earningsEstimate: _earningsEstimate,
            revenueEstimate: _revenueEstimate
        });
        forecasts.push(newForecast);
        emit ForecastSubmitted(msg.sender, _companyID, _reportingPeriod, _earningsEstimate, _revenueEstimate);
    }

    function getAllForecasts() public view returns (Forecast[] memory) {
        return forecasts;
    }

    function hasSubmitted(string memory _companyID) public view returns (bool) {
        return senderCompanySubmitted[msg.sender][_companyID];
    }
}











