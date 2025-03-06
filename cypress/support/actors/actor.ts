import { Ability } from "../tasks/ability";


export default class Actor {
  private readonly name: string;
  private readonly abilities: Map<string, any> = new Map();

  constructor(name: string) {
    this.name = name;
  }

  can(ability: Ability): void {
    const abilityName = ability.constructor.name;
    this.abilities.set(abilityName, ability);
  }

  usesAbility<T>(abilityClass: new(...args: any[]) => T): T {
    const abilityName = abilityClass.name;
    const ability = this.abilities.get(abilityName);
    if (!ability) {
      throw new Error(`El actor no tiene la habilidad: ${abilityName}`);
    }
    return ability;
  }

  perform(task: any): void {
    return task.execute(this);
  }

  attemptsTo(...tasks: any[]): void {
    tasks.forEach(task => task.execute(this)); 
  }

  asksFor(question: any): any {
    return question.answeredBy(this);
  }
}

/*
1. remember() y recall()
Estos métodos permiten que el actor "recuerde" información durante el flujo de pruebas, 
algo similar a lo que en otros patrones se conoce como almacenar y recuperar valores. 
Es útil cuando necesitas que el actor conserve algún estado entre diferentes tareas.

class Actor {
  private name: string;
  private memory: { [key: string]: any } = {};

  constructor(name: string) {
    this.name = name;
  }

  perform(task: Task): void {
    task.execute(this);
  }

  // Método para que el actor recuerde algo (guardar en la memoria)
  remember(key: string, value: any): void {
    this.memory[key] = value;
  }

  // Método para que el actor recupere algo de su memoria
  recall(key: string): any {
    return this.memory[key];
  }
}

Ejemplo de uso:

// El actor recuerda el nombre del usuario
actor.remember('username', 'Daniel Morales');

// Más adelante, puedes recuperar ese valor
const username = actor.recall('username');

2. attemptsTo()
Este método permite que el actor realice múltiples tareas a la vez de manera más fluida. 
Esencialmente, puedes pasarle una lista de tareas y el actor las ejecutará todas en secuencia. 
Esto mejora la legibilidad cuando se quieren realizar varias acciones encadenadas.

class Actor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  perform(task: Task): void {
    task.execute(this);
  }

  // Método para que el actor realice múltiples tareas
  attemptsTo(...tasks: Task[]): void {
    tasks.forEach(task => {
      task.execute(this);
    });
  }
}

Ejemplo de uso:
actor.attemptsTo(
  new VisitPage('https://example.com'),
  new ClickElement(inicio.CARD_ELEMENTS),
  new FillForm('Daniel Morales')
);

3. asksFor()
Este método permite que el actor haga preguntas o consulte información. 
El patrón Screenplay incluye este tipo de método para cuando el actor 
necesita recuperar o verificar información, como el texto de un elemento o un valor de una API.

class Actor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  perform(task: Task): void {
    task.execute(this);
  }

  // Método para que el actor realice una consulta (haga una pregunta)
  asksFor(question: Question): any {
    return question.answeredBy(this);
  }
}

La interfaz Question podría verse así:

interface Question {
  answeredBy(actor: Actor): any;
}

Ejemplo de uso:
// Una pregunta que retorna el texto de un elemento
class TextOfElement implements Question {
  private selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  answeredBy(actor: Actor): string {
    return cy.get(this.selector).invoke('text');
  }
}

const elementText = actor.asksFor(new TextOfElement('.element-selector'));

4. reports()
Este método permite que el actor registre un informe o algún dato interesante durante su ejecución. 
Es útil para depuración o generar reportes de resultados específicos que puedan usarse posteriormente.

class Actor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  perform(task: Task): void {
    task.execute(this);
  }

  // Método para generar un reporte o log
  reports(message: string): void {
    cy.log(`${this.name} reports: ${message}`);
  }
}

Ejemplo de uso:
actor.reports('He visited the page and filled out the form.');
Resumen de Métodos que Podrías Agregar:

remember(key: string, value: any) y recall(key: string): Para recordar y recuperar información.

attemptsTo(...tasks: Task[]): Para que el actor realice múltiples tareas en secuencia.

asksFor(question: Question): Para que el actor consulte o verifique información.

reports(message: string): Para que el actor genere un reporte o log de una acción.

Estos métodos mejoran la flexibilidad y expresividad del patrón Screenplay y permiten que el actor 
interactúe con su entorno de forma más rica. Si te gustaría explorar alguna idea más o integrar alguno 
de estos ejemplos, no dudes en pedirlo. ¡Estoy aquí para ayudarte!
*/
