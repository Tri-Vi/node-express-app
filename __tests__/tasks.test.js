const request = require('supertest');
const app = require('../app'); 

describe('Task API', ()=>{
  it('should create a task', async()=>{
    const response = await request(app)
      .post('/tasks')
      .send({
        title:'Test Task',
        description: 'Test Description',
        status: 'pending'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Test Task');
  })
})