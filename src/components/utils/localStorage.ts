export const addCredentialsToLocalStorage = (
  isLoggedIn: string,
  accessToken: string,
  userId: string
) => {
  localStorage.setItem("isLoggedIn", isLoggedIn);
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("userId", userId);
};

export const clearCredentialsFromLocalStorage = () => {
  localStorage.removeItem(".isLoggedIn");
  localStorage.removeItem(".accessToken");
  localStorage.removeItem(".userId");
};

export const getCredentialsFromLocalStorage = () => {
  const isLoggedIn =
    localStorage.getItem(".isLoggedIn") === "true" ? true : false;
  const accessToken = localStorage.getItem(".accessToken");
  const userId = localStorage.getItem(".userId");

  return {
    isLoggedIn,
    accessToken,
    userId,
  };
};

export const isLoggedIn = (): boolean => {
  const loggedIn = localStorage.getItem(".isLoggedIn");
  if (loggedIn === null) {
    return false;
  } else {
    if (`${loggedIn}` === "true") {
      return true;
    } else {
      return false;
    }
  }
};
