import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/gamajun-modeler.js',
  output: {
    file: 'dist/gamajun-modeler.bundled.js',
    name: 'CustomBpmnJS',
    format: 'umd'
  },
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs(),
    json()
  ]
};