const { jwt } = require("../utils");

//le token est a mettre dans le header/BEARER lors d'une requete

module.exports={

  authenticate : (request, response,next) => {
    const authHeader = request.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (token === "undefined" || !token) {
        return response.status(401).send({
            message: "Le Token est inexistant"
        });
    }

    jwt.verifyAccessToken(token, (err, user) => {
        if (err) {
            return response.status(401).send({
                message: "Echec de l'authentification du Token",
            });
        }
        console.log(user);
        request.user_id = user.id;
        next();
    });
  }

  
}
