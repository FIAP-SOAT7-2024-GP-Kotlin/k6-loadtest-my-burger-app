import { check } from 'k6';
import { createUser } from '../../resources/users/users-requests';
import { UserCreationRequest, UserRole } from '../../resources/types';
import { generate } from '@fnando/cpf';
import { generateRandomPassword } from '../../utils/helper';
export function createUserScenario(): void {
  const payload: UserCreationRequest = {
    cpf: generate(),
    password: generateRandomPassword(),
    role: UserRole.CUSTOMER
  };

  const result = createUser(payload);

  check(result, {
    'status is 200': r => r.status === 200,
    'transaction time is less than 200ms': r => r.timings.duration < 200
  });
}
