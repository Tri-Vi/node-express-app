const request = require('subpertest');
const express = require('express');

const app = express();
app.get('/', (req,res)=>{
  res.status(200).send('Hello World!');
});

test('GET /', async()=>{
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Hello World!');
})