const express = require('express');
require('dotenv').config();
const app = express();


const githubData = {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
    }

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/twitter",(req,res)=>{
    res.send("Hiteshdotcom");
})

app.get("/login",(req,res)=>{
    res.send('<h1>Please Login at Chai aur code</h1>')
})

app.get("/youtube",(req,res)=>{
    res.send("<h1>Chai aur code </h1>");
})

app.get("/github",(req,res)=>{
    res.json(githubData);
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
})