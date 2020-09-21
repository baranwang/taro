const onAndSyncApis = new Set([
  'clearStorageSync',
  'getBatteryInfoSync',
  'getExtConfigSync',
  'getFileSystemManager',
  'getLaunchOptionsSync',
  'getStorageInfoSync',
  'getStorageSync',
  'getSystemInfoSync',
  'offAccelerometerChange',
  'offAppHide',
  'offAppShow',
  'offAudioInterruptionBegin',
  'offAudioInterruptionEnd',
  'offBLECharacteristicValueChange',
  'offBLEConnectionStateChange',
  'offBluetoothAdapterStateChange',
  'offBluetoothDeviceFound',
  'offCompassChange',
  'offError',
  'offGetWifiList',
  'offGyroscopeChange',
  'offMemoryWarning',
  'offNetworkStatusChange',
  'offPageNotFound',
  'offUnhandledRejection',
  'offUserCaptureScreen',
  'onAccelerometerChange',
  'onAppHide',
  'onAppShow',
  'onAudioInterruptionBegin',
  'onAudioInterruptionEnd',
  'onBLECharacteristicValueChange',
  'onBLEConnectionStateChange',
  'onBeaconServiceChange',
  'onBeaconUpdate',
  'onBluetoothAdapterStateChange',
  'onBluetoothDeviceFound',
  'onCompassChange',
  'onDeviceMotionChange',
  'onError',
  'onGetWifiList',
  'onGyroscopeChange',
  'onMemoryWarning',
  'onNetworkStatusChange',
  'onPageNotFound',
  'onSocketClose',
  'onSocketError',
  'onSocketMessage',
  'onSocketOpen',
  'onUnhandledRejection',
  'onUserCaptureScreen',
  'removeStorageSync',
  'reportAnalytics',
  'setStorageSync'
])

const noPromiseApis = new Set([
  'arrayBufferToBase64',
  'base64ToArrayBuffer',
  'canIUse',
  'createAnimation',
  'createCameraContext',
  'createCanvasContext',
  'createInnerAudioContext',
  'createIntersectionObserver',
  'createInterstitialAd',
  'createLivePlayerContext',
  'createMapContext',
  'createSelectorQuery',
  'createVideoContext',
  'getBackgroundAudioManager',
  'getMenuButtonBoundingClientRect',
  'getRecorderManager',
  'getUpdateManager'
])

const otherApis = new Set([
  'addPhoneContact',
  'authorize',
  'canvasGetImageData',
  'canvasPutImageData',
  'canvasToTempFilePath',
  'checkSession',
  'chooseAddress',
  'chooseImage',
  'chooseInvoiceTitle',
  'chooseLocation',
  'chooseVideo',
  'clearStorage',
  'closeBLEConnection',
  'closeBluetoothAdapter',
  'closeSocket',
  'compressImage',
  'connectSocket',
  'createBLEConnection',
  'downloadFile',
  'getAvailableAudioSources',
  'getBLEDeviceCharacteristics',
  'getBLEDeviceServices',
  'getBatteryInfo',
  'getBeacons',
  'getBluetoothAdapterState',
  'getBluetoothDevices',
  'getClipboardData',
  'getConnectedBluetoothDevices',
  'getConnectedWifi',
  'getExtConfig',
  'getFileInfo',
  'getImageInfo',
  'getLocation',
  'getNetworkType',
  'getSavedFileInfo',
  'getSavedFileList',
  'getScreenBrightness',
  'getSetting',
  'getStorage',
  'getStorageInfo',
  'getSystemInfo',
  'getUserInfo',
  'getWifiList',
  'hideHomeButton',
  'hideShareMenu',
  'hideTabBar',
  'hideTabBarRedDot',
  'loadFontFace',
  'login',
  'makePhoneCall',
  'navigateBack',
  'navigateBackMiniProgram',
  'navigateTo',
  'navigateToBookshelf',
  'navigateToMiniProgram',
  'notifyBLECharacteristicValueChange',
  'hideKeyboard',
  'hideLoading',
  'hideNavigationBarLoading',
  'hideToast',
  'openBluetoothAdapter',
  'openDocument',
  'openLocation',
  'openSetting',
  'pageScrollTo',
  'previewImage',
  'queryBookshelf',
  'reLaunch',
  'readBLECharacteristicValue',
  'redirectTo',
  'removeSavedFile',
  'removeStorage',
  'removeTabBarBadge',
  'requestSubscribeMessage',
  'saveFile',
  'saveImageToPhotosAlbum',
  'saveVideoToPhotosAlbum',
  'scanCode',
  'sendSocketMessage',
  'setBackgroundColor',
  'setBackgroundTextStyle',
  'setClipboardData',
  'setEnableDebug',
  'setInnerAudioOption',
  'setKeepScreenOn',
  'setNavigationBarColor',
  'setNavigationBarTitle',
  'setScreenBrightness',
  'setStorage',
  'setTabBarBadge',
  'setTabBarItem',
  'setTabBarStyle',
  'showActionSheet',
  'showFavoriteGuide',
  'showLoading',
  'showModal',
  'showShareMenu',
  'showTabBar',
  'showTabBarRedDot',
  'showToast',
  'startBeaconDiscovery',
  'startBluetoothDevicesDiscovery',
  'startDeviceMotionListening',
  'startPullDownRefresh',
  'stopBeaconDiscovery',
  'stopBluetoothDevicesDiscovery',
  'stopCompass',
  'startCompass',
  'startAccelerometer',
  'stopAccelerometer',
  'showNavigationBarLoading',
  'stopDeviceMotionListening',
  'stopPullDownRefresh',
  'switchTab',
  'uploadFile',
  'vibrateLong',
  'vibrateShort',
  'writeBLECharacteristicValue'
])

function initPxTransform (config) {
  const {
    designWidth = 700,
    deviceRatio = {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    }
  } = config
  this.config = this.config || {}
  this.config.designWidth = designWidth
  this.config.deviceRatio = deviceRatio
}

export {
  onAndSyncApis,
  noPromiseApis,
  otherApis,
  initPxTransform
}
