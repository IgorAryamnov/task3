const data = require("../../sqlData");

module.exports = async (req, res) => {
  const users = await data.getUsers();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json({ message: "Could not retrieve users" });
  }
};
