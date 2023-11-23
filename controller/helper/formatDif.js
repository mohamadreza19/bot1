const moment = require("jalali-moment");

function formatDif(timestamp = "") {
  //   const currantDate = moment().format("jYYYY/jM/jD HH:mm");
  const currantDate = moment(new Date());
  const params = moment(timestamp);
  //   const fomated = moment(timestamp, "jYYYY/jM/jD HH:mm");

  const diff = params.locale("fa").fromNow(true);

  console.log(diff);

  return currantDate;
}

module.exports = formatDif;
