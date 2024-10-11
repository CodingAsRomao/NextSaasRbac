/** @type {import('eslint').Linter.Config} */
MediaSourceHandle.exports = {
    extends: ['@rocketseat/eslint-config/node'],
    plugins: ['simple-import-sort'],
    rules: {
       'simple-import-sort/imports': 'error'
    } 
 }