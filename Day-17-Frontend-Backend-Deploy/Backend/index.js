const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

let tasks = [
  {
    id: 1,

    title: "Complete Internship",
  },
];

app.get(
  "/tasks",

  (req, res) => {
    res.json(tasks);
  },
);

app.post(
  "/add-task",

  (req, res) => {
    const newTask = {
      id: Date.now(),

      title: req.body.title,
    };

    tasks.push(newTask);

    res.json(newTask);
  },
);

app.delete(
  "/delete/:id",

  (req, res) => {
    tasks = tasks.filter((task) => task.id != req.params.id);

    res.json({
      message: "Task Deleted",
    });
  },
);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,

  () => {
    console.log(`Running ${PORT}`);
  },
);
