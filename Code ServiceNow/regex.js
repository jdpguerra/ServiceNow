//Check start number or special ct
var regex1 = /^(?![0-9])[a-zA-Z0-9]*$/;
//10 numbers and ;
var regex2 = /^[0-9]{10}(\;[0-9]{10})*$/;
//10 numbers OR 'rateio'
var regex3 = /^([0-9]{10}?|(?i)rateio)$/;
//4 codes alfhabet
var regex4 = /^(?![0-9])[a-zA-Z0-9\s]*$/;
//Only four numbers
var regex5 = /^[0-9]{4}$/;
//Validate four digits
var regex6 = /^[0-9]{4}$/;
// Number 1-50
var regex7 = /\b([1-9]|[1-3][0-9]|[4][0-9]|[5][0])\b/;
// Float
var regex8 = /^[0-9]*(\.[0-9]{0,2})?$/;
//Monetary value
var regex9 = /^[1-9]\d*(\.\d{0,2})?(\,\d{0,2})?$/;
//MM/YYYY
var regex10 = /^(0[1-9]|1[012])\/[12][0-9]{3}$/;
// Hour
var regex11 = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
//Float with 4 digits and ' , '
var regex12 = /^([0-9]{0,4})?$*(\,[0-9]{0,4})?$/;
