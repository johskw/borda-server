const Event = require('../models/event');

module.exports = {
  show: (req, res) => {
    const event = {
      theme: "test theme",
      detail: "test detail",
      choices: [
        "test choice 1",
        "test choice 2",
        "test choice 3"
      ]
    };
    res.send(event);
  },
  create: (req, res) => {
    const event = new Event({
      theme: req.body.event.theme,
      detail: req.body.event.detail,
      choices: req.body.event.choices.map(choice => ({ name: choice })),
      password: req.body.event.password
    });
    event.save().then(() => {
      res.status(201).send(event);
    }).catch((err) => {
      res.status(500).send(err);
    });
  }
};
