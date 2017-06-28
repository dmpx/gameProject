// Game Config Global
var GameConfig = {

    PROD_ENV: true,

    LOG_LEVEL: 3,

    ORIENTATION: 'portrait',

    CONSTRUCTOR: 'VideoPoker',
    SOURCE: [
        "js/game/src/MyGame.js",
        "js/game/src/config/LevelConfig.js",
        "js/game/src/config/gameData.js",
        "js/game/src/utils/GameAssets.js",
        "js/game/src/ui/BuyLevelConfirmation.js",
        "js/game/src/ui/popup.js",
        "js/game/src/ui/LoadingScreen.js",
        "js/game/src/ui/MainMenu.js",
        "js/game/src/ui/CardDeck.js",
        "js/game/src/ui/mainGameScreen.js",
        "js/game/src/ui/miniGame.js",
        "js/game/src/ui/levelSelection.js",
        "js/game/src/ui/buyMoreChips.js",
        "js/game/src/ui/noMoreChipsPopup.js",
        "js/game/src/ui/badgesPopup.js",
        "js/game/src/ui/winningHandPopup.js",
        "js/game/src/ui/AudioPlayer.js",
        "js/game/src/ui/inGamePopup.js",
        "js/game/src/ui/instruction.js",
        "js/game/src/ui/inGameTutorial.js",
        "js/game/src/ui/welcomeScreen.js",
        "js/game/src/ui/levelBadgePopup.js",
        "js/game/src/ui/chipsBadgePopup.js",
        "js/game/src/imagePackJs/Vp1.js",
        "js/game/src/imagePackJs/Vp2.js",
        "js/game/src/imagePackJs/Vp3.js",
        "js/game/src/imagePackJs/Vp4.js",
        "js/game/src/imagePackJs/Vp5.js",
        "js/game/extlib/SparkleEffect.js",
        "js/game/extlib/CWTween-min-0.4.1.js",
        "js/game/extlib/CWFireWorksEffect-min-0.4.1.js",
        "js/game/extlib/MultilineText.js"
        ],

    GAME_ID: 'videopokerparty',
    TITLE: 'Video Poker Party',
    HOST: './',
    PATH: './',
    VERSION: '2.2.1',

    CDN:{
        ENABLED:true
    },

    ADS: {
        GAMEOVER_PLACEMENT_ID: '3049344',
        REPLAY_PLACEMENT_ID: '3049345'
    },

    TGL: {
        VERSION: '1.0'
    },

    TGS: {
        ENABLED: true,
        VERSION: '0.3'
    },

    TGE: {
        ENABLED: true,
        FONT_LOADER: true,
        VERSION: '1.0'
    },

    GoogleAnalytics: {
        ENABLED:    true,
        QA_ID:     '',
        PROD_ID:   'UA-46167320-1',
        LABEL: 'Video Poker Party'
    },

    Quantcast: {
        ENABLED: true
    },

    Flurry: {
        ENABLED:true
    }
};