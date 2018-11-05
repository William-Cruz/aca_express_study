const contacts = require("../contacts");
let contactCount = contacts.length;

module.exports.list = (req, res) => {
  return res.json(contacts);
};

module.exports.show = (req, res) => {
  const vehicle = contacts.find((id) => {return id._id === req.params.id;});
  return res.json(vehicle);
};

module.exports.create = (req, res) => {
  const newContact = req.body;
  contacts.push(newContact);
  contactCount++;
  newContact._id = contactCount;
  return res.json(newContact);
};

module.exports.update = function update(req, res) {
  return res.json({theId: req.params.id});
};

module.exports.remove = function remove(req, res) {
  return res.json({});
};
