export function generateRandomPassword(length: number = 6): string {
  const characters = '0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * 10)];
  }

  return result;
}

export function defaultHeaders() {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  };
}
