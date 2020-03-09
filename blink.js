var myIntervals = [];
var myBlinks = [];

function makeBlink(el, interval=500) {
	var anInterval = setInterval(() => {
		if (el.style.visibility === 'hidden') {
			el.style.visibility = 'visible';
		} else {
			el.style.visibility = 'hidden';
		}
	}, interval);

    myIntervals.push(anInterval);
    myBlinks.push(el);
}


function allTheBlinks(interval = 500) {
    var everything = document.querySelector('html');
	everything.style.visibility = 'hidden';
    
	var everythingInterval = setInterval(() => {
        if (everything.style.visibility === 'hidden') {
            everything.style.visibility = 'visible';
		} else {
            everything.style.visibility = 'hidden';
		}
    }, interval);
    myIntervals.push(everythingInterval);
    myBlinks.push(everything);
}

// Obsolete

function stopBlink() {
    myIntervals.forEach(interval => {
        clearInterval(interval);
    });
    myBlinks.forEach(blink => {
        blink.style.visibility = 'visible';
    });
}

module.exports = {
    makeBlink: makeBlink,
    allTheBlinks: allTheBlinks,
    stopBlink: stopBlink,
}