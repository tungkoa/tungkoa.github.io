export const innerHtml = (content) => {
  return { __html: content };
};

export const handlerError = (error, cb?) => {
  alert(error);
  if (cb !== undefined && typeof cb === "function") {
    cb();
  }
};

export const getErrorObject = (error) => {

  const errorObject = {
    error_code: null,
    message: "Oops something went wrong"
  };

  if (!error) {
    return errorObject;
  }
  try {
    if (typeof error === "object" && typeof error.data === "object") {
      if (typeof error.data.message !== "undefined") {
        errorObject.message = error.data.message;
      }
      if (typeof error.data.error_code !== "undefined") {
        errorObject.error_code = error.data.error_code;
      }
    }
  } catch (e) {
    return errorObject;
  }

  return errorObject;
};


export const getErrorMessage = (error) => {
  const errorObject = getErrorObject(error);
  return errorObject.message;
};

export const getErrorCode = (error) => {
  const errorObject = getErrorObject(error);
  return errorObject.error_code;
};

export const handlerErrorByCode = (error, error_code, cb) => {
  const errorObject = getErrorObject(error);
  if (errorObject.error_code === error_code || error_code === 0) {
    if (typeof cb === "function") {
      cb();
    }
  }
};

