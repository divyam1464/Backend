const http = require("http");
const url = require("url");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let data = "";
    req.on("data", (chunks) => {
      data += chunks;
    });
    req.on("end", () => {
      const parsedData = queryString.parse(data);
      res.writeHead(200, { "content-type": "application/JSON" });
      res.end(
        JSON.stringify({
          message: "Form Data Received1",
          parsedData,
        })
      );
    });
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on : http://localhost:${port}`);
});
