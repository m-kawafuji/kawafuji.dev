/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': null,
    'order/properties-alphabetical-order': true,
  },
};

export default stylelintConfig;
