export default {
  info: {
    static: {
      svg: `<svg viewBox="20 20 160 160" preserveAspectRatio="ASPECTRATIO">
            <defs>
              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="20" y="20" width="100%" height="100%"/>
              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M162.848 108.274L180 78.564l-29.709-17.153-8.88-33.138-33.138 8.88L78.565 20 61.411 49.709l-33.138 8.88 8.88 33.137L20 121.436l29.71 17.153 8.88 33.137 33.137-8.88L121.438 180l17.153-29.71 33.138-8.88-8.881-33.136z"></path>
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
