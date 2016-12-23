/**
 * Created by Benjamin on 19-12-2016.
 */

import HomeView from "./View/Home";
import EditPaymentDistribution from "./View/EditPaymentDistribution";

export default class ViewHandler {

    constructor(app) {
        this.app = app;

        this.currentView = {
            remove(){}
        };

    }

    setView(markup){
        this.app.elements.view.innerHTML = markup;
    }

    removeOldView(){
        this.app.elements.back.style.display = "none";
        this.currentView.remove();
    }

    editPaymentDistribution() {
        this.removeOldView();
        this.currentView = new EditPaymentDistribution(this.app);
    }

    home() {
        this.removeOldView();
        this.currentView = new HomeView(this.app);
    }

}