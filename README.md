# Shipment Status LWC

## Overview

The **Shipment Status LWC** is a Lightning Web Component designed for Merz Aesthetics Customer Service representatives. This component allows users to quickly check the status of customer shipments based on their tracking numbers. It communicates with a mock shipping status service and provides real-time feedback on shipment status.

## Features

- **User-Friendly Input**: An input field for entering tracking numbers.
- **Status Retrieval**: A button to fetch the shipment status based on the entered tracking number.
- **Error Handling**: Displays informative error messages if the tracking number is not provided or if there are issues with the request.
- **Responsive Design**: Optimized for use in Salesforce Lightning Experience, providing a seamless user experience.

## Technology Stack

- **Salesforce Lightning Web Components (LWC)**: Utilizes the latest Salesforce technology for building modern UI components.
- **Apex**: Backend service is implemented using Apex to handle the logic for fetching shipment statuses.

## Setup Instructions

### Prerequisites

- Salesforce Developer Org
- Visual Studio Code
- Salesforce CLI installed

### Cloning the Repository

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/ShipmentStatusLWC.git
   cd ShipmentStatusLWC
