var template=`<div>
<table>
  <tr>
    <td rowspan="4">
      <img src="[ICSRC]" alt="">
    </td>
    <td data-cls=1><span>[DC]°C</span><span>[DF]°F</span></td>
  </tr>
</table>
</div>`;
// Creating a map object
var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 5
});

//L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}" (old version per leafletjs documentation)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  //id: "mapbox.streets-basic", (old version does not work any longer per leafletjs documentation)
  id: "mapbox/outdoors-v10",

  /* Mapping Options
  mapbox/streets-v11
  mapbox/outdoors-v11
  mapbox/light-v10
  mapbox/dark-v10
  mapbox/satellite-v9
  mapbox/satellite-streets-v11
  */


  accessToken: API_KEY
}).addTo(myMap);

// Defining a markerSize function that will give each city a different radius based on its qty of sweetgreens per market
function markerSize(campsites) {
  return campsites / 0.003;
}

// Each city object contains the city represents a sweetgreen market. Including city name, coordinates, and qty of restaurants in this market.
var cities = [
{
  parkcode:"AIP",
  name:"Alama Muhammad Iqbal Park",
  location:[33.6491127,73.0690804],
  campsites:1000
},
  {
    parkcode: "acad",
    name: "Acadia National Park",
    location: [44.3386, -68.2733],
    campsites: 100
  },
  {
    parkcode: "alag",
    name: "Alagnak Wild River",
    location: [59.0047, -156.8603],
    campsites: 115
  },
  {
    parkcode: "alfl",
    name: "Alibates Flint Quarries National Monument",
    location: [35.5836, -101.6698],
    campsites: 125
  },
  {
    parkcode: "alka",
    name: "Ala Kahakai National Historic Trail",
    location: [19.6868, -156.0326],
    campsites: 150
  },
  {
    parkcode: "amis",
    name: "Amistad National Recreation Area",
    location: [29.4956, -100.9953],
    campsites: 100
  },
  {
    parkcode: "ania",
    name: "Aniakchak National Monument & Preserve",
    location: [56.9036, -158.099],
    campsites: 115
  },
  {
    parkcode: "anti",
    name: "Antietam National Battlefield",
    location: [39.4687, -77.7388],
    campsites: 125
  },
  {
    parkcode: "apis",
    name: "Apostle Islands National Lakeshore",
    location: [46.9302, -90.6333],
    campsites: 150
  },
  {
    parkcode: "appa",
    name: "Appalachian National Scenic Trail",
    location: [39.3254, -77.7405],
    campsites: 100
  },
  {
    parkcode: "arch",
    name: "Arches National Park",
    location: [38.7331, -109.5925],
    campsites: 115
  },
  {
    parkcode: "asis",
    name: "Assateague Island National Seashore",
    location: [38.0608, -75.2362],
    campsites: 125
  },
  {
    parkcode: "attr",
    name: "Atchafalaya National Heritage Area",
    location: [30.3417, -91.72200000000001],
    campsites: 150
  },
  {
    parkcode: "acad",
    name: "Acadia National Park",
    location: [44.3386, -68.2733],
    campsites: 100
  },
  {
    parkcode: "arch",
    name: "Arches National Park",
    location: [38.7331, -109.5925],
    campsites: 150
  },
  {
    parkcode: "badl",
    name: "Badlands National Park",
    location: [43.8554, -102.3397],
    campsites: 100
  },
  {
    parkcode: "blca",
    name: "Black Canyon Of The Gunnison National Park",
    location: [38.5754, -107.7416],
    campsites: 125
  },
  {
    parkcode: "brca",
    name: "Bryce Canyon National Park",
    location: [37.593, -112.1871],
    campsites: 100
  },
  {
    parkcode: "cany",
    name: "Canyonlands National Park",
    location: [38.3269, -109.8783],
    campsites: 115
  },
  {
    parkcode: "care",
    name: "Capitol Reef National Park",
    location: [38.367, -111.2615],
    campsites: 125
  },
  {
    parkcode: "cave",
    name: "Carlsbad Caverns National Park",
    location: [32.1479, -104.5567],
    campsites: 100
  },
  {
    parkcode: "chis",
    name: "Channel Islands National Park",
    location: [34.0069, -119.7785],
    campsites: 115
  },
  {
    parkcode: "cong",
    name: "Congaree National Park",
    location: [33.7948, -80.7821],
    campsites: 100
  },
  {
    parkcode: "crla",
    name: "Crater Lake National Park",
    location: [42.8684, -122.1685],
    campsites: 115
  },
  {
    parkcode: "cuva",
    name: "Cuyahoga Valley National Park",
    location: [41.2808, -81.5678],
    campsites: 125
  },
  {
    parkcode: "dena",
    name: "Denali National Park & Preserve",
    location: [63.1148, -151.1926],
    campsites: 150
  },
  {
    parkcode: "deva",
    name: "Death Valley National Park",
    location: [36.5323, -116.9325],
    campsites: 125
  },
  {
    parkcode: "drto",
    name: "Dry Tortugas National Park",
    location: [24.6285, -82.8732],
    campsites: 100
  },
  {
    parkcode: "ever",
    name: "Everglades National Park",
    location: [25.7459, -80.555],
    campsites: 150
  },
  {
    parkcode: "gaar",
    name: "Gates Of The Arctic National Park & Preserve",
    location: [67.8819, -153.1861],
    campsites: 115
  },
  {
    parkcode: "gate",
    name: "Gateway National Recreation Area",
    location: [40.4397, -73.9887],
    campsites: 150
  },
  {
    parkcode: "glac",
    name: "Glacier National Park",
    location: [48.7596, -113.787],
    campsites: 115
  },
  {
    parkcode: "glba",
    name: "Glacier Bay National Park & Preserve",
    location: [58.6658, -136.9002],
    campsites: 125
  },
  {
    parkcode: "grba",
    name: "Great Basin National Park",
    location: [38.9833, -114.3],
    campsites: 115
  },
  {
    parkcode: "grca",
    name: "Grand Canyon National Park",
    location: [36.0548, -112.1222],
    campsites: 125
  },
  {
    parkcode: "grsa",
    name: "Great Sand Dunes National Park & Preserve",
    location: [37.7916, -105.5943],
    campsites: 125
  },
  {
    parkcode: "grsm",
    name: "Great Smoky Mountains National Park",
    location: [35.6118, -83.4895],
    campsites: 150
  },
  {
    parkcode: "grte",
    name: "Grand Teton National Park",
    location: [43.7904, -110.6818],
    campsites: 100
  },
  {
    parkcode: "gumo",
    name: "Guadalupe Mountains National Park",
    location: [31.9231, -104.8645],
    campsites: 125
  },
  {
    parkcode: "hale",
    name: "Haleaka National Park",
    location: [20.7204, -156.1552],
    campsites: 150
  },
  {
    parkcode: "hosp",
    name: "Hot Springs National Park",
    location: [34.5217, -93.0424],
    campsites: 100
  },
  {
    parkcode: "indu",
    name: "Indiana Dunes National Park",
    location: [41.6533, -87.0524],
    campsites: 150
  },
  {
    parkcode: "isro",
    name: "Isle Royale National Park",
    location: [47.9959, -88.9093],
    campsites: 100
  },
  {
    parkcode: "jotr",
    name: "Joshua Tree National Park",
    location: [33.8734, -115.90100000000001],
    campsites: 115
  },
  {
    parkcode: "katm",
    name: "Katmai National Park & Preserve",
    location: [58.6126, -155.0631],
    campsites: 125
  },
  {
    parkcode: "kefj",
    name: "Kenai Fjords National Park",
    location: [60.0438, -149.8164],
    campsites: 150
  },
  {
    parkcode: "kova",
    name: "Kobuk Valley National Park",
    location: [67.3356, -159.1243],
    campsites: 115
  },
  {
    parkcode: "lacl",
    name: "Lake Clark National Park & Preserve",
    location: [60.4127, -154.3235],
    campsites: 150
  },
  {
    parkcode: "lavo",
    name: "Lassen Volcanic National Park",
    location: [40.4977, -121.4207],
    campsites: 150
  },
  {
    parkcode: "maca",
    name: "Mammoth Cave National Park",
    location: [37.187, -86.1005],
    campsites: 115
  },
  {
    parkcode: "meve",
    name: "Mesa Verde National Park",
    location: [37.2309, -108.4618],
    campsites: 125
  },
  {
    parkcode: "mora",
    name: "Mount Rainier National Park",
    location: [46.88, -121.7269],
    campsites: 125
  },
  {
    parkcode: "noca",
    name: "North Cascades National Park",
    location: [48.7718, -121.2985],
    campsites: 125
  },
  {
    parkcode: "olym",
    name: "Olympic National Park",
    location: [47.8021, -123.6044],
    campsites: 125
  },
  {
    parkcode: "pefo",
    name: "Petrified Forest National Park",
    location: [34.91, -109.8068],
    campsites: 150
  },
  {
    parkcode: "pinn",
    name: "Pinnacles National Park",
    location: [36.4906, -121.1825],
    campsites: 173
  },
  {
    parkcode: "redw",
    name: "Redwood National and State Parks",
    location: [41.2132, -124.0046],
    campsites: 125
  },
  {
    parkcode: "romo",
    name: "Rocky Mountain National Park",
    location: [40.3428, -105.6836],
    campsites: 100
  },
  {
    parkcode: "sagu",
    name: "Saguaro National Park",
    location: [32.2967, -111.1666],
    campsites: 125
  },
  {
    parkcode: "seki",
    name: "Sequoia & Kings Canyon National Parks",
    location: [36.5647, -118.7727],
    campsites: 115
  },
  {
    parkcode: "shen",
    name: "Shenandoah National Park",
    location: [38.2928, -78.6796],
    campsites: 125
  },
  {
    parkcode: "thro",
    name: "Theodore Roosevelt National Park",
    location: [46.979, -103.5387],
    campsites: 125
  },
  {
    parkcode: "viis",
    name: "Virgin Islands National Park",
    location: [18.3424, -64.7486],
    campsites: 150
  },
  {
    parkcode: "voya",
    name: "Voyageurs National Park",
    location: [48.4841, -92.8271],
    campsites: 100
  },
  {
    parkcode: "whsa",
    name: "White Sands National Park",
    location: [32.7872, -106.3257],
    campsites: 125
  },
  {
    parkcode: "wica",
    name: "Wind Cave National Park",
    location: [43.6046, -103.4213],
    campsites: 150
  },
  {
    parkcode: "wrst",
    name: "Wrangell - St Elias National Park & Preserve",
    location: [61.7104, -142.9857],
    campsites: 100
  },
  {
    parkcode: "yell",
    name: "Yellowstone National Park",
    location: [44.428000000000004, -110.5885],
    campsites: 115
  },
  {
    parkcode: "yose",
    name: "Yosemite National Park",
    location: [37.8651, -119.5383],
    campsites: 125
  },
  {
    parkcode: "zion",
    name: "Zion National Park",
    location: [37.2982, -113.0263],
    campsites: 100
  }

];

