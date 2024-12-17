import { faker } from '@faker-js/faker';
import { Ability } from './Ability';

// Habilidad para generar datos aleatorios
export class GenerateRandomData implements Ability {
    performAs(actor: any): void {
        throw new Error('Method not implemented.');
    }
    generateEmail(): string {
        return faker.internet.email();
    }

    generateUsername(): string {
        return faker.internet.username();
    }

    generatePhoneNumber(): string {
        return faker.phone.number();
    }
}
