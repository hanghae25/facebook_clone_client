const setCookie = (name, value, exp = 1, path = "/") => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name} = ${value}; expires  =${date.toUTCString()}; path = ${path}`;
};

const getCookie = (name) => {
  let cookie = "; " + document.cookie;

  let parts = cookie.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

//쿠키 삭제시 도메인이랑 path 넣어주기!
const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  let domain = window.location.hostname;
  document.cookie =
    name + "=; expires=" + date + ";domain = " + domain + ";path = /";
};

export { setCookie, getCookie, deleteCookie };
