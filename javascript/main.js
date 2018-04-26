(function(){
    var svg = document.createElement('div');
    svg.style  = 'display:none';
    svg.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"svg-filters\">\n" +
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
    document.querySelector('body').appendChild(svg);
})()
