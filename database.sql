
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "Job" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"jobname" VARCHAR(50) NOT NULL,
	"jobnum" integer NOT NULL,
	"jobtype" VARCHAR(25) NOT NULL,
	"start_date" DATE NOT NULL,
	"start_time" TIME NOT NULL,
	"duration" integer NOT NULL,
	"contactnum" VARCHAR(10) NOT NULL,
	"contactname" VARCHAR(25) NOT NULL,
	"laborer" VARCHAR(25) NOT NULL,
	"supervisor" VARCHAR(25) NOT NULL,
	"notes" TEXT NOT NULL
);

-- User Info

INSERT INTO "user" ("username", "password")
VALUES ('MikeSmithmanson', '$mith123');

INSERT INTO "user" ("username", "password")
VALUES ('LiamAllen', 'LiamK1234');


VALUES ('Dantheman', 'Danny123');