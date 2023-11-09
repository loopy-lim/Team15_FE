const passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const namePattern = /^[a-zA-Z가-힣0-9]{2,11}$/;

export const isValidEmail = (email) => emailPattern.test(email);
export const isValidPassword = (password) => passwordPattern.test(password);
export const isValidName = (name) => namePattern.test(name);
