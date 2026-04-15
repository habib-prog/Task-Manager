const registration = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    res.send("Registration Controller");
  } catch (error) {}
};

const login = async (req, res) => {
  const { email, pass } = req.body;
  try {
  } catch (error) {}
};

module.exports = { registration, login };
