const Event = require('../models/event');

module.exports = {
  show: (req, res) => {
    Event.findById(req.params.id).exec((err, event) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send({
        theme: event.theme,
        detail: event.detail,
        choices: event.choices
      });
    });
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
