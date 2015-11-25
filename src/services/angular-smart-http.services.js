import SmartHttp from './smart-http';
import Storage from './storage';

var moduleName = 'ngSmartHttp.services';

angular.module(moduleName, [])
  .factory('SmartHttp', SmartHttp.smartHttpFactory)
  .factory('Storage', Storage.storageFactory);

export default moduleName;
