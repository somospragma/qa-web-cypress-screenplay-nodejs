import { Task } from "cypress/support/tasks/task";
import Actor from "cypress/support/actors/actor";
import { headerStringUi } from "../user_Interfaces/headerUi";
import { cartPageStringUi } from "../user_Interfaces/cartPageUi";
import { checkoutPageStringUi } from "../user_Interfaces/checkoutPageUi";
import Click from "../interactions/clickElement";

export class ClicElement implements Task {

    constructor(private readonly buttonName: string) { }

    execute(actor: Actor): void {
        const buttonMap: Record<string, string> = {
            'Signup / Login': headerStringUi.SINGUP_LOGIN,
            'Cart': headerStringUi.CART,
            'Delete Account': headerStringUi.DELETE_ACCOUNT,
            'Proceed To Checkout': cartPageStringUi.BTN_PROCEED_TO_CHEKOUT,
            'Register / Login': cartPageStringUi.LINK_REGISTER_LOGIN,
            'Pay and Confirm Order': checkoutPageStringUi.BTN_PAY_AND_CONFIRM_ORDER
        };

        const selector = buttonMap[this.buttonName];
        actor.perform(Click.Element(selector));
    }

    static button(buttonName: string): ClicElement {
        return new ClicElement(buttonName);
    }
}
