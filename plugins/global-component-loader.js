import Vue from 'vue'
import _ from 'lodash'

const components = require.context(
  '@/components/base',
  false,
  /[A-Z]\w+\.(vue)$/
)

_.forEach(components.keys(), (fileName) => {
  const componentConfig = components(fileName)
  let componentName = fileName
    .split('/')
    .pop()
    .split('.')[0]

  componentName = componentName.replace(/([A-Z])/g, '-$1')
  componentName = `b${componentName.toLowerCase()}`

  Vue.component(componentName, componentConfig.default || componentConfig)
})
