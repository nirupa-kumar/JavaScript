//Structure for maintaining cash denominations as a single unit
function cashDenominationCounts(t20Count, t10Count, t5Count, t2Count,
t1Count, t50cCount, t25cCount, t10cCount, t5cCount, t1cCount) {
    this.t20Count = t20Count;
    this.t10Count = t10Count;
    this.t5Count = t5Count;
    this.t2Count = t2Count;
    this.t1Count = t1Count;
    this.t50cCount = t50cCount;
    this.t25cCount = t25cCount;
    this.t10cCount = t10cCount;
    this.t5cCount = t5cCount;
    this.t1cCount = t1cCount;
};

function getTotal(currencyCounts) {

    return (20 * currencyCounts.t20Count
    + 10 * currencyCounts.t10Count
    + 5 * currencyCounts.t5Count
    + 2 * currencyCounts.t2Count
    + 1 * currencyCounts.t1Count
    + 0.5 * currencyCounts.t50cCount
    + 0.25 * currencyCounts.t25cCount
    + 0.10 * currencyCounts.t10cCount
    + 0.05 * currencyCounts.t5cCount
    + 0.01 * currencyCounts.t1cCount);
};

//Cash Register Object structure
var cashRegister = {

    total: 0,
    currentCashCount: null,

    //Initialize Cash Register
    init: function (currencyCounts) {
        this.currentCashCount = new cashDenominationCounts(currencyCounts.t20Count, currencyCounts.t10Count, currencyCounts.t5Count, currencyCounts.t2Count, currencyCounts.t1Count, currencyCounts.t50cCount, currencyCounts.t25cCount, currencyCounts.t10cCount, currencyCounts.t5cCount, currencyCounts.t1cCount);
        this.total = getTotal(this.currentCashCount);
    },

    //Update the Cash Register denominations with cash denominations paid by the customer
    updateRegisterCashDenom: function (amountPaidObj) {

        this.currentCashCount.t20Count = this.currentCashCount.t20Count + amountPaidObj.t20Count;
        this.currentCashCount.t10Count = this.currentCashCount.t10Count + amountPaidObj.t10Count;
        this.currentCashCount.t5Count = this.currentCashCount.t5Count + amountPaidObj.t5Count;
        this.currentCashCount.t2Count = this.currentCashCount.t2Count + amountPaidObj.t2Count;
        this.currentCashCount.t1Count = this.currentCashCount.t1Count + amountPaidObj.t1Count;
        this.currentCashCount.t50cCount = this.currentCashCount.t50cCount + amountPaidObj.t50cCount;
        this.currentCashCount.t25cCount = this.currentCashCount.t25cCount + amountPaidObj.t25cCount;
        this.currentCashCount.t10cCount = this.currentCashCount.t10cCount + amountPaidObj.t10cCount;
        this.currentCashCount.t5cCount = this.currentCashCount.t5cCount + amountPaidObj.t5cCount;
        this.currentCashCount.t1cCount = this.currentCashCount.t1cCount + amountPaidObj.t1cCount;
    },

    //Calculate the change to be provided to the customer
    calculateChange: function (totalBill, amountPaidObj) {
        var returnCashCount = new cashDenominationCounts(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        if (getTotal(amountPaidObj) >= totalBill) {
            this.updateRegisterCashDenom(amountPaidObj);
            var residualCash = getTotal(amountPaidObj) - totalBill; //to calculate change to be given
            residualCash = residualCash.toFixed(2);
            while((residualCash >= 20) && (this.currentCashCount.t20Count>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 20;
                 this.currentCashCount.t20Count = this.currentCashCount.t20Count - 1;
                 returnCashCount.t20Count++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            while((residualCash >= 10) && (this.currentCashCount.t10Count>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 10;
                 this.currentCashCount.t10Count = this.currentCashCount.t10Count - 1;
                 returnCashCount.t10Count++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            while((residualCash >= 5) && (this.currentCashCount.t5Count>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 5;
                 this.currentCashCount.t5Count = this.currentCashCount.t5Count - 1;
                 returnCashCount.t5Count++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            while((residualCash >= 2) && (this.currentCashCount.t2Count>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 2;
                 this.currentCashCount.t2Count = this.currentCashCount.t2Count - 1;
                 returnCashCount.t2Count++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            while((residualCash >= 1) && (this.currentCashCount.t1Count>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 1;
                 this.currentCashCount.t1Count = this.currentCashCount.t1Count - 1;
                 returnCashCount.t1Count++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            while((residualCash >= 0.5) && (this.currentCashCount.t50cCount>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 0.5;
                 this.currentCashCount.t50cCount = this.currentCashCount.t50cCount - 1;
                 returnCashCount.t50cCount++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            while((residualCash >= 0.25) && (this.currentCashCount.t25cCount>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 0.25;
                 this.currentCashCount.t25cCount = this.currentCashCount.t25cCount - 1;
                 returnCashCount.t25cCount++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            while((residualCash >= 0.10) && (this.currentCashCount.t10cCount>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 0.10;
                 this.currentCashCount.t10cCount = this.currentCashCount.t10cCount - 1;
                 returnCashCount.t10cCount++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            while((residualCash >= 0.05) && (this.currentCashCount.t5cCount>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 0.05;
                 this.currentCashCount.t5cCount = this.currentCashCount.t5cCount - 1;
                 returnCashCount.t5cCount++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            while((residualCash >= 0.01) && (this.currentCashCount.t1cCount>0)){
                 residualCash = parseFloat(residualCash).toFixed(2);
                 residualCash = residualCash - 0.01;
                 this.currentCashCount.t1cCount = this.currentCashCount.t1cCount - 1;
                 returnCashCount.t1cCount++;
            }

            residualCash = parseFloat(residualCash).toFixed(2);
            if(residualCash != 0 ){
               alert("Unfortunately we do not have the necessary amount to be returned as change. Please tender the exact bill amount");
               return null;
            }

        } else {
            alert("Insufficient cash provided by customer.");
            return null;
        }
        return returnCashCount;
    },

    //Retrieve "Cash paid by the customer" cash denominations
    calculateChangeDenominations : function(){

        var bill = parseFloat(document.getElementById("bill").value);
        var t20Count = parseInt(document.getElementById("b20Count").value);
        var t10Count = parseInt(document.getElementById("b10Count").value);
        var t5Count = parseInt(document.getElementById("b5Count").value);
        var t2Count = parseInt(document.getElementById("b2Count").value);
        var t1Count = parseInt(document.getElementById("b1Count").value);
        var t50cCount = parseInt(document.getElementById("b50cCount").value);
        var t25cCount = parseInt(document.getElementById("b25cCount").value);
        var t10cCount = parseInt(document.getElementById("b10cCount").value);
        var t5cCount = parseInt(document.getElementById("b5cCount").value);
        var t1cCount = parseInt(document.getElementById("b1cCount").value);

        var returnCashCount = this.calculateChange(bill, new cashDenominationCounts(t20Count, t10Count, t5Count, t2Count,
                                   t1Count, t50cCount, t25cCount, t10cCount, t5cCount, t1cCount));
        if(returnCashCount != null) {
            this.updateReturnChangeCounts(returnCashCount);
        } else{
            toggleDivEditState("customerDenom", "enable");
        }
    },

    // Update "To be returned to customer" cash denominations
    updateReturnChangeCounts:function(returnCashCount){

        document.getElementById("r20Count").value = returnCashCount.t20Count;
        document.getElementById("r10Count").value = returnCashCount.t10Count;
        document.getElementById("r5Count").value = returnCashCount.t5Count;
        document.getElementById("r2Count").value = returnCashCount.t2Count;
        document.getElementById("r1Count").value = returnCashCount.t1Count;
        document.getElementById("r50cCount").value = returnCashCount.t50cCount;
        document.getElementById("r25cCount").value = returnCashCount.t25cCount;
        document.getElementById("r10cCount").value = returnCashCount.t10cCount;
        document.getElementById("r5cCount").value = returnCashCount.t5cCount;
        document.getElementById("r1cCount").value = returnCashCount.t1cCount;

        $("#transComplete").show();
        highLightReturnChangeBkColor(true);

    },

    // Update Current Cash Register status on screen with values calculated
    updateRegisterDisplay : function() {

        document.getElementById("c20Count").value = this.currentCashCount.t20Count;
        document.getElementById("c10Count").value = this.currentCashCount.t10Count;
        document.getElementById("c5Count").value = this.currentCashCount.t5Count;
        document.getElementById("c2Count").value = this.currentCashCount.t2Count;
        document.getElementById("c1Count").value = this.currentCashCount.t1Count;
        document.getElementById("c50cCount").value = this.currentCashCount.t50cCount;
        document.getElementById("c25cCount").value = this.currentCashCount.t25cCount;
        document.getElementById("c10cCount").value = this.currentCashCount.t10cCount;
        document.getElementById("c5cCount").value = this.currentCashCount.t5cCount;
        document.getElementById("c1cCount"). value = this.currentCashCount.t1cCount;
    },

    //Reset Cash paid by the customer cash denominations and To be returned to customer cash denominations to 0
    resetCounts : function () {

        document.getElementById("bill").value=0;
        document.getElementById("b20Count").value = 0;
        document.getElementById("b10Count").value = 0;
        document.getElementById("b5Count").value = 0;
        document.getElementById("b2Count").value = 0;
        document.getElementById("b1Count").value = 0;
        document.getElementById("b50cCount").value = 0;
        document.getElementById("b25cCount").value = 0;
        document.getElementById("b10cCount").value = 0;
        document.getElementById("b5cCount").value = 0;
        document.getElementById("b1cCount").value = 0;

        document.getElementById("r20Count").value = 0;
        document.getElementById("r10Count").value = 0;
        document.getElementById("r5Count").value = 0;
        document.getElementById("r2Count").value = 0;
        document.getElementById("r1Count").value = 0;
        document.getElementById("r50cCount").value = 0;
        document.getElementById("r25cCount").value = 0;
        document.getElementById("r10cCount").value = 0;
        document.getElementById("r5cCount").value = 0;
        document.getElementById("r1cCount").value = 0;

    }

 };

//Called on Calculate Change
function getChangeDenomCounts(){
    if(document.getElementById("bill").value > 0) {
        toggleDivEditState("customerDenom", "disable");
        cashRegister.calculateChangeDenominations();
    } else {
        alert("Please enter the total bill amount.");
    }

};

// Initialize Cash Register object with values entered on screen
function initializeRegister(){

    var c20Count = parseInt(document.getElementById("c20Count").value);
    var c10Count = parseInt(document.getElementById("c10Count").value);
    var c5Count = parseInt(document.getElementById("c5Count").value);
    var c2Count = parseInt(document.getElementById("c2Count").value);
    var c1Count = parseInt(document.getElementById("c1Count").value);
    var c50cCount = parseInt(document.getElementById("c50cCount").value);
    var c25cCount = parseInt(document.getElementById("c25cCount").value);
    var c10cCount = parseInt(document.getElementById("c10cCount").value);
    var c5cCount = parseInt(document.getElementById("c5cCount").value);
    var c1cCount = parseInt(document.getElementById("c1cCount").value);

    var cashierEnteredInit = new cashDenominationCounts(c20Count, c10Count, c5Count,
                                                        c2Count, c1Count, c50cCount,
                                                        c25cCount, c10cCount, c5cCount,
                                                        c1cCount);
    cashRegister.init(cashierEnteredInit);
    disableCashRegisterEdit();
};

//Enable Cash Register cash denominations
function enableCashRegisterEdit() {
    toggleCashRegisterEditState("enable");
};

//Disable Cash Register cash denominations
function disableCashRegisterEdit() {
    toggleCashRegisterEditState("disable");
};

//Toggle Cash Register cash denominations between enable and disable
function toggleCashRegisterEditState(state) {
//    var nodes = document.getElementById("cashRegisterState").getElementsByTagName('*');
//    for(var i = 0; i < nodes.length; i++){
//        if(state === "disable") {
//            nodes[i].disabled = true;
//        } else if (state === "enable"){
//            nodes[i].disabled = false;
//        }
//    }
    toggleDivEditState("cashRegisterState", state);
    //enable the edit button
    var node = document.getElementById("editRegister");
    node.disabled = false;
};

//Toggle the edit state of elements in a div
function toggleDivEditState(divId, state) {
    var nodes = document.getElementById(divId).getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
        if(state === "disable") {
            nodes[i].disabled = true;
        } else if (state === "enable"){
            nodes[i].disabled = false;
        }
    }
};

//Update Current Cash Register status on screen
function refreshRegister() {
    cashRegister.updateRegisterDisplay();
};

//Set background color
function setBackGroundColor(elementId, color) {

    var elem = document.getElementById(elementId);
    if(elem) {
        elem.style.backgroundColor = color;
    }
};

//Set background color of Return to customer panel
function highLightReturnChangeBkColor(state) {
    if(state === true) {
        setBackGroundColor("divReturnCash", "orange");
    }else{
        setBackGroundColor("divReturnCash", "white");
    }
};

//On clicking Transaction Complete button
//To be returned to customer panel highlighted
//Transaction Complete button hidden
//To be returned to customer cash denominations reset to 0
//Update Cash Register
function transactionComplete() {
    highLightReturnChangeBkColor(false);
    $("#transComplete").hide();
    cashRegister.resetCounts();
    refreshRegister();
    toggleDivEditState("customerDenom", "enable");
};

//On Window load(Refresh)
//Hide Transaction Complete button
//Set default values for denominations
//Update register with default values
//Disable Update and Cancel buttons for Cash Register
function init() {
    $("#transComplete").hide();
    alert("The cash register will be initialized with 100 of each denomination. Please edit the register for custom values.");
    setDefaultRegisterCounts();
    refreshRegister();
    cashRegister.resetCounts();
    disableCashRegisterEdit();
};

//Cancel button in Current Cash Register status
function cancelRegisterEdit() {
    refreshRegister();
    disableCashRegisterEdit();
};

//Set default denominations for Cash Register on Window Load (Refresh)
//Function was mainly created to aid in testing of Cash Register Application - custom values can be entered
function setDefaultRegisterCounts(){
    cashRegister.init(new cashDenominationCounts(100, 100, 100,
                                              100, 100, 100,
                                              100, 100, 100,
                                              100));

};

//reset the Total bill and the customer paid counts to zero
function reset(){
    document.getElementById("bill").value = 0;
    cashRegister.resetCounts();
}
