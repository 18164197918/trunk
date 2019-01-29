export default {
  info: {
    static: {
      svg: `<svg viewBox="20 20 160 160" preserveAspectRatio="ASPECTRATIO">
            <defs>
              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="20" y="20" width="100%" height="100%"/>
              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M100 20l12.456 17.544 18.158-11.404 4.737 20.878 21.228-3.597-3.597 21.228 20.878 4.737-11.404 18.158L180 100l-17.544 12.456 11.404 18.158-20.878 4.737 3.597 21.228-21.228-3.597-4.737 20.878-18.158-11.404L100 180l-12.456-17.544-18.158 11.404-4.737-20.878-21.228 3.597 3.597-21.228-20.878-4.737 11.404-18.158L20 100l17.544-12.456L26.14 69.386l20.878-4.737-3.597-21.228 21.228 3.597 4.737-20.878 18.158 11.404L100 20z"></path>
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
