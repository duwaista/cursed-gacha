const getLocalToken = (key = "cocken") => {
  return window.localStorage.getItem(key);
};

export default getLocalToken;
