//Update field
var metric = new GlideRecord('asmt_metric_result');
metric.addEncodedQuery('x_specs_tableId_hr_hr_requestsISEMPTY');
metric.addQuery('source_id', '26132d631b19dc10603132681b4bcb69'); 
metric.query();

while(metric.next())
{
var hrRequest = metric.instance.trigger_id.getDisplayValue();
//gs.print('metric = '+ metric.getDisplayValue('assessment_group') + " - "+ "hr request = " + hrRequest);
metric.setValue('x_specs_tableId_hr_hr_requests',metric.instance.trigger_id);
metric.setWorkflow(false);
metric.update();

}