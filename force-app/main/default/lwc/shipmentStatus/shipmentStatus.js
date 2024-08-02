import { LightningElement, track } from 'lwc';
import getShipmentStatus from '@salesforce/apex/ShipmentStatusService.getShipmentStatus';

export default class ShipmentStatus extends LightningElement {
    @track trackingNumber = '';
    @track shipmentStatus;
    @track errorMessage;

    handleInputChange(event) {
        this.trackingNumber = event.target.value;
    }

    handleGetStatus() {
        this.shipmentStatus = null;
        this.errorMessage = null;

        if (!this.trackingNumber) {
            this.errorMessage = 'Must provide tracking number';
            return;
        }

        getShipmentStatus({ trackingNumber: this.trackingNumber })
            .then(result => {
                this.shipmentStatus = result; // Handle successful response
            })
            .catch(error => {
                this.errorMessage = `Error retrieving status: ${error.body.message}`; // Handle error response
            });
    }
}
