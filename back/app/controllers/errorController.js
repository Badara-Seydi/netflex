const errorController ={

    erreur = (request, response, next) => {
        response.status(400).send({message : 'Page Introuvable.'})
    }
};

module.exports = errorController;