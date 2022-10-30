const mongoose = require("mongoose");

mongoose
.connect("mongodb://127.0.0.1:27017/dulceriaOnline",
  {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      console.log ("bibiana")
      throw err;
    } else {
      console.log("La conexion a la base de datos fue correcta...");
    }
  }
);

module.exports = mongoose;


