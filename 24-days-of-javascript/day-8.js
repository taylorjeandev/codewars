function validTime(str) {
  const [hours, minutes] = str.split(":");
  return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
}

function validTime(str) {
  let arr = str.split("").filter((num) => num !== ":");

  let hours = arr[0] + arr[1];
  let minutes = arr[2] + arr[3];

  if (hours < 25 && minutes < 61) {
    return true;
  } else {
    return false;
  }
}
