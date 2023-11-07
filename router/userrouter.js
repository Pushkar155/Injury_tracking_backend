const router=require("express").Router();

const Userschema=require("../models/UserSchema");

router.post('/addData', async (req, res) => {
    const { name, data,time } = req.body;
    // console.log(totalamount,totalpaid);
    try {
        let exist = await Userschema.findOne({name});
        
        if(exist){
            exist.data.push(data);
            await exist.save();
            res.json({ message: 'Data updated successfully' });
        }
        else{
            const newdata= new Userschema({
                name,
                data,
                time
            });
            await newdata.save();
            res.json({message:"New Data Added Succefully"});
        }
    } catch (error) {
        res.status(500).json({error:"Server Error"});        
    }
});

router.put('/updateData/:id', async (req, res) => {
    const { name, data, time } = req.body;
    const id = req.params.id;
  
    try {
      const person = await Userschema.findById(id);
      // console.log(person)
  
      if (!person) {
        return res.status(404).json({ message: 'Person not found' });
      }
      person.name = name;
      person.data = data;
      person.time = time;
      await person.save();
  
      res.json({ message: 'Data updated successfully' });
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  });
  
router.get("/getData",async (req,res)=>{
    const person =await Userschema.find();
    console.log("hello");
    res.status(200).send(person);
})

module.exports=router;