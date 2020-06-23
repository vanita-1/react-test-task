const path = require('path');

const treeRoutes = (app, fs) => {
  const jsonPath = path.join(__dirname, '..', 'data', 'demo.json');
  // READ
  app.get("/tree", (req, res) => {
    try {
      fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
          res.status(500).send({
            status: 'failed',
            message: 'Something went wrong.'
          });
        }
        res.send({
          status: 'success',
          data: JSON.parse(data)
        });
      });
    } catch (err) {
      console.log('error ', err);
        res.status(500).send({
          status: 'failed',
          message: 'Something went wrong.'
      });
    }
  });
};

module.exports = treeRoutes;
