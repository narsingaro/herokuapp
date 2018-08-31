var express = require('express');
var url =require('url');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
var projects = [
              {
                 employeeid: "00001",
                 employeename: "srinu",
                 phone:"567365417",
                 Email:"abc@gamil.com",
                 address:"hyd",
               

              },
              {
                 employeeid: "00002",
                 employeename: "ramu",
                 phone:"567365417",
                 Email:"abc@gamil.com",
                 address:"hyd",
              },

              {
                 employeeid: "00003",
                 employeename: "rahul",
                 phone:"567365417",
                 Email:"abc@gamil.com",
                 address:"hyd123",
              },             
];
var holiday = [
              {
                 Date: "26/01/2018",
                 Holidayname: "RepublicDay",

              },
              {
                 Date: "27/01/2018",
                 Holidayname: "pongal",
              },
{
                 Date: "15/08/2018",
                 Holidayname: "Independence Day",
              },
              {
                  Date: "21/08/2018",
                 Holidayname: "Raksha Bandhan",
              },             
];
app.get('/',function(req,res)
{
	//res.send("welcome to employee details.....");
  res.sendFile(__dirname+'/'+'homepage.html');
});
app.get('/employeedetail',function(req,res)
{
  res.sendFile(__dirname+'/'+'employeedetails.html');
});
app.get('/holydayfile',function(req,res)
{
  res.sendFile(__dirname+'/'+'holidaynode.html');
});
app.get('/employee', function (req, res) {
   //res.send('hello');
   res.sendFile(__dirname+'/'+'employeedetails.html');
});
app.get('/holiday1', function (req, res) {
   //res.send('hello');
   res.sendFile(__dirname+'/'+'holidaynode.html');
});
app.get('/holiday',function(req,res)
{
	console.log(JSON.stringify(holiday));
res.send(JSON.stringify(holiday));
});
app.get('/empget',function(req,res)
{
	//res.send(JSON.stringify(projects));
	employeedata(function(data)
    {
      res.send(data);
    });
});
app.post('/emppost',function (req, res)
{
employeedata(function(data){
  res.send(data);
});
console.log('ended');
});
function employeedata(callback)
{
       callback(JSON.stringify(projects)) ;        
}
function holidaydetails(callback)
{
       callback(JSON.stringify(holiday)) ;        
}
app.post('/addholiday',function (req, res)
{
var holidaynew={
               Date: req.body.date,
                 Holidayname:req.body.holidayname
};
holiday.push(holidaynew);
res.send("your holyday added successfully");
console.log('ended');
});
var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});