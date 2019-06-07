import _ from 'lodash';
import Print from './print'
import './../static/css/index.less'
import Imgs from '../static/img/WechatIMG1420.jpeg'

function component() {
  const element = document.createElement('div');
  const pElement = document.createElement('p')
  pElement.innerHTML = '1234'
  const img = new Image()
  img.src = Imgs
  element.appendChild(img)
  element.appendChild(pElement)
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log(process.env.NODE_ENV)
  return element;
}

document.body.appendChild(component());
