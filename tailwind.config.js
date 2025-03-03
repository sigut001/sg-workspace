// tailwind.config.ts
const tinycolor = require('tinycolor2');

// Importiere das Farbschema über ES6-Syntax
const {
  customColorScheme,
} = require('./apps/project-001-kay-trabandt/src/app/config-files/color-scheme.config'); // Pfad zur Farbkonfigurationsdatei

/**
 * Generates color variants for a given color.
 * @param {string} color - The base hex color code.
 * @returns {object} An object with color variants from 100 to 900.
 */
function generateColorVariants(color) {
  const variants = {
    100: tinycolor(color).lighten(20).toString(),
    200: tinycolor(color).lighten(15).toString(),
    300: tinycolor(color).lighten(10).toString(),
    400: tinycolor(color).lighten(5).toString(),
    500: color,
    600: tinycolor(color).darken(5).toString(),
    700: tinycolor(color).darken(10).toString(),
    800: tinycolor(color).darken(15).toString(),
    900: tinycolor(color).darken(20).toString(),
  };
  console.log(variants);
  return variants;
}

module.exports = {
  content: [
    './apps/**/*.ts',
    './apps/**/*.html',
    './libs/**/*.ts',
    './libs/**/*.html',
    './global/**/*.css',
    '!./node_modules/**/*',
  ],

  theme: {
    extend: {
      colors: {
        white: customColorScheme.white,
        primary: generateColorVariants(customColorScheme.primary),
        action: generateColorVariants(customColorScheme.action),
        secondary: generateColorVariants(customColorScheme.secondary),
        success: generateColorVariants(customColorScheme.success),
        error: generateColorVariants(customColorScheme.error),
        warning: generateColorVariants(customColorScheme.warning),
        info: generateColorVariants(customColorScheme.info),
        hover: generateColorVariants(customColorScheme.hover),
        active: generateColorVariants(customColorScheme.active),
        disabled: generateColorVariants(customColorScheme.disabled),
        accent1: generateColorVariants(customColorScheme.accent1),
        textDark: customColorScheme.textDark,
        textMedium: customColorScheme.textMedium,
        textLight: customColorScheme.textLight,
        textMuted: customColorScheme.textMuted,
      },
      textShadow: {
        'custom-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      });
    },
  ],
};
