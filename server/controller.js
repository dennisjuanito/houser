module.exports = {
  getAllHouses: (req, res, next) => {
    let dbInstance = req.app.get("db");
    dbInstance
      .getAllHouses()
      .then(response => {
        res.send(response);
      })
      .catch(err => res.status(404).send(err));
  }
};
