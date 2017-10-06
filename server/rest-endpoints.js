module.exports = function(app, loggedIn) {

  var mysql = require('mysql');
  var bodyParser = require('body-parser');
  app.use(bodyParser.json()); // for parsing application/json
  var loggedIn = require('./logged-in.js');

  var pool = mysql.createPool({
    connectionLimit : 2, // maks antall koblinger
    host     : 'mysql.stud.iie.ntnu.no',
    user     : 'nilstesd',
    password : '********',
    database : 'nilstesd',
    debug    :  false
  });

  app.get('/person', loggedIn, function (req, res) {
    console.log('Got GET request');
      pool.getConnection(function(err, connection) {
      if (err) {
        res.status(500); // Internal server error
        res.json({"error" : "Error connecting to database: " + err});
        return;
      }
      console.log('Connected to database...');

      connection.query("select navn,adresse,alder from person", function(err, rows) {
        connection.release(); // Legg tilbake i pool
        if(!err) {
          console.log(rows);
          res.json(rows);
        } else {
          res.status(500);
          res.json({"error" : "Error reading database: " + err});
        }
      });
    });
  });

  app.post('/person', loggedIn, function (req, res) {
    console.log('Got POST request');
    pool.getConnection(function(err, connection) {
      if (err) {
        res.status(500); // Internal server error
        res.json({"error" : "Error connecting to database: " + err});
        return;
      }
      console.log('Connected to database...');

      var values = [
        req.body.navn,
        req.body.adresse
      ];
      var sql = "insert into person (navn,adresse) values (?,?)";
		
      connection.query(sql, values, function(err) {
        connection.release(); // Legg tilbake i pool
        if(!err) {
          console.log("Insert OK");
          res.send("");
        } else {
          res.status(500);
          res.json({"error" : "Error inserting into database: " + err});
        }
      });
    });
  });
}
