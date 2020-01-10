import request from 'supertest';
import app from '../app';

beforeEach(() => {});
afterEach(() => {});
describe('TESTING ENDPOINTS', () => {
  it('GET /', done => {
    request(app)
      .get('/')
      .send({ name: 'a' })
      .expect(200)
      .expect('Hello World')
      .end(done);
  });
  it('should return 400 when name is empty', async () => {
    const res = await request(app).get('/');

    // expect(res.status).toBe(400);
  });
});
