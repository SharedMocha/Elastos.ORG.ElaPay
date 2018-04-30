// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

export const VERSION = process.env.VERSION;
export const DEBUG_INFO_ENABLED: boolean = !!process.env.DEBUG_INFO_ENABLED;
// export const SERVER_API_URL = 'http://103.200.5.47:3002/';
// export const SERVER_API_URL = 'http://192.168.187.132:3002/';
export const SERVER_API_URL = 'http://207.148.119.222:3002/';
export const BUILD_TIMESTAMP = process.env.BUILD_TIMESTAMP;
