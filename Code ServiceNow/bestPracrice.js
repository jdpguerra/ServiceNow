
//Best practices
//Use the gr.getUniqueValue() method which returns a string with the sys_id.

// On Server Side
var some_record_id = current.getUniqueValue();
// On Client Side
var some_record_id = g_form.getUniqueValue();

//Using getValue() method can also bring the same effect:

// getting record id
var currentTask = current.getValue("sys_id");