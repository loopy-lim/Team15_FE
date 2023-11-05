export const isValidEmailAndPassword = (newEmail, newPassword) => {
  const isEmailValid = emailPattern.test(newEmail);
  const isPasswordValid = passwordPattern.test(newPassword);
  setCanNext(isEmailValid && isPasswordValid);
};

export const handleEmailChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
  isValidEmailAndPassword(newEmail, password);
};

export const handlePasswordChange = (event) => {
  const newPassword = event.target.value;
  setPassword(newPassword);
  isValidEmailAndPassword(email, newPassword);
};
