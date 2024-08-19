public with sharing class ShipmentStatusService {
    @AuraEnabled(cacheable=true)
    public static String getShipmentStatus(String trackingNumber) {
        // Create the HTTP request
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://merzcommunities--mel.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber=' + trackingNumber);
        req.setMethod('GET');

        // Send the request
        Http http = new Http();
        HttpResponse res = http.send(req);

        // Return the response body
        return res.getBody();
    }
}