let clientWidth = `${document.documentElement.clientWidth}`;
// let clientHeight = `${document.documentElement.clientHeight}`;
const per = clientWidth / 750;

const limitSetRem = (rem) => {
  if (rem < Infinity) {
    document.documentElement.style.fontSize = `${rem}px`;
  } else {
    document.documentElement.style.fontSize = '23.768px';
  }
};

limitSetRem(per * 100);
window.onresize = () => {
  clientWidth = `${document.documentElement.clientWidth}`;
  // clientHeight = `${document.documentElement.clientHeight}`;
  const temp = clientWidth / 750;
  limitSetRem(temp * 100);
};
