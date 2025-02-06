import { Task } from "cypress/support/tasks/task";
import { loginPageStringUi } from "../user_Interfaces/loginPageUi";
import { GenerateRandomData } from "../abilities/generateRandomData";
import Actor from "cypress/support/actors/actor";
import TypeElement from "./typeElement";
import ClickElement from "./clickElement";
import { registerPageStringUi } from "../user_Interfaces/registerPageUi";
import SelectElement from "./selectElement";

export class RegisterUser implements Task {

    execute(actor: Actor): void {
        const username = actor.usesAbility(GenerateRandomData);
        const typeNameTask = new TypeElement(loginPageStringUi.TEXTBOX_NAME, username.generateUsername());
        const typeEmailTask =  new TypeElement(loginPageStringUi.TEXTBOX_EMAIL_ADDRESS_SIGNUP,username.generateEmail());
        const clickBtnSign = new ClickElement(loginPageStringUi.BTN_SIGNUP);
        const clickRadio = new ClickElement(registerPageStringUi.RADIOBTN_MR);
        const typePass = new TypeElement(registerPageStringUi.TEXTBOX_PASSW,'123456Aa*');
        const selectDay = new SelectElement(registerPageStringUi.LISTBOX_DAY, '1');
        const selectMonth = new SelectElement(registerPageStringUi.LISTBOX_MONTH, '5');
        const selectYear= new SelectElement(registerPageStringUi.LISTBOX_YEAR, '1987');
        const typeFirtName= new TypeElement(registerPageStringUi.TEXTBOX_FIRSTNAME,'Prueba');
        const typeLastName= new TypeElement(registerPageStringUi.TEXTBOX_LASTNAME,'QaPragma');
        const TypeCompany= new TypeElement(registerPageStringUi.TEXTBOX_COMPANY,'EmpresaPrueba');
        const TypeAddres= new TypeElement(registerPageStringUi.TEXTBOX_ADDRESS,'Direccion Prueba');
        const selectCountry= new SelectElement(registerPageStringUi.LISTBOX_COUNTRY, 'Canada');
        const typeState= new TypeElement(registerPageStringUi.TEXTBOX_STATE,'EstadoPrueba');
        const typeCity= new TypeElement(registerPageStringUi.TEXTBOX_CITY,'CiudadPrueba');
        const typeZip= new TypeElement(registerPageStringUi.TEXTBOX_ZIPCODE,'zip12345');
        const typeMobile= new TypeElement(registerPageStringUi.TEXTBOX_MOBILENUMBER, username.generatePhoneNumber());
        const clickBtnCreate= new ClickElement(registerPageStringUi.BTN_CREATEACCOUNT);
        actor.attemptsTo(
            typeNameTask,typeEmailTask,clickBtnSign,clickRadio,typePass,selectDay,selectMonth,selectYear,typeFirtName,typeLastName,TypeCompany,TypeAddres,selectCountry,typeState,typeCity,typeZip,typeMobile,clickBtnCreate
        )
    }
    
}