console.log("welcome to node.js");

let i;
for(i=0;i<5;i++)
{
    console.log("value=",i);
}


console.log(process.argv);

let p = process.argv;
for(i=0;i<p.length;i++)
{
    console.log("hello",p[i]);
}

module.exports = 123;


const figlet = require('figlet');

figlet("Hello Kunal  !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
