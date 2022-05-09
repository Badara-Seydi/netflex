const {
    jwt
} = require("../utils");

//le token est a mettre dans le header/BEARER lors d'une requete

module.exports = {

    authenticate: (request, response, next) => {
        const authHeader = request.headers.authorization;
        const token = authHeader ?.split(" ")[1];
        console.log(token)
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
            };
            request.user_id = user.id;
            console.log(user.email)
            next();
        });
    },

    // refreshToken: (request, response, next) => {
    //     const authHeader = request.headers.authorization
    //     const token = authHeader && authHeader.split(' ')[1]

    //     if (token == null) return response.sendStatus(401)

    //     jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    //         if (err) {
    //             return response.sendStatus(401)
    //         }

    //         // TODO: Check en base que l'user est toujours existant/autorisé à utiliser la plateforme
    //         delete user.iat;
    //         delete user.exp;
    //         const refreshedToken = generateAccessToken(user);
    //         response.send({
    //             accessToken: refreshedToken,

    //         })
    //     })


    // }
}