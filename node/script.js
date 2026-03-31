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
