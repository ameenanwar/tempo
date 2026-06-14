const express=require("express");
const app=express();
app.get("/",(req,res)=>
{
res.send("this is my network");
} );
app.get("/about", (req, res) => {
    res.send("Docker Compose Learning Project");
});

app.listen(3000,()=>
{
console.log("this is the server on 3000");
}
);


