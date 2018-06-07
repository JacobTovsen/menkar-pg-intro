CREATE TABLE songs(
	id serial primary key,
	rank integer,
	artist varchar(80),
	track varchar(120),
	published date
);