
-- Lakes
--drop table lakes cascade;

CREATE TABLE lakes (
fid INTEGER NOT NULL PRIMARY KEY,
name VARCHAR(64);

SELECT AddGeometryColumn ('public','lakes','shore',32214,'POLYGON',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','lakes','shore',2,32214,'POLYGON'); */
INSERT INTO lakes VALUES (101, 'BLUE LAKE', ST_PolygonFromText('POLYGON((52 18,66 23,73 9,48 6,52 18), (59 18,67 18,67 13,59 13,59 18))', 32214));

-- Road Segments
--drop table road_segments cascade;

CREATE TABLE road_segments (
fid INTEGER NOT NULL PRIMARY KEY,
name VARCHAR(64),
aliases VARCHAR(64),
num_lanes INTEGER);

SELECT AddGeometryColumn ('public','road_segments','centerline',32214,'LINESTRING',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','road_segments','centerline',2,32214,'GEOMETRY'); */

INSERT INTO road_segments VALUES(102, 'Route 5', NULL, 2,
ST_LineFromText('LINESTRING( 0 18, 10 21, 16 23, 28 26, 44 31 )' ,32214));
INSERT INTO road_segments VALUES(103, 'Route 5', 'Main Street', 4,
ST_LineFromText('LINESTRING( 44 31, 56 34, 70 38 )' ,32214));
INSERT INTO road_segments VALUES(104, 'Route 5', NULL, 2,
ST_LineFromText('LINESTRING( 70 38, 72 48 )' ,32214));
INSERT INTO road_segments VALUES(105, 'Main Street', NULL, 4,
ST_LineFromText('LINESTRING( 70 38, 84 42 )' ,32214));
INSERT INTO road_segments VALUES(106, 'Dirt Road by Green Forest',NULL, 1, ST_LineFromText('LINESTRING( 28 26, 28 0 )',32214));
-- Divided Routes
CREATE TABLE divided_routes (
fid INTEGER NOT NULL PRIMARY KEY,
name VARCHAR(64),
num_lanes INTEGER);

SELECT AddGeometryColumn ('public','divided_routes','centerlines',32214,'MULTILINESTRING',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','divided_routes','centerlines',2,32214,'GEOMETRY'); */

INSERT INTO divided_routes VALUES(119, 'Route 75', 4,
ST_MLineFromText('MULTILINESTRING((10 48,10 21,10 0),
(16 0,16 23,16 48))', 32214));

-- Forests
CREATE TABLE forests (
fid INTEGER NOT NULL PRIMARY KEY,
name VARCHAR(64));

SELECT AddGeometryColumn ('public','forests','boundary',32214,'MULTIPOLYGON',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','forests','boundary',2,32214,'GEOMETRY'); */

INSERT INTO forests VALUES(109, 'Green Forest',
ST_MPolyFromText('MULTIPOLYGON(((28 26,28 0,84 0,84 42,28 26),
(52 18,66 23,73 9,48 6,52 18)),((59 18,67 18,67 13,59 13,59 18)))', 32214));

-- Bridges
CREATE TABLE bridges (
fid INTEGER NOT NULL PRIMARY KEY,
name VARCHAR(64));

SELECT AddGeometryColumn ('public','bridges','position',32214,'POINT',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','bridges','position',2,32214,'GEOMETRY'); */

INSERT INTO bridges VALUES(110, 'Cam Bridge', ST_PointFromText('POINT( 44 31 )', 32214));

-- Streams
CREATE TABLE streams (
fid INTEGER NOT NULL PRIMARY KEY,
name VARCHAR(64));

SELECT AddGeometryColumn ('public','streams','centerline',32214,'LINESTRING',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','streams','centerline',2,32214,'GEOMETRY'); */

INSERT INTO streams VALUES(111, 'Cam Stream',
ST_LineFromText('LINESTRING( 38 48, 44 41, 41 36, 44 31, 52 18 )', 32214));
INSERT INTO streams VALUES(112, NULL,
ST_LineFromText('LINESTRING( 76 0, 78 4, 73 9 )', 32214));

-- Buildings
CREATE TABLE buildings (
fid INTEGER NOT NULL PRIMARY KEY,
address VARCHAR(64));

SELECT AddGeometryColumn ('public','buildings','position',32214,'POINT',2);
SELECT AddGeometryColumn ('public','buildings','footprint',32214,'POLYGON',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','buildings','position',2,32214,'GEOMETRY');
INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','buildings','footprint',2,32214,'GEOMETRY'); */

INSERT INTO buildings VALUES(113, '123 Main Street',
ST_PointFromText('POINT( 52 30 )', 32214),
ST_PolygonFromText('POLYGON( ( 50 31, 54 31, 54 29, 50 29, 50 31) )', 32214));
INSERT INTO buildings VALUES(114, '215 Main Street',
ST_PointFromText('POINT( 64 33 )', 32214),
ST_PolygonFromText('POLYGON( ( 66 34, 62 34, 62 32, 66 32, 66 34) )', 32214));

--
CREATE OR REPLACE VIEW building_footprints AS 
 SELECT buildings.fid, buildings.address, buildings.footprint
   FROM buildings;
/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','building_footprints','position',2,32214,'GEOMETRY'); */
CREATE OR REPLACE VIEW building_positions AS 
 SELECT buildings.fid, buildings.address, buildings."position"
   FROM buildings;
/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','building_positions','position',2,32214,'GEOMETRY'); */

-- Ponds
CREATE TABLE ponds (
fid INTEGER NOT NULL PRIMARY KEY,
name VARCHAR(64),
type VARCHAR(64));

SELECT AddGeometryColumn ('public','ponds','shores',32214,'MULTIPOLYGON',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','ponds','shores',2,32214,'GEOMETRY'); */

INSERT INTO ponds VALUES(120, NULL, 'Stock Pond',
ST_MPolyFromText('MULTIPOLYGON( ( ( 24 44, 22 42, 24 40, 24 44) ),
( ( 26 44, 26 40, 28 42, 26 44) ) )', 32214));

-- Named Places
CREATE TABLE named_places (
fid INTEGER NOT NULL PRIMARY KEY,
name VARCHAR(64));

SELECT AddGeometryColumn ('public','named_places','boundary',32214,'POLYGON',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','named_places','boundary',2,32214,'GEOMETRY'); */

INSERT INTO named_places VALUES(117, 'Ashton',
ST_PolygonFromText('POLYGON( ( 62 48, 84 48, 84 30, 56 30, 56 34, 62 48) )', 32214));
INSERT INTO named_places VALUES(118, 'Goose Island',
ST_PolygonFromText('POLYGON( ( 67 13, 67 18, 59 18, 59 13, 67 13) )', 32214));

-- Map Neatline
CREATE TABLE map_neatlines (
fid INTEGER NOT NULL PRIMARY KEY);

SELECT AddGeometryColumn ('public','map_neatlines','neatline',32214,'POLYGON',2);

/* INSERT INTO geometry_columns(
f_table_catalog, f_table_schema, f_table_name, f_geometry_column, 
coord_dimension, srid, "type")
VALUES ('','public','map_neatlines','neatline',2,32214,'GEOMETRY'); */

INSERT INTO map_neatlines VALUES(115,
ST_PolygonFromText('POLYGON( ( 0 0, 0 48, 84 48, 84 0, 0 0 ) )', 32214));


--grants
GRANT ALL ON TABLE bridges TO public;
GRANT ALL ON TABLE buildings TO public;
GRANT ALL ON TABLE divided_routes TO public;
GRANT ALL ON TABLE forests TO public;
GRANT ALL ON TABLE lakes TO public;
GRANT ALL ON TABLE map_neatlines TO public;
GRANT ALL ON TABLE named_places TO public;
GRANT ALL ON TABLE ponds TO public;
GRANT ALL ON TABLE road_segments TO public;
GRANT ALL ON TABLE streams TO public;
GRANT ALL ON TABLE building_positions TO public;
GRANT ALL ON TABLE building_footprints TO public;
