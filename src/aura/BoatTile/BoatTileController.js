({
    onBoatClick : function(component, event, helper) {
console.log("BoatTileController.js : onBoatClick : start");

        var myEvent = component.getEvent("BoatSelect");
        var boat = component.get("v.boat");

console.log("BoatTileController.js : boat.Id : " + boat.Id);

        myEvent.setParams({"boatId": boat.Id});
        myEvent.fire();

        var appEvent = $A.get("e.c:BoatSelected");
        appEvent.setParams({
            "boat": boat
        });
        appEvent.fire();

        var plotEvent = $A.get("e.c:PlotMapMarker");
        plotEvent.setParams({
            "lat": boat.Geolocation__Latitude__s,
            "sObjectId": boat.Id,
            "long": boat.Geolocation__Longitude__s,
            "label":boat.Name
        });
        plotEvent.fire();

    },
})