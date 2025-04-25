<h1 align="center">
  <br>
  <a><div style="background-color: white; border-radius: 15px; padding: 10px; display: inline-block; width: 40%"><img src="https://f.hubspotusercontent20.net/hubfs/2829524/Copia%20de%20LOGOTIPO_original-2.png" width="90%">
  </div>
  </a>
  <br>
  Arquetipo Cypress - Cucumber - Screenplay
  <br>
</h1>


<h4 align="center">Proyecto base de <a href="" target="_blank">Pragma</a>.</h4>

<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.0-blue.svg" alt="TypeScript 5.0">
  </a>
  <a href="https://www.cypress.io/">
    <img src="https://img.shields.io/badge/Cypress-12.0-green.svg" alt="Cypress 12.0">
  </a>
  <a href="https://esbuild.github.io/">
    <img src="https://img.shields.io/badge/Esbuild-0.18-orange.svg" alt="Esbuild 0.18">
  </a>
  <a href="https://github.com/bahmutov/cypress-esbuild-preprocessor">
    <img src="https://img.shields.io/badge/@bahmutov/cypress--esbuild--preprocessor-2.0-yellow.svg" alt="@bahmutov/cypress-esbuild-preprocessor 2.0">
  </a>
  <a href="https://github.com/cucumber/gherkin">
    <img src="https://img.shields.io/badge/@cucumber/gherkin-26.0-lightgrey.svg" alt="@cucumber/gherkin 26.0">
  </a>
  <a href="https://github.com/rbuckton/reflect-metadata">
    <img src="https://img.shields.io/badge/Reflect_Metadata-0.1-purple.svg" alt="Reflect Metadata 0.1">
  </a>
  <a href="https://github.com/cucumber/cucumber-js">
    <img src="https://img.shields.io/badge/Ext_Cucumber-10.0-brightgreen.svg" alt="Ext: Cucumber 10.0">
  </a>
  <a href="https://github.com/adamgruber/mochawesome">
    <img src="https://img.shields.io/badge/Reporters_Mochawesome-7.0-red.svg" alt="Reporters-Mochawesome 7.0">
  </a>
  <a href="https://fakerjs.dev/">
    <img src="https://img.shields.io/badge/Faker-8.0-blueviolet.svg" alt="Faker 8.0">
  </a>
</p>

## Indice
  • [Descripción](#descripcion)
  
  • [Estructura del proyecto](#estructura-del-proyecto)

  • [Instalación y ejecución](#instalación-y-ejecución)

  • [Tecnologias](#tecnologias)
  
  • [Autor](#autor)

  • [Licencia](#licencia)

## Descripción
Este proyecto es un arquetipo de automatización de pruebas que combina la potencia de Cypress, la claridad de Cucumber y la estructura limpia y mantenible de Screenplay. Está diseñado para facilitar la creación, ejecución y mantenimiento de pruebas automatizadas de alta calidad en aplicaciones web para desktop o responsive.

## Estructura del proyecto
<pre>
PROYECTOBASECYPRESS/
 ├── cypress/
 |  ├── e2e/                           
 |  │   ├── abilities/        # Habilidades del actor (por ejemplo, UseCypress)
 |  |   ├── features/         # Archivos de características (features) de Cucumber
 |  │   ├── interactions/     # Interacciones específicas (por ejemplo, Click, Enter)
 |  │   ├── questions/        # Preguntas que el actor puede realizar
 |  │   ├── step_definitions/ # Definiciones de pasos de Cucumber
 |  │   ├── tasks/            # Tareas que el actor puede realizar
 |  │   └── user_Interfaces/   # Localizadores de la interfaz de usuario
 |  │   └── user_Interfaces/  # Localizadores de la interfaz de usuario
 |  │
 |  └── support/
 |      ├── actors/ # Implementación flexible y modular para asignar habilidades y metodos al actor
 |      └── tasks/  # Interfaces de Interaction (ability, interaction, question, task)
 |
 └── reports/       # Ubicación del reporte

</pre>

## Instalación y ejecución
Sigue estos pasos para clonar, configurar y ejecutar el proyecto en tu equipo local.

### Requisitos previos
- Asegúrate de tener instaladas las siguientes herramientas:

  [Git](https://git-scm.com): Para clonar el repositorio.

  [Node.js®](https://nodejs.org/en/download/): Para gestionar las dependencias y ejecutar el proyecto.

  [Cypress](https://www.cypress.io/): Para ejecutar las pruebas automatizadas.

### Pasos para la instalación
1. Clonar el repositorio:

   Abre tu terminal o línea de comandos y ejecuta el siguiente comando para clonar el proyecto:

```bash
git clone https://github.com/somospragma/qa-web-cypress-screenplay-automatizacion-nodejs.git
```

2. Navegar al directorio del proyecto:

   Accede al directorio del proyecto clonado:
```bash
cd qa-web-cypress-screenplay-automatizacion-nodejs
```

3. Instalar dependencias:

   En dicha carpeta, abre el terminal o línea de comandos y ejecuta el instalador de dependencias utilizando npm:
```bash
npm install cypress --save-dev
```

4. Descargar el proyecto (opcional):

   Si prefieres no usar Git, puedes descargar el proyecto directamente desde el enlace de descarga:
[Descargar proyecto](https://github.com/somospragma/qa-web-cypress-screenplay-automatizacion-nodejs/archive/refs/heads/main.zip) 

### Ejecución del proyecto
Una vez completada la instalación, puedes ejecutar las pruebas de la siguiente manera:

- Ejecutar pruebas en modo interactivo:

Abre Cypress en modo interactivo para ver y ejecutar las pruebas en el navegador:

```bash
npx cypress open
```
- Ejecutar pruebas en modo headless:

Si prefieres ejecutar las pruebas en segundo plano (sin interfaz gráfica), usa el siguiente comando:

```bash
npx cypress run
```

## Tecnologias
- [TypeScript](https://docs.cypress.io/guides/tooling/typescript-support)
- [Cypress](https://www.cypress.io/)
- [Esbuild](https://github.com/bahmutov/cypress-esbuild-preprocessor)
- [@bahmutov/cypress-esbuild-preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor/v/5.0.0-rc2)
  - <a>@cucumber/gherkin
  - Reflect Metadata</a>
- [Ext: Cucumber](https://marketplace.visualstudio.com/items?itemName=CucumberOpen.cucumber-official)
- [Reporters-Mochawesome](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [Faker](https://www.npmjs.com/package/@faker-js/faker)

## Autor

- [Ing. Abraham D. Morales R.](https://github.com/danielro816)

## Licencia

Open source project.
