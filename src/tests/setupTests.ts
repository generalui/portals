import 'isomorphic-fetch' // polyfill for fetch
import 'raf/polyfill' // polyfill for requestAnimationFrame
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-canvas-mock'

declare var global: any
global.markdownit = require('markdown-it')
global.markdownitSynapse = require('markdown-it-synapse')
global.markdownitSub = require('markdown-it-sub-alt')
global.markdownitSup = require('markdown-it-sup-alt')
global.markdownitCentertext = require('markdown-it-center-text')
global.markdownitSynapseHeading = require('markdown-it-synapse-heading')
global.markdownitSynapseTable = require('markdown-it-synapse-table')
global.markdownitStrikethroughAlt = require('markdown-it-strikethrough-alt')
global.markdownitContainer = require('markdown-it-container')
global.markdownitEmphasisAlt = require('markdown-it-emphasis-alt')
global.markdownitInlineComments = require('markdown-it-inline-comments')
global.markdownitBr = require('markdown-it-br')
global.sanitizeHtml = require('sanitize-html')
global.markdownitMath = require('markdown-it-synapse-math')

configure({ adapter: new Adapter() })

// Line below is used because plotly has a dependency on mapbox-gl
// which requires a browser env and doesn't provide support for headless
// js testing, so we shim the function below.
// View - https://github.com/mapbox/mapbox-gl-js/issues/3436
window.URL.createObjectURL = function() {
  return ''
}