// Looping through the cities array and creating one marker for each city object
var circles = [];
for (var i = 0; i < cities.length; i++) {
  circles[i] = L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "green",
    // Setting circle's radius equal to the output of markerSize function
    // Makes marker's size proportionate to its measured parameter
    radius: markerSize(cities[i].campsites)
  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>campsites = " + cities[i].campsites + "</h3>").addTo(myMap);
  circles[i].on('mouseover', (e) => {
    e.target.openPopup();
    //var cont=cities.filter(x=>x.location.equals(e.latlng))[0];
    _onmouseover(e);
  })

}
const key = "c0214b454c5244a4901191705202706";
function _onmouseover(e){
  var cont=e.target.getPopup().getContent();
    //var name=cont.match(/<h1>.*?<\/h1>/i)[0].replace('<h1>','').replace('</h1>','');
    //var contc=cities.filter(x=>x.name==name)[0];
    debugger
    console.info(e);
    var loc = `${e.latlng.lat},${e.latlng.lng}`;
    e.target.setPopupContent("<h1>Loading...</h1>");
    getWeather({ location: loc }).then(data => {
      debugger;
      data=data.data;
      t=template;
      //t=t.replace('[ICSRC]',data.current_condition[0].weatherIconUrl[0].value);
      t=t.replace('[DC]',data.current_condition[0].temp_C);
      t=t.replace('[DF]',data.current_condition[0].temp_F);
      //t="<h3>" +contc.name + "</h3> <hr> <h3>campsites = " + contc.campsites + "</h3>"+t;
      var finalCont="";
      if(cont.match(/<td data-cls=1>.*?<\/td>/i)&&cont.match(/<td data-cls=1>.*?<\/td>/i).length>0){
        finalCont= cont.replace(cont.match(/<td data-cls=1>.*?<\/td>/i)[0],`<td data-cls=1><span>${data.current_condition[0].temp_C}°C</span><span>${data.current_condition[0].temp_F}°F</span></td>`);
      }else{
        finalCont=cont+t;
      }
      e.target.setPopupContent(finalCont);
    }).catch(er=>{
      e.target.setPopupContent("<h4 style='color:red'>Something went wrong.</h1>");
    })
}
function getWeather(params) {
  return new Promise((resolve, reject) => {
    const call = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${key}&q=${params.location}&format=json&num_of_days=1`;
    $.ajax({
      method:"GET",
      url:call,
      success:function(suc){
        resolve(suc);
      },
      error:function(er){
reject(er);
      }
    })
    // fetch(call).then(res => res.json()).then(json => {
    //   resolve(json);
    // }).catch(e => {
    //   reject(e);
    // })
  })
}

