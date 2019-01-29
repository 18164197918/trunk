export default {
  info: {
    static: {
      svg: `<svg viewBox="20 41 160 126" preserveAspectRatio="ASPECTRATIO">
            <defs>
              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="20" y="41" width="100%" height="100%"/>
              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M180 49.873L171.123 41H28.876L20 49.873v108.255L28.876 167h142.247l8.877-8.872V49.873z"></path>
              <clipPath id="cp-CLASSNAME">
                <use xlink:href="#path-CLASSNAME"/>
              </clipPath>
            </defs>
            <use xlink:href="#WITCHONE-CLASSNAME" clip-path="url(#cp-CLASSNAME)" />
					</svg>`,
    },
    tplCssObj: {
      self: {
        class: '',
        css  : {
          width: '50px',
          height:'50px',
        },
      },
    },
  },
}
