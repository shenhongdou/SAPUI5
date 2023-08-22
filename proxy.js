const request = require("request");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3002;

app.use(
  bodyParser.text({
    type: "multipart/mixed",
  })
);

function getResponseWithType(res, body) {
  return {
    content_type: res.headers["content-type"],
    body: body,
  };
}

const sendRequest = (req) => {
  const url = req?.url?.slice(1);

  const oOptionsGet = {
    url,
    method: "GET",
  };

  const oPtionPost = {
    url,
    method: "POST",
    json: false,
    headers: {
      "content-type": req.get("content-type"),
    },
    body: req.body,
  };

  const oOptions = req.method === "POST" ? oPtionPost : oOptionsGet;
  const method = req.method === "POST" ? "post" : "get";

  return new Promise((resolve, reject) => {
    request?.[method]?.(oOptions, (error, response, body) => {
      if (error) {
        reject(error);
      }

      resolve(getResponseWithType(response, body));
    });
  });
};

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", "9.0.0");
  next();
});

app.get("/https://services.odata.org/*", function (req, res) {
  sendRequest(req).then(function (data) {
    var contentType = data.content_type;

    res.set("Content-Type", contentType);
    res.send(data.body);
  });
});

app.post("/https://services.odata.org/*", function (req, res) {
  sendRequest(req).then(function (data) {
    var contentType = data.content_type;

    res.set("Content-Type", contentType);
    res.send(data.body);
  });
});

app.listen(port, function () {
  console.log("Proxy server listens on port: " + port);
});
