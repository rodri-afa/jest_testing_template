# Plantilla de testing con Jest

## Antes de comenzar...

Para poder seguir este documento, es necesario tener instalado previamente Nodejs en el equipo. Nodejs permite ejecutar código Javascript sin necesidad de utilizar un navegador web. La instalación de Node se puede realizar descargando el instalador de la [página oficial de Nodejs](https://nodejs.org/es/).

Será necesario utilizar un editor de código, preferiblemente con una terminal integrada y compatibilidad con un gestor de versiones de código como git.

También, es recomendable tener instalado una herramienta de control de versiones en el equipo. En este caso se va a utilizar [Git](https://git-scm.com/), ya que es la herramienta opensource más utilizada.

Además, estar en posesión de una cuenta en una página que ofrezca servicios de servidores gratuitos con Git instalado como [GitHub](https://github.com/) es altamente recomendado.

## Primeros pasos

Para poder realizar test unitarios con Jest, es necesario crear un proyecto de npm e instalar la librería de testing [Jest](https://jestjs.io/es-ES/docs/getting-started). De cara a iniciar un proyecto de este estilo, se puede hacer de dos formas diferentes:

1. Crear un nuevo proyecto
1. Clonar un proyecto ya existente de un repositorio

### 1. Crear un nuevo proyecto

#### Resumen:

1. Crear proyecto de npm: `npm init`.
1. Instalar Jest: `npm i jest`.
1. Ejecutar la configuración inicial de Jest: `npx jest --init`.
1. Crear test de comprobación.
1. Comprobar con un test que el componente a testear está bien importado.
1. Crear tests por cada caso de uso.

### 2. Clonar un proyecto ya existente

#### Resumen

1. Clonar el proyecto utilizando git.
1. Comprobar si Jest está añadido en las dependencias del `package.json`, y, en caso de que no esté, ejecutar `npm i jest` en la carpeta del proyecto.
1. Instalar las dependencias utilizando `npm install` desde la terminal en la carpeta del proyecto.
1. Comprobar si Jest tiene asignado un script o comando de terminal en el apartado _"scripts"_ del `package.json`
