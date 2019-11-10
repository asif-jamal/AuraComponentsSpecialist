({
    onFormSubmit : function(component, event, helper) {
        console.log("onFormSubmit handled");
        var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        console.log("boatTypeId: " + boatTypeId);

        var BSRcmp =component.find("BSRcmp");
        var auraMethodResult = BSRcmp.search(boatTypeId);
        console.log("auraMethodResult: " + auraMethodResult);

        // call apex thruough action
        // var action = component.get("c.getBoats");
        // action.setParams({
        //     "boatTypeId":boatTypeId
        // });
        // action.setCallback(this, function(Response) {
        //     var state = Response.getState();
        //     if (component.isValid() && state ==="SUCCESS") {
        //         console.log("getReturnValue: " + JSON.stringify(Response.getReturnValue()));
        //         // component.set("v.btypes", Response.getReturnValue());
        //     }
        //     else {
        //         console.log("Failed with state: " + state);
        //     }
        // });

        // // Send action off to be executed
        // $A.enqueueAction(action);



    },
})