({
    onInit : function(component, event,helper) {
        component.find("service").getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function() {
                var rec = component.get("v.boatReview");
                var error = component.get("v.private");
                var boat = component.get("v.boat");
console.log("boat.Id : " + boat.Id);
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                } else {
console.log("else >>> boat.Id : " + boat.Id);
                    component.set("v.boatReview.Boat__c",boat.Id);

                }
                console.log("Record template initialized: " + rec.apiName);
            }
        )
        );

    },
})