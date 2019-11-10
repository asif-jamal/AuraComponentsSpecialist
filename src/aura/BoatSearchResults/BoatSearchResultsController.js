({
    doInit: function(component, event, helper) {
    },
    doSearch : function(component, event, helper) {
        console.log("BoatSearchResultsController doSearch start: ");
        var params = event.getParam('arguments');
        console.log("BoatSearchResultsController params : " + JSON.stringify(params));
        // component.set("v.boatTypeId1", params.boatTypeId);
        // helper.onSearch(component,event);

        helper.onSearch(component, params.boatTypeId);
        
        return "search complete.";
    },
    onBoatSelect: function(component, event, helper) {
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
    },
})