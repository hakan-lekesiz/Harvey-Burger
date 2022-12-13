Feux.Layout = {

    Actions: {

        clipBoard: function (arg) {

            var event = arg.ev;
            event.preventDefault();

            var $temp = $("<input>");
            var $url = arg.sender.href;
            $("body").append($temp);
            $temp.val($url).select();
            document.execCommand("copy");
            $temp.remove();
            arg.sender.querySelector("span").innerHTML = arg.sender.getAttribute("data-copied-text");

            setTimeout(function () {
                arg.sender.querySelector("span").innerHTML = arg.sender.getAttribute("data-copy-text");
            }, 3000);
        },
        getGoogleReviews: function () {
            var x = document.createElement("div");
            var map = new google.maps.Map(x, {
                center: { lat: -33.866, lng: 151.196 },
                zoom: 15,
            });

            var request = {
                placeId: 'ChIJhbOnGRHayhQR0WgVpY3VOFM',
                //fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
            };

            var service = new google.maps.places.PlacesService(map);
            service.getDetails(request, callback);

            function callback(place, status) {
                for (var i = 0; i < place.reviews.length; i++) {
                    var review = place.reviews[i];


                }
            }

        },
        bottomToTopAnimateTexts: function () {
            var elems = document.querySelectorAll("[data-bottom-to-top-animate]");
            if (elems.length > 0) {
                var activeElem = document.querySelector("[data-bottom-to-top-animate].active");
                var activeElIndex = parseInt(activeElem.getAttribute("data-bottom-to-top-animate"));
                var nextElem = null;
                if (activeElIndex < elems.length) {
                    nextElem = document.querySelector("[data-bottom-to-top-animate='" + (activeElIndex + 1) + "']");
                }
                else {
                    nextElem = elems[0];
                }

                activeElem.classList.remove("active");
                activeElem.classList.add("up");
                nextElem.classList.add("active");

                setTimeout(function () {
                    activeElem.classList.remove("up");
                }, 500);

            }
        }
    },
};

function initReviews() {
    Feux.Layout.Actions.getGoogleReviews();
}

var Offer = {

    submit: function (arg) {

        arg.ev.preventDefault();

        // Disable sender to avoid multiple clicks from user.
        var sender = arg.sender;
        if (sender.disabled) { return false; }
        sender.disabled = true;

        setTimeout(function () {
            sender.disabled = false;
        }, 100);
        // End

        var form = findAncestor(arg.sender, "form");

        //-> Validate form that is related to sender button id
        var isValid = $(form).valid();

        if (!isValid) {
            sender.disabled = false;
            return false;
        }

    }
}


//her 10 saniyede bir text değiştirliyor
setInterval(Feux.Layout.Actions.bottomToTopAnimateTexts, 5000);

