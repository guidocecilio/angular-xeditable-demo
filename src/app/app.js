import angular from 'angular';
import xeditable from 'angular-xeditable';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($scope) {
    $scope.user = {
      name: 'awesome user'
    }
    this.url = 'https://github.com/guidocecilio/angular-xeditable-demo';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['xeditable'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;