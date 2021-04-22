export const dataFormat = (input) => {
  const date = new Date(input);
  return [
    ("0" + date.getDate()).slice(-2),
    ("0" + (date.getMonth() + 1)).slice(-2),
    date.getFullYear(),
  ].join("/");
};

export const getId = (input) => {
  const list = input.split("/");
  return list[list.length - 2];
};

export const favouitesHandler = (url) => {
  const favourite = localStorage.getItem("favourites");
  const favourites = JSON.parse(favourite);
  let fav = [];
  if (favourites === null) {
    fav.push(url);
    localStorage.setItem("favourites", JSON.stringify(fav));
    return;
  }
  let push = true;
  favourites.forEach((element) => {
    if (element !== url) {
      fav.push(element);
    }
    if (element === url) {
      push = false;
    }
  });
  if (push) fav = [...fav, url];
  localStorage.setItem("favourites", JSON.stringify(fav));
};

export const checkFavourite = (url) => {
  const favourite = localStorage.getItem("favourites");
  const favourites = JSON.parse(favourite);
  if (favourites === null) {
    return false;
  }
  if (favourites.length === 0) {
    return false;
  }
  let push = false;
  favourites.forEach((element) => {
    if (element === url) {
      push = true;
    }
  });
  if (push) {
    return true;
  } else {
    return false;
  }
};
