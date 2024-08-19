import { LightningElement, track } from 'lwc';
import getShipmentStatus from '@salesforce/apex/ShipmentStatusService.getShipmentStatus';

// Direct URLs for testing purposes
const WAITING_IMAGE_URL = 'https://vinaytejaorg-dev-ed--c.develop.vf.force.com/resource/1724078652000/Waiting';  // URL for waiting image
const HAPPY_IMAGE_URL = 'https://vinaytejaorg-dev-ed--c.develop.vf.force.com/resource/1724079555000/happy';    // URL for happy image
const SERIOUS_IMAGE_URL = 'https://vinaytejaorg-dev-ed--c.develop.vf.force.com/resource/1724079693000/serious'; // URL for serious image

export default class ShipmentStatus extends LightningElement {
    @track trackingNumber = '';
    @track shipmentStatus;
    @track errorMessage;
    @track statusImage = WAITING_IMAGE_URL; // Default image for initial state
    @track isWaiting = true; // Set initial state to waiting

    handleInputChange(event) {
        this.trackingNumber = event.target.value;

        // Check if tracking number is empty
        if (!this.trackingNumber) {
            this.shipmentStatus = null;
            this.errorMessage = null;
            this.statusImage = WAITING_IMAGE_URL; // Set image to waiting when input is cleared
            this.isWaiting = true; // Show waiting image
        }
    }

    handleGetStatus() {
        this.statusImage = WAITING_IMAGE_URL; // Set the waiting image when status request is initiated
        this.isWaiting = true; // Show waiting image
        this.shipmentStatus = null;
        this.errorMessage = null;

        if (!this.trackingNumber) {
            this.errorMessage = 'Must provide tracking number';
            this.statusImage = SERIOUS_IMAGE_URL; // Set image for error state
            this.isWaiting = false; // Stop showing waiting image
            return;
        }

        getShipmentStatus({ trackingNumber: this.trackingNumber })
            .then(result => {
                this.shipmentStatus = result; // Handle successful response
                this.statusImage = HAPPY_IMAGE_URL; // Set image for success state
                this.isWaiting = false; // Stop showing waiting image
            })
            .catch(error => {
                this.errorMessage = `Error retrieving status: ${error.body.message}`; // Handle error response
                this.statusImage = SERIOUS_IMAGE_URL; // Set image for error state
                this.isWaiting = false; // Stop showing waiting image
            });
    }
}
