self.onmessage = function (event) {
  const { data } = event;
  const result = data.reduce((accu, curr) => curr < 0.5 ? accu + 1 : accu, 0);
  self.postMessage(result);
};