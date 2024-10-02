const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let tasks = [];

// Create a task
app.post('/tasks', (req,res)=>{
  const task = {id: tasks.length + 1, ...req.body };
  tasks.push(task);
  res.status(201).send(task);
})

// Get All Tasks
app.get('/tasks', (req,res)=> {
  res.status(200).send(tasks);
})

// Get a single task by id
app.get('/tasks/:id', (req,res)=>{
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if(!task) return res.status(404).send('Task not found');
  res.send(task);
})

// Update a task
app.put('/tasks/:id', (req,res)=>{
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if(!task) return res.status(404).send('Task not found');

  task.title = req.body.title;
  task.description = req.body.description;
  task.status = req.body.status;
  res.send(task)
})

// Delete a Task
app.delete('/tasks/:id', (req,res)=>{
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.send('Task deleted.');
})

app.get('/', (req,res)=>{
  res.send('Hello World');
});

if (require.main === module) {
  // Start the server only if this file is executed directly
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for testing or external use
module.exports = app;

