
var map;

const mapStyle = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];

var markerIconCenter = "/Content/Visuals/center-marker.png";
var markerIcon = "/Content/Visuals/marker.png";
var centerCords = { lat: 40.895752, lng: 29.226166 };
var InforObj = [];

var markerList = [
    {
        name: "Pendik Metro Plus Ağız ve Diş Sağlığı Kliniği",
        info: "%40 indirim’",
        link: "https://goo.gl/maps/iE6y2gnac4dRty8RA",
        coords: { lat: 40.895197, lng: 29.227047 } 
    },
    {
        name: "Sportial Club Kartal",
        info: "",
        link: "https://goo.gl/maps/iFVUGkRjrPLUaMAu6",
        coords: { lat: 40.898048397755254, lng: 29.16940926370686 } 
    },
    {
        name: "Hazende Izgara",
        info: "",
        link: "https://goo.gl/maps/igyF1qXpkpCTqrXX8",
        coords: { lat: 40.892813832028985, lng: 29.227990225446845 } 
    },

    {
        name: "Mareşal Fevzi Çakmak Camii",
        info: "",
        link: "https://goo.gl/maps/ED4TsqHwHGUwcY1g6",
        coords: { lat: 40.891967004587755, lng: 29.221170776303076 } 
    },

    {
        name: "Ömür Eczanesi",
        info: "",
        link: "https://goo.gl/maps/iFVUGkRjrPLUaMAu6",
        coords: { lat: 40.898048397755254, lng: 29.16940926370686 } 
    },
     {
        name: "Yakacık/Adnan Kahveci Metro Durağı",
        info: "",
        link: "https://goo.gl/maps/nCEob1eCyMwNRu1Y6",
        coords: { lat: 40.896749506751796, lng: 29.2269520852156 } 
    },
    {
        name: "Burger King",
        info: "",
        link: "https://goo.gl/maps/iJKvqa6JEeKkw9eb9",
        coords: { lat: 40.90109345145661, lng: 29.218391193308104 }
    },
    {
        name: "Balkabağı Pasta & Cafe",
        info: "",
        link: "https://goo.gl/maps/iJKvqa6JEeKkw9eb9",
        coords: { lat: 40.893229115405, lng: 29.227972269157558 } 
    },
    {
        name: "Teda Market",
        info: "",
        link: "https://goo.gl/maps/wyGF9C5LJ37pFZ8n7",
        coords: { lat: 40.893301937345264, lng: 29.225408098020903 } 
    },

];

function closeOtherInfo() {
    if (InforObj.length > 0) {
        /* detach the info-window from the marker ... undocumented in the API docs */
        InforObj[0].set("marker", null);
        /* and close it */
        InforObj[0].close();
        /* blank the array */
        InforObj.length = 0;
    }
}

function addMarker() {
    for (var i = 0; i < markerList.length; i++) {

        var _marker = markerList[i]
        var customInfoWindow =
            '<div class="infoWindow">' +
            '<div class="info">' +
            '<h3>' + _marker.name + '</h3>' +
            '<p>' + _marker.info + '</p>' +
            '</div>' +
            '<a href="' + _marker.link + '" target="_blank" class="link">' +
            '<img src="/Content/Visuals/route.png">' +
            '</a>' +
            '</div>';

        const marker = new google.maps.Marker({
            position: _marker.coords,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: markerIcon
        });

        const infowindow = new google.maps.InfoWindow({
            content: customInfoWindow
        });

        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InforObj[0] = infowindow;
        });

        marker.addListener('mouseover', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InforObj[0] = infowindow;
        });

        // marker.addListener('mouseout', function () {
        //     closeOtherInfo();
        //     infowindow.close();
        // });

        map.addListener("click", (e) => {
            closeOtherInfo();
        });


    }


}

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: centerCords,

        scaleControl: false,
        draggable: true,
        scrollwheel: false,
        zoomControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        navigationControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        disableDoubleClickZoom: false,
        panControl: false,
        overviewMapControl: true,
        overviewMapControlOptions: { opened: false, },
        rotateControl: false,
        fullscreenControl: false,
        fullscreenControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },

        styles: mapStyle
    });

    // metatime merkez marker
    new google.maps.Marker({
        position: centerCords,
        map: map,
        icon: markerIconCenter
    });

    addMarker();
}

window.initMap = initMap;