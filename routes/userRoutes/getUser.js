const data = require("../../sqlData");

module.exports = async (req, res) => {
  const id = Number(req.params.id);
  const user = await data.getUserById(id);

  if (user === "error") {
    res.status(500).json({ message: "Could not retrieve user" });
  } else {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
};
