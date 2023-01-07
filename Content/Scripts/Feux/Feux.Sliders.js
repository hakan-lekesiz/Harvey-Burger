Feux.Sliders = {
    Props: {},

    Elements: {},

    Current: {},

    ready: function () {
        Feux.Sliders.Actions.init();
    },

    Actions: {
        init: function () {
            Feux.Sliders.Actions.owlCarouselType01();
        },

        owlCarouselType01: function () {
            $(".owl-carousel.slide-type-01.slide-item-count-5").owlCarousel({
                loop: true,
                lazyLoad: true,
                center: false,
                dots: false,
                touchDrag: true,
                responsiveClass: true,
                autoWidth: true,
                nav: false,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 12,
                    },
                    768: {
                        items: 4,
                        margin: 16,
                    },
                    1300: {
                        items: 5,
                        margin: 20,
                    },
                }
            });
        },
    },

};

$(function () {
    Feux.Sliders.ready();
});

