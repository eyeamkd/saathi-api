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

	const {state, district ,town , facility  }=req.body;
	knex('verbal_screening').insert({  
		state : state, 
		district: district ,
		town: town , 
		facility: facility, 
		children_attended_opd:req.body.children_attended_opd,
		children_screened_for_tb_tool:req.body.children_screened_for_tb_tool,

	}).then(console.log  ) 
	.then(console.log("Form data uploaded")) 
	.catch(err=>res.send("Form data upload unsuccessful")) 
	if(req.body.children_attended_opd>5){ 
	res.status(200).send("Form data has been uploaded");  
	}  
	else {  
		res.status(400).send("Error uploading form data");
	}
	
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
