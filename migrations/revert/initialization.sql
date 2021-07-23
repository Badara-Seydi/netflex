-- Revert netflex:initialization from pg

BEGIN;

DROP TABLE "user","commentary","movie","category","user_has_movies","movie_has_categories";


COMMIT;
