/**
 * Created by Benjamin on 20-12-2016.
 */

export default class Participant {

    constructor(title, contribution, participant) {
        this.title = title;
        this.contribution = contribution;
        this.participant = participant;

    }

    isEmpty() {
        return this.title == "" &&
            this.contribution == "" &&
            this.participant == "";
    }

}