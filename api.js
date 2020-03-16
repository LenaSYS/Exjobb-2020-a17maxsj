window.onload = init;
function init() {


    var e = document.getElementById("lanSelect");
    var strUser = e.options[e.selectedIndex].value;
    console.log("starting");
var jsonObj = 
{
  "query": [
    {
      "code": "Region",
      "selection": {
        "filter": "vs:RegionLän",
        "values": [
          strUser
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
            
               var rt = document.getElementById("lanSelect");
               var regiontext = rt.options[e.selectedIndex].text;

               document.getElementById('region').innerText = regiontext;
               document.getElementById('year').innerText = data.key[4];
               document.getElementById('deathtollValue').innerText = content;



               }
           
           ); 
       
         
   }
 
 }); 
 
}