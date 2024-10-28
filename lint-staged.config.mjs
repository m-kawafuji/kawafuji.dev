/** @type {import('lint-staged').Config} */
const lintStagedConfig = {
  '*.scss': 'stylelint --fix',
  '*.{ts,tsx}': 'next lint --fix --file',
  '*.{js,mjs,ts,tsx,scss,json}': 'prettier --write',
};

export default lintStagedConfig;
