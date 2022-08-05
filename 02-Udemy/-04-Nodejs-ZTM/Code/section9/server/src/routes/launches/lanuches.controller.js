const launchesModel=require('../../models/launches.model')
function httpgetAllLaunches(req,res){
    return res.status(200).json(launchesModel.getAllLaunches());
}
module.exports = {
  httpgetAllLaunches,
};