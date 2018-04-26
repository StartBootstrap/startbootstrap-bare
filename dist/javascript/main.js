(function(){
    var duo_tone_filter = function(){
        var div = document.createElement('div');
        if (isFirefox || isChrome || isSafari ){
            div.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg-filters\">\n" +
                "<filter id=\"duotone_slyceblue\">\n" +
                "    <feColorMatrix type=\"matrix\" result=\"grayscale\"\n" +
                "                   values=\"1 0 0 0 0\n" +
                "              1 0 0 0 0\n" +
                "              1 0 0 0 0\n" +
                "              0 0 0 1 0\" />\n" +
                "\n" +
                "    <feComponentTransfer color-interpolation-filters=\"sRGB\" result=\"duotone_magenta_gold\">\n" +
                "        <feFuncR type=\"table\" tableValues=\"0 0\"></feFuncR>\n" +
                "        <feFuncG type=\"table\" tableValues=\"0.090196078431 0.4\"></feFuncG>\n" +
                "        <feFuncB type=\"table\" tableValues=\"0.203921568627 0.8\"></feFuncB>\n" +
                "        <feFuncA type=\"table\" tableValues=\"0 1\"></feFuncA>\n" +
                "    </feComponentTransfer>\n" +
                "</filter>\n" +
                "</svg>"
        } else {
            document.querySelector('.duotoned').style.opacity = '0.5';
        }
        document.querySelector('body').appendChild(div);
    }


    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    duo_tone_filter();

})()
