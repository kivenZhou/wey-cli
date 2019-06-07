import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log(process.env.NODE_ENV)
  return element;
}

document.body.appendChild(component());
