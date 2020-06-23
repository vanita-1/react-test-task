const treeRoutes = require("./tree");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });

  treeRoutes(app, fs);
};

module.exports = appRouter;
