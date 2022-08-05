const express=require('express');
const {httpgetAllLaunches}=require('./lanuches.controller')
const launchesRouter=express.Router();
launchesRouter.get('/launches',httpgetAllLaunches);
module.exports=launchesRouter;