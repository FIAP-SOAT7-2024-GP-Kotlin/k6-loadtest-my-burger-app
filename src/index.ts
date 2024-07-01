import { findProductsScenario } from './scenarios/product/product-scenarios';

const K6_RAMP_UP_DURATION = __ENV.RAMP_UP_DURATION || '30s';
const K6_CONSTANT_DURATION = __ENV.CONSTANT_DURATION || '30s';
const K6_RAMP_DOWN_DURATION = __ENV.RAMP_DOWN_DURATION || '30s';
const K6_MAX_VUS = __ENV.MAX_VUS || 10;
const K6_PRE_ALLOCATED_VUS = __ENV.PRE_ALLOCATED_VUS || 20;

export const options = {
  scenarios: {
    findProducts: {
      executor: 'ramping-arrival-rate',
      timeUnit: '1m',
      preAllocatedVUs: K6_PRE_ALLOCATED_VUS,
      maxVUs: K6_MAX_VUS,
      stages: [
        { duration: K6_RAMP_UP_DURATION, target: K6_MAX_VUS },
        { duration: K6_CONSTANT_DURATION, target: K6_MAX_VUS },
        { duration: K6_RAMP_DOWN_DURATION, target: 0 }
      ],
      tags: {
        testType: 'find-products',
        service: 'my-burger-app',
        testId: 'k6-loadtest-my-burger-app'
      },
      exec: 'findProducts'
    }
  }
};

export function findProducts(): void {
  findProductsScenario();
}
