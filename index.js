require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "bt-ech",
  "id": 153829578,
  "node_id": "U_kgDOCStAyg",
  "avatar_url": "https://avatars.githubusercontent.com/u/153829578?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/bt-ech",
  "html_url": "https://github.com/bt-ech",
  "followers_url": "https://api.github.com/users/bt-ech/followers",
  "following_url": "https://api.github.com/users/bt-ech/following{/other_user}",
  "gists_url": "https://api.github.com/users/bt-ech/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/bt-ech/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/bt-ech/subscriptions",
  "organizations_url": "https://api.github.com/users/bt-ech/orgs",
  "repos_url": "https://api.github.com/users/bt-ech/repos",
  "events_url": "https://api.github.com/users/bt-ech/events{/privacy}",
  "received_events_url": "https://api.github.com/users/bt-ech/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Madhav Gaur",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "MadhavGaur_1234",
  "public_repos": 11,
  "public_gists": 2,
  "followers": 0,
  "following": 1,
  "created_at": "2023-12-14T12:37:18Z",
  "updated_at": "2025-09-28T11:06:07Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req , res) => {
    res.send("Madhavgaur.com")
})


app.get('/login' , (req , res) =>{
    res.send('<h1>Please Login at Chai aur Code</h1>');
})

app.get('/youtube' , (req , res) =>{
    res.send('<h2>Chai aur Code</h2>');
})

app.get('/github' , (req , res) => {
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})