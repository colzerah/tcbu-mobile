import axios from 'axios';
import { Platform } from 'react-native';
import { getBundleId, getDeviceNameSync } from 'react-native-device-info';

const api = axios.create();

// Parametros padrões
api.defaults.headers.common.platform = Platform.OS;
api.defaults.headers.common.remoteId = 'unkown';
api.defaults.headers.common.deviceName = getDeviceNameSync();
api.defaults.headers.common.appId = getBundleId();
api.defaults.maxBodyLength = 10000000;
api.defaults.maxContentLength = 10000000;

export default api;
