const fs = require("fs");

const path = require("path");

var catMe = require('cat-me');
const { error } = require("console");
const { constants } = require("buffer");

// catMe();  
// console.log(catMe());

// var jokes =  [
//     "hubot-dad-jokes"
// ]

// console.log(jokes);

fs.writeFile("./file.txt", "hello txt!!!", function(err){
    if(err){
        console.log(err);
    }    
    else{
        console.log("created!!!");
    }
});

fs.writeFileSync("./demo.txt", "yyyafnanwfq!!!");
console.log("overwrite!!!");

const data = fs.readFileSync("./file.txt", "utf-8");
console.log(data);

fs.appendFileSync("./file.txt", "new data is here!!!");
console.log("data appended!!!");


try{
    fs.unlinkSync("demo.txt")
    console.log("deleted!!");
}
catch(error){
    console.log(error.message);
};

try{
    fs.mkdirSync("dir/dir2");
    console.log("dircreated!");
}
catch(err){
    console.log(err.message);
}

const dirdata = fs.readdirSync("dir");
console.log(dirdata);

// fs.mkdirSync("../dir3");
// console.log("dir3created....");

// fs.rmdirSync("/dir3");
// console.log("rem|oved");

fs.renameSync("file.txt" , "helo")
console.log("renamed!!");


console.log(path.join("a", "b", "c", "hello.txt"));
console.log(path.resolve("a", "b", "c", "hello.txt"));






















