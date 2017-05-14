const express   = require('express');
const path      = require('path');
const bodyPaser = require('body-parser');
const app       = express();

                      // configuration : setting view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

                      // middleware :
app.use(bodyPaser());

// array declaration   {id:1,task:"exercise"},
var todoList = [];

//-------------------------------------------------------------------------
                      // default route
app.get("/",(req,res)=>{
  //render view : display html file
  res.render('index',{
    title : "My Todo App",
    items : todoList
  });
  res.end();
});

//--------------------------------------------------------------------------
                      // route to add element
app.post("/add",(req,res)=>{
  //read value from post data
  var newTask = req.body.textfield;
  // add element into the list
  todoList.push({
      id    : todoList.length+1,
      task  : newTask
  });
  //render view : display html file
  res.render('index',{
      title : "My Todo App",
      items : todoList
  });
  res.end();
});

//-------------------------------------------------------------------------
                      // route to delete  element
app.post("/delete",(req,res)=>{
  //delete element from the list
  todoList.pop();
  //render view : display html file
  res.render('index',{
      title : "My Todo App",
      items : todoList
  });
  res.end();
});

//------------------------------------------------------------------------
                    // start server at 3000
app.listen(3000,()=>{
  console.log("TodoApp started @ localhost:3000 ");
});
