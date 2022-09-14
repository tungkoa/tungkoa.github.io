class Validators {
  static composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

  static requiredField = (value, values, meta) => {
    return value ? undefined : "This field is required.";
  };

  static minLength = min => value => {
    return value?.length >= min ? undefined : `Please enter at least ${min} characters.`
  };

  static maxLength = max => value => {
    return value?.length <= max ? undefined : `Please enter no more than ${max} characters.`
  };

  static isEqual = equalValue => value => {
    return equalValue === value ? undefined : 'Please enter the same value again.';
  };

  static phoneFieldRequired = (value) => {
    if (!value?.fullNumber) return "This field is required.";
    return value.ref?.current?.isValidNumber(value.fullNumber) ? undefined : "The phone number is not valid.";
  };

  static phoneField = (value) => {
    if (!value) return undefined;
    return value.ref?.current?.isValidNumber(value.fullNumber) ? undefined : "The phone number is not valid.";
  };

  static emailField = (value) => {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(value) ? undefined : "Please enter a valid email address.";
  };

  static passwordField = (value) => {
    if (!/[a-z]/.test(value)) {
      return "The password must contain at least one lowercase letter";
    } else if (!/\d/.test(value)) {
      return "The password must contain at least one number";
    } else if (!/[!@#$%^&*()_=\[\]{};':"\\|,.<>\/?+-]/.test(value)) {
      return "The password must contain at least one special character";
    } else if (!/^[a-zA-Z0-9!@#$%^&*()_=\[\]{};':"\\|,.<>\/?+-]+$/.test(value)) {
      return "The password contains non-admitted characters";
    } else {
      return undefined;
    }
  };

  static postCodeField = postCodeRegex => value => {
    if (!postCodeRegex) return undefined;
    const regex = new RegExp(postCodeRegex);
    return regex.test(value) ? undefined : "The post code is not valid";

  }
}

export default Validators;
