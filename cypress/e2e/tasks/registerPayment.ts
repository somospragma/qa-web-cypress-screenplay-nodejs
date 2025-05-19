import { Task } from "cypress/support/tasks/task";
import Actor from "cypress/support/actors/actor";
import TypeElement from "../interactions/typeElement";
import { checkoutPageStringUi } from "../user_Interfaces/checkoutPageUi";

export class RegisterPayment implements Task {

    execute(actor: Actor): void {
        const nameCard = new TypeElement(checkoutPageStringUi.TEXTBOX_NAMECARD,'NombrePrueba');
        const cardNumber = new TypeElement(checkoutPageStringUi.TEXTBOX_CARDNUMBER,'5245655855');
        const cardCvc = new TypeElement(checkoutPageStringUi.TEXTBOX_CARDCVC,'123');
        const cardExp = new TypeElement(checkoutPageStringUi.TEXTBOX_CARDEXP,'02');
        const cardYear = new TypeElement(checkoutPageStringUi.TEXTBOX_CARDYEAR,'2020');
        actor.attemptsTo(
            nameCard,cardNumber,cardCvc,cardExp,cardYear
        )
    }
}
