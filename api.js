window.onload = init;
function init() {

var jsonObj = 
{
  "query": [
    {
      "code": "Region",
      "selection": {
        "filter": "vs:RegionLän",
        "values": [
          "16"
        ]
      }
    },
    {
      "code": "Dodsorsak",
      "selection": {
        "filter": "agg:DödsorsakKapitel",
        "values": [
          "20-21"
        ]
      }
    },
    {
      "code": "Alder",
      "selection": {
        "filter": "vs:Ålder5årA",
        "values": [
          "75-79"
        ]
      }
    },
    {
      "code": "Kon",
      "selection": {
        "filter": "item",
        "values": [
          "1"
        ]
      }
    },
    {
      "code": "Tid",
      "selection": {
        "filter": "item",
        "values": [
          "1981"
        ]
      }
    }
  ],
  "response": {
    "format": "json"
  }
}; 

$.ajax({
url:"http://api.scb.se/OV0104/v1/doris/sv/ssd/START/HS/HS0301/DodaOrsak",
    type: "POST",
    data: JSON.stringify(jsonObj),   
    dataType: "json",
    success: function(obj){		
       
           $.each(obj.data, function(index,data) {	   
            
               var content = data.values;
                $("#deathtoll").append(content);

               }
           
           ); 
       
         
   }
 
 }); 
 
}