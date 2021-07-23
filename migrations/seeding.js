require('dotenv').config();
const faker =require('faker');
const axios = require('axios');
const log = require('log-beautify');
// const { Data } = require('phaser');
const {
    User,
    Movie,
    Commentary,
    Category
} = require('../app/models');

const KEY = process.env.API_KEY;

const getAllCategories = async _ => {

    const results = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`)
    // .then (res=> res.json();
    const categories = results.data.genres;
    console.log(categories);

    for (const categorie of categories) {
        await Category.create({
            label:categorie.name,
        })
    };
    


}

const getMoviesDataset = async _ => {
    const results = await axios('https://api.themoviedb.org/3/discover/movie?api_key=b79310e5c25643e20c05b842caaaee33')
    // https://api.themoviedb.org/3/discover/movie?api_key=b79310e5c25643e20c05b842caaaee33
    // .then (res=> res.json())
        const movies = results.data.results;
        console.log(movies);
        let compteur =0;
        for (const movie of movies) {
            
             await Movie.create({
                original_title:movies[compteur].original_title,
                category:movies[compteur].genre_ids,
                overview:movies[compteur].overview,
                backdrop_path:movies[compteur].backdrop_path,
                poster_path:movies[compteur].poster_path,
                popularity:movies[compteur].popularity,
                release_date:movies[compteur].release_date,
            })
            compteur++;
        } 
       
             
        }



const createFakeUsers = async _ => {
 const user = 500;
 for (let i=0 ;i<user ; i++) {
    const randomName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomMail = faker.internet.email();
    const password = faker.random.alphaNumeric();
    const profil_photo_url = faker.random.alphaNumeric();
    const description = faker.random.words();
    const user= await User.create({
        lastname:randomLastName,
        firstname:randomName,
        email:randomMail,
        password:password,
        profil_photo_url:profil_photo_url,
        description:description});
 };
 
}

const createFakeCommentary = async _ => {
    const randomUser = Math.floor(Math.random() * (500 - 0 + 1)) + 1;
    const random_movie = Math.floor(Math.random() * (20 - 0 + 1)) + 1;

    for (let index = 0; index < 150; index++) {
        const newComs = Commentary.create({
            content : faker.random.words(25),
            user_id : randomUser,
           movie_id : random_movie
       })
        
    }

    

    // for (let index = 0; index < User; index++) {
    //     const content = faker.random.words(25);
    //     const userId = User[index].id;


    //      }
    


}

// const createFakeUsersMovieCollection = async _ => {

//     // User.count
// }

const startSeeding = async _ => {
    // Get Current Time
    const startingTime = new Date().getTime();
    await getAllCategories();
    await getMoviesDataset();
    await createFakeUsers();
    await createFakeCommentary();
    // await createFakeUsersMovieCollection();
    const time = new Date().getTime() - startingTime;
    log.success('Seeding Completed in:', time, 'ms');
}

startSeeding();
