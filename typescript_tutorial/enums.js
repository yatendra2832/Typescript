// Enum in typescript
// enum is a special type in typescript 
var SeatChoices;
(function (SeatChoices) {
    SeatChoices[SeatChoices["AISLE"] = 1] = "AISLE";
    SeatChoices[SeatChoices["MIDDLE"] = 22] = "MIDDLE";
    SeatChoices[SeatChoices["WINDOW"] = 12] = "WINDOW";
    SeatChoices[SeatChoices["FOURTH"] = 4] = "FOURTH";
})(SeatChoices || (SeatChoices = {}));
var ysseat = SeatChoices.MIDDLE;
console.log(ysseat);
