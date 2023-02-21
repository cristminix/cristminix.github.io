import express from 'express';
import UserCtl from "./controllers/userCtl"
import UserModel from "./models/UserModel"
import dbConfig from "./config/db.json"

const app = express();

//console.log(dbConfig)

app.get("/api/hello", (req, res) => {
  res.json({ hello: "world" });
});

const userModel = new UserModel(dbConfig);
const userCtl = new UserCtl(userModel);

app.get("/api/user/list", async(req,res,next)=>{userCtl.list(req,res,next)});
app.get("/api/user/create", async(req,res,next)=>{userCtl.create(req,res,next)});
app.get("/api/user/view", async(req,res,next)=>{userCtl.view(req,res,next)});
app.get("/api/user/update", async(req,res,next)=>{userCtl.update(req,res,next)});
app.get("/api/user/delete", async(req,res,next)=>{userCtl.delete(req,res,next)});
app.get("/api/user/validation", async(req,res,next)=>{userCtl.validation(req,res,next)});


export const handler = app;