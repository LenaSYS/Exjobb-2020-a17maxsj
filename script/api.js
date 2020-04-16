window.onload = init;
const dList = [];

function init() {
    console.log("starting");
    //Json question
    var jsonObj =
        /*{
               "query": [{
                       "code": "Region",
                       "selection": {
                           "filter": "vs:RegionLän99EjAggr",
                           "values": [
                               "01",
                               "03",
                               "04",
                               "05",
                               "06",
                               "07",
                               "08",
                               "09",
                               "10",
                               "12",
                               "13",
                               "14",
                               "17",
                               "18",
                               "19",
                               "20",
                               "21",
                               "22",
                               "23",
                               "24",
                               "25"
                           ]
                       }
                   },
                   {
                       "code": "Kon",
                       "selection": {
                           "filter": "item",
                           "values": [
                               "1+2"
                           ]
                       }
                   },
                   {
                       "code": "Tid",
                       "selection": {
                           "filter": "item",
                           "values": [
                               "2019"
                           ]
                       }
                   }
               ],
               "response": {
                   "format": "json"
               }

           };*/
        {
            "query": [{
                    "code": "Region",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "01",
                            "03",
                            "04",
                            "05",
                            "06",
                            "07",
                            "08",
                            "09",
                            "10",
                            "12",
                            "13",
                            "14",
                            "17",
                            "18",
                            "19",
                            "20",
                            "21",
                            "22",
                            "23",
                            "24",
                            "25"
                        ]
                    }
                },
                {
                    "code": "Drivmedel",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "110"
                        ]
                    }
                },
                {
                    "code": "Tid",
                    "selection": {
                        "filter": "item",
                        "values": [
                            "2020M03"
                        ]
                    }
                }
            ],
            "response": {
                "format": "json"
            }
        };

    $.ajax({
        // url: "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/BE/BE0101/BE0101B/BefolkningMedelAlder",
        url: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/TK/TK1001/TK1001A/PersBilarDrivMedel",

        type: "POST",
        data: JSON.stringify(jsonObj),
        dataType: "json",
        success: function(obj) {

            $.each(obj.data, function(index, data) {
                    /*
                    //Testing, log values in console
                      console.log(data.key[0]);
                      console.log(data.key[1]);
                      console.log(data.key[2]);
                      console.log(data.values);
                      */

                    //Testing, display all values
                    document.getElementById("lanInfo").innerHTML +=
                        "<p>Län: " + data.key[0] + " Datum: " + data.key[2] + " Värde: " + data.values + "</p>";

                    console.log(data.key[1]);
                    // put all the values in an array
                    dList.push({ lan: data.key[0], ar: data.key[2], dValue: data.values[0] });


                }

            );

        }

    });

    console.log(dList);




}