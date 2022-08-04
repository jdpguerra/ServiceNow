
//Best practices
//Use the gr.getUniqueValue() method which returns a string with the sys_id.

// On Server Side
var some_record_id = current.getUniqueValue();
// On Client Side
var some_record_id = g_form.getUniqueValue();

//Using getValue() method can also bring the same effect:

// getting record id
var currentTask = current.getValue("sys_id");

//bad practices
// setting new Short Description
current.short_description = "This is a Test";

//Best practices
//Use setValue() method as follow:
// setting new Short Description
current.setValue("short_description", "This is a Test");

// using variable
var fields_value = ["short_descrption", "This is a Test"];
current.setValue(fields_value[0], fields_value[1]);

// for a reference field
current.setValue("assigned_to", "46f09e75a9fe198100f4ffd8d366d17b");
//There is also setDisplayValue():

// setting record by Display Value
current.setDisplayValue("assigned_to", "Beth Anglin");