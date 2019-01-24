# PassEncryptApi

## Descripción
API simple para encriptar contraseñas desarrollada con TypeScript y Express js

## Pasos para usar

* Clonar repositorio
    ```
    git clone https://github.com/criegt/pass-encrypt-api.git
    ```

* Acceder a la carpeta del proyecto
    ```
    cd ./passpass-encrypt-api/
    ```

* Instalar dependencias globales o locales de **TypeScript**
    ```npm
    # Global
    npm install -g typescript ts-node
    # Local
    npm install typescript ts-node
    ```

* Instalar dependencias
    ```
    npm install
    ```

* Crear base de datos **MySQL**, nombre por defecto : **[PassEncryptDB]**, tener configurado _case-sensitive_

* Hacer la migración a la base de datos
    ```
    npm run seq -- db:migrate
    ```
    
* Iniciar servidor
    ```
    npm run dev
    ```

