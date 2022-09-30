$(document).ready(function(){

  
$("#myTable").on('input', '.txtCal', function () {
       var calculated_total_sum = 0;
     
       $("#myTable .txtCal").each(function () {
           var get_textbox_value = $(this).val();
           if ($.isNumeric(get_textbox_value)) {
              calculated_total_sum += parseFloat(get_textbox_value);
              }                  
            });
              $("#total_sum_value").html(calculated_total_sum);



        
    });
$("#Submit").click(function(){
       alert("The submit button was clicked.");
       totalCalc();
       });
});
//  $(document).ready(function(){
//     $("#Submit").click(function(){
//        alert("The submit button was clicked.");
        
//     });
// });
   
$(document).ready(function(){
    $("#EndofDay").click(function(){
        alert("The End of day button was clicked.");
    });
});