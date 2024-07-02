# k6-loadtest-my-burger-app

This repository contains load testing scripts for the my-burger-app, using k6.

## Pre requisites

- Node.js and npm installed. You can download Node.js and npm from [here](https://nodejs.org/en/download/).
- [k6](https://k6.io/) installed. If you haven't installed k6, you can do so using the following command:

```bash
npm install -g k6
```

### Setup
Run `npm install` to install the necessary dependencies.

### Running the Load Test
To run the load test, use the following command:

```bash
k6 run --env RAMP_UP_DURATION=30s --env CONSTANT_DURATION=30s --env RAMP_DOWN_DURATION=30s --env MAX_VUS=10 --env PRE_ALLOCATED_VUS=20 src/index.ts
```

#####  Command explanation
> This command will start the load test with the following configuration:  
Ramp up duration: 30 seconds <br>
Constant load duration: 30 seconds <br>
Ramp down duration: 30 seconds <br>
Maximum virtual users (VUs): 10 <br>
Pre-allocated VUs: 20

### Understanding the Test
The load test simulates a scenario where users are finding products on the my-burger-app. The test measures the response time and status of the find products API endpoint under different loads.  The test uses a ramping arrival rate executor, which gradually increases the load on the system over the ramp up duration, maintains a constant load for the constant duration, and then gradually decreases the load over the ramp down duration.  

#### Virtual Users (VUs)
In k6, a virtual user (VU) is a simulated user that executes the test script. The number of VUs represents the number of concurrent users that your system is handling at any given moment during the test.  

#### Ramping Arrival Rate
The ramping arrival rate executor in k6 allows you to control the rate at which VUs arrive and start executing your test script. This can be used to simulate a scenario where the load on your system gradually increases, stays constant for a period of time, and then gradually decreases.  

#### Results
After running the test, k6 will output the results to the console. The results include various metrics such as the number of requests made, the number of failed requests, the average response time, and more. You can use these metrics to assess the performance and scalability of the my-burger-app.  

#### Code Structure
The main entry point of the load test is src/index.ts. This file defines the load test scenario and the options for the k6 test.<br>
The `src/scenarios/product/product-scenarios.ts` file contains the definition of the findProductsScenario function, which simulates a user finding products on the `my-burger-app`.<br>  The `src/resources/products/products-requests.ts` file contains the `findProducts` function, which sends a `GET` request to the find products API endpoint. 
