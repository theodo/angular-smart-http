import SmartHttp from './smart-http';

var moduleName = 'ngSmartHttp.services';

angular.module(moduleName, [])
    .factory('SmartHttp', SmartHttp.smartHttpFactory);

export default moduleName;
