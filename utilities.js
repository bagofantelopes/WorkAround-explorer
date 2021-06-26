const formatNumber = number => {
  let str = String(Math.floor(number));

  for (let i = str.length - 3; i > 0; i -= 3) {
    str = str.slice(0, i) + ',' + str.slice(i);
  }

  return str;
}

export default formatNumber;