const { User} = require('../models/');

const userController = {

    getInformations: (req,res,next)=>{
        User.findOne({
            where :{
                id:req.params.id
            }
    })

        //Success
        .then(userData => {
            console.log(userData);
            res.render('user', {userData});
        })
    }
}

module.exports=userController