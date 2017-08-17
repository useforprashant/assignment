var count =1;

	
	  $('.button_add_new_ques').click(function() {
		  idd=count;
	    $('#inner-right').append($('<div class="inner_d" id="inner_div_'+count+'"></div>')).append(('<input type="text" style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px;" size="50" value="" class"assn" name="q_'+idd+'" id="q_'+idd+'">'),$('<select onchange="cq(this.value,this.id)" type="select"  id="dd_'+idd+'">').append('<option value="">'+'Select Choice</option>', '<option value="1">'+'Single Choice</option>','<option value="2">'+'Multiple Choice</option>' ,'<option value="3">'+'Multi-Line Text</option>'));
	    count++;
	    return false;
	  });

	  $(document).on('click', '.person', function() {
	    $(this).children('p').toggle('slow');
	  });

	   $('#save').click(function(){
		   var datastring = $("#myFm").serialize();
		/*    var idNdVal = datastring.split("&");
		  var sl = idNdVal.length;
		  jsonObj = [];
		  for(i=0;i<sl;i++){
			  var idvl= idNdVal[i].split("=");
			  
			  var id = idvl[0];
		        var val1 = idvl[1];
			      item = {}
		        item ["id"] = id;
		        item ["value"] = val1;
		       
		        jsonObj.push(item);
		        
		  } */
		  alert(datastring);
           $.ajax({
               type: "POST",
               url: "saveValue",
               data: {
            	   datastring : datastring
               },
              
               success: function(data) {
                    alert('Data send');
               }
           });
	  }); 
	  
	   /*  $("form").submit(function() {
	    	alert('save');
		   var urlVal = document.forms["myFm"].submit();
			alert(urlVal);
		  return false; 
	    });
 */



function sq(val,id){
	var idd1 = id.split('_');
	var idd2 = idd1[1];
	var idd = id.substring(3);
	/*  $('#inner_div_'+idd2+'').append($('<div class="inner_d" id="inner_div_'+count+'"></div>')).append(('<input type="text" style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px;" size="50" value="" name="q_'+idd+'" id="q_'+idd+'">'),$('<select onchange="cq(this.value,this.id)" type="select"  id="dd_'+idd+'">').append( '<option value="1">'+'Single Choice</option>','<option value="2">'+'Multiple Choice</option>' ,'<option value="3">'+'Multi-Line Text</option>')); */
	 $('#'+id).after(('<input type="text" style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px; margin-left: 5px;" size="50" value="" class"assn" name="q_'+idd+'" id="q_'+idd+'_1">'),$('<select onchange="cq(this.value,this.id)" type="select"  id="dd_'+idd+'">').append( '<option value="">'+'Select Choice</option>','<option value="1">'+'Single Choice</option>','<option value="2">'+'Multiple Choice</option>' ,'<option value="3">'+'Multi-Line Text</option>')); 
	
	    return false;
	
}

function cq(val,id){

	var idd = id.substring(3);
	
	if(val==1){
		$('#'+id).after(('<input type="text" style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px; margin-left: 5px;" size="50" value="" class"assn" name="a_'+idd+'_1" id="a_'+idd+'_1">'),$('<button onclick="sq(this.value,this.id)" type="button" class="button_add_sub_ques"  id="sq_'+idd+'_1">Add Sub Question</button>'));
}
	if(val==2){
		$('#'+id).after('<input type="text" style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px; margin-left: 5px;" size="50" value="" class"assn" name="a_'+idd+'_5" id="a_'+idd+'_5">');
		$('#'+id).after('<input type="text" style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px; margin-left: 5px;" size="50" value="" class"assn" name="a_'+idd+'_4" id="a_'+idd+'_4">');
		$('#'+id).after('<input type="text" style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px; margin-left: 5px;" size="50" value="" class"assn" name="a_'+idd+'_3" id="a_'+idd+'_3">');
		$('#'+id).after('<input type="text" style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px; margin-left: 5px;" size="50" value="" class"assn" name="a_'+idd+'_2" id="a_'+idd+'_2">');
		$('#'+id).after('<input type="text" style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px; margin-left: 5px;" size="50" value="" class"assn" name="a_'+idd+'_1" id="a_'+idd+'_1">');
	}
	if(val==3){
		$('#'+id).after(('<textarea style="padding-top: 10px;	border-radius: 10px; margin-bottom: 5px; margin-left: 5px; width: 438px;" value="" class="assn" name="a_'+idd+'_1" id="a_'+idd+'_1">'));
	}

}
function createJSON() {
	  jsonObj = [];
    $("input[class=assn]").each(function() {
    	alert("Json");
    	  
        var id = $(this).attr("title");
        var assn = $(this).val();

        item = {}
        item ["title"] = id;
        item ["value"] = assn;

        jsonObj.push(item);
        
    });

    console.log(jsonObj);
}
