/*create database battleship;

USE battleship;*/
DROP table IF EXISTS USUARIO;
CREATE TABLE USUARIO (
	id_usuario				int auto_increment			not null comment "ID del Usuario",
	email					varchar(50)					not null comment "Email del Usuario",
    nombreusuario			varchar(20)					not null comment "Nombre de Usuario",
	contrasena				varchar(20)					not null comment "Contrasena de la cuenta del Usuario",
    imagen					longblob					null comment "Avatar/Imagen del Perfil del Usuario",

	CONSTRAINT PK_USUARIO
			PRIMARY KEY (id_usuario)
);
/*
create table modelos(
	id_modelo		int auto_increment				not null,
    nombre				varchar(50)					not null 
);*/


#Registro
DROP procedure IF EXISTS sp_Registro;
DELIMITER $$
 CREATE PROCEDURE sp_Registro(
    pid_usuario				int				,
	pemail					varchar(50)		,
    pnombreusuario			varchar(20)		,
	pcontrasena				varchar(20)		    
	)
BEGIN
DECLARE busqueda_Cuenta INT; DECLARE v_buscaremail int ;
SET v_buscaremail = (SELECT Count(email) FROM USUARIO WHERE email = pemail);

		
         IF (v_buscaremail = 0) 
		THEN
			INSERT INTO USUARIO ( email, nombreusuario, contrasena)
			VALUES 				(pemail, pnombreusuario, pcontrasena);
		END IF;

END$$


#Iniciar sesion
DROP procedure IF EXISTS sp_Inicio_Sesion;
DELIMITER $$
 CREATE PROCEDURE sp_Inicio_Sesion(
	pemail					VARCHAR(50)		,
	pcontrasena				VARCHAR(20)	
	) 
BEGIN
	DECLARE busqueda_Cuenta INT; DECLARE v_buscaremail int ; DECLARE v_buscarpasword VARCHAR(20) ; DECLARE v_id INT;  declare  paviso VARCHAR(50);
	SET busqueda_Cuenta =  (SELECT COUNT(id_usuario) FROM USUARIO WHERE email = pemail AND contrasena = pcontrasena);

 IF (busqueda_Cuenta = 1) 
    THEN
            select nombreusuario from usuario where email = pemail AND contrasena = pcontrasena;
	END IF;
	IF (busqueda_Cuenta = 0) 
    THEN

			SET paviso =  "No existe cuenta";
	END IF;

END$$
/*
call sp_Registro(null, '1', '2', '3');
select * from  usuario;*/

/*INSERT INTO usuario( id_usuario, email, nombreusuario, contrasena)
                        VALUES (null, '$email', '$username', '$password');
                        
                        call sp_Inicio_Sesion('1', '3');*/