({
    onSearch : function(component, boatTypeId ) {
        
        var action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId": boatTypeId
        });
        action.setCallback(this, function(Response) {
            var state = Response.getState();
            if (component.isValid() && state ==="SUCCESS") {
                console.log("getReturnValue: " + JSON.stringify(Response.getReturnValue()));
                component.set("v.boats", Response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);

    }
})