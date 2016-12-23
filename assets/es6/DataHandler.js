/**
 * Created by Benjamin on 20-12-2016.
 */
import PaymentDistribution from "./DataObjects/PaymentDistribution";
export default class DataHandler {
    constructor() {
        this.paymentDistribution = [];

        this.guests = [];


        try {
            let storedData = localStorage.getItem("paymentDistribution");
            let storedObject = JSON.parse(storedData);
            if (storedObject == null) {
                throw new Exception();
            }

            for (let paymentDistribution of storedObject) {
                this.paymentDistribution.push(new PaymentDistribution(
                    paymentDistribution.name, paymentDistribution.value, paymentDistribution.editable, paymentDistribution.id
                ));
            }
        } catch (e) {
            this.standardPaymentDistributions();
        }

        try {
            let storedData = localStorage.getItem("guests");
            let storedObject = JSON.parse(storedData);
            if (storedObject == null) {
                throw new Exception();
            }
            this.guests = storedObject;
        } catch (e) {
        }

    }

    standardPaymentDistributions() {
        this.paymentDistribution = [
            new PaymentDistribution("Voksen", 100, false, 0),
            new PaymentDistribution("Barn", 50, true, 1)
        ]
    }

    savePaymentDistributionLines() {
        try {
            localStorage.setItem("paymentDistribution", JSON.stringify(this.paymentDistribution))
        } catch (e) {
        }

    }

    saveGuests() {
        try {
            localStorage.setItem("guests", JSON.stringify(this.guests))
        } catch (e) {
        }
    }

    updateRemovedPaymentDistributionOptions() {
        let validPaymentDistributionId = id => {
            for (let dist of this.paymentDistribution) {
                if (dist.id == id) {
                    return true;
                }
            }
            return false;
        };
        let hasAdultParticipantGroup = groups => {
            for (let group of groups) {
                if (group.id == 0) {
                    return true;
                }
            }
            return false;
        };

        for (let guest of this.guests) {
            let addToAdult = 0, removeIds = [];

            for (let participantOption of guest.participants) {
                if (!validPaymentDistributionId(participantOption.id)) {
                    addToAdult += participantOption.count;
                    removeIds.push(participantOption.id)
                }
            }
            if (addToAdult != 0) {

                if (hasAdultParticipantGroup(guest.participants)) {
                    guest.participants[0].count += addToAdult;
                } else {
                    guest.participants.unshift({
                        id: 0,
                        count: addToAdult
                    });
                }
            }

            for (let i = guest.participants.length - 1; i >= 0; i--) {
                if (removeIds.indexOf(guest.participants[i].id) != -1) {
                    guest.participants.splice(i, 1);
                }
            }

        }
        this.saveGuests();
    }

    static generatePaymentDistributionId() {
        return new Date().getTime();
    }
}