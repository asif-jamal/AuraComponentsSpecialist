({
    doInit : function(component, event, helper) {

        var isEnabled = $A.get("e.force:createRecord");
        //check if isEnabled is true
        if (isEnabled) {
            component.set("v.showNewBtn",true);
        }

        var action = component.get("c.getboattypes");
        action.setCallback(this, function(Response) {
            var state = Response.getState();
            if (component.isValid() && state ==="SUCCESS") {
                // console.log("getboattypes: " + JSON.stringify(Response.getReturnValue()));
                component.set("v.btypes", Response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);
    },

    // When select boatType
    handleChange : function(component, event, helper) {
        var selectedboatType = component.find("boatTypes").get("v.value");
        console.log("boatTypeId: " + selectedboatType);
        component.set("v.selectedType",selectedboatType);
    },

    // When click search
    onFormSubmit : function(component, event, helper) {
        var boatTypeId = component.get("v.selectedType");
        console.log("selected type : " + boatTypeId);
        var formSubmit = component.getEvent("formsubmit");
        formSubmit.setParams({"formData":
                            {"boatTypeId" : boatTypeId}
        });
        formSubmit.fire();
    },

    // When click New
    onFormNew : function(component, event, helper) {

        console.log("onFormNew started ");
        var createRecordEvent = $A.get("e.force:createRecord");
        if (createRecordEvent) {
            var boatTypeId = component.get("v.selectedType");
            createRecordEvent.setParams({
                'entityApiName': 'Boat__c',
                'defaultFieldValues': {
                    'BoatType__c': boatTypeId
                }
            });
            createRecordEvent.fire();

        }

    },


})