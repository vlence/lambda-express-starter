const request = require('supertest');

const second = 1000;
const minute = 60 * second;

// Timeout after a minute because it could
// take some time for the docker container
// to start and run our code
jest.setTimeout(minute);

describe('/', () => {
  it('should say "Hello world!"', (done) => {
    request('http://localhost:3000')
      .get('/')
      .end((err, response) => {
        if (err) {
          done(err);
        }
        else {
          const status = response.ok;
          const type = response.type;
          const text = response.text;

          expect(status).toBeTruthy();
          expect(type).toBe('text/plain');
          expect(text).toBe('Hello world!');

          done();
        }
      })
  })
});