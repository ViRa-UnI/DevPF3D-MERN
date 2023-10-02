```javascript
const request = require('supertest');
const app = require('../../backend/server.js');
const mongoose = require('mongoose');
const Project = require('../../backend/models/Project.js');
const Blog = require('../../backend/models/Blog.js');
const Skill = require('../../backend/models/Skill.js');

beforeAll(async () => {
  await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
});

test('It should response the GET method', async () => {
  const response = await request(app).get('/api/projects');
  expect(response.statusCode).toBe(200);
});

test('It should create a new project', async () => {
  const response = await request(app)
    .post('/api/projects')
    .send({
      name: 'Test Project',
      description: 'This is a test project',
      url: 'http://testproject.com',
    });
  expect(response.statusCode).toBe(200);
  expect(response.body.name).toBe('Test Project');
});

test('It should delete a project', async () => {
  const project = new Project({
    name: 'Test Project',
    description: 'This is a test project',
    url: 'http://testproject.com',
  });
  await project.save();

  const response = await request(app).delete(`/api/projects/${project.id}`);
  expect(response.statusCode).toBe(200);
});

// Similar tests can be written for Blogs and Skills

afterAll(async () => {
  await mongoose.connection.close();
});
```