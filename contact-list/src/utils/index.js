export function formValidation(input) {
  if (!input.firstName || !input.surname) {
    return {
      success: false,
      message: 'First name and surname is required',
    }
  }
  // Success
  return {
    success: true,
    input,
  }
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
}
