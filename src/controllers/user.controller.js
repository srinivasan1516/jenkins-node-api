let users = [];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.addUser = (req, res) => {
  users.push(req.body);
  res.status(201).json({ message: 'User added' });
};
