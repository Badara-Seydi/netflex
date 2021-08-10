-- Revert netflex:initialization from pg

BEGIN;

DROP TABLE "user","commentary","user_has_movies";


COMMIT;
