var inquirer = require("inquirer");
var fs = require('fs');
const util = require("util");
const axios = require("axios")
const writeFileAsync = util.promisify(fs.writeFile);
var generate = require("./generateHTML")


 function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "list",
        name: "color",
        message: "Pick a color",
        choices: ["red", "green", "blue", "pink"]
      },
      {
          message: "Github Username",
          name: "username"
      }
    ]);
  }
 
async function getUser(data){
     
const userData = await axios.get(`https://api.github.com/users/${data.username}`)

 return  {
    followers: userData.data.followers,
    location: userData.data.location,
    public: userData.data.public_repos,
    following: userData.data.following,
     pic: userData.data.avatar_url, 
     stars: userData.data.starred,
     blog: userData.data.blog,
     company: userData.data.blog,
     url: userData.data.url,

    }
   
   
    };
     
  

  async function init() {
    
    try {
      const answers = await promptUser();
      const response = await getUser(answers)
      console.log(response)
      const html = generate(answers, response);
  
      await writeFileAsync("index.html", html);
  
      console.log("Successfully wrote to index.html");
    } catch(err) {
      console.log(err);
    }
  }
  
  init()