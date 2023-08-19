export const theme = Object.freeze({
  color: {
    disabled: '#dedede',
    main: '#64b3de',
    gray: '#adadad'
  },

  convertHexToRGBA: (hexCode, opacity = 1) => {
    try {
      let hex = hexCode.replace('#', '');

      if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
      }

      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      if (opacity > 1 && opacity <= 100) {
        opacity = opacity / 100;
      }

      return `rgba(${r},${g},${b},${opacity})`;
    } catch (err) {
      console.log(err);
      return `#fff`;
    }
  }
});
