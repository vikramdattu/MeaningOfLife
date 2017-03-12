window.onload = function() {
    // TODO:: Do your initialization job
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    document.getElementById("content-text1").addEventListener('touchstart', function() {
    	document.getElementById("sub1").style.display = "none";
    	document.getElementById("sub2").style.display = "table-cell";
    });
    
    document.getElementById("content-text2").addEventListener('touchstart', function() {
    	document.getElementById("sub2").style.display = "none";
    	document.getElementById("sub1").style.display = "table-cell";
    });
};