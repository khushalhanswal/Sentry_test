var func = (function(exports){
    function init(){
        console.log("Inisde Init");
    }
    exports.init = init;
    
    return exports;
})({});
