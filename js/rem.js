

window.onload = function(){
    var oFishMes = document.querySelectorAll('.fishMes');
    console.log(oFishMes.length);
    for(var i=0; i<oFishMes.length; i++){
        $clamp(oFishMes[i], {clamp: 2, useNativeClamp: false, animate: false});
    }

};