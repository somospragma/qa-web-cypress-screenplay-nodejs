<h1 align="center">
  <br>
  <a><img src="https://f.hubspotusercontent20.net/hubfs/2829524/Copia%20de%20LOGOTIPO_original-2.png" width="30%"></a>
</h1>

<h4 align="center">Proyecto base de <a href="" target="_blank">Pragma</a>.</h4>

# Arquetipo Cypress - Cucumber - Screenplay

Este arquetipo proporciona una base para proyectos de automatización de pruebas que integran Cypress con Cucumber. Está diseñado para facilitar la escritura de pruebas en un formato legible para humanos utilizando Gherkin, aprovechando la robustez de Cypress para la ejecución en navegadores.

Este arquetipo es ideal para equipos que buscan implementar pruebas automatizadas basadas en BDD (Behavior Driven Development), manteniendo la simplicidad y rapidez de Cypress junto con la legibilidad de Gherkin.

# Indice
  <p>• <a href="#instalación-y-ejecución">Instalación y ejecución</a></p>
  <p>• <a href="#descarga">Descarga</a></p>
  <p>• <a href="#consideraciones">Consideraciones</a></p>
  <p>• <a href="#tecnologias">Tecnologias</a></p>
  <p>• <a href="#autor">Autor</a></p>

## Instalación y ejecución
Para clonar y ejecutar está aplicación, necesitas [Git](https://git-scm.com),  [NodeJS](https://nodejs.org/en/download/) y [Cypress](https://www.cypress.io/) instalados en tu equipo. 
<br>Desde la linea de comando:</br>
```bash
# Clonar proyecto y configuración inicial
$ git clone 
$ cd qa-web-cypress-cucumber-screenplay-simple
$ npm i
```

## Descarga
Puedes descargar el proyecto en el enlace [download](https://github.com/somospragma/qa-backend-cypress-nodejs/archive/refs/heads/master.zip) 

## Consideraciones
- Copiar/Pegar en la carpeta raiz el archivo: .cypress-cucumber-preprocessorrc.json
- Configurar el archivo cypress.config.js
- Crear la carpeta features (nombre definido en config.js)
  -  Crear el escenario de prueba. Ejemplo: prueba.feature
- Crear la carpeta step_definitions (nombre definido en .cypress-cucumber-preprocessorrc.json)
  - Crear el archivo javascritp. Ejemplo: prueba_step.js

## Tecnologias
- [TypeScript](https://docs.cypress.io/guides/tooling/typescript-support)
- [Cypress](https://www.cypress.io/)
- [Esbuild](https://github.com/bahmutov/cypress-esbuild-preprocessor)
- [@bahmutov/cypress-esbuild-preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor/v/5.0.0-rc2)
  - <a>@cucumber/gherkin
  - Reflect Metadata</a>
- [Ext: Cucumber](https://marketplace.visualstudio.com/items?itemName=CucumberOpen.cucumber-official)
- [Reporters-Mochawesome](https://docs.cypress.io/guides/tooling/reporters)

## Autor
- Abraham D. Morales R.


