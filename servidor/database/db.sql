create database scooter;
use scooter;
create table tipo_reservas(
id int auto_increment not null primary key,
descripcion char(150),
precio decimal(3,2),
hora time
);

create table scoters(
id int auto_increment not null  primary key,
descripcion char(150),
estado boolean,
codigo char(150)
);

create table tipo_personas(
id int auto_increment not null primary key,
tipoPersonaNombre char(150)
);

create table personas(
id int auto_increment not null primary key,
nombres char(150),
apellidos char(150),
direccion char(150),
password char(150),
email char (150),
tipoPersonaNombre int, 
foreign key (tipoPersonaNombre) references tipo_personas(id)
);

create table detalle_reservas(
id int auto_increment not null primary key,
descripcion char(150),
precio_total decimal (3,2),
idpersona int,
foreign key (idpersona) references personas(id),
idscooter int,
foreign key (idscooter) references scoters(id),
idTipoReserva int,
foreign key (idTipoReserva) references tipo_reservas(id)
);
