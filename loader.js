module.exports = function loadAngular(version, opts, callback) {
  var defaults = {
    async: true
  };
  for (var opt in defaults) {
    if (!opts[opt]) {
      opts[opt] = defaults[opt];
    }
  }
  var d=document,
  h=d.getElementsByTagName('head')[0],
  s=d.createElement('script');
  s.type='text/javascript';
  s.async=opts.async;
  s.onload=callback
  s.src='//ajax.googleapis.com/ajax/libs/angularjs/'+version+'/angular.min.js';
  h.appendChild(s);
};
