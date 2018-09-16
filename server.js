const express=require('express'); 
const app = express();   
const bodyParser=require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const knex = require('knex')({
  client: 'pg',
  version: '7.4.3',
  connection: {
    host : '127.0.0.1',
    user : 'kunaldubey',
    password : '',
    database : 'saathi-db'
  }
});  



app.post('/verbal-screening',urlencodedParser,(req,res)=>{   

	const {state, district ,town , facility }=req.body;
	knex('verbal_screening').insert({  
		state : state, 
		district: district ,
		town: town , 
		facility: facility,

	}).then(console.log  )
});
// app.post('/tb-treatment',(req,res)=>{  


// })
  

app.get('/',(req,res)=>{  
	res.send("The server is working");
});


app.listen(3000,()=>{  
	console.log("Saathi Server is running \n"); 
	const date=new Date(); 
	console.log(date.toString());
})	
