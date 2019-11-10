({
    doInit: function(component, event, helper) {
        helper.onInit(component, event,helper);
    },
    onRecordUpdated  : function(component, event, helper) {
        
    },
    onSave: function(component, event, helper) {
        component.find("service").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log("Save completed successfully.");
                var resultsToast = $A.get("e.force:showToast");
                if(resultsToast) {
                    resultsToast.setParams({
                        type : "success",
                        "title": "Saved",
                        "message": "Boat Review Created"

                    });
                    resultsToast.fire();

                } else {
                    alert('Boat Review Created');
                }
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR"){
                console.log('Problem saving record, error: ' +
                    JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }

            // a new event is fired back to the BoatDetails parent component
            var boatReviewAddedEvent =component.getEvent("boatReviewAdded");
            boatReviewAddedEvent.fire();

            // invokes helper.onInit() to reset the component to enable the user to add another review
            helper.onInit(component,event,helper);
            
        }));


    },
})