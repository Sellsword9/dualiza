## Proyecto en equipo con React para el proyecto de Dualiza del IESHlanz

## Despliegue de DUALIZA

1. **Dockerización**

    Inicialmente, creamos un contenedor Docker utilizando la imagen de Ubuntu con Apache2:

    ```bash
    docker pull ubuntu/apache2
    ```

    Luego, creamos una carpeta temporal en la terminal de Ubuntu, fuera de nuestro nuevo contenedor, y dentro de esta carpeta realizamos un clon del repositorio de nuestro proyecto.

    Nos aseguramos de tener npm con la versión correcta instalada.

    En la carpeta generada por el clon del repositorio, ejecutamos `npm i` seguido de `npm build` para generar una carpeta llamada "dist".

    A continuación, movemos el contenido de la carpeta "dist" a la ruta `/var/www/html/` dentro de nuestro contenedor Docker, previamente eliminando cualquier contenido existente en esta ruta.

    Una vez fuera del contenedor, realizamos un commit de los cambios:

    ```bash
    docker commit [nombre_contenedor_apache2] [nombre_usuario_doc]
    ```

    Se asigna un tag al contenedor:

    ```bash
    docker tag dualiza [nombre_usuario]/dualiza
    ```

    Finalmente, realizamos un push del contenedor:

    ```bash
    docker push [nombre_usuario_docker]/[nombre_contenedor]
    ```

2. **Despliegue en tu Docker**

    Dentro de tu Docker, descargamos la imagen del contenedor de DUALIZA:

    ```bash
    docker pull crisls/dualiza:1.1
    ```

    Con la imagen del contenedor de DUALIZA en tus imágenes, puedes iniciar el contenedor:

    ![imagen1](https://github.com/Sellsword9/dualiza/src/assets/images/photo1709643418.jpeg)

    ![imagen2](.\src\assets\images\photo1709643471.jpeg)

    ```bash
    docker start [nombre contenedor docker]
    ```
    ![imagen3](src\assets\images\Captura.png)


    Ahora podrás acceder a la aplicación web DUALIZA desde tu navegador.
