const data = {
  users: require("../data/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const getUsers = (req, res) => {
  res.json(data.users);
};

const getUser = (id) => {
  return (req, res) => {
    // Code pour récuperer un utilisateur par ID
  };
};

module.exports = { getUsers, getUser };
