CREATE DATABASE Prueba_Somos_Credito;
USE Prueba_Somos_Credito;

Create table sucursales(
id int auto_increment primary key,
nombre_suc varchar (50) Not null,
direccion varchar (50) not null,
telefono varchar (15) not null,
estado boolean default true
);

select *from sucursales;

insert into sucursales (nombre_suc, direccion, telefono) values ('Sucursal Central', 'Campus Tec', '+502 3012-1070');
insert into sucursales (nombre_suc, direccion, telefono) values ('Sucursal Arkadia', 'Zona 10', '+502 4239-9845');
insert into sucursales (nombre_suc, direccion, telefono) values ('Sucursal Portales', 'Atlantida Zona 10', '+502 3312-2022');
insert into sucursales (nombre_suc, direccion, telefono) values ('Sucursal Solola', 'Los encuentros', '+502 4588-1170');
insert into sucursales (nombre_suc, direccion, telefono) values ('Sucursal Mazatenango', 'Plaza las Americas', '+502 2508-0678');

