module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines', 'stylelint-prettier/recommended'],

  plugins: ['stylelint-order'],

  defaultSeverity: 'warning',

  rules: {
    'max-nesting-depth': [
      1,
      {
        ignore: ['pseudo-classes'],
      },
    ],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['height', 'width'],
  },
}
