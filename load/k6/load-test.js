import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 20 }, // ramp up
    { duration: '30s', target: 20 }, // stay at 20 users
    { duration: '10s', target: 0 },  // ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  http.get('https://with-bugs.practicesoftwaretesting.com/products/search?q=hammer');
  sleep(1);
}