export default {
  info: {
    static: {
      svg: `<svg viewBox="20 30.5 160 139" preserveAspectRatio="ASPECTRATIO">
            <defs>
              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="20" y="30.5" width="100%" height="100%"/>
              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M100 30.5l80 139H20l80-139z"></path>
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
          width : '50px',
          height: '50px',
        },
      },
    },
  },
}
