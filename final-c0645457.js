var express = require('express');
/*var path = require('path');*/
var mysql = require('mysql');
var app = express();

var connect /*ion*/ = mysql.createConnection({
	host : '174.79.32.158',
	user : 'finalexam',
	password : 'finalexam',
	database: 'finalexam'
});

app.get('/', function(req,res){
		var sql = 'SELECT * FROM ??';
		var inserts = ['finalexam']/*['contacts']*/
		var q = mysql.format(sql, inserts);
		connect.query(q, function(err, rows){
			res.send(rows);
		});
});

	/*var sql = 'SELECT * FROM contacts WHERE ?? = ?';
	var inserts = ['employees', 'emp_no', req.params.id];
	var q = mysql.format(sql, inserts);
	connection.query(q, function (err, rows) {
		res.send(rows);
	});*/


app.get('/id/:id', function(req,res) {
		var id = req.params.id;
		var sql = 'SELECT * FROM ?? WHERE id = ?';
		var inserts = ['finalexam', id]
		var q = mysql.format(sql, inserts);
		connect.query(q, function(err, rows){
		    if (rows.length == 1) {rows = rows[0];
			}
			if (rows.length == 0) 
			{res.status(404).send('{ ok : false }');
			}
			else{res.send(rows);}
			
			
			
			/*{res.writeHeader(404, {"Content-type": "text/plain"});
res.write('Error 404: File not found');
res.end();}*/
		});
});
app.get('/gender/:gender', function(req,res){
		var gender = req.params.gender;
		var sql = 'SELECT * FROM ?? WHERE gender = ?';
		var inserts = ['finalexam', gender]
		var q = mysql.format(sql, inserts);
		connect.query(q, function(err, rows){
		    if (rows.length == 1) {rows = rows[0];
			}
			if (rows.length == 0) 
			{res.status(404).send('{ ok : false }');
			}
			else{res.send(rows);}
		});
		
});

app.get('/name/:name', function(req,res){
		var name = req.params.name;
		var sql = 'SELECT * FROM ?? WHERE name LIKE '%'+?+'%' ';
		var inserts = ['finalexam', name]
		var q = mysql.format(sql, inserts);
		connect.query(q, function(err, rows){
		    if (rows.length == 1) {rows = rows[0];
			}
			if (rows.length == 0) 
			{res.status(404).send('{ ok : false }');
			}
			else{res.send(rows);}
		});
		
		
});









var server = app.listen(1995, function (err) {
	console.log('Listening on Port 1995');
});

