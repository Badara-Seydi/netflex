const Joi = require('joi')
            .extend(require('@joi/date'));

const userSchema = Joi.object({

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr' ,'io']  }})
        .required()
        .lowercase(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),

    pseudo: Joi.string()
        .min(3)
        .max(30)
        .required(),

    description: Joi.string()
        .min(0)
        .max(700),

    profil_photo_url: Joi.string(),
        
       

    role_id: Joi.number()
        .integer(),

    bookmarks: Joi.string()
        .min(3)
        .max(70),

    // access_token: [
    //     Joi.string(),
    //     Joi.number()
    // ],
    
})
.with('password', 'repeat_password')



module.exports= userSchema
