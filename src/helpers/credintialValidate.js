// Email Validation Regex
const validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

// Password Validation (Opsional: Minimun 8 characters, 1 letter and 1 number)
const validatePassword = (password) => {
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passRegex.test(password);
};

module.exports = { validateEmail, validatePassword };
