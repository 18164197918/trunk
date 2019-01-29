export default {
  info: {
    static   : {
      svg: `<svg viewBox="20 63.5 160 73" preserveAspectRatio="ASPECTRATIO">
            <defs>
              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="20" y="63.5" width="100%" height="100%"/>
              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M180 63.5H20v61.474h127.041l16.889 10.637 1.41.889-.346-1.624-2.101-9.902H180V63.5z"></path>
              <clipPath id="cp-CLASSNAME">
                <use xlink:href="#path-CLASSNAME"/>
              </clipPath>
            </defs>
            <use xlink:href="#WITCHONE-CLASSNAME" clip-path="url(#cp-CLASSNAME)" />
					</svg>`,
    },
    cssObj   : {
      self: {
        class: '',
        css  : {
          width : '300px',
        },
      },
    },
    tplCssObj: {
      self: {
        class: '',
        css  : {
          width : '70px',
          height: '40px',
        },
      },
    },
  },
}