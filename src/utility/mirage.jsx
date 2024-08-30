import { createServer } from 'miragejs';

// eslint-disable-next-line
export const token = { token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpYXQiOjE2NzM2NTg3OTcsImV4cCI6NDA3MjAzNjM5NywiYXVkIjoiIiwic3ViIjoiIn0.WWrMiVHmkq2DsAPIoqsAAeot8pyyiGFBnabQuKE9iIE' };

createServer({
  routes() {
    this.namespace = 'api/v1';
    this.passthrough('/**');
    this.passthrough('https://icanhazip.com/');

    // Check user token
    this.post('/users/me', () => {
      return { ...token };
    });

    // Login with email and password
    this.post('/auth', () => {
      return { ...token };
    });

    // Create user
    this.post('/users', () => {
      return {
        ...token,
        message: 'User created.',
      };
    });

    // Update user
    this.put('/users', () => {
      return {
        ...token,
        message: 'User updated.',
      };
    });

    // Delete user
    this.delete('/users', () => {
      return {};
    });

    // Send reset email
    this.post('/emails/pw-reset', () => {
      return {
        message: 'Reset request sent.',
      };
    });
  },
});

export { createServer };