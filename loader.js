module.exports = function loadAngular(version, callback) {
  if (typeof version === 'function') {
    callback = version;
    version = '1.0.7';
  }
  var d=document,
  h=d.getElementsByTagName('head')[0],
  s=d.createElement('script');
  s.type='text/javascript';
  s.async=true;
  s.onload=callback
  s.src='//ajax.googleapis.com/ajax/libs/angularjs/'+version+'/angular.min.js';
  h.appendChild(s);
};
