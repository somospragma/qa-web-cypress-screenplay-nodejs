import demoqa_ui from "../userInterfaces/demoqa_ui";

class Demoqa {

    seValidaElements() {
        demoqa_ui.elements.LABEL_ELEMENT().invoke('text').then((text)=>{
            expect(text).to.be.equals('Elements');
        });
    }

}

export default new Demoqa();
