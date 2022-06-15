var map = L.map('map').setView([-6.1257177,106.1444745], 16);
    
var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

var serang= L.marker([-6.1106524,106.1240003,13]).addTo(map);
var sawarna = L.marker([-6.9849407,106.301366,16]).addTo(map);
var circle = L.circle([-6.9849407,106.301366,16], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
sawarna.bindPopup("<b>Aku Sawarna<b> <br><img src='https://asset.kompas.com/crops/2u6--AnyAYLyvRaI2mbSDarpygQ=/0x0:1200x800/750x500/data/photo/2021/08/26/612795b1949cb.jpg' style='width:100px;height:100px; '> ")
var carita  = L.marker([-6.3266111,105.7634415,13]).addTo(map);
var circle = L.circle([-6.3266111,105.7634415,13], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
carita.bindPopup("<b>Aku Carita<b> <br><img src='https://upload.wikimedia.org/wikipedia/id/f/fb/Carita_Beach%2C_Banten.jpg' style='width:100px;height:100px; '> ")
var bugel = L.marker([-6.5831712,105.596482,14]).addTo(map);
var circle = L.circle([-6.5831712,105.596482,14], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
bugel.bindPopup("<b>Aku Bugel<b> <br><img src='https://assets.pikiran-rakyat.com/crop/12x92:1079x801/x/photo/2021/02/22/2018317127.jpg' style='width:100px;height:100px; '> ")
var karangbolong = L.marker([-6.1661637,105.8503485,17]).addTo(map);
var circle = L.circle([-6.1661637,105.8503485,17], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
karangbolong.bindPopup("<b>Aku Karang Bolong<b> <br><img src='https://piknikwisata.com/wp-content/uploads/2020/05/info-pantai-karang-bolong.jpg' style='width:100px;height:100px; '> ")
var sangiang = L.marker([-5.958181,105.8070964,13.04]).addTo(map);
var circle = L.circle([-5.958181,105.8070964,13.04], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
sangiang.bindPopup("<b>Aku Sangiang<b> <br><img src='https://www.pantainesia.com/wp-content/uploads/2021/10/Wisata-Pantai-Sangiang.jpg' style='width:100px;height:100px; '> ")
var umang = L.marker([-6.6430099,105.5732128,16]).addTo(map);
var circle = L.circle([-6.6430099,105.5732128,16], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
umang.bindPopup("<b>Aku Umang<b> <br><img src='https://www.jejakpiknik.com/wp-content/uploads/2017/06/@visitpandeglang-630x380.jpg' style='width:100px;height:100px; '> ")
var tanjunglesung = L.marker([-6.4790227,105.6536997,17]).addTo(map);
var circle = L.circle([-6.4790227,105.6536997,17], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
tanjunglesung.bindPopup("<b>Aku Tanjung Lesung<b> <br><img src='https://cdn-2.tstatic.net/travel/foto/bank/images/pantai-tanjung-lesung-banten.jpg' style='width:100px;height:100px; '> ")
var anyer = L.marker([-6.0973122,105.8097564,12]).addTo(map);
var circle = L.circle([-6.0973122,105.8097564,12], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
anyer.bindPopup("<b>Aku Anyer<b> <br><img src='https://cdn.nativeindonesia.com/foto/pantai-anyer/Pantai-Marbella.jpg' style='width:100px;height:100px; '> ")
var cihara = L.marker([-6.8078486,106.03473,11.83]).addTo(map);
var circle = L.circle([-6.8078486,106.03473,11.83], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
cihara.bindPopup("<b>Aku Cihara<b> <br><img src='https://1.bp.blogspot.com/-WwV4yIkzfEo/WNCouyaCKvI/AAAAAAAAUf0/tORc7rrQ-yg2pPsAg9ZvHySnbqYGUErgACLcB/s1600/cihara1.jpg' style='width:100px;height:100px; '> ")
var florida2 = L.marker([-6.1317841,105.7969301,13]).addTo(map);
var circle = L.circle([-6.1317841,105.7969301,13], {    
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
florida2.bindPopup("<b>Aku Florida2<b> <br><img src='https://www.itrip.id/wp-content/uploads/2021/09/Alamat-Pantai-Florida.jpg' style='width:100px;height:100px; '> ")
