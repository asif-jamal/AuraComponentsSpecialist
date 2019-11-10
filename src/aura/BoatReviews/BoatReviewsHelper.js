({
    onInit : function(component, event,helper) {
console.log("BoatReviewsHelper : onInit : start");
        var boat=component.get("v.boat");
        var action = component.get("c.getAll");
        action.setParams({
            "boatId":boat.Id
        });
        action.setCallback(this, function(response) {
console.log("BoatReviewsHelper : setCallback : start");
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.boatReviews", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
})