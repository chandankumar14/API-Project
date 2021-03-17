const location1 =require('../Model/Location');

exports.Getlocation = (req, res) => {
location1.find()
.then( result => {
    res.status(200).json({message:'location fetch succesfully', Location:result})
})
.catch(err =>{
res.status(500).json({message:err})
})
}