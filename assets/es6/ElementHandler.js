/**
 * Created by Benjamin on 19-12-2016.
 */

export default class ElementHandler {
    constructor(app) {
        this.app = app;

        this.back = document.querySelector(".back");

        this.view = document.querySelector(".view-container");




    }
    useBackButton(){
        this.back.style.display = "block";
        return new Promise((resolve, reject) => {

            this.back.addEventListener('click', () => resolve())
        })
    }
}