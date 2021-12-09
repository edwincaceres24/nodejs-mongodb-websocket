const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req, res){
		res.send("Now we are using Express Router")
		
})

router.post('/message', function(req, res){
		console.log(req.body)
		res.send("You added a new message")
})

router.delete('/message', function(req, res){
	console.log(req.body)	
	res.send("You deleted a message")
})


app.listen(3000);

console.log("App is listening on PORT 3000");
