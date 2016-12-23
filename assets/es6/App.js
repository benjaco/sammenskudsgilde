/**
 * Created by Benjamin on 19-12-2016.
 */

import ElementHandler from "./ElementHandler"
import ViewHandler from "./ViewHandler"
import DataHandler from "./DataHandler";

class App {
    constructor() {
        this.data = new DataHandler(this);

        this.elements = new ElementHandler(this);
        this.viewhandler = new ViewHandler(this);


        this.viewhandler.home();
    }

}

let app = new App();