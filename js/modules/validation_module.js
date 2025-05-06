const regExMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regExPass = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
const regExName = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;

export const isValidEmail = (email) => regExMail.test(email);
export const isValidPassword = (password) => regExPass.test(password);
export const isValidName = (name) => regExName.test(name);