
if (typeof gdjs.evtsExt__ArrayTools__ObjectShiftString !== "undefined") {
  gdjs.evtsExt__ArrayTools__ObjectShiftString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__ObjectShiftString = {};
gdjs.evtsExt__ArrayTools__ObjectShiftString.GDObjectObjects1= [];


gdjs.evtsExt__ArrayTools__ObjectShiftString.userFunc0xa36360 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Variable} */
const array = eventsFunctionContext.getArgument("Array");

// Cast to array to ensure getAllChildrenArray returns the real array
array.castTo("array");

eventsFunctionContext.returnValue = array.getAllChildrenArray().shift().getAsString();

};
gdjs.evtsExt__ArrayTools__ObjectShiftString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__ObjectShiftString.userFunc0xa36360(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__ObjectShiftString.func = function(runtimeScene, Object, Array, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ArrayTools"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ArrayTools"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Array") return Array;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ArrayTools__ObjectShiftString.GDObjectObjects1.length = 0;

gdjs.evtsExt__ArrayTools__ObjectShiftString.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ArrayTools__ObjectShiftString.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ArrayTools__ObjectShiftString.registeredGdjsCallbacks = [];