-- Revert netflex:initialization from pg

BEGIN;

DROP TABLE "user","commentary";


COMMIT;
