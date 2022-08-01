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
//3 dígitos finanzas
var regex13 = /	([0-9]{3})\b/;
//4 dígitos finanzas
var regex14 = /	([0-9]{4})\b/;
//CNPJ 14 number
var regex15 = /	([0-9]{14})\b/;
//CPF 11 number
var regex16 = /([0-9]{11})\b/;
//currency
var regex17 = /^\$[0-9]*\.[0-9]{2}$/;
//Not a decimal
var regex18 = /^\d+\.?\d+$/;
//Decimal value > 99.9
var regex19 = /[+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*)(?:[eE][+-]?\d+)?/;
//Letters and Numbers
var regex20 = /^[0-9a-z]+$/;
//Mínimo de 20 caractéres
var regex21 = /^.{20,}$/;
//Phone DDI DDD
var regex22 = /^\+?\d{2}?\s*\(\d{2}\)?\s*\d{4,5}\-?\d{4}$/g/;
//	Input is not correct (i.e. 45XXXXXXXX)
var regex23 = /45([0-9]{8})\b/;
//	Input is not correct (i.e. 4500XXXXXX)
var regex24 = /4500([0-9]{6})\b/;
//value is 12345678-K
var regex25 = /^[0-9]{8}[-][0-9A-Z]{1}$/;
//Input is not correct (i.e. 100XXXXX)
var regex26 = /100([0-9]{5})\b/;
//Input is not correct (i.e. 100XXXXXX)
var regex27 = /100([0-9]{6})\b/;
//Input is not correct (i.e. 100XXXXXXX)
var regex28 = /100([0-9]{7})\b/;

// In progress

