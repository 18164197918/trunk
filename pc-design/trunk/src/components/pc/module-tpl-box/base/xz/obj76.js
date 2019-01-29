export default {
  info: {
    static: {
      svg: `<svg viewBox="20 20 160 160" preserveAspectRatio="ASPECTRATIO">
            <defs>
              <image id="img-CLASSNAME" xlink:href="SRC" preserveAspectRatio="xMidYMid slice" x="20" y="20" width="100%" height="100%"/>
              <path id="path-CLASSNAME" preserveAspectRatio="xMidYMid slice" d="M25.707 129.542l6.675-17.143L20 98.814l12.813-13.261-6.245-17.251 16.797-7.332.969-18.436 18.304-.324 7.86-16.604 17.12 6.685L101.184 20l13.244 12.722 17.227-6.253 7.322 16.927 18.412.863.323 18.329 16.581 7.87-6.675 17.143L180 101.186l-12.813 13.261 6.245 17.251-16.904 7.332-.862 18.436-18.304.324-7.86 16.604-17.12-6.685L98.816 180l-13.244-12.722-17.227 6.253-7.322-16.819-18.412-.971-.323-18.329-16.581-7.87z"></path>
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
