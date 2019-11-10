({
    onBoatSelected  : function(component, event, helper) {
        var boatSelected=event.getParam("boat");
console.log("BoatDetailsController.js : onBoatSelected : event.getParam : " + boatSelected );
        component.set("v.id",boatSelected.Id);
        component.find("service").reloadRecord() ;
    },
    onRecordUpdated  : function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            // get the fields that are changed for this record
            var changedFields = eventParams.changedFields;
            console.log('Fields that are changed: ' + JSON.stringify(changedFields));
            // record is changed so refresh the component (or other component logic)
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Saved",
                "message": "The record was updated."
            });
            resultsToast.fire();

        } else if(eventParams.changeType === "LOADED") {
            console.log("Record is loaded successfully.");
        } else if(eventParams.changeType === "REMOVED") {
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Deleted",
                "message": "The record was deleted."
            });
            resultsToast.fire();
        } else if(eventParams.changeType === "ERROR") {
            console.log('Error: ' + component.get("v.error"));
        }
    },
    onBoatReviewAdded : function(component, event, helper) {
console.log("Event received");
        component.find("details").set("v.selectedTabId","boatreviewtab");
        var BRcmp = component.find("BRcmp");
console.log("BRcmp : " + BRcmp);
        var auraMethodResult = BRcmp.refresh();
    },
})