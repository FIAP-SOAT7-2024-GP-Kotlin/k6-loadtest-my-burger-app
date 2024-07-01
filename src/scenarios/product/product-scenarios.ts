import { check } from 'k6';
import { findProducts } from '../../resources/products/products-requests';
import { authenticate, createUser } from '../../resources/users/users-requests';
import { generate } from '@fnando/cpf';
import { User, UserRole } from '../../resources/types';

export function findProductsScenario(): void {
  const userCreationResponse = createUser({
    cpf: generate(),
    password: 123456,
    role: UserRole.ADMIN
  });

  const user = userCreationResponse.json() as User;
  const token = authenticate({
    cpf: user.cpf,
    password: 123456
  });

  const result = findProducts(token.json());
  check(result, {
    'status is 200': r => r.status === 200,
    'transaction time is less than 200ms': r => r.timings.duration < 200
  });
}
