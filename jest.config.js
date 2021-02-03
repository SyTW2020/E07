module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  transformIgnorePatterns: [
    "./node_modules/(?!primevue/.*)"
  ]
}
