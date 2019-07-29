export function formValidation(input) {
  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.firstName.length <= 0 || input.surname.length <= 0) {
    return {
      success: false,
      message: 'First name and surname is required',
    };
  }
  if (input.email && !emailRegEx.test(input.email)) {
    return {
      success: false,
      message: 'Invalid email format',
    };
  }
  // Success
  return {
    success: true,
    input,
  };
}

export const emptyInputKeys = {
  firstName: '',
  surname: '',
  email: '',
  phone: '',
  street: '',
  zip: '',
  city: '',
  region: '',
};
