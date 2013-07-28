AngularJS Component
===================

This component loads the AngularJS library asynchronously.

Note: AngularJS is exposed globally through `window.angular`.

API
---

#### loadAngular(version, callback)

Loads the AngularJS library asyncrhonously, executing the callback when the
script has finished loading and `window.angular` is available.

    require('angular')('1.0.7', function() {
      console.log(angular);
    });
