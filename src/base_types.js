// type String, Number, Boolean, Null, Undefined, ... unknown, any
var myStr = 'qwerty';
var myNumber = 344;
var myBool = false;
var myNull = null;
var myUnd = undefined;
var myUnknown; // что то там есть
var myAny; // отключаем типизацию для myAny
// data structures Array, Object, ... new Set, new Map, HTMLCollections ... tuple, enums
var myArrN = [1, 2, 3, 4, 5];
var myArrS = ["asd", 'asd'];
var myTuple = [22, 'string', NaN, ""];
var myObj = { name: "Ivan", age: 33 };
var Keys;
(function (Keys) {
    Keys[Keys["Q"] = 0] = "Q";
    Keys[Keys["W"] = 1] = "W";
    Keys[Keys["E"] = 2] = "E";
    Keys[Keys["R"] = 3] = "R";
    Keys[Keys["T"] = 4] = "T";
})(Keys || (Keys = {}));
var Actions;
(function (Actions) {
    Actions["RUN"] = "RUN";
    Actions["HIDE"] = "HIDE";
    Actions["GET_DATA"] = "GET_DATA";
})(Actions || (Actions = {}));
var myPerson = Actions;
