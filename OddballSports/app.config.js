import 'dotenv/config';

export default {
    name: 'OddballSports',
    version: '0.1',
    extra: {
        enableComments: process.env.COOLAPP_COMMENTS === 'true',
    },
    "ios": {
        "bundleIdentifier": "com.drhoffma.oddballsports"
    },
    "scheme": "obs"
};