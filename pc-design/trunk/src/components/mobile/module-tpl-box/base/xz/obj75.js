export default {
  info: {
    static: {
      svg: `<svg viewBox="20 20 160 160" preserveAspectRatio="ASPECTRATIO">
            <defs>
              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="20" y="20" width="100%" height="100%"/>
              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M100 20l7.105 16.754 10.702-14.736 3.246 17.894 13.684-11.93-.877 18.071 16.052-8.597L145 55l17.544-4.825-8.597 15.965 18.158-.877-12.017 13.684 17.894 3.246-14.736 10.702L180 100l-16.754 7.105 14.736 10.702-17.894 3.246 12.017 13.684-18.158-.877 8.597 16.052L145 145l4.912 17.544-16.052-8.597.877 18.158-13.684-12.017-3.246 17.894-10.702-14.649L100 180l-7.105-16.667-10.702 14.649-3.246-17.894-13.684 12.017.877-18.158-16.052 8.597L55 145l-17.544 4.912 8.597-16.052-18.158.877 12.017-13.684-17.894-3.246 14.736-10.702L20 100l16.754-7.105-14.736-10.702 17.894-3.246-12.017-13.684 18.158.877-8.597-15.965L55 55l-4.912-17.544 16.052 8.597-.877-18.071 13.684 11.93 3.246-17.894 10.702 14.736L100 20z"></path>
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
