const {
  User
} = require('../models/');
const bcrypt = require('bcrypt');
const {Op} = require('sequelize');
const {jwt} = require('../utils');

const userController = {

  login: async (request, response) => {
    try {
      const {
        login,
        password
      } = request.body;

      if (!login || !password) {
        return response.status(400).json({
          message: "login ou/et password erronné",
        });
      }
      const user = await User.findOne({
        where: {
          [Op.or]: {
            name: {
              [Op.iLike]: login,
            },
            email: {
              [Op.iLike]: login,
            },
          },
        },
      });
      if (!user) {
        return response.status(404).json({
          message: "votre email n'est pas reconnu",
        });
      };
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return response.status(400).json({
          message: "votre mot de passe est erroné",
          login,
        });
      }
      
      const userData = user.toJSON();
      const accessToken = jwt.generateAccessToken(userData);
      const refreshToken = jwt.generateRefreshToken(userData);

      
        return response.status(200).json({
          ...userData,
          accessToken,
          refreshToken,
          "message": "Bienvenue " + request.body.name+" Votre compte a été créer!"
        });
      

    } catch (error) {
      console.log(error)
      response.status(500).json({
        "message": "Veuillez tentez de vous reconnecter, créer un compte si vous n'en avez pas"
      })
    }
  },

  signUp: async (request, response) => {
try {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(request.body.password, salt);

  const newUser =  await User.create({
      name: request.body.name,
      email: request.body.email,
      lastname: request.body.lastname,
      password: encryptedPassword,
      profil_photo_url: request.body.profil_photo_url,
      description: request.body.description,
      
    });
  
    if (newUser) {

      const userData = newUser.toJSON();
      console.log(userData)
      const accessToken = jwt.generateAccessToken(userData);
      const refreshToken = jwt.generateRefreshToken(userData);
      console.log(request.headers.authorization)

      
        return response.status(200).json({
          ...userData,
          accessToken,
          refreshToken,
          "message": "Bienvenue " + request.body.name+" Votre compte a été créer!"
        });
      }

} catch (error) {
    console.log(error);
    return response.status(422).json(error)
}


  },

  logout : (request, response) => {
    return response.status(200).json({token:null});
  },

  getAll: async (request, response, next) => {
    try {
      const users = await User.findAll();
      response.json(users);
    } catch (error) {
      console.log(error)
    }
  },

  getOne: async (request, response) => {
    console.log('je suis avant  le try')
    try {
      const user = await User.findByPk(request.params.id);
      if (!user) {
        return response.status(404).json({
          "message": "user Not Found !"
        });
      }

      return response.json({
        user
      })
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "Internal server error. Please retry later",
      });
    }

  },


  updateOne: async (request, res, next) => {
    console.log('je passe par le updateOne')
    try {
      const userToUpdate = await User.findByPk(request.params.id);
      console.log(userToUpdate)
      if (!userToUpdate) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      await userToUpdate.update({
        ...request.body,
      });
      //const result = {...request.body} cibler le champ qui a été modifier .
      return res.status(200).json({
        message: `Modifications effectuées `
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "Une erreur est survenue",
      });
    }
    next()
  },

  deleteOne: async (request, response) => {
    try {
      const userToDelete = await User.findByPk(request.params.id);
      console.log(userToDelete);
      if (!userToDelete) {
        return response.status(404).json({
          "message": "user Not Found !"
        });
      }
      await userToDelete.destroy()
      return response.json({
        "message": "Votre compte a bien été supprimé"
      })
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "Une erreur est survenue",
      });
    }

  },
}

module.exports = userController