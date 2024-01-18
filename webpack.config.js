import path from 'path'
import {execSync as exec} from 'child_process'
import HtmlWebpackPlugin  from 'html-webpack-plugin'

const appsNames = exec(`ls ./apps/`, {encoding: 'utf-8'}).toString()
const mainApp = {index: path.resolve('src', 'index.js')}


const entryPoints = appsNames.split('\n').reduce((acc, currentAppName) => {
    if(!currentAppName) return acc

    const pathApp = {[currentAppName]: path.resolve('apps', currentAppName, 'index.js')}
    return {...acc,  ...pathApp}

},mainApp)


export default {
  entry: entryPoints,
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path:path.resolve('dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
};