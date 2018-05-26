module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: 'airbnb-base',
  rules: {
    // Personal Preferences below ... proffessionally may change 
    'prefer-const': 0, // Starting with `let` in Value types (Primitives) and `const` for Reference types.
    'arrow-body-style': 0, // Love Arrow Functions but not a fan of single liner functions!
    'func-names': 0, // Mainly for old school constructor functions
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-trailing-spaces': 0,
    'no-unused-expressions': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    // Never use these last 3 in a real application... I mean never!
    'no-alert': 0,
    'no-console': 0,
    'no-debugger': 0,
  },
};
