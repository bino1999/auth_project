const goal =  require('../models/goal')

// get all
const getGoals = async (req,res)=>{
   try{
    const data  = await goal.find()
    res.json(data)
   }
   catch(error){
     console.log(error)
   }
}


//get one 

const getone = async (req,res)=>{
  try {
   const getOneGoal = await goal.findById(req.params.id)
   res.json(getOneGoal)
  }
  catch(error){
    console.log("Error")
  }
}



//post
const addGoals = async(req,res)=>{
  try{
   const data = await goal.create({
     name:req.body.name
     
   })
   res.json(data)
  }
  catch(error){
   console.log(error)
  }
}

//put

const putGoals =async (req,res)=>{
    try{
    const getGoal = goal.findById(req.params.id)
    if(!getGoal){
      res.send('error')
    }
    else{
      const updatedGoal = await goal.findByIdAndUpdate(req.params.id,req.body)
      res.send('update succesfull')
    }

    }
    catch(error){
     res.send(`error${error}`)
    }
}

//delete

const deleteGoals = async (req,res)=>{
   try{
    const deletingGoal = await goal.findById(req.params.id)
    if (!deletingGoal) {
      res.send(`not exist`);
    } else {
      await deletingGoal.deleteOne();
      res.send("goal deleted succesfully");
    }
   }
   catch(error){
    console.log(error)
   }
}

module.exports = {
  getGoals,
  addGoals,
  putGoals,
  deleteGoals,
  getone
};