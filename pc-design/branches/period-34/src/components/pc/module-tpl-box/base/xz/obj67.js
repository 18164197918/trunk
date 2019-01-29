export default {
  info: {
    static: {
      svg: `<svg viewBox="25.5 26.5 149 147" preserveAspectRatio="ASPECTRATIO">
            <defs>
              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="25.5" y="26.5" width="100%" height="100%"/>
              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M25.5 26.5v98.667h48.333V173.5H174.5l-149-147z"></path>
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
