var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;
	var newFriend = {
       "image": "http://lorenmpixel.com/400/400/people",
       "name" : name,
       "description" : description
   }
   console.log(newFriend);
   data.friends.push(newFriend);
    console.log('index',data);
	res.render('index',data)
 }

