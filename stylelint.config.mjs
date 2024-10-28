/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
  },
};

export default stylelintConfig;
