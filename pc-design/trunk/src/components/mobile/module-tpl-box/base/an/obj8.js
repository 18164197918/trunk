export default {
  info: {
    static: {
      src: '',
    },

    cssObj: {
      self : {
        css: {
          width : '20%',
          height: '50px',
        },
      },
      inner: {
        css     : {
          borderRadius   : '4px',
          color          : 'rgba(255,255,255,1)',
          backgroundImage: 'linear-gradient(180deg, rgba(100,110,136,1), rgba(53,60,88,1))',
          transition     : 'all 0.2s 0s ease',
        },
        hoverCss: {
          border   : '2px solid rgba(255,255,255,1)',
          boxShadow: '0px 0px 6px 2px rgba(100,110,136,1)',
        },
      },
    },

  },
}
