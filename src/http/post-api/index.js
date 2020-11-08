let data = require("@begin/data");

exports.handler = async function http(req) {
  let table = "pomodoro";
  let key = "start";
  let datenow = Date.now();

  await data.set({ table, key, datenow });

  console.log(datenow);

  return {
    headers: {
      "content-type": "application/json; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    statusCode: 200,
    body: JSON.stringify({
      datenow,
    }),
  };
};
