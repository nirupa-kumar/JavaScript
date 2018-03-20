var pageHit = {
    MAX_EVENTS : 300,    //5 mins = 300 seconds
    countArray : [],       //Circular buffer of event counts
    currIndex : 0,  //index of the earliest event currently in buffer
    initTime : 0,
    initialize : function () {
        for (var i = 0; i < this.MAX_EVENTS; i++) {
            this.countArray[i] = 0;
        }
        this.initTime = 0;
    },

    /*******************************************************
    * Function to add an event to the event buffer
    * @param event
    *******************************************************/
        addEvent : function () {

        var currTime;
        if (pageHit.initTime == 0) {//When it starts for the first time. Both currentTime and initTime will be the same
            pageHit.initTime = Math.floor(Date.now() / 1000);
            currTime = pageHit.initTime;
        }
        currTime = Math.floor(Date.now() / 1000);
        console.log("currTime"+currTime);
        var diff = Math.floor(currTime - pageHit.initTime);
        console.log("diff :" + diff);
        if ((diff >= pageHit.currIndex) && (diff < pageHit.MAX_EVENTS)) {
            pageHit.countArray[diff]++;
            pageHit.currIndex = diff;
        } else if ((diff >= pageHit.MAX_EVENTS) && (diff < (pageHit.MAX_EVENTS * 2))) {
            pageHit.initTime = pageHit.initTime + pageHit.MAX_EVENTS;
            var newIndex = Math.abs(pageHit.MAX_EVENTS - diff);
            for (var j = 0; j < newIndex; j++) {
                pageHit.countArray[j] = 0;
            }
            pageHit.countArray[newIndex] = 1;
            pageHit.currIndex = newIndex;
        } else if (diff >= pageHit.MAX_EVENTS * 2) {
            pageHit.countArray[0] = 1;
            for (var i = 1; i < pageHit.MAX_EVENTS; i++) {
                pageHit.countArray[i] = 0;
            }

        }
    console.log(pageHit.countArray);
        return "Success";

    },

    /*****************************************************************
    * Get the count of events
    * @param option            Mins or seconds
    * @param duration          Num Mins or seconds
    * @returns {number}
    *****************************************************************/
    getCount : function (option, duration) {//option refers to minutes/seconds and duration is the integer value

    if ((option != 'min') && (option != 'sec')) {
        throw ("Please select the appropriate option : 'min'/'sec'");
    }

    if (((option == 'min') && (duration > 5)) || ((option == 'sec') && (duration > 300))) {
        throw ("Unfortunately,we only provide data for the last five " +
            "minutes. Please select a duration of 5 minutes/300 seconds or lower.");

    }

    if (option == 'min') {
        duration = duration * 60;
    }

    var totalCount = 0;
    var index = this.currIndex;
    //Assuming that the timestamp correlates to the currIndex point used to determine where the next event needs to be counted.

    for (var k = 0; k < duration; k++) {
        totalCount = totalCount + pageHit.countArray[index];
        index--;
        if (index < 0) {
            index = 299;
        }
    }
    console.log("page hits :" + totalCount);
    return totalCount;
}
}

