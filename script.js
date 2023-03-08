
var map;

nostra.onready = function () {
    nostra.config.Language.setLanguage(nostra.language.E);
    initialize();
};

function initialize () {
    map = new nostra.maps.Map("map", {
        id: "mapTest",
        logo: false,
        scalebar: false,
        basemap: "streetmap",
        slider: false,
        level: 15,
        lat: 13.722944,
        lon: 100.530449,
        country: 'TH'
    });
}

function onChangeStreetmap(id) {
    activeButton(id)
    const country = document.getElementById('country').value;

    map.removeAllLayers();
    map.country = country;

    let streetMapLayer = new nostra.maps.layers.StreetMap(map);
    map.addLayer(streetMapLayer);
}

function onChangeOpenstreetmap(id) {
    activeButton(id)
    const country = document.getElementById('country').value;

    map.removeAllLayers();
    map.country = country;

    let openStreetMap = new nostra.maps.layers.OpenStreetMap(map);
    map.addLayer(openStreetMap);
}

function onChangeImagery(id) {
    activeButton(id)
    const country = document.getElementById('country').value;

    map.removeAllLayers();
    map.country = country;

    let imageryLayer = new nostra.maps.layers.Imagery(map);
    map.addLayer(imageryLayer);
}

function onChangeHybridline(id) {
    /**
     * support thailand only
     */

    activeButton(id)
    map.removeAllLayers();
    map.country = "TH";

    let imageryLayer = new nostra.maps.layers.Imagery(map);
    map.addLayer(imageryLayer);

    let hybridLineLayer  = new nostra.maps.layers.HybridLine(map);
    map.addLayer(hybridLineLayer);

}

function onChangePremiumMap(id) {
    activeButton(id)
    const country = document.getElementById('country').value;

    map.removeAllLayers();
    map.country = country;

    let streetMapLayer = new nostra.maps.layers.StreetMap(map);
    map.addLayer(streetMapLayer);

    let premiumMapLayer = new nostra.maps.layers.PremiumMap(map);
    map.addLayer(premiumMapLayer);
}

function onChangeLang(event) {
    if(event.target.value === 'EN')
        nostra.config.Language.setLanguage(nostra.language.E);
    else
        nostra.config.Language.setLanguage(nostra.language.L);
}

function onChangeCountry(event) {
    const country = event.target.value;
    document.getElementById('countryRead').value = country;

    map.country = country;
    map.level = null;
    map.lat = null;
    map.lon = null;

    map.removeAllLayers();
    
    let streetMapLayer = new nostra.maps.layers.StreetMap(map);
    map.addLayer(streetMapLayer);

    activeButton('streetmap')
}

function activeButton (btnId) {
    document.getElementById('streetmap').classList.remove('active');
    document.getElementById('openstreetmap').classList.remove('active');
    document.getElementById('imagery').classList.remove('active');
    document.getElementById('hybridline').classList.remove('active');
    document.getElementById('premiummap').classList.remove('active');

    document.getElementById(btnId).classList.add('active')
}

