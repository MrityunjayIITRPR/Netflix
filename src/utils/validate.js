export const validateFormData = (email, password) => {
  const isvalidEmail =
    /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(
      email
    );
  const isValidPassowrd =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
  if (!isvalidEmail) {
    return "Email is not valid";
  }
  if (!isValidPassowrd) {
    return "Password is not valid";
  }
  return null;
};
