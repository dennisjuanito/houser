module.exports = {
  getAllHouses: (req, res, next) => {
    let dbInstance = req.app.get("db");
    dbInstance
      .getAllHouses()
      .then(response => {
        res.send(response);
      })
      .catch(err => res.status(404).send(err));
  },
  createHouse: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let { name, address, city, state, zip } = req.body;
    console.log(req.body);
    dbInstance
      .createHouse([name, address, city, state, zip])
      .then(response => {
        res.send(response[0]);
      })
      .catch(err => res.status(404).send(err));
  },
  deleteHouse: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let { id } = req.params;
    dbInstance
      .deleteHouse([id])
      .then(response => res.send(response[0]))
      .catch(err => res.status(404).send(err));
  }
};
