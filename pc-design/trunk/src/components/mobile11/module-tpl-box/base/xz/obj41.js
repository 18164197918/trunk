export default {
  info: {
    static: {
      svg: `<svg viewBox="14.5 29 171 142" preserveAspectRatio="ASPECTRATIO">
            <defs>
              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="14.5" y="29" width="100%" height="100%"/>
              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M100 29l85.5 142h-47.333L100 103.522 61.833 171H14.5L100 29z"></path>
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
