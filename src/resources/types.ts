export type UserCreationRequest = {
  cpf: string;
  password: number;
  role: UserRole;
};

export enum UserRole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER'
}

export type UserAuthenticationRequest = {
  cpf: string;
  password: number;
};

export type User = {
  id: string;
  cpf: string;
  role: UserRole;
};
