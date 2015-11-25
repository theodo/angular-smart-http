import SmartHttp from './smart-http';

var moduleName = 'angularSmartHttp.services';

angular.module(moduleName, [])
    .factory('SmartHttp', SmartHttp);

export default moduleName;
