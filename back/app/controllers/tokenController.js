const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models=require('../models')

module.exports = {
    register : function(req,res){
        const email = req.body.email;
        const password = req.body.password;
        const lastname = req.body.lastname;
        const firstname= req.body.firstname;
        const profil_photo_url= req.body.profil_photo_url;
        const description =  req.body.description;

        if (!email || !password){
            res.status(400).json({"error":"email or password don't exists"})
        }
        models.User.findOne({
            where:{email:email}
        })
        .then(function(userFound){
            if (!userFound) {
               bcrypt.hash(password,5,function(err,bcryptedPassword){

                const newUser = models.User.create({
                    email:email,
                    password: bcryptedPassword,
                    lastname:lastname,
                    firstname: firstname,
                    profil_photo_url: profil_photo_url,
                    description: description
                })
                .then(function(newUser){   
                    return res.status(201).json({
                        'userId':newUser.id
                    });
                })
                .catch(function(error) {
                    return res.status(500).json({error : "cannot add user"+error});
                });
               }) ;
            
            } else {
                return res.status(409).json({ "error" : "user already exist"})
            }
        })
        .catch(function(error){
            res.status(500).json({"message":"can't found this user, sorry"})
        })

    },   
    login : function (req,res){
        const email = req.body.email;
        const password = req.body.password;
        const lastname = req.body.lastname;
        const firstname= req.body.firstname;
        const profil_photo_url= req.body.profil_photo_url;
        const description =  req.body.description;


        if (!email || !password){
            res.status(400).json({"error":"email or password don't exists"})
        }
        models.User.findOne({
            where:{email:email}
        })
        .then(function(userFound){
            if(userFound){

            }else {
                return res.status(404).json({"error":"user not exists in the db"});
            }
        })
        .catch(function(error){
            return res.status(500).json({'error':'impossible to verify user'})
        });
    }

}