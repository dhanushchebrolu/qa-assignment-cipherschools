QA Engineer Assignment - CipherSchools

This repository contains the QA automation assignment for CipherSchools.



## Tools Used

- Playwright → End-to-End Testing
- k6 → Load Testing
- JMeter → Performance Testing

## Test Scenario (E2E)

1. Open the application
2. Search for a product (hammer)
3. Open product details page

## Run Playwright Test


## Run k6 Load Test
## k6 Load Test Results

A load test was performed using k6 to evaluate the performance of the search functionality under concurrent users.

### Test Configuration

* Virtual Users (VUs): 20
* Test Duration: 50 seconds
* Total Requests: 416

### Performance Metrics

* Average Response Time: 400 ms
* 95th Percentile Response Time: 676 ms
* Maximum Response Time:7.9 s

### Thresholds

* Response Time Threshold:p(95) < 2000 ms Passed
* Failure Rate Threshold:rate < 1%  Failed

### Observations

During load testing, all requests failed, resulting in a 100% failure rate. This indicates that the endpoint may not be properly handling concurrent requests or that the test endpoint is restricted.









## Author

Dhanush Chebrolu




