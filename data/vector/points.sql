SET CLIENT_ENCODING TO UTF8;
SET STANDARD_CONFORMING_STRINGS TO ON;
BEGIN;
CREATE TABLE "points" (gid serial PRIMARY KEY,
"osm_id" numeric(11,0),
"timestamp" varchar(20),
"name" varchar(48),
"type" varchar(16));
SELECT AddGeometryColumn('','points','the_geom','-1','POINT',2);
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601123959','2011-01-05T18:55:19Z','KOE-33','pub','010100000001284DDE5B2C1D403CA4DFBE0EA44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601123955','2010-12-29T18:34:18Z','Altstadtmeile','pub','010100000069E48233F82B1D40684B677110A44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601113499','2010-12-29T18:34:18Z','El Gecco','restaurant','01010000003DE9013D1E2C1D40E42B483316A44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601113492','2009-12-29T20:11:55Z','Müllendiek','pub','010100000005FF3ADCB32B1D403C5442661DA44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601116321','2010-12-29T18:34:19Z','Christliche Gemeinde Bergstrasse','place_of_worship','01010000001D4DE5A37B2C1D40F2A633411EA44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601113498','2009-12-30T19:35:48Z','Am Muehlenteich','hotel','0101000000E1368B170B2B1D40B8884A7E1FA44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('602464854','2010-12-29T18:34:18Z','Verdi','restaurant','010100000071078893452B1D408C73F62922A44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601113500','2010-12-28T18:57:07Z','Da Pino','restaurant','01010000005DD58D1C8E2B1D401EDD41EC4CA44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601113501','2010-12-28T18:57:07Z','Adler','cafe','01010000009946EDD9CE2A1D404F4739984DA44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601113493','2010-12-29T18:16:26Z','Cafe Majier','pub','0101000000E1A0945A392D1D403E5A417859A44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('1093817067','2011-01-09T11:12:26Z','Deutsche Bank','bank','01010000004D8F728B542B1D40BE17377F5DA44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('602438145','2010-01-01T08:27:21Z',NULL,'telephone','0101000000958A2D4EC62A1D401B29B6DD5FA44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('1316053138','2011-06-08T11:23:48Z',NULL,'fountain','01010000008102CC214E2C1D40E66BE05861A44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601113495','2010-12-28T18:57:07Z','Maerkische Apotheke','pharmacy','0101000000ADDD6F592A2C1D40EF97608264A44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('601113494','2010-12-26T11:10:38Z','Hirsch Apotheke','pharmacy','0101000000453656629E2D1D4024850DAA68A44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('602438146','2010-01-01T08:27:21Z',NULL,'telephone','0101000000115E4315A32B1D40367F243669A44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('1326929293','2011-06-15T22:13:17Z','Eiscafe Conti','cafe','0101000000492D663A2A2D1D4006C105346CA44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('1366126791','2011-07-18T21:35:42Z',NULL,'cafe','0101000000C1C43071F52D1D40A4E26B7473A44940');
INSERT INTO "points" ("osm_id","timestamp","name","type",the_geom) VALUES ('272574308','2010-12-28T19:13:03Z',NULL,'post_office','0101000000B10392B06F2F1D407DACF1E379A44940');
CREATE INDEX "points_the_geom_gist" ON "points" using gist ("the_geom" gist_geometry_ops);
COMMIT;
