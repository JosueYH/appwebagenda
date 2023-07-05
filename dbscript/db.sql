create database dbagenda20231;
use dbagenda20231;

create table tuser
(
idUser char(13) not null,
firstName varchar(70) not null,
surName varchar(40) not null,
email varchar(100) not null,
password varchar(700) not null,
created_at datetime not null,
updated_at datetime not null,
primary key(idUser)
) engine=innodb;

create table tcity
(
idCity char(13) not null,
name varchar(100) not null,
created_at datetime not null,
updated_at datetime not null,
primary key(idCity)
) engine=innodb;

create table tperson
(
idPerson char(13) not null,
idUser char(13) not null,
idCity char(13) not null,
firstName varchar(70) not null,
surName varchar(40) not null,
phone varchar(20) not null,
email varchar(100) null,
created_at datetime not null,
updated_at datetime not null,
foreign key(idUser) references tuser(idUser),
foreign key(idCity) references tcity(idCity),
primary key(idPerson)
) engine=innodb;