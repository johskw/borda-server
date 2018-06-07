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
    const event = req.body.event;
    res.status(201).send(event);
  },
};
