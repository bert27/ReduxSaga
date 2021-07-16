# Prueba técnica React de LaLiga

---
<div classname="center">
<img src="https://i.ibb.co/w6XHtGC/reduxsaga-Test.png" >
</div>
---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Versión de Node: 12.16.1 o superior
Versión de NPM: 6.13.4 o superiror
Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari)

## Instrucciones
- [Instrucciones](src/docs/laliga-prueba-tecnica-instrucciones.md)

## Entorno de desarrollo local

### `npm install`
Para instalación de dependencias

### `npm start`
Entorno de desarrollo

### `npm test`
Ejecutar los test

## Memoria
---
Se incorpora la carpeta theme con los estilos generales.

El requisito de resolución en modo mvl es de "375px x 667px" pero esto provoca que en iphone x y android con pantalla grande se vea en modo pc.
Cambiando para que cuando se detecte ancho menor a 480px se visualize en modo mvl. 

La api proporcionada da token aunque la contraseña sea incorrecta,
añadido en login, la variable passwordok con la contraseña adecuada.
Si el usuario no introduce este password no podrá acceder a la vista users.

---

Se importa react-use-ripple para el efecto de los botones, es un efecto tipo flutter o material design.  --- 27.5kb.

---
Se importa file-loader para poder importar imagenes locales en componentes.
Usado para añadir un icono al lado del mensaje de error cuando se introducen contraseña o email erroneos.
https://www.npmjs.com/package//file-loader --- 28.1kb

---

Explicación de la app:

Cuando se introduce el usuario y la contraseña indicadas, se pasa de la vista login a la vista users.

Esta vista lee de la api cuantas páginas existen y crea la lógica de los botones de manera dinámica. El enrutamiento también es dínamico.

El diseño usa stylesComponenets con mediaquery para un diseño responsive desde iphone 5.

Se ha pensado en minimizar la espera del usuario entre cargas, añadiendo efecto en el botón y un esqueleton en la vista de usuarios.
Mientras no recibe ninguna id de ningun usuario, la id será 0 y se mostrará esqueleton. (Elementos en gris)

Las acciones del programa se realizan mediante redux, actions y reducers.

Las acciones iniciales ejecutan reduxsaga para llamar a una función que recoge los endpoints. La toma del token en el inicio de sesión y la lista de usuarios por página.

Al refrescar con f5 siempre se realiza la petición de usuarios, me ha faltado añadir persistencia. 

Se han añadido tests para las acciones del boton con firevent y tests en las acciones y unas pocas de reductores.

Los botones e inputs son todos el mismo componente para facilitar la edición y la creación de una biblioteca de componentes. 

-Desconexión:

El token se aloja en redux y en localstorage. Al cargar de nuevo se comprueba si existe en localstorage. Si es así vuelve  a cargarla y redirige a la vista users.
Cuando se hace click en desconectar, se borra de localstorage y se reedirige a /login

---
