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
                loop: false,
                lazyLoad: true,
                center: false,
                dots: false,
                touchDrag: true,
                responsiveClass: true,
                autoWidth: true,
                nav: false,
                autoplay: true,
                autoplayTimeout: 10000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 9,
                    },
                    768: {
                        items: 4,
                        margin: 16,
                    },
                    1300: {
                        items: 4,
                        margin: 22,
                    },
                }
            });
        },
    },
    PlayVideo: function (arg) {

        var elem = document.querySelectorAll('#video-change-container a');
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove("active");
        }

        clickedItem = arg.sender;
        clickedItem.classList.add("active");

        var videoDiv = document.getElementById("video-div");
        var getVideoSource = document.getElementById("video-source");
        var videoChanger = arg.sender.getAttribute("data-video-src");
        getVideoSource.setAttribute('src', videoChanger)

        videoDiv.load();
        videoDiv.play();
        var vidTitleChanger = clickedItem.querySelector('h6').innerHTML;
        var vidDescChanger = clickedItem.querySelector('p').innerHTML;
        var vidTitle = document.getElementById("video-header");
        var vidDesc = document.getElementById("video-desc");

        vidTitle.innerHTML = vidTitleChanger;
        vidDesc.innerHTML = vidDescChanger;

    },
    ShowUygunFiyatDiv: function myfunction() {
        uygunFiyatDiv = document.getElementById("uygun-fiyat-div");
        uygunFiyatDiv.style.opacity = "1";
        uygunFiyatDiv.style.zIndex = "11";
    },
    ShowUygunFiyatDiv2: function myfunction() {
        uygunFiyatDiv = document.getElementById("uygun-fiyat-div-02");
        uygunFiyatDiv.style.opacity = "1";
        uygunFiyatDiv.style.zIndex = "11";
    },
    HideUygunFiyatDiv: function myfunction() {
        uygunFiyatDiv = document.getElementById("uygun-fiyat-div");
        uygunFiyatDiv.style.opacity = "0";
        uygunFiyatDiv.style.zIndex = "-111";
    },
    HideUygunFiyatDiv2: function myfunction() {
        uygunFiyatDiv = document.getElementById("uygun-fiyat-div-02");
        uygunFiyatDiv.style.opacity = "0";
        uygunFiyatDiv.style.zIndex = "-111";
    },
    CloseCookiescontainer: function () {
        var cookiesContainer = document.getElementById("cookiesContainer");
        cookiesContainer.style.display = "none";
    },
    copyText: function (sender) {
        var text = sender.getAttribute("data-value");
        if (navigator.userAgent.match(/ipad|iphone/i)) {
            copyToClipboard(text);
            $(sender.parentNode.querySelector(".c-unit-03-B")).fadeIn();

            setTimeout(function () {
                $(sender.parentNode.querySelector(".c-unit-03-B")).fadeOut();
            }, 750);
        }
        else {
           
            if (window.clipboardData && window.clipboardData.setData) {
                // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
                window.clipboardData.setData("Text", text);
                alert("IBAN No Kopyalandı: " + text);
                $(sender.parentNode.querySelector(".c-unit-03-B")).fadeIn();

                setTimeout(function () {
                    $(sender.parentNode.querySelector(".c-unit-03-B")).fadeOut();
                }, 3500);


            }
            else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                var textarea = document.createElement("textarea");
             
                textarea.textContent = text;
                textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
                document.body.appendChild(textarea);
                textarea.select();

                try {
                                  
                    document.execCommand("copy");  // Security exception may be thrown by some browsers.
                    $(sender.parentNode.querySelector(".c-unit-03-B")).fadeIn();

                    setTimeout(function () {
                        $(sender.parentNode.querySelector(".c-unit-03-B")).fadeOut();
                    }, 750);
                }
                catch (ex) {
                    console.warn("Copy to clipboard failed.", ex);
                    prompt("Copy to clipboard: Ctrl+C, Enter", text);
                }
                finally {
                    document.body.removeChild(textarea);
                }
            }
        }
        

    },
    datePicker: function () {
        var x = document.getElementById("dateOfBirth");
        x.setAttribute("value", x.value);
    },
    toggleElem: function (sender, className, parentElemSelector) {
        var parentElem = findAncestor(sender, parentElemSelector);
        parentElem.classList.toggle(className);

    },

    citizenIdAuth: function (sender) {
        value = sender.value;
        if (value === '') {
            document.getElementById("tc-svg").classList.remove("d-none");
            document.getElementById("tc-svg").classList.add("d-none");
            

        }

        if (value.length === 10) { //vergi no ise
            document.getElementById("tc-svg").classList.add("d-none");
            document.getElementById("tc-svg").classList.remove("d-none");
          

        }
        else if (value.length === 11) { //tc no ise
            value = value.toString();
            var isEleven = /^[0-9]{11}$/.test(value);
            var totalX = 0;
            for (var i = 0; i < 10; i++) {
                totalX += Number(value.substr(i, 1));
            }
            var isRuleX = totalX % 10 == value.substr(10, 1);
            var totalY1 = 0;
            var totalY2 = 0;
            for (var i = 0; i < 10; i += 2) {
                totalY1 += Number(value.substr(i, 1));
            }
            for (var i = 1; i < 10; i += 2) {
                totalY2 += Number(value.substr(i, 1));
            }
            var isRuleY = ((totalY1 * 7) - totalY2) % 10 == value.substr(9, 0);
           
            if (isEleven && isRuleX && isRuleY) {
               
                document.getElementById("tc-svg").classList.add("d-none");
                document.getElementById("tc-svg").classList.remove("d-none");

            }
            if (!isEleven || !isRuleX || !isRuleY) {
               
                document.getElementById("tc-svg").classList.remove("d-none");
                document.getElementById("tc-svg").classList.add("d-none");
            }
            
        }
        else {
            document.getElementById("tc-svg").classList.remove("d-none");
            document.getElementById("tc-svg").classList.add("d-none");

        }
    },
};

$(function () {
    Feux.Sliders.ready();
});

function copyToClipboard(text) {
    var textarea;
    var result;

    try {
        textarea = document.createElement('textarea');
        textarea.setAttribute('readonly', true);
        textarea.setAttribute('contenteditable', true);
        textarea.style.position = 'fixed'; // prevent scroll from jumping to the bottom when focus is set.
        textarea.value = text;

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        var range = document.createRange();
        range.selectNodeContents(textarea);

        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);

        textarea.setSelectionRange(0, textarea.value.length);
        result = document.execCommand('copy');
    } catch (err) {
        console.error(err);
        result = null;
    } finally {
        document.body.removeChild(textarea);
    }

    // manual copy fallback using prompt
    if (!result) {
        var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        var copyHotkey = isMac ? '⌘C' : 'CTRL+C';
        result = prompt(`Press ${copyHotkey}`, text); // eslint-disable-line no-alert
        if (!result) {
            return false;
        }
    }

    return true;
}

