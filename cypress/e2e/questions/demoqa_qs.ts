import { elements } from "../user_Interfaces/demoqaUi";


class Demoqa {

    seValidaElements() {
        elements.LABEL_ELEMENT().invoke('text').then((text)=>{
            expect(text).to.be.equals('Elements');
        });
    }

}

export default new Demoqa();
