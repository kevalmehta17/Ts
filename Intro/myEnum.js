var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 33] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 34] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 35] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 36] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
console.log(hcSeat);
