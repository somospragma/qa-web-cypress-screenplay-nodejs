import { Task } from "cypress/support/tasks/task";
import Actor from "cypress/support/actors/actor";
import { headerStringUi } from "../user_Interfaces/headerUi";
import ClickElement from "../interactions/clickElement";
import { cartPageStringUi } from "../user_Interfaces/cartPageUi";
import { checkoutPageStringUi } from "../user_Interfaces/checkoutPageUi";

export class ClicElementButton implements Task {

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

        if (!selector) {
            throw new Error(`Button "${this.buttonName}" is not defined in buttonMap.`);
        }

        actor.perform(new ClickElement(selector));
    }
}
