import { Task } from "cypress/support/tasks/task";
import { loginPageUi } from "../user_Interfaces/loginPageUi";
import { GenerateRandomData } from "../abilities/generateRandomData";
import Actor from "cypress/support/actors/actor";
import TypeElement from "../Interactions/typeElement";
import ClickElement from "../Interactions/clickElement";
import { registerPageUi } from "../user_Interfaces/registerPageUi";
import SelectElement from "../Interactions/selectElement";

export class RegisterUser implements Task {
    execute(actor: Actor): void {
        const username = actor.usesAbility(GenerateRandomData);
        const typeNameTask = new TypeElement(loginPageUi.TEXTBOX_NAME, username.generateUsername());
        const typeEmailTask =  new TypeElement(loginPageUi.TEXTBOX_EMAIL_ADDRESS_SIGNUP,username.generateEmail());
        const clickBtnSign = new ClickElement(loginPageUi.BTN_SIGNUP);
        const clickRadio = new ClickElement(registerPageUi.RADIOBTN_MR);
        const typePass = new TypeElement(registerPageUi.TEXTBOX_PASSW,'123456Aa*');
        const selectDay = new SelectElement(registerPageUi.LISTBOX_DAY, '1');
        const selectMonth = new SelectElement(registerPageUi.LISTBOX_MONTH, '5');
        const selectYear= new SelectElement(registerPageUi.LISTBOX_YEAR, '1987');
        const typeFirtName= new TypeElement(registerPageUi.TEXTBOX_FIRSTNAME,'Prueba');
        const typeLastName= new TypeElement(registerPageUi.TEXTBOX_LASTNAME,'QaPragma');
        const TypeCompany= new TypeElement(registerPageUi.TEXTBOX_COMPANY,'EmpresaPrueba');
        const TypeAddres= new TypeElement(registerPageUi.TEXTBOX_ADDRESS,'Direccion Prueba');
        const selectCountry= new SelectElement(registerPageUi.LISTBOX_COUNTRY, 'Canada');
        const typeState= new TypeElement(registerPageUi.TEXTBOX_STATE,'EstadoPrueba');
        const typeCity= new TypeElement(registerPageUi.TEXTBOX_CITY,'CiudadPrueba');
        const typeZip= new TypeElement(registerPageUi.TEXTBOX_ZIPCODE,'zip12345');
        const typeMobile= new TypeElement(registerPageUi.TEXTBOX_MOBILENUMBER, username.generatePhoneNumber());
        const clickBtnCreate= new ClickElement(registerPageUi.BTN_CREATEACCOUNT);
        actor.attemptsTo(
            typeNameTask,typeEmailTask,clickBtnSign,clickRadio,typePass,selectDay,selectMonth,selectYear,typeFirtName,typeLastName,TypeCompany,TypeAddres,selectCountry,typeState,typeCity,typeZip,typeMobile,clickBtnCreate
        )
    }
}