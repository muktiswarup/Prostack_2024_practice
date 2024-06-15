CREATE TABLE employee(
eid int,
ename VARCHAR(32) unique,
esal FLOAT NOT Null,
eloc VARCHAR(32) DEFAULT 'Pune',
bu_id int,
age INT CHECK(age>=18),
PRIMARY KEY(eid),
FOREIGN KEY(bu_id) REFERENCES Bunit(unit_id)
);

CREATE TABLE bunit(
unit_id INT ,
name VARCHAR(32) unique,
uloc VARCHAR(32) unique,
PRIMARY KEY(unit_id)
);
