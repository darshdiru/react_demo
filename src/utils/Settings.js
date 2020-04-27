const Settings = {
  text: {
    label: {
      username: "enter your username",
      useremail: "enter your email id",
      userpass: "entr your password",
    },
    validate: {
      nameError: "username cannot be valid",
      emailError: "email cannot be empty or invalid",
      passError: "password cannot be empty or less than 8",
      confirmError: "confirm password should match password",
    },
  },
  constants: {
    StringSpace: " ",
    StringEmpty: "",
    booleanTrue: true,
    booleanFalse: false,
  },
};

export default Settings;
