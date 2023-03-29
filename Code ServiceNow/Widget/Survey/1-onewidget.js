<html>


<div ng-if="data.portal!='xxxx'" ng-repeat="item in data.items">

   <widget id="fl_surveys"></widget>
</div>

<div ng-if="data.portal=='xxxx'" ng-repeat="item in data.items">

   <widget id="my-surveys-custom"></widget>
</div>

</html>

(function() {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
      
      data.portal = $sp.getPortalRecord().getDisplayValue("url_suffix");
  
      data.items = [];
      
      var gr = new GlideRecord('asmt_assessment_instance');
          gr.addEncodedQuery("metric_type.evaluation_method=survey^state=ready^userDYNAMIC90d1921e5f510100a9ad2572f2b477fe");
      gr.orderByDesc("sys_updated_on")
      gr.query();
  
      if (gr.next()) {
          var item = {};
          item.number = gr.number.getDisplayValue();
          data.items.push(item);
      }	
      
      console.log ("data.item.number = " + data.item.number);
      
  })();