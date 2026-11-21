export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "loading"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "menu"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "loading-title"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "menu-title"
                            ]
                        ],
                        {
                            fontSize: "13px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "loading-label"
                            ]
                        ],
                        {
                            fontSize: "5px",
                            color: "#b8c7d1",
                            marginTop: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "menu-subtitle"
                            ]
                        ],
                        {
                            fontSize: "5px",
                            color: "#b8c7d1",
                            marginTop: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "loading-bar"
                            ]
                        ],
                        {
                            width: "80px",
                            height: "6px",
                            marginTop: "14px",
                            backgroundColor: "#26343e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "loading-fill"
                            ]
                        ],
                        {
                            height: "6px",
                            backgroundColor: "#4caf50"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "loading-percent"
                            ]
                        ],
                        {
                            fontSize: "5px",
                            color: "#9fb7c6",
                            marginTop: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "play-button"
                            ]
                        ],
                        {
                            width: "74px",
                            height: "30px",
                            marginTop: "18px",
                            borderRadius: "6px",
                            backgroundColor: "#4caf50",
                            fontSize: "9px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "settings-button"
                            ]
                        ],
                        {
                            width: "74px",
                            height: "24px",
                            marginTop: "8px",
                            borderRadius: "5px",
                            backgroundColor: "#344955",
                            fontSize: "6px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "extra"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "worlds-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "end-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "slots-confirm-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "victory-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#171026",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#b99cff",
                            borderRightColor: "#b99cff",
                            borderBottomColor: "#b99cff",
                            borderLeftColor: "#b99cff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "map-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "tools-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "quests-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ach-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "craft-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "workbench-screen"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "craft-info"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "12px",
                            marginTop: "6px",
                            fontSize: "4px",
                            color: "#9fb7c6",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "craft-btn"
                            ]
                        ],
                        {
                            width: "96px",
                            height: "22px",
                            marginTop: "4px",
                            borderRadius: "4px",
                            backgroundColor: "#4b6f8a",
                            fontSize: "4px",
                            color: "#ffffff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "craft-status"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "16px",
                            marginTop: "6px",
                            fontSize: "5px",
                            color: "#ffffff",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "map-text"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "120px",
                            fontSize: "5px",
                            color: "#ffffff",
                            textAlign: "center",
                            whiteSpace: "pre",
                            lineHeight: "9px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "quest-text"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "120px",
                            fontSize: "5px",
                            color: "#ffffff",
                            textAlign: "center",
                            whiteSpace: "pre",
                            lineHeight: "9px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "map-hint"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "12px",
                            fontSize: "4px",
                            color: "#9fb7c6",
                            textAlign: "center",
                            marginTop: "3px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "settings"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "settings-panel"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "210px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "section-label"
                            ]
                        ],
                        {
                            fontSize: "5px",
                            color: "#8fa4b3",
                            marginBottom: "6px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "section-btn"
                            ]
                        ],
                        {
                            width: "78px",
                            height: "22px",
                            marginTop: "3px",
                            borderRadius: "5px",
                            backgroundColor: "#344955",
                            fontSize: "6px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "setting-btn"
                            ]
                        ],
                        {
                            width: "88px",
                            height: "22px",
                            marginTop: "3px",
                            borderRadius: "5px",
                            backgroundColor: "#4b6f8a",
                            fontSize: "5px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "setting-toggle"
                            ]
                        ],
                        {
                            width: "82px",
                            height: "30px",
                            marginTop: "18px",
                            borderRadius: "5px",
                            backgroundColor: "#4b6f8a",
                            fontSize: "7px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "settings-info"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "14px",
                            marginTop: "8px",
                            fontSize: "5px",
                            color: "#9fb7c6",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "slots"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "slot-button"
                            ]
                        ],
                        {
                            width: "78px",
                            height: "28px",
                            marginTop: "12px",
                            borderRadius: "5px",
                            backgroundColor: "#344955",
                            fontSize: "7px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "slot-info"
                            ]
                        ],
                        {
                            height: "10px",
                            marginTop: "4px",
                            fontSize: "5px",
                            color: "#9fb7c6",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "worlds-info"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "10px",
                            marginTop: "2px",
                            fontSize: "4px",
                            color: "#9fb7c6",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "nether-arrow"
                            ]
                        ],
                        {
                            width: "92px",
                            height: "20px",
                            marginTop: "3px",
                            borderRadius: "4px",
                            backgroundColor: "#4b3033",
                            fontSize: "5px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "end-arrow"
                            ]
                        ],
                        {
                            width: "92px",
                            height: "20px",
                            marginTop: "3px",
                            borderRadius: "4px",
                            backgroundColor: "#4b3c66",
                            fontSize: "5px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "nether-blocks"
                            ]
                        ],
                        {
                            width: "104px",
                            height: "49px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "end-blocks"
                            ]
                        ],
                        {
                            width: "104px",
                            height: "49px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-title"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "18px",
                            marginLeft: "0px",
                            marginRight: "0px",
                            fontSize: "7px",
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "victory-stars"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "20px",
                            fontSize: "9px",
                            fontWeight: "bold",
                            color: "#f5d779",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "victory-title"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "36px",
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "#f5d779",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "victory-subtitle"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "17px",
                            fontSize: "6px",
                            fontWeight: "bold",
                            color: "#ffffff",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "victory-progress"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "20px",
                            marginTop: "12px",
                            fontSize: "5px",
                            color: "#b99cff",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "victory-menu"
                            ]
                        ],
                        {
                            width: "80px",
                            height: "30px",
                            marginTop: "13px",
                            borderRadius: "6px",
                            backgroundColor: "#6b4acb",
                            fontSize: "8px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "inventory"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "inv-row"
                            ]
                        ],
                        {
                            width: "104px",
                            height: "23px",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "inv-btn"
                            ]
                        ],
                        {
                            width: "24px",
                            height: "20px",
                            marginLeft: "1px",
                            marginRight: "1px",
                            borderRadius: "3px",
                            backgroundColor: "#344955",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "inv-name"
                            ]
                        ],
                        {
                            width: "23px",
                            height: "9px",
                            fontSize: "3px",
                            color: "#ffffff",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "inv-count"
                            ]
                        ],
                        {
                            width: "23px",
                            height: "7px",
                            marginTop: "1px",
                            fontSize: "4px",
                            fontWeight: "bold",
                            color: "#ffcf70",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "close-inv"
                            ]
                        ],
                        {
                            width: "72px",
                            height: "22px",
                            marginTop: "8px",
                            borderRadius: "5px",
                            backgroundColor: "#8b3d3d",
                            fontSize: "6px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chest"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chest-slot"
                            ]
                        ],
                        {
                            width: "74px",
                            height: "38px",
                            marginTop: "12px",
                            borderRadius: "5px",
                            backgroundColor: "#5b3a20",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chest-block"
                            ]
                        ],
                        {
                            fontSize: "7px",
                            color: "#ffffff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chest-count"
                            ]
                        ],
                        {
                            fontSize: "10px",
                            color: "#ffcf70",
                            marginTop: "3px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chest-row"
                            ]
                        ],
                        {
                            width: "104px",
                            height: "24px",
                            marginTop: "10px",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chest-btn"
                            ]
                        ],
                        {
                            width: "42px",
                            height: "20px",
                            marginLeft: "2px",
                            marginRight: "2px",
                            borderRadius: "4px",
                            backgroundColor: "#8b5a2b",
                            fontSize: "5px",
                            color: "#ffffff",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "chest-hint"
                            ]
                        ],
                        {
                            width: "100px",
                            height: "12px",
                            marginTop: "6px",
                            fontSize: "4px",
                            color: "#9fb7c6",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "game"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "260px",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: "#101820"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hud"
                            ]
                        ],
                        {
                            width: "106px",
                            height: "13px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#17232d"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title"
                            ]
                        ],
                        {
                            fontSize: "8px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hud-line"
                            ]
                        ],
                        {
                            fontSize: "5px",
                            color: "#d9e2e8",
                            marginTop: "1px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "world"
                            ]
                        ],
                        {
                            width: "96px",
                            height: "132px",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            backgroundColor: "#78b6e8"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "cell"
                            ]
                        ],
                        {
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "status"
                            ]
                        ],
                        {
                            width: "104px",
                            height: "10px",
                            fontSize: "5px",
                            color: "#ffffff",
                            textAlign: "center",
                            backgroundColor: "#17232d"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "controls-row"
                            ]
                        ],
                        {
                            width: "104px",
                            height: "19px",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "blocks-row"
                            ]
                        ],
                        {
                            width: "104px",
                            height: "19px",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "control"
                            ]
                        ],
                        {
                            width: "33px",
                            height: "17px",
                            marginLeft: "1px",
                            marginRight: "1px",
                            borderRadius: "3px",
                            backgroundColor: "#344955",
                            fontSize: "5px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "block-btn"
                            ]
                        ],
                        {
                            width: "25px",
                            height: "17px",
                            marginLeft: "1px",
                            marginRight: "1px",
                            borderRadius: "2px",
                            backgroundColor: "#25323b",
                            fontSize: "4px",
                            color: "#ffffff"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var COLS = 20;
                    var ROWS = 30;
                    var WORLD_W = 96;
                    var WORLD_H = 129;
                    var ZOOM_LEVELS = [
                        15,
                        18,
                        21
                    ];
                    var SKY = "#78b6e8";
                    var HIGH_CONTRAST_COLORS = {
                        grass: "#00ff00",
                        dirt: "#b86500",
                        stone: "#d0d0d0",
                        bedrock: "#111111",
                        wood: "#ffb000",
                        leaf: "#00ff55",
                        coal: "#ffffff",
                        iron: "#c8c8ff",
                        gold: "#ffff00",
                        diamond: "#00ffff",
                        sand: "#ffff66",
                        glass: "#baf5ff",
                        brick: "#ff5a45",
                        netherrack: "#ff4b3e",
                        soulSand: "#9a7860",
                        glowstone: "#ffff66",
                        netherBrick: "#ff5068",
                        quartzOre: "#ffffff",
                        blackstone: "#606070",
                        endStone: "#fff6bd",
                        obsidian: "#4b3d68",
                        purpur: "#ff5dff",
                        chorusPlant: "#dfaaff",
                        endBrick: "#bca0dd",
                        endOre: "#ffffff",
                        water: "#0088ff",
                        torch: "#ffff00",
                        chest: "#ff9d00",
                        craftingTable: "#d88a3b"
                    };
                    function makeTile(x, y, type) {
                        return {
                            x: x,
                            y: y,
                            type: type
                        };
                    }
                    function flatTerrainWorld(seed) {
                        var world = [];
                        var heights = [];
                        var x, y;
                        var profile = [
                            13,
                            13,
                            12,
                            12,
                            13,
                            13,
                            14,
                            13,
                            12,
                            12,
                            13,
                            14,
                            13,
                            12,
                            12,
                            13,
                            13,
                            14,
                            13,
                            13
                        ];
                        for(x = 0; x < COLS; x++)heights[x] = profile[(x + seed) % profile.length];
                        for(y = 0; y < ROWS; y++)for(x = 0; x < COLS; x++){
                            var surface = heights[x], type = "air";
                            if (y === surface) type = "grass";
                            else if (y > surface && y <= surface + 2) type = "dirt";
                            else if (y > surface + 2) {
                                type = y === ROWS - 1 ? "bedrock" : "stone";
                                if (y < surface + 7 && (11 * x + 7 * y + seed) % 17 === 0) type = "coal";
                                if (y < surface + 10 && (5 * x + 13 * y + seed) % 29 === 0) type = "iron";
                                if (y < surface + 13 && (17 * x + 3 * y + seed) % 43 === 0) type = "gold";
                                if (y < surface + 16 && (19 * x + 5 * y + seed) % 61 === 0) type = "diamond";
                            }
                            world.push(makeTile(x, y, type));
                        }
                        function put(px, py, t) {
                            if (px < 0 || px >= COLS || py < 0 || py >= ROWS) return;
                            world[py * COLS + px] = makeTile(px, py, t);
                        }
                        for(var cx = 2; cx < COLS - 2; cx++){
                            var s = heights[cx];
                            if ((7 * cx + seed) % 5 === 0) {
                                put(cx, s + 5, "air");
                                put(cx + 1, s + 5, "air");
                                put(cx, s + 6, "air");
                            }
                        }
                        if (7 !== seed) {
                            var lakeX = 9 + 2 * seed % 3;
                            var lakeY = heights[Math.min(COLS - 1, lakeX)];
                            put(lakeX, lakeY, "water");
                            put(lakeX + 1, lakeY, "water");
                            put(lakeX + 2, lakeY, "water");
                            put(lakeX + 1, lakeY - 1, "sand");
                        }
                        var treeXs = [
                            2,
                            6,
                            14,
                            17
                        ];
                        for(var i = 0; i < treeXs.length; i++){
                            var tx = treeXs[i], sy = heights[tx] - 1;
                            put(tx, sy, "wood");
                            put(tx, sy - 1, "wood");
                            put(tx, sy - 2, "wood");
                            put(tx - 1, sy - 2, "leaf");
                            put(tx + 1, sy - 2, "leaf");
                            put(tx, sy - 3, "leaf");
                            put(tx - 1, sy - 3, "leaf");
                            put(tx + 1, sy - 3, "leaf");
                        }
                        return world;
                    }
                    function createWorld() {
                        return flatTerrainWorld(1);
                    }
                    function createHouseWorld() {
                        var world = flatTerrainWorld(2), put = function(x, y, t) {
                            if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return;
                            world[y * COLS + x] = makeTile(x, y, t);
                        };
                        for(var x = 4; x <= 14; x++){
                            put(x, 13, "grass");
                            put(x, 14, "dirt");
                            put(x, 15, "dirt");
                        }
                        for(x = 5; x <= 13; x++){
                            put(x, 12, "wood");
                            put(x, 8, "brick");
                        }
                        for(var y = 8; y <= 12; y++){
                            put(5, y, "wood");
                            put(13, y, "wood");
                        }
                        put(7, 10, "glass");
                        put(11, 10, "glass");
                        put(9, 11, "air");
                        put(9, 12, "air");
                        put(9, 12, "chest");
                        put(6, 9, "torch");
                        put(12, 9, "torch");
                        put(6, 7, "brick");
                        put(7, 7, "brick");
                        put(8, 7, "brick");
                        put(9, 7, "brick");
                        put(10, 7, "brick");
                        put(11, 7, "brick");
                        put(12, 7, "brick");
                        return world;
                    }
                    function createVillageWorld() {
                        var world = flatTerrainWorld(4), put = function(x, y, t) {
                            if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return;
                            world[y * COLS + x] = makeTile(x, y, t);
                        };
                        for(var x = 2; x <= 17; x++){
                            put(x, 13, "grass");
                            put(x, 14, "dirt");
                            put(x, 15, "dirt");
                        }
                        function house(cx) {
                            for(var hx = cx - 2; hx <= cx + 2; hx++){
                                put(hx, 12, "brick");
                                put(hx, 8, "brick");
                            }
                            for(var hy = 8; hy <= 12; hy++){
                                put(cx - 2, hy, "brick");
                                put(cx + 2, hy, "brick");
                            }
                            put(cx, 10, "glass");
                            put(cx, 11, "air");
                            put(cx, 11, "chest");
                            put(cx - 1, 9, "torch");
                            put(cx + 1, 9, "torch");
                        }
                        house(6);
                        house(14);
                        for(x = 9; x <= 11; x++)put(x, 13, "sand");
                        put(10, 12, "water");
                        put(10, 13, "water");
                        return world;
                    }
                    function createMineWorld() {
                        var world = flatTerrainWorld(7), put = function(x, y, t) {
                            if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return;
                            world[y * COLS + x] = makeTile(x, y, t);
                        };
                        for(var y = 9; y <= 20; y++){
                            put(9, y, "air");
                            put(10, y, "air");
                        }
                        for(var x = 7; x <= 12; x++)put(x, 20, "stone");
                        put(9, 9, "torch");
                        put(10, 13, "torch");
                        put(8, 16, "coal");
                        put(11, 17, "iron");
                        put(8, 18, "gold");
                        put(11, 19, "diamond");
                        put(7, 19, "chest");
                        return world;
                    }
                    function createIslandWorld() {
                        var world = [], x, y;
                        for(y = 0; y < ROWS; y++)for(x = 0; x < COLS; x++)world.push(makeTile(x, y, "water"));
                        function put(px, py, t) {
                            if (px < 0 || px >= COLS || py < 0 || py >= ROWS) return;
                            world[py * COLS + px] = makeTile(px, py, t);
                        }
                        for(x = 2; x <= 17; x++)for(y = 12; y <= 16; y++)put(x, y, 12 === y ? "grass" : y >= 15 ? "stone" : "dirt");
                        for(x = 3; x <= 16; x++)put(x, 12, "grass");
                        put(6, 11, "wood");
                        put(6, 10, "wood");
                        put(5, 10, "leaf");
                        put(7, 10, "leaf");
                        put(6, 9, "leaf");
                        put(11, 12, "chest");
                        put(12, 12, "sand");
                        put(13, 12, "sand");
                        put(14, 12, "sand");
                        return world;
                    }
                    function createNetherWorld() {
                        var world = [], x, y;
                        function put(px, py, t) {
                            if (px < 0 || px >= COLS || py < 0 || py >= ROWS) return;
                            world[py * COLS + px] = makeTile(px, py, t);
                        }
                        for(y = 0; y < ROWS; y++)for(x = 0; x < COLS; x++){
                            var type = "air";
                            if (y <= 3 || y >= 15 || 0 === x || x === COLS - 1) type = "netherrack";
                            world.push(makeTile(x, y, type));
                        }
                        for(x = 2; x <= 17; x++){
                            put(x, 13, "netherrack");
                            put(x, 14, "netherrack");
                            put(x, 15, "netherrack");
                        }
                        for(x = 4; x <= 6; x++)put(x, 12, "soulSand");
                        for(x = 14; x <= 16; x++)put(x, 12, "soulSand");
                        for(y = 7; y <= 12; y++){
                            put(3, y, "blackstone");
                            put(16, y, "blackstone");
                        }
                        put(4, 9, "blackstone");
                        put(15, 8, "blackstone");
                        put(6, 4, "glowstone");
                        put(7, 4, "glowstone");
                        put(8, 4, "glowstone");
                        put(7, 5, "glowstone");
                        put(13, 4, "glowstone");
                        put(14, 4, "glowstone");
                        put(13, 5, "glowstone");
                        put(5, 10, "quartzOre");
                        put(6, 10, "quartzOre");
                        put(12, 11, "quartzOre");
                        put(13, 10, "quartzOre");
                        for(x = 9; x <= 12; x++){
                            put(x, 9, "netherBrick");
                            put(x, 10, "netherBrick");
                        }
                        put(9, 8, "netherBrick");
                        put(12, 8, "netherBrick");
                        put(5, 11, "air");
                        put(5, 10, "air");
                        put(6, 11, "air");
                        put(6, 10, "air");
                        return world;
                    }
                    function createEndWorld() {
                        var world = [], x, y;
                        function put(px, py, t) {
                            if (px < 0 || px >= COLS || py < 0 || py >= ROWS) return;
                            world[py * COLS + px] = makeTile(px, py, t);
                        }
                        for(y = 0; y < ROWS; y++)for(x = 0; x < COLS; x++){
                            var type = y >= 15 ? "endStone" : "air";
                            if ((0 === x || x === COLS - 1) && y >= 13) type = "obsidian";
                            world.push(makeTile(x, y, type));
                        }
                        for(x = 2; x <= 6; x++){
                            put(x, 10, "endStone");
                            put(x, 11, "endStone");
                        }
                        for(x = 13; x <= 17; x++){
                            put(x, 9, "endStone");
                            put(x, 10, "endStone");
                        }
                        for(y = 7; y <= 14; y++){
                            put(7, y, "obsidian");
                            put(12, y, "obsidian");
                        }
                        for(x = 8; x <= 11; x++){
                            put(x, 13, "purpur");
                            put(x, 14, "purpur");
                        }
                        put(9, 12, "purpur");
                        put(10, 12, "purpur");
                        put(4, 9, "chorusPlant");
                        put(4, 8, "chorusPlant");
                        put(15, 8, "chorusPlant");
                        put(15, 7, "chorusPlant");
                        put(16, 8, "chorusPlant");
                        put(3, 16, "endOre");
                        put(6, 18, "endOre");
                        put(14, 16, "endOre");
                        put(17, 20, "endOre");
                        put(8, 12, "endBrick");
                        put(11, 12, "endBrick");
                        put(8, 11, "endBrick");
                        put(11, 11, "endBrick");
                        put(3, 14, "air");
                        put(3, 13, "air");
                        put(4, 14, "air");
                        put(4, 13, "air");
                        return world;
                    }
                    function isSolid(type) {
                        return "air" !== type && "water" !== type && "torch" !== type;
                    }
                    function placeable(type) {
                        return 1 === ({
                            dirt: 1,
                            stone: 1,
                            wood: 1,
                            leaf: 1,
                            sand: 1,
                            glass: 1,
                            brick: 1,
                            torch: 1,
                            water: 1,
                            chest: 1,
                            craftingTable: 1,
                            coal: 1,
                            iron: 1,
                            gold: 1,
                            diamond: 1,
                            netherrack: 1,
                            soulSand: 1,
                            glowstone: 1,
                            netherBrick: 1,
                            quartzOre: 1,
                            blackstone: 1,
                            endStone: 1,
                            obsidian: 1,
                            purpur: 1,
                            chorusPlant: 1,
                            endBrick: 1,
                            endOre: 1
                        })[type];
                    }
                    var _default = exports.default = {
                        private: {
                            world: createWorld(),
                            visibleWorld: [],
                            visibleAnimationMask: 0,
                            playerX: 2,
                            playerY: 12,
                            playerVy: 0,
                            selectedX: -1,
                            selectedY: -1,
                            selectedBlock: "dirt",
                            mode: "MINE",
                            status: "Tap blocks to mine",
                            hudLine: "DAY | MINE | dirt x0 | 100%",
                            loading: true,
                            loadingProgress: 0,
                            loadingLabel: "Loading world...",
                            loadingDisplay: "flex",
                            menuDisplay: "none",
                            settingsDisplay: "none",
                            gameDisplay: "none",
                            inventoryDisplay: "none",
                            chestDisplay: "none",
                            extraDisplay: "none",
                            worldsDisplay: "none",
                            victoryDisplay: "none",
                            slotsConfirmDisplay: "none",
                            craftDisplay: "none",
                            workbenchDisplay: "none",
                            mapDisplay: "none",
                            toolsDisplay: "none",
                            questsDisplay: "none",
                            achievementsDisplay: "none",
                            loadingTimer: null,
                            gameTimer: null,
                            dayTimer: null,
                            dayPhase: 0,
                            dayStage: "DAY",
                            dayNightEnabled: true,
                            dayNightLabel: "DAY/NIGHT: ON",
                            currentSlot: 0,
                            slotMenuDisplay: "none",
                            zoomIndex: 1,
                            currentDimension: "NORMAL",
                            normalDimensionState: null,
                            netherDimensionState: null,
                            endDimensionState: null,
                            lastNormalSlot: 1,
                            normalMinedTotal: 0,
                            netherMinedTotal: 0,
                            endMinedTotal: 0,
                            endWinTarget: 150,
                            endWinLabel: "END WIN BLOCKS: 150",
                            netherUnlockTarget: 50,
                            netherUnlockLabel: "NETHER UNLOCK: 50",
                            netherProgressLabel: "MINE 50 BLOCKS TO UNLOCK",
                            worldsNetherLabel: "NETHER: LOCKED",
                            worldsNetherStyle: "background-color:#333b42;color:#777f86;",
                            endUnlockTarget: 100,
                            endUnlockLabel: "END UNLOCK: 100",
                            endProgressLabel: "MINE 100 NETHER BLOCKS TO UNLOCK",
                            worldsEndLabel: "THE END: LOCKED",
                            worldsEndStyle: "background-color:#333b42;color:#777f86;",
                            netherInventoryDisplay: "none",
                            netherInventoryLabel: "▼ NETHER BLOCKS",
                            endInventoryDisplay: "none",
                            endInventoryLabel: "▼ END BLOCKS",
                            chestStorage: {},
                            currentChestKey: "",
                            settingsSection: "MAIN",
                            settingsSectionTitle: "GAME SETTINGS",
                            settingsMainDisplay: "flex",
                            settingsDisplaySectionDisplay: "none",
                            settingsControlsSectionDisplay: "none",
                            settingsGameSectionDisplay: "none",
                            settingsGraphicsSectionDisplay: "none",
                            settingsAccessibilitySectionDisplay: "none",
                            showGrid: false,
                            blockOutline: true,
                            zoomDefaultIndex: 1,
                            autoJump: true,
                            confirmReset: true,
                            resetArmed: false,
                            pauseMenus: true,
                            craftingTableButtonDisplay: "none",
                            workbenchStatus: "Crafting table ready",
                            worldAnimation: false,
                            waterAnimation: false,
                            leafAnimation: false,
                            nightDarkness: 1,
                            animationFrame: 0,
                            weatherEnabled: false,
                            weatherStage: "CLEAR",
                            weatherTick: 0,
                            skyText: "SUN",
                            weatherLabel: "WEATHER: OFF",
                            weatherCycle: 0,
                            cloudText: "",
                            showGridLabel: "SHOW GRID: OFF",
                            blockOutlineLabel: "BLOCK OUTLINE: ON",
                            zoomDefaultLabel: "DEFAULT ZOOM: 100%",
                            autoJumpLabel: "AUTO JUMP: ON",
                            confirmResetLabel: "CONFIRM RESET: ON",
                            pauseMenusLabel: "PAUSE IN MENUS: ON",
                            worldAnimationLabel: "WORLD ANIMATION: OFF",
                            waterAnimationLabel: "WATER ANIMATION: OFF",
                            leafAnimationLabel: "LEAF ANIMATION: OFF",
                            nightDarknessLabel: "NIGHT DARKNESS: NORMAL",
                            weatherLabel: "WEATHER: OFF",
                            controlStyle: "width:33px;height:17px;font-size:5px;",
                            controlsRowStyle: "width:104px;height:19px;flex-direction:row;justify-content:center;align-items:center;",
                            inventory: {
                                dirt: 0,
                                stone: 0,
                                wood: 0,
                                leaf: 0,
                                sand: 0,
                                glass: 0,
                                brick: 0,
                                torch: 0,
                                water: 0,
                                chest: 0,
                                craftingTable: 0,
                                coal: 0,
                                iron: 0,
                                gold: 0,
                                diamond: 0,
                                netherrack: 0,
                                soulSand: 0,
                                glowstone: 0,
                                netherBrick: 0,
                                quartzOre: 0,
                                blackstone: 0,
                                endStone: 0,
                                obsidian: 0,
                                purpur: 0,
                                chorusPlant: 0,
                                endBrick: 0,
                                endOre: 0
                            },
                            toolType: "hand",
                            toolLabel: "HAND",
                            pickaxeDurability: 100,
                            axeDurability: 100,
                            xp: 0,
                            level: 1,
                            totalMined: 0,
                            totalPlaced: 0,
                            foundIron: false,
                            foundDiamond: false,
                            questText: "MINE 5 BLOCKS: 0/5\nPLACE 5 BLOCKS: 0/5\nMINE IRON: 0/1\nFIND DIAMOND: 0/1",
                            achievementText: "FIRST BLOCK: LOCKED\n10 BLOCKS: 0/10\nBUILDER: 0/10\nIRON FINDER: LOCKED\nDIAMOND FINDER: LOCKED",
                            mapText: "...........\n...........\n...........\n.....@.....\n...........\n...........\n...........",
                            highContrast: false,
                            largeOutline: false,
                            largeText: false,
                            highContrastLabel: "HIGH CONTRAST: OFF",
                            largeOutlineLabel: "LARGE OUTLINE: OFF",
                            largeTextLabel: "LARGE TEXT: OFF"
                        },
                        initChestStorage () {
                            this.chestStorage = {};
                            for(var i = 0; i < this.world.length; i++){
                                var tile = this.world[i];
                                if ("chest" === tile.type) this.chestStorage[tile.x + "," + tile.y] = {
                                    dirt: 8,
                                    stone: 6,
                                    wood: 4,
                                    leaf: 2,
                                    sand: 2,
                                    glass: 2,
                                    brick: 2,
                                    torch: 2,
                                    water: 0,
                                    chest: 0,
                                    coal: 2,
                                    iron: 1,
                                    gold: 0,
                                    diamond: 0
                                };
                            }
                        },
                        onInit () {
                            this.refreshView();
                            this.loadingTimer = setInterval(()=>{
                                this.loadingProgress += 20;
                                if (this.loadingProgress < 40) this.loadingLabel = "Loading world...";
                                else if (this.loadingProgress < 80) this.loadingLabel = "Preparing terrain...";
                                else this.loadingLabel = "Starting game...";
                                if (this.loadingProgress >= 100) {
                                    clearInterval(this.loadingTimer);
                                    this.loadingTimer = null;
                                    this.loading = false;
                                    this.loadingDisplay = "none";
                                    this.menuDisplay = "flex";
                                }
                            }, 110);
                        },
                        onDestroy () {
                            if (this.loadingTimer) clearInterval(this.loadingTimer);
                            if (this.gameTimer) clearInterval(this.gameTimer);
                            if (this.dayTimer) clearInterval(this.dayTimer);
                            this.loadingTimer = null;
                            this.gameTimer = null;
                            this.dayTimer = null;
                        },
                        startGame () {
                            if (this.loading) return;
                            this.menuDisplay = "none";
                            this.settingsDisplay = "none";
                            this.slotMenuDisplay = "flex";
                        },
                        openSettings () {
                            if (this.loading) return;
                            this.menuDisplay = "none";
                            this.settingsDisplay = "flex";
                            this.backSettingsMain();
                        },
                        closeSettings () {
                            this.settingsDisplay = "none";
                            this.menuDisplay = "flex";
                        },
                        setSettingsSection (section, title) {
                            this.settingsSection = section;
                            this.settingsSectionTitle = title;
                            this.settingsMainDisplay = "MAIN" === section ? "flex" : "none";
                            this.settingsDisplaySectionDisplay = "DISPLAY" === section ? "flex" : "none";
                            this.settingsControlsSectionDisplay = "CONTROLS" === section ? "flex" : "none";
                            this.settingsGameSectionDisplay = "GAME" === section ? "flex" : "none";
                            this.settingsGraphicsSectionDisplay = "GRAPHICS" === section ? "flex" : "none";
                            this.settingsAccessibilitySectionDisplay = "ACCESSIBILITY" === section ? "flex" : "none";
                        },
                        backSettingsMain () {
                            this.setSettingsSection("MAIN", "GAME SETTINGS");
                        },
                        openSettingsDisplay () {
                            this.setSettingsSection("DISPLAY", "DISPLAY");
                        },
                        openSettingsControls () {
                            this.setSettingsSection("CONTROLS", "CONTROLS");
                        },
                        openSettingsGame () {
                            this.setSettingsSection("GAME", "GAME");
                        },
                        openSettingsGraphics () {
                            this.setSettingsSection("GRAPHICS", "GRAPHICS");
                        },
                        openSettingsAccessibility () {
                            this.setSettingsSection("ACCESSIBILITY", "ACCESSIBILITY");
                        },
                        toggleDayNight () {
                            if ("NORMAL" !== this.currentDimension) {
                                this.status = "Day/night is fixed in " + this.currentDimension;
                                this.dayNightLabel = "DAY/NIGHT: FIXED";
                                return;
                            }
                            this.dayNightEnabled = !this.dayNightEnabled;
                            if (this.dayNightEnabled) {
                                this.dayNightLabel = "DAY/NIGHT: ON";
                                if (!this.dayTimer && "flex" === this.gameDisplay) this.dayTimer = setInterval(()=>{
                                    this.advanceDayNight();
                                }, 1200);
                                this.status = "Day/night enabled";
                            } else {
                                this.dayNightLabel = "DAY/NIGHT: OFF";
                                if (this.dayTimer) {
                                    clearInterval(this.dayTimer);
                                    this.dayTimer = null;
                                }
                                this.dayPhase = 0;
                                this.dayStage = "DAY";
                                this.status = "Day/night disabled";
                            }
                            this.refreshView();
                        },
                        toggleGrid () {
                            this.showGrid = !this.showGrid;
                            this.showGridLabel = this.showGrid ? "SHOW GRID: ON" : "SHOW GRID: OFF";
                            this.status = this.showGrid ? "Grid enabled" : "Grid disabled";
                            this.refreshView();
                        },
                        toggleBlockOutline () {
                            this.blockOutline = !this.blockOutline;
                            this.blockOutlineLabel = this.blockOutline ? "BLOCK OUTLINE: ON" : "BLOCK OUTLINE: OFF";
                            this.status = this.blockOutline ? "Outline enabled" : "Outline disabled";
                            this.refreshView();
                        },
                        cycleDefaultZoom () {
                            this.zoomDefaultIndex = (this.zoomDefaultIndex + 1) % ZOOM_LEVELS.length;
                            this.zoomDefaultLabel = "DEFAULT ZOOM: " + (0 === this.zoomDefaultIndex ? "90%" : 1 === this.zoomDefaultIndex ? "100%" : "120%");
                            this.zoomIndex = this.zoomDefaultIndex;
                            this.status = "Default zoom changed";
                            this.refreshView();
                        },
                        toggleAutoJump () {
                            this.autoJump = !this.autoJump;
                            this.autoJumpLabel = this.autoJump ? "AUTO JUMP: ON" : "AUTO JUMP: OFF";
                            this.status = "Auto jump changed";
                        },
                        toggleConfirmReset () {
                            this.confirmReset = !this.confirmReset;
                            this.confirmResetLabel = this.confirmReset ? "CONFIRM RESET: ON" : "CONFIRM RESET: OFF";
                            this.resetArmed = false;
                            this.status = "Reset confirmation changed";
                        },
                        togglePauseMenus () {
                            this.pauseMenus = !this.pauseMenus;
                            this.pauseMenusLabel = this.pauseMenus ? "PAUSE IN MENUS: ON" : "PAUSE IN MENUS: OFF";
                            this.status = "Menu pause changed";
                        },
                        cycleNetherUnlock () {
                            var values = [
                                10,
                                20,
                                30,
                                40,
                                50
                            ], i = values.indexOf(this.netherUnlockTarget);
                            this.netherUnlockTarget = values[(i + 1) % values.length];
                            this.netherUnlockLabel = "NETHER UNLOCK: " + this.netherUnlockTarget;
                            this.updateNetherLockLabel();
                            this.status = "Nether unlock changed";
                        },
                        cycleEndUnlock () {
                            var values = [
                                10,
                                20,
                                30,
                                40,
                                50,
                                75,
                                100
                            ], i = values.indexOf(this.endUnlockTarget);
                            this.endUnlockTarget = values[(i + 1) % values.length];
                            this.endUnlockLabel = "END UNLOCK: " + this.endUnlockTarget;
                            this.updateEndLockLabel();
                            this.status = "End unlock changed";
                        },
                        cycleEndWinTarget () {
                            var values = [
                                10,
                                50,
                                100,
                                150,
                                200,
                                250
                            ], i = values.indexOf(this.endWinTarget);
                            this.endWinTarget = values[(i + 1) % values.length];
                            this.endWinLabel = "END WIN BLOCKS: " + this.endWinTarget;
                            this.status = "End victory target changed";
                        },
                        toggleWorldAnimation () {
                            this.worldAnimation = !this.worldAnimation;
                            this.worldAnimationLabel = this.worldAnimation ? "WORLD ANIMATION: ON" : "WORLD ANIMATION: OFF";
                            this.animationFrame = 0;
                            this.status = this.worldAnimation ? "World animation enabled" : "World animation disabled";
                            this.refreshView();
                        },
                        toggleWaterAnimation () {
                            this.waterAnimation = !this.waterAnimation;
                            this.waterAnimationLabel = this.waterAnimation ? "WATER ANIMATION: ON" : "WATER ANIMATION: OFF";
                            this.animationFrame = 0;
                            this.status = this.waterAnimation ? "Water animation enabled" : "Water animation disabled";
                            this.refreshView();
                        },
                        toggleLeafAnimation () {
                            this.leafAnimation = !this.leafAnimation;
                            this.leafAnimationLabel = this.leafAnimation ? "LEAF ANIMATION: ON" : "LEAF ANIMATION: OFF";
                            this.animationFrame = 0;
                            this.status = this.leafAnimation ? "Leaf animation enabled" : "Leaf animation disabled";
                            this.refreshView();
                        },
                        restartGameTimer () {
                            if (this.gameTimer) {
                                clearInterval(this.gameTimer);
                                this.gameTimer = null;
                            }
                            if ("flex" === this.gameDisplay) this.gameTimer = setInterval(()=>{
                                this.tick();
                            }, 140);
                        },
                        cycleNightDarkness () {
                            this.nightDarkness = (this.nightDarkness + 1) % 3;
                            this.nightDarknessLabel = 0 === this.nightDarkness ? "NIGHT DARKNESS: BRIGHT" : 1 === this.nightDarkness ? "NIGHT DARKNESS: NORMAL" : "NIGHT DARKNESS: DARK";
                            this.status = "Night darkness changed";
                            this.refreshView();
                        },
                        toggleWeather () {
                            this.weatherEnabled = !this.weatherEnabled;
                            this.weatherLabel = this.weatherEnabled ? "WEATHER: ON" : "WEATHER: OFF";
                            if (!this.weatherEnabled) this.weatherStage = "CLEAR";
                            this.status = this.weatherEnabled ? "Weather enabled" : "Weather disabled";
                            this.refreshView();
                        },
                        toggleHighContrast () {
                            this.highContrast = !this.highContrast;
                            this.highContrastLabel = this.highContrast ? "HIGH CONTRAST: ON" : "HIGH CONTRAST: OFF";
                            this.refreshView();
                        },
                        toggleLargeOutline () {
                            this.largeOutline = !this.largeOutline;
                            this.largeOutlineLabel = this.largeOutline ? "LARGE OUTLINE: ON" : "LARGE OUTLINE: OFF";
                            this.refreshView();
                        },
                        toggleLargeText () {
                            this.largeText = !this.largeText;
                            this.largeTextLabel = this.largeText ? "LARGE TEXT: ON" : "LARGE TEXT: OFF";
                            this.controlStyle = this.largeText ? "width:33px;height:17px;font-size:6px;" : "width:33px;height:17px;font-size:5px;";
                            this.status = this.largeText ? "Large text enabled" : "Large text disabled";
                            this.refreshView();
                        },
                        selectSlot1 () {
                            this.selectSlot(1);
                        },
                        selectSlot2 () {
                            this.selectSlot(2);
                        },
                        selectSlot3 () {
                            this.selectSlot(3);
                        },
                        selectSlot4 () {
                            this.selectSlot(4);
                        },
                        selectSlot5 () {
                            this.selectSlot(5);
                        },
                        selectSlot (slot) {
                            this.currentDimension = "NORMAL";
                            this.normalDimensionState = null;
                            this.currentSlot = slot;
                            if (1 === slot) {
                                this.world = createWorld();
                                this.playerX = 3;
                                this.status = "Normal world";
                            }
                            if (2 === slot) {
                                this.world = createHouseWorld();
                                this.playerX = 4;
                                this.status = "House world";
                            }
                            if (3 === slot) {
                                this.world = createVillageWorld();
                                this.playerX = 3;
                                this.status = "Village world";
                            }
                            if (4 === slot) {
                                this.world = createMineWorld();
                                this.playerX = 9;
                                this.status = "Deep mine";
                            }
                            if (5 === slot) {
                                this.world = createIslandWorld();
                                this.playerX = 9;
                                this.status = "Island world";
                            }
                            this.slotMenuDisplay = "none";
                            this.gameDisplay = "flex";
                            this.playerY = 12;
                            this.playerVy = 0;
                            this.selectedX = -1;
                            this.selectedY = -1;
                            this.selectedBlock = "dirt";
                            this.mode = "MINE";
                            this.inventory = {
                                dirt: 0,
                                stone: 0,
                                wood: 0,
                                leaf: 0,
                                sand: 0,
                                glass: 0,
                                brick: 0,
                                torch: 0,
                                water: 0,
                                chest: 0,
                                craftingTable: 0,
                                coal: 0,
                                iron: 0,
                                gold: 0,
                                diamond: 0,
                                netherrack: 0,
                                soulSand: 0,
                                glowstone: 0,
                                netherBrick: 0,
                                quartzOre: 0,
                                blackstone: 0,
                                endStone: 0,
                                obsidian: 0,
                                purpur: 0,
                                chorusPlant: 0,
                                endBrick: 0,
                                endOre: 0
                            };
                            this.toolType = "hand";
                            this.toolLabel = "HAND";
                            this.pickaxeDurability = 100;
                            this.axeDurability = 100;
                            this.craftingTableButtonDisplay = "none";
                            this.workbenchStatus = "Crafting table ready";
                            this.xp = 0;
                            this.level = 1;
                            this.totalMined = 0;
                            this.totalPlaced = 0;
                            this.foundIron = false;
                            this.foundDiamond = false;
                            this.inventoryDisplay = "none";
                            this.chestDisplay = "none";
                            this.currentChestKey = "";
                            this.extraDisplay = "none";
                            this.craftDisplay = "none";
                            this.workbenchDisplay = "none";
                            this.mapDisplay = "none";
                            this.toolsDisplay = "none";
                            this.questsDisplay = "none";
                            this.achievementsDisplay = "none";
                            this.initChestStorage();
                            this.dayPhase = 0;
                            this.dayStage = "DAY";
                            this.zoomIndex = this.zoomDefaultIndex;
                            if ("NORMAL" === this.currentDimension && this.dayNightEnabled && !this.dayTimer) this.dayTimer = setInterval(()=>{
                                this.advanceDayNight();
                            }, 1200);
                            this.refreshView();
                            if (!this.gameTimer) this.gameTimer = setInterval(()=>{
                                this.tick();
                            }, 140);
                        },
                        openExtra () {
                            if ("flex" !== this.gameDisplay) return;
                            if (this.pauseMenus && this.gameTimer) {
                                clearInterval(this.gameTimer);
                                this.gameTimer = null;
                            }
                            if (this.pauseMenus && this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.extraDisplay = "flex";
                            this.gameDisplay = "none";
                        },
                        closeExtra () {
                            this.extraDisplay = "none";
                            this.gameDisplay = "flex";
                            if (this.pauseMenus) {
                                this.restartGameTimer();
                                if ("NORMAL" === this.currentDimension && this.dayNightEnabled && !this.dayTimer) this.dayTimer = setInterval(()=>{
                                    this.advanceDayNight();
                                }, 1200);
                            }
                        },
                        cloneWorld (world) {
                            var out = [];
                            for(var i = 0; i < world.length; i++)out.push(makeTile(world[i].x, world[i].y, world[i].type));
                            return out;
                        },
                        cloneChestStorage (storage) {
                            var out = {}, keys = Object.keys(storage || {});
                            for(var i = 0; i < keys.length; i++)out[keys[i]] = Object.assign({}, storage[keys[i]]);
                            return out;
                        },
                        captureDimensionState () {
                            return {
                                world: this.cloneWorld(this.world),
                                playerX: this.playerX,
                                playerY: this.playerY,
                                playerVy: this.playerVy,
                                selectedX: this.selectedX,
                                selectedY: this.selectedY,
                                selectedBlock: this.selectedBlock,
                                mode: this.mode,
                                currentSlot: this.currentSlot,
                                chestStorage: this.cloneChestStorage(this.chestStorage),
                                dayPhase: this.dayPhase,
                                dayStage: this.dayStage
                            };
                        },
                        restoreDimensionState (state) {
                            this.world = this.cloneWorld(state.world);
                            this.playerX = state.playerX;
                            this.playerY = state.playerY;
                            this.playerVy = state.playerVy;
                            this.selectedX = state.selectedX;
                            this.selectedY = state.selectedY;
                            this.selectedBlock = state.selectedBlock || "dirt";
                            this.mode = state.mode || "MINE";
                            this.currentSlot = void 0 === state.currentSlot ? 1 : state.currentSlot;
                            this.chestStorage = this.cloneChestStorage(state.chestStorage || {});
                            this.dayPhase = state.dayPhase || 0;
                            this.dayStage = state.dayStage || "DAY";
                            this.slotMenuDisplay = "none";
                            this.gameDisplay = "flex";
                            this.inventoryDisplay = "none";
                            this.worldsDisplay = "none";
                            this.netherInventoryDisplay = "none";
                            this.endInventoryDisplay = "none";
                            this.refreshView();
                        },
                        updateNetherLockLabel () {
                            var unlocked = this.normalMinedTotal >= this.netherUnlockTarget;
                            this.worldsNetherLabel = unlocked ? "NETHER WORLD" : "NETHER: LOCKED";
                            this.worldsNetherStyle = unlocked ? "background-color:#7b3f3f;color:#ffffff;" : "background-color:#333b42;color:#777f86;";
                            this.netherProgressLabel = unlocked ? "UNLOCKED" : "MINE " + Math.max(0, this.netherUnlockTarget - this.normalMinedTotal) + " MORE BLOCKS";
                        },
                        updateEndLockLabel () {
                            var unlocked = this.netherMinedTotal >= this.endUnlockTarget;
                            this.worldsEndLabel = unlocked ? "THE END" : "THE END: LOCKED";
                            this.worldsEndStyle = unlocked ? "background-color:#4b3c66;color:#ffffff;" : "background-color:#333b42;color:#777f86;";
                            this.endProgressLabel = unlocked ? "UNLOCKED" : "MINE " + Math.max(0, this.endUnlockTarget - this.netherMinedTotal) + " MORE NETHER BLOCKS";
                        },
                        openWorlds () {
                            if ("flex" !== this.extraDisplay) return;
                            this.updateNetherLockLabel();
                            this.updateEndLockLabel();
                            this.netherInventoryDisplay = "none";
                            this.endInventoryDisplay = "none";
                            this.extraDisplay = "none";
                            this.worldsDisplay = "flex";
                        },
                        closeWorlds () {
                            this.worldsDisplay = "none";
                            this.extraDisplay = "flex";
                        },
                        saveCurrentDimensionState () {
                            var state = this.captureDimensionState();
                            if ("NORMAL" === this.currentDimension) this.normalDimensionState = state;
                            else if ("NETHER" === this.currentDimension) this.netherDimensionState = state;
                            else if ("END" === this.currentDimension) this.endDimensionState = state;
                            return state;
                        },
                        updateInventorySections () {
                            this.netherInventoryDisplay = "none";
                            this.endInventoryDisplay = "none";
                            this.netherInventoryLabel = "▼ NETHER BLOCKS";
                            this.endInventoryLabel = "▼ END BLOCKS";
                        },
                        switchToNormalWorld () {
                            if ("NORMAL" !== this.currentDimension) this.saveCurrentDimensionState();
                            if ("NORMAL" !== this.currentDimension) if (this.normalDimensionState) this.restoreDimensionState(this.normalDimensionState);
                            else {
                                this.world = createWorld();
                                this.playerX = 2;
                                this.playerY = 12;
                                this.playerVy = 0;
                                this.currentSlot = 1;
                                this.initChestStorage();
                                this.gameDisplay = "flex";
                                this.slotMenuDisplay = "none";
                            }
                            this.currentDimension = "NORMAL";
                            this.dayNightLabel = this.dayNightEnabled ? "DAY/NIGHT: ON" : "DAY/NIGHT: OFF";
                            this.worldsDisplay = "none";
                            this.extraDisplay = "none";
                            this.gameDisplay = "flex";
                            this.slotMenuDisplay = "none";
                            this.updateInventorySections();
                            this.status = "Teleported to NORMAL WORLD";
                            if (this.pauseMenus) this.restartGameTimer();
                            if (this.dayNightEnabled && !this.dayTimer) this.dayTimer = setInterval(()=>{
                                this.advanceDayNight();
                            }, 1200);
                            this.refreshView();
                        },
                        switchToNetherWorld () {
                            if (this.normalMinedTotal < this.netherUnlockTarget) {
                                this.status = "Need " + (this.netherUnlockTarget - this.normalMinedTotal) + " more blocks";
                                this.updateNetherLockLabel();
                                return;
                            }
                            if ("NETHER" !== this.currentDimension) this.saveCurrentDimensionState();
                            if ("NETHER" !== this.currentDimension) if (this.netherDimensionState) this.restoreDimensionState(this.netherDimensionState);
                            else {
                                this.world = createNetherWorld();
                                this.playerX = 5;
                                this.playerY = 11;
                                this.playerVy = 0;
                                this.selectedX = -1;
                                this.selectedY = -1;
                                this.selectedBlock = "netherrack";
                                this.mode = "MINE";
                                this.initChestStorage();
                                this.gameDisplay = "flex";
                                this.slotMenuDisplay = "none";
                            }
                            this.currentDimension = "NETHER";
                            this.dayNightLabel = "DAY/NIGHT: FIXED";
                            this.worldsDisplay = "none";
                            this.extraDisplay = "none";
                            this.gameDisplay = "flex";
                            this.slotMenuDisplay = "none";
                            this.updateInventorySections();
                            if (this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.dayStage = "NETHER";
                            this.status = "Welcome to NETHER";
                            if (this.pauseMenus) this.restartGameTimer();
                            this.refreshView();
                        },
                        switchToEndWorld () {
                            if (this.netherMinedTotal < this.endUnlockTarget) {
                                this.status = "Need " + (this.endUnlockTarget - this.netherMinedTotal) + " more NETHER blocks";
                                this.updateEndLockLabel();
                                return;
                            }
                            if ("END" !== this.currentDimension) this.saveCurrentDimensionState();
                            if ("END" !== this.currentDimension) if (this.endDimensionState) this.restoreDimensionState(this.endDimensionState);
                            else {
                                this.world = createEndWorld();
                                this.playerX = 3;
                                this.playerY = 14;
                                this.playerVy = 0;
                                this.selectedX = -1;
                                this.selectedY = -1;
                                this.selectedBlock = "endStone";
                                this.mode = "MINE";
                                this.initChestStorage();
                                this.gameDisplay = "flex";
                                this.slotMenuDisplay = "none";
                            }
                            this.currentDimension = "END";
                            this.dayNightLabel = "DAY/NIGHT: FIXED";
                            this.worldsDisplay = "none";
                            this.extraDisplay = "none";
                            this.gameDisplay = "flex";
                            this.slotMenuDisplay = "none";
                            this.updateInventorySections();
                            if (this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.dayStage = "END";
                            this.status = "Welcome to THE END";
                            if (this.pauseMenus) this.restartGameTimer();
                            this.refreshView();
                            if (this.endMinedTotal >= this.endWinTarget) this.finishGame();
                        },
                        openMap () {
                            this.updateMap();
                            this.extraDisplay = "none";
                            this.mapDisplay = "flex";
                        },
                        closeMap () {
                            this.mapDisplay = "none";
                            this.extraDisplay = "flex";
                        },
                        openTools () {
                            this.extraDisplay = "none";
                            this.toolsDisplay = "flex";
                        },
                        closeTools () {
                            this.toolsDisplay = "none";
                            this.extraDisplay = "flex";
                        },
                        openQuests () {
                            this.updateGoals();
                            this.extraDisplay = "none";
                            this.questsDisplay = "flex";
                        },
                        closeQuests () {
                            this.questsDisplay = "none";
                            this.extraDisplay = "flex";
                        },
                        openAchievements () {
                            this.updateGoals();
                            this.extraDisplay = "none";
                            this.achievementsDisplay = "flex";
                        },
                        closeAchievements () {
                            this.achievementsDisplay = "none";
                            this.extraDisplay = "flex";
                        },
                        openCraft () {
                            if ("flex" !== this.extraDisplay) return;
                            if (this.pauseMenus && this.gameTimer) {
                                clearInterval(this.gameTimer);
                                this.gameTimer = null;
                            }
                            if (this.pauseMenus && this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.extraDisplay = "none";
                            this.craftDisplay = "flex";
                            this.craftStatus = "Choose a recipe";
                        },
                        closeCraft () {
                            this.craftDisplay = "none";
                            this.extraDisplay = "flex";
                            if (this.pauseMenus) {
                                this.restartGameTimer();
                                if ("NORMAL" === this.currentDimension && this.dayNightEnabled && !this.dayTimer) this.dayTimer = setInterval(()=>{
                                    this.advanceDayNight();
                                }, 1200);
                            }
                        },
                        craftCraftingTable () {
                            if ((this.inventory.wood || 0) < 4) {
                                this.craftStatus = "Need 4 WOOD";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.wood -= 4;
                            inv.craftingTable = (inv.craftingTable || 0) + 1;
                            this.inventory = inv;
                            this.craftingTableButtonDisplay = "flex";
                            this.craftStatus = "Crafted 1 CRAFTING TABLE";
                            this.refreshView();
                        },
                        openWorkbenchAt () {
                            if (this.pauseMenus && this.gameTimer) {
                                clearInterval(this.gameTimer);
                                this.gameTimer = null;
                            }
                            if (this.pauseMenus && this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.workbenchDisplay = "flex";
                            this.gameDisplay = "none";
                            this.inventoryDisplay = "none";
                            this.extraDisplay = "none";
                            this.craftDisplay = "none";
                            this.workbenchStatus = "Crafting table ready";
                        },
                        closeWorkbench () {
                            this.workbenchDisplay = "none";
                            this.gameDisplay = "flex";
                            if (this.pauseMenus) {
                                this.restartGameTimer();
                                if ("NORMAL" === this.currentDimension && this.dayNightEnabled && !this.dayTimer) this.dayTimer = setInterval(()=>{
                                    this.advanceDayNight();
                                }, 1200);
                            }
                        },
                        repairPickaxeWood () {
                            if (this.pickaxeDurability >= 100) {
                                this.workbenchStatus = "PICKAXE ALREADY 100%";
                                return;
                            }
                            if ((this.inventory.wood || 0) < 1) {
                                this.workbenchStatus = "Need 1 WOOD";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.wood -= 1;
                            this.inventory = inv;
                            this.pickaxeDurability = Math.min(100, this.pickaxeDurability + 10);
                            this.workbenchStatus = "PICKAXE +10 DURABILITY";
                            this.refreshView();
                        },
                        repairPickaxeStone () {
                            if (this.pickaxeDurability >= 100) {
                                this.workbenchStatus = "PICKAXE ALREADY 100%";
                                return;
                            }
                            if ((this.inventory.stone || 0) < 1) {
                                this.workbenchStatus = "Need 1 STONE";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.stone -= 1;
                            this.inventory = inv;
                            this.pickaxeDurability = Math.min(100, this.pickaxeDurability + 50);
                            this.workbenchStatus = "PICKAXE +50 DURABILITY";
                            this.refreshView();
                        },
                        repairPickaxeIron () {
                            if (this.pickaxeDurability >= 100) {
                                this.workbenchStatus = "PICKAXE ALREADY 100%";
                                return;
                            }
                            if ((this.inventory.iron || 0) < 1) {
                                this.workbenchStatus = "Need 1 IRON";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.iron -= 1;
                            this.inventory = inv;
                            this.pickaxeDurability = 100;
                            this.workbenchStatus = "PICKAXE +100 DURABILITY";
                            this.refreshView();
                        },
                        repairAxeWood () {
                            if (this.axeDurability >= 100) {
                                this.workbenchStatus = "AXE ALREADY 100%";
                                return;
                            }
                            if ((this.inventory.wood || 0) < 1) {
                                this.workbenchStatus = "Need 1 WOOD";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.wood -= 1;
                            this.inventory = inv;
                            this.axeDurability = Math.min(100, this.axeDurability + 10);
                            this.workbenchStatus = "AXE +10 DURABILITY";
                            this.refreshView();
                        },
                        repairAxeStone () {
                            if (this.axeDurability >= 100) {
                                this.workbenchStatus = "AXE ALREADY 100%";
                                return;
                            }
                            if ((this.inventory.stone || 0) < 1) {
                                this.workbenchStatus = "Need 1 STONE";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.stone -= 1;
                            this.inventory = inv;
                            this.axeDurability = Math.min(100, this.axeDurability + 50);
                            this.workbenchStatus = "AXE +50 DURABILITY";
                            this.refreshView();
                        },
                        repairAxeIron () {
                            if (this.axeDurability >= 100) {
                                this.workbenchStatus = "AXE ALREADY 100%";
                                return;
                            }
                            if ((this.inventory.iron || 0) < 1) {
                                this.workbenchStatus = "Need 1 IRON";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.iron -= 1;
                            this.inventory = inv;
                            this.axeDurability = 100;
                            this.workbenchStatus = "AXE +100 DURABILITY";
                            this.refreshView();
                        },
                        craftGlass () {
                            if ((this.inventory.sand || 0) < 1) {
                                this.craftStatus = "Need 1 SAND";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.sand--;
                            inv.glass = (inv.glass || 0) + 1;
                            this.inventory = inv;
                            this.craftStatus = "Crafted 1 GLASS";
                            this.refreshView();
                        },
                        craftBrick () {
                            if ((this.inventory.stone || 0) < 2) {
                                this.craftStatus = "Need 2 STONE";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.stone -= 2;
                            inv.brick = (inv.brick || 0) + 1;
                            this.inventory = inv;
                            this.craftStatus = "Crafted 1 BRICK";
                            this.refreshView();
                        },
                        craftTorch () {
                            if ((this.inventory.coal || 0) < 1 || (this.inventory.wood || 0) < 1) {
                                this.craftStatus = "Need 1 COAL + 1 WOOD";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.coal--;
                            inv.wood--;
                            inv.torch = (inv.torch || 0) + 2;
                            this.inventory = inv;
                            this.craftStatus = "Crafted 2 TORCH";
                            this.refreshView();
                        },
                        craftChest () {
                            if ((this.inventory.wood || 0) < 4) {
                                this.craftStatus = "Need 4 WOOD";
                                return;
                            }
                            var inv = Object.assign({}, this.inventory);
                            inv.wood -= 4;
                            inv.chest = (inv.chest || 0) + 1;
                            this.inventory = inv;
                            this.craftStatus = "Crafted 1 CHEST";
                            this.refreshView();
                        },
                        selectPickaxe () {
                            this.toolType = "pickaxe";
                            this.toolLabel = "PICKAXE";
                            this.status = "Pickaxe selected";
                        },
                        selectAxe () {
                            this.toolType = "axe";
                            this.toolLabel = "AXE";
                            this.status = "Axe selected";
                        },
                        selectHand () {
                            this.toolType = "hand";
                            this.toolLabel = "HAND";
                            this.status = "Hand selected";
                        },
                        requiredTool (type) {
                            if ("stone" === type || "coal" === type || "iron" === type || "gold" === type || "diamond" === type || "bedrock" === type || "netherrack" === type || "glowstone" === type || "netherBrick" === type || "quartzOre" === type || "blackstone" === type || "obsidian" === type || "endOre" === type) return "pickaxe";
                            if ("wood" === type || "leaf" === type || "chest" === type || "craftingTable" === type) return "axe";
                            return "hand";
                        },
                        useTool (tool) {
                            if ("pickaxe" === tool) {
                                this.pickaxeDurability = Math.max(0, this.pickaxeDurability - 2);
                                if (0 === this.pickaxeDurability) {
                                    this.toolType = "hand";
                                    this.toolLabel = "HAND";
                                    this.status = "Pickaxe broke";
                                }
                            }
                            if ("axe" === tool) {
                                this.axeDurability = Math.max(0, this.axeDurability - 2);
                                if (0 === this.axeDurability) {
                                    this.toolType = "hand";
                                    this.toolLabel = "HAND";
                                    this.status = "Axe broke";
                                }
                            }
                        },
                        gainXp (amount) {
                            this.xp += amount;
                            while(this.xp >= 10){
                                this.xp -= 10;
                                this.level++;
                            }
                        },
                        updateGoals () {
                            this.questText = "MINE 5 BLOCKS: " + Math.min(this.totalMined, 5) + "/5\nPLACE 5 BLOCKS: " + Math.min(this.totalPlaced, 5) + "/5\nMINE IRON: " + (this.foundIron ? "1" : "0") + "/1\nFIND DIAMOND: " + (this.foundDiamond ? "1" : "0") + "/1";
                            this.achievementText = "FIRST BLOCK: " + (this.totalMined > 0 ? "DONE" : "LOCKED") + "\n10 BLOCKS: " + Math.min(this.totalMined, 10) + "/10\nBUILDER: " + Math.min(this.totalPlaced, 10) + "/10\nIRON FINDER: " + (this.foundIron ? "DONE" : "LOCKED") + "\nDIAMOND FINDER: " + (this.foundDiamond ? "DONE" : "LOCKED");
                        },
                        updateMap () {
                            var out = "", radiusX = 5, radiusY = 3;
                            for(var yy = -radiusY; yy <= radiusY; yy++){
                                for(var xx = -radiusX; xx <= radiusX; xx++){
                                    var tx = this.playerX + xx, ty = this.playerY + yy, ch = ".";
                                    if (tx === this.playerX && ty === this.playerY) ch = "@";
                                    else {
                                        var t = this.tileAt(tx, ty);
                                        ch = t ? "water" === t.type ? "~" : "air" === t.type ? "." : "wood" === t.type || "leaf" === t.type ? "T" : "chest" === t.type ? "C" : "craftingTable" === t.type ? "W" : "#" : " ";
                                    }
                                    out += ch;
                                }
                                if (yy < radiusY) out += "\n";
                            }
                            this.mapText = out;
                        },
                        backToSlots () {
                            if ("flex" !== this.gameDisplay) return;
                            if (this.pauseMenus) {
                                if (this.gameTimer) {
                                    clearInterval(this.gameTimer);
                                    this.gameTimer = null;
                                }
                                if (this.dayTimer) {
                                    clearInterval(this.dayTimer);
                                    this.dayTimer = null;
                                }
                            }
                            this.gameDisplay = "none";
                            this.slotsConfirmDisplay = "flex";
                            this.status = "Confirm return to slots";
                        },
                        confirmBackToSlots () {
                            this.saveCurrentDimensionState();
                            if (this.gameTimer) {
                                clearInterval(this.gameTimer);
                                this.gameTimer = null;
                            }
                            if (this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.slotsConfirmDisplay = "none";
                            this.victoryDisplay = "none";
                            this.gameDisplay = "none";
                            this.inventoryDisplay = "none";
                            this.chestDisplay = "none";
                            this.extraDisplay = "none";
                            this.worldsDisplay = "none";
                            this.craftDisplay = "none";
                            this.workbenchDisplay = "none";
                            this.mapDisplay = "none";
                            this.toolsDisplay = "none";
                            this.questsDisplay = "none";
                            this.achievementsDisplay = "none";
                            this.currentChestKey = "";
                            this.slotMenuDisplay = "flex";
                            this.status = "WORLD SELECT";
                        },
                        cancelBackToSlots () {
                            this.slotsConfirmDisplay = "none";
                            this.gameDisplay = "flex";
                            this.status = "Back to game";
                            if (this.pauseMenus) this.restartGameTimer();
                            if ("NORMAL" === this.currentDimension && this.dayNightEnabled && !this.dayTimer) this.dayTimer = setInterval(()=>{
                                this.advanceDayNight();
                            }, 1200);
                            this.refreshView();
                        },
                        openInventory () {
                            if ("flex" !== this.gameDisplay) return;
                            if (this.pauseMenus && this.gameTimer) {
                                clearInterval(this.gameTimer);
                                this.gameTimer = null;
                            }
                            if (this.pauseMenus && this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.extraDisplay = "none";
                            this.inventoryDisplay = "flex";
                            this.chestDisplay = "none";
                            this.gameDisplay = "none";
                        },
                        closeInventory () {
                            this.inventoryDisplay = "none";
                            this.updateInventorySections();
                            this.gameDisplay = "flex";
                            if (this.pauseMenus) {
                                this.restartGameTimer();
                                if ("NORMAL" === this.currentDimension && this.dayNightEnabled && !this.dayTimer) this.dayTimer = setInterval(()=>{
                                    this.advanceDayNight();
                                }, 1200);
                            }
                        },
                        toggleNetherInventory () {
                            var opening = "flex" !== this.netherInventoryDisplay;
                            this.netherInventoryDisplay = opening ? "flex" : "none";
                            this.endInventoryDisplay = "none";
                            this.netherInventoryLabel = opening ? "▲ NETHER BLOCKS" : "▼ NETHER BLOCKS";
                            this.endInventoryLabel = "▼ END BLOCKS";
                        },
                        toggleEndInventory () {
                            var opening = "flex" !== this.endInventoryDisplay;
                            this.endInventoryDisplay = opening ? "flex" : "none";
                            this.netherInventoryDisplay = "none";
                            this.endInventoryLabel = opening ? "▲ END BLOCKS" : "▼ END BLOCKS";
                            this.netherInventoryLabel = "▼ NETHER BLOCKS";
                        },
                        openChestAt (x, y) {
                            var key = x + "," + y;
                            if (!this.chestStorage[key]) this.chestStorage[key] = {
                                dirt: 0,
                                stone: 0,
                                wood: 0,
                                leaf: 0,
                                sand: 0,
                                glass: 0,
                                brick: 0,
                                torch: 0,
                                water: 0,
                                chest: 0,
                                coal: 0,
                                iron: 0,
                                gold: 0,
                                diamond: 0
                            };
                            this.currentChestKey = key;
                            if (this.pauseMenus && this.gameTimer) {
                                clearInterval(this.gameTimer);
                                this.gameTimer = null;
                            }
                            if (this.pauseMenus && this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.inventoryDisplay = "none";
                            this.gameDisplay = "none";
                            this.chestDisplay = "flex";
                            this.status = "Chest opened";
                        },
                        closeChest () {
                            this.chestDisplay = "none";
                            this.gameDisplay = "flex";
                            this.currentChestKey = "";
                            if (this.pauseMenus) {
                                this.restartGameTimer();
                                if ("NORMAL" === this.currentDimension && this.dayNightEnabled && !this.dayTimer) this.dayTimer = setInterval(()=>{
                                    this.advanceDayNight();
                                }, 1200);
                            }
                            this.status = "Chest closed";
                        },
                        chestCount () {
                            if (!this.currentChestKey || !this.chestStorage[this.currentChestKey]) return 0;
                            return this.chestStorage[this.currentChestKey][this.selectedBlock] || 0;
                        },
                        selectedCountText () {
                            return this.inventory[this.selectedBlock] || 0;
                        },
                        storeInChest () {
                            if (!this.currentChestKey) return;
                            var amount = this.inventory[this.selectedBlock] || 0;
                            if (amount <= 0) {
                                this.status = "No " + this.selectedBlock.toUpperCase();
                                return;
                            }
                            var chest = this.chestStorage[this.currentChestKey];
                            chest[this.selectedBlock] = (chest[this.selectedBlock] || 0) + 1;
                            this.chestStorage = Object.assign({}, this.chestStorage);
                            var inv = Object.assign({}, this.inventory);
                            inv[this.selectedBlock] -= 1;
                            this.inventory = inv;
                            this.status = "Stored " + this.selectedBlock.toUpperCase();
                        },
                        takeFromChest () {
                            if (!this.currentChestKey) return;
                            var chest = this.chestStorage[this.currentChestKey];
                            var amount = chest[this.selectedBlock] || 0;
                            if (amount <= 0) {
                                this.status = "Chest is empty";
                                return;
                            }
                            chest[this.selectedBlock] -= 1;
                            this.chestStorage = Object.assign({}, this.chestStorage);
                            var inv = Object.assign({}, this.inventory);
                            inv[this.selectedBlock] = (inv[this.selectedBlock] || 0) + 1;
                            this.inventory = inv;
                            this.status = "Taken " + this.selectedBlock.toUpperCase();
                        },
                        selectDirtFromInventory () {
                            this.selectDirt();
                            this.closeInventory();
                        },
                        selectStoneFromInventory () {
                            this.selectStone();
                            this.closeInventory();
                        },
                        selectWoodFromInventory () {
                            this.selectWood();
                            this.closeInventory();
                        },
                        selectLeafFromInventory () {
                            this.selectLeaf();
                            this.closeInventory();
                        },
                        selectSandFromInventory () {
                            this.selectSand();
                            this.closeInventory();
                        },
                        selectGlassFromInventory () {
                            this.selectGlass();
                            this.closeInventory();
                        },
                        selectBrickFromInventory () {
                            this.selectBrick();
                            this.closeInventory();
                        },
                        selectTorchFromInventory () {
                            this.selectTorch();
                            this.closeInventory();
                        },
                        selectWaterFromInventory () {
                            this.selectWater();
                            this.closeInventory();
                        },
                        selectChestFromInventory () {
                            this.selectChest();
                            this.closeInventory();
                        },
                        selectCraftingTableFromInventory () {
                            this.selectedBlock = "craftingTable";
                            this.status = "Crafting table selected";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectCoalFromInventory () {
                            this.selectCoal();
                            this.closeInventory();
                        },
                        selectIronFromInventory () {
                            this.selectIron();
                            this.closeInventory();
                        },
                        selectGoldFromInventory () {
                            this.selectedBlock = "gold";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectDiamondFromInventory () {
                            this.selectedBlock = "diamond";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectNetherrackFromInventory () {
                            this.selectedBlock = "netherrack";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectSoulSandFromInventory () {
                            this.selectedBlock = "soulSand";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectGlowstoneFromInventory () {
                            this.selectedBlock = "glowstone";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectNetherBrickFromInventory () {
                            this.selectedBlock = "netherBrick";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectQuartzOreFromInventory () {
                            this.selectedBlock = "quartzOre";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectBlackstoneFromInventory () {
                            this.selectedBlock = "blackstone";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectEndStoneFromInventory () {
                            this.selectedBlock = "endStone";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectObsidianFromInventory () {
                            this.selectedBlock = "obsidian";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectPurpurFromInventory () {
                            this.selectedBlock = "purpur";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectChorusPlantFromInventory () {
                            this.selectedBlock = "chorusPlant";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectEndBrickFromInventory () {
                            this.selectedBlock = "endBrick";
                            this.refreshView();
                            this.closeInventory();
                        },
                        selectEndOreFromInventory () {
                            this.selectedBlock = "endOre";
                            this.refreshView();
                            this.closeInventory();
                        },
                        getDayStage (phase) {
                            if (phase < 15) return "DAY";
                            if (phase < 25) return "SUNSET";
                            if (phase < 45) return "NIGHT";
                            if (phase < 55) return "SUNRISE";
                            return "DAY";
                        },
                        advanceDayNight () {
                            if ("NORMAL" !== this.currentDimension) return;
                            if (!this.dayNightEnabled) return;
                            this.dayPhase = (this.dayPhase + 1) % 60;
                            var next = this.getDayStage(this.dayPhase);
                            if (next !== this.dayStage) {
                                this.dayStage = next;
                                this.refreshView();
                            }
                        },
                        getViewCols () {
                            return Math.max(1, Math.floor(WORLD_W / ZOOM_LEVELS[this.zoomIndex]));
                        },
                        getViewRows () {
                            return Math.max(1, Math.floor(WORLD_H / ZOOM_LEVELS[this.zoomIndex]));
                        },
                        getTilePx () {
                            return ZOOM_LEVELS[this.zoomIndex];
                        },
                        clamp (v, min, max) {
                            return Math.max(min, Math.min(max, v));
                        },
                        indexOf (x, y) {
                            return y * COLS + x;
                        },
                        tileAt (x, y) {
                            if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return null;
                            return this.world[this.indexOf(x, y)];
                        },
                        solidAt (x, y) {
                            var t = this.tileAt(x, y);
                            return t ? isSolid(t.type) : true;
                        },
                        getCameraX () {
                            var cols = this.getViewCols();
                            return this.clamp(this.playerX - Math.floor(cols / 2), 0, Math.max(0, COLS - cols));
                        },
                        getCameraY () {
                            var rows = this.getViewRows();
                            return this.clamp(this.playerY - Math.floor(rows / 2), 0, Math.max(0, ROWS - rows));
                        },
                        color (type) {
                            if (this.highContrast) {
                                if ("air" === type) return "NETHER" === this.currentDimension ? "#8b2f20" : "END" === this.currentDimension ? "#251733" : "NIGHT" === this.dayStage ? "#000000" : "#70e6ff";
                                if (HIGH_CONTRAST_COLORS[type]) return HIGH_CONTRAST_COLORS[type];
                            }
                            var night = "NIGHT" === this.dayStage;
                            if ("NORMAL" !== this.currentDimension) night = false;
                            var dark = 2 === this.nightDarkness, brightNight = 0 === this.nightDarkness;
                            if ("air" === type) {
                                if ("NETHER" === this.currentDimension) return "#6f2b1f";
                                if ("END" === this.currentDimension) return "#251733";
                                if ("RAIN" === this.weatherStage) return night ? "#1d2b3a" : "#6c9fc0";
                                if ("SNOW" === this.weatherStage) return night ? "#2d3641" : "#cbd9e4";
                                return night ? dark ? "#111a28" : brightNight ? "#536b82" : "#1b2940" : "SUNSET" === this.dayStage ? "#8a6b7b" : "SUNRISE" === this.dayStage ? "#9a8f78" : SKY;
                            }
                            if ("grass" === type) return night ? dark ? "#233d22" : brightNight ? "#496a45" : "#345b31" : this.worldAnimation && this.animationFrame % 4 < 2 ? "#69c956" : "#5fbd4d";
                            if ("dirt" === type) return night ? dark ? "#382614" : brightNight ? "#69512f" : "#50381f" : "#8b5a2b";
                            if ("stone" === type) return night ? dark ? "#303030" : brightNight ? "#656565" : "#474747" : "#7d7d7d";
                            if ("bedrock" === type) return "#202020";
                            if ("wood" === type) return night ? "#594225" : "#9a6b3a";
                            if ("leaf" === type) return night ? dark ? "#19361d" : brightNight ? "#356e3b" : "#24502b" : this.leafAnimation && this.animationFrame % 4 < 2 ? "#45a84c" : "#3e9b45";
                            if ("coal" === type) return "#343434";
                            if ("iron" === type) return night ? "#767676" : "#b5b5b5";
                            if ("gold" === type) return night ? "#8a6f22" : "#e2b93b";
                            if ("diamond" === type) return night ? "#3f7180" : "#5dd6e8";
                            if ("sand" === type) return night ? "#6d603e" : "#d9c27a";
                            if ("glass" === type) return night ? "#42546b" : "#a7d8ef";
                            if ("brick" === type) return night ? "#6b3128" : "#a94d3f";
                            if ("endStone" === type) return "#c7c1a2";
                            if ("obsidian" === type) return "#302342";
                            if ("purpur" === type) return "#a47ac2";
                            if ("chorusPlant" === type) return this.worldAnimation && this.animationFrame % 4 < 2 ? "#d3a9ee" : "#8c5da8";
                            if ("endBrick" === type) return "#746184";
                            if ("endOre" === type) return "#d6c4ff";
                            if ("netherrack" === type) return night ? "#5d211b" : "#9a3328";
                            if ("soulSand" === type) return night ? "#3a2b25" : "#59473c";
                            if ("glowstone" === type) return night ? "#8a651f" : "#ffd35a";
                            if ("netherBrick" === type) return night ? "#421b24" : "#6f2c35";
                            if ("quartzOre" === type) return night ? "#7a6c62" : "#ded7cf";
                            if ("blackstone" === type) return night ? "#25252b" : "#43434b";
                            if ("water" === type) return night ? dark ? "#17314d" : brightNight ? "#37699b" : "#234a76" : this.waterAnimation && this.animationFrame % 4 < 2 ? "#46a7ee" : "#3d9ee8";
                            if ("torch" === type) return night ? this.worldAnimation && this.animationFrame % 4 < 2 ? "#ffcf42" : "#7c4b17" : this.worldAnimation && this.animationFrame % 4 < 2 ? "#ffd05a" : "#ffb52e";
                            if ("chest" === type) return night ? "#5c391e" : "#b8752a";
                            if ("craftingTable" === type) return night ? "#5b4328" : "#9b6b3b";
                            return SKY;
                        },
                        zoomLabel () {
                            if (0 === this.zoomIndex) return "90%";
                            if (1 === this.zoomIndex) return "100%";
                            return "120%";
                        },
                        refreshView () {
                            if ("flex" !== this.gameDisplay) return;
                            var cols = this.getViewCols(), rows = this.getViewRows(), px = this.getTilePx();
                            var sx = this.clamp(this.playerX - Math.floor(cols / 2), 0, Math.max(0, COLS - cols));
                            var sy = this.clamp(this.playerY - Math.floor(rows / 2), 0, Math.max(0, ROWS - rows));
                            var result = [], colorCache = {}, styleCache = {}, tile, bg, char, border, style, styleKey, rowStart;
                            var bw = this.largeOutline ? 2 : 1, fs = this.largeText ? 6 : 5;
                            var animationMask = 0, playerX = this.playerX, playerY = this.playerY;
                            var selectedX = this.selectedX, selectedY = this.selectedY;
                            var useOutline = this.blockOutline, showGrid = this.showGrid;
                            for(var y = 0; y < rows; y++){
                                rowStart = (sy + y) * COLS + sx;
                                for(var x = 0; x < cols; x++){
                                    tile = this.world[rowStart + x];
                                    if (tile) {
                                        var isPlayer = tile.x === playerX && tile.y === playerY;
                                        if (!isPlayer) {
                                            if ("grass" === tile.type || "torch" === tile.type || "chorusPlant" === tile.type) animationMask |= 1;
                                            else if ("water" === tile.type) animationMask |= 2;
                                            else if ("leaf" === tile.type) animationMask |= 4;
                                        }
                                        bg = colorCache[tile.type];
                                        if (!bg) bg = colorCache[tile.type] = this.color(tile.type);
                                        char = "";
                                        if (isPlayer) {
                                            bg = "#0026ff";
                                            char = "P";
                                        } else if ("coal" === tile.type) char = "C";
                                        else if ("iron" === tile.type) char = "I";
                                        else if ("gold" === tile.type) char = "G";
                                        else if ("diamond" === tile.type) char = "D";
                                        else if ("torch" === tile.type) char = "T";
                                        else if ("chest" === tile.type) char = "K";
                                        else if ("craftingTable" === tile.type) char = "W";
                                        border = useOutline && tile.x === selectedX && tile.y === selectedY ? "#ffffff" : showGrid ? "#5a6872" : "transparent";
                                        styleKey = bg + "|" + border;
                                        style = styleCache[styleKey];
                                        if (!style) {
                                            style = "background-color:" + bg + ";color:#ffffff;border-width:" + bw + "px;border-color:" + border + ";width:" + px + "px;height:" + px + "px;line-height:" + px + "px;font-size:" + fs + "px;";
                                            styleCache[styleKey] = style;
                                        }
                                        result.push({
                                            x: tile.x,
                                            y: tile.y,
                                            char: char,
                                            style: style
                                        });
                                    }
                                }
                            }
                            this.visibleAnimationMask = animationMask;
                            this.visibleWorld = result;
                            this.skyText = "NETHER" === this.currentDimension ? "NETHER SKY" : "END" === this.currentDimension ? "END SKY" : "NIGHT" === this.dayStage ? "MOON ***" : ("SUNSET" === this.dayStage ? "SUNSET " : "SUNRISE" === this.dayStage ? "SUNRISE " : "SUN ") + this.cloudText;
                            this.hudLine = this.currentDimension + " | " + this.skyText + " " + this.weatherStage + " | " + this.mode + " " + this.selectedBlock + " x" + (this.inventory[this.selectedBlock] || 0) + " | L" + this.level + " XP" + this.xp + " | " + this.toolLabel + " " + this.zoomLabel();
                            if ("flex" === this.mapDisplay) this.updateMap();
                        },
                        tick () {
                            var oldX = this.playerX, oldY = this.playerY;
                            if (this.playerVy < 0) if (this.playerY > 0 && !this.solidAt(this.playerX, this.playerY - 1)) {
                                this.playerY--;
                                this.playerVy++;
                            } else this.playerVy = 0;
                            else if (this.solidAt(this.playerX, this.playerY + 1)) this.playerVy = 0;
                            else {
                                this.playerY++;
                                this.playerVy = 1;
                            }
                            var moved = oldX !== this.playerX || oldY !== this.playerY;
                            var refreshNeeded = moved;
                            var animateWorld = this.worldAnimation && (1 & this.visibleAnimationMask) !== 0;
                            var animateWater = this.waterAnimation && (2 & this.visibleAnimationMask) !== 0;
                            var animateLeaves = this.leafAnimation && (4 & this.visibleAnimationMask) !== 0;
                            if (animateWorld || animateWater || animateLeaves) {
                                this.animationFrame = (this.animationFrame + 1) % 4;
                                if (0 === this.animationFrame || 2 === this.animationFrame) refreshNeeded = true;
                            }
                            if (this.weatherEnabled) {
                                this.weatherTick++;
                                if (this.weatherTick >= 70) {
                                    this.weatherTick = 0;
                                    this.weatherCycle = (this.weatherCycle + 1) % 3;
                                    this.weatherStage = 0 === this.weatherCycle ? "CLEAR" : 1 === this.weatherCycle ? "RAIN" : "SNOW";
                                    refreshNeeded = true;
                                }
                            }
                            if (refreshNeeded) this.refreshView();
                        },
                        moveLeft () {
                            this.tryMove(-1);
                        },
                        moveRight () {
                            this.tryMove(1);
                        },
                        tryMove (dx) {
                            var nx = this.playerX + dx;
                            if (nx < 0 || nx >= COLS) return;
                            if (!this.solidAt(nx, this.playerY)) {
                                this.playerX = nx;
                                this.status = "Moved";
                                this.refreshView();
                                return;
                            }
                            if (this.autoJump && this.playerY > 0 && !this.solidAt(nx, this.playerY - 1) && !this.solidAt(this.playerX, this.playerY - 1)) {
                                this.playerX = nx;
                                this.playerY--;
                                this.status = "Stepped up";
                                this.refreshView();
                            } else this.status = "Blocked";
                        },
                        jump () {
                            if (0 === this.playerVy && this.solidAt(this.playerX, this.playerY + 1)) {
                                this.playerVy = -2;
                                this.status = "Jump";
                                this.refreshView();
                            }
                        },
                        tapCell (x, y) {
                            this.selectedX = x;
                            this.selectedY = y;
                            var tile = this.tileAt(x, y);
                            if (!tile) return void this.refreshView();
                            if (x === this.playerX && y === this.playerY) {
                                this.status = "Player selected";
                                this.refreshView();
                                return;
                            }
                            if (Math.abs(x - this.playerX) + Math.abs(y - this.playerY) > 2) {
                                this.status = "Too far";
                                this.refreshView();
                                return;
                            }
                            if ("MINE" === this.mode) {
                                if ("chest" === tile.type) return void this.openChestAt(x, y);
                                if ("craftingTable" === tile.type) return void this.openWorkbenchAt(x, y);
                                if ("air" === tile.type || "bedrock" === tile.type) {
                                    this.status = "Nothing to mine";
                                    this.refreshView();
                                    return;
                                }
                                var mined = tile.type, needed = this.requiredTool(mined);
                                if ("hand" !== needed && this.toolType !== needed) {
                                    this.status = "USE " + needed.toUpperCase();
                                    this.refreshView();
                                    return;
                                }
                                this.world[this.indexOf(x, y)] = makeTile(x, y, "air");
                                var inv = Object.assign({}, this.inventory);
                                inv[mined] = (inv[mined] || 0) + 1;
                                this.inventory = inv;
                                this.totalMined++;
                                if ("NORMAL" === this.currentDimension) {
                                    this.normalMinedTotal++;
                                    this.updateNetherLockLabel();
                                } else if ("NETHER" === this.currentDimension) {
                                    this.netherMinedTotal++;
                                    this.updateEndLockLabel();
                                } else if ("END" === this.currentDimension) this.endMinedTotal++;
                                if ("iron" === mined) this.foundIron = true;
                                if ("diamond" === mined) this.foundDiamond = true;
                                this.gainXp("iron" === mined || "gold" === mined || "diamond" === mined || "endOre" === mined ? 3 : 1);
                                if ("hand" !== needed) this.useTool(needed);
                                this.updateGoals();
                                this.status = "Mined " + mined.toUpperCase() + " | LVL " + this.level + " XP " + this.xp + "/10";
                                if ("END" === this.currentDimension && this.endMinedTotal >= this.endWinTarget) return void this.finishGame();
                                this.refreshView();
                                return;
                            }
                            if ("air" !== tile.type) {
                                this.status = "Space occupied";
                                this.refreshView();
                                return;
                            }
                            if (!placeable(this.selectedBlock)) {
                                this.status = "Block cannot be placed";
                                this.refreshView();
                                return;
                            }
                            if (!this.inventory[this.selectedBlock] || this.inventory[this.selectedBlock] <= 0) {
                                this.status = "Out of " + this.selectedBlock.toUpperCase();
                                this.refreshView();
                                return;
                            }
                            this.world[this.indexOf(x, y)] = makeTile(x, y, this.selectedBlock);
                            var inv2 = Object.assign({}, this.inventory);
                            inv2[this.selectedBlock] -= 1;
                            this.inventory = inv2;
                            this.totalPlaced++;
                            this.gainXp(1);
                            this.updateGoals();
                            this.status = "Placed " + this.selectedBlock.toUpperCase() + " | LVL " + this.level + " XP " + this.xp + "/10";
                            this.refreshView();
                        },
                        setMineMode () {
                            this.mode = "MINE";
                            this.status = "Mine mode";
                            this.refreshView();
                        },
                        setPlaceMode () {
                            this.mode = "PLACE";
                            this.status = "Place mode";
                            this.refreshView();
                        },
                        selectDirt () {
                            this.selectedBlock = "dirt";
                            this.refreshView();
                        },
                        selectStone () {
                            this.selectedBlock = "stone";
                            this.refreshView();
                        },
                        selectWood () {
                            this.selectedBlock = "wood";
                            this.refreshView();
                        },
                        selectLeaf () {
                            this.selectedBlock = "leaf";
                            this.refreshView();
                        },
                        selectSand () {
                            this.selectedBlock = "sand";
                            this.refreshView();
                        },
                        selectGlass () {
                            this.selectedBlock = "glass";
                            this.refreshView();
                        },
                        selectBrick () {
                            this.selectedBlock = "brick";
                            this.refreshView();
                        },
                        selectTorch () {
                            this.selectedBlock = "torch";
                            this.refreshView();
                        },
                        selectWater () {
                            this.selectedBlock = "water";
                            this.refreshView();
                        },
                        selectChest () {
                            this.selectedBlock = "chest";
                            this.refreshView();
                        },
                        selectCoal () {
                            this.selectedBlock = "coal";
                            this.refreshView();
                        },
                        selectIron () {
                            this.selectedBlock = "iron";
                            this.refreshView();
                        },
                        zoomIn () {
                            if (this.zoomIndex < ZOOM_LEVELS.length - 1) {
                                this.zoomIndex++;
                                this.status = "Zoom in";
                                this.refreshView();
                            }
                        },
                        zoomOut () {
                            if (this.zoomIndex > 0) {
                                this.zoomIndex--;
                                this.status = "Zoom out";
                                this.refreshView();
                            }
                        },
                        centerCamera () {
                            this.status = "Centered on player";
                            this.refreshView();
                        },
                        finishGame () {
                            this.saveCurrentDimensionState();
                            if (this.gameTimer) {
                                clearInterval(this.gameTimer);
                                this.gameTimer = null;
                            }
                            if (this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.gameDisplay = "none";
                            this.slotsConfirmDisplay = "none";
                            this.inventoryDisplay = "none";
                            this.extraDisplay = "none";
                            this.worldsDisplay = "none";
                            this.craftDisplay = "none";
                            this.workbenchDisplay = "none";
                            this.mapDisplay = "none";
                            this.toolsDisplay = "none";
                            this.questsDisplay = "none";
                            this.achievementsDisplay = "none";
                            this.victoryDisplay = "flex";
                        },
                        returnToMainMenu () {
                            if (this.gameTimer) {
                                clearInterval(this.gameTimer);
                                this.gameTimer = null;
                            }
                            if (this.dayTimer) {
                                clearInterval(this.dayTimer);
                                this.dayTimer = null;
                            }
                            this.victoryDisplay = "none";
                            this.slotsConfirmDisplay = "none";
                            this.gameDisplay = "none";
                            this.inventoryDisplay = "none";
                            this.extraDisplay = "none";
                            this.worldsDisplay = "none";
                            this.slotMenuDisplay = "none";
                            this.settingsDisplay = "none";
                            this.currentDimension = "NORMAL";
                            this.menuDisplay = "flex";
                            this.status = "THE END CONQUERED";
                        },
                        resetGame () {
                            if (this.confirmReset && !this.resetArmed) {
                                this.resetArmed = true;
                                this.status = "Tap RESET again";
                                return;
                            }
                            this.resetArmed = false;
                            this.slotsConfirmDisplay = "none";
                            this.victoryDisplay = "none";
                            this.inventoryDisplay = "none";
                            this.extraDisplay = "none";
                            this.worldsDisplay = "none";
                            this.craftDisplay = "none";
                            this.mapDisplay = "none";
                            this.toolsDisplay = "none";
                            this.questsDisplay = "none";
                            this.achievementsDisplay = "none";
                            this.selectSlot(this.currentSlot || 1);
                            this.status = "World reset";
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "page"
                            ]
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "loading"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.loadingDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "loading-title"
                                    ],
                                    value: "Minecraft 2D"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "loading-label"
                                    ],
                                    value: function() {
                                        return _vm_.loadingLabel;
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "loading-bar"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "loading-fill"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$("width: " + _vm_.loadingProgress + "px");
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "loading-percent"
                                    ],
                                    value: function() {
                                        return _vm_.loadingProgress + "%";
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "menu"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.menuDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "Minecraft 2D"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: "2D BLOCK ADVENTURE"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "play-button"
                                    ],
                                    type: "button",
                                    value: "PLAY",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.startGame(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "settings-button"
                                    ],
                                    type: "button",
                                    value: "SETTINGS",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.openSettings(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "settings"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.settingsDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "SETTINGS"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: function() {
                                        return _vm_.settingsSectionTitle;
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "settings-panel"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("display: " + _vm_.settingsMainDisplay);
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-label"
                                        ],
                                        value: "SECTIONS"
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-btn"
                                        ],
                                        type: "button",
                                        value: "DISPLAY",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openSettingsDisplay(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-btn"
                                        ],
                                        type: "button",
                                        value: "CONTROLS",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openSettingsControls(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-btn"
                                        ],
                                        type: "button",
                                        value: "GAME",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openSettingsGame(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-btn"
                                        ],
                                        type: "button",
                                        value: "GRAPHICS",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openSettingsGraphics(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "section-btn"
                                        ],
                                        type: "button",
                                        value: "ACCESSIBILITY",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openSettingsAccessibility(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "close-inv"
                                        ],
                                        type: "button",
                                        value: "BACK",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.closeSettings(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "settings-panel"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("display: " + _vm_.settingsDisplaySectionDisplay);
                                    }
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.dayNightLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleDayNight(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.showGridLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleGrid(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.blockOutlineLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleBlockOutline(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.zoomDefaultLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.cycleDefaultZoom(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "close-inv"
                                        ],
                                        type: "button",
                                        value: "BACK",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.backSettingsMain(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "settings-panel"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("display: " + _vm_.settingsControlsSectionDisplay);
                                    }
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.autoJumpLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleAutoJump(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "close-inv"
                                        ],
                                        type: "button",
                                        value: "BACK",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.backSettingsMain(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "settings-panel"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("display: " + _vm_.settingsGameSectionDisplay);
                                    }
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.confirmResetLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleConfirmReset(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.pauseMenusLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.togglePauseMenus(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.netherUnlockLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.cycleNetherUnlock(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.endUnlockLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.cycleEndUnlock(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.endWinLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.cycleEndWinTarget(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "close-inv"
                                        ],
                                        type: "button",
                                        value: "BACK",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.backSettingsMain(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "settings-panel"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("display: " + _vm_.settingsGraphicsSectionDisplay);
                                    }
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.worldAnimationLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleWorldAnimation(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.waterAnimationLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleWaterAnimation(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.leafAnimationLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleLeafAnimation(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.nightDarknessLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.cycleNightDarkness(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.weatherLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleWeather(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "close-inv"
                                        ],
                                        type: "button",
                                        value: "BACK",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.backSettingsMain(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "settings-panel"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("display: " + _vm_.settingsAccessibilitySectionDisplay);
                                    }
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.highContrastLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleHighContrast(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.largeOutlineLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleLargeOutline(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "setting-btn"
                                        ],
                                        type: "button",
                                        value: function() {
                                            return _vm_.largeTextLabel;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleLargeText(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "close-inv"
                                        ],
                                        type: "button",
                                        value: "BACK",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.backSettingsMain(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "slots"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.slotMenuDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "SELECT WORLD"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: "5 WORLDS"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-button"
                                    ],
                                    type: "button",
                                    value: "WORLD 1",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectSlot1(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-info"
                                    ],
                                    value: "NORMAL WORLD"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-button"
                                    ],
                                    type: "button",
                                    value: "WORLD 2",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectSlot2(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-info"
                                    ],
                                    value: "HOUSE WORLD"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-button"
                                    ],
                                    type: "button",
                                    value: "WORLD 3",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectSlot3(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-info"
                                    ],
                                    value: "VILLAGE WORLD"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-button"
                                    ],
                                    type: "button",
                                    value: "WORLD 4",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectSlot4(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-info"
                                    ],
                                    value: "DEEP MINE"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-button"
                                    ],
                                    type: "button",
                                    value: "WORLD 5",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectSlot5(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "slot-info"
                                    ],
                                    value: "ISLAND WORLD"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "game"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.gameDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "hud"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "title"
                                        ],
                                        value: "Minecraft 2D"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "hud-line"
                                        ],
                                        value: function() {
                                            return _vm_.hudLine;
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "world"
                                    ]
                                }
                            }, [
                                aiot.__cf__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        exp: function() {
                                            return _vm_.visibleWorld;
                                        },
                                        key: "$idx",
                                        value: "$item"
                                    }
                                }, function($idx, $item) {
                                    return [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "cell"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.tapCell($item.x, $item.y, evt);
                                                    }
                                                },
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$($item.style);
                                                },
                                                value: function() {
                                                    return $item.char;
                                                }
                                            }
                                        }, [])
                                    ];
                                })
                            ]),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "status"
                                    ],
                                    value: function() {
                                        return _vm_.status;
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "controls-row"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$(_vm_.controlsRowStyle);
                                    }
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "LEFT",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.moveLeft(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "JUMP",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.jump(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "RIGHT",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.moveRight(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "controls-row"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$(_vm_.controlsRowStyle);
                                    }
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "MINE",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.setMineMode(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "PLACE",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.setPlaceMode(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "INVENTORY",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openInventory(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "controls-row"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$(_vm_.controlsRowStyle);
                                    }
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "ZOOM-",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.zoomOut(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "ZOOM+",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.zoomIn(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "SLOTS",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.backToSlots(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "controls-row"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$(_vm_.controlsRowStyle);
                                    }
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "RESET",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.resetGame(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "control"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$(_vm_.controlStyle);
                                        },
                                        type: "button",
                                        value: "MORE",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openExtra(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "extra"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.extraDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "MORE"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: "TOOLS / MAP / GOALS"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    type: "button",
                                    value: "MAP",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.openMap(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    type: "button",
                                    value: "TOOLS",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.openTools(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    type: "button",
                                    value: "QUESTS",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.openQuests(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    type: "button",
                                    value: "ACHIEVEMENTS",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.openAchievements(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    type: "button",
                                    value: "CRAFT",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.openCraft(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    type: "button",
                                    value: "WORLDS",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.openWorlds(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "CLOSE",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeExtra(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "worlds-screen"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.worldsDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "WORLDS"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: "DIMENSIONS"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    type: "button",
                                    value: "NORMAL WORLD",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.switchToNormalWorld(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "worlds-info"
                                    ],
                                    value: "SAVED NORMAL WORLD"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$(_vm_.worldsNetherStyle);
                                    },
                                    type: "button",
                                    value: function() {
                                        return _vm_.worldsNetherLabel;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.switchToNetherWorld(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "worlds-info"
                                    ],
                                    value: function() {
                                        return _vm_.netherProgressLabel;
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$(_vm_.worldsEndStyle);
                                    },
                                    type: "button",
                                    value: function() {
                                        return _vm_.worldsEndLabel;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.switchToEndWorld(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "worlds-info"
                                    ],
                                    value: function() {
                                        return _vm_.endProgressLabel;
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "BACK",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeWorlds(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "slots-confirm-screen"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.slotsConfirmDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "confirm-title"
                                    ],
                                    value: "RETURN TO SLOTS?"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: "SELECTING A SLOT RESETS WORLD"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "section-btn"
                                    ],
                                    type: "button",
                                    value: "YES, OPEN SLOTS",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.confirmBackToSlots(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "CANCEL",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.cancelBackToSlots(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "victory-screen"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.victoryDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "victory-stars"
                                    ],
                                    value: "* * * * *"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "victory-title"
                                    ],
                                    value: "VICTORY!"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "victory-subtitle"
                                    ],
                                    value: "YOU CONQUERED THE END"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "victory-progress"
                                    ],
                                    value: function() {
                                        return _vm_.endMinedTotal + " / " + _vm_.endWinTarget + " END BLOCKS";
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "victory-menu"
                                    ],
                                    type: "button",
                                    value: "MENU",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.returnToMainMenu(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "craft-screen"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.craftDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "CRAFT"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: "USE MATERIALS TO CRAFT BLOCKS"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-info"
                                    ],
                                    value: function() {
                                        return "WOOD " + _vm_.inventory.wood + " | SAND " + _vm_.inventory.sand + " | COAL " + _vm_.inventory.coal;
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "GLASS  1 SAND -> 1",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.craftGlass(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "BRICK  2 STONE -> 1",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.craftBrick(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "TORCH  1 COAL + 1 WOOD -> 2",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.craftTorch(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "CHEST  4 WOOD -> 1",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.craftChest(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "CRAFTING TABLE  4 WOOD -> 1",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.craftCraftingTable(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-status"
                                    ],
                                    value: function() {
                                        return _vm_.craftStatus;
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "BACK",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeCraft(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "workbench-screen"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.workbenchDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "CRAFTING TABLE"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: "CRAFT / REPAIR"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-info"
                                    ],
                                    value: function() {
                                        return "PICKAXE " + _vm_.pickaxeDurability + "% | AXE " + _vm_.axeDurability + "%";
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-info"
                                    ],
                                    value: function() {
                                        return "WOOD " + _vm_.inventory.wood + " | STONE " + _vm_.inventory.stone + " | IRON " + _vm_.inventory.iron;
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "PICKAXE: WOOD +10",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.repairPickaxeWood(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "PICKAXE: STONE +50",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.repairPickaxeStone(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "PICKAXE: IRON +100",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.repairPickaxeIron(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "AXE: WOOD +10",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.repairAxeWood(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "AXE: STONE +50",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.repairAxeStone(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-btn"
                                    ],
                                    type: "button",
                                    value: "AXE: IRON +100",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.repairAxeIron(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "craft-status"
                                    ],
                                    value: function() {
                                        return _vm_.workbenchStatus;
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "CLOSE",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeWorkbench(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "map-screen"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.mapDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "MAP"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "map-text"
                                    ],
                                    value: function() {
                                        return _vm_.mapText;
                                    }
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "map-hint"
                                    ],
                                    value: "@ PLAYER # LAND ~ WATER"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "CLOSE",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeMap(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "tools-screen"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.toolsDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "TOOLS"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: function() {
                                        return _vm_.toolLabel;
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-btn"
                                    ],
                                    type: "button",
                                    value: function() {
                                        return "PICKAXE " + _vm_.pickaxeDurability + "%";
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectPickaxe(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-btn"
                                    ],
                                    type: "button",
                                    value: function() {
                                        return "AXE " + _vm_.axeDurability + "%";
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectAxe(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "setting-btn"
                                    ],
                                    type: "button",
                                    value: "HAND",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.selectHand(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "CLOSE",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeTools(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "quests-screen"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.questsDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "QUESTS"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "quest-text"
                                    ],
                                    value: function() {
                                        return _vm_.questText;
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "CLOSE",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeQuests(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "ach-screen"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.achievementsDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "ACHIEVEMENTS"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "quest-text"
                                    ],
                                    value: function() {
                                        return _vm_.achievementText;
                                    }
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "CLOSE",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeAchievements(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "inventory"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.inventoryDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "INVENTORY"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: "SELECT BLOCK"
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "inv-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectDirtFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "DIRT"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.dirt;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectStoneFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "STONE"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.stone;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectWoodFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "WOOD"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.wood;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectLeafFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "LEAF"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.leaf;
                                            }
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "inv-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectSandFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "SAND"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.sand;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectGlassFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "GLASS"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.glass;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectBrickFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "BRICK"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.brick;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectTorchFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "TORCH"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.torch;
                                            }
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "inv-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectWaterFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "WATER"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.water;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectChestFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "CHEST"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.chest;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectCoalFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "COAL"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.coal;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectIronFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "IRON"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.iron;
                                            }
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "inv-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$("display: " + _vm_.craftingTableButtonDisplay);
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectCraftingTableFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "TABLE"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.craftingTable;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectGoldFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "GOLD"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.gold;
                                            }
                                        }
                                    }, [])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.selectDiamondFromInventory(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-name"
                                            ],
                                            value: "DIAMOND"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-count"
                                            ],
                                            value: function() {
                                                return _vm_.inventory.diamond;
                                            }
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "nether-arrow"
                                    ],
                                    type: "button",
                                    value: function() {
                                        return _vm_.netherInventoryLabel;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.toggleNetherInventory(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "nether-blocks"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("display: " + _vm_.netherInventoryDisplay);
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-row"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectNetherrackFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "NETHERRACK"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.netherrack;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectSoulSandFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "SOUL SAND"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.soulSand;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectGlowstoneFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "GLOWSTONE"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.glowstone;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectNetherBrickFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "NETHER BRICK"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.netherBrick;
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-row"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectQuartzOreFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "QUARTZ"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.quartzOre;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectBlackstoneFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "BLACKSTONE"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.blackstone;
                                                }
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "end-arrow"
                                    ],
                                    type: "button",
                                    value: function() {
                                        return _vm_.endInventoryLabel;
                                    },
                                    events: {
                                        click: function(evt) {
                                            return _vm_.toggleEndInventory(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "end-blocks"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("display: " + _vm_.endInventoryDisplay);
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-row"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectEndStoneFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "END STONE"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.endStone;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectObsidianFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "OBSIDIAN"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.obsidian;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectPurpurFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "PURPUR"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.purpur;
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "inv-row"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectChorusPlantFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "CHORUS"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.chorusPlant;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectEndBrickFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "END BRICK"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.endBrick;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "inv-btn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectEndOreFromInventory(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-name"
                                                ],
                                                value: "END ORE"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "inv-count"
                                                ],
                                                value: function() {
                                                    return _vm_.inventory.endOre;
                                                }
                                            }
                                        }, [])
                                    ])
                                ])
                            ]),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "CLOSE",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeInventory(evt);
                                        }
                                    }
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "chest"
                                ],
                                style: function() {
                                    return __webpack_require__.g.$translateStyle$("display: " + _vm_.chestDisplay);
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-title"
                                    ],
                                    value: "CHEST"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "menu-subtitle"
                                    ],
                                    value: function() {
                                        return _vm_.selectedBlock + " | PLAYER " + _vm_.selectedCountText() + " | CHEST " + _vm_.chestCount();
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "chest-slot"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "chest-block"
                                        ],
                                        value: function() {
                                            return _vm_.selectedBlock;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "chest-count"
                                        ],
                                        value: function() {
                                            return _vm_.chestCount();
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "chest-row"
                                    ]
                                }
                            }, [
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "chest-btn"
                                        ],
                                        type: "button",
                                        value: "STORE",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.storeInChest(evt);
                                            }
                                        }
                                    }
                                }, []),
                                aiot.__ce__("input", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "chest-btn"
                                        ],
                                        type: "button",
                                        value: "TAKE",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.takeFromChest(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "chest-hint"
                                    ],
                                    value: "Choose a block in INVENTORY first"
                                }
                            }, []),
                            aiot.__ce__("input", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "close-inv"
                                    ],
                                    type: "button",
                                    value: "CLOSE",
                                    events: {
                                        click: function(evt) {
                                            return _vm_.closeChest(evt);
                                        }
                                    }
                                }
                            }, [])
                        ])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGluZGV4XFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZXN0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly90ZXN0L3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL3Rlc3Qvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTJcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMlwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ1wiIHN0eWxlPVwiZGlzcGxheToge3sgbG9hZGluZ0Rpc3BsYXkgfX1cIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibG9hZGluZy10aXRsZVwiPk1pbmVjcmFmdCAyRDwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibG9hZGluZy1sYWJlbFwiPnt7IGxvYWRpbmdMYWJlbCB9fTwvdGV4dD5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWJhclwiPjxkaXYgY2xhc3M9XCJsb2FkaW5nLWZpbGxcIiBzdHlsZT1cIndpZHRoOiB7eyBsb2FkaW5nUHJvZ3Jlc3MgfX1weFwiPjwvZGl2PjwvZGl2PlxuICAgICAgPHRleHQgY2xhc3M9XCJsb2FkaW5nLXBlcmNlbnRcIj57eyBsb2FkaW5nUHJvZ3Jlc3MgfX0lPC90ZXh0PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1lbnVcIiBzdHlsZT1cImRpc3BsYXk6IHt7IG1lbnVEaXNwbGF5IH19XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGl0bGVcIj5NaW5lY3JhZnQgMkQ8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtc3VidGl0bGVcIj4yRCBCTE9DSyBBRFZFTlRVUkU8L3RleHQ+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJwbGF5LWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlBMQVlcIiBvbmNsaWNrPVwic3RhcnRHYW1lXCIgLz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmdzLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlNFVFRJTkdTXCIgb25jbGljaz1cIm9wZW5TZXR0aW5nc1wiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3NcIiBzdHlsZT1cImRpc3BsYXk6IHt7IHNldHRpbmdzRGlzcGxheSB9fVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRpdGxlXCI+U0VUVElOR1M8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtc3VidGl0bGVcIj57eyBzZXR0aW5nc1NlY3Rpb25UaXRsZSB9fTwvdGV4dD5cblxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXBhbmVsXCIgc3R5bGU9XCJkaXNwbGF5OiB7eyBzZXR0aW5nc01haW5EaXNwbGF5IH19XCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic2VjdGlvbi1sYWJlbFwiPlNFQ1RJT05TPC90ZXh0PlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZWN0aW9uLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkRJU1BMQVlcIiBvbmNsaWNrPVwib3BlblNldHRpbmdzRGlzcGxheVwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNlY3Rpb24tYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ09OVFJPTFNcIiBvbmNsaWNrPVwib3BlblNldHRpbmdzQ29udHJvbHNcIiAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZWN0aW9uLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkdBTUVcIiBvbmNsaWNrPVwib3BlblNldHRpbmdzR2FtZVwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNlY3Rpb24tYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiR1JBUEhJQ1NcIiBvbmNsaWNrPVwib3BlblNldHRpbmdzR3JhcGhpY3NcIiAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZWN0aW9uLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkFDQ0VTU0lCSUxJVFlcIiBvbmNsaWNrPVwib3BlblNldHRpbmdzQWNjZXNzaWJpbGl0eVwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNsb3NlLWludlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkJBQ0tcIiBvbmNsaWNrPVwiY2xvc2VTZXR0aW5nc1wiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXBhbmVsXCIgc3R5bGU9XCJkaXNwbGF5OiB7eyBzZXR0aW5nc0Rpc3BsYXlTZWN0aW9uRGlzcGxheSB9fVwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5nLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IGRheU5pZ2h0TGFiZWwgfX1cIiBvbmNsaWNrPVwidG9nZ2xlRGF5TmlnaHRcIiAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5nLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IHNob3dHcmlkTGFiZWwgfX1cIiBvbmNsaWNrPVwidG9nZ2xlR3JpZFwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmctYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgYmxvY2tPdXRsaW5lTGFiZWwgfX1cIiBvbmNsaWNrPVwidG9nZ2xlQmxvY2tPdXRsaW5lXCIgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZy1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7eyB6b29tRGVmYXVsdExhYmVsIH19XCIgb25jbGljaz1cImN5Y2xlRGVmYXVsdFpvb21cIiAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJjbG9zZS1pbnZcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJCQUNLXCIgb25jbGljaz1cImJhY2tTZXR0aW5nc01haW5cIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1wYW5lbFwiIHN0eWxlPVwiZGlzcGxheToge3sgc2V0dGluZ3NDb250cm9sc1NlY3Rpb25EaXNwbGF5IH19XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmctYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgYXV0b0p1bXBMYWJlbCB9fVwiIG9uY2xpY2s9XCJ0b2dnbGVBdXRvSnVtcFwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNsb3NlLWludlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkJBQ0tcIiBvbmNsaWNrPVwiYmFja1NldHRpbmdzTWFpblwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXBhbmVsXCIgc3R5bGU9XCJkaXNwbGF5OiB7eyBzZXR0aW5nc0dhbWVTZWN0aW9uRGlzcGxheSB9fVwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5nLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IGNvbmZpcm1SZXNldExhYmVsIH19XCIgb25jbGljaz1cInRvZ2dsZUNvbmZpcm1SZXNldFwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmctYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgcGF1c2VNZW51c0xhYmVsIH19XCIgb25jbGljaz1cInRvZ2dsZVBhdXNlTWVudXNcIiAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5nLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IG5ldGhlclVubG9ja0xhYmVsIH19XCIgb25jbGljaz1cImN5Y2xlTmV0aGVyVW5sb2NrXCIgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZy1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7eyBlbmRVbmxvY2tMYWJlbCB9fVwiIG9uY2xpY2s9XCJjeWNsZUVuZFVubG9ja1wiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmctYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgZW5kV2luTGFiZWwgfX1cIiBvbmNsaWNrPVwiY3ljbGVFbmRXaW5UYXJnZXRcIiAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJjbG9zZS1pbnZcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJCQUNLXCIgb25jbGljaz1cImJhY2tTZXR0aW5nc01haW5cIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1wYW5lbFwiIHN0eWxlPVwiZGlzcGxheToge3sgc2V0dGluZ3NHcmFwaGljc1NlY3Rpb25EaXNwbGF5IH19XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmctYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgd29ybGRBbmltYXRpb25MYWJlbCB9fVwiIG9uY2xpY2s9XCJ0b2dnbGVXb3JsZEFuaW1hdGlvblwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmctYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgd2F0ZXJBbmltYXRpb25MYWJlbCB9fVwiIG9uY2xpY2s9XCJ0b2dnbGVXYXRlckFuaW1hdGlvblwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmctYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgbGVhZkFuaW1hdGlvbkxhYmVsIH19XCIgb25jbGljaz1cInRvZ2dsZUxlYWZBbmltYXRpb25cIiAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5nLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IG5pZ2h0RGFya25lc3NMYWJlbCB9fVwiIG9uY2xpY2s9XCJjeWNsZU5pZ2h0RGFya25lc3NcIiAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5nLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IHdlYXRoZXJMYWJlbCB9fVwiIG9uY2xpY2s9XCJ0b2dnbGVXZWF0aGVyXCIgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY2xvc2UtaW52XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQkFDS1wiIG9uY2xpY2s9XCJiYWNrU2V0dGluZ3NNYWluXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtcGFuZWxcIiBzdHlsZT1cImRpc3BsYXk6IHt7IHNldHRpbmdzQWNjZXNzaWJpbGl0eVNlY3Rpb25EaXNwbGF5IH19XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmctYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgaGlnaENvbnRyYXN0TGFiZWwgfX1cIiBvbmNsaWNrPVwidG9nZ2xlSGlnaENvbnRyYXN0XCIgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZy1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7eyBsYXJnZU91dGxpbmVMYWJlbCB9fVwiIG9uY2xpY2s9XCJ0b2dnbGVMYXJnZU91dGxpbmVcIiAvPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5nLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IGxhcmdlVGV4dExhYmVsIH19XCIgb25jbGljaz1cInRvZ2dsZUxhcmdlVGV4dFwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNsb3NlLWludlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkJBQ0tcIiBvbmNsaWNrPVwiYmFja1NldHRpbmdzTWFpblwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzbG90c1wiIHN0eWxlPVwiZGlzcGxheToge3sgc2xvdE1lbnVEaXNwbGF5IH19XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGl0bGVcIj5TRUxFQ1QgV09STEQ8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtc3VidGl0bGVcIj41IFdPUkxEUzwvdGV4dD5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNsb3QtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiV09STEQgMVwiIG9uY2xpY2s9XCJzZWxlY3RTbG90MVwiIC8+PHRleHQgY2xhc3M9XCJzbG90LWluZm9cIj5OT1JNQUwgV09STEQ8L3RleHQ+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzbG90LWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIldPUkxEIDJcIiBvbmNsaWNrPVwic2VsZWN0U2xvdDJcIiAvPjx0ZXh0IGNsYXNzPVwic2xvdC1pbmZvXCI+SE9VU0UgV09STEQ8L3RleHQ+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzbG90LWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIldPUkxEIDNcIiBvbmNsaWNrPVwic2VsZWN0U2xvdDNcIiAvPjx0ZXh0IGNsYXNzPVwic2xvdC1pbmZvXCI+VklMTEFHRSBXT1JMRDwvdGV4dD5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNsb3QtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiV09STEQgNFwiIG9uY2xpY2s9XCJzZWxlY3RTbG90NFwiIC8+PHRleHQgY2xhc3M9XCJzbG90LWluZm9cIj5ERUVQIE1JTkU8L3RleHQ+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzbG90LWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIldPUkxEIDVcIiBvbmNsaWNrPVwic2VsZWN0U2xvdDVcIiAvPjx0ZXh0IGNsYXNzPVwic2xvdC1pbmZvXCI+SVNMQU5EIFdPUkxEPC90ZXh0PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImdhbWVcIiBzdHlsZT1cImRpc3BsYXk6IHt7IGdhbWVEaXNwbGF5IH19XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaHVkXCI+PHRleHQgY2xhc3M9XCJ0aXRsZVwiPk1pbmVjcmFmdCAyRDwvdGV4dD48dGV4dCBjbGFzcz1cImh1ZC1saW5lXCI+e3sgaHVkTGluZSB9fTwvdGV4dD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3b3JsZFwiPjx0ZXh0IGNsYXNzPVwiY2VsbFwiIGZvcj1cInt7IHZpc2libGVXb3JsZCB9fVwiIG9uY2xpY2s9XCJ0YXBDZWxsKCRpdGVtLngsICRpdGVtLnkpXCIgc3R5bGU9XCJ7eyAkaXRlbS5zdHlsZSB9fVwiPnt7ICRpdGVtLmNoYXIgfX08L3RleHQ+PC9kaXY+XG4gICAgICA8dGV4dCBjbGFzcz1cInN0YXR1c1wiPnt7IHN0YXR1cyB9fTwvdGV4dD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scy1yb3dcIiBzdHlsZT1cInt7IGNvbnRyb2xzUm93U3R5bGUgfX1cIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY29udHJvbFwiIHN0eWxlPVwie3sgY29udHJvbFN0eWxlIH19XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTEVGVFwiIG9uY2xpY2s9XCJtb3ZlTGVmdFwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbnRyb2xcIiBzdHlsZT1cInt7IGNvbnRyb2xTdHlsZSB9fVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkpVTVBcIiBvbmNsaWNrPVwianVtcFwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbnRyb2xcIiBzdHlsZT1cInt7IGNvbnRyb2xTdHlsZSB9fVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlJJR0hUXCIgb25jbGljaz1cIm1vdmVSaWdodFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scy1yb3dcIiBzdHlsZT1cInt7IGNvbnRyb2xzUm93U3R5bGUgfX1cIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY29udHJvbFwiIHN0eWxlPVwie3sgY29udHJvbFN0eWxlIH19XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTUlORVwiIG9uY2xpY2s9XCJzZXRNaW5lTW9kZVwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbnRyb2xcIiBzdHlsZT1cInt7IGNvbnRyb2xTdHlsZSB9fVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlBMQUNFXCIgb25jbGljaz1cInNldFBsYWNlTW9kZVwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbnRyb2xcIiBzdHlsZT1cInt7IGNvbnRyb2xTdHlsZSB9fVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIklOVkVOVE9SWVwiIG9uY2xpY2s9XCJvcGVuSW52ZW50b3J5XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzLXJvd1wiIHN0eWxlPVwie3sgY29udHJvbHNSb3dTdHlsZSB9fVwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJjb250cm9sXCIgc3R5bGU9XCJ7eyBjb250cm9sU3R5bGUgfX1cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJaT09NLVwiIG9uY2xpY2s9XCJ6b29tT3V0XCIgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY29udHJvbFwiIHN0eWxlPVwie3sgY29udHJvbFN0eWxlIH19XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiWk9PTStcIiBvbmNsaWNrPVwiem9vbUluXCIgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY29udHJvbFwiIHN0eWxlPVwie3sgY29udHJvbFN0eWxlIH19XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU0xPVFNcIiBvbmNsaWNrPVwiYmFja1RvU2xvdHNcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHMtcm93XCIgc3R5bGU9XCJ7eyBjb250cm9sc1Jvd1N0eWxlIH19XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbnRyb2xcIiBzdHlsZT1cInt7IGNvbnRyb2xTdHlsZSB9fVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlJFU0VUXCIgb25jbGljaz1cInJlc2V0R2FtZVwiIC8+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbnRyb2xcIiBzdHlsZT1cInt7IGNvbnRyb2xTdHlsZSB9fVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIk1PUkVcIiBvbmNsaWNrPVwib3BlbkV4dHJhXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImV4dHJhXCIgc3R5bGU9XCJkaXNwbGF5OiB7eyBleHRyYURpc3BsYXkgfX1cIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10aXRsZVwiPk1PUkU8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtc3VidGl0bGVcIj5UT09MUyAvIE1BUCAvIEdPQUxTPC90ZXh0PlxuICAgICAgPGlucHV0IGNsYXNzPVwic2VjdGlvbi1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJNQVBcIiBvbmNsaWNrPVwib3Blbk1hcFwiIC8+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZWN0aW9uLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlRPT0xTXCIgb25jbGljaz1cIm9wZW5Ub29sc1wiIC8+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZWN0aW9uLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlFVRVNUU1wiIG9uY2xpY2s9XCJvcGVuUXVlc3RzXCIgLz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNlY3Rpb24tYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQUNISUVWRU1FTlRTXCIgb25jbGljaz1cIm9wZW5BY2hpZXZlbWVudHNcIiAvPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2VjdGlvbi1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDUkFGVFwiIG9uY2xpY2s9XCJvcGVuQ3JhZnRcIiAvPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2VjdGlvbi1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJXT1JMRFNcIiBvbmNsaWNrPVwib3Blbldvcmxkc1wiIC8+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjbG9zZS1pbnZcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDTE9TRVwiIG9uY2xpY2s9XCJjbG9zZUV4dHJhXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ3b3JsZHMtc2NyZWVuXCIgc3R5bGU9XCJkaXNwbGF5OiB7eyB3b3JsZHNEaXNwbGF5IH19XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGl0bGVcIj5XT1JMRFM8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtc3VidGl0bGVcIj5ESU1FTlNJT05TPC90ZXh0PlxuICAgICAgPGlucHV0IGNsYXNzPVwic2VjdGlvbi1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJOT1JNQUwgV09STERcIiBvbmNsaWNrPVwic3dpdGNoVG9Ob3JtYWxXb3JsZFwiIC8+XG4gICAgICA8dGV4dCBjbGFzcz1cIndvcmxkcy1pbmZvXCI+U0FWRUQgTk9STUFMIFdPUkxEPC90ZXh0PlxuICAgICAgPGlucHV0IGNsYXNzPVwic2VjdGlvbi1idG5cIiBzdHlsZT1cInt7IHdvcmxkc05ldGhlclN0eWxlIH19XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgd29ybGRzTmV0aGVyTGFiZWwgfX1cIiBvbmNsaWNrPVwic3dpdGNoVG9OZXRoZXJXb3JsZFwiIC8+XG4gICAgICA8dGV4dCBjbGFzcz1cIndvcmxkcy1pbmZvXCI+e3sgbmV0aGVyUHJvZ3Jlc3NMYWJlbCB9fTwvdGV4dD5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNlY3Rpb24tYnRuXCIgc3R5bGU9XCJ7eyB3b3JsZHNFbmRTdHlsZSB9fVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IHdvcmxkc0VuZExhYmVsIH19XCIgb25jbGljaz1cInN3aXRjaFRvRW5kV29ybGRcIiAvPlxuICAgICAgPHRleHQgY2xhc3M9XCJ3b3JsZHMtaW5mb1wiPnt7IGVuZFByb2dyZXNzTGFiZWwgfX08L3RleHQ+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjbG9zZS1pbnZcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJCQUNLXCIgb25jbGljaz1cImNsb3NlV29ybGRzXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzbG90cy1jb25maXJtLXNjcmVlblwiIHN0eWxlPVwiZGlzcGxheToge3sgc2xvdHNDb25maXJtRGlzcGxheSB9fVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJjb25maXJtLXRpdGxlXCI+UkVUVVJOIFRPIFNMT1RTPzwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS1zdWJ0aXRsZVwiPlNFTEVDVElORyBBIFNMT1QgUkVTRVRTIFdPUkxEPC90ZXh0PlxuICAgICAgPGlucHV0IGNsYXNzPVwic2VjdGlvbi1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJZRVMsIE9QRU4gU0xPVFNcIiBvbmNsaWNrPVwiY29uZmlybUJhY2tUb1Nsb3RzXCIgLz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNsb3NlLWludlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNBTkNFTFwiIG9uY2xpY2s9XCJjYW5jZWxCYWNrVG9TbG90c1wiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidmljdG9yeS1zY3JlZW5cIiBzdHlsZT1cImRpc3BsYXk6IHt7IHZpY3RvcnlEaXNwbGF5IH19XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cInZpY3Rvcnktc3RhcnNcIj4qICogKiAqICo8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cInZpY3RvcnktdGl0bGVcIj5WSUNUT1JZITwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwidmljdG9yeS1zdWJ0aXRsZVwiPllPVSBDT05RVUVSRUQgVEhFIEVORDwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwidmljdG9yeS1wcm9ncmVzc1wiPnt7IGVuZE1pbmVkVG90YWwgfX0gLyB7eyBlbmRXaW5UYXJnZXQgfX0gRU5EIEJMT0NLUzwvdGV4dD5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInZpY3RvcnktbWVudVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIk1FTlVcIiBvbmNsaWNrPVwicmV0dXJuVG9NYWluTWVudVwiIC8+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJjcmFmdC1zY3JlZW5cIiBzdHlsZT1cImRpc3BsYXk6IHt7IGNyYWZ0RGlzcGxheSB9fVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRpdGxlXCI+Q1JBRlQ8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtc3VidGl0bGVcIj5VU0UgTUFURVJJQUxTIFRPIENSQUZUIEJMT0NLUzwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY3JhZnQtaW5mb1wiPldPT0Qge3sgaW52ZW50b3J5Lndvb2QgfX0gfCBTQU5EIHt7IGludmVudG9yeS5zYW5kIH19IHwgQ09BTCB7eyBpbnZlbnRvcnkuY29hbCB9fTwvdGV4dD5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNyYWZ0LWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkdMQVNTICAxIFNBTkQgLT4gMVwiIG9uY2xpY2s9XCJjcmFmdEdsYXNzXCIgLz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNyYWZ0LWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkJSSUNLICAyIFNUT05FIC0+IDFcIiBvbmNsaWNrPVwiY3JhZnRCcmlja1wiIC8+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjcmFmdC1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJUT1JDSCAgMSBDT0FMICsgMSBXT09EIC0+IDJcIiBvbmNsaWNrPVwiY3JhZnRUb3JjaFwiIC8+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjcmFmdC1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDSEVTVCAgNCBXT09EIC0+IDFcIiBvbmNsaWNrPVwiY3JhZnRDaGVzdFwiIC8+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjcmFmdC1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDUkFGVElORyBUQUJMRSAgNCBXT09EIC0+IDFcIiBvbmNsaWNrPVwiY3JhZnRDcmFmdGluZ1RhYmxlXCIgLz5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY3JhZnQtc3RhdHVzXCI+e3sgY3JhZnRTdGF0dXMgfX08L3RleHQ+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjbG9zZS1pbnZcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJCQUNLXCIgb25jbGljaz1cImNsb3NlQ3JhZnRcIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIndvcmtiZW5jaC1zY3JlZW5cIiBzdHlsZT1cImRpc3BsYXk6IHt7IHdvcmtiZW5jaERpc3BsYXkgfX1cIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10aXRsZVwiPkNSQUZUSU5HIFRBQkxFPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXN1YnRpdGxlXCI+Q1JBRlQgLyBSRVBBSVI8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cImNyYWZ0LWluZm9cIj5QSUNLQVhFIHt7IHBpY2theGVEdXJhYmlsaXR5IH19JSB8IEFYRSB7eyBheGVEdXJhYmlsaXR5IH19JTwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwiY3JhZnQtaW5mb1wiPldPT0Qge3sgaW52ZW50b3J5Lndvb2QgfX0gfCBTVE9ORSB7eyBpbnZlbnRvcnkuc3RvbmUgfX0gfCBJUk9OIHt7IGludmVudG9yeS5pcm9uIH19PC90ZXh0PlxuICAgICAgPGlucHV0IGNsYXNzPVwiY3JhZnQtYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiUElDS0FYRTogV09PRCArMTBcIiBvbmNsaWNrPVwicmVwYWlyUGlja2F4ZVdvb2RcIiAvPlxuICAgICAgPGlucHV0IGNsYXNzPVwiY3JhZnQtYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiUElDS0FYRTogU1RPTkUgKzUwXCIgb25jbGljaz1cInJlcGFpclBpY2theGVTdG9uZVwiIC8+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjcmFmdC1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJQSUNLQVhFOiBJUk9OICsxMDBcIiBvbmNsaWNrPVwicmVwYWlyUGlja2F4ZUlyb25cIiAvPlxuICAgICAgPGlucHV0IGNsYXNzPVwiY3JhZnQtYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQVhFOiBXT09EICsxMFwiIG9uY2xpY2s9XCJyZXBhaXJBeGVXb29kXCIgLz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNyYWZ0LWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkFYRTogU1RPTkUgKzUwXCIgb25jbGljaz1cInJlcGFpckF4ZVN0b25lXCIgLz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNyYWZ0LWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkFYRTogSVJPTiArMTAwXCIgb25jbGljaz1cInJlcGFpckF4ZUlyb25cIiAvPlxuICAgICAgPHRleHQgY2xhc3M9XCJjcmFmdC1zdGF0dXNcIj57eyB3b3JrYmVuY2hTdGF0dXMgfX08L3RleHQ+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjbG9zZS1pbnZcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDTE9TRVwiIG9uY2xpY2s9XCJjbG9zZVdvcmtiZW5jaFwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWFwLXNjcmVlblwiIHN0eWxlPVwiZGlzcGxheToge3sgbWFwRGlzcGxheSB9fVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRpdGxlXCI+TUFQPC90ZXh0PlxuICAgICAgPHRleHQgY2xhc3M9XCJtYXAtdGV4dFwiPnt7IG1hcFRleHQgfX08L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1hcC1oaW50XCI+QCBQTEFZRVIgICMgTEFORCAgfiBXQVRFUjwvdGV4dD5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNsb3NlLWludlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNMT1NFXCIgb25jbGljaz1cImNsb3NlTWFwXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0b29scy1zY3JlZW5cIiBzdHlsZT1cImRpc3BsYXk6IHt7IHRvb2xzRGlzcGxheSB9fVwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJtZW51LXRpdGxlXCI+VE9PTFM8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtc3VidGl0bGVcIj57eyB0b29sTGFiZWwgfX08L3RleHQ+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5nLWJ0blwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlBJQ0tBWEUge3sgcGlja2F4ZUR1cmFiaWxpdHkgfX0lXCIgb25jbGljaz1cInNlbGVjdFBpY2theGVcIiAvPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZy1idG5cIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJBWEUge3sgYXhlRHVyYWJpbGl0eSB9fSVcIiBvbmNsaWNrPVwic2VsZWN0QXhlXCIgLz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmctYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiSEFORFwiIG9uY2xpY2s9XCJzZWxlY3RIYW5kXCIgLz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNsb3NlLWludlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNMT1NFXCIgb25jbGljaz1cImNsb3NlVG9vbHNcIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInF1ZXN0cy1zY3JlZW5cIiBzdHlsZT1cImRpc3BsYXk6IHt7IHF1ZXN0c0Rpc3BsYXkgfX1cIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS10aXRsZVwiPlFVRVNUUzwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwicXVlc3QtdGV4dFwiPnt7IHF1ZXN0VGV4dCB9fTwvdGV4dD5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNsb3NlLWludlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNMT1NFXCIgb25jbGljaz1cImNsb3NlUXVlc3RzXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJhY2gtc2NyZWVuXCIgc3R5bGU9XCJkaXNwbGF5OiB7eyBhY2hpZXZlbWVudHNEaXNwbGF5IH19XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGl0bGVcIj5BQ0hJRVZFTUVOVFM8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cInF1ZXN0LXRleHRcIj57eyBhY2hpZXZlbWVudFRleHQgfX08L3RleHQ+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJjbG9zZS1pbnZcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDTE9TRVwiIG9uY2xpY2s9XCJjbG9zZUFjaGlldmVtZW50c1wiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW52ZW50b3J5XCIgc3R5bGU9XCJkaXNwbGF5OiB7eyBpbnZlbnRvcnlEaXNwbGF5IH19XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGl0bGVcIj5JTlZFTlRPUlk8L3RleHQ+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtc3VidGl0bGVcIj5TRUxFQ1QgQkxPQ0s8L3RleHQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW52LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3REaXJ0RnJvbUludmVudG9yeVwiPjx0ZXh0IGNsYXNzPVwiaW52LW5hbWVcIj5ESVJUPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5LmRpcnQgfX08L3RleHQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnYtYnRuXCIgb25jbGljaz1cInNlbGVjdFN0b25lRnJvbUludmVudG9yeVwiPjx0ZXh0IGNsYXNzPVwiaW52LW5hbWVcIj5TVE9ORTwvdGV4dD48dGV4dCBjbGFzcz1cImludi1jb3VudFwiPnt7IGludmVudG9yeS5zdG9uZSB9fTwvdGV4dD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludi1idG5cIiBvbmNsaWNrPVwic2VsZWN0V29vZEZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+V09PRDwvdGV4dD48dGV4dCBjbGFzcz1cImludi1jb3VudFwiPnt7IGludmVudG9yeS53b29kIH19PC90ZXh0PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3RMZWFmRnJvbUludmVudG9yeVwiPjx0ZXh0IGNsYXNzPVwiaW52LW5hbWVcIj5MRUFGPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5LmxlYWYgfX08L3RleHQ+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnYtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnYtYnRuXCIgb25jbGljaz1cInNlbGVjdFNhbmRGcm9tSW52ZW50b3J5XCI+PHRleHQgY2xhc3M9XCJpbnYtbmFtZVwiPlNBTkQ8L3RleHQ+PHRleHQgY2xhc3M9XCJpbnYtY291bnRcIj57eyBpbnZlbnRvcnkuc2FuZCB9fTwvdGV4dD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludi1idG5cIiBvbmNsaWNrPVwic2VsZWN0R2xhc3NGcm9tSW52ZW50b3J5XCI+PHRleHQgY2xhc3M9XCJpbnYtbmFtZVwiPkdMQVNTPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5LmdsYXNzIH19PC90ZXh0PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3RCcmlja0Zyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+QlJJQ0s8L3RleHQ+PHRleHQgY2xhc3M9XCJpbnYtY291bnRcIj57eyBpbnZlbnRvcnkuYnJpY2sgfX08L3RleHQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnYtYnRuXCIgb25jbGljaz1cInNlbGVjdFRvcmNoRnJvbUludmVudG9yeVwiPjx0ZXh0IGNsYXNzPVwiaW52LW5hbWVcIj5UT1JDSDwvdGV4dD48dGV4dCBjbGFzcz1cImludi1jb3VudFwiPnt7IGludmVudG9yeS50b3JjaCB9fTwvdGV4dD48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImludi1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludi1idG5cIiBvbmNsaWNrPVwic2VsZWN0V2F0ZXJGcm9tSW52ZW50b3J5XCI+PHRleHQgY2xhc3M9XCJpbnYtbmFtZVwiPldBVEVSPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5LndhdGVyIH19PC90ZXh0PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3RDaGVzdEZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+Q0hFU1Q8L3RleHQ+PHRleHQgY2xhc3M9XCJpbnYtY291bnRcIj57eyBpbnZlbnRvcnkuY2hlc3QgfX08L3RleHQ+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnYtYnRuXCIgb25jbGljaz1cInNlbGVjdENvYWxGcm9tSW52ZW50b3J5XCI+PHRleHQgY2xhc3M9XCJpbnYtbmFtZVwiPkNPQUw8L3RleHQ+PHRleHQgY2xhc3M9XCJpbnYtY291bnRcIj57eyBpbnZlbnRvcnkuY29hbCB9fTwvdGV4dD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludi1idG5cIiBvbmNsaWNrPVwic2VsZWN0SXJvbkZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+SVJPTjwvdGV4dD48dGV4dCBjbGFzcz1cImludi1jb3VudFwiPnt7IGludmVudG9yeS5pcm9uIH19PC90ZXh0PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW52LXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIHN0eWxlPVwiZGlzcGxheToge3sgY3JhZnRpbmdUYWJsZUJ1dHRvbkRpc3BsYXkgfX1cIiBvbmNsaWNrPVwic2VsZWN0Q3JhZnRpbmdUYWJsZUZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+VEFCTEU8L3RleHQ+PHRleHQgY2xhc3M9XCJpbnYtY291bnRcIj57eyBpbnZlbnRvcnkuY3JhZnRpbmdUYWJsZSB9fTwvdGV4dD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludi1idG5cIiBvbmNsaWNrPVwic2VsZWN0R29sZEZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+R09MRDwvdGV4dD48dGV4dCBjbGFzcz1cImludi1jb3VudFwiPnt7IGludmVudG9yeS5nb2xkIH19PC90ZXh0PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3REaWFtb25kRnJvbUludmVudG9yeVwiPjx0ZXh0IGNsYXNzPVwiaW52LW5hbWVcIj5ESUFNT05EPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5LmRpYW1vbmQgfX08L3RleHQ+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cIm5ldGhlci1hcnJvd1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7IG5ldGhlckludmVudG9yeUxhYmVsIH19XCIgb25jbGljaz1cInRvZ2dsZU5ldGhlckludmVudG9yeVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwibmV0aGVyLWJsb2Nrc1wiIHN0eWxlPVwiZGlzcGxheToge3sgbmV0aGVySW52ZW50b3J5RGlzcGxheSB9fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnYtYnRuXCIgb25jbGljaz1cInNlbGVjdE5ldGhlcnJhY2tGcm9tSW52ZW50b3J5XCI+PHRleHQgY2xhc3M9XCJpbnYtbmFtZVwiPk5FVEhFUlJBQ0s8L3RleHQ+PHRleHQgY2xhc3M9XCJpbnYtY291bnRcIj57eyBpbnZlbnRvcnkubmV0aGVycmFjayB9fTwvdGV4dD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3RTb3VsU2FuZEZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+U09VTCBTQU5EPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5LnNvdWxTYW5kIH19PC90ZXh0PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnYtYnRuXCIgb25jbGljaz1cInNlbGVjdEdsb3dzdG9uZUZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+R0xPV1NUT05FPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5Lmdsb3dzdG9uZSB9fTwvdGV4dD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3ROZXRoZXJCcmlja0Zyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+TkVUSEVSIEJSSUNLPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5Lm5ldGhlckJyaWNrIH19PC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludi1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3RRdWFydHpPcmVGcm9tSW52ZW50b3J5XCI+PHRleHQgY2xhc3M9XCJpbnYtbmFtZVwiPlFVQVJUWjwvdGV4dD48dGV4dCBjbGFzcz1cImludi1jb3VudFwiPnt7IGludmVudG9yeS5xdWFydHpPcmUgfX08L3RleHQ+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludi1idG5cIiBvbmNsaWNrPVwic2VsZWN0QmxhY2tzdG9uZUZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+QkxBQ0tTVE9ORTwvdGV4dD48dGV4dCBjbGFzcz1cImludi1jb3VudFwiPnt7IGludmVudG9yeS5ibGFja3N0b25lIH19PC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGlucHV0IGNsYXNzPVwiZW5kLWFycm93XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3sgZW5kSW52ZW50b3J5TGFiZWwgfX1cIiBvbmNsaWNrPVwidG9nZ2xlRW5kSW52ZW50b3J5XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbmQtYmxvY2tzXCIgc3R5bGU9XCJkaXNwbGF5OiB7eyBlbmRJbnZlbnRvcnlEaXNwbGF5IH19XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnYtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludi1idG5cIiBvbmNsaWNrPVwic2VsZWN0RW5kU3RvbmVGcm9tSW52ZW50b3J5XCI+PHRleHQgY2xhc3M9XCJpbnYtbmFtZVwiPkVORCBTVE9ORTwvdGV4dD48dGV4dCBjbGFzcz1cImludi1jb3VudFwiPnt7IGludmVudG9yeS5lbmRTdG9uZSB9fTwvdGV4dD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3RPYnNpZGlhbkZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+T0JTSURJQU48L3RleHQ+PHRleHQgY2xhc3M9XCJpbnYtY291bnRcIj57eyBpbnZlbnRvcnkub2JzaWRpYW4gfX08L3RleHQ+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludi1idG5cIiBvbmNsaWNrPVwic2VsZWN0UHVycHVyRnJvbUludmVudG9yeVwiPjx0ZXh0IGNsYXNzPVwiaW52LW5hbWVcIj5QVVJQVVI8L3RleHQ+PHRleHQgY2xhc3M9XCJpbnYtY291bnRcIj57eyBpbnZlbnRvcnkucHVycHVyIH19PC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImludi1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW52LWJ0blwiIG9uY2xpY2s9XCJzZWxlY3RDaG9ydXNQbGFudEZyb21JbnZlbnRvcnlcIj48dGV4dCBjbGFzcz1cImludi1uYW1lXCI+Q0hPUlVTPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5LmNob3J1c1BsYW50IH19PC90ZXh0PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnYtYnRuXCIgb25jbGljaz1cInNlbGVjdEVuZEJyaWNrRnJvbUludmVudG9yeVwiPjx0ZXh0IGNsYXNzPVwiaW52LW5hbWVcIj5FTkQgQlJJQ0s8L3RleHQ+PHRleHQgY2xhc3M9XCJpbnYtY291bnRcIj57eyBpbnZlbnRvcnkuZW5kQnJpY2sgfX08L3RleHQ+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImludi1idG5cIiBvbmNsaWNrPVwic2VsZWN0RW5kT3JlRnJvbUludmVudG9yeVwiPjx0ZXh0IGNsYXNzPVwiaW52LW5hbWVcIj5FTkQgT1JFPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiaW52LWNvdW50XCI+e3sgaW52ZW50b3J5LmVuZE9yZSB9fTwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImNsb3NlLWludlwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNMT1NFXCIgb25jbGljaz1cImNsb3NlSW52ZW50b3J5XCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjaGVzdFwiIHN0eWxlPVwiZGlzcGxheToge3sgY2hlc3REaXNwbGF5IH19XCI+XG4gICAgICA8dGV4dCBjbGFzcz1cIm1lbnUtdGl0bGVcIj5DSEVTVDwvdGV4dD5cbiAgICAgIDx0ZXh0IGNsYXNzPVwibWVudS1zdWJ0aXRsZVwiPnt7IHNlbGVjdGVkQmxvY2sgfX0gfCBQTEFZRVIge3sgc2VsZWN0ZWRDb3VudFRleHQoKSB9fSB8IENIRVNUIHt7IGNoZXN0Q291bnQoKSB9fTwvdGV4dD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVzdC1zbG90XCI+PHRleHQgY2xhc3M9XCJjaGVzdC1ibG9ja1wiPnt7IHNlbGVjdGVkQmxvY2sgfX08L3RleHQ+PHRleHQgY2xhc3M9XCJjaGVzdC1jb3VudFwiPnt7IGNoZXN0Q291bnQoKSB9fTwvdGV4dD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVzdC1yb3dcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY2hlc3QtYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU1RPUkVcIiBvbmNsaWNrPVwic3RvcmVJbkNoZXN0XCIgLz5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiY2hlc3QtYnRuXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiVEFLRVwiIG9uY2xpY2s9XCJ0YWtlRnJvbUNoZXN0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRleHQgY2xhc3M9XCJjaGVzdC1oaW50XCI+Q2hvb3NlIGEgYmxvY2sgaW4gSU5WRU5UT1JZIGZpcnN0PC90ZXh0PlxuICAgICAgPGlucHV0IGNsYXNzPVwiY2xvc2UtaW52XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ0xPU0VcIiBvbmNsaWNrPVwiY2xvc2VDaGVzdFwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbnZhciBDT0xTID0gMjBcbnZhciBST1dTID0gMzBcbnZhciBXT1JMRF9XID0gOTZcbnZhciBXT1JMRF9IID0gMTI5XG52YXIgWk9PTV9MRVZFTFMgPSBbMTUsIDE4LCAyMV1cbnZhciBTS1kgPSBcIiM3OGI2ZThcIlxudmFyIEhJR0hfQ09OVFJBU1RfQ09MT1JTID0ge1xuICBncmFzczpcIiMwMGZmMDBcIixkaXJ0OlwiI2I4NjUwMFwiLHN0b25lOlwiI2QwZDBkMFwiLGJlZHJvY2s6XCIjMTExMTExXCIsd29vZDpcIiNmZmIwMDBcIixsZWFmOlwiIzAwZmY1NVwiLFxuICBjb2FsOlwiI2ZmZmZmZlwiLGlyb246XCIjYzhjOGZmXCIsZ29sZDpcIiNmZmZmMDBcIixkaWFtb25kOlwiIzAwZmZmZlwiLHNhbmQ6XCIjZmZmZjY2XCIsZ2xhc3M6XCIjYmFmNWZmXCIsYnJpY2s6XCIjZmY1YTQ1XCIsXG4gIG5ldGhlcnJhY2s6XCIjZmY0YjNlXCIsc291bFNhbmQ6XCIjOWE3ODYwXCIsZ2xvd3N0b25lOlwiI2ZmZmY2NlwiLG5ldGhlckJyaWNrOlwiI2ZmNTA2OFwiLHF1YXJ0ek9yZTpcIiNmZmZmZmZcIixibGFja3N0b25lOlwiIzYwNjA3MFwiLFxuICBlbmRTdG9uZTpcIiNmZmY2YmRcIixvYnNpZGlhbjpcIiM0YjNkNjhcIixwdXJwdXI6XCIjZmY1ZGZmXCIsY2hvcnVzUGxhbnQ6XCIjZGZhYWZmXCIsZW5kQnJpY2s6XCIjYmNhMGRkXCIsZW5kT3JlOlwiI2ZmZmZmZlwiLFxuICB3YXRlcjpcIiMwMDg4ZmZcIix0b3JjaDpcIiNmZmZmMDBcIixjaGVzdDpcIiNmZjlkMDBcIixjcmFmdGluZ1RhYmxlOlwiI2Q4OGEzYlwiXG59XG5cbmZ1bmN0aW9uIG1ha2VUaWxlKHgsIHksIHR5cGUpIHsgcmV0dXJuIHsgeDp4LCB5OnksIHR5cGU6dHlwZSB9IH1cblxuZnVuY3Rpb24gZmxhdFRlcnJhaW5Xb3JsZChzZWVkKSB7XG4gIHZhciB3b3JsZD1bXVxuICB2YXIgaGVpZ2h0cz1bXVxuICB2YXIgeCx5XG4gIHZhciBwcm9maWxlPVsxMywxMywxMiwxMiwxMywxMywxNCwxMywxMiwxMiwxMywxNCwxMywxMiwxMiwxMywxMywxNCwxMywxM11cbiAgZm9yKHg9MDt4PENPTFM7eCsrKSBoZWlnaHRzW3hdPXByb2ZpbGVbKHgrc2VlZCklcHJvZmlsZS5sZW5ndGhdXG4gIGZvcih5PTA7eTxST1dTO3krKykgZm9yKHg9MDt4PENPTFM7eCsrKXtcbiAgICB2YXIgc3VyZmFjZT1oZWlnaHRzW3hdLCB0eXBlPVwiYWlyXCJcbiAgICBpZih5PT09c3VyZmFjZSkgdHlwZT1cImdyYXNzXCJcbiAgICBlbHNlIGlmKHk+c3VyZmFjZSAmJiB5PD1zdXJmYWNlKzIpIHR5cGU9XCJkaXJ0XCJcbiAgICBlbHNlIGlmKHk+c3VyZmFjZSsyKXtcbiAgICAgIHR5cGU9eT09PVJPV1MtMT9cImJlZHJvY2tcIjpcInN0b25lXCJcbiAgICAgIGlmKHk8c3VyZmFjZSs3ICYmICgoeCoxMSt5Kjcrc2VlZCklMTc9PT0wKSkgdHlwZT1cImNvYWxcIlxuICAgICAgaWYoeTxzdXJmYWNlKzEwICYmICgoeCo1K3kqMTMrc2VlZCklMjk9PT0wKSkgdHlwZT1cImlyb25cIlxuICAgICAgaWYoeTxzdXJmYWNlKzEzICYmICgoeCoxNyt5KjMrc2VlZCklNDM9PT0wKSkgdHlwZT1cImdvbGRcIlxuICAgICAgaWYoeTxzdXJmYWNlKzE2ICYmICgoeCoxOSt5KjUrc2VlZCklNjE9PT0wKSkgdHlwZT1cImRpYW1vbmRcIlxuICAgIH1cbiAgICB3b3JsZC5wdXNoKG1ha2VUaWxlKHgseSx0eXBlKSlcbiAgfVxuICBmdW5jdGlvbiBwdXQocHgscHksdCl7aWYocHg8MHx8cHg+PUNPTFN8fHB5PDB8fHB5Pj1ST1dTKXJldHVybjt3b3JsZFtweSpDT0xTK3B4XT1tYWtlVGlsZShweCxweSx0KX1cbiAgLy8gTmF0dXJhbCBjYXZlIHBvY2tldHMgb25seSBiZWxvdyB0aGUgc3VyZmFjZS5cbiAgZm9yKHZhciBjeD0yO2N4PENPTFMtMjtjeCsrKXtcbiAgICB2YXIgcz1oZWlnaHRzW2N4XVxuICAgIGlmKCgoY3gqNytzZWVkKSU1KT09PTApeyBwdXQoY3gscys1LFwiYWlyXCIpOyBwdXQoY3grMSxzKzUsXCJhaXJcIik7IHB1dChjeCxzKzYsXCJhaXJcIikgfVxuICB9XG4gIC8vIFR3byBjbGVhciBsYWtlcyBhdCBncm91bmQgbGV2ZWwuXG4gIGlmKHNlZWQhPT03KXtcbiAgICB2YXIgbGFrZVg9OSsoKHNlZWQqMiklMylcbiAgICB2YXIgbGFrZVk9aGVpZ2h0c1tNYXRoLm1pbihDT0xTLTEsbGFrZVgpXVxuICAgIHB1dChsYWtlWCxsYWtlWSxcIndhdGVyXCIpOyBwdXQobGFrZVgrMSxsYWtlWSxcIndhdGVyXCIpOyBwdXQobGFrZVgrMixsYWtlWSxcIndhdGVyXCIpXG4gICAgcHV0KGxha2VYKzEsbGFrZVktMSxcInNhbmRcIilcbiAgfVxuICAvLyBUcmVlcyBwbGFudGVkIG9uIHRoZWlyIGFjdHVhbCBncm91bmQgaGVpZ2h0LlxuICB2YXIgdHJlZVhzPVsyLDYsMTQsMTddXG4gIGZvcih2YXIgaT0wO2k8dHJlZVhzLmxlbmd0aDtpKyspe1xuICAgIHZhciB0eD10cmVlWHNbaV0sIHN5PWhlaWdodHNbdHhdLTFcbiAgICBwdXQodHgsc3ksXCJ3b29kXCIpOyBwdXQodHgsc3ktMSxcIndvb2RcIik7IHB1dCh0eCxzeS0yLFwid29vZFwiKVxuICAgIHB1dCh0eC0xLHN5LTIsXCJsZWFmXCIpOyBwdXQodHgrMSxzeS0yLFwibGVhZlwiKTsgcHV0KHR4LHN5LTMsXCJsZWFmXCIpXG4gICAgcHV0KHR4LTEsc3ktMyxcImxlYWZcIik7IHB1dCh0eCsxLHN5LTMsXCJsZWFmXCIpXG4gIH1cbiAgcmV0dXJuIHdvcmxkXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdvcmxkKCl7cmV0dXJuIGZsYXRUZXJyYWluV29ybGQoMSl9XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXNlV29ybGQoKXtcbiAgdmFyIHdvcmxkPWZsYXRUZXJyYWluV29ybGQoMikscHV0PWZ1bmN0aW9uKHgseSx0KXtpZih4PDB8fHg+PUNPTFN8fHk8MHx8eT49Uk9XUylyZXR1cm47d29ybGRbeSpDT0xTK3hdPW1ha2VUaWxlKHgseSx0KX1cbiAgLy8gRmxhdHRlbiBob3VzZSBmb290cHJpbnQuXG4gIGZvcih2YXIgeD00O3g8PTE0O3grKyl7cHV0KHgsMTMsXCJncmFzc1wiKTtwdXQoeCwxNCxcImRpcnRcIik7cHV0KHgsMTUsXCJkaXJ0XCIpfVxuICBmb3IoeD01O3g8PTEzO3grKyl7cHV0KHgsMTIsXCJ3b29kXCIpO3B1dCh4LDgsXCJicmlja1wiKX1cbiAgZm9yKHZhciB5PTg7eTw9MTI7eSsrKXtwdXQoNSx5LFwid29vZFwiKTtwdXQoMTMseSxcIndvb2RcIil9XG4gIHB1dCg3LDEwLFwiZ2xhc3NcIik7IHB1dCgxMSwxMCxcImdsYXNzXCIpOyBwdXQoOSwxMSxcImFpclwiKTsgcHV0KDksMTIsXCJhaXJcIilcbiAgcHV0KDksMTIsXCJjaGVzdFwiKTsgcHV0KDYsOSxcInRvcmNoXCIpOyBwdXQoMTIsOSxcInRvcmNoXCIpXG4gIC8vIFNpbXBsZSByb29mIHNsb3BlLlxuICBwdXQoNiw3LFwiYnJpY2tcIik7IHB1dCg3LDcsXCJicmlja1wiKTsgcHV0KDgsNyxcImJyaWNrXCIpOyBwdXQoOSw3LFwiYnJpY2tcIik7IHB1dCgxMCw3LFwiYnJpY2tcIik7IHB1dCgxMSw3LFwiYnJpY2tcIik7IHB1dCgxMiw3LFwiYnJpY2tcIilcbiAgcmV0dXJuIHdvcmxkXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpbGxhZ2VXb3JsZCgpe1xuICB2YXIgd29ybGQ9ZmxhdFRlcnJhaW5Xb3JsZCg0KSxwdXQ9ZnVuY3Rpb24oeCx5LHQpe2lmKHg8MHx8eD49Q09MU3x8eTwwfHx5Pj1ST1dTKXJldHVybjt3b3JsZFt5KkNPTFMreF09bWFrZVRpbGUoeCx5LHQpfVxuICBmb3IodmFyIHg9Mjt4PD0xNzt4Kyspe3B1dCh4LDEzLFwiZ3Jhc3NcIik7cHV0KHgsMTQsXCJkaXJ0XCIpO3B1dCh4LDE1LFwiZGlydFwiKX1cbiAgZnVuY3Rpb24gaG91c2UoY3gpe1xuICAgIGZvcih2YXIgaHg9Y3gtMjtoeDw9Y3grMjtoeCsrKXtwdXQoaHgsMTIsXCJicmlja1wiKTtwdXQoaHgsOCxcImJyaWNrXCIpfVxuICAgIGZvcih2YXIgaHk9ODtoeTw9MTI7aHkrKyl7cHV0KGN4LTIsaHksXCJicmlja1wiKTtwdXQoY3grMixoeSxcImJyaWNrXCIpfVxuICAgIHB1dChjeCwxMCxcImdsYXNzXCIpO3B1dChjeCwxMSxcImFpclwiKTtwdXQoY3gsMTEsXCJjaGVzdFwiKTtwdXQoY3gtMSw5LFwidG9yY2hcIik7cHV0KGN4KzEsOSxcInRvcmNoXCIpXG4gIH1cbiAgaG91c2UoNik7aG91c2UoMTQpXG4gIGZvcih4PTk7eDw9MTE7eCsrKXB1dCh4LDEzLFwic2FuZFwiKVxuICBwdXQoMTAsMTIsXCJ3YXRlclwiKTtwdXQoMTAsMTMsXCJ3YXRlclwiKVxuICByZXR1cm4gd29ybGRcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWluZVdvcmxkKCl7XG4gIHZhciB3b3JsZD1mbGF0VGVycmFpbldvcmxkKDcpLHB1dD1mdW5jdGlvbih4LHksdCl7aWYoeDwwfHx4Pj1DT0xTfHx5PDB8fHk+PVJPV1MpcmV0dXJuO3dvcmxkW3kqQ09MUyt4XT1tYWtlVGlsZSh4LHksdCl9XG4gIC8vIFNhZmUgZW50cmFuY2UgYW5kIGEgY2xlYW4gdW5kZXJncm91bmQgY29ycmlkb3IuXG4gIGZvcih2YXIgeT05O3k8PTIwO3krKyl7cHV0KDkseSxcImFpclwiKTtwdXQoMTAseSxcImFpclwiKX1cbiAgZm9yKHZhciB4PTc7eDw9MTI7eCsrKXB1dCh4LDIwLFwic3RvbmVcIilcbiAgcHV0KDksOSxcInRvcmNoXCIpO3B1dCgxMCwxMyxcInRvcmNoXCIpO3B1dCg4LDE2LFwiY29hbFwiKTtwdXQoMTEsMTcsXCJpcm9uXCIpO3B1dCg4LDE4LFwiZ29sZFwiKTtwdXQoMTEsMTksXCJkaWFtb25kXCIpO3B1dCg3LDE5LFwiY2hlc3RcIilcbiAgcmV0dXJuIHdvcmxkXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlzbGFuZFdvcmxkKCl7XG4gIHZhciB3b3JsZD1bXSx4LHlcbiAgZm9yKHk9MDt5PFJPV1M7eSsrKWZvcih4PTA7eDxDT0xTO3grKyl3b3JsZC5wdXNoKG1ha2VUaWxlKHgseSxcIndhdGVyXCIpKVxuICBmdW5jdGlvbiBwdXQocHgscHksdCl7aWYocHg8MHx8cHg+PUNPTFN8fHB5PDB8fHB5Pj1ST1dTKXJldHVybjt3b3JsZFtweSpDT0xTK3B4XT1tYWtlVGlsZShweCxweSx0KX1cbiAgZm9yKHg9Mjt4PD0xNzt4KyspZm9yKHk9MTI7eTw9MTY7eSsrKXB1dCh4LHksKHk9PT0xMik/XCJncmFzc1wiOih5Pj0xNT9cInN0b25lXCI6XCJkaXJ0XCIpKVxuICBmb3IoeD0zO3g8PTE2O3grKylwdXQoeCwxMixcImdyYXNzXCIpXG4gIHB1dCg2LDExLFwid29vZFwiKTtwdXQoNiwxMCxcIndvb2RcIik7cHV0KDUsMTAsXCJsZWFmXCIpO3B1dCg3LDEwLFwibGVhZlwiKTtwdXQoNiw5LFwibGVhZlwiKVxuICBwdXQoMTEsMTIsXCJjaGVzdFwiKTtwdXQoMTIsMTIsXCJzYW5kXCIpO3B1dCgxMywxMixcInNhbmRcIik7cHV0KDE0LDEyLFwic2FuZFwiKVxuICByZXR1cm4gd29ybGRcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV0aGVyV29ybGQoKXtcbiAgdmFyIHdvcmxkPVtdLHgseVxuICBmdW5jdGlvbiBwdXQocHgscHksdCl7aWYocHg8MHx8cHg+PUNPTFN8fHB5PDB8fHB5Pj1ST1dTKXJldHVybjt3b3JsZFtweSpDT0xTK3B4XT1tYWtlVGlsZShweCxweSx0KX1cbiAgZm9yKHk9MDt5PFJPV1M7eSsrKWZvcih4PTA7eDxDT0xTO3grKyl7XG4gICAgdmFyIHR5cGU9XCJhaXJcIlxuICAgIGlmKHk8PTN8fHk+PTE1fHx4PT09MHx8eD09PUNPTFMtMSl0eXBlPVwibmV0aGVycmFja1wiXG4gICAgd29ybGQucHVzaChtYWtlVGlsZSh4LHksdHlwZSkpXG4gIH1cbiAgZm9yKHg9Mjt4PD0xNzt4Kyspe3B1dCh4LDEzLFwibmV0aGVycmFja1wiKTtwdXQoeCwxNCxcIm5ldGhlcnJhY2tcIik7cHV0KHgsMTUsXCJuZXRoZXJyYWNrXCIpfVxuICBmb3IoeD00O3g8PTY7eCsrKXB1dCh4LDEyLFwic291bFNhbmRcIilcbiAgZm9yKHg9MTQ7eDw9MTY7eCsrKXB1dCh4LDEyLFwic291bFNhbmRcIilcbiAgZm9yKHk9Nzt5PD0xMjt5Kyspe3B1dCgzLHksXCJibGFja3N0b25lXCIpO3B1dCgxNix5LFwiYmxhY2tzdG9uZVwiKX1cbiAgcHV0KDQsOSxcImJsYWNrc3RvbmVcIik7cHV0KDE1LDgsXCJibGFja3N0b25lXCIpXG4gIHB1dCg2LDQsXCJnbG93c3RvbmVcIik7cHV0KDcsNCxcImdsb3dzdG9uZVwiKTtwdXQoOCw0LFwiZ2xvd3N0b25lXCIpO3B1dCg3LDUsXCJnbG93c3RvbmVcIilcbiAgcHV0KDEzLDQsXCJnbG93c3RvbmVcIik7cHV0KDE0LDQsXCJnbG93c3RvbmVcIik7cHV0KDEzLDUsXCJnbG93c3RvbmVcIilcbiAgcHV0KDUsMTAsXCJxdWFydHpPcmVcIik7cHV0KDYsMTAsXCJxdWFydHpPcmVcIik7cHV0KDEyLDExLFwicXVhcnR6T3JlXCIpO3B1dCgxMywxMCxcInF1YXJ0ek9yZVwiKVxuICBmb3IoeD05O3g8PTEyO3grKyl7cHV0KHgsOSxcIm5ldGhlckJyaWNrXCIpO3B1dCh4LDEwLFwibmV0aGVyQnJpY2tcIil9XG4gIHB1dCg5LDgsXCJuZXRoZXJCcmlja1wiKTtwdXQoMTIsOCxcIm5ldGhlckJyaWNrXCIpXG4gIHB1dCg1LDExLFwiYWlyXCIpO3B1dCg1LDEwLFwiYWlyXCIpO3B1dCg2LDExLFwiYWlyXCIpO3B1dCg2LDEwLFwiYWlyXCIpXG4gIHJldHVybiB3b3JsZFxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbmRXb3JsZCgpe1xuICB2YXIgd29ybGQ9W10seCx5XG4gIGZ1bmN0aW9uIHB1dChweCxweSx0KXtpZihweDwwfHxweD49Q09MU3x8cHk8MHx8cHk+PVJPV1MpcmV0dXJuO3dvcmxkW3B5KkNPTFMrcHhdPW1ha2VUaWxlKHB4LHB5LHQpfVxuICBmb3IoeT0wO3k8Uk9XUzt5KyspZm9yKHg9MDt4PENPTFM7eCsrKXt2YXIgdHlwZT0oeT49MTUpP1wiZW5kU3RvbmVcIjpcImFpclwiO2lmKCh4PT09MHx8eD09PUNPTFMtMSkmJnk+PTEzKXR5cGU9XCJvYnNpZGlhblwiO3dvcmxkLnB1c2gobWFrZVRpbGUoeCx5LHR5cGUpKX1cbiAgZm9yKHg9Mjt4PD02O3grKyl7cHV0KHgsMTAsXCJlbmRTdG9uZVwiKTtwdXQoeCwxMSxcImVuZFN0b25lXCIpfVxuICBmb3IoeD0xMzt4PD0xNzt4Kyspe3B1dCh4LDksXCJlbmRTdG9uZVwiKTtwdXQoeCwxMCxcImVuZFN0b25lXCIpfVxuICBmb3IoeT03O3k8PTE0O3krKyl7cHV0KDcseSxcIm9ic2lkaWFuXCIpO3B1dCgxMix5LFwib2JzaWRpYW5cIil9XG4gIGZvcih4PTg7eDw9MTE7eCsrKXtwdXQoeCwxMyxcInB1cnB1clwiKTtwdXQoeCwxNCxcInB1cnB1clwiKX1cbiAgcHV0KDksMTIsXCJwdXJwdXJcIik7cHV0KDEwLDEyLFwicHVycHVyXCIpXG4gIHB1dCg0LDksXCJjaG9ydXNQbGFudFwiKTtwdXQoNCw4LFwiY2hvcnVzUGxhbnRcIik7cHV0KDE1LDgsXCJjaG9ydXNQbGFudFwiKTtwdXQoMTUsNyxcImNob3J1c1BsYW50XCIpO3B1dCgxNiw4LFwiY2hvcnVzUGxhbnRcIilcbiAgcHV0KDMsMTYsXCJlbmRPcmVcIik7cHV0KDYsMTgsXCJlbmRPcmVcIik7cHV0KDE0LDE2LFwiZW5kT3JlXCIpO3B1dCgxNywyMCxcImVuZE9yZVwiKVxuICBwdXQoOCwxMixcImVuZEJyaWNrXCIpO3B1dCgxMSwxMixcImVuZEJyaWNrXCIpO3B1dCg4LDExLFwiZW5kQnJpY2tcIik7cHV0KDExLDExLFwiZW5kQnJpY2tcIilcbiAgcHV0KDMsMTQsXCJhaXJcIik7cHV0KDMsMTMsXCJhaXJcIik7cHV0KDQsMTQsXCJhaXJcIik7cHV0KDQsMTMsXCJhaXJcIilcbiAgcmV0dXJuIHdvcmxkXG59XG5cbmZ1bmN0aW9uIGlzU29saWQodHlwZSl7IHJldHVybiB0eXBlIT09XCJhaXJcIiAmJiB0eXBlIT09XCJ3YXRlclwiICYmIHR5cGUhPT1cInRvcmNoXCIgfVxuZnVuY3Rpb24gcGxhY2VhYmxlKHR5cGUpeyByZXR1cm4ge2RpcnQ6MSxzdG9uZToxLHdvb2Q6MSxsZWFmOjEsc2FuZDoxLGdsYXNzOjEsYnJpY2s6MSx0b3JjaDoxLHdhdGVyOjEsY2hlc3Q6MSxjcmFmdGluZ1RhYmxlOjEsY29hbDoxLGlyb246MSxnb2xkOjEsZGlhbW9uZDoxLG5ldGhlcnJhY2s6MSxzb3VsU2FuZDoxLGdsb3dzdG9uZToxLG5ldGhlckJyaWNrOjEscXVhcnR6T3JlOjEsYmxhY2tzdG9uZToxLGVuZFN0b25lOjEsb2JzaWRpYW46MSxwdXJwdXI6MSxjaG9ydXNQbGFudDoxLGVuZEJyaWNrOjEsZW5kT3JlOjF9W3R5cGVdPT09MSB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJpdmF0ZTp7XG4gICAgd29ybGQ6Y3JlYXRlV29ybGQoKSwgdmlzaWJsZVdvcmxkOltdLCB2aXNpYmxlQW5pbWF0aW9uTWFzazowLCBwbGF5ZXJYOjIsIHBsYXllclk6MTIsIHBsYXllclZ5OjAsXG4gICAgc2VsZWN0ZWRYOi0xLCBzZWxlY3RlZFk6LTEsIHNlbGVjdGVkQmxvY2s6XCJkaXJ0XCIsIG1vZGU6XCJNSU5FXCIsIHN0YXR1czpcIlRhcCBibG9ja3MgdG8gbWluZVwiLFxuICAgIGh1ZExpbmU6XCJEQVkgfCBNSU5FIHwgZGlydCB4MCB8IDEwMCVcIiwgbG9hZGluZzp0cnVlLCBsb2FkaW5nUHJvZ3Jlc3M6MCwgbG9hZGluZ0xhYmVsOlwiTG9hZGluZyB3b3JsZC4uLlwiLFxuICAgIGxvYWRpbmdEaXNwbGF5OlwiZmxleFwiLCBtZW51RGlzcGxheTpcIm5vbmVcIiwgc2V0dGluZ3NEaXNwbGF5Olwibm9uZVwiLCBnYW1lRGlzcGxheTpcIm5vbmVcIiwgaW52ZW50b3J5RGlzcGxheTpcIm5vbmVcIiwgY2hlc3REaXNwbGF5Olwibm9uZVwiLCBleHRyYURpc3BsYXk6XCJub25lXCIsIHdvcmxkc0Rpc3BsYXk6XCJub25lXCIsIHZpY3RvcnlEaXNwbGF5Olwibm9uZVwiLCBzbG90c0NvbmZpcm1EaXNwbGF5Olwibm9uZVwiLCBjcmFmdERpc3BsYXk6XCJub25lXCIsIHdvcmtiZW5jaERpc3BsYXk6XCJub25lXCIsIG1hcERpc3BsYXk6XCJub25lXCIsIHRvb2xzRGlzcGxheTpcIm5vbmVcIiwgcXVlc3RzRGlzcGxheTpcIm5vbmVcIiwgYWNoaWV2ZW1lbnRzRGlzcGxheTpcIm5vbmVcIiwgbG9hZGluZ1RpbWVyOm51bGwsIGdhbWVUaW1lcjpudWxsLFxuICAgIGRheVRpbWVyOm51bGwsIGRheVBoYXNlOjAsIGRheVN0YWdlOlwiREFZXCIsIGRheU5pZ2h0RW5hYmxlZDp0cnVlLCBkYXlOaWdodExhYmVsOlwiREFZL05JR0hUOiBPTlwiLCBjdXJyZW50U2xvdDowLCBzbG90TWVudURpc3BsYXk6XCJub25lXCIsIHpvb21JbmRleDoxLFxuICAgIGN1cnJlbnREaW1lbnNpb246XCJOT1JNQUxcIiwgbm9ybWFsRGltZW5zaW9uU3RhdGU6bnVsbCwgbmV0aGVyRGltZW5zaW9uU3RhdGU6bnVsbCwgZW5kRGltZW5zaW9uU3RhdGU6bnVsbCwgbGFzdE5vcm1hbFNsb3Q6MSxcbiAgICBub3JtYWxNaW5lZFRvdGFsOjAsIG5ldGhlck1pbmVkVG90YWw6MCwgZW5kTWluZWRUb3RhbDowLCBlbmRXaW5UYXJnZXQ6MTUwLCBlbmRXaW5MYWJlbDpcIkVORCBXSU4gQkxPQ0tTOiAxNTBcIiwgbmV0aGVyVW5sb2NrVGFyZ2V0OjUwLCBuZXRoZXJVbmxvY2tMYWJlbDpcIk5FVEhFUiBVTkxPQ0s6IDUwXCIsIG5ldGhlclByb2dyZXNzTGFiZWw6XCJNSU5FIDUwIEJMT0NLUyBUTyBVTkxPQ0tcIiwgd29ybGRzTmV0aGVyTGFiZWw6XCJORVRIRVI6IExPQ0tFRFwiLCB3b3JsZHNOZXRoZXJTdHlsZTpcImJhY2tncm91bmQtY29sb3I6IzMzM2I0Mjtjb2xvcjojNzc3Zjg2O1wiLCBlbmRVbmxvY2tUYXJnZXQ6MTAwLCBlbmRVbmxvY2tMYWJlbDpcIkVORCBVTkxPQ0s6IDEwMFwiLCBlbmRQcm9ncmVzc0xhYmVsOlwiTUlORSAxMDAgTkVUSEVSIEJMT0NLUyBUTyBVTkxPQ0tcIiwgd29ybGRzRW5kTGFiZWw6XCJUSEUgRU5EOiBMT0NLRURcIiwgd29ybGRzRW5kU3R5bGU6XCJiYWNrZ3JvdW5kLWNvbG9yOiMzMzNiNDI7Y29sb3I6Izc3N2Y4NjtcIiwgbmV0aGVySW52ZW50b3J5RGlzcGxheTpcIm5vbmVcIiwgbmV0aGVySW52ZW50b3J5TGFiZWw6XCLilrwgTkVUSEVSIEJMT0NLU1wiLCBlbmRJbnZlbnRvcnlEaXNwbGF5Olwibm9uZVwiLCBlbmRJbnZlbnRvcnlMYWJlbDpcIuKWvCBFTkQgQkxPQ0tTXCIsXG4gICAgY2hlc3RTdG9yYWdlOnt9LCBjdXJyZW50Q2hlc3RLZXk6XCJcIixcbiAgICBzZXR0aW5nc1NlY3Rpb246XCJNQUlOXCIsIHNldHRpbmdzU2VjdGlvblRpdGxlOlwiR0FNRSBTRVRUSU5HU1wiLFxuICAgIHNldHRpbmdzTWFpbkRpc3BsYXk6XCJmbGV4XCIsIHNldHRpbmdzRGlzcGxheVNlY3Rpb25EaXNwbGF5Olwibm9uZVwiLCBzZXR0aW5nc0NvbnRyb2xzU2VjdGlvbkRpc3BsYXk6XCJub25lXCIsIHNldHRpbmdzR2FtZVNlY3Rpb25EaXNwbGF5Olwibm9uZVwiLCBzZXR0aW5nc0dyYXBoaWNzU2VjdGlvbkRpc3BsYXk6XCJub25lXCIsIHNldHRpbmdzQWNjZXNzaWJpbGl0eVNlY3Rpb25EaXNwbGF5Olwibm9uZVwiLFxuICAgIHNob3dHcmlkOmZhbHNlLCBibG9ja091dGxpbmU6dHJ1ZSwgem9vbURlZmF1bHRJbmRleDoxLFxuICAgIGF1dG9KdW1wOnRydWUsIGNvbmZpcm1SZXNldDp0cnVlLCByZXNldEFybWVkOmZhbHNlLCBwYXVzZU1lbnVzOnRydWUsIGNyYWZ0aW5nVGFibGVCdXR0b25EaXNwbGF5Olwibm9uZVwiLCB3b3JrYmVuY2hTdGF0dXM6XCJDcmFmdGluZyB0YWJsZSByZWFkeVwiLFxuICAgIHdvcmxkQW5pbWF0aW9uOmZhbHNlLCB3YXRlckFuaW1hdGlvbjpmYWxzZSwgbGVhZkFuaW1hdGlvbjpmYWxzZSwgbmlnaHREYXJrbmVzczoxLCBhbmltYXRpb25GcmFtZTowLCB3ZWF0aGVyRW5hYmxlZDpmYWxzZSwgd2VhdGhlclN0YWdlOlwiQ0xFQVJcIiwgd2VhdGhlclRpY2s6MCwgc2t5VGV4dDpcIlNVTlwiLCB3ZWF0aGVyTGFiZWw6XCJXRUFUSEVSOiBPRkZcIiwgd2VhdGhlckN5Y2xlOjAsIGNsb3VkVGV4dDpcIlwiLFxuICAgIHNob3dHcmlkTGFiZWw6XCJTSE9XIEdSSUQ6IE9GRlwiLCBibG9ja091dGxpbmVMYWJlbDpcIkJMT0NLIE9VVExJTkU6IE9OXCIsIHpvb21EZWZhdWx0TGFiZWw6XCJERUZBVUxUIFpPT006IDEwMCVcIixcbiAgICBhdXRvSnVtcExhYmVsOlwiQVVUTyBKVU1QOiBPTlwiLFxuICAgIGNvbmZpcm1SZXNldExhYmVsOlwiQ09ORklSTSBSRVNFVDogT05cIiwgcGF1c2VNZW51c0xhYmVsOlwiUEFVU0UgSU4gTUVOVVM6IE9OXCIsXG4gICAgd29ybGRBbmltYXRpb25MYWJlbDpcIldPUkxEIEFOSU1BVElPTjogT0ZGXCIsIHdhdGVyQW5pbWF0aW9uTGFiZWw6XCJXQVRFUiBBTklNQVRJT046IE9GRlwiLCBsZWFmQW5pbWF0aW9uTGFiZWw6XCJMRUFGIEFOSU1BVElPTjogT0ZGXCIsIG5pZ2h0RGFya25lc3NMYWJlbDpcIk5JR0hUIERBUktORVNTOiBOT1JNQUxcIiwgd2VhdGhlckxhYmVsOlwiV0VBVEhFUjogT0ZGXCIsXG4gICAgY29udHJvbFN0eWxlOlwid2lkdGg6MzNweDtoZWlnaHQ6MTdweDtmb250LXNpemU6NXB4O1wiLCBjb250cm9sc1Jvd1N0eWxlOlwid2lkdGg6MTA0cHg7aGVpZ2h0OjE5cHg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO1wiLFxuICAgIGludmVudG9yeTp7ZGlydDowLHN0b25lOjAsd29vZDowLGxlYWY6MCxzYW5kOjAsZ2xhc3M6MCxicmljazowLHRvcmNoOjAsd2F0ZXI6MCxjaGVzdDowLGNyYWZ0aW5nVGFibGU6MCxjb2FsOjAsaXJvbjowLGdvbGQ6MCxkaWFtb25kOjAsbmV0aGVycmFjazowLHNvdWxTYW5kOjAsZ2xvd3N0b25lOjAsbmV0aGVyQnJpY2s6MCxxdWFydHpPcmU6MCxibGFja3N0b25lOjAsZW5kU3RvbmU6MCxvYnNpZGlhbjowLHB1cnB1cjowLGNob3J1c1BsYW50OjAsZW5kQnJpY2s6MCxlbmRPcmU6MH0sXG4gICAgdG9vbFR5cGU6XCJoYW5kXCIsIHRvb2xMYWJlbDpcIkhBTkRcIiwgcGlja2F4ZUR1cmFiaWxpdHk6MTAwLCBheGVEdXJhYmlsaXR5OjEwMCxcbiAgICB4cDowLCBsZXZlbDoxLCB0b3RhbE1pbmVkOjAsIHRvdGFsUGxhY2VkOjAsIGZvdW5kSXJvbjpmYWxzZSwgZm91bmREaWFtb25kOmZhbHNlLFxuICAgIHF1ZXN0VGV4dDpcIk1JTkUgNSBCTE9DS1M6IDAvNVxcblBMQUNFIDUgQkxPQ0tTOiAwLzVcXG5NSU5FIElST046IDAvMVxcbkZJTkQgRElBTU9ORDogMC8xXCIsXG4gICAgYWNoaWV2ZW1lbnRUZXh0OlwiRklSU1QgQkxPQ0s6IExPQ0tFRFxcbjEwIEJMT0NLUzogMC8xMFxcbkJVSUxERVI6IDAvMTBcXG5JUk9OIEZJTkRFUjogTE9DS0VEXFxuRElBTU9ORCBGSU5ERVI6IExPQ0tFRFwiLFxuICAgIG1hcFRleHQ6XCIuLi4uLi4uLi4uLlxcbi4uLi4uLi4uLi4uXFxuLi4uLi4uLi4uLi5cXG4uLi4uLkAuLi4uLlxcbi4uLi4uLi4uLi4uXFxuLi4uLi4uLi4uLi5cXG4uLi4uLi4uLi4uLlwiLFxuICAgIGhpZ2hDb250cmFzdDpmYWxzZSwgbGFyZ2VPdXRsaW5lOmZhbHNlLCBsYXJnZVRleHQ6ZmFsc2UsXG4gICAgaGlnaENvbnRyYXN0TGFiZWw6XCJISUdIIENPTlRSQVNUOiBPRkZcIiwgbGFyZ2VPdXRsaW5lTGFiZWw6XCJMQVJHRSBPVVRMSU5FOiBPRkZcIiwgbGFyZ2VUZXh0TGFiZWw6XCJMQVJHRSBURVhUOiBPRkZcIlxuICB9LFxuXG4gIGluaXRDaGVzdFN0b3JhZ2UoKXtcbiAgICB0aGlzLmNoZXN0U3RvcmFnZT17fVxuICAgIGZvcih2YXIgaT0wO2k8dGhpcy53b3JsZC5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB0aWxlPXRoaXMud29ybGRbaV1cbiAgICAgIGlmKHRpbGUudHlwZT09PVwiY2hlc3RcIil7XG4gICAgICAgIHRoaXMuY2hlc3RTdG9yYWdlW3RpbGUueCtcIixcIit0aWxlLnldPXtkaXJ0Ojgsc3RvbmU6Nix3b29kOjQsbGVhZjoyLHNhbmQ6MixnbGFzczoyLGJyaWNrOjIsdG9yY2g6Mix3YXRlcjowLGNoZXN0OjAsY29hbDoyLGlyb246MSxnb2xkOjAsZGlhbW9uZDowfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBvbkluaXQoKXtcbiAgICB0aGlzLnJlZnJlc2hWaWV3KClcbiAgICAgICAgdGhpcy5sb2FkaW5nVGltZXI9c2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgIHRoaXMubG9hZGluZ1Byb2dyZXNzKz0yMFxuICAgICAgaWYodGhpcy5sb2FkaW5nUHJvZ3Jlc3M8NDApdGhpcy5sb2FkaW5nTGFiZWw9XCJMb2FkaW5nIHdvcmxkLi4uXCJcbiAgICAgIGVsc2UgaWYodGhpcy5sb2FkaW5nUHJvZ3Jlc3M8ODApdGhpcy5sb2FkaW5nTGFiZWw9XCJQcmVwYXJpbmcgdGVycmFpbi4uLlwiXG4gICAgICBlbHNlIHRoaXMubG9hZGluZ0xhYmVsPVwiU3RhcnRpbmcgZ2FtZS4uLlwiXG4gICAgICBpZih0aGlzLmxvYWRpbmdQcm9ncmVzcz49MTAwKXsgY2xlYXJJbnRlcnZhbCh0aGlzLmxvYWRpbmdUaW1lcik7IHRoaXMubG9hZGluZ1RpbWVyPW51bGw7IHRoaXMubG9hZGluZz1mYWxzZTsgdGhpcy5sb2FkaW5nRGlzcGxheT1cIm5vbmVcIjsgdGhpcy5tZW51RGlzcGxheT1cImZsZXhcIiB9XG4gICAgfSwxMTApXG4gIH0sXG5cbiAgb25EZXN0cm95KCl7XG4gICAgaWYodGhpcy5sb2FkaW5nVGltZXIpY2xlYXJJbnRlcnZhbCh0aGlzLmxvYWRpbmdUaW1lcilcbiAgICBpZih0aGlzLmdhbWVUaW1lciljbGVhckludGVydmFsKHRoaXMuZ2FtZVRpbWVyKVxuICAgIGlmKHRoaXMuZGF5VGltZXIpY2xlYXJJbnRlcnZhbCh0aGlzLmRheVRpbWVyKVxuICAgIHRoaXMubG9hZGluZ1RpbWVyPW51bGw7IHRoaXMuZ2FtZVRpbWVyPW51bGw7IHRoaXMuZGF5VGltZXI9bnVsbFxuICB9LFxuXG4gIHN0YXJ0R2FtZSgpeyBpZih0aGlzLmxvYWRpbmcpcmV0dXJuOyB0aGlzLm1lbnVEaXNwbGF5PVwibm9uZVwiOyB0aGlzLnNldHRpbmdzRGlzcGxheT1cIm5vbmVcIjsgdGhpcy5zbG90TWVudURpc3BsYXk9XCJmbGV4XCIgfSxcbiAgb3BlblNldHRpbmdzKCl7IGlmKHRoaXMubG9hZGluZylyZXR1cm47IHRoaXMubWVudURpc3BsYXk9XCJub25lXCI7IHRoaXMuc2V0dGluZ3NEaXNwbGF5PVwiZmxleFwiOyB0aGlzLmJhY2tTZXR0aW5nc01haW4oKSB9LFxuICBjbG9zZVNldHRpbmdzKCl7IHRoaXMuc2V0dGluZ3NEaXNwbGF5PVwibm9uZVwiOyB0aGlzLm1lbnVEaXNwbGF5PVwiZmxleFwiIH0sXG4gIHNldFNldHRpbmdzU2VjdGlvbihzZWN0aW9uLHRpdGxlKXtcbiAgICB0aGlzLnNldHRpbmdzU2VjdGlvbj1zZWN0aW9uOyB0aGlzLnNldHRpbmdzU2VjdGlvblRpdGxlPXRpdGxlXG4gICAgdGhpcy5zZXR0aW5nc01haW5EaXNwbGF5PXNlY3Rpb249PT1cIk1BSU5cIj9cImZsZXhcIjpcIm5vbmVcIlxuICAgIHRoaXMuc2V0dGluZ3NEaXNwbGF5U2VjdGlvbkRpc3BsYXk9c2VjdGlvbj09PVwiRElTUExBWVwiP1wiZmxleFwiOlwibm9uZVwiXG4gICAgdGhpcy5zZXR0aW5nc0NvbnRyb2xzU2VjdGlvbkRpc3BsYXk9c2VjdGlvbj09PVwiQ09OVFJPTFNcIj9cImZsZXhcIjpcIm5vbmVcIlxuICAgIHRoaXMuc2V0dGluZ3NHYW1lU2VjdGlvbkRpc3BsYXk9c2VjdGlvbj09PVwiR0FNRVwiP1wiZmxleFwiOlwibm9uZVwiXG4gICAgdGhpcy5zZXR0aW5nc0dyYXBoaWNzU2VjdGlvbkRpc3BsYXk9c2VjdGlvbj09PVwiR1JBUEhJQ1NcIj9cImZsZXhcIjpcIm5vbmVcIlxuICAgIHRoaXMuc2V0dGluZ3NBY2Nlc3NpYmlsaXR5U2VjdGlvbkRpc3BsYXk9c2VjdGlvbj09PVwiQUNDRVNTSUJJTElUWVwiP1wiZmxleFwiOlwibm9uZVwiXG4gIH0sXG4gIGJhY2tTZXR0aW5nc01haW4oKXsgdGhpcy5zZXRTZXR0aW5nc1NlY3Rpb24oXCJNQUlOXCIsXCJHQU1FIFNFVFRJTkdTXCIpIH0sXG4gIG9wZW5TZXR0aW5nc0Rpc3BsYXkoKXsgdGhpcy5zZXRTZXR0aW5nc1NlY3Rpb24oXCJESVNQTEFZXCIsXCJESVNQTEFZXCIpIH0sXG4gIG9wZW5TZXR0aW5nc0NvbnRyb2xzKCl7IHRoaXMuc2V0U2V0dGluZ3NTZWN0aW9uKFwiQ09OVFJPTFNcIixcIkNPTlRST0xTXCIpIH0sXG4gIG9wZW5TZXR0aW5nc0dhbWUoKXsgdGhpcy5zZXRTZXR0aW5nc1NlY3Rpb24oXCJHQU1FXCIsXCJHQU1FXCIpIH0sXG4gIG9wZW5TZXR0aW5nc0dyYXBoaWNzKCl7IHRoaXMuc2V0U2V0dGluZ3NTZWN0aW9uKFwiR1JBUEhJQ1NcIixcIkdSQVBISUNTXCIpIH0sXG4gIG9wZW5TZXR0aW5nc0FjY2Vzc2liaWxpdHkoKXsgdGhpcy5zZXRTZXR0aW5nc1NlY3Rpb24oXCJBQ0NFU1NJQklMSVRZXCIsXCJBQ0NFU1NJQklMSVRZXCIpIH0sXG4gIHRvZ2dsZURheU5pZ2h0KCl7XG4gICAgaWYodGhpcy5jdXJyZW50RGltZW5zaW9uIT09XCJOT1JNQUxcIil7dGhpcy5zdGF0dXM9XCJEYXkvbmlnaHQgaXMgZml4ZWQgaW4gXCIrdGhpcy5jdXJyZW50RGltZW5zaW9uO3RoaXMuZGF5TmlnaHRMYWJlbD1cIkRBWS9OSUdIVDogRklYRURcIjtyZXR1cm59XG4gICAgdGhpcy5kYXlOaWdodEVuYWJsZWQ9IXRoaXMuZGF5TmlnaHRFbmFibGVkXG4gICAgaWYodGhpcy5kYXlOaWdodEVuYWJsZWQpe1xuICAgICAgdGhpcy5kYXlOaWdodExhYmVsPVwiREFZL05JR0hUOiBPTlwiXG4gICAgICBpZighdGhpcy5kYXlUaW1lciYmdGhpcy5nYW1lRGlzcGxheT09PVwiZmxleFwiKSB0aGlzLmRheVRpbWVyPXNldEludGVydmFsKCgpPT57dGhpcy5hZHZhbmNlRGF5TmlnaHQoKX0sMTIwMClcbiAgICAgIHRoaXMuc3RhdHVzPVwiRGF5L25pZ2h0IGVuYWJsZWRcIlxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRheU5pZ2h0TGFiZWw9XCJEQVkvTklHSFQ6IE9GRlwiXG4gICAgICBpZih0aGlzLmRheVRpbWVyKXtjbGVhckludGVydmFsKHRoaXMuZGF5VGltZXIpO3RoaXMuZGF5VGltZXI9bnVsbH1cbiAgICAgIHRoaXMuZGF5UGhhc2U9MDsgdGhpcy5kYXlTdGFnZT1cIkRBWVwiOyB0aGlzLnN0YXR1cz1cIkRheS9uaWdodCBkaXNhYmxlZFwiXG4gICAgfVxuICAgIHRoaXMucmVmcmVzaFZpZXcoKVxuICB9LFxuICB0b2dnbGVHcmlkKCl7IHRoaXMuc2hvd0dyaWQ9IXRoaXMuc2hvd0dyaWQ7IHRoaXMuc2hvd0dyaWRMYWJlbD10aGlzLnNob3dHcmlkP1wiU0hPVyBHUklEOiBPTlwiOlwiU0hPVyBHUklEOiBPRkZcIjsgdGhpcy5zdGF0dXM9dGhpcy5zaG93R3JpZD9cIkdyaWQgZW5hYmxlZFwiOlwiR3JpZCBkaXNhYmxlZFwiOyB0aGlzLnJlZnJlc2hWaWV3KCkgfSxcbiAgdG9nZ2xlQmxvY2tPdXRsaW5lKCl7IHRoaXMuYmxvY2tPdXRsaW5lPSF0aGlzLmJsb2NrT3V0bGluZTsgdGhpcy5ibG9ja091dGxpbmVMYWJlbD10aGlzLmJsb2NrT3V0bGluZT9cIkJMT0NLIE9VVExJTkU6IE9OXCI6XCJCTE9DSyBPVVRMSU5FOiBPRkZcIjsgdGhpcy5zdGF0dXM9dGhpcy5ibG9ja091dGxpbmU/XCJPdXRsaW5lIGVuYWJsZWRcIjpcIk91dGxpbmUgZGlzYWJsZWRcIjsgdGhpcy5yZWZyZXNoVmlldygpIH0sXG4gIGN5Y2xlRGVmYXVsdFpvb20oKXtcbiAgICB0aGlzLnpvb21EZWZhdWx0SW5kZXg9KHRoaXMuem9vbURlZmF1bHRJbmRleCsxKSVaT09NX0xFVkVMUy5sZW5ndGhcbiAgICB0aGlzLnpvb21EZWZhdWx0TGFiZWw9XCJERUZBVUxUIFpPT006IFwiKyh0aGlzLnpvb21EZWZhdWx0SW5kZXg9PT0wP1wiOTAlXCI6KHRoaXMuem9vbURlZmF1bHRJbmRleD09PTE/XCIxMDAlXCI6XCIxMjAlXCIpKVxuICAgIHRoaXMuem9vbUluZGV4PXRoaXMuem9vbURlZmF1bHRJbmRleFxuICAgIHRoaXMuc3RhdHVzPVwiRGVmYXVsdCB6b29tIGNoYW5nZWRcIlxuICAgIHRoaXMucmVmcmVzaFZpZXcoKVxuICB9LFxuICB0b2dnbGVBdXRvSnVtcCgpeyB0aGlzLmF1dG9KdW1wPSF0aGlzLmF1dG9KdW1wOyB0aGlzLmF1dG9KdW1wTGFiZWw9dGhpcy5hdXRvSnVtcD9cIkFVVE8gSlVNUDogT05cIjpcIkFVVE8gSlVNUDogT0ZGXCI7IHRoaXMuc3RhdHVzPVwiQXV0byBqdW1wIGNoYW5nZWRcIiB9LFxuICB0b2dnbGVDb25maXJtUmVzZXQoKXsgdGhpcy5jb25maXJtUmVzZXQ9IXRoaXMuY29uZmlybVJlc2V0OyB0aGlzLmNvbmZpcm1SZXNldExhYmVsPXRoaXMuY29uZmlybVJlc2V0P1wiQ09ORklSTSBSRVNFVDogT05cIjpcIkNPTkZJUk0gUkVTRVQ6IE9GRlwiOyB0aGlzLnJlc2V0QXJtZWQ9ZmFsc2U7IHRoaXMuc3RhdHVzPVwiUmVzZXQgY29uZmlybWF0aW9uIGNoYW5nZWRcIiB9LFxuICB0b2dnbGVQYXVzZU1lbnVzKCl7IHRoaXMucGF1c2VNZW51cz0hdGhpcy5wYXVzZU1lbnVzOyB0aGlzLnBhdXNlTWVudXNMYWJlbD10aGlzLnBhdXNlTWVudXM/XCJQQVVTRSBJTiBNRU5VUzogT05cIjpcIlBBVVNFIElOIE1FTlVTOiBPRkZcIjsgdGhpcy5zdGF0dXM9XCJNZW51IHBhdXNlIGNoYW5nZWRcIiB9LFxuICBjeWNsZU5ldGhlclVubG9jaygpe3ZhciB2YWx1ZXM9WzEwLDIwLDMwLDQwLDUwXSxpPXZhbHVlcy5pbmRleE9mKHRoaXMubmV0aGVyVW5sb2NrVGFyZ2V0KTt0aGlzLm5ldGhlclVubG9ja1RhcmdldD12YWx1ZXNbKGkrMSkldmFsdWVzLmxlbmd0aF07dGhpcy5uZXRoZXJVbmxvY2tMYWJlbD1cIk5FVEhFUiBVTkxPQ0s6IFwiK3RoaXMubmV0aGVyVW5sb2NrVGFyZ2V0O3RoaXMudXBkYXRlTmV0aGVyTG9ja0xhYmVsKCk7dGhpcy5zdGF0dXM9XCJOZXRoZXIgdW5sb2NrIGNoYW5nZWRcIiB9LFxuICBjeWNsZUVuZFVubG9jaygpe3ZhciB2YWx1ZXM9WzEwLDIwLDMwLDQwLDUwLDc1LDEwMF0saT12YWx1ZXMuaW5kZXhPZih0aGlzLmVuZFVubG9ja1RhcmdldCk7dGhpcy5lbmRVbmxvY2tUYXJnZXQ9dmFsdWVzWyhpKzEpJXZhbHVlcy5sZW5ndGhdO3RoaXMuZW5kVW5sb2NrTGFiZWw9XCJFTkQgVU5MT0NLOiBcIit0aGlzLmVuZFVubG9ja1RhcmdldDt0aGlzLnVwZGF0ZUVuZExvY2tMYWJlbCgpO3RoaXMuc3RhdHVzPVwiRW5kIHVubG9jayBjaGFuZ2VkXCIgfSxcbiAgY3ljbGVFbmRXaW5UYXJnZXQoKXt2YXIgdmFsdWVzPVsxMCw1MCwxMDAsMTUwLDIwMCwyNTBdLGk9dmFsdWVzLmluZGV4T2YodGhpcy5lbmRXaW5UYXJnZXQpO3RoaXMuZW5kV2luVGFyZ2V0PXZhbHVlc1soaSsxKSV2YWx1ZXMubGVuZ3RoXTt0aGlzLmVuZFdpbkxhYmVsPVwiRU5EIFdJTiBCTE9DS1M6IFwiK3RoaXMuZW5kV2luVGFyZ2V0O3RoaXMuc3RhdHVzPVwiRW5kIHZpY3RvcnkgdGFyZ2V0IGNoYW5nZWRcIiB9LFxuICB0b2dnbGVXb3JsZEFuaW1hdGlvbigpeyB0aGlzLndvcmxkQW5pbWF0aW9uPSF0aGlzLndvcmxkQW5pbWF0aW9uOyB0aGlzLndvcmxkQW5pbWF0aW9uTGFiZWw9dGhpcy53b3JsZEFuaW1hdGlvbj9cIldPUkxEIEFOSU1BVElPTjogT05cIjpcIldPUkxEIEFOSU1BVElPTjogT0ZGXCI7IHRoaXMuYW5pbWF0aW9uRnJhbWU9MDsgdGhpcy5zdGF0dXM9dGhpcy53b3JsZEFuaW1hdGlvbj9cIldvcmxkIGFuaW1hdGlvbiBlbmFibGVkXCI6XCJXb3JsZCBhbmltYXRpb24gZGlzYWJsZWRcIjsgdGhpcy5yZWZyZXNoVmlldygpIH0sXG4gIHRvZ2dsZVdhdGVyQW5pbWF0aW9uKCl7IHRoaXMud2F0ZXJBbmltYXRpb249IXRoaXMud2F0ZXJBbmltYXRpb247IHRoaXMud2F0ZXJBbmltYXRpb25MYWJlbD10aGlzLndhdGVyQW5pbWF0aW9uP1wiV0FURVIgQU5JTUFUSU9OOiBPTlwiOlwiV0FURVIgQU5JTUFUSU9OOiBPRkZcIjsgdGhpcy5hbmltYXRpb25GcmFtZT0wOyB0aGlzLnN0YXR1cz10aGlzLndhdGVyQW5pbWF0aW9uP1wiV2F0ZXIgYW5pbWF0aW9uIGVuYWJsZWRcIjpcIldhdGVyIGFuaW1hdGlvbiBkaXNhYmxlZFwiOyB0aGlzLnJlZnJlc2hWaWV3KCkgfSxcbiAgdG9nZ2xlTGVhZkFuaW1hdGlvbigpeyB0aGlzLmxlYWZBbmltYXRpb249IXRoaXMubGVhZkFuaW1hdGlvbjsgdGhpcy5sZWFmQW5pbWF0aW9uTGFiZWw9dGhpcy5sZWFmQW5pbWF0aW9uP1wiTEVBRiBBTklNQVRJT046IE9OXCI6XCJMRUFGIEFOSU1BVElPTjogT0ZGXCI7IHRoaXMuYW5pbWF0aW9uRnJhbWU9MDsgdGhpcy5zdGF0dXM9dGhpcy5sZWFmQW5pbWF0aW9uP1wiTGVhZiBhbmltYXRpb24gZW5hYmxlZFwiOlwiTGVhZiBhbmltYXRpb24gZGlzYWJsZWRcIjsgdGhpcy5yZWZyZXNoVmlldygpIH0sXG4gIHJlc3RhcnRHYW1lVGltZXIoKXtcbiAgICBpZih0aGlzLmdhbWVUaW1lcil7Y2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaW1lcik7dGhpcy5nYW1lVGltZXI9bnVsbH1cbiAgICBpZih0aGlzLmdhbWVEaXNwbGF5PT09XCJmbGV4XCIpIHRoaXMuZ2FtZVRpbWVyPXNldEludGVydmFsKCgpPT57dGhpcy50aWNrKCl9LDE0MClcbiAgfSxcbiAgY3ljbGVOaWdodERhcmtuZXNzKCl7XG4gICAgdGhpcy5uaWdodERhcmtuZXNzPSh0aGlzLm5pZ2h0RGFya25lc3MrMSklM1xuICAgIHRoaXMubmlnaHREYXJrbmVzc0xhYmVsPXRoaXMubmlnaHREYXJrbmVzcz09PTA/XCJOSUdIVCBEQVJLTkVTUzogQlJJR0hUXCI6KHRoaXMubmlnaHREYXJrbmVzcz09PTE/XCJOSUdIVCBEQVJLTkVTUzogTk9STUFMXCI6XCJOSUdIVCBEQVJLTkVTUzogREFSS1wiKVxuICAgIHRoaXMuc3RhdHVzPVwiTmlnaHQgZGFya25lc3MgY2hhbmdlZFwiOyB0aGlzLnJlZnJlc2hWaWV3KClcbiAgfSxcbiAgdG9nZ2xlV2VhdGhlcigpeyB0aGlzLndlYXRoZXJFbmFibGVkPSF0aGlzLndlYXRoZXJFbmFibGVkOyB0aGlzLndlYXRoZXJMYWJlbD10aGlzLndlYXRoZXJFbmFibGVkP1wiV0VBVEhFUjogT05cIjpcIldFQVRIRVI6IE9GRlwiOyBpZighdGhpcy53ZWF0aGVyRW5hYmxlZCl7dGhpcy53ZWF0aGVyU3RhZ2U9XCJDTEVBUlwifSB0aGlzLnN0YXR1cz10aGlzLndlYXRoZXJFbmFibGVkP1wiV2VhdGhlciBlbmFibGVkXCI6XCJXZWF0aGVyIGRpc2FibGVkXCI7IHRoaXMucmVmcmVzaFZpZXcoKSB9LFxuICB0b2dnbGVIaWdoQ29udHJhc3QoKXsgdGhpcy5oaWdoQ29udHJhc3Q9IXRoaXMuaGlnaENvbnRyYXN0OyB0aGlzLmhpZ2hDb250cmFzdExhYmVsPXRoaXMuaGlnaENvbnRyYXN0P1wiSElHSCBDT05UUkFTVDogT05cIjpcIkhJR0ggQ09OVFJBU1Q6IE9GRlwiOyB0aGlzLnJlZnJlc2hWaWV3KCkgfSxcbiAgdG9nZ2xlTGFyZ2VPdXRsaW5lKCl7IHRoaXMubGFyZ2VPdXRsaW5lPSF0aGlzLmxhcmdlT3V0bGluZTsgdGhpcy5sYXJnZU91dGxpbmVMYWJlbD10aGlzLmxhcmdlT3V0bGluZT9cIkxBUkdFIE9VVExJTkU6IE9OXCI6XCJMQVJHRSBPVVRMSU5FOiBPRkZcIjsgdGhpcy5yZWZyZXNoVmlldygpIH0sXG4gIHRvZ2dsZUxhcmdlVGV4dCgpeyB0aGlzLmxhcmdlVGV4dD0hdGhpcy5sYXJnZVRleHQ7IHRoaXMubGFyZ2VUZXh0TGFiZWw9dGhpcy5sYXJnZVRleHQ/XCJMQVJHRSBURVhUOiBPTlwiOlwiTEFSR0UgVEVYVDogT0ZGXCI7IHRoaXMuY29udHJvbFN0eWxlPXRoaXMubGFyZ2VUZXh0P1wid2lkdGg6MzNweDtoZWlnaHQ6MTdweDtmb250LXNpemU6NnB4O1wiOlwid2lkdGg6MzNweDtoZWlnaHQ6MTdweDtmb250LXNpemU6NXB4O1wiOyB0aGlzLnN0YXR1cz10aGlzLmxhcmdlVGV4dD9cIkxhcmdlIHRleHQgZW5hYmxlZFwiOlwiTGFyZ2UgdGV4dCBkaXNhYmxlZFwiOyB0aGlzLnJlZnJlc2hWaWV3KCkgfSxcblxuICBzZWxlY3RTbG90MSgpeyB0aGlzLnNlbGVjdFNsb3QoMSkgfSxcbiAgc2VsZWN0U2xvdDIoKXsgdGhpcy5zZWxlY3RTbG90KDIpIH0sXG4gIHNlbGVjdFNsb3QzKCl7IHRoaXMuc2VsZWN0U2xvdCgzKSB9LFxuICBzZWxlY3RTbG90NCgpeyB0aGlzLnNlbGVjdFNsb3QoNCkgfSxcbiAgc2VsZWN0U2xvdDUoKXsgdGhpcy5zZWxlY3RTbG90KDUpIH0sXG5cbiAgc2VsZWN0U2xvdChzbG90KXtcbiAgICB0aGlzLmN1cnJlbnREaW1lbnNpb249XCJOT1JNQUxcIlxuICAgIHRoaXMubm9ybWFsRGltZW5zaW9uU3RhdGU9bnVsbFxuICAgIHRoaXMuY3VycmVudFNsb3Q9c2xvdFxuICAgIGlmKHNsb3Q9PT0xKXt0aGlzLndvcmxkPWNyZWF0ZVdvcmxkKCk7dGhpcy5wbGF5ZXJYPTM7dGhpcy5zdGF0dXM9XCJOb3JtYWwgd29ybGRcIn1cbiAgICBpZihzbG90PT09Mil7dGhpcy53b3JsZD1jcmVhdGVIb3VzZVdvcmxkKCk7dGhpcy5wbGF5ZXJYPTQ7dGhpcy5zdGF0dXM9XCJIb3VzZSB3b3JsZFwifVxuICAgIGlmKHNsb3Q9PT0zKXt0aGlzLndvcmxkPWNyZWF0ZVZpbGxhZ2VXb3JsZCgpO3RoaXMucGxheWVyWD0zO3RoaXMuc3RhdHVzPVwiVmlsbGFnZSB3b3JsZFwifVxuICAgIGlmKHNsb3Q9PT00KXt0aGlzLndvcmxkPWNyZWF0ZU1pbmVXb3JsZCgpO3RoaXMucGxheWVyWD05O3RoaXMuc3RhdHVzPVwiRGVlcCBtaW5lXCJ9XG4gICAgaWYoc2xvdD09PTUpe3RoaXMud29ybGQ9Y3JlYXRlSXNsYW5kV29ybGQoKTt0aGlzLnBsYXllclg9OTt0aGlzLnN0YXR1cz1cIklzbGFuZCB3b3JsZFwifVxuICAgIHRoaXMuc2xvdE1lbnVEaXNwbGF5PVwibm9uZVwiOyB0aGlzLmdhbWVEaXNwbGF5PVwiZmxleFwiOyB0aGlzLnBsYXllclk9MTI7IHRoaXMucGxheWVyVnk9MDsgdGhpcy5zZWxlY3RlZFg9LTE7IHRoaXMuc2VsZWN0ZWRZPS0xOyB0aGlzLnNlbGVjdGVkQmxvY2s9XCJkaXJ0XCI7IHRoaXMubW9kZT1cIk1JTkVcIlxuICAgIHRoaXMuaW52ZW50b3J5PXtkaXJ0OjAsc3RvbmU6MCx3b29kOjAsbGVhZjowLHNhbmQ6MCxnbGFzczowLGJyaWNrOjAsdG9yY2g6MCx3YXRlcjowLGNoZXN0OjAsY3JhZnRpbmdUYWJsZTowLGNvYWw6MCxpcm9uOjAsZ29sZDowLGRpYW1vbmQ6MCxuZXRoZXJyYWNrOjAsc291bFNhbmQ6MCxnbG93c3RvbmU6MCxuZXRoZXJCcmljazowLHF1YXJ0ek9yZTowLGJsYWNrc3RvbmU6MCxlbmRTdG9uZTowLG9ic2lkaWFuOjAscHVycHVyOjAsY2hvcnVzUGxhbnQ6MCxlbmRCcmljazowLGVuZE9yZTowfVxuICAgIHRoaXMudG9vbFR5cGU9XCJoYW5kXCI7IHRoaXMudG9vbExhYmVsPVwiSEFORFwiOyB0aGlzLnBpY2theGVEdXJhYmlsaXR5PTEwMDsgdGhpcy5heGVEdXJhYmlsaXR5PTEwMDsgdGhpcy5jcmFmdGluZ1RhYmxlQnV0dG9uRGlzcGxheT1cIm5vbmVcIjsgdGhpcy53b3JrYmVuY2hTdGF0dXM9XCJDcmFmdGluZyB0YWJsZSByZWFkeVwiXG4gICAgdGhpcy54cD0wOyB0aGlzLmxldmVsPTE7IHRoaXMudG90YWxNaW5lZD0wOyB0aGlzLnRvdGFsUGxhY2VkPTA7IHRoaXMuZm91bmRJcm9uPWZhbHNlOyB0aGlzLmZvdW5kRGlhbW9uZD1mYWxzZVxuICAgIHRoaXMuaW52ZW50b3J5RGlzcGxheT1cIm5vbmVcIjsgdGhpcy5jaGVzdERpc3BsYXk9XCJub25lXCI7IHRoaXMuY3VycmVudENoZXN0S2V5PVwiXCI7IHRoaXMuZXh0cmFEaXNwbGF5PVwibm9uZVwiOyB0aGlzLmNyYWZ0RGlzcGxheT1cIm5vbmVcIjsgdGhpcy53b3JrYmVuY2hEaXNwbGF5PVwibm9uZVwiOyB0aGlzLm1hcERpc3BsYXk9XCJub25lXCI7IHRoaXMudG9vbHNEaXNwbGF5PVwibm9uZVwiOyB0aGlzLnF1ZXN0c0Rpc3BsYXk9XCJub25lXCI7IHRoaXMuYWNoaWV2ZW1lbnRzRGlzcGxheT1cIm5vbmVcIlxuICAgIHRoaXMuaW5pdENoZXN0U3RvcmFnZSgpXG4gICAgdGhpcy5kYXlQaGFzZT0wOyB0aGlzLmRheVN0YWdlPVwiREFZXCI7IHRoaXMuem9vbUluZGV4PXRoaXMuem9vbURlZmF1bHRJbmRleDsgaWYodGhpcy5jdXJyZW50RGltZW5zaW9uPT09XCJOT1JNQUxcIiYmdGhpcy5kYXlOaWdodEVuYWJsZWQmJiF0aGlzLmRheVRpbWVyKXRoaXMuZGF5VGltZXI9c2V0SW50ZXJ2YWwoKCk9PnsgdGhpcy5hZHZhbmNlRGF5TmlnaHQoKSB9LDEyMDApOyB0aGlzLnJlZnJlc2hWaWV3KClcbiAgICBpZighdGhpcy5nYW1lVGltZXIpdGhpcy5nYW1lVGltZXI9c2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLnRpY2soKX0sMTQwKVxuICB9LFxuXG4gIG9wZW5FeHRyYSgpeyBpZih0aGlzLmdhbWVEaXNwbGF5IT09XCJmbGV4XCIpcmV0dXJuOyBpZih0aGlzLnBhdXNlTWVudXMmJnRoaXMuZ2FtZVRpbWVyKXtjbGVhckludGVydmFsKHRoaXMuZ2FtZVRpbWVyKTt0aGlzLmdhbWVUaW1lcj1udWxsfSBpZih0aGlzLnBhdXNlTWVudXMmJnRoaXMuZGF5VGltZXIpe2NsZWFySW50ZXJ2YWwodGhpcy5kYXlUaW1lcik7dGhpcy5kYXlUaW1lcj1udWxsfTsgdGhpcy5leHRyYURpc3BsYXk9XCJmbGV4XCI7IHRoaXMuZ2FtZURpc3BsYXk9XCJub25lXCIgfSxcbiAgY2xvc2VFeHRyYSgpeyB0aGlzLmV4dHJhRGlzcGxheT1cIm5vbmVcIjsgdGhpcy5nYW1lRGlzcGxheT1cImZsZXhcIjsgaWYodGhpcy5wYXVzZU1lbnVzKXt0aGlzLnJlc3RhcnRHYW1lVGltZXIoKTsgaWYodGhpcy5jdXJyZW50RGltZW5zaW9uPT09XCJOT1JNQUxcIiYmdGhpcy5kYXlOaWdodEVuYWJsZWQmJiF0aGlzLmRheVRpbWVyKXRoaXMuZGF5VGltZXI9c2V0SW50ZXJ2YWwoKCk9PnsgdGhpcy5hZHZhbmNlRGF5TmlnaHQoKSB9LDEyMDApfSB9LFxuICBjbG9uZVdvcmxkKHdvcmxkKXt2YXIgb3V0PVtdO2Zvcih2YXIgaT0wO2k8d29ybGQubGVuZ3RoO2krKylvdXQucHVzaChtYWtlVGlsZSh3b3JsZFtpXS54LHdvcmxkW2ldLnksd29ybGRbaV0udHlwZSkpO3JldHVybiBvdXR9LFxuICBjbG9uZUNoZXN0U3RvcmFnZShzdG9yYWdlKXt2YXIgb3V0PXt9LGtleXM9T2JqZWN0LmtleXMoc3RvcmFnZXx8e30pO2Zvcih2YXIgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKW91dFtrZXlzW2ldXT1PYmplY3QuYXNzaWduKHt9LHN0b3JhZ2Vba2V5c1tpXV0pO3JldHVybiBvdXR9LFxuICBjYXB0dXJlRGltZW5zaW9uU3RhdGUoKXtyZXR1cm4ge3dvcmxkOnRoaXMuY2xvbmVXb3JsZCh0aGlzLndvcmxkKSxwbGF5ZXJYOnRoaXMucGxheWVyWCxwbGF5ZXJZOnRoaXMucGxheWVyWSxwbGF5ZXJWeTp0aGlzLnBsYXllclZ5LHNlbGVjdGVkWDp0aGlzLnNlbGVjdGVkWCxzZWxlY3RlZFk6dGhpcy5zZWxlY3RlZFksc2VsZWN0ZWRCbG9jazp0aGlzLnNlbGVjdGVkQmxvY2ssbW9kZTp0aGlzLm1vZGUsY3VycmVudFNsb3Q6dGhpcy5jdXJyZW50U2xvdCxjaGVzdFN0b3JhZ2U6dGhpcy5jbG9uZUNoZXN0U3RvcmFnZSh0aGlzLmNoZXN0U3RvcmFnZSksZGF5UGhhc2U6dGhpcy5kYXlQaGFzZSxkYXlTdGFnZTp0aGlzLmRheVN0YWdlfX0sXG4gIHJlc3RvcmVEaW1lbnNpb25TdGF0ZShzdGF0ZSl7dGhpcy53b3JsZD10aGlzLmNsb25lV29ybGQoc3RhdGUud29ybGQpO3RoaXMucGxheWVyWD1zdGF0ZS5wbGF5ZXJYO3RoaXMucGxheWVyWT1zdGF0ZS5wbGF5ZXJZO3RoaXMucGxheWVyVnk9c3RhdGUucGxheWVyVnk7dGhpcy5zZWxlY3RlZFg9c3RhdGUuc2VsZWN0ZWRYO3RoaXMuc2VsZWN0ZWRZPXN0YXRlLnNlbGVjdGVkWTt0aGlzLnNlbGVjdGVkQmxvY2s9c3RhdGUuc2VsZWN0ZWRCbG9ja3x8XCJkaXJ0XCI7dGhpcy5tb2RlPXN0YXRlLm1vZGV8fFwiTUlORVwiO3RoaXMuY3VycmVudFNsb3Q9c3RhdGUuY3VycmVudFNsb3Q9PT11bmRlZmluZWQ/MTpzdGF0ZS5jdXJyZW50U2xvdDt0aGlzLmNoZXN0U3RvcmFnZT10aGlzLmNsb25lQ2hlc3RTdG9yYWdlKHN0YXRlLmNoZXN0U3RvcmFnZXx8e30pO3RoaXMuZGF5UGhhc2U9c3RhdGUuZGF5UGhhc2V8fDA7dGhpcy5kYXlTdGFnZT1zdGF0ZS5kYXlTdGFnZXx8XCJEQVlcIjt0aGlzLnNsb3RNZW51RGlzcGxheT1cIm5vbmVcIjt0aGlzLmdhbWVEaXNwbGF5PVwiZmxleFwiO3RoaXMuaW52ZW50b3J5RGlzcGxheT1cIm5vbmVcIjt0aGlzLndvcmxkc0Rpc3BsYXk9XCJub25lXCI7dGhpcy5uZXRoZXJJbnZlbnRvcnlEaXNwbGF5PVwibm9uZVwiO3RoaXMuZW5kSW52ZW50b3J5RGlzcGxheT1cIm5vbmVcIjt0aGlzLnJlZnJlc2hWaWV3KCl9LFxuICB1cGRhdGVOZXRoZXJMb2NrTGFiZWwoKXt2YXIgdW5sb2NrZWQ9dGhpcy5ub3JtYWxNaW5lZFRvdGFsPj10aGlzLm5ldGhlclVubG9ja1RhcmdldDt0aGlzLndvcmxkc05ldGhlckxhYmVsPXVubG9ja2VkP1wiTkVUSEVSIFdPUkxEXCI6XCJORVRIRVI6IExPQ0tFRFwiO3RoaXMud29ybGRzTmV0aGVyU3R5bGU9dW5sb2NrZWQ/XCJiYWNrZ3JvdW5kLWNvbG9yOiM3YjNmM2Y7Y29sb3I6I2ZmZmZmZjtcIjpcImJhY2tncm91bmQtY29sb3I6IzMzM2I0Mjtjb2xvcjojNzc3Zjg2O1wiO3RoaXMubmV0aGVyUHJvZ3Jlc3NMYWJlbD11bmxvY2tlZD9cIlVOTE9DS0VEXCI6XCJNSU5FIFwiK01hdGgubWF4KDAsdGhpcy5uZXRoZXJVbmxvY2tUYXJnZXQtdGhpcy5ub3JtYWxNaW5lZFRvdGFsKStcIiBNT1JFIEJMT0NLU1wifSxcbiAgdXBkYXRlRW5kTG9ja0xhYmVsKCl7dmFyIHVubG9ja2VkPXRoaXMubmV0aGVyTWluZWRUb3RhbD49dGhpcy5lbmRVbmxvY2tUYXJnZXQ7dGhpcy53b3JsZHNFbmRMYWJlbD11bmxvY2tlZD9cIlRIRSBFTkRcIjpcIlRIRSBFTkQ6IExPQ0tFRFwiO3RoaXMud29ybGRzRW5kU3R5bGU9dW5sb2NrZWQ/XCJiYWNrZ3JvdW5kLWNvbG9yOiM0YjNjNjY7Y29sb3I6I2ZmZmZmZjtcIjpcImJhY2tncm91bmQtY29sb3I6IzMzM2I0Mjtjb2xvcjojNzc3Zjg2O1wiO3RoaXMuZW5kUHJvZ3Jlc3NMYWJlbD11bmxvY2tlZD9cIlVOTE9DS0VEXCI6XCJNSU5FIFwiK01hdGgubWF4KDAsdGhpcy5lbmRVbmxvY2tUYXJnZXQtdGhpcy5uZXRoZXJNaW5lZFRvdGFsKStcIiBNT1JFIE5FVEhFUiBCTE9DS1NcIn0sXG4gIG9wZW5Xb3JsZHMoKXtpZih0aGlzLmV4dHJhRGlzcGxheSE9PVwiZmxleFwiKXJldHVybjt0aGlzLnVwZGF0ZU5ldGhlckxvY2tMYWJlbCgpO3RoaXMudXBkYXRlRW5kTG9ja0xhYmVsKCk7dGhpcy5uZXRoZXJJbnZlbnRvcnlEaXNwbGF5PVwibm9uZVwiO3RoaXMuZW5kSW52ZW50b3J5RGlzcGxheT1cIm5vbmVcIjt0aGlzLmV4dHJhRGlzcGxheT1cIm5vbmVcIjt0aGlzLndvcmxkc0Rpc3BsYXk9XCJmbGV4XCJ9LFxuICBjbG9zZVdvcmxkcygpe3RoaXMud29ybGRzRGlzcGxheT1cIm5vbmVcIjt0aGlzLmV4dHJhRGlzcGxheT1cImZsZXhcIn0sXG4gIHNhdmVDdXJyZW50RGltZW5zaW9uU3RhdGUoKXt2YXIgc3RhdGU9dGhpcy5jYXB0dXJlRGltZW5zaW9uU3RhdGUoKTtpZih0aGlzLmN1cnJlbnREaW1lbnNpb249PT1cIk5PUk1BTFwiKXRoaXMubm9ybWFsRGltZW5zaW9uU3RhdGU9c3RhdGU7ZWxzZSBpZih0aGlzLmN1cnJlbnREaW1lbnNpb249PT1cIk5FVEhFUlwiKXRoaXMubmV0aGVyRGltZW5zaW9uU3RhdGU9c3RhdGU7ZWxzZSBpZih0aGlzLmN1cnJlbnREaW1lbnNpb249PT1cIkVORFwiKXRoaXMuZW5kRGltZW5zaW9uU3RhdGU9c3RhdGU7cmV0dXJuIHN0YXRlfSxcbiAgdXBkYXRlSW52ZW50b3J5U2VjdGlvbnMoKXt0aGlzLm5ldGhlckludmVudG9yeURpc3BsYXk9XCJub25lXCI7dGhpcy5lbmRJbnZlbnRvcnlEaXNwbGF5PVwibm9uZVwiO3RoaXMubmV0aGVySW52ZW50b3J5TGFiZWw9XCLilrwgTkVUSEVSIEJMT0NLU1wiO3RoaXMuZW5kSW52ZW50b3J5TGFiZWw9XCLilrwgRU5EIEJMT0NLU1wifSxcbiAgc3dpdGNoVG9Ob3JtYWxXb3JsZCgpe1xuICAgIGlmKHRoaXMuY3VycmVudERpbWVuc2lvbiE9PVwiTk9STUFMXCIpdGhpcy5zYXZlQ3VycmVudERpbWVuc2lvblN0YXRlKClcbiAgICBpZih0aGlzLmN1cnJlbnREaW1lbnNpb24hPT1cIk5PUk1BTFwiKXtcbiAgICAgIGlmKHRoaXMubm9ybWFsRGltZW5zaW9uU3RhdGUpdGhpcy5yZXN0b3JlRGltZW5zaW9uU3RhdGUodGhpcy5ub3JtYWxEaW1lbnNpb25TdGF0ZSlcbiAgICAgIGVsc2V7dGhpcy53b3JsZD1jcmVhdGVXb3JsZCgpO3RoaXMucGxheWVyWD0yO3RoaXMucGxheWVyWT0xMjt0aGlzLnBsYXllclZ5PTA7dGhpcy5jdXJyZW50U2xvdD0xO3RoaXMuaW5pdENoZXN0U3RvcmFnZSgpO3RoaXMuZ2FtZURpc3BsYXk9XCJmbGV4XCI7dGhpcy5zbG90TWVudURpc3BsYXk9XCJub25lXCJ9XG4gICAgfVxuICAgIHRoaXMuY3VycmVudERpbWVuc2lvbj1cIk5PUk1BTFwiO3RoaXMuZGF5TmlnaHRMYWJlbD10aGlzLmRheU5pZ2h0RW5hYmxlZD9cIkRBWS9OSUdIVDogT05cIjpcIkRBWS9OSUdIVDogT0ZGXCI7dGhpcy53b3JsZHNEaXNwbGF5PVwibm9uZVwiO3RoaXMuZXh0cmFEaXNwbGF5PVwibm9uZVwiO3RoaXMuZ2FtZURpc3BsYXk9XCJmbGV4XCI7dGhpcy5zbG90TWVudURpc3BsYXk9XCJub25lXCI7dGhpcy51cGRhdGVJbnZlbnRvcnlTZWN0aW9ucygpO3RoaXMuc3RhdHVzPVwiVGVsZXBvcnRlZCB0byBOT1JNQUwgV09STERcIjtpZih0aGlzLnBhdXNlTWVudXMpdGhpcy5yZXN0YXJ0R2FtZVRpbWVyKCk7aWYodGhpcy5kYXlOaWdodEVuYWJsZWQmJiF0aGlzLmRheVRpbWVyKXRoaXMuZGF5VGltZXI9c2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLmFkdmFuY2VEYXlOaWdodCgpfSwxMjAwKTt0aGlzLnJlZnJlc2hWaWV3KClcbiAgfSxcbiAgc3dpdGNoVG9OZXRoZXJXb3JsZCgpe1xuICAgIGlmKHRoaXMubm9ybWFsTWluZWRUb3RhbDx0aGlzLm5ldGhlclVubG9ja1RhcmdldCl7dGhpcy5zdGF0dXM9XCJOZWVkIFwiKyh0aGlzLm5ldGhlclVubG9ja1RhcmdldC10aGlzLm5vcm1hbE1pbmVkVG90YWwpK1wiIG1vcmUgYmxvY2tzXCI7dGhpcy51cGRhdGVOZXRoZXJMb2NrTGFiZWwoKTtyZXR1cm59XG4gICAgaWYodGhpcy5jdXJyZW50RGltZW5zaW9uIT09XCJORVRIRVJcIil0aGlzLnNhdmVDdXJyZW50RGltZW5zaW9uU3RhdGUoKVxuICAgIGlmKHRoaXMuY3VycmVudERpbWVuc2lvbiE9PVwiTkVUSEVSXCIpe1xuICAgICAgaWYodGhpcy5uZXRoZXJEaW1lbnNpb25TdGF0ZSl0aGlzLnJlc3RvcmVEaW1lbnNpb25TdGF0ZSh0aGlzLm5ldGhlckRpbWVuc2lvblN0YXRlKVxuICAgICAgZWxzZXt0aGlzLndvcmxkPWNyZWF0ZU5ldGhlcldvcmxkKCk7dGhpcy5wbGF5ZXJYPTU7dGhpcy5wbGF5ZXJZPTExO3RoaXMucGxheWVyVnk9MDt0aGlzLnNlbGVjdGVkWD0tMTt0aGlzLnNlbGVjdGVkWT0tMTt0aGlzLnNlbGVjdGVkQmxvY2s9XCJuZXRoZXJyYWNrXCI7dGhpcy5tb2RlPVwiTUlORVwiO3RoaXMuaW5pdENoZXN0U3RvcmFnZSgpO3RoaXMuZ2FtZURpc3BsYXk9XCJmbGV4XCI7dGhpcy5zbG90TWVudURpc3BsYXk9XCJub25lXCJ9XG4gICAgfVxuICAgIHRoaXMuY3VycmVudERpbWVuc2lvbj1cIk5FVEhFUlwiO3RoaXMuZGF5TmlnaHRMYWJlbD1cIkRBWS9OSUdIVDogRklYRURcIjt0aGlzLndvcmxkc0Rpc3BsYXk9XCJub25lXCI7dGhpcy5leHRyYURpc3BsYXk9XCJub25lXCI7dGhpcy5nYW1lRGlzcGxheT1cImZsZXhcIjt0aGlzLnNsb3RNZW51RGlzcGxheT1cIm5vbmVcIjt0aGlzLnVwZGF0ZUludmVudG9yeVNlY3Rpb25zKCk7aWYodGhpcy5kYXlUaW1lcil7Y2xlYXJJbnRlcnZhbCh0aGlzLmRheVRpbWVyKTt0aGlzLmRheVRpbWVyPW51bGx9dGhpcy5kYXlTdGFnZT1cIk5FVEhFUlwiO3RoaXMuc3RhdHVzPVwiV2VsY29tZSB0byBORVRIRVJcIjtpZih0aGlzLnBhdXNlTWVudXMpdGhpcy5yZXN0YXJ0R2FtZVRpbWVyKCk7dGhpcy5yZWZyZXNoVmlldygpXG4gIH0sXG4gIHN3aXRjaFRvRW5kV29ybGQoKXtcbiAgICBpZih0aGlzLm5ldGhlck1pbmVkVG90YWw8dGhpcy5lbmRVbmxvY2tUYXJnZXQpe3RoaXMuc3RhdHVzPVwiTmVlZCBcIisodGhpcy5lbmRVbmxvY2tUYXJnZXQtdGhpcy5uZXRoZXJNaW5lZFRvdGFsKStcIiBtb3JlIE5FVEhFUiBibG9ja3NcIjt0aGlzLnVwZGF0ZUVuZExvY2tMYWJlbCgpO3JldHVybn1cbiAgICBpZih0aGlzLmN1cnJlbnREaW1lbnNpb24hPT1cIkVORFwiKXRoaXMuc2F2ZUN1cnJlbnREaW1lbnNpb25TdGF0ZSgpXG4gICAgaWYodGhpcy5jdXJyZW50RGltZW5zaW9uIT09XCJFTkRcIil7XG4gICAgICBpZih0aGlzLmVuZERpbWVuc2lvblN0YXRlKXRoaXMucmVzdG9yZURpbWVuc2lvblN0YXRlKHRoaXMuZW5kRGltZW5zaW9uU3RhdGUpXG4gICAgICBlbHNle3RoaXMud29ybGQ9Y3JlYXRlRW5kV29ybGQoKTt0aGlzLnBsYXllclg9Mzt0aGlzLnBsYXllclk9MTQ7dGhpcy5wbGF5ZXJWeT0wO3RoaXMuc2VsZWN0ZWRYPS0xO3RoaXMuc2VsZWN0ZWRZPS0xO3RoaXMuc2VsZWN0ZWRCbG9jaz1cImVuZFN0b25lXCI7dGhpcy5tb2RlPVwiTUlORVwiO3RoaXMuaW5pdENoZXN0U3RvcmFnZSgpO3RoaXMuZ2FtZURpc3BsYXk9XCJmbGV4XCI7dGhpcy5zbG90TWVudURpc3BsYXk9XCJub25lXCJ9XG4gICAgfVxuICAgIHRoaXMuY3VycmVudERpbWVuc2lvbj1cIkVORFwiO3RoaXMuZGF5TmlnaHRMYWJlbD1cIkRBWS9OSUdIVDogRklYRURcIjt0aGlzLndvcmxkc0Rpc3BsYXk9XCJub25lXCI7dGhpcy5leHRyYURpc3BsYXk9XCJub25lXCI7dGhpcy5nYW1lRGlzcGxheT1cImZsZXhcIjt0aGlzLnNsb3RNZW51RGlzcGxheT1cIm5vbmVcIjt0aGlzLnVwZGF0ZUludmVudG9yeVNlY3Rpb25zKCk7aWYodGhpcy5kYXlUaW1lcil7Y2xlYXJJbnRlcnZhbCh0aGlzLmRheVRpbWVyKTt0aGlzLmRheVRpbWVyPW51bGx9dGhpcy5kYXlTdGFnZT1cIkVORFwiO3RoaXMuc3RhdHVzPVwiV2VsY29tZSB0byBUSEUgRU5EXCI7aWYodGhpcy5wYXVzZU1lbnVzKXRoaXMucmVzdGFydEdhbWVUaW1lcigpO3RoaXMucmVmcmVzaFZpZXcoKTtpZih0aGlzLmVuZE1pbmVkVG90YWw+PXRoaXMuZW5kV2luVGFyZ2V0KXRoaXMuZmluaXNoR2FtZSgpXG4gIH0sXG4gIG9wZW5NYXAoKXsgdGhpcy51cGRhdGVNYXAoKTsgdGhpcy5leHRyYURpc3BsYXk9XCJub25lXCI7IHRoaXMubWFwRGlzcGxheT1cImZsZXhcIiB9LFxuICBjbG9zZU1hcCgpeyB0aGlzLm1hcERpc3BsYXk9XCJub25lXCI7IHRoaXMuZXh0cmFEaXNwbGF5PVwiZmxleFwiIH0sXG4gIG9wZW5Ub29scygpeyB0aGlzLmV4dHJhRGlzcGxheT1cIm5vbmVcIjsgdGhpcy50b29sc0Rpc3BsYXk9XCJmbGV4XCIgfSxcbiAgY2xvc2VUb29scygpeyB0aGlzLnRvb2xzRGlzcGxheT1cIm5vbmVcIjsgdGhpcy5leHRyYURpc3BsYXk9XCJmbGV4XCIgfSxcbiAgb3BlblF1ZXN0cygpeyB0aGlzLnVwZGF0ZUdvYWxzKCk7IHRoaXMuZXh0cmFEaXNwbGF5PVwibm9uZVwiOyB0aGlzLnF1ZXN0c0Rpc3BsYXk9XCJmbGV4XCIgfSxcbiAgY2xvc2VRdWVzdHMoKXsgdGhpcy5xdWVzdHNEaXNwbGF5PVwibm9uZVwiOyB0aGlzLmV4dHJhRGlzcGxheT1cImZsZXhcIiB9LFxuICBvcGVuQWNoaWV2ZW1lbnRzKCl7IHRoaXMudXBkYXRlR29hbHMoKTsgdGhpcy5leHRyYURpc3BsYXk9XCJub25lXCI7IHRoaXMuYWNoaWV2ZW1lbnRzRGlzcGxheT1cImZsZXhcIiB9LFxuICBjbG9zZUFjaGlldmVtZW50cygpeyB0aGlzLmFjaGlldmVtZW50c0Rpc3BsYXk9XCJub25lXCI7IHRoaXMuZXh0cmFEaXNwbGF5PVwiZmxleFwiIH0sXG4gIG9wZW5DcmFmdCgpeyBpZih0aGlzLmV4dHJhRGlzcGxheSE9PVwiZmxleFwiKXJldHVybjsgaWYodGhpcy5wYXVzZU1lbnVzJiZ0aGlzLmdhbWVUaW1lcil7Y2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaW1lcik7dGhpcy5nYW1lVGltZXI9bnVsbH0gaWYodGhpcy5wYXVzZU1lbnVzJiZ0aGlzLmRheVRpbWVyKXtjbGVhckludGVydmFsKHRoaXMuZGF5VGltZXIpO3RoaXMuZGF5VGltZXI9bnVsbH07IHRoaXMuZXh0cmFEaXNwbGF5PVwibm9uZVwiOyB0aGlzLmNyYWZ0RGlzcGxheT1cImZsZXhcIjsgdGhpcy5jcmFmdFN0YXR1cz1cIkNob29zZSBhIHJlY2lwZVwiIH0sXG4gIGNsb3NlQ3JhZnQoKXsgdGhpcy5jcmFmdERpc3BsYXk9XCJub25lXCI7IHRoaXMuZXh0cmFEaXNwbGF5PVwiZmxleFwiOyBpZih0aGlzLnBhdXNlTWVudXMpe3RoaXMucmVzdGFydEdhbWVUaW1lcigpOyBpZih0aGlzLmN1cnJlbnREaW1lbnNpb249PT1cIk5PUk1BTFwiJiZ0aGlzLmRheU5pZ2h0RW5hYmxlZCYmIXRoaXMuZGF5VGltZXIpdGhpcy5kYXlUaW1lcj1zZXRJbnRlcnZhbCgoKT0+eyB0aGlzLmFkdmFuY2VEYXlOaWdodCgpIH0sMTIwMCl9IH0sXG4gIGNyYWZ0Q3JhZnRpbmdUYWJsZSgpeyBpZigodGhpcy5pbnZlbnRvcnkud29vZHx8MCk8NCl7dGhpcy5jcmFmdFN0YXR1cz1cIk5lZWQgNCBXT09EXCI7cmV0dXJufSB2YXIgaW52PU9iamVjdC5hc3NpZ24oe30sdGhpcy5pbnZlbnRvcnkpO2ludi53b29kLT00O2ludi5jcmFmdGluZ1RhYmxlPShpbnYuY3JhZnRpbmdUYWJsZXx8MCkrMTt0aGlzLmludmVudG9yeT1pbnY7dGhpcy5jcmFmdGluZ1RhYmxlQnV0dG9uRGlzcGxheT1cImZsZXhcIjt0aGlzLmNyYWZ0U3RhdHVzPVwiQ3JhZnRlZCAxIENSQUZUSU5HIFRBQkxFXCI7dGhpcy5yZWZyZXNoVmlldygpIH0sXG4gIG9wZW5Xb3JrYmVuY2hBdCgpeyBpZih0aGlzLnBhdXNlTWVudXMmJnRoaXMuZ2FtZVRpbWVyKXtjbGVhckludGVydmFsKHRoaXMuZ2FtZVRpbWVyKTt0aGlzLmdhbWVUaW1lcj1udWxsfSBpZih0aGlzLnBhdXNlTWVudXMmJnRoaXMuZGF5VGltZXIpe2NsZWFySW50ZXJ2YWwodGhpcy5kYXlUaW1lcik7dGhpcy5kYXlUaW1lcj1udWxsfTsgdGhpcy53b3JrYmVuY2hEaXNwbGF5PVwiZmxleFwiOyB0aGlzLmdhbWVEaXNwbGF5PVwibm9uZVwiOyB0aGlzLmludmVudG9yeURpc3BsYXk9XCJub25lXCI7IHRoaXMuZXh0cmFEaXNwbGF5PVwibm9uZVwiOyB0aGlzLmNyYWZ0RGlzcGxheT1cIm5vbmVcIjsgdGhpcy53b3JrYmVuY2hTdGF0dXM9XCJDcmFmdGluZyB0YWJsZSByZWFkeVwiIH0sXG4gIGNsb3NlV29ya2JlbmNoKCl7IHRoaXMud29ya2JlbmNoRGlzcGxheT1cIm5vbmVcIjsgdGhpcy5nYW1lRGlzcGxheT1cImZsZXhcIjsgaWYodGhpcy5wYXVzZU1lbnVzKXt0aGlzLnJlc3RhcnRHYW1lVGltZXIoKTsgaWYodGhpcy5jdXJyZW50RGltZW5zaW9uPT09XCJOT1JNQUxcIiYmdGhpcy5kYXlOaWdodEVuYWJsZWQmJiF0aGlzLmRheVRpbWVyKXRoaXMuZGF5VGltZXI9c2V0SW50ZXJ2YWwoKCk9PnsgdGhpcy5hZHZhbmNlRGF5TmlnaHQoKSB9LDEyMDApfSB9LFxuICByZXBhaXJQaWNrYXhlV29vZCgpeyBpZih0aGlzLnBpY2theGVEdXJhYmlsaXR5Pj0xMDApe3RoaXMud29ya2JlbmNoU3RhdHVzPVwiUElDS0FYRSBBTFJFQURZIDEwMCVcIjtyZXR1cm59IGlmKCh0aGlzLmludmVudG9yeS53b29kfHwwKTwxKXt0aGlzLndvcmtiZW5jaFN0YXR1cz1cIk5lZWQgMSBXT09EXCI7cmV0dXJufSB2YXIgaW52PU9iamVjdC5hc3NpZ24oe30sdGhpcy5pbnZlbnRvcnkpO2ludi53b29kLT0xO3RoaXMuaW52ZW50b3J5PWludjt0aGlzLnBpY2theGVEdXJhYmlsaXR5PU1hdGgubWluKDEwMCx0aGlzLnBpY2theGVEdXJhYmlsaXR5KzEwKTt0aGlzLndvcmtiZW5jaFN0YXR1cz1cIlBJQ0tBWEUgKzEwIERVUkFCSUxJVFlcIjt0aGlzLnJlZnJlc2hWaWV3KCkgfSxcbiAgcmVwYWlyUGlja2F4ZVN0b25lKCl7IGlmKHRoaXMucGlja2F4ZUR1cmFiaWxpdHk+PTEwMCl7dGhpcy53b3JrYmVuY2hTdGF0dXM9XCJQSUNLQVhFIEFMUkVBRFkgMTAwJVwiO3JldHVybn0gaWYoKHRoaXMuaW52ZW50b3J5LnN0b25lfHwwKTwxKXt0aGlzLndvcmtiZW5jaFN0YXR1cz1cIk5lZWQgMSBTVE9ORVwiO3JldHVybn0gdmFyIGludj1PYmplY3QuYXNzaWduKHt9LHRoaXMuaW52ZW50b3J5KTtpbnYuc3RvbmUtPTE7dGhpcy5pbnZlbnRvcnk9aW52O3RoaXMucGlja2F4ZUR1cmFiaWxpdHk9TWF0aC5taW4oMTAwLHRoaXMucGlja2F4ZUR1cmFiaWxpdHkrNTApO3RoaXMud29ya2JlbmNoU3RhdHVzPVwiUElDS0FYRSArNTAgRFVSQUJJTElUWVwiO3RoaXMucmVmcmVzaFZpZXcoKSB9LFxuICByZXBhaXJQaWNrYXhlSXJvbigpeyBpZih0aGlzLnBpY2theGVEdXJhYmlsaXR5Pj0xMDApe3RoaXMud29ya2JlbmNoU3RhdHVzPVwiUElDS0FYRSBBTFJFQURZIDEwMCVcIjtyZXR1cm59IGlmKCh0aGlzLmludmVudG9yeS5pcm9ufHwwKTwxKXt0aGlzLndvcmtiZW5jaFN0YXR1cz1cIk5lZWQgMSBJUk9OXCI7cmV0dXJufSB2YXIgaW52PU9iamVjdC5hc3NpZ24oe30sdGhpcy5pbnZlbnRvcnkpO2ludi5pcm9uLT0xO3RoaXMuaW52ZW50b3J5PWludjt0aGlzLnBpY2theGVEdXJhYmlsaXR5PTEwMDt0aGlzLndvcmtiZW5jaFN0YXR1cz1cIlBJQ0tBWEUgKzEwMCBEVVJBQklMSVRZXCI7dGhpcy5yZWZyZXNoVmlldygpIH0sXG4gIHJlcGFpckF4ZVdvb2QoKXsgaWYodGhpcy5heGVEdXJhYmlsaXR5Pj0xMDApe3RoaXMud29ya2JlbmNoU3RhdHVzPVwiQVhFIEFMUkVBRFkgMTAwJVwiO3JldHVybn0gaWYoKHRoaXMuaW52ZW50b3J5Lndvb2R8fDApPDEpe3RoaXMud29ya2JlbmNoU3RhdHVzPVwiTmVlZCAxIFdPT0RcIjtyZXR1cm59IHZhciBpbnY9T2JqZWN0LmFzc2lnbih7fSx0aGlzLmludmVudG9yeSk7aW52Lndvb2QtPTE7dGhpcy5pbnZlbnRvcnk9aW52O3RoaXMuYXhlRHVyYWJpbGl0eT1NYXRoLm1pbigxMDAsdGhpcy5heGVEdXJhYmlsaXR5KzEwKTt0aGlzLndvcmtiZW5jaFN0YXR1cz1cIkFYRSArMTAgRFVSQUJJTElUWVwiO3RoaXMucmVmcmVzaFZpZXcoKSB9LFxuICByZXBhaXJBeGVTdG9uZSgpeyBpZih0aGlzLmF4ZUR1cmFiaWxpdHk+PTEwMCl7dGhpcy53b3JrYmVuY2hTdGF0dXM9XCJBWEUgQUxSRUFEWSAxMDAlXCI7cmV0dXJufSBpZigodGhpcy5pbnZlbnRvcnkuc3RvbmV8fDApPDEpe3RoaXMud29ya2JlbmNoU3RhdHVzPVwiTmVlZCAxIFNUT05FXCI7cmV0dXJufSB2YXIgaW52PU9iamVjdC5hc3NpZ24oe30sdGhpcy5pbnZlbnRvcnkpO2ludi5zdG9uZS09MTt0aGlzLmludmVudG9yeT1pbnY7dGhpcy5heGVEdXJhYmlsaXR5PU1hdGgubWluKDEwMCx0aGlzLmF4ZUR1cmFiaWxpdHkrNTApO3RoaXMud29ya2JlbmNoU3RhdHVzPVwiQVhFICs1MCBEVVJBQklMSVRZXCI7dGhpcy5yZWZyZXNoVmlldygpIH0sXG4gIHJlcGFpckF4ZUlyb24oKXsgaWYodGhpcy5heGVEdXJhYmlsaXR5Pj0xMDApe3RoaXMud29ya2JlbmNoU3RhdHVzPVwiQVhFIEFMUkVBRFkgMTAwJVwiO3JldHVybn0gaWYoKHRoaXMuaW52ZW50b3J5Lmlyb258fDApPDEpe3RoaXMud29ya2JlbmNoU3RhdHVzPVwiTmVlZCAxIElST05cIjtyZXR1cm59IHZhciBpbnY9T2JqZWN0LmFzc2lnbih7fSx0aGlzLmludmVudG9yeSk7aW52Lmlyb24tPTE7dGhpcy5pbnZlbnRvcnk9aW52O3RoaXMuYXhlRHVyYWJpbGl0eT0xMDA7dGhpcy53b3JrYmVuY2hTdGF0dXM9XCJBWEUgKzEwMCBEVVJBQklMSVRZXCI7dGhpcy5yZWZyZXNoVmlldygpIH0sXG4gIGNyYWZ0R2xhc3MoKXsgaWYoKHRoaXMuaW52ZW50b3J5LnNhbmR8fDApPDEpe3RoaXMuY3JhZnRTdGF0dXM9XCJOZWVkIDEgU0FORFwiO3JldHVybn0gdmFyIGludj1PYmplY3QuYXNzaWduKHt9LHRoaXMuaW52ZW50b3J5KTtpbnYuc2FuZC0tO2ludi5nbGFzcz0oaW52LmdsYXNzfHwwKSsxO3RoaXMuaW52ZW50b3J5PWludjt0aGlzLmNyYWZ0U3RhdHVzPVwiQ3JhZnRlZCAxIEdMQVNTXCI7dGhpcy5yZWZyZXNoVmlldygpIH0sXG4gIGNyYWZ0QnJpY2soKXsgaWYoKHRoaXMuaW52ZW50b3J5LnN0b25lfHwwKTwyKXt0aGlzLmNyYWZ0U3RhdHVzPVwiTmVlZCAyIFNUT05FXCI7cmV0dXJufSB2YXIgaW52PU9iamVjdC5hc3NpZ24oe30sdGhpcy5pbnZlbnRvcnkpO2ludi5zdG9uZS09MjtpbnYuYnJpY2s9KGludi5icmlja3x8MCkrMTt0aGlzLmludmVudG9yeT1pbnY7dGhpcy5jcmFmdFN0YXR1cz1cIkNyYWZ0ZWQgMSBCUklDS1wiO3RoaXMucmVmcmVzaFZpZXcoKSB9LFxuICBjcmFmdFRvcmNoKCl7IGlmKCh0aGlzLmludmVudG9yeS5jb2FsfHwwKTwxfHwodGhpcy5pbnZlbnRvcnkud29vZHx8MCk8MSl7dGhpcy5jcmFmdFN0YXR1cz1cIk5lZWQgMSBDT0FMICsgMSBXT09EXCI7cmV0dXJufSB2YXIgaW52PU9iamVjdC5hc3NpZ24oe30sdGhpcy5pbnZlbnRvcnkpO2ludi5jb2FsLS07aW52Lndvb2QtLTtpbnYudG9yY2g9KGludi50b3JjaHx8MCkrMjt0aGlzLmludmVudG9yeT1pbnY7dGhpcy5jcmFmdFN0YXR1cz1cIkNyYWZ0ZWQgMiBUT1JDSFwiO3RoaXMucmVmcmVzaFZpZXcoKSB9LFxuICBjcmFmdENoZXN0KCl7IGlmKCh0aGlzLmludmVudG9yeS53b29kfHwwKTw0KXt0aGlzLmNyYWZ0U3RhdHVzPVwiTmVlZCA0IFdPT0RcIjtyZXR1cm59IHZhciBpbnY9T2JqZWN0LmFzc2lnbih7fSx0aGlzLmludmVudG9yeSk7aW52Lndvb2QtPTQ7aW52LmNoZXN0PShpbnYuY2hlc3R8fDApKzE7dGhpcy5pbnZlbnRvcnk9aW52O3RoaXMuY3JhZnRTdGF0dXM9XCJDcmFmdGVkIDEgQ0hFU1RcIjt0aGlzLnJlZnJlc2hWaWV3KCkgfSxcbiAgc2VsZWN0UGlja2F4ZSgpeyB0aGlzLnRvb2xUeXBlPVwicGlja2F4ZVwiOyB0aGlzLnRvb2xMYWJlbD1cIlBJQ0tBWEVcIjsgdGhpcy5zdGF0dXM9XCJQaWNrYXhlIHNlbGVjdGVkXCIgfSxcbiAgc2VsZWN0QXhlKCl7IHRoaXMudG9vbFR5cGU9XCJheGVcIjsgdGhpcy50b29sTGFiZWw9XCJBWEVcIjsgdGhpcy5zdGF0dXM9XCJBeGUgc2VsZWN0ZWRcIiB9LFxuICBzZWxlY3RIYW5kKCl7IHRoaXMudG9vbFR5cGU9XCJoYW5kXCI7IHRoaXMudG9vbExhYmVsPVwiSEFORFwiOyB0aGlzLnN0YXR1cz1cIkhhbmQgc2VsZWN0ZWRcIiB9LFxuICByZXF1aXJlZFRvb2wodHlwZSl7XG4gICAgaWYodHlwZT09PVwic3RvbmVcInx8dHlwZT09PVwiY29hbFwifHx0eXBlPT09XCJpcm9uXCJ8fHR5cGU9PT1cImdvbGRcInx8dHlwZT09PVwiZGlhbW9uZFwifHx0eXBlPT09XCJiZWRyb2NrXCJ8fHR5cGU9PT1cIm5ldGhlcnJhY2tcInx8dHlwZT09PVwiZ2xvd3N0b25lXCJ8fHR5cGU9PT1cIm5ldGhlckJyaWNrXCJ8fHR5cGU9PT1cInF1YXJ0ek9yZVwifHx0eXBlPT09XCJibGFja3N0b25lXCJ8fHR5cGU9PT1cIm9ic2lkaWFuXCJ8fHR5cGU9PT1cImVuZE9yZVwiKXJldHVyblwicGlja2F4ZVwiXG4gICAgaWYodHlwZT09PVwid29vZFwifHx0eXBlPT09XCJsZWFmXCJ8fHR5cGU9PT1cImNoZXN0XCJ8fHR5cGU9PT1cImNyYWZ0aW5nVGFibGVcIilyZXR1cm5cImF4ZVwiXG4gICAgcmV0dXJuXCJoYW5kXCJcbiAgfSxcbiAgdXNlVG9vbCh0b29sKXtcbiAgICBpZih0b29sPT09XCJwaWNrYXhlXCIpe1xuICAgICAgdGhpcy5waWNrYXhlRHVyYWJpbGl0eT1NYXRoLm1heCgwLHRoaXMucGlja2F4ZUR1cmFiaWxpdHktMilcbiAgICAgIGlmKHRoaXMucGlja2F4ZUR1cmFiaWxpdHk9PT0wKXt0aGlzLnRvb2xUeXBlPVwiaGFuZFwiO3RoaXMudG9vbExhYmVsPVwiSEFORFwiO3RoaXMuc3RhdHVzPVwiUGlja2F4ZSBicm9rZVwifVxuICAgIH1cbiAgICBpZih0b29sPT09XCJheGVcIil7XG4gICAgICB0aGlzLmF4ZUR1cmFiaWxpdHk9TWF0aC5tYXgoMCx0aGlzLmF4ZUR1cmFiaWxpdHktMilcbiAgICAgIGlmKHRoaXMuYXhlRHVyYWJpbGl0eT09PTApe3RoaXMudG9vbFR5cGU9XCJoYW5kXCI7dGhpcy50b29sTGFiZWw9XCJIQU5EXCI7dGhpcy5zdGF0dXM9XCJBeGUgYnJva2VcIn1cbiAgICB9XG4gIH0sXG4gIGdhaW5YcChhbW91bnQpe1xuICAgIHRoaXMueHArPWFtb3VudFxuICAgIHdoaWxlKHRoaXMueHA+PTEwKXt0aGlzLnhwLT0xMDt0aGlzLmxldmVsKyt9XG4gIH0sXG4gIHVwZGF0ZUdvYWxzKCl7XG4gICAgdGhpcy5xdWVzdFRleHQ9XCJNSU5FIDUgQkxPQ0tTOiBcIitNYXRoLm1pbih0aGlzLnRvdGFsTWluZWQsNSkrXCIvNVxcblBMQUNFIDUgQkxPQ0tTOiBcIitNYXRoLm1pbih0aGlzLnRvdGFsUGxhY2VkLDUpK1wiLzVcXG5NSU5FIElST046IFwiKyh0aGlzLmZvdW5kSXJvbj9cIjFcIjpcIjBcIikrXCIvMVxcbkZJTkQgRElBTU9ORDogXCIrKHRoaXMuZm91bmREaWFtb25kP1wiMVwiOlwiMFwiKStcIi8xXCJcbiAgICB0aGlzLmFjaGlldmVtZW50VGV4dD1cIkZJUlNUIEJMT0NLOiBcIisodGhpcy50b3RhbE1pbmVkPjA/XCJET05FXCI6XCJMT0NLRURcIikrXCJcXG4xMCBCTE9DS1M6IFwiK01hdGgubWluKHRoaXMudG90YWxNaW5lZCwxMCkrXCIvMTBcXG5CVUlMREVSOiBcIitNYXRoLm1pbih0aGlzLnRvdGFsUGxhY2VkLDEwKStcIi8xMFxcbklST04gRklOREVSOiBcIisodGhpcy5mb3VuZElyb24/XCJET05FXCI6XCJMT0NLRURcIikrXCJcXG5ESUFNT05EIEZJTkRFUjogXCIrKHRoaXMuZm91bmREaWFtb25kP1wiRE9ORVwiOlwiTE9DS0VEXCIpXG4gIH0sXG4gIHVwZGF0ZU1hcCgpe1xuICAgIHZhciBvdXQ9XCJcIiwgcmFkaXVzWD01LCByYWRpdXNZPTNcbiAgICBmb3IodmFyIHl5PS1yYWRpdXNZO3l5PD1yYWRpdXNZO3l5Kyspe1xuICAgICAgZm9yKHZhciB4eD0tcmFkaXVzWDt4eDw9cmFkaXVzWDt4eCsrKXtcbiAgICAgICAgdmFyIHR4PXRoaXMucGxheWVyWCt4eCwgdHk9dGhpcy5wbGF5ZXJZK3l5LCBjaD1cIi5cIlxuICAgICAgICBpZih0eD09PXRoaXMucGxheWVyWCYmdHk9PT10aGlzLnBsYXllclkpe2NoPVwiQFwifVxuICAgICAgICBlbHNlIHt2YXIgdD10aGlzLnRpbGVBdCh0eCx0eSk7IGlmKCF0KWNoPVwiIFwiOyBlbHNlIGlmKHQudHlwZT09PVwid2F0ZXJcIiljaD1cIn5cIjsgZWxzZSBpZih0LnR5cGU9PT1cImFpclwiKWNoPVwiLlwiOyBlbHNlIGlmKHQudHlwZT09PVwid29vZFwifHx0LnR5cGU9PT1cImxlYWZcIiljaD1cIlRcIjsgZWxzZSBpZih0LnR5cGU9PT1cImNoZXN0XCIpY2g9XCJDXCI7IGVsc2UgaWYodC50eXBlPT09XCJjcmFmdGluZ1RhYmxlXCIpY2g9XCJXXCI7IGVsc2UgY2g9XCIjXCJ9XG4gICAgICAgIG91dCs9Y2hcbiAgICAgIH1cbiAgICAgIGlmKHl5PHJhZGl1c1kpb3V0Kz1cIlxcblwiXG4gICAgfVxuICAgIHRoaXMubWFwVGV4dD1vdXRcbiAgfSxcbiAgYmFja1RvU2xvdHMoKXtpZih0aGlzLmdhbWVEaXNwbGF5IT09XCJmbGV4XCIpcmV0dXJuO2lmKHRoaXMucGF1c2VNZW51cyl7aWYodGhpcy5nYW1lVGltZXIpe2NsZWFySW50ZXJ2YWwodGhpcy5nYW1lVGltZXIpO3RoaXMuZ2FtZVRpbWVyPW51bGx9aWYodGhpcy5kYXlUaW1lcil7Y2xlYXJJbnRlcnZhbCh0aGlzLmRheVRpbWVyKTt0aGlzLmRheVRpbWVyPW51bGx9fXRoaXMuZ2FtZURpc3BsYXk9XCJub25lXCI7dGhpcy5zbG90c0NvbmZpcm1EaXNwbGF5PVwiZmxleFwiO3RoaXMuc3RhdHVzPVwiQ29uZmlybSByZXR1cm4gdG8gc2xvdHNcIn0sXG4gIGNvbmZpcm1CYWNrVG9TbG90cygpe3RoaXMuc2F2ZUN1cnJlbnREaW1lbnNpb25TdGF0ZSgpO2lmKHRoaXMuZ2FtZVRpbWVyKXtjbGVhckludGVydmFsKHRoaXMuZ2FtZVRpbWVyKTt0aGlzLmdhbWVUaW1lcj1udWxsfWlmKHRoaXMuZGF5VGltZXIpe2NsZWFySW50ZXJ2YWwodGhpcy5kYXlUaW1lcik7dGhpcy5kYXlUaW1lcj1udWxsfXRoaXMuc2xvdHNDb25maXJtRGlzcGxheT1cIm5vbmVcIjt0aGlzLnZpY3RvcnlEaXNwbGF5PVwibm9uZVwiO3RoaXMuZ2FtZURpc3BsYXk9XCJub25lXCI7dGhpcy5pbnZlbnRvcnlEaXNwbGF5PVwibm9uZVwiO3RoaXMuY2hlc3REaXNwbGF5PVwibm9uZVwiO3RoaXMuZXh0cmFEaXNwbGF5PVwibm9uZVwiO3RoaXMud29ybGRzRGlzcGxheT1cIm5vbmVcIjt0aGlzLmNyYWZ0RGlzcGxheT1cIm5vbmVcIjt0aGlzLndvcmtiZW5jaERpc3BsYXk9XCJub25lXCI7dGhpcy5tYXBEaXNwbGF5PVwibm9uZVwiO3RoaXMudG9vbHNEaXNwbGF5PVwibm9uZVwiO3RoaXMucXVlc3RzRGlzcGxheT1cIm5vbmVcIjt0aGlzLmFjaGlldmVtZW50c0Rpc3BsYXk9XCJub25lXCI7dGhpcy5jdXJyZW50Q2hlc3RLZXk9XCJcIjt0aGlzLnNsb3RNZW51RGlzcGxheT1cImZsZXhcIjt0aGlzLnN0YXR1cz1cIldPUkxEIFNFTEVDVFwifSxcbiAgY2FuY2VsQmFja1RvU2xvdHMoKXt0aGlzLnNsb3RzQ29uZmlybURpc3BsYXk9XCJub25lXCI7dGhpcy5nYW1lRGlzcGxheT1cImZsZXhcIjt0aGlzLnN0YXR1cz1cIkJhY2sgdG8gZ2FtZVwiO2lmKHRoaXMucGF1c2VNZW51cyl0aGlzLnJlc3RhcnRHYW1lVGltZXIoKTtpZih0aGlzLmN1cnJlbnREaW1lbnNpb249PT1cIk5PUk1BTFwiJiZ0aGlzLmRheU5pZ2h0RW5hYmxlZCYmIXRoaXMuZGF5VGltZXIpdGhpcy5kYXlUaW1lcj1zZXRJbnRlcnZhbCgoKT0+e3RoaXMuYWR2YW5jZURheU5pZ2h0KCl9LDEyMDApO3RoaXMucmVmcmVzaFZpZXcoKX0sXG4gIG9wZW5JbnZlbnRvcnkoKXsgaWYodGhpcy5nYW1lRGlzcGxheSE9PVwiZmxleFwiKXJldHVybjsgaWYodGhpcy5wYXVzZU1lbnVzJiZ0aGlzLmdhbWVUaW1lcil7Y2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaW1lcik7dGhpcy5nYW1lVGltZXI9bnVsbH0gaWYodGhpcy5wYXVzZU1lbnVzJiZ0aGlzLmRheVRpbWVyKXtjbGVhckludGVydmFsKHRoaXMuZGF5VGltZXIpO3RoaXMuZGF5VGltZXI9bnVsbH07IHRoaXMuZXh0cmFEaXNwbGF5PVwibm9uZVwiOyB0aGlzLmludmVudG9yeURpc3BsYXk9XCJmbGV4XCI7IHRoaXMuY2hlc3REaXNwbGF5PVwibm9uZVwiOyB0aGlzLmdhbWVEaXNwbGF5PVwibm9uZVwiIH0sXG4gIGNsb3NlSW52ZW50b3J5KCl7dGhpcy5pbnZlbnRvcnlEaXNwbGF5PVwibm9uZVwiO3RoaXMudXBkYXRlSW52ZW50b3J5U2VjdGlvbnMoKTt0aGlzLmdhbWVEaXNwbGF5PVwiZmxleFwiO2lmKHRoaXMucGF1c2VNZW51cyl7dGhpcy5yZXN0YXJ0R2FtZVRpbWVyKCk7aWYodGhpcy5jdXJyZW50RGltZW5zaW9uPT09XCJOT1JNQUxcIiYmdGhpcy5kYXlOaWdodEVuYWJsZWQmJiF0aGlzLmRheVRpbWVyKXRoaXMuZGF5VGltZXI9c2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLmFkdmFuY2VEYXlOaWdodCgpfSwxMjAwKX19LFxuICB0b2dnbGVOZXRoZXJJbnZlbnRvcnkoKXt2YXIgb3BlbmluZz10aGlzLm5ldGhlckludmVudG9yeURpc3BsYXkhPT1cImZsZXhcIjt0aGlzLm5ldGhlckludmVudG9yeURpc3BsYXk9b3BlbmluZz9cImZsZXhcIjpcIm5vbmVcIjt0aGlzLmVuZEludmVudG9yeURpc3BsYXk9XCJub25lXCI7dGhpcy5uZXRoZXJJbnZlbnRvcnlMYWJlbD1vcGVuaW5nP1wi4payIE5FVEhFUiBCTE9DS1NcIjpcIuKWvCBORVRIRVIgQkxPQ0tTXCI7dGhpcy5lbmRJbnZlbnRvcnlMYWJlbD1cIuKWvCBFTkQgQkxPQ0tTXCJ9LFxuICB0b2dnbGVFbmRJbnZlbnRvcnkoKXt2YXIgb3BlbmluZz10aGlzLmVuZEludmVudG9yeURpc3BsYXkhPT1cImZsZXhcIjt0aGlzLmVuZEludmVudG9yeURpc3BsYXk9b3BlbmluZz9cImZsZXhcIjpcIm5vbmVcIjt0aGlzLm5ldGhlckludmVudG9yeURpc3BsYXk9XCJub25lXCI7dGhpcy5lbmRJbnZlbnRvcnlMYWJlbD1vcGVuaW5nP1wi4payIEVORCBCTE9DS1NcIjpcIuKWvCBFTkQgQkxPQ0tTXCI7dGhpcy5uZXRoZXJJbnZlbnRvcnlMYWJlbD1cIuKWvCBORVRIRVIgQkxPQ0tTXCJ9LFxuXG4gIG9wZW5DaGVzdEF0KHgseSl7XG4gICAgdmFyIGtleT14K1wiLFwiK3lcbiAgICBpZighdGhpcy5jaGVzdFN0b3JhZ2Vba2V5XSkgdGhpcy5jaGVzdFN0b3JhZ2Vba2V5XT17ZGlydDowLHN0b25lOjAsd29vZDowLGxlYWY6MCxzYW5kOjAsZ2xhc3M6MCxicmljazowLHRvcmNoOjAsd2F0ZXI6MCxjaGVzdDowLGNvYWw6MCxpcm9uOjAsZ29sZDowLGRpYW1vbmQ6MH1cbiAgICB0aGlzLmN1cnJlbnRDaGVzdEtleT1rZXlcbiAgICBpZih0aGlzLnBhdXNlTWVudXMmJnRoaXMuZ2FtZVRpbWVyKXsgY2xlYXJJbnRlcnZhbCh0aGlzLmdhbWVUaW1lcik7IHRoaXMuZ2FtZVRpbWVyPW51bGwgfVxuICAgIGlmKHRoaXMucGF1c2VNZW51cyYmdGhpcy5kYXlUaW1lcil7IGNsZWFySW50ZXJ2YWwodGhpcy5kYXlUaW1lcik7IHRoaXMuZGF5VGltZXI9bnVsbCB9XG4gICAgdGhpcy5pbnZlbnRvcnlEaXNwbGF5PVwibm9uZVwiXG4gICAgdGhpcy5nYW1lRGlzcGxheT1cIm5vbmVcIlxuICAgIHRoaXMuY2hlc3REaXNwbGF5PVwiZmxleFwiXG4gICAgdGhpcy5zdGF0dXM9XCJDaGVzdCBvcGVuZWRcIlxuICB9LFxuXG4gIGNsb3NlQ2hlc3QoKXtcbiAgICB0aGlzLmNoZXN0RGlzcGxheT1cIm5vbmVcIlxuICAgIHRoaXMuZ2FtZURpc3BsYXk9XCJmbGV4XCJcbiAgICB0aGlzLmN1cnJlbnRDaGVzdEtleT1cIlwiXG4gICAgaWYodGhpcy5wYXVzZU1lbnVzKXt0aGlzLnJlc3RhcnRHYW1lVGltZXIoKTsgaWYodGhpcy5jdXJyZW50RGltZW5zaW9uPT09XCJOT1JNQUxcIiYmdGhpcy5kYXlOaWdodEVuYWJsZWQmJiF0aGlzLmRheVRpbWVyKXRoaXMuZGF5VGltZXI9c2V0SW50ZXJ2YWwoKCk9PnsgdGhpcy5hZHZhbmNlRGF5TmlnaHQoKSB9LDEyMDApfVxuICAgIHRoaXMuc3RhdHVzPVwiQ2hlc3QgY2xvc2VkXCJcbiAgfSxcblxuICBjaGVzdENvdW50KCl7XG4gICAgaWYoIXRoaXMuY3VycmVudENoZXN0S2V5fHwhdGhpcy5jaGVzdFN0b3JhZ2VbdGhpcy5jdXJyZW50Q2hlc3RLZXldKXJldHVybiAwXG4gICAgcmV0dXJuIHRoaXMuY2hlc3RTdG9yYWdlW3RoaXMuY3VycmVudENoZXN0S2V5XVt0aGlzLnNlbGVjdGVkQmxvY2tdfHwwXG4gIH0sXG5cbiAgc2VsZWN0ZWRDb3VudFRleHQoKXsgcmV0dXJuIHRoaXMuaW52ZW50b3J5W3RoaXMuc2VsZWN0ZWRCbG9ja118fDAgfSxcblxuICBzdG9yZUluQ2hlc3QoKXtcbiAgICBpZighdGhpcy5jdXJyZW50Q2hlc3RLZXkpcmV0dXJuXG4gICAgdmFyIGFtb3VudD10aGlzLmludmVudG9yeVt0aGlzLnNlbGVjdGVkQmxvY2tdfHwwXG4gICAgaWYoYW1vdW50PD0wKXt0aGlzLnN0YXR1cz1cIk5vIFwiICsgdGhpcy5zZWxlY3RlZEJsb2NrLnRvVXBwZXJDYXNlKCk7cmV0dXJufVxuICAgIHZhciBjaGVzdD10aGlzLmNoZXN0U3RvcmFnZVt0aGlzLmN1cnJlbnRDaGVzdEtleV1cbiAgICBjaGVzdFt0aGlzLnNlbGVjdGVkQmxvY2tdPShjaGVzdFt0aGlzLnNlbGVjdGVkQmxvY2tdfHwwKSsxXG4gICAgdGhpcy5jaGVzdFN0b3JhZ2U9T2JqZWN0LmFzc2lnbih7fSx0aGlzLmNoZXN0U3RvcmFnZSlcbiAgICB2YXIgaW52PU9iamVjdC5hc3NpZ24oe30sdGhpcy5pbnZlbnRvcnkpOyBpbnZbdGhpcy5zZWxlY3RlZEJsb2NrXS09MTsgdGhpcy5pbnZlbnRvcnk9aW52XG4gICAgdGhpcy5zdGF0dXM9XCJTdG9yZWQgXCIgKyB0aGlzLnNlbGVjdGVkQmxvY2sudG9VcHBlckNhc2UoKVxuICB9LFxuXG4gIHRha2VGcm9tQ2hlc3QoKXtcbiAgICBpZighdGhpcy5jdXJyZW50Q2hlc3RLZXkpcmV0dXJuXG4gICAgdmFyIGNoZXN0PXRoaXMuY2hlc3RTdG9yYWdlW3RoaXMuY3VycmVudENoZXN0S2V5XVxuICAgIHZhciBhbW91bnQ9Y2hlc3RbdGhpcy5zZWxlY3RlZEJsb2NrXXx8MFxuICAgIGlmKGFtb3VudDw9MCl7dGhpcy5zdGF0dXM9XCJDaGVzdCBpcyBlbXB0eVwiO3JldHVybn1cbiAgICBjaGVzdFt0aGlzLnNlbGVjdGVkQmxvY2tdLT0xXG4gICAgdGhpcy5jaGVzdFN0b3JhZ2U9T2JqZWN0LmFzc2lnbih7fSx0aGlzLmNoZXN0U3RvcmFnZSlcbiAgICB2YXIgaW52PU9iamVjdC5hc3NpZ24oe30sdGhpcy5pbnZlbnRvcnkpOyBpbnZbdGhpcy5zZWxlY3RlZEJsb2NrXT0oaW52W3RoaXMuc2VsZWN0ZWRCbG9ja118fDApKzE7IHRoaXMuaW52ZW50b3J5PWludlxuICAgIHRoaXMuc3RhdHVzPVwiVGFrZW4gXCIgKyB0aGlzLnNlbGVjdGVkQmxvY2sudG9VcHBlckNhc2UoKVxuICB9LFxuXG4gIHNlbGVjdERpcnRGcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3REaXJ0KCk7dGhpcy5jbG9zZUludmVudG9yeSgpfSxcbiAgc2VsZWN0U3RvbmVGcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3RTdG9uZSgpO3RoaXMuY2xvc2VJbnZlbnRvcnkoKX0sXG4gIHNlbGVjdFdvb2RGcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3RXb29kKCk7dGhpcy5jbG9zZUludmVudG9yeSgpfSxcbiAgc2VsZWN0TGVhZkZyb21JbnZlbnRvcnkoKXt0aGlzLnNlbGVjdExlYWYoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3RTYW5kRnJvbUludmVudG9yeSgpe3RoaXMuc2VsZWN0U2FuZCgpO3RoaXMuY2xvc2VJbnZlbnRvcnkoKX0sXG4gIHNlbGVjdEdsYXNzRnJvbUludmVudG9yeSgpe3RoaXMuc2VsZWN0R2xhc3MoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3RCcmlja0Zyb21JbnZlbnRvcnkoKXt0aGlzLnNlbGVjdEJyaWNrKCk7dGhpcy5jbG9zZUludmVudG9yeSgpfSxcbiAgc2VsZWN0VG9yY2hGcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3RUb3JjaCgpO3RoaXMuY2xvc2VJbnZlbnRvcnkoKX0sXG4gIHNlbGVjdFdhdGVyRnJvbUludmVudG9yeSgpe3RoaXMuc2VsZWN0V2F0ZXIoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3RDaGVzdEZyb21JbnZlbnRvcnkoKXt0aGlzLnNlbGVjdENoZXN0KCk7dGhpcy5jbG9zZUludmVudG9yeSgpfSxcbiAgc2VsZWN0Q3JhZnRpbmdUYWJsZUZyb21JbnZlbnRvcnkoKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJjcmFmdGluZ1RhYmxlXCI7dGhpcy5zdGF0dXM9XCJDcmFmdGluZyB0YWJsZSBzZWxlY3RlZFwiO3RoaXMucmVmcmVzaFZpZXcoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3RDb2FsRnJvbUludmVudG9yeSgpe3RoaXMuc2VsZWN0Q29hbCgpO3RoaXMuY2xvc2VJbnZlbnRvcnkoKX0sXG4gIHNlbGVjdElyb25Gcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3RJcm9uKCk7dGhpcy5jbG9zZUludmVudG9yeSgpfSxcbiAgc2VsZWN0R29sZEZyb21JbnZlbnRvcnkoKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJnb2xkXCI7dGhpcy5yZWZyZXNoVmlldygpO3RoaXMuY2xvc2VJbnZlbnRvcnkoKX0sXG4gIHNlbGVjdERpYW1vbmRGcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3RlZEJsb2NrPVwiZGlhbW9uZFwiO3RoaXMucmVmcmVzaFZpZXcoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3ROZXRoZXJyYWNrRnJvbUludmVudG9yeSgpe3RoaXMuc2VsZWN0ZWRCbG9jaz1cIm5ldGhlcnJhY2tcIjt0aGlzLnJlZnJlc2hWaWV3KCk7dGhpcy5jbG9zZUludmVudG9yeSgpfSxcbiAgc2VsZWN0U291bFNhbmRGcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3RlZEJsb2NrPVwic291bFNhbmRcIjt0aGlzLnJlZnJlc2hWaWV3KCk7dGhpcy5jbG9zZUludmVudG9yeSgpfSxcbiAgc2VsZWN0R2xvd3N0b25lRnJvbUludmVudG9yeSgpe3RoaXMuc2VsZWN0ZWRCbG9jaz1cImdsb3dzdG9uZVwiO3RoaXMucmVmcmVzaFZpZXcoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3ROZXRoZXJCcmlja0Zyb21JbnZlbnRvcnkoKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJuZXRoZXJCcmlja1wiO3RoaXMucmVmcmVzaFZpZXcoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3RRdWFydHpPcmVGcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3RlZEJsb2NrPVwicXVhcnR6T3JlXCI7dGhpcy5yZWZyZXNoVmlldygpO3RoaXMuY2xvc2VJbnZlbnRvcnkoKX0sXG4gIHNlbGVjdEJsYWNrc3RvbmVGcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3RlZEJsb2NrPVwiYmxhY2tzdG9uZVwiO3RoaXMucmVmcmVzaFZpZXcoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3RFbmRTdG9uZUZyb21JbnZlbnRvcnkoKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJlbmRTdG9uZVwiO3RoaXMucmVmcmVzaFZpZXcoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3RPYnNpZGlhbkZyb21JbnZlbnRvcnkoKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJvYnNpZGlhblwiO3RoaXMucmVmcmVzaFZpZXcoKTt0aGlzLmNsb3NlSW52ZW50b3J5KCl9LFxuICBzZWxlY3RQdXJwdXJGcm9tSW52ZW50b3J5KCl7dGhpcy5zZWxlY3RlZEJsb2NrPVwicHVycHVyXCI7dGhpcy5yZWZyZXNoVmlldygpO3RoaXMuY2xvc2VJbnZlbnRvcnkoKX0sXG4gIHNlbGVjdENob3J1c1BsYW50RnJvbUludmVudG9yeSgpe3RoaXMuc2VsZWN0ZWRCbG9jaz1cImNob3J1c1BsYW50XCI7dGhpcy5yZWZyZXNoVmlldygpO3RoaXMuY2xvc2VJbnZlbnRvcnkoKX0sXG4gIHNlbGVjdEVuZEJyaWNrRnJvbUludmVudG9yeSgpe3RoaXMuc2VsZWN0ZWRCbG9jaz1cImVuZEJyaWNrXCI7dGhpcy5yZWZyZXNoVmlldygpO3RoaXMuY2xvc2VJbnZlbnRvcnkoKX0sXG4gIHNlbGVjdEVuZE9yZUZyb21JbnZlbnRvcnkoKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJlbmRPcmVcIjt0aGlzLnJlZnJlc2hWaWV3KCk7dGhpcy5jbG9zZUludmVudG9yeSgpfSxcblxuICBnZXREYXlTdGFnZShwaGFzZSl7IGlmKHBoYXNlPDE1KXJldHVyblwiREFZXCI7IGlmKHBoYXNlPDI1KXJldHVyblwiU1VOU0VUXCI7IGlmKHBoYXNlPDQ1KXJldHVyblwiTklHSFRcIjsgaWYocGhhc2U8NTUpcmV0dXJuXCJTVU5SSVNFXCI7IHJldHVyblwiREFZXCIgfSxcbiAgYWR2YW5jZURheU5pZ2h0KCl7XG4gICAgaWYodGhpcy5jdXJyZW50RGltZW5zaW9uIT09XCJOT1JNQUxcIilyZXR1cm5cbiAgICBpZighdGhpcy5kYXlOaWdodEVuYWJsZWQpcmV0dXJuXG4gICAgdGhpcy5kYXlQaGFzZT0odGhpcy5kYXlQaGFzZSsxKSU2MFxuICAgIHZhciBuZXh0PXRoaXMuZ2V0RGF5U3RhZ2UodGhpcy5kYXlQaGFzZSlcbiAgICBpZihuZXh0IT09dGhpcy5kYXlTdGFnZSl7dGhpcy5kYXlTdGFnZT1uZXh0O3RoaXMucmVmcmVzaFZpZXcoKX1cbiAgfSxcbiAgZ2V0Vmlld0NvbHMoKXtyZXR1cm4gTWF0aC5tYXgoMSxNYXRoLmZsb29yKFdPUkxEX1cvWk9PTV9MRVZFTFNbdGhpcy56b29tSW5kZXhdKSl9LFxuICBnZXRWaWV3Um93cygpe3JldHVybiBNYXRoLm1heCgxLE1hdGguZmxvb3IoV09STERfSC9aT09NX0xFVkVMU1t0aGlzLnpvb21JbmRleF0pKX0sXG4gIGdldFRpbGVQeCgpe3JldHVybiBaT09NX0xFVkVMU1t0aGlzLnpvb21JbmRleF19LFxuICBjbGFtcCh2LG1pbixtYXgpe3JldHVybiBNYXRoLm1heChtaW4sTWF0aC5taW4obWF4LHYpKX0sXG4gIGluZGV4T2YoeCx5KXtyZXR1cm4geSpDT0xTK3h9LFxuICB0aWxlQXQoeCx5KXtpZih4PDB8fHg+PUNPTFN8fHk8MHx8eT49Uk9XUylyZXR1cm4gbnVsbDtyZXR1cm4gdGhpcy53b3JsZFt0aGlzLmluZGV4T2YoeCx5KV19LFxuICBzb2xpZEF0KHgseSl7dmFyIHQ9dGhpcy50aWxlQXQoeCx5KTtyZXR1cm4gdD9pc1NvbGlkKHQudHlwZSk6dHJ1ZX0sXG4gIGdldENhbWVyYVgoKXt2YXIgY29scz10aGlzLmdldFZpZXdDb2xzKCk7cmV0dXJuIHRoaXMuY2xhbXAodGhpcy5wbGF5ZXJYLU1hdGguZmxvb3IoY29scy8yKSwwLE1hdGgubWF4KDAsQ09MUy1jb2xzKSl9LFxuICBnZXRDYW1lcmFZKCl7dmFyIHJvd3M9dGhpcy5nZXRWaWV3Um93cygpO3JldHVybiB0aGlzLmNsYW1wKHRoaXMucGxheWVyWS1NYXRoLmZsb29yKHJvd3MvMiksMCxNYXRoLm1heCgwLFJPV1Mtcm93cykpfSxcblxuICBjb2xvcih0eXBlKXtcbiAgICBpZih0aGlzLmhpZ2hDb250cmFzdCl7XG4gICAgICBpZih0eXBlPT09XCJhaXJcIilyZXR1cm4gdGhpcy5jdXJyZW50RGltZW5zaW9uPT09XCJORVRIRVJcIj9cIiM4YjJmMjBcIjoodGhpcy5jdXJyZW50RGltZW5zaW9uPT09XCJFTkRcIj9cIiMyNTE3MzNcIjoodGhpcy5kYXlTdGFnZT09PVwiTklHSFRcIj9cIiMwMDAwMDBcIjpcIiM3MGU2ZmZcIikpXG4gICAgICBpZihISUdIX0NPTlRSQVNUX0NPTE9SU1t0eXBlXSlyZXR1cm4gSElHSF9DT05UUkFTVF9DT0xPUlNbdHlwZV1cbiAgICB9XG4gICAgdmFyIG5pZ2h0PXRoaXMuZGF5U3RhZ2U9PT1cIk5JR0hUXCJcbiAgICBpZih0aGlzLmN1cnJlbnREaW1lbnNpb24hPT1cIk5PUk1BTFwiKSBuaWdodD1mYWxzZVxuICAgIHZhciBkYXJrPXRoaXMubmlnaHREYXJrbmVzcz09PTIsIGJyaWdodE5pZ2h0PXRoaXMubmlnaHREYXJrbmVzcz09PTBcbiAgICBpZih0eXBlPT09XCJhaXJcIil7XG4gICAgICBpZih0aGlzLmN1cnJlbnREaW1lbnNpb249PT1cIk5FVEhFUlwiKXJldHVybiBcIiM2ZjJiMWZcIlxuICAgICAgaWYodGhpcy5jdXJyZW50RGltZW5zaW9uPT09XCJFTkRcIilyZXR1cm4gXCIjMjUxNzMzXCJcbiAgICAgIGlmKHRoaXMud2VhdGhlclN0YWdlPT09XCJSQUlOXCIpcmV0dXJuIG5pZ2h0P1wiIzFkMmIzYVwiOlwiIzZjOWZjMFwiXG4gICAgICBpZih0aGlzLndlYXRoZXJTdGFnZT09PVwiU05PV1wiKXJldHVybiBuaWdodD9cIiMyZDM2NDFcIjpcIiNjYmQ5ZTRcIlxuICAgICAgcmV0dXJuIG5pZ2h0PyhkYXJrP1wiIzExMWEyOFwiOihicmlnaHROaWdodD9cIiM1MzZiODJcIjpcIiMxYjI5NDBcIikpOih0aGlzLmRheVN0YWdlPT09XCJTVU5TRVRcIj9cIiM4YTZiN2JcIjoodGhpcy5kYXlTdGFnZT09PVwiU1VOUklTRVwiP1wiIzlhOGY3OFwiOlNLWSkpXG4gICAgfVxuICAgIGlmKHR5cGU9PT1cImdyYXNzXCIpcmV0dXJuIG5pZ2h0PyhkYXJrP1wiIzIzM2QyMlwiOihicmlnaHROaWdodD9cIiM0OTZhNDVcIjpcIiMzNDViMzFcIikpOigodGhpcy53b3JsZEFuaW1hdGlvbiYmdGhpcy5hbmltYXRpb25GcmFtZSU0PDIpP1wiIzY5Yzk1NlwiOlwiIzVmYmQ0ZFwiKVxuICAgIGlmKHR5cGU9PT1cImRpcnRcIilyZXR1cm4gbmlnaHQ/KGRhcms/XCIjMzgyNjE0XCI6KGJyaWdodE5pZ2h0P1wiIzY5NTEyZlwiOlwiIzUwMzgxZlwiKSk6XCIjOGI1YTJiXCJcbiAgICBpZih0eXBlPT09XCJzdG9uZVwiKXJldHVybiBuaWdodD8oZGFyaz9cIiMzMDMwMzBcIjooYnJpZ2h0TmlnaHQ/XCIjNjU2NTY1XCI6XCIjNDc0NzQ3XCIpKTpcIiM3ZDdkN2RcIlxuICAgIGlmKHR5cGU9PT1cImJlZHJvY2tcIilyZXR1cm5cIiMyMDIwMjBcIlxuICAgIGlmKHR5cGU9PT1cIndvb2RcIilyZXR1cm4gbmlnaHQ/XCIjNTk0MjI1XCI6XCIjOWE2YjNhXCJcbiAgICBpZih0eXBlPT09XCJsZWFmXCIpcmV0dXJuIG5pZ2h0PyhkYXJrP1wiIzE5MzYxZFwiOihicmlnaHROaWdodD9cIiMzNTZlM2JcIjpcIiMyNDUwMmJcIikpOih0aGlzLmxlYWZBbmltYXRpb24mJnRoaXMuYW5pbWF0aW9uRnJhbWUlNDwyP1wiIzQ1YTg0Y1wiOlwiIzNlOWI0NVwiKVxuICAgIGlmKHR5cGU9PT1cImNvYWxcIilyZXR1cm5cIiMzNDM0MzRcIlxuICAgIGlmKHR5cGU9PT1cImlyb25cIilyZXR1cm4gbmlnaHQ/XCIjNzY3Njc2XCI6XCIjYjViNWI1XCJcbiAgICBpZih0eXBlPT09XCJnb2xkXCIpcmV0dXJuIG5pZ2h0P1wiIzhhNmYyMlwiOlwiI2UyYjkzYlwiXG4gICAgaWYodHlwZT09PVwiZGlhbW9uZFwiKXJldHVybiBuaWdodD9cIiMzZjcxODBcIjpcIiM1ZGQ2ZThcIlxuICAgIGlmKHR5cGU9PT1cInNhbmRcIilyZXR1cm4gbmlnaHQ/XCIjNmQ2MDNlXCI6XCIjZDljMjdhXCJcbiAgICBpZih0eXBlPT09XCJnbGFzc1wiKXJldHVybiBuaWdodD9cIiM0MjU0NmJcIjpcIiNhN2Q4ZWZcIlxuICAgIGlmKHR5cGU9PT1cImJyaWNrXCIpcmV0dXJuIG5pZ2h0P1wiIzZiMzEyOFwiOlwiI2E5NGQzZlwiXG4gICAgaWYodHlwZT09PVwiZW5kU3RvbmVcIilyZXR1cm4gXCIjYzdjMWEyXCJcbiAgICBpZih0eXBlPT09XCJvYnNpZGlhblwiKXJldHVybiBcIiMzMDIzNDJcIlxuICAgIGlmKHR5cGU9PT1cInB1cnB1clwiKXJldHVybiBcIiNhNDdhYzJcIlxuICAgIGlmKHR5cGU9PT1cImNob3J1c1BsYW50XCIpcmV0dXJuICh0aGlzLndvcmxkQW5pbWF0aW9uJiZ0aGlzLmFuaW1hdGlvbkZyYW1lJTQ8Mik/XCIjZDNhOWVlXCI6XCIjOGM1ZGE4XCJcbiAgICBpZih0eXBlPT09XCJlbmRCcmlja1wiKXJldHVybiBcIiM3NDYxODRcIlxuICAgIGlmKHR5cGU9PT1cImVuZE9yZVwiKXJldHVybiBcIiNkNmM0ZmZcIlxuICAgIGlmKHR5cGU9PT1cIm5ldGhlcnJhY2tcIilyZXR1cm4gbmlnaHQ/XCIjNWQyMTFiXCI6XCIjOWEzMzI4XCJcbiAgICBpZih0eXBlPT09XCJzb3VsU2FuZFwiKXJldHVybiBuaWdodD9cIiMzYTJiMjVcIjpcIiM1OTQ3M2NcIlxuICAgIGlmKHR5cGU9PT1cImdsb3dzdG9uZVwiKXJldHVybiBuaWdodD9cIiM4YTY1MWZcIjpcIiNmZmQzNWFcIlxuICAgIGlmKHR5cGU9PT1cIm5ldGhlckJyaWNrXCIpcmV0dXJuIG5pZ2h0P1wiIzQyMWIyNFwiOlwiIzZmMmMzNVwiXG4gICAgaWYodHlwZT09PVwicXVhcnR6T3JlXCIpcmV0dXJuIG5pZ2h0P1wiIzdhNmM2MlwiOlwiI2RlZDdjZlwiXG4gICAgaWYodHlwZT09PVwiYmxhY2tzdG9uZVwiKXJldHVybiBuaWdodD9cIiMyNTI1MmJcIjpcIiM0MzQzNGJcIlxuICAgIGlmKHR5cGU9PT1cIndhdGVyXCIpcmV0dXJuIG5pZ2h0PyhkYXJrP1wiIzE3MzE0ZFwiOihicmlnaHROaWdodD9cIiMzNzY5OWJcIjpcIiMyMzRhNzZcIikpOih0aGlzLndhdGVyQW5pbWF0aW9uJiZ0aGlzLmFuaW1hdGlvbkZyYW1lJTQ8Mj9cIiM0NmE3ZWVcIjpcIiMzZDllZThcIilcbiAgICBpZih0eXBlPT09XCJ0b3JjaFwiKXJldHVybiBuaWdodD8oKHRoaXMud29ybGRBbmltYXRpb24mJnRoaXMuYW5pbWF0aW9uRnJhbWUlNDwyKT9cIiNmZmNmNDJcIjpcIiM3YzRiMTdcIik6KCh0aGlzLndvcmxkQW5pbWF0aW9uJiZ0aGlzLmFuaW1hdGlvbkZyYW1lJTQ8Mik/XCIjZmZkMDVhXCI6XCIjZmZiNTJlXCIpXG4gICAgaWYodHlwZT09PVwiY2hlc3RcIilyZXR1cm4gbmlnaHQ/XCIjNWMzOTFlXCI6XCIjYjg3NTJhXCJcbiAgICBpZih0eXBlPT09XCJjcmFmdGluZ1RhYmxlXCIpcmV0dXJuIG5pZ2h0P1wiIzViNDMyOFwiOlwiIzliNmIzYlwiXG4gICAgcmV0dXJuIFNLWVxuICB9LFxuXG4gIHpvb21MYWJlbCgpe2lmKHRoaXMuem9vbUluZGV4PT09MClyZXR1cm5cIjkwJVwiO2lmKHRoaXMuem9vbUluZGV4PT09MSlyZXR1cm5cIjEwMCVcIjtyZXR1cm5cIjEyMCVcIn0sXG5cbiAgcmVmcmVzaFZpZXcoKXtcbiAgICBpZih0aGlzLmdhbWVEaXNwbGF5IT09XCJmbGV4XCIpcmV0dXJuXG4gICAgdmFyIGNvbHM9dGhpcy5nZXRWaWV3Q29scygpLCByb3dzPXRoaXMuZ2V0Vmlld1Jvd3MoKSwgcHg9dGhpcy5nZXRUaWxlUHgoKVxuICAgIHZhciBzeD10aGlzLmNsYW1wKHRoaXMucGxheWVyWC1NYXRoLmZsb29yKGNvbHMvMiksMCxNYXRoLm1heCgwLENPTFMtY29scykpXG4gICAgdmFyIHN5PXRoaXMuY2xhbXAodGhpcy5wbGF5ZXJZLU1hdGguZmxvb3Iocm93cy8yKSwwLE1hdGgubWF4KDAsUk9XUy1yb3dzKSlcbiAgICB2YXIgcmVzdWx0PVtdLGNvbG9yQ2FjaGU9e30sc3R5bGVDYWNoZT17fSx0aWxlLGJnLGNoYXIsYm9yZGVyLHN0eWxlLHN0eWxlS2V5LHJvd1N0YXJ0XG4gICAgdmFyIGJ3PXRoaXMubGFyZ2VPdXRsaW5lPzI6MSxmcz10aGlzLmxhcmdlVGV4dD82OjVcbiAgICB2YXIgYW5pbWF0aW9uTWFzaz0wLHBsYXllclg9dGhpcy5wbGF5ZXJYLHBsYXllclk9dGhpcy5wbGF5ZXJZXG4gICAgdmFyIHNlbGVjdGVkWD10aGlzLnNlbGVjdGVkWCxzZWxlY3RlZFk9dGhpcy5zZWxlY3RlZFlcbiAgICB2YXIgdXNlT3V0bGluZT10aGlzLmJsb2NrT3V0bGluZSxzaG93R3JpZD10aGlzLnNob3dHcmlkXG4gICAgZm9yKHZhciB5PTA7eTxyb3dzO3krKyl7XG4gICAgICByb3dTdGFydD0oc3kreSkqQ09MUytzeFxuICAgICAgZm9yKHZhciB4PTA7eDxjb2xzO3grKyl7XG4gICAgICAgIHRpbGU9dGhpcy53b3JsZFtyb3dTdGFydCt4XVxuICAgICAgICBpZighdGlsZSljb250aW51ZVxuICAgICAgICB2YXIgaXNQbGF5ZXI9dGlsZS54PT09cGxheWVyWCYmdGlsZS55PT09cGxheWVyWVxuICAgICAgICBpZighaXNQbGF5ZXIpe1xuICAgICAgICAgIGlmKHRpbGUudHlwZT09PVwiZ3Jhc3NcInx8dGlsZS50eXBlPT09XCJ0b3JjaFwifHx0aWxlLnR5cGU9PT1cImNob3J1c1BsYW50XCIpYW5pbWF0aW9uTWFza3w9MVxuICAgICAgICAgIGVsc2UgaWYodGlsZS50eXBlPT09XCJ3YXRlclwiKWFuaW1hdGlvbk1hc2t8PTJcbiAgICAgICAgICBlbHNlIGlmKHRpbGUudHlwZT09PVwibGVhZlwiKWFuaW1hdGlvbk1hc2t8PTRcbiAgICAgICAgfVxuICAgICAgICBiZz1jb2xvckNhY2hlW3RpbGUudHlwZV1cbiAgICAgICAgaWYoIWJnKWJnPWNvbG9yQ2FjaGVbdGlsZS50eXBlXT10aGlzLmNvbG9yKHRpbGUudHlwZSlcbiAgICAgICAgY2hhcj1cIlwiXG4gICAgICAgIGlmKGlzUGxheWVyKXtiZz1cIiMwMDI2ZmZcIjtjaGFyPVwiUFwifVxuICAgICAgICBlbHNlIGlmKHRpbGUudHlwZT09PVwiY29hbFwiKWNoYXI9XCJDXCJcbiAgICAgICAgZWxzZSBpZih0aWxlLnR5cGU9PT1cImlyb25cIiljaGFyPVwiSVwiXG4gICAgICAgIGVsc2UgaWYodGlsZS50eXBlPT09XCJnb2xkXCIpY2hhcj1cIkdcIlxuICAgICAgICBlbHNlIGlmKHRpbGUudHlwZT09PVwiZGlhbW9uZFwiKWNoYXI9XCJEXCJcbiAgICAgICAgZWxzZSBpZih0aWxlLnR5cGU9PT1cInRvcmNoXCIpY2hhcj1cIlRcIlxuICAgICAgICBlbHNlIGlmKHRpbGUudHlwZT09PVwiY2hlc3RcIiljaGFyPVwiS1wiXG4gICAgICAgIGVsc2UgaWYodGlsZS50eXBlPT09XCJjcmFmdGluZ1RhYmxlXCIpY2hhcj1cIldcIlxuICAgICAgICBib3JkZXI9KHVzZU91dGxpbmUmJnRpbGUueD09PXNlbGVjdGVkWCYmdGlsZS55PT09c2VsZWN0ZWRZKT9cIiNmZmZmZmZcIjooc2hvd0dyaWQ/XCIjNWE2ODcyXCI6XCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICBzdHlsZUtleT1iZytcInxcIitib3JkZXJcbiAgICAgICAgc3R5bGU9c3R5bGVDYWNoZVtzdHlsZUtleV1cbiAgICAgICAgaWYoIXN0eWxlKXtcbiAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6XCIrYmcrXCI7Y29sb3I6I2ZmZmZmZjtib3JkZXItd2lkdGg6XCIrYncrXCJweDtib3JkZXItY29sb3I6XCIrYm9yZGVyK1wiO3dpZHRoOlwiK3B4K1wicHg7aGVpZ2h0OlwiK3B4K1wicHg7bGluZS1oZWlnaHQ6XCIrcHgrXCJweDtmb250LXNpemU6XCIrZnMrXCJweDtcIlxuICAgICAgICAgIHN0eWxlQ2FjaGVbc3R5bGVLZXldPXN0eWxlXG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goe3g6dGlsZS54LHk6dGlsZS55LGNoYXI6Y2hhcixzdHlsZTpzdHlsZX0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmlzaWJsZUFuaW1hdGlvbk1hc2s9YW5pbWF0aW9uTWFza1xuICAgIHRoaXMudmlzaWJsZVdvcmxkPXJlc3VsdFxuICAgIHRoaXMuc2t5VGV4dD10aGlzLmN1cnJlbnREaW1lbnNpb249PT1cIk5FVEhFUlwiP1wiTkVUSEVSIFNLWVwiOih0aGlzLmN1cnJlbnREaW1lbnNpb249PT1cIkVORFwiP1wiRU5EIFNLWVwiOih0aGlzLmRheVN0YWdlPT09XCJOSUdIVFwiP1wiTU9PTiAqKipcIjoodGhpcy5kYXlTdGFnZT09PVwiU1VOU0VUXCI/XCJTVU5TRVQgXCI6KHRoaXMuZGF5U3RhZ2U9PT1cIlNVTlJJU0VcIj9cIlNVTlJJU0UgXCI6XCJTVU4gXCIpKSt0aGlzLmNsb3VkVGV4dCkpXG4gICAgdGhpcy5odWRMaW5lPXRoaXMuY3VycmVudERpbWVuc2lvbitcIiB8IFwiK3RoaXMuc2t5VGV4dCtcIiBcIit0aGlzLndlYXRoZXJTdGFnZStcIiB8IFwiK3RoaXMubW9kZStcIiBcIit0aGlzLnNlbGVjdGVkQmxvY2srXCIgeFwiKyh0aGlzLmludmVudG9yeVt0aGlzLnNlbGVjdGVkQmxvY2tdfHwwKStcIiB8IExcIit0aGlzLmxldmVsK1wiIFhQXCIrdGhpcy54cCtcIiB8IFwiK3RoaXMudG9vbExhYmVsK1wiIFwiK3RoaXMuem9vbUxhYmVsKClcbiAgICBpZih0aGlzLm1hcERpc3BsYXk9PT1cImZsZXhcIil0aGlzLnVwZGF0ZU1hcCgpXG4gIH0sXG4gIHRpY2soKXtcbiAgICB2YXIgb2xkWD10aGlzLnBsYXllclgsb2xkWT10aGlzLnBsYXllcllcbiAgICBpZih0aGlzLnBsYXllclZ5PDApe2lmKHRoaXMucGxheWVyWT4wJiYhdGhpcy5zb2xpZEF0KHRoaXMucGxheWVyWCx0aGlzLnBsYXllclktMSkpe3RoaXMucGxheWVyWS0tO3RoaXMucGxheWVyVnkrK31lbHNlIHRoaXMucGxheWVyVnk9MH1cbiAgICBlbHNlIGlmKCF0aGlzLnNvbGlkQXQodGhpcy5wbGF5ZXJYLHRoaXMucGxheWVyWSsxKSl7dGhpcy5wbGF5ZXJZKys7dGhpcy5wbGF5ZXJWeT0xfWVsc2UgdGhpcy5wbGF5ZXJWeT0wXG4gICAgdmFyIG1vdmVkPW9sZFghPT10aGlzLnBsYXllclh8fG9sZFkhPT10aGlzLnBsYXllcllcbiAgICB2YXIgcmVmcmVzaE5lZWRlZD1tb3ZlZFxuICAgIHZhciBhbmltYXRlV29ybGQ9dGhpcy53b3JsZEFuaW1hdGlvbiYmKHRoaXMudmlzaWJsZUFuaW1hdGlvbk1hc2smMSkhPT0wXG4gICAgdmFyIGFuaW1hdGVXYXRlcj10aGlzLndhdGVyQW5pbWF0aW9uJiYodGhpcy52aXNpYmxlQW5pbWF0aW9uTWFzayYyKSE9PTBcbiAgICB2YXIgYW5pbWF0ZUxlYXZlcz10aGlzLmxlYWZBbmltYXRpb24mJih0aGlzLnZpc2libGVBbmltYXRpb25NYXNrJjQpIT09MFxuICAgIGlmKGFuaW1hdGVXb3JsZHx8YW5pbWF0ZVdhdGVyfHxhbmltYXRlTGVhdmVzKXtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWU9KHRoaXMuYW5pbWF0aW9uRnJhbWUrMSklNFxuICAgICAgaWYodGhpcy5hbmltYXRpb25GcmFtZT09PTB8fHRoaXMuYW5pbWF0aW9uRnJhbWU9PT0yKXJlZnJlc2hOZWVkZWQ9dHJ1ZVxuICAgIH1cbiAgICBpZih0aGlzLndlYXRoZXJFbmFibGVkKXtcbiAgICAgIHRoaXMud2VhdGhlclRpY2srK1xuICAgICAgaWYodGhpcy53ZWF0aGVyVGljaz49NzApe1xuICAgICAgICB0aGlzLndlYXRoZXJUaWNrPTA7IHRoaXMud2VhdGhlckN5Y2xlPSh0aGlzLndlYXRoZXJDeWNsZSsxKSUzXG4gICAgICAgIHRoaXMud2VhdGhlclN0YWdlPXRoaXMud2VhdGhlckN5Y2xlPT09MD9cIkNMRUFSXCI6KHRoaXMud2VhdGhlckN5Y2xlPT09MT9cIlJBSU5cIjpcIlNOT1dcIilcbiAgICAgICAgcmVmcmVzaE5lZWRlZD10cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGlmKHJlZnJlc2hOZWVkZWQpdGhpcy5yZWZyZXNoVmlldygpXG4gIH0sXG4gIG1vdmVMZWZ0KCl7dGhpcy50cnlNb3ZlKC0xKX0sXG4gIG1vdmVSaWdodCgpe3RoaXMudHJ5TW92ZSgxKX0sXG4gIHRyeU1vdmUoZHgpe1xuICAgIHZhciBueD10aGlzLnBsYXllclgrZHhcbiAgICBpZihueDwwfHxueD49Q09MUylyZXR1cm5cbiAgICBpZighdGhpcy5zb2xpZEF0KG54LHRoaXMucGxheWVyWSkpe3RoaXMucGxheWVyWD1ueDt0aGlzLnN0YXR1cz1cIk1vdmVkXCI7dGhpcy5yZWZyZXNoVmlldygpO3JldHVybn1cbiAgICBpZih0aGlzLmF1dG9KdW1wJiZ0aGlzLnBsYXllclk+MCYmIXRoaXMuc29saWRBdChueCx0aGlzLnBsYXllclktMSkmJiF0aGlzLnNvbGlkQXQodGhpcy5wbGF5ZXJYLHRoaXMucGxheWVyWS0xKSl7dGhpcy5wbGF5ZXJYPW54O3RoaXMucGxheWVyWS0tO3RoaXMuc3RhdHVzPVwiU3RlcHBlZCB1cFwiO3RoaXMucmVmcmVzaFZpZXcoKX1cbiAgICBlbHNlIHRoaXMuc3RhdHVzPVwiQmxvY2tlZFwiXG4gIH0sXG4gIGp1bXAoKXtpZih0aGlzLnBsYXllclZ5PT09MCYmdGhpcy5zb2xpZEF0KHRoaXMucGxheWVyWCx0aGlzLnBsYXllclkrMSkpe3RoaXMucGxheWVyVnk9LTI7dGhpcy5zdGF0dXM9XCJKdW1wXCI7dGhpcy5yZWZyZXNoVmlldygpfX0sXG5cbiAgdGFwQ2VsbCh4LHkpe1xuICAgIHRoaXMuc2VsZWN0ZWRYPXg7dGhpcy5zZWxlY3RlZFk9eVxuICAgIHZhciB0aWxlPXRoaXMudGlsZUF0KHgseSk7aWYoIXRpbGUpe3RoaXMucmVmcmVzaFZpZXcoKTtyZXR1cm59XG4gICAgaWYoeD09PXRoaXMucGxheWVyWCYmeT09PXRoaXMucGxheWVyWSl7dGhpcy5zdGF0dXM9XCJQbGF5ZXIgc2VsZWN0ZWRcIjt0aGlzLnJlZnJlc2hWaWV3KCk7cmV0dXJufVxuICAgIGlmKE1hdGguYWJzKHgtdGhpcy5wbGF5ZXJYKStNYXRoLmFicyh5LXRoaXMucGxheWVyWSk+Mil7dGhpcy5zdGF0dXM9XCJUb28gZmFyXCI7dGhpcy5yZWZyZXNoVmlldygpO3JldHVybn1cbiAgICBpZih0aGlzLm1vZGU9PT1cIk1JTkVcIil7XG4gICAgICBpZih0aWxlLnR5cGU9PT1cImNoZXN0XCIpe1xuICAgICAgICB0aGlzLm9wZW5DaGVzdEF0KHgseSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZih0aWxlLnR5cGU9PT1cImNyYWZ0aW5nVGFibGVcIil7XG4gICAgICAgIHRoaXMub3BlbldvcmtiZW5jaEF0KHgseSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZih0aWxlLnR5cGU9PT1cImFpclwifHx0aWxlLnR5cGU9PT1cImJlZHJvY2tcIil7dGhpcy5zdGF0dXM9XCJOb3RoaW5nIHRvIG1pbmVcIjt0aGlzLnJlZnJlc2hWaWV3KCk7cmV0dXJufVxuICAgICAgdmFyIG1pbmVkPXRpbGUudHlwZSwgbmVlZGVkPXRoaXMucmVxdWlyZWRUb29sKG1pbmVkKVxuICAgICAgaWYobmVlZGVkIT09XCJoYW5kXCImJnRoaXMudG9vbFR5cGUhPT1uZWVkZWQpe3RoaXMuc3RhdHVzPVwiVVNFIFwiK25lZWRlZC50b1VwcGVyQ2FzZSgpO3RoaXMucmVmcmVzaFZpZXcoKTtyZXR1cm59XG4gICAgICB0aGlzLndvcmxkW3RoaXMuaW5kZXhPZih4LHkpXT1tYWtlVGlsZSh4LHksXCJhaXJcIik7dmFyIGludj1PYmplY3QuYXNzaWduKHt9LHRoaXMuaW52ZW50b3J5KTtpbnZbbWluZWRdPShpbnZbbWluZWRdfHwwKSsxO3RoaXMuaW52ZW50b3J5PWludlxuICAgICAgdGhpcy50b3RhbE1pbmVkKytcbiAgICAgIGlmKHRoaXMuY3VycmVudERpbWVuc2lvbj09PVwiTk9STUFMXCIpe3RoaXMubm9ybWFsTWluZWRUb3RhbCsrO3RoaXMudXBkYXRlTmV0aGVyTG9ja0xhYmVsKCl9XG4gICAgICBlbHNlIGlmKHRoaXMuY3VycmVudERpbWVuc2lvbj09PVwiTkVUSEVSXCIpe3RoaXMubmV0aGVyTWluZWRUb3RhbCsrO3RoaXMudXBkYXRlRW5kTG9ja0xhYmVsKCl9XG4gICAgICBlbHNlIGlmKHRoaXMuY3VycmVudERpbWVuc2lvbj09PVwiRU5EXCIpe3RoaXMuZW5kTWluZWRUb3RhbCsrfVxuICAgICAgaWYobWluZWQ9PT1cImlyb25cIil0aGlzLmZvdW5kSXJvbj10cnVlO2lmKG1pbmVkPT09XCJkaWFtb25kXCIpdGhpcy5mb3VuZERpYW1vbmQ9dHJ1ZVxuICAgICAgdGhpcy5nYWluWHAoKG1pbmVkPT09XCJpcm9uXCJ8fG1pbmVkPT09XCJnb2xkXCJ8fG1pbmVkPT09XCJkaWFtb25kXCJ8fG1pbmVkPT09XCJlbmRPcmVcIik/MzoxKTsgaWYobmVlZGVkIT09XCJoYW5kXCIpdGhpcy51c2VUb29sKG5lZWRlZClcbiAgICAgIHRoaXMudXBkYXRlR29hbHMoKTsgdGhpcy5zdGF0dXM9XCJNaW5lZCBcIittaW5lZC50b1VwcGVyQ2FzZSgpK1wiIHwgTFZMIFwiK3RoaXMubGV2ZWwrXCIgWFAgXCIrdGhpcy54cCtcIi8xMFwiXG4gICAgICBpZih0aGlzLmN1cnJlbnREaW1lbnNpb249PT1cIkVORFwiJiZ0aGlzLmVuZE1pbmVkVG90YWw+PXRoaXMuZW5kV2luVGFyZ2V0KXt0aGlzLmZpbmlzaEdhbWUoKTtyZXR1cm59XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7cmV0dXJuXG4gICAgfVxuICAgIGlmKHRpbGUudHlwZSE9PVwiYWlyXCIpe3RoaXMuc3RhdHVzPVwiU3BhY2Ugb2NjdXBpZWRcIjt0aGlzLnJlZnJlc2hWaWV3KCk7cmV0dXJufVxuICAgIGlmKCFwbGFjZWFibGUodGhpcy5zZWxlY3RlZEJsb2NrKSl7dGhpcy5zdGF0dXM9XCJCbG9jayBjYW5ub3QgYmUgcGxhY2VkXCI7dGhpcy5yZWZyZXNoVmlldygpO3JldHVybn1cbiAgICBpZighdGhpcy5pbnZlbnRvcnlbdGhpcy5zZWxlY3RlZEJsb2NrXXx8dGhpcy5pbnZlbnRvcnlbdGhpcy5zZWxlY3RlZEJsb2NrXTw9MCl7dGhpcy5zdGF0dXM9XCJPdXQgb2YgXCIrdGhpcy5zZWxlY3RlZEJsb2NrLnRvVXBwZXJDYXNlKCk7dGhpcy5yZWZyZXNoVmlldygpO3JldHVybn1cbiAgICB0aGlzLndvcmxkW3RoaXMuaW5kZXhPZih4LHkpXT1tYWtlVGlsZSh4LHksdGhpcy5zZWxlY3RlZEJsb2NrKTt2YXIgaW52Mj1PYmplY3QuYXNzaWduKHt9LHRoaXMuaW52ZW50b3J5KTtpbnYyW3RoaXMuc2VsZWN0ZWRCbG9ja10tPTE7dGhpcy5pbnZlbnRvcnk9aW52Mjt0aGlzLnRvdGFsUGxhY2VkKys7dGhpcy5nYWluWHAoMSk7dGhpcy51cGRhdGVHb2FscygpO3RoaXMuc3RhdHVzPVwiUGxhY2VkIFwiK3RoaXMuc2VsZWN0ZWRCbG9jay50b1VwcGVyQ2FzZSgpK1wiIHwgTFZMIFwiK3RoaXMubGV2ZWwrXCIgWFAgXCIrdGhpcy54cCtcIi8xMFwiO3RoaXMucmVmcmVzaFZpZXcoKVxuICB9LFxuXG4gIHNldE1pbmVNb2RlKCl7dGhpcy5tb2RlPVwiTUlORVwiO3RoaXMuc3RhdHVzPVwiTWluZSBtb2RlXCI7dGhpcy5yZWZyZXNoVmlldygpfSxcbiAgc2V0UGxhY2VNb2RlKCl7dGhpcy5tb2RlPVwiUExBQ0VcIjt0aGlzLnN0YXR1cz1cIlBsYWNlIG1vZGVcIjt0aGlzLnJlZnJlc2hWaWV3KCl9LFxuICBzZWxlY3REaXJ0KCl7dGhpcy5zZWxlY3RlZEJsb2NrPVwiZGlydFwiO3RoaXMucmVmcmVzaFZpZXcoKX0sXG4gIHNlbGVjdFN0b25lKCl7dGhpcy5zZWxlY3RlZEJsb2NrPVwic3RvbmVcIjt0aGlzLnJlZnJlc2hWaWV3KCl9LFxuICBzZWxlY3RXb29kKCl7dGhpcy5zZWxlY3RlZEJsb2NrPVwid29vZFwiO3RoaXMucmVmcmVzaFZpZXcoKX0sXG4gIHNlbGVjdExlYWYoKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJsZWFmXCI7dGhpcy5yZWZyZXNoVmlldygpfSxcbiAgc2VsZWN0U2FuZCgpe3RoaXMuc2VsZWN0ZWRCbG9jaz1cInNhbmRcIjt0aGlzLnJlZnJlc2hWaWV3KCl9LFxuICBzZWxlY3RHbGFzcygpe3RoaXMuc2VsZWN0ZWRCbG9jaz1cImdsYXNzXCI7dGhpcy5yZWZyZXNoVmlldygpfSxcbiAgc2VsZWN0QnJpY2soKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJicmlja1wiO3RoaXMucmVmcmVzaFZpZXcoKX0sXG4gIHNlbGVjdFRvcmNoKCl7dGhpcy5zZWxlY3RlZEJsb2NrPVwidG9yY2hcIjt0aGlzLnJlZnJlc2hWaWV3KCl9LFxuICBzZWxlY3RXYXRlcigpe3RoaXMuc2VsZWN0ZWRCbG9jaz1cIndhdGVyXCI7dGhpcy5yZWZyZXNoVmlldygpfSxcbiAgc2VsZWN0Q2hlc3QoKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJjaGVzdFwiO3RoaXMucmVmcmVzaFZpZXcoKX0sXG4gIHNlbGVjdENvYWwoKXt0aGlzLnNlbGVjdGVkQmxvY2s9XCJjb2FsXCI7dGhpcy5yZWZyZXNoVmlldygpfSxcbiAgc2VsZWN0SXJvbigpe3RoaXMuc2VsZWN0ZWRCbG9jaz1cImlyb25cIjt0aGlzLnJlZnJlc2hWaWV3KCl9LFxuXG4gIHpvb21Jbigpe2lmKHRoaXMuem9vbUluZGV4PFpPT01fTEVWRUxTLmxlbmd0aC0xKXt0aGlzLnpvb21JbmRleCsrO3RoaXMuc3RhdHVzPVwiWm9vbSBpblwiO3RoaXMucmVmcmVzaFZpZXcoKX19LFxuICB6b29tT3V0KCl7aWYodGhpcy56b29tSW5kZXg+MCl7dGhpcy56b29tSW5kZXgtLTt0aGlzLnN0YXR1cz1cIlpvb20gb3V0XCI7dGhpcy5yZWZyZXNoVmlldygpfX0sXG4gIGNlbnRlckNhbWVyYSgpe3RoaXMuc3RhdHVzPVwiQ2VudGVyZWQgb24gcGxheWVyXCI7dGhpcy5yZWZyZXNoVmlldygpfSxcbiAgZmluaXNoR2FtZSgpe3RoaXMuc2F2ZUN1cnJlbnREaW1lbnNpb25TdGF0ZSgpO2lmKHRoaXMuZ2FtZVRpbWVyKXtjbGVhckludGVydmFsKHRoaXMuZ2FtZVRpbWVyKTt0aGlzLmdhbWVUaW1lcj1udWxsfWlmKHRoaXMuZGF5VGltZXIpe2NsZWFySW50ZXJ2YWwodGhpcy5kYXlUaW1lcik7dGhpcy5kYXlUaW1lcj1udWxsfXRoaXMuZ2FtZURpc3BsYXk9XCJub25lXCI7dGhpcy5zbG90c0NvbmZpcm1EaXNwbGF5PVwibm9uZVwiO3RoaXMuaW52ZW50b3J5RGlzcGxheT1cIm5vbmVcIjt0aGlzLmV4dHJhRGlzcGxheT1cIm5vbmVcIjt0aGlzLndvcmxkc0Rpc3BsYXk9XCJub25lXCI7dGhpcy5jcmFmdERpc3BsYXk9XCJub25lXCI7dGhpcy53b3JrYmVuY2hEaXNwbGF5PVwibm9uZVwiO3RoaXMubWFwRGlzcGxheT1cIm5vbmVcIjt0aGlzLnRvb2xzRGlzcGxheT1cIm5vbmVcIjt0aGlzLnF1ZXN0c0Rpc3BsYXk9XCJub25lXCI7dGhpcy5hY2hpZXZlbWVudHNEaXNwbGF5PVwibm9uZVwiO3RoaXMudmljdG9yeURpc3BsYXk9XCJmbGV4XCJ9LFxuICByZXR1cm5Ub01haW5NZW51KCl7aWYodGhpcy5nYW1lVGltZXIpe2NsZWFySW50ZXJ2YWwodGhpcy5nYW1lVGltZXIpO3RoaXMuZ2FtZVRpbWVyPW51bGx9aWYodGhpcy5kYXlUaW1lcil7Y2xlYXJJbnRlcnZhbCh0aGlzLmRheVRpbWVyKTt0aGlzLmRheVRpbWVyPW51bGx9dGhpcy52aWN0b3J5RGlzcGxheT1cIm5vbmVcIjt0aGlzLnNsb3RzQ29uZmlybURpc3BsYXk9XCJub25lXCI7dGhpcy5nYW1lRGlzcGxheT1cIm5vbmVcIjt0aGlzLmludmVudG9yeURpc3BsYXk9XCJub25lXCI7dGhpcy5leHRyYURpc3BsYXk9XCJub25lXCI7dGhpcy53b3JsZHNEaXNwbGF5PVwibm9uZVwiO3RoaXMuc2xvdE1lbnVEaXNwbGF5PVwibm9uZVwiO3RoaXMuc2V0dGluZ3NEaXNwbGF5PVwibm9uZVwiO3RoaXMuY3VycmVudERpbWVuc2lvbj1cIk5PUk1BTFwiO3RoaXMubWVudURpc3BsYXk9XCJmbGV4XCI7dGhpcy5zdGF0dXM9XCJUSEUgRU5EIENPTlFVRVJFRFwifSxcbiAgcmVzZXRHYW1lKCl7XG4gICAgaWYodGhpcy5jb25maXJtUmVzZXQmJiF0aGlzLnJlc2V0QXJtZWQpe3RoaXMucmVzZXRBcm1lZD10cnVlO3RoaXMuc3RhdHVzPVwiVGFwIFJFU0VUIGFnYWluXCI7cmV0dXJufVxuICAgIHRoaXMucmVzZXRBcm1lZD1mYWxzZTt0aGlzLnNsb3RzQ29uZmlybURpc3BsYXk9XCJub25lXCI7dGhpcy52aWN0b3J5RGlzcGxheT1cIm5vbmVcIjsgdGhpcy5pbnZlbnRvcnlEaXNwbGF5PVwibm9uZVwiOyB0aGlzLmV4dHJhRGlzcGxheT1cIm5vbmVcIjt0aGlzLndvcmxkc0Rpc3BsYXk9XCJub25lXCI7IHRoaXMuY3JhZnREaXNwbGF5PVwibm9uZVwiOyB0aGlzLm1hcERpc3BsYXk9XCJub25lXCI7IHRoaXMudG9vbHNEaXNwbGF5PVwibm9uZVwiOyB0aGlzLnF1ZXN0c0Rpc3BsYXk9XCJub25lXCI7IHRoaXMuYWNoaWV2ZW1lbnRzRGlzcGxheT1cIm5vbmVcIjsgdGhpcy5zZWxlY3RTbG90KHRoaXMuY3VycmVudFNsb3R8fDEpOyB0aGlzLnN0YXR1cz1cIldvcmxkIHJlc2V0XCJcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHsgd2lkdGg6MTA2cHg7IGhlaWdodDoyNjBweDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBhbGlnbi1pdGVtczpjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IzEwMTgyMDsgfVxuLmxvYWRpbmcsLm1lbnUgeyB3aWR0aDoxMDZweDsgaGVpZ2h0OjI2MHB4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjojMTAxODIwOyB9XG4ubG9hZGluZy10aXRsZSwubWVudS10aXRsZSB7IGZvbnQtc2l6ZToxM3B4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjojZmZmZmZmOyB9XG4ubG9hZGluZy1sYWJlbCwubWVudS1zdWJ0aXRsZSB7IGZvbnQtc2l6ZTo1cHg7IGNvbG9yOiNiOGM3ZDE7IG1hcmdpbi10b3A6OHB4OyB9XG4ubG9hZGluZy1iYXIgeyB3aWR0aDo4MHB4OyBoZWlnaHQ6NnB4OyBtYXJnaW4tdG9wOjE0cHg7IGJhY2tncm91bmQtY29sb3I6IzI2MzQzZTsgfVxuLmxvYWRpbmctZmlsbCB7IGhlaWdodDo2cHg7IGJhY2tncm91bmQtY29sb3I6IzRjYWY1MDsgfVxuLmxvYWRpbmctcGVyY2VudCB7IGZvbnQtc2l6ZTo1cHg7IGNvbG9yOiM5ZmI3YzY7IG1hcmdpbi10b3A6OHB4OyB9XG4ucGxheS1idXR0b24geyB3aWR0aDo3NHB4OyBoZWlnaHQ6MzBweDsgbWFyZ2luLXRvcDoxOHB4OyBib3JkZXItcmFkaXVzOjZweDsgYmFja2dyb3VuZC1jb2xvcjojNGNhZjUwOyBmb250LXNpemU6OXB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjojZmZmZmZmOyB9XG4uc2V0dGluZ3MtYnV0dG9uIHsgd2lkdGg6NzRweDsgaGVpZ2h0OjI0cHg7IG1hcmdpbi10b3A6OHB4OyBib3JkZXItcmFkaXVzOjVweDsgYmFja2dyb3VuZC1jb2xvcjojMzQ0OTU1OyBmb250LXNpemU6NnB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjojZmZmZmZmOyB9XG4uZXh0cmEsLndvcmxkcy1zY3JlZW4sLmVuZC1zY3JlZW4sLnNsb3RzLWNvbmZpcm0tc2NyZWVuLC52aWN0b3J5LXNjcmVlbiwubWFwLXNjcmVlbiwudG9vbHMtc2NyZWVuLC5xdWVzdHMtc2NyZWVuLC5hY2gtc2NyZWVuLC5jcmFmdC1zY3JlZW4sLndvcmtiZW5jaC1zY3JlZW4geyB3aWR0aDoxMDZweDsgaGVpZ2h0OjI2MHB4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjojMTAxODIwOyB9XG4uY3JhZnQtaW5mbyB7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6MTJweDsgbWFyZ2luLXRvcDo2cHg7IGZvbnQtc2l6ZTo0cHg7IGNvbG9yOiM5ZmI3YzY7IHRleHQtYWxpZ246Y2VudGVyOyB9XG4uY3JhZnQtYnRuIHsgd2lkdGg6OTZweDsgaGVpZ2h0OjIycHg7IG1hcmdpbi10b3A6NHB4OyBib3JkZXItcmFkaXVzOjRweDsgYmFja2dyb3VuZC1jb2xvcjojNGI2ZjhhOyBmb250LXNpemU6NHB4OyBjb2xvcjojZmZmZmZmOyBmb250LXdlaWdodDpib2xkOyB9XG4uY3JhZnQtc3RhdHVzIHsgd2lkdGg6MTAwcHg7IGhlaWdodDoxNnB4OyBtYXJnaW4tdG9wOjZweDsgZm9udC1zaXplOjVweDsgY29sb3I6I2ZmZmZmZjsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cbi5tYXAtdGV4dCwucXVlc3QtdGV4dCB7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6MTIwcHg7IGZvbnQtc2l6ZTo1cHg7IGNvbG9yOiNmZmZmZmY7IHRleHQtYWxpZ246Y2VudGVyOyB3aGl0ZS1zcGFjZTpwcmU7IGxpbmUtaGVpZ2h0OjlweDsgfVxuLm1hcC1oaW50IHsgd2lkdGg6MTAwcHg7IGhlaWdodDoxMnB4OyBmb250LXNpemU6NHB4OyBjb2xvcjojOWZiN2M2OyB0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luLXRvcDozcHg7IH1cbi5zZXR0aW5ncyB7IHdpZHRoOjEwNnB4OyBoZWlnaHQ6MjYwcHg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBiYWNrZ3JvdW5kLWNvbG9yOiMxMDE4MjA7IH1cbi5zZXR0aW5ncy1wYW5lbCB7IHdpZHRoOjEwNnB4OyBoZWlnaHQ6MjEwcHg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyB9XG4uc2VjdGlvbi1sYWJlbCB7IGZvbnQtc2l6ZTo1cHg7IGNvbG9yOiM4ZmE0YjM7IG1hcmdpbi1ib3R0b206NnB4OyB9XG4uc2VjdGlvbi1idG4geyB3aWR0aDo3OHB4OyBoZWlnaHQ6MjJweDsgbWFyZ2luLXRvcDozcHg7IGJvcmRlci1yYWRpdXM6NXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiMzNDQ5NTU7IGZvbnQtc2l6ZTo2cHg7IGZvbnQtd2VpZ2h0OmJvbGQ7IGNvbG9yOiNmZmZmZmY7IH1cbi5zZXR0aW5nLWJ0biB7IHdpZHRoOjg4cHg7IGhlaWdodDoyMnB4OyBtYXJnaW4tdG9wOjNweDsgYm9yZGVyLXJhZGl1czo1cHg7IGJhY2tncm91bmQtY29sb3I6IzRiNmY4YTsgZm9udC1zaXplOjVweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6I2ZmZmZmZjsgfVxuLnNldHRpbmctdG9nZ2xlIHsgd2lkdGg6ODJweDsgaGVpZ2h0OjMwcHg7IG1hcmdpbi10b3A6MThweDsgYm9yZGVyLXJhZGl1czo1cHg7IGJhY2tncm91bmQtY29sb3I6IzRiNmY4YTsgZm9udC1zaXplOjdweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6I2ZmZmZmZjsgfVxuLnNldHRpbmdzLWluZm8geyB3aWR0aDoxMDBweDsgaGVpZ2h0OjE0cHg7IG1hcmdpbi10b3A6OHB4OyBmb250LXNpemU6NXB4OyBjb2xvcjojOWZiN2M2OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxuLnNsb3RzIHsgd2lkdGg6MTA2cHg7IGhlaWdodDoyNjBweDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IzEwMTgyMDsgfVxuLnNsb3QtYnV0dG9uIHsgd2lkdGg6NzhweDsgaGVpZ2h0OjI4cHg7IG1hcmdpbi10b3A6MTJweDsgYm9yZGVyLXJhZGl1czo1cHg7IGJhY2tncm91bmQtY29sb3I6IzM0NDk1NTsgZm9udC1zaXplOjdweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6I2ZmZmZmZjsgfVxuLnNsb3QtaW5mbyB7IGhlaWdodDoxMHB4OyBtYXJnaW4tdG9wOjRweDsgZm9udC1zaXplOjVweDsgY29sb3I6IzlmYjdjNjsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cbi53b3JsZHMtaW5mbyB7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6MTBweDsgbWFyZ2luLXRvcDoycHg7IGZvbnQtc2l6ZTo0cHg7IGNvbG9yOiM5ZmI3YzY7IHRleHQtYWxpZ246Y2VudGVyOyB9XG4ubmV0aGVyLWFycm93LC5lbmQtYXJyb3cgeyB3aWR0aDo5MnB4OyBoZWlnaHQ6MjBweDsgbWFyZ2luLXRvcDozcHg7IGJvcmRlci1yYWRpdXM6NHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiM0YjMwMzM7IGZvbnQtc2l6ZTo1cHg7IGZvbnQtd2VpZ2h0OmJvbGQ7IGNvbG9yOiNmZmZmZmY7IH1cbi5lbmQtYXJyb3cgeyBiYWNrZ3JvdW5kLWNvbG9yOiM0YjNjNjY7IH1cbi5uZXRoZXItYmxvY2tzLC5lbmQtYmxvY2tzIHsgd2lkdGg6MTA0cHg7IGhlaWdodDo0OXB4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgfVxuLnNsb3RzLWNvbmZpcm0tc2NyZWVuIHsgd2lkdGg6MTA2cHg7IGhlaWdodDoyNjBweDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IzEwMTgyMDsgfVxuLmNvbmZpcm0tdGl0bGUgeyB3aWR0aDoxMDZweDsgaGVpZ2h0OjE4cHg7IG1hcmdpbi1sZWZ0OjBweDsgbWFyZ2luLXJpZ2h0OjBweDsgZm9udC1zaXplOjdweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6I2ZmZmZmZjsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cbi52aWN0b3J5LXNjcmVlbiB7IHdpZHRoOjEwNnB4OyBoZWlnaHQ6MjYwcHg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBiYWNrZ3JvdW5kLWNvbG9yOiMxNzEwMjY7IGJvcmRlci13aWR0aDoycHg7IGJvcmRlci1jb2xvcjojYjk5Y2ZmOyB9XG4udmljdG9yeS1zdGFycyB7IHdpZHRoOjEwMHB4OyBoZWlnaHQ6MjBweDsgZm9udC1zaXplOjlweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6I2Y1ZDc3OTsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cbi52aWN0b3J5LXRpdGxlIHsgd2lkdGg6MTAwcHg7IGhlaWdodDozNnB4OyBmb250LXNpemU6MTVweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6I2Y1ZDc3OTsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cbi52aWN0b3J5LXN1YnRpdGxlIHsgd2lkdGg6MTAwcHg7IGhlaWdodDoxN3B4OyBmb250LXNpemU6NnB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjojZmZmZmZmOyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxuLnZpY3RvcnktcHJvZ3Jlc3MgeyB3aWR0aDoxMDBweDsgaGVpZ2h0OjIwcHg7IG1hcmdpbi10b3A6MTJweDsgZm9udC1zaXplOjVweDsgY29sb3I6I2I5OWNmZjsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cbi52aWN0b3J5LW1lbnUgeyB3aWR0aDo4MHB4OyBoZWlnaHQ6MzBweDsgbWFyZ2luLXRvcDoxM3B4OyBib3JkZXItcmFkaXVzOjZweDsgYmFja2dyb3VuZC1jb2xvcjojNmI0YWNiOyBmb250LXNpemU6OHB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjojZmZmZmZmOyB9XG4uaW52ZW50b3J5IHsgd2lkdGg6MTA2cHg7IGhlaWdodDoyNjBweDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IzEwMTgyMDsgfVxuLmludi1yb3cgeyB3aWR0aDoxMDRweDsgaGVpZ2h0OjIzcHg7IGZsZXgtZGlyZWN0aW9uOnJvdzsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYWxpZ24taXRlbXM6Y2VudGVyOyB9XG4uaW52LWJ0biB7IHdpZHRoOjI0cHg7IGhlaWdodDoyMHB4OyBtYXJnaW4tbGVmdDoxcHg7IG1hcmdpbi1yaWdodDoxcHg7IGJvcmRlci1yYWRpdXM6M3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiMzNDQ5NTU7IGZsZXhEaXJlY3Rpb246Y29sdW1uOyBhbGlnbkl0ZW1zOmNlbnRlcjsganVzdGlmeUNvbnRlbnQ6Y2VudGVyOyB9XG4uaW52LW5hbWUgeyB3aWR0aDoyM3B4OyBoZWlnaHQ6OXB4OyBmb250LXNpemU6M3B4OyBjb2xvcjojZmZmZmZmOyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxuLmludi1jb3VudCB7IHdpZHRoOjIzcHg7IGhlaWdodDo3cHg7IG1hcmdpbi10b3A6MXB4OyBmb250LXNpemU6NHB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjojZmZjZjcwOyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxuLmNsb3NlLWludiB7IHdpZHRoOjcycHg7IGhlaWdodDoyMnB4OyBtYXJnaW4tdG9wOjhweDsgYm9yZGVyLXJhZGl1czo1cHg7IGJhY2tncm91bmQtY29sb3I6IzhiM2QzZDsgZm9udC1zaXplOjZweDsgZm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6I2ZmZmZmZjsgfVxuLmNoZXN0IHsgd2lkdGg6MTA2cHg7IGhlaWdodDoyNjBweDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IzEwMTgyMDsgfVxuLmNoZXN0LXNsb3QgeyB3aWR0aDo3NHB4OyBoZWlnaHQ6MzhweDsgbWFyZ2luLXRvcDoxMnB4OyBib3JkZXItcmFkaXVzOjVweDsgYmFja2dyb3VuZC1jb2xvcjojNWIzYTIwOyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgfVxuLmNoZXN0LWJsb2NrIHsgZm9udC1zaXplOjdweDsgY29sb3I6I2ZmZmZmZjsgZm9udC13ZWlnaHQ6Ym9sZDsgfVxuLmNoZXN0LWNvdW50IHsgZm9udC1zaXplOjEwcHg7IGNvbG9yOiNmZmNmNzA7IG1hcmdpbi10b3A6M3B4OyB9XG4uY2hlc3Qtcm93IHsgd2lkdGg6MTA0cHg7IGhlaWdodDoyNHB4OyBtYXJnaW4tdG9wOjEwcHg7IGZsZXgtZGlyZWN0aW9uOnJvdzsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYWxpZ24taXRlbXM6Y2VudGVyOyB9XG4uY2hlc3QtYnRuIHsgd2lkdGg6NDJweDsgaGVpZ2h0OjIwcHg7IG1hcmdpbi1sZWZ0OjJweDsgbWFyZ2luLXJpZ2h0OjJweDsgYm9yZGVyLXJhZGl1czo0cHg7IGJhY2tncm91bmQtY29sb3I6IzhiNWEyYjsgZm9udC1zaXplOjVweDsgY29sb3I6I2ZmZmZmZjsgZm9udC13ZWlnaHQ6Ym9sZDsgfVxuLmNoZXN0LWhpbnQgeyB3aWR0aDoxMDBweDsgaGVpZ2h0OjEycHg7IG1hcmdpbi10b3A6NnB4OyBmb250LXNpemU6NHB4OyBjb2xvcjojOWZiN2M2OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxuLmdhbWUgeyB3aWR0aDoxMDZweDsgaGVpZ2h0OjI2MHB4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjojMTAxODIwOyB9XG4uaHVkIHsgd2lkdGg6MTA2cHg7IGhlaWdodDoxM3B4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjojMTcyMzJkOyB9XG4udGl0bGUgeyBmb250LXNpemU6OHB4OyBmb250LXdlaWdodDpib2xkOyBjb2xvcjojZmZmZmZmOyB9XG4uaHVkLWxpbmUgeyBmb250LXNpemU6NXB4OyBjb2xvcjojZDllMmU4OyBtYXJnaW4tdG9wOjFweDsgfVxuLndvcmxkIHsgd2lkdGg6OTZweDsgaGVpZ2h0OjEzMnB4OyBmbGV4LWRpcmVjdGlvbjpyb3c7IGZsZXgtd3JhcDp3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBiYWNrZ3JvdW5kLWNvbG9yOiM3OGI2ZTg7IH1cbi5jZWxsIHsgdGV4dC1hbGlnbjpjZW50ZXI7IGZvbnQtd2VpZ2h0OmJvbGQ7IGZvbnQtc2l6ZTo1cHg7IH1cbi5zdGF0dXMgeyB3aWR0aDoxMDRweDsgaGVpZ2h0OjEwcHg7IGZvbnQtc2l6ZTo1cHg7IGNvbG9yOiNmZmZmZmY7IHRleHQtYWxpZ246Y2VudGVyOyBiYWNrZ3JvdW5kLWNvbG9yOiMxNzIzMmQ7IH1cbi5jb250cm9scy1yb3csLmJsb2Nrcy1yb3cgeyB3aWR0aDoxMDRweDsgaGVpZ2h0OjE5cHg7IGZsZXgtZGlyZWN0aW9uOnJvdzsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYWxpZ24taXRlbXM6Y2VudGVyOyB9XG4uY29udHJvbCB7IHdpZHRoOjMzcHg7IGhlaWdodDoxN3B4OyBtYXJnaW4tbGVmdDoxcHg7IG1hcmdpbi1yaWdodDoxcHg7IGJvcmRlci1yYWRpdXM6M3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiMzNDQ5NTU7IGZvbnQtc2l6ZTo1cHg7IGNvbG9yOiNmZmZmZmY7IH1cbi5ibG9jay1idG4geyB3aWR0aDoyNXB4OyBoZWlnaHQ6MTdweDsgbWFyZ2luLWxlZnQ6MXB4OyBtYXJnaW4tcmlnaHQ6MXB4OyBib3JkZXItcmFkaXVzOjJweDsgYmFja2dyb3VuZC1jb2xvcjojMjUzMjNiOyBmb250LXNpemU6NHB4OyBjb2xvcjojZmZmZmZmOyB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93IiwiQ09MUyIsIlJPV1MiLCJXT1JMRF9XIiwiV09STERfSCIsIlpPT01fTEVWRUxTIiwiU0tZIiwiSElHSF9DT05UUkFTVF9DT0xPUlMiLCJncmFzcyIsImRpcnQiLCJzdG9uZSIsImJlZHJvY2siLCJ3b29kIiwibGVhZiIsImNvYWwiLCJpcm9uIiwiZ29sZCIsImRpYW1vbmQiLCJzYW5kIiwiZ2xhc3MiLCJicmljayIsIm5ldGhlcnJhY2siLCJzb3VsU2FuZCIsImdsb3dzdG9uZSIsIm5ldGhlckJyaWNrIiwicXVhcnR6T3JlIiwiYmxhY2tzdG9uZSIsImVuZFN0b25lIiwib2JzaWRpYW4iLCJwdXJwdXIiLCJjaG9ydXNQbGFudCIsImVuZEJyaWNrIiwiZW5kT3JlIiwid2F0ZXIiLCJ0b3JjaCIsImNoZXN0IiwiY3JhZnRpbmdUYWJsZSIsIm1ha2VUaWxlIiwieCIsInkiLCJ0eXBlIiwiZmxhdFRlcnJhaW5Xb3JsZCIsInNlZWQiLCJ3b3JsZCIsImhlaWdodHMiLCJwcm9maWxlIiwibGVuZ3RoIiwic3VyZmFjZSIsInB1c2giLCJwdXQiLCJweCIsInB5IiwidCIsImN4IiwicyIsImxha2VYIiwibGFrZVkiLCJNYXRoIiwibWluIiwidHJlZVhzIiwiaSIsInR4Iiwic3kiLCJjcmVhdGVXb3JsZCIsImNyZWF0ZUhvdXNlV29ybGQiLCJjcmVhdGVWaWxsYWdlV29ybGQiLCJob3VzZSIsImh4IiwiaHkiLCJjcmVhdGVNaW5lV29ybGQiLCJjcmVhdGVJc2xhbmRXb3JsZCIsImNyZWF0ZU5ldGhlcldvcmxkIiwiY3JlYXRlRW5kV29ybGQiLCJpc1NvbGlkIiwicGxhY2VhYmxlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsInByaXZhdGUiLCJ2aXNpYmxlV29ybGQiLCJ2aXNpYmxlQW5pbWF0aW9uTWFzayIsInBsYXllclgiLCJwbGF5ZXJZIiwicGxheWVyVnkiLCJzZWxlY3RlZFgiLCJzZWxlY3RlZFkiLCJzZWxlY3RlZEJsb2NrIiwibW9kZSIsInN0YXR1cyIsImh1ZExpbmUiLCJsb2FkaW5nIiwibG9hZGluZ1Byb2dyZXNzIiwibG9hZGluZ0xhYmVsIiwibG9hZGluZ0Rpc3BsYXkiLCJtZW51RGlzcGxheSIsInNldHRpbmdzRGlzcGxheSIsImdhbWVEaXNwbGF5IiwiaW52ZW50b3J5RGlzcGxheSIsImNoZXN0RGlzcGxheSIsImV4dHJhRGlzcGxheSIsIndvcmxkc0Rpc3BsYXkiLCJ2aWN0b3J5RGlzcGxheSIsInNsb3RzQ29uZmlybURpc3BsYXkiLCJjcmFmdERpc3BsYXkiLCJ3b3JrYmVuY2hEaXNwbGF5IiwibWFwRGlzcGxheSIsInRvb2xzRGlzcGxheSIsInF1ZXN0c0Rpc3BsYXkiLCJhY2hpZXZlbWVudHNEaXNwbGF5IiwibG9hZGluZ1RpbWVyIiwiZ2FtZVRpbWVyIiwiZGF5VGltZXIiLCJkYXlQaGFzZSIsImRheVN0YWdlIiwiZGF5TmlnaHRFbmFibGVkIiwiZGF5TmlnaHRMYWJlbCIsImN1cnJlbnRTbG90Iiwic2xvdE1lbnVEaXNwbGF5Iiwiem9vbUluZGV4IiwiY3VycmVudERpbWVuc2lvbiIsIm5vcm1hbERpbWVuc2lvblN0YXRlIiwibmV0aGVyRGltZW5zaW9uU3RhdGUiLCJlbmREaW1lbnNpb25TdGF0ZSIsImxhc3ROb3JtYWxTbG90Iiwibm9ybWFsTWluZWRUb3RhbCIsIm5ldGhlck1pbmVkVG90YWwiLCJlbmRNaW5lZFRvdGFsIiwiZW5kV2luVGFyZ2V0IiwiZW5kV2luTGFiZWwiLCJuZXRoZXJVbmxvY2tUYXJnZXQiLCJuZXRoZXJVbmxvY2tMYWJlbCIsIm5ldGhlclByb2dyZXNzTGFiZWwiLCJ3b3JsZHNOZXRoZXJMYWJlbCIsIndvcmxkc05ldGhlclN0eWxlIiwiZW5kVW5sb2NrVGFyZ2V0IiwiZW5kVW5sb2NrTGFiZWwiLCJlbmRQcm9ncmVzc0xhYmVsIiwid29ybGRzRW5kTGFiZWwiLCJ3b3JsZHNFbmRTdHlsZSIsIm5ldGhlckludmVudG9yeURpc3BsYXkiLCJuZXRoZXJJbnZlbnRvcnlMYWJlbCIsImVuZEludmVudG9yeURpc3BsYXkiLCJlbmRJbnZlbnRvcnlMYWJlbCIsImNoZXN0U3RvcmFnZSIsImN1cnJlbnRDaGVzdEtleSIsInNldHRpbmdzU2VjdGlvbiIsInNldHRpbmdzU2VjdGlvblRpdGxlIiwic2V0dGluZ3NNYWluRGlzcGxheSIsInNldHRpbmdzRGlzcGxheVNlY3Rpb25EaXNwbGF5Iiwic2V0dGluZ3NDb250cm9sc1NlY3Rpb25EaXNwbGF5Iiwic2V0dGluZ3NHYW1lU2VjdGlvbkRpc3BsYXkiLCJzZXR0aW5nc0dyYXBoaWNzU2VjdGlvbkRpc3BsYXkiLCJzZXR0aW5nc0FjY2Vzc2liaWxpdHlTZWN0aW9uRGlzcGxheSIsInNob3dHcmlkIiwiYmxvY2tPdXRsaW5lIiwiem9vbURlZmF1bHRJbmRleCIsImF1dG9KdW1wIiwiY29uZmlybVJlc2V0IiwicmVzZXRBcm1lZCIsInBhdXNlTWVudXMiLCJjcmFmdGluZ1RhYmxlQnV0dG9uRGlzcGxheSIsIndvcmtiZW5jaFN0YXR1cyIsIndvcmxkQW5pbWF0aW9uIiwid2F0ZXJBbmltYXRpb24iLCJsZWFmQW5pbWF0aW9uIiwibmlnaHREYXJrbmVzcyIsImFuaW1hdGlvbkZyYW1lIiwid2VhdGhlckVuYWJsZWQiLCJ3ZWF0aGVyU3RhZ2UiLCJ3ZWF0aGVyVGljayIsInNreVRleHQiLCJ3ZWF0aGVyTGFiZWwiLCJ3ZWF0aGVyQ3ljbGUiLCJjbG91ZFRleHQiLCJzaG93R3JpZExhYmVsIiwiYmxvY2tPdXRsaW5lTGFiZWwiLCJ6b29tRGVmYXVsdExhYmVsIiwiYXV0b0p1bXBMYWJlbCIsImNvbmZpcm1SZXNldExhYmVsIiwicGF1c2VNZW51c0xhYmVsIiwid29ybGRBbmltYXRpb25MYWJlbCIsIndhdGVyQW5pbWF0aW9uTGFiZWwiLCJsZWFmQW5pbWF0aW9uTGFiZWwiLCJuaWdodERhcmtuZXNzTGFiZWwiLCJjb250cm9sU3R5bGUiLCJjb250cm9sc1Jvd1N0eWxlIiwiaW52ZW50b3J5IiwidG9vbFR5cGUiLCJ0b29sTGFiZWwiLCJwaWNrYXhlRHVyYWJpbGl0eSIsImF4ZUR1cmFiaWxpdHkiLCJ4cCIsImxldmVsIiwidG90YWxNaW5lZCIsInRvdGFsUGxhY2VkIiwiZm91bmRJcm9uIiwiZm91bmREaWFtb25kIiwicXVlc3RUZXh0IiwiYWNoaWV2ZW1lbnRUZXh0IiwibWFwVGV4dCIsImhpZ2hDb250cmFzdCIsImxhcmdlT3V0bGluZSIsImxhcmdlVGV4dCIsImhpZ2hDb250cmFzdExhYmVsIiwibGFyZ2VPdXRsaW5lTGFiZWwiLCJsYXJnZVRleHRMYWJlbCIsImluaXRDaGVzdFN0b3JhZ2UiLCJ0aWxlIiwib25Jbml0IiwicmVmcmVzaFZpZXciLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJvbkRlc3Ryb3kiLCJzdGFydEdhbWUiLCJvcGVuU2V0dGluZ3MiLCJiYWNrU2V0dGluZ3NNYWluIiwiY2xvc2VTZXR0aW5ncyIsInNldFNldHRpbmdzU2VjdGlvbiIsInNlY3Rpb24iLCJ0aXRsZSIsIm9wZW5TZXR0aW5nc0Rpc3BsYXkiLCJvcGVuU2V0dGluZ3NDb250cm9scyIsIm9wZW5TZXR0aW5nc0dhbWUiLCJvcGVuU2V0dGluZ3NHcmFwaGljcyIsIm9wZW5TZXR0aW5nc0FjY2Vzc2liaWxpdHkiLCJ0b2dnbGVEYXlOaWdodCIsImFkdmFuY2VEYXlOaWdodCIsInRvZ2dsZUdyaWQiLCJ0b2dnbGVCbG9ja091dGxpbmUiLCJjeWNsZURlZmF1bHRab29tIiwidG9nZ2xlQXV0b0p1bXAiLCJ0b2dnbGVDb25maXJtUmVzZXQiLCJ0b2dnbGVQYXVzZU1lbnVzIiwiY3ljbGVOZXRoZXJVbmxvY2siLCJ2YWx1ZXMiLCJpbmRleE9mIiwidXBkYXRlTmV0aGVyTG9ja0xhYmVsIiwiY3ljbGVFbmRVbmxvY2siLCJ1cGRhdGVFbmRMb2NrTGFiZWwiLCJjeWNsZUVuZFdpblRhcmdldCIsInRvZ2dsZVdvcmxkQW5pbWF0aW9uIiwidG9nZ2xlV2F0ZXJBbmltYXRpb24iLCJ0b2dnbGVMZWFmQW5pbWF0aW9uIiwicmVzdGFydEdhbWVUaW1lciIsInRpY2siLCJjeWNsZU5pZ2h0RGFya25lc3MiLCJ0b2dnbGVXZWF0aGVyIiwidG9nZ2xlSGlnaENvbnRyYXN0IiwidG9nZ2xlTGFyZ2VPdXRsaW5lIiwidG9nZ2xlTGFyZ2VUZXh0Iiwic2VsZWN0U2xvdDEiLCJzZWxlY3RTbG90Iiwic2VsZWN0U2xvdDIiLCJzZWxlY3RTbG90MyIsInNlbGVjdFNsb3Q0Iiwic2VsZWN0U2xvdDUiLCJzbG90Iiwib3BlbkV4dHJhIiwiY2xvc2VFeHRyYSIsImNsb25lV29ybGQiLCJvdXQiLCJjbG9uZUNoZXN0U3RvcmFnZSIsInN0b3JhZ2UiLCJrZXlzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2FwdHVyZURpbWVuc2lvblN0YXRlIiwicmVzdG9yZURpbWVuc2lvblN0YXRlIiwic3RhdGUiLCJ1bmRlZmluZWQiLCJ1bmxvY2tlZCIsIm1heCIsIm9wZW5Xb3JsZHMiLCJjbG9zZVdvcmxkcyIsInNhdmVDdXJyZW50RGltZW5zaW9uU3RhdGUiLCJ1cGRhdGVJbnZlbnRvcnlTZWN0aW9ucyIsInN3aXRjaFRvTm9ybWFsV29ybGQiLCJzd2l0Y2hUb05ldGhlcldvcmxkIiwic3dpdGNoVG9FbmRXb3JsZCIsImZpbmlzaEdhbWUiLCJvcGVuTWFwIiwidXBkYXRlTWFwIiwiY2xvc2VNYXAiLCJvcGVuVG9vbHMiLCJjbG9zZVRvb2xzIiwib3BlblF1ZXN0cyIsInVwZGF0ZUdvYWxzIiwiY2xvc2VRdWVzdHMiLCJvcGVuQWNoaWV2ZW1lbnRzIiwiY2xvc2VBY2hpZXZlbWVudHMiLCJvcGVuQ3JhZnQiLCJjcmFmdFN0YXR1cyIsImNsb3NlQ3JhZnQiLCJjcmFmdENyYWZ0aW5nVGFibGUiLCJpbnYiLCJvcGVuV29ya2JlbmNoQXQiLCJjbG9zZVdvcmtiZW5jaCIsInJlcGFpclBpY2theGVXb29kIiwicmVwYWlyUGlja2F4ZVN0b25lIiwicmVwYWlyUGlja2F4ZUlyb24iLCJyZXBhaXJBeGVXb29kIiwicmVwYWlyQXhlU3RvbmUiLCJyZXBhaXJBeGVJcm9uIiwiY3JhZnRHbGFzcyIsImNyYWZ0QnJpY2siLCJjcmFmdFRvcmNoIiwiY3JhZnRDaGVzdCIsInNlbGVjdFBpY2theGUiLCJzZWxlY3RBeGUiLCJzZWxlY3RIYW5kIiwicmVxdWlyZWRUb29sIiwidXNlVG9vbCIsInRvb2wiLCJnYWluWHAiLCJhbW91bnQiLCJyYWRpdXNYIiwicmFkaXVzWSIsInl5IiwieHgiLCJ0eSIsImNoIiwidGlsZUF0IiwiYmFja1RvU2xvdHMiLCJjb25maXJtQmFja1RvU2xvdHMiLCJjYW5jZWxCYWNrVG9TbG90cyIsIm9wZW5JbnZlbnRvcnkiLCJjbG9zZUludmVudG9yeSIsInRvZ2dsZU5ldGhlckludmVudG9yeSIsIm9wZW5pbmciLCJ0b2dnbGVFbmRJbnZlbnRvcnkiLCJvcGVuQ2hlc3RBdCIsImtleSIsImNsb3NlQ2hlc3QiLCJjaGVzdENvdW50Iiwic2VsZWN0ZWRDb3VudFRleHQiLCJzdG9yZUluQ2hlc3QiLCJ0b1VwcGVyQ2FzZSIsInRha2VGcm9tQ2hlc3QiLCJzZWxlY3REaXJ0RnJvbUludmVudG9yeSIsInNlbGVjdERpcnQiLCJzZWxlY3RTdG9uZUZyb21JbnZlbnRvcnkiLCJzZWxlY3RTdG9uZSIsInNlbGVjdFdvb2RGcm9tSW52ZW50b3J5Iiwic2VsZWN0V29vZCIsInNlbGVjdExlYWZGcm9tSW52ZW50b3J5Iiwic2VsZWN0TGVhZiIsInNlbGVjdFNhbmRGcm9tSW52ZW50b3J5Iiwic2VsZWN0U2FuZCIsInNlbGVjdEdsYXNzRnJvbUludmVudG9yeSIsInNlbGVjdEdsYXNzIiwic2VsZWN0QnJpY2tGcm9tSW52ZW50b3J5Iiwic2VsZWN0QnJpY2siLCJzZWxlY3RUb3JjaEZyb21JbnZlbnRvcnkiLCJzZWxlY3RUb3JjaCIsInNlbGVjdFdhdGVyRnJvbUludmVudG9yeSIsInNlbGVjdFdhdGVyIiwic2VsZWN0Q2hlc3RGcm9tSW52ZW50b3J5Iiwic2VsZWN0Q2hlc3QiLCJzZWxlY3RDcmFmdGluZ1RhYmxlRnJvbUludmVudG9yeSIsInNlbGVjdENvYWxGcm9tSW52ZW50b3J5Iiwic2VsZWN0Q29hbCIsInNlbGVjdElyb25Gcm9tSW52ZW50b3J5Iiwic2VsZWN0SXJvbiIsInNlbGVjdEdvbGRGcm9tSW52ZW50b3J5Iiwic2VsZWN0RGlhbW9uZEZyb21JbnZlbnRvcnkiLCJzZWxlY3ROZXRoZXJyYWNrRnJvbUludmVudG9yeSIsInNlbGVjdFNvdWxTYW5kRnJvbUludmVudG9yeSIsInNlbGVjdEdsb3dzdG9uZUZyb21JbnZlbnRvcnkiLCJzZWxlY3ROZXRoZXJCcmlja0Zyb21JbnZlbnRvcnkiLCJzZWxlY3RRdWFydHpPcmVGcm9tSW52ZW50b3J5Iiwic2VsZWN0QmxhY2tzdG9uZUZyb21JbnZlbnRvcnkiLCJzZWxlY3RFbmRTdG9uZUZyb21JbnZlbnRvcnkiLCJzZWxlY3RPYnNpZGlhbkZyb21JbnZlbnRvcnkiLCJzZWxlY3RQdXJwdXJGcm9tSW52ZW50b3J5Iiwic2VsZWN0Q2hvcnVzUGxhbnRGcm9tSW52ZW50b3J5Iiwic2VsZWN0RW5kQnJpY2tGcm9tSW52ZW50b3J5Iiwic2VsZWN0RW5kT3JlRnJvbUludmVudG9yeSIsImdldERheVN0YWdlIiwicGhhc2UiLCJuZXh0IiwiZ2V0Vmlld0NvbHMiLCJmbG9vciIsImdldFZpZXdSb3dzIiwiZ2V0VGlsZVB4IiwiY2xhbXAiLCJ2Iiwic29saWRBdCIsImdldENhbWVyYVgiLCJjb2xzIiwiZ2V0Q2FtZXJhWSIsInJvd3MiLCJjb2xvciIsIm5pZ2h0IiwiZGFyayIsImJyaWdodE5pZ2h0Iiwiem9vbUxhYmVsIiwic3giLCJyZXN1bHQiLCJjb2xvckNhY2hlIiwic3R5bGVDYWNoZSIsImJnIiwiY2hhciIsImJvcmRlciIsInN0eWxlIiwic3R5bGVLZXkiLCJyb3dTdGFydCIsImJ3IiwiZnMiLCJhbmltYXRpb25NYXNrIiwidXNlT3V0bGluZSIsImlzUGxheWVyIiwib2xkWCIsIm9sZFkiLCJtb3ZlZCIsInJlZnJlc2hOZWVkZWQiLCJhbmltYXRlV29ybGQiLCJhbmltYXRlV2F0ZXIiLCJhbmltYXRlTGVhdmVzIiwibW92ZUxlZnQiLCJ0cnlNb3ZlIiwibW92ZVJpZ2h0IiwiZHgiLCJueCIsImp1bXAiLCJ0YXBDZWxsIiwiYWJzIiwibWluZWQiLCJuZWVkZWQiLCJpbnYyIiwic2V0TWluZU1vZGUiLCJzZXRQbGFjZU1vZGUiLCJ6b29tSW4iLCJ6b29tT3V0IiwiY2VudGVyQ2FtZXJhIiwicmV0dXJuVG9NYWluTWVudSIsInJlc2V0R2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLENBQUMsR0FBRyxBQUFDO3dCQUN4QixJQUFJLEFBQXNCLFlBQXRCLE9BQU9DLFlBQXlCLE9BQU9BO3dCQUMzQyxJQUFJOzRCQUNILE9BQU8sSUFBSSxJQUFJLElBQUlDLFNBQVM7d0JBQzdCLEVBQUUsT0FBT0MsR0FBRzs0QkFDWCxJQUFJLEFBQWtCLFlBQWxCLE9BQU9DLFFBQXFCLE9BQU9BO3dCQUN4QztvQkFDRDs7O29CQ1BBSixvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDOFEzQixJQUFJSyxPQUFPO29CQUNYLElBQUlDLE9BQU87b0JBQ1gsSUFBSUMsVUFBVTtvQkFDZCxJQUFJQyxVQUFVO29CQUNkLElBQUlDLGNBQWM7d0JBQUM7d0JBQUk7d0JBQUk7cUJBQUc7b0JBQzlCLElBQUlDLE1BQU07b0JBQ1YsSUFBSUMsdUJBQXVCO3dCQUN6QkMsT0FBTTt3QkFBVUMsTUFBSzt3QkFBVUMsT0FBTTt3QkFBVUMsU0FBUTt3QkFBVUMsTUFBSzt3QkFBVUMsTUFBSzt3QkFDckZDLE1BQUs7d0JBQVVDLE1BQUs7d0JBQVVDLE1BQUs7d0JBQVVDLFNBQVE7d0JBQVVDLE1BQUs7d0JBQVVDLE9BQU07d0JBQVVDLE9BQU07d0JBQ3BHQyxZQUFXO3dCQUFVQyxVQUFTO3dCQUFVQyxXQUFVO3dCQUFVQyxhQUFZO3dCQUFVQyxXQUFVO3dCQUFVQyxZQUFXO3dCQUNqSEMsVUFBUzt3QkFBVUMsVUFBUzt3QkFBVUMsUUFBTzt3QkFBVUMsYUFBWTt3QkFBVUMsVUFBUzt3QkFBVUMsUUFBTzt3QkFDdkdDLE9BQU07d0JBQVVDLE9BQU07d0JBQVVDLE9BQU07d0JBQVVDLGVBQWM7b0JBQ2hFO29CQUVBLFNBQVNDLFNBQVNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxJQUFJO3dCQUFJLE9BQU87NEJBQUVGLEdBQUVBOzRCQUFHQyxHQUFFQTs0QkFBR0MsTUFBS0E7d0JBQUs7b0JBQUU7b0JBRS9ELFNBQVNDLGlCQUFpQkMsSUFBSTt3QkFDNUIsSUFBSUMsUUFBTSxFQUFFO3dCQUNaLElBQUlDLFVBQVEsRUFBRTt3QkFDZCxJQUFJTixHQUFFQzt3QkFDTixJQUFJTSxVQUFROzRCQUFDOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHO3lCQUFHO3dCQUN6RSxJQUFJUCxJQUFFLEdBQUVBLElBQUVyQyxNQUFLcUMsSUFBS00sT0FBTyxDQUFDTixFQUFFLEdBQUNPLE9BQU8sQ0FBQyxBQUFDUCxDQUFBQSxJQUFFSSxJQUFHLElBQUdHLFFBQVFDLE1BQU0sQ0FBQzt3QkFDL0QsSUFBSVAsSUFBRSxHQUFFQSxJQUFFckMsTUFBS3FDLElBQUssSUFBSUQsSUFBRSxHQUFFQSxJQUFFckMsTUFBS3FDLElBQUk7NEJBQ3JDLElBQUlTLFVBQVFILE9BQU8sQ0FBQ04sRUFBRSxFQUFFRSxPQUFLOzRCQUM3QixJQUFHRCxNQUFJUSxTQUFTUCxPQUFLO2lDQUNoQixJQUFHRCxJQUFFUSxXQUFXUixLQUFHUSxVQUFRLEdBQUdQLE9BQUs7aUNBQ25DLElBQUdELElBQUVRLFVBQVEsR0FBRTtnQ0FDbEJQLE9BQUtELE1BQUlyQyxPQUFLLElBQUUsWUFBVTtnQ0FDMUIsSUFBR3FDLElBQUVRLFVBQVEsS0FBTSxBQUFDVCxDQUFBQSxBQUFFLEtBQUZBLElBQUtDLEFBQUUsSUFBRkEsSUFBSUcsSUFBRyxJQUFHLE9BQUssR0FBSUYsT0FBSztnQ0FDakQsSUFBR0QsSUFBRVEsVUFBUSxNQUFPLEFBQUNULENBQUFBLEFBQUUsSUFBRkEsSUFBSUMsQUFBRSxLQUFGQSxJQUFLRyxJQUFHLElBQUcsT0FBSyxHQUFJRixPQUFLO2dDQUNsRCxJQUFHRCxJQUFFUSxVQUFRLE1BQU8sQUFBQ1QsQ0FBQUEsQUFBRSxLQUFGQSxJQUFLQyxBQUFFLElBQUZBLElBQUlHLElBQUcsSUFBRyxPQUFLLEdBQUlGLE9BQUs7Z0NBQ2xELElBQUdELElBQUVRLFVBQVEsTUFBTyxBQUFDVCxDQUFBQSxBQUFFLEtBQUZBLElBQUtDLEFBQUUsSUFBRkEsSUFBSUcsSUFBRyxJQUFHLE9BQUssR0FBSUYsT0FBSzs0QkFDcEQ7NEJBQ0FHLE1BQU1LLElBQUksQ0FBQ1gsU0FBU0MsR0FBRUMsR0FBRUM7d0JBQzFCO3dCQUNBLFNBQVNTLElBQUlDLEVBQUUsRUFBQ0MsRUFBRSxFQUFDQyxDQUFDOzRCQUFFLElBQUdGLEtBQUcsS0FBR0EsTUFBSWpELFFBQU1rRCxLQUFHLEtBQUdBLE1BQUlqRCxNQUFLOzRCQUFPeUMsS0FBSyxDQUFDUSxLQUFHbEQsT0FBS2lELEdBQUcsR0FBQ2IsU0FBU2EsSUFBR0MsSUFBR0M7d0JBQUU7d0JBRWxHLElBQUksSUFBSUMsS0FBRyxHQUFFQSxLQUFHcEQsT0FBSyxHQUFFb0QsS0FBSzs0QkFDMUIsSUFBSUMsSUFBRVYsT0FBTyxDQUFDUyxHQUFHOzRCQUNqQixJQUFJLEFBQUNBLENBQUFBLEFBQUcsSUFBSEEsS0FBS1gsSUFBRyxJQUFHLE1BQUssR0FBRTtnQ0FBRU8sSUFBSUksSUFBR0MsSUFBRSxHQUFFO2dDQUFRTCxJQUFJSSxLQUFHLEdBQUVDLElBQUUsR0FBRTtnQ0FBUUwsSUFBSUksSUFBR0MsSUFBRSxHQUFFOzRCQUFPO3dCQUNyRjt3QkFFQSxJQUFHWixBQUFPLE1BQVBBLE1BQVM7NEJBQ1YsSUFBSWEsUUFBTSxJQUFJYixBQUFLLElBQUxBLE9BQVE7NEJBQ3RCLElBQUljLFFBQU1aLE9BQU8sQ0FBQ2EsS0FBS0MsR0FBRyxDQUFDekQsT0FBSyxHQUFFc0QsT0FBTzs0QkFDekNOLElBQUlNLE9BQU1DLE9BQU07NEJBQVVQLElBQUlNLFFBQU0sR0FBRUMsT0FBTTs0QkFBVVAsSUFBSU0sUUFBTSxHQUFFQyxPQUFNOzRCQUN4RVAsSUFBSU0sUUFBTSxHQUFFQyxRQUFNLEdBQUU7d0JBQ3RCO3dCQUVBLElBQUlHLFNBQU87NEJBQUM7NEJBQUU7NEJBQUU7NEJBQUc7eUJBQUc7d0JBQ3RCLElBQUksSUFBSUMsSUFBRSxHQUFFQSxJQUFFRCxPQUFPYixNQUFNLEVBQUNjLElBQUk7NEJBQzlCLElBQUlDLEtBQUdGLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFRSxLQUFHbEIsT0FBTyxDQUFDaUIsR0FBRyxHQUFDOzRCQUNqQ1osSUFBSVksSUFBR0MsSUFBRzs0QkFBU2IsSUFBSVksSUFBR0MsS0FBRyxHQUFFOzRCQUFTYixJQUFJWSxJQUFHQyxLQUFHLEdBQUU7NEJBQ3BEYixJQUFJWSxLQUFHLEdBQUVDLEtBQUcsR0FBRTs0QkFBU2IsSUFBSVksS0FBRyxHQUFFQyxLQUFHLEdBQUU7NEJBQVNiLElBQUlZLElBQUdDLEtBQUcsR0FBRTs0QkFDMURiLElBQUlZLEtBQUcsR0FBRUMsS0FBRyxHQUFFOzRCQUFTYixJQUFJWSxLQUFHLEdBQUVDLEtBQUcsR0FBRTt3QkFDdkM7d0JBQ0EsT0FBT25CO29CQUNUO29CQUVBLFNBQVNvQjt3QkFBYyxPQUFPdEIsaUJBQWlCO29CQUFFO29CQUVqRCxTQUFTdUI7d0JBQ1AsSUFBSXJCLFFBQU1GLGlCQUFpQixJQUFHUSxNQUFJLFNBQVNYLENBQUMsRUFBQ0MsQ0FBQyxFQUFDYSxDQUFDOzRCQUFFLElBQUdkLElBQUUsS0FBR0EsS0FBR3JDLFFBQU1zQyxJQUFFLEtBQUdBLEtBQUdyQyxNQUFLOzRCQUFPeUMsS0FBSyxDQUFDSixJQUFFdEMsT0FBS3FDLEVBQUUsR0FBQ0QsU0FBU0MsR0FBRUMsR0FBRWE7d0JBQUU7d0JBRXRILElBQUksSUFBSWQsSUFBRSxHQUFFQSxLQUFHLElBQUdBLElBQUk7NEJBQUNXLElBQUlYLEdBQUUsSUFBRzs0QkFBU1csSUFBSVgsR0FBRSxJQUFHOzRCQUFRVyxJQUFJWCxHQUFFLElBQUc7d0JBQU87d0JBQzFFLElBQUlBLElBQUUsR0FBRUEsS0FBRyxJQUFHQSxJQUFJOzRCQUFDVyxJQUFJWCxHQUFFLElBQUc7NEJBQVFXLElBQUlYLEdBQUUsR0FBRTt3QkFBUTt3QkFDcEQsSUFBSSxJQUFJQyxJQUFFLEdBQUVBLEtBQUcsSUFBR0EsSUFBSTs0QkFBQ1UsSUFBSSxHQUFFVixHQUFFOzRCQUFRVSxJQUFJLElBQUdWLEdBQUU7d0JBQU87d0JBQ3ZEVSxJQUFJLEdBQUUsSUFBRzt3QkFBVUEsSUFBSSxJQUFHLElBQUc7d0JBQVVBLElBQUksR0FBRSxJQUFHO3dCQUFRQSxJQUFJLEdBQUUsSUFBRzt3QkFDakVBLElBQUksR0FBRSxJQUFHO3dCQUFVQSxJQUFJLEdBQUUsR0FBRTt3QkFBVUEsSUFBSSxJQUFHLEdBQUU7d0JBRTlDQSxJQUFJLEdBQUUsR0FBRTt3QkFBVUEsSUFBSSxHQUFFLEdBQUU7d0JBQVVBLElBQUksR0FBRSxHQUFFO3dCQUFVQSxJQUFJLEdBQUUsR0FBRTt3QkFBVUEsSUFBSSxJQUFHLEdBQUU7d0JBQVVBLElBQUksSUFBRyxHQUFFO3dCQUFVQSxJQUFJLElBQUcsR0FBRTt3QkFDdkgsT0FBT047b0JBQ1Q7b0JBRUEsU0FBU3NCO3dCQUNQLElBQUl0QixRQUFNRixpQkFBaUIsSUFBR1EsTUFBSSxTQUFTWCxDQUFDLEVBQUNDLENBQUMsRUFBQ2EsQ0FBQzs0QkFBRSxJQUFHZCxJQUFFLEtBQUdBLEtBQUdyQyxRQUFNc0MsSUFBRSxLQUFHQSxLQUFHckMsTUFBSzs0QkFBT3lDLEtBQUssQ0FBQ0osSUFBRXRDLE9BQUtxQyxFQUFFLEdBQUNELFNBQVNDLEdBQUVDLEdBQUVhO3dCQUFFO3dCQUN0SCxJQUFJLElBQUlkLElBQUUsR0FBRUEsS0FBRyxJQUFHQSxJQUFJOzRCQUFDVyxJQUFJWCxHQUFFLElBQUc7NEJBQVNXLElBQUlYLEdBQUUsSUFBRzs0QkFBUVcsSUFBSVgsR0FBRSxJQUFHO3dCQUFPO3dCQUMxRSxTQUFTNEIsTUFBTWIsRUFBRTs0QkFDZixJQUFJLElBQUljLEtBQUdkLEtBQUcsR0FBRWMsTUFBSWQsS0FBRyxHQUFFYyxLQUFLO2dDQUFDbEIsSUFBSWtCLElBQUcsSUFBRztnQ0FBU2xCLElBQUlrQixJQUFHLEdBQUU7NEJBQVE7NEJBQ25FLElBQUksSUFBSUMsS0FBRyxHQUFFQSxNQUFJLElBQUdBLEtBQUs7Z0NBQUNuQixJQUFJSSxLQUFHLEdBQUVlLElBQUc7Z0NBQVNuQixJQUFJSSxLQUFHLEdBQUVlLElBQUc7NEJBQVE7NEJBQ25FbkIsSUFBSUksSUFBRyxJQUFHOzRCQUFTSixJQUFJSSxJQUFHLElBQUc7NEJBQU9KLElBQUlJLElBQUcsSUFBRzs0QkFBU0osSUFBSUksS0FBRyxHQUFFLEdBQUU7NEJBQVNKLElBQUlJLEtBQUcsR0FBRSxHQUFFO3dCQUN4Rjt3QkFDQWEsTUFBTTt3QkFBR0EsTUFBTTt3QkFDZixJQUFJNUIsSUFBRSxHQUFFQSxLQUFHLElBQUdBLElBQUlXLElBQUlYLEdBQUUsSUFBRzt3QkFDM0JXLElBQUksSUFBRyxJQUFHO3dCQUFTQSxJQUFJLElBQUcsSUFBRzt3QkFDN0IsT0FBT047b0JBQ1Q7b0JBRUEsU0FBUzBCO3dCQUNQLElBQUkxQixRQUFNRixpQkFBaUIsSUFBR1EsTUFBSSxTQUFTWCxDQUFDLEVBQUNDLENBQUMsRUFBQ2EsQ0FBQzs0QkFBRSxJQUFHZCxJQUFFLEtBQUdBLEtBQUdyQyxRQUFNc0MsSUFBRSxLQUFHQSxLQUFHckMsTUFBSzs0QkFBT3lDLEtBQUssQ0FBQ0osSUFBRXRDLE9BQUtxQyxFQUFFLEdBQUNELFNBQVNDLEdBQUVDLEdBQUVhO3dCQUFFO3dCQUV0SCxJQUFJLElBQUliLElBQUUsR0FBRUEsS0FBRyxJQUFHQSxJQUFJOzRCQUFDVSxJQUFJLEdBQUVWLEdBQUU7NEJBQU9VLElBQUksSUFBR1YsR0FBRTt3QkFBTTt3QkFDckQsSUFBSSxJQUFJRCxJQUFFLEdBQUVBLEtBQUcsSUFBR0EsSUFBSVcsSUFBSVgsR0FBRSxJQUFHO3dCQUMvQlcsSUFBSSxHQUFFLEdBQUU7d0JBQVNBLElBQUksSUFBRyxJQUFHO3dCQUFTQSxJQUFJLEdBQUUsSUFBRzt3QkFBUUEsSUFBSSxJQUFHLElBQUc7d0JBQVFBLElBQUksR0FBRSxJQUFHO3dCQUFRQSxJQUFJLElBQUcsSUFBRzt3QkFBV0EsSUFBSSxHQUFFLElBQUc7d0JBQ3RILE9BQU9OO29CQUNUO29CQUVBLFNBQVMyQjt3QkFDUCxJQUFJM0IsUUFBTSxFQUFFLEVBQUNMLEdBQUVDO3dCQUNmLElBQUlBLElBQUUsR0FBRUEsSUFBRXJDLE1BQUtxQyxJQUFJLElBQUlELElBQUUsR0FBRUEsSUFBRXJDLE1BQUtxQyxJQUFJSyxNQUFNSyxJQUFJLENBQUNYLFNBQVNDLEdBQUVDLEdBQUU7d0JBQzlELFNBQVNVLElBQUlDLEVBQUUsRUFBQ0MsRUFBRSxFQUFDQyxDQUFDOzRCQUFFLElBQUdGLEtBQUcsS0FBR0EsTUFBSWpELFFBQU1rRCxLQUFHLEtBQUdBLE1BQUlqRCxNQUFLOzRCQUFPeUMsS0FBSyxDQUFDUSxLQUFHbEQsT0FBS2lELEdBQUcsR0FBQ2IsU0FBU2EsSUFBR0MsSUFBR0M7d0JBQUU7d0JBQ2xHLElBQUlkLElBQUUsR0FBRUEsS0FBRyxJQUFHQSxJQUFJLElBQUlDLElBQUUsSUFBR0EsS0FBRyxJQUFHQSxJQUFJVSxJQUFJWCxHQUFFQyxHQUFHQSxBQUFJLE9BQUpBLElBQVEsVUFBU0EsS0FBRyxLQUFHLFVBQVE7d0JBQzdFLElBQUlELElBQUUsR0FBRUEsS0FBRyxJQUFHQSxJQUFJVyxJQUFJWCxHQUFFLElBQUc7d0JBQzNCVyxJQUFJLEdBQUUsSUFBRzt3QkFBUUEsSUFBSSxHQUFFLElBQUc7d0JBQVFBLElBQUksR0FBRSxJQUFHO3dCQUFRQSxJQUFJLEdBQUUsSUFBRzt3QkFBUUEsSUFBSSxHQUFFLEdBQUU7d0JBQzVFQSxJQUFJLElBQUcsSUFBRzt3QkFBU0EsSUFBSSxJQUFHLElBQUc7d0JBQVFBLElBQUksSUFBRyxJQUFHO3dCQUFRQSxJQUFJLElBQUcsSUFBRzt3QkFDakUsT0FBT047b0JBQ1Q7b0JBRUEsU0FBUzRCO3dCQUNQLElBQUk1QixRQUFNLEVBQUUsRUFBQ0wsR0FBRUM7d0JBQ2YsU0FBU1UsSUFBSUMsRUFBRSxFQUFDQyxFQUFFLEVBQUNDLENBQUM7NEJBQUUsSUFBR0YsS0FBRyxLQUFHQSxNQUFJakQsUUFBTWtELEtBQUcsS0FBR0EsTUFBSWpELE1BQUs7NEJBQU95QyxLQUFLLENBQUNRLEtBQUdsRCxPQUFLaUQsR0FBRyxHQUFDYixTQUFTYSxJQUFHQyxJQUFHQzt3QkFBRTt3QkFDbEcsSUFBSWIsSUFBRSxHQUFFQSxJQUFFckMsTUFBS3FDLElBQUksSUFBSUQsSUFBRSxHQUFFQSxJQUFFckMsTUFBS3FDLElBQUk7NEJBQ3BDLElBQUlFLE9BQUs7NEJBQ1QsSUFBR0QsS0FBRyxLQUFHQSxLQUFHLE1BQUlELEFBQUksTUFBSkEsS0FBT0EsTUFBSXJDLE9BQUssR0FBRXVDLE9BQUs7NEJBQ3ZDRyxNQUFNSyxJQUFJLENBQUNYLFNBQVNDLEdBQUVDLEdBQUVDO3dCQUMxQjt3QkFDQSxJQUFJRixJQUFFLEdBQUVBLEtBQUcsSUFBR0EsSUFBSTs0QkFBQ1csSUFBSVgsR0FBRSxJQUFHOzRCQUFjVyxJQUFJWCxHQUFFLElBQUc7NEJBQWNXLElBQUlYLEdBQUUsSUFBRzt3QkFBYTt3QkFDdkYsSUFBSUEsSUFBRSxHQUFFQSxLQUFHLEdBQUVBLElBQUlXLElBQUlYLEdBQUUsSUFBRzt3QkFDMUIsSUFBSUEsSUFBRSxJQUFHQSxLQUFHLElBQUdBLElBQUlXLElBQUlYLEdBQUUsSUFBRzt3QkFDNUIsSUFBSUMsSUFBRSxHQUFFQSxLQUFHLElBQUdBLElBQUk7NEJBQUNVLElBQUksR0FBRVYsR0FBRTs0QkFBY1UsSUFBSSxJQUFHVixHQUFFO3dCQUFhO3dCQUMvRFUsSUFBSSxHQUFFLEdBQUU7d0JBQWNBLElBQUksSUFBRyxHQUFFO3dCQUMvQkEsSUFBSSxHQUFFLEdBQUU7d0JBQWFBLElBQUksR0FBRSxHQUFFO3dCQUFhQSxJQUFJLEdBQUUsR0FBRTt3QkFBYUEsSUFBSSxHQUFFLEdBQUU7d0JBQ3ZFQSxJQUFJLElBQUcsR0FBRTt3QkFBYUEsSUFBSSxJQUFHLEdBQUU7d0JBQWFBLElBQUksSUFBRyxHQUFFO3dCQUNyREEsSUFBSSxHQUFFLElBQUc7d0JBQWFBLElBQUksR0FBRSxJQUFHO3dCQUFhQSxJQUFJLElBQUcsSUFBRzt3QkFBYUEsSUFBSSxJQUFHLElBQUc7d0JBQzdFLElBQUlYLElBQUUsR0FBRUEsS0FBRyxJQUFHQSxJQUFJOzRCQUFDVyxJQUFJWCxHQUFFLEdBQUU7NEJBQWVXLElBQUlYLEdBQUUsSUFBRzt3QkFBYzt3QkFDakVXLElBQUksR0FBRSxHQUFFO3dCQUFlQSxJQUFJLElBQUcsR0FBRTt3QkFDaENBLElBQUksR0FBRSxJQUFHO3dCQUFPQSxJQUFJLEdBQUUsSUFBRzt3QkFBT0EsSUFBSSxHQUFFLElBQUc7d0JBQU9BLElBQUksR0FBRSxJQUFHO3dCQUN6RCxPQUFPTjtvQkFDVDtvQkFFQSxTQUFTNkI7d0JBQ1AsSUFBSTdCLFFBQU0sRUFBRSxFQUFDTCxHQUFFQzt3QkFDZixTQUFTVSxJQUFJQyxFQUFFLEVBQUNDLEVBQUUsRUFBQ0MsQ0FBQzs0QkFBRSxJQUFHRixLQUFHLEtBQUdBLE1BQUlqRCxRQUFNa0QsS0FBRyxLQUFHQSxNQUFJakQsTUFBSzs0QkFBT3lDLEtBQUssQ0FBQ1EsS0FBR2xELE9BQUtpRCxHQUFHLEdBQUNiLFNBQVNhLElBQUdDLElBQUdDO3dCQUFFO3dCQUNsRyxJQUFJYixJQUFFLEdBQUVBLElBQUVyQyxNQUFLcUMsSUFBSSxJQUFJRCxJQUFFLEdBQUVBLElBQUVyQyxNQUFLcUMsSUFBSTs0QkFBQyxJQUFJRSxPQUFNRCxLQUFHLEtBQUksYUFBVzs0QkFBTSxJQUFHLEFBQUNELENBQUFBLEFBQUksTUFBSkEsS0FBT0EsTUFBSXJDLE9BQUssTUFBSXNDLEtBQUcsSUFBR0MsT0FBSzs0QkFBV0csTUFBTUssSUFBSSxDQUFDWCxTQUFTQyxHQUFFQyxHQUFFQzt3QkFBTTt3QkFDckosSUFBSUYsSUFBRSxHQUFFQSxLQUFHLEdBQUVBLElBQUk7NEJBQUNXLElBQUlYLEdBQUUsSUFBRzs0QkFBWVcsSUFBSVgsR0FBRSxJQUFHO3dCQUFXO3dCQUMzRCxJQUFJQSxJQUFFLElBQUdBLEtBQUcsSUFBR0EsSUFBSTs0QkFBQ1csSUFBSVgsR0FBRSxHQUFFOzRCQUFZVyxJQUFJWCxHQUFFLElBQUc7d0JBQVc7d0JBQzVELElBQUlDLElBQUUsR0FBRUEsS0FBRyxJQUFHQSxJQUFJOzRCQUFDVSxJQUFJLEdBQUVWLEdBQUU7NEJBQVlVLElBQUksSUFBR1YsR0FBRTt3QkFBVzt3QkFDM0QsSUFBSUQsSUFBRSxHQUFFQSxLQUFHLElBQUdBLElBQUk7NEJBQUNXLElBQUlYLEdBQUUsSUFBRzs0QkFBVVcsSUFBSVgsR0FBRSxJQUFHO3dCQUFTO3dCQUN4RFcsSUFBSSxHQUFFLElBQUc7d0JBQVVBLElBQUksSUFBRyxJQUFHO3dCQUM3QkEsSUFBSSxHQUFFLEdBQUU7d0JBQWVBLElBQUksR0FBRSxHQUFFO3dCQUFlQSxJQUFJLElBQUcsR0FBRTt3QkFBZUEsSUFBSSxJQUFHLEdBQUU7d0JBQWVBLElBQUksSUFBRyxHQUFFO3dCQUN2R0EsSUFBSSxHQUFFLElBQUc7d0JBQVVBLElBQUksR0FBRSxJQUFHO3dCQUFVQSxJQUFJLElBQUcsSUFBRzt3QkFBVUEsSUFBSSxJQUFHLElBQUc7d0JBQ3BFQSxJQUFJLEdBQUUsSUFBRzt3QkFBWUEsSUFBSSxJQUFHLElBQUc7d0JBQVlBLElBQUksR0FBRSxJQUFHO3dCQUFZQSxJQUFJLElBQUcsSUFBRzt3QkFDMUVBLElBQUksR0FBRSxJQUFHO3dCQUFPQSxJQUFJLEdBQUUsSUFBRzt3QkFBT0EsSUFBSSxHQUFFLElBQUc7d0JBQU9BLElBQUksR0FBRSxJQUFHO3dCQUN6RCxPQUFPTjtvQkFDVDtvQkFFQSxTQUFTOEIsUUFBUWpDLElBQUk7d0JBQUcsT0FBT0EsQUFBTyxVQUFQQSxRQUFnQkEsQUFBTyxZQUFQQSxRQUFrQkEsQUFBTyxZQUFQQTtvQkFBZTtvQkFDaEYsU0FBU2tDLFVBQVVsQyxJQUFJO3dCQUFHLE9BQU8sQUFBaVIsTUFBalI7NEJBQUMvQixNQUFLOzRCQUFFQyxPQUFNOzRCQUFFRSxNQUFLOzRCQUFFQyxNQUFLOzRCQUFFSyxNQUFLOzRCQUFFQyxPQUFNOzRCQUFFQyxPQUFNOzRCQUFFYyxPQUFNOzRCQUFFRCxPQUFNOzRCQUFFRSxPQUFNOzRCQUFFQyxlQUFjOzRCQUFFdEIsTUFBSzs0QkFBRUMsTUFBSzs0QkFBRUMsTUFBSzs0QkFBRUMsU0FBUTs0QkFBRUksWUFBVzs0QkFBRUMsVUFBUzs0QkFBRUMsV0FBVTs0QkFBRUMsYUFBWTs0QkFBRUMsV0FBVTs0QkFBRUMsWUFBVzs0QkFBRUMsVUFBUzs0QkFBRUMsVUFBUzs0QkFBRUMsUUFBTzs0QkFBRUMsYUFBWTs0QkFBRUMsVUFBUzs0QkFBRUMsUUFBTzt3QkFBQyxFQUFDLENBQUNRLEtBQUs7b0JBQUs7b0JBQUMsSUFBQW1DLFdBQUFDLFFBQUFDLE9BQUEsR0FFdFM7d0JBQ2JDLFNBQVE7NEJBQ05uQyxPQUFNb0I7NEJBQWVnQixjQUFhLEVBQUU7NEJBQUVDLHNCQUFxQjs0QkFBR0MsU0FBUTs0QkFBR0MsU0FBUTs0QkFBSUMsVUFBUzs0QkFDOUZDLFdBQVU7NEJBQUlDLFdBQVU7NEJBQUlDLGVBQWM7NEJBQVFDLE1BQUs7NEJBQVFDLFFBQU87NEJBQ3RFQyxTQUFROzRCQUErQkMsU0FBUTs0QkFBTUMsaUJBQWdCOzRCQUFHQyxjQUFhOzRCQUNyRkMsZ0JBQWU7NEJBQVFDLGFBQVk7NEJBQVFDLGlCQUFnQjs0QkFBUUMsYUFBWTs0QkFBUUMsa0JBQWlCOzRCQUFRQyxjQUFhOzRCQUFRQyxjQUFhOzRCQUFRQyxlQUFjOzRCQUFRQyxnQkFBZTs0QkFBUUMscUJBQW9COzRCQUFRQyxjQUFhOzRCQUFRQyxrQkFBaUI7NEJBQVFDLFlBQVc7NEJBQVFDLGNBQWE7NEJBQVFDLGVBQWM7NEJBQVFDLHFCQUFvQjs0QkFBUUMsY0FBYTs0QkFBTUMsV0FBVTs0QkFDeFlDLFVBQVM7NEJBQU1DLFVBQVM7NEJBQUdDLFVBQVM7NEJBQU9DLGlCQUFnQjs0QkFBTUMsZUFBYzs0QkFBaUJDLGFBQVk7NEJBQUdDLGlCQUFnQjs0QkFBUUMsV0FBVTs0QkFDakpDLGtCQUFpQjs0QkFBVUMsc0JBQXFCOzRCQUFNQyxzQkFBcUI7NEJBQU1DLG1CQUFrQjs0QkFBTUMsZ0JBQWU7NEJBQ3hIQyxrQkFBaUI7NEJBQUdDLGtCQUFpQjs0QkFBR0MsZUFBYzs0QkFBR0MsY0FBYTs0QkFBS0MsYUFBWTs0QkFBdUJDLG9CQUFtQjs0QkFBSUMsbUJBQWtCOzRCQUFxQkMscUJBQW9COzRCQUE0QkMsbUJBQWtCOzRCQUFrQkMsbUJBQWtCOzRCQUEyQ0MsaUJBQWdCOzRCQUFLQyxnQkFBZTs0QkFBbUJDLGtCQUFpQjs0QkFBb0NDLGdCQUFlOzRCQUFtQkMsZ0JBQWU7NEJBQTJDQyx3QkFBdUI7NEJBQVFDLHNCQUFxQjs0QkFBbUJDLHFCQUFvQjs0QkFBUUMsbUJBQWtCOzRCQUMxbkJDLGNBQWEsQ0FBQzs0QkFBR0MsaUJBQWdCOzRCQUNqQ0MsaUJBQWdCOzRCQUFRQyxzQkFBcUI7NEJBQzdDQyxxQkFBb0I7NEJBQVFDLCtCQUE4Qjs0QkFBUUMsZ0NBQStCOzRCQUFRQyw0QkFBMkI7NEJBQVFDLGdDQUErQjs0QkFBUUMscUNBQW9DOzRCQUN2TkMsVUFBUzs0QkFBT0MsY0FBYTs0QkFBTUMsa0JBQWlCOzRCQUNwREMsVUFBUzs0QkFBTUMsY0FBYTs0QkFBTUMsWUFBVzs0QkFBT0MsWUFBVzs0QkFBTUMsNEJBQTJCOzRCQUFRQyxpQkFBZ0I7NEJBQ3hIQyxnQkFBZTs0QkFBT0MsZ0JBQWU7NEJBQU9DLGVBQWM7NEJBQU9DLGVBQWM7NEJBQUdDLGdCQUFlOzRCQUFHQyxnQkFBZTs0QkFBT0MsY0FBYTs0QkFBU0MsYUFBWTs0QkFBR0MsU0FBUTs0QkFBT0MsY0FBYTs0QkFBZ0JDLGNBQWE7NEJBQUdDLFdBQVU7NEJBQ3JPQyxlQUFjOzRCQUFrQkMsbUJBQWtCOzRCQUFxQkMsa0JBQWlCOzRCQUN4RkMsZUFBYzs0QkFDZEMsbUJBQWtCOzRCQUFxQkMsaUJBQWdCOzRCQUN2REMscUJBQW9COzRCQUF3QkMscUJBQW9COzRCQUF3QkMsb0JBQW1COzRCQUF1QkMsb0JBQW1COzRCQUEwQlosY0FBYTs0QkFDNUxhLGNBQWE7NEJBQXlDQyxrQkFBaUI7NEJBQ3ZFQyxXQUFVO2dDQUFDakwsTUFBSztnQ0FBRUMsT0FBTTtnQ0FBRUUsTUFBSztnQ0FBRUMsTUFBSztnQ0FBRUssTUFBSztnQ0FBRUMsT0FBTTtnQ0FBRUMsT0FBTTtnQ0FBRWMsT0FBTTtnQ0FBRUQsT0FBTTtnQ0FBRUUsT0FBTTtnQ0FBRUMsZUFBYztnQ0FBRXRCLE1BQUs7Z0NBQUVDLE1BQUs7Z0NBQUVDLE1BQUs7Z0NBQUVDLFNBQVE7Z0NBQUVJLFlBQVc7Z0NBQUVDLFVBQVM7Z0NBQUVDLFdBQVU7Z0NBQUVDLGFBQVk7Z0NBQUVDLFdBQVU7Z0NBQUVDLFlBQVc7Z0NBQUVDLFVBQVM7Z0NBQUVDLFVBQVM7Z0NBQUVDLFFBQU87Z0NBQUVDLGFBQVk7Z0NBQUVDLFVBQVM7Z0NBQUVDLFFBQU87NEJBQUM7NEJBQ2pSMkosVUFBUzs0QkFBUUMsV0FBVTs0QkFBUUMsbUJBQWtCOzRCQUFLQyxlQUFjOzRCQUN4RUMsSUFBRzs0QkFBR0MsT0FBTTs0QkFBR0MsWUFBVzs0QkFBR0MsYUFBWTs0QkFBR0MsV0FBVTs0QkFBT0MsY0FBYTs0QkFDMUVDLFdBQVU7NEJBQ1ZDLGlCQUFnQjs0QkFDaEJDLFNBQVE7NEJBQ1JDLGNBQWE7NEJBQU9DLGNBQWE7NEJBQU9DLFdBQVU7NEJBQ2xEQyxtQkFBa0I7NEJBQXNCQyxtQkFBa0I7NEJBQXNCQyxnQkFBZTt3QkFDakc7d0JBRUFDOzRCQUNFLElBQUksQ0FBQy9ELFlBQVksR0FBQyxDQUFDOzRCQUNuQixJQUFJLElBQUluRixJQUFFLEdBQUVBLElBQUUsSUFBSSxDQUFDakIsS0FBSyxDQUFDRyxNQUFNLEVBQUNjLElBQUk7Z0NBQ2xDLElBQUltSixPQUFLLElBQUksQ0FBQ3BLLEtBQUssQ0FBQ2lCLEVBQUU7Z0NBQ3RCLElBQUdtSixBQUFZLFlBQVpBLEtBQUt2SyxJQUFJLEVBQ1YsSUFBSSxDQUFDdUcsWUFBWSxDQUFDZ0UsS0FBS3pLLENBQUMsR0FBQyxNQUFJeUssS0FBS3hLLENBQUMsQ0FBQyxHQUFDO29DQUFDOUIsTUFBSztvQ0FBRUMsT0FBTTtvQ0FBRUUsTUFBSztvQ0FBRUMsTUFBSztvQ0FBRUssTUFBSztvQ0FBRUMsT0FBTTtvQ0FBRUMsT0FBTTtvQ0FBRWMsT0FBTTtvQ0FBRUQsT0FBTTtvQ0FBRUUsT0FBTTtvQ0FBRXJCLE1BQUs7b0NBQUVDLE1BQUs7b0NBQUVDLE1BQUs7b0NBQUVDLFNBQVE7Z0NBQUM7NEJBRXBKO3dCQUNGO3dCQUVBK0w7NEJBQ0UsSUFBSSxDQUFDQyxXQUFXOzRCQUNaLElBQUksQ0FBQ3BHLFlBQVksR0FBQ3FHLFlBQVk7Z0NBQ2hDLElBQUksQ0FBQ3ZILGVBQWUsSUFBRTtnQ0FDdEIsSUFBRyxJQUFJLENBQUNBLGVBQWUsR0FBQyxJQUFHLElBQUksQ0FBQ0MsWUFBWSxHQUFDO3FDQUN4QyxJQUFHLElBQUksQ0FBQ0QsZUFBZSxHQUFDLElBQUcsSUFBSSxDQUFDQyxZQUFZLEdBQUM7cUNBQzdDLElBQUksQ0FBQ0EsWUFBWSxHQUFDO2dDQUN2QixJQUFHLElBQUksQ0FBQ0QsZUFBZSxJQUFFLEtBQUk7b0NBQUV3SCxjQUFjLElBQUksQ0FBQ3RHLFlBQVk7b0NBQUcsSUFBSSxDQUFDQSxZQUFZLEdBQUM7b0NBQU0sSUFBSSxDQUFDbkIsT0FBTyxHQUFDO29DQUFPLElBQUksQ0FBQ0csY0FBYyxHQUFDO29DQUFRLElBQUksQ0FBQ0MsV0FBVyxHQUFDO2dDQUFPOzRCQUNuSyxHQUFFO3dCQUNKO3dCQUVBc0g7NEJBQ0UsSUFBRyxJQUFJLENBQUN2RyxZQUFZLEVBQUNzRyxjQUFjLElBQUksQ0FBQ3RHLFlBQVk7NEJBQ3BELElBQUcsSUFBSSxDQUFDQyxTQUFTLEVBQUNxRyxjQUFjLElBQUksQ0FBQ3JHLFNBQVM7NEJBQzlDLElBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUNvRyxjQUFjLElBQUksQ0FBQ3BHLFFBQVE7NEJBQzVDLElBQUksQ0FBQ0YsWUFBWSxHQUFDOzRCQUFNLElBQUksQ0FBQ0MsU0FBUyxHQUFDOzRCQUFNLElBQUksQ0FBQ0MsUUFBUSxHQUFDO3dCQUM3RDt3QkFFQXNHOzRCQUFhLElBQUcsSUFBSSxDQUFDM0gsT0FBTyxFQUFDOzRCQUFRLElBQUksQ0FBQ0ksV0FBVyxHQUFDOzRCQUFRLElBQUksQ0FBQ0MsZUFBZSxHQUFDOzRCQUFRLElBQUksQ0FBQ3NCLGVBQWUsR0FBQzt3QkFBTzt3QkFDdkhpRzs0QkFBZ0IsSUFBRyxJQUFJLENBQUM1SCxPQUFPLEVBQUM7NEJBQVEsSUFBSSxDQUFDSSxXQUFXLEdBQUM7NEJBQVEsSUFBSSxDQUFDQyxlQUFlLEdBQUM7NEJBQVEsSUFBSSxDQUFDd0gsZ0JBQWdCO3dCQUFHO3dCQUN0SEM7NEJBQWlCLElBQUksQ0FBQ3pILGVBQWUsR0FBQzs0QkFBUSxJQUFJLENBQUNELFdBQVcsR0FBQzt3QkFBTzt3QkFDdEUySCxvQkFBbUJDLE9BQU8sRUFBQ0MsS0FBSzs0QkFDOUIsSUFBSSxDQUFDMUUsZUFBZSxHQUFDeUU7NEJBQVMsSUFBSSxDQUFDeEUsb0JBQW9CLEdBQUN5RTs0QkFDeEQsSUFBSSxDQUFDeEUsbUJBQW1CLEdBQUN1RSxBQUFVLFdBQVZBLFVBQWlCLFNBQU87NEJBQ2pELElBQUksQ0FBQ3RFLDZCQUE2QixHQUFDc0UsQUFBVSxjQUFWQSxVQUFvQixTQUFPOzRCQUM5RCxJQUFJLENBQUNyRSw4QkFBOEIsR0FBQ3FFLEFBQVUsZUFBVkEsVUFBcUIsU0FBTzs0QkFDaEUsSUFBSSxDQUFDcEUsMEJBQTBCLEdBQUNvRSxBQUFVLFdBQVZBLFVBQWlCLFNBQU87NEJBQ3hELElBQUksQ0FBQ25FLDhCQUE4QixHQUFDbUUsQUFBVSxlQUFWQSxVQUFxQixTQUFPOzRCQUNoRSxJQUFJLENBQUNsRSxtQ0FBbUMsR0FBQ2tFLEFBQVUsb0JBQVZBLFVBQTBCLFNBQU87d0JBQzVFO3dCQUNBSDs0QkFBb0IsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQyxRQUFPO3dCQUFpQjt3QkFDcEVHOzRCQUF1QixJQUFJLENBQUNILGtCQUFrQixDQUFDLFdBQVU7d0JBQVc7d0JBQ3BFSTs0QkFBd0IsSUFBSSxDQUFDSixrQkFBa0IsQ0FBQyxZQUFXO3dCQUFZO3dCQUN2RUs7NEJBQW9CLElBQUksQ0FBQ0wsa0JBQWtCLENBQUMsUUFBTzt3QkFBUTt3QkFDM0RNOzRCQUF3QixJQUFJLENBQUNOLGtCQUFrQixDQUFDLFlBQVc7d0JBQVk7d0JBQ3ZFTzs0QkFBNkIsSUFBSSxDQUFDUCxrQkFBa0IsQ0FBQyxpQkFBZ0I7d0JBQWlCO3dCQUN0RlE7NEJBQ0UsSUFBRyxBQUF3QixhQUF4QixJQUFJLENBQUMxRyxnQkFBZ0IsRUFBWTtnQ0FBQyxJQUFJLENBQUMvQixNQUFNLEdBQUMsMkJBQXlCLElBQUksQ0FBQytCLGdCQUFnQjtnQ0FBQyxJQUFJLENBQUNKLGFBQWEsR0FBQztnQ0FBbUI7NEJBQU07NEJBQzVJLElBQUksQ0FBQ0QsZUFBZSxHQUFDLENBQUMsSUFBSSxDQUFDQSxlQUFlOzRCQUMxQyxJQUFHLElBQUksQ0FBQ0EsZUFBZSxFQUFDO2dDQUN0QixJQUFJLENBQUNDLGFBQWEsR0FBQztnQ0FDbkIsSUFBRyxDQUFDLElBQUksQ0FBQ0osUUFBUSxJQUFFLEFBQW1CLFdBQW5CLElBQUksQ0FBQ2YsV0FBVyxFQUFXLElBQUksQ0FBQ2UsUUFBUSxHQUFDbUcsWUFBWTtvQ0FBSyxJQUFJLENBQUNnQixlQUFlO2dDQUFFLEdBQUU7Z0NBQ3JHLElBQUksQ0FBQzFJLE1BQU0sR0FBQzs0QkFDZCxPQUFPO2dDQUNMLElBQUksQ0FBQzJCLGFBQWEsR0FBQztnQ0FDbkIsSUFBRyxJQUFJLENBQUNKLFFBQVEsRUFBQztvQ0FBQ29HLGNBQWMsSUFBSSxDQUFDcEcsUUFBUTtvQ0FBRSxJQUFJLENBQUNBLFFBQVEsR0FBQztnQ0FBSTtnQ0FDakUsSUFBSSxDQUFDQyxRQUFRLEdBQUM7Z0NBQUcsSUFBSSxDQUFDQyxRQUFRLEdBQUM7Z0NBQU8sSUFBSSxDQUFDekIsTUFBTSxHQUFDOzRCQUNwRDs0QkFDQSxJQUFJLENBQUN5SCxXQUFXO3dCQUNsQjt3QkFDQWtCOzRCQUFjLElBQUksQ0FBQzFFLFFBQVEsR0FBQyxDQUFDLElBQUksQ0FBQ0EsUUFBUTs0QkFBRSxJQUFJLENBQUNxQixhQUFhLEdBQUMsSUFBSSxDQUFDckIsUUFBUSxHQUFDLGtCQUFnQjs0QkFBa0IsSUFBSSxDQUFDakUsTUFBTSxHQUFDLElBQUksQ0FBQ2lFLFFBQVEsR0FBQyxpQkFBZTs0QkFBaUIsSUFBSSxDQUFDd0QsV0FBVzt3QkFBRzt3QkFDNUxtQjs0QkFBc0IsSUFBSSxDQUFDMUUsWUFBWSxHQUFDLENBQUMsSUFBSSxDQUFDQSxZQUFZOzRCQUFFLElBQUksQ0FBQ3FCLGlCQUFpQixHQUFDLElBQUksQ0FBQ3JCLFlBQVksR0FBQyxzQkFBb0I7NEJBQXNCLElBQUksQ0FBQ2xFLE1BQU0sR0FBQyxJQUFJLENBQUNrRSxZQUFZLEdBQUMsb0JBQWtCOzRCQUFvQixJQUFJLENBQUN1RCxXQUFXO3dCQUFHO3dCQUN0T29COzRCQUNFLElBQUksQ0FBQzFFLGdCQUFnQixHQUFDLEFBQUMsS0FBSSxDQUFDQSxnQkFBZ0IsR0FBQyxLQUFHdEosWUFBWXlDLE1BQU07NEJBQ2xFLElBQUksQ0FBQ2tJLGdCQUFnQixHQUFDLG1CQUFrQixDQUF3QixNQUF4QixJQUFJLENBQUNyQixnQkFBZ0IsR0FBSyxRQUFPLEFBQXdCLE1BQXhCLElBQUksQ0FBQ0EsZ0JBQWdCLEdBQUssU0FBTyxNQUFLOzRCQUMvRyxJQUFJLENBQUNyQyxTQUFTLEdBQUMsSUFBSSxDQUFDcUMsZ0JBQWdCOzRCQUNwQyxJQUFJLENBQUNuRSxNQUFNLEdBQUM7NEJBQ1osSUFBSSxDQUFDeUgsV0FBVzt3QkFDbEI7d0JBQ0FxQjs0QkFBa0IsSUFBSSxDQUFDMUUsUUFBUSxHQUFDLENBQUMsSUFBSSxDQUFDQSxRQUFROzRCQUFFLElBQUksQ0FBQ3FCLGFBQWEsR0FBQyxJQUFJLENBQUNyQixRQUFRLEdBQUMsa0JBQWdCOzRCQUFrQixJQUFJLENBQUNwRSxNQUFNLEdBQUM7d0JBQW9CO3dCQUNuSitJOzRCQUFzQixJQUFJLENBQUMxRSxZQUFZLEdBQUMsQ0FBQyxJQUFJLENBQUNBLFlBQVk7NEJBQUUsSUFBSSxDQUFDcUIsaUJBQWlCLEdBQUMsSUFBSSxDQUFDckIsWUFBWSxHQUFDLHNCQUFvQjs0QkFBc0IsSUFBSSxDQUFDQyxVQUFVLEdBQUM7NEJBQU8sSUFBSSxDQUFDdEUsTUFBTSxHQUFDO3dCQUE2Qjt3QkFDL01nSjs0QkFBb0IsSUFBSSxDQUFDekUsVUFBVSxHQUFDLENBQUMsSUFBSSxDQUFDQSxVQUFVOzRCQUFFLElBQUksQ0FBQ29CLGVBQWUsR0FBQyxJQUFJLENBQUNwQixVQUFVLEdBQUMsdUJBQXFCOzRCQUF1QixJQUFJLENBQUN2RSxNQUFNLEdBQUM7d0JBQXFCO3dCQUN4S2lKOzRCQUFvQixJQUFJQyxTQUFPO2dDQUFDO2dDQUFHO2dDQUFHO2dDQUFHO2dDQUFHOzZCQUFHLEVBQUM5SyxJQUFFOEssT0FBT0MsT0FBTyxDQUFDLElBQUksQ0FBQzFHLGtCQUFrQjs0QkFBRSxJQUFJLENBQUNBLGtCQUFrQixHQUFDeUcsTUFBTSxDQUFDLEFBQUM5SyxDQUFBQSxJQUFFLEtBQUc4SyxPQUFPNUwsTUFBTSxDQUFDOzRCQUFDLElBQUksQ0FBQ29GLGlCQUFpQixHQUFDLG9CQUFrQixJQUFJLENBQUNELGtCQUFrQjs0QkFBQyxJQUFJLENBQUMyRyxxQkFBcUI7NEJBQUcsSUFBSSxDQUFDcEosTUFBTSxHQUFDO3dCQUF3Qjt3QkFDaFJxSjs0QkFBaUIsSUFBSUgsU0FBTztnQ0FBQztnQ0FBRztnQ0FBRztnQ0FBRztnQ0FBRztnQ0FBRztnQ0FBRzs2QkFBSSxFQUFDOUssSUFBRThLLE9BQU9DLE9BQU8sQ0FBQyxJQUFJLENBQUNyRyxlQUFlOzRCQUFFLElBQUksQ0FBQ0EsZUFBZSxHQUFDb0csTUFBTSxDQUFDLEFBQUM5SyxDQUFBQSxJQUFFLEtBQUc4SyxPQUFPNUwsTUFBTSxDQUFDOzRCQUFDLElBQUksQ0FBQ3lGLGNBQWMsR0FBQyxpQkFBZSxJQUFJLENBQUNELGVBQWU7NEJBQUMsSUFBSSxDQUFDd0csa0JBQWtCOzRCQUFHLElBQUksQ0FBQ3RKLE1BQU0sR0FBQzt3QkFBcUI7d0JBQy9QdUo7NEJBQW9CLElBQUlMLFNBQU87Z0NBQUM7Z0NBQUc7Z0NBQUc7Z0NBQUk7Z0NBQUk7Z0NBQUk7NkJBQUksRUFBQzlLLElBQUU4SyxPQUFPQyxPQUFPLENBQUMsSUFBSSxDQUFDNUcsWUFBWTs0QkFBRSxJQUFJLENBQUNBLFlBQVksR0FBQzJHLE1BQU0sQ0FBQyxBQUFDOUssQ0FBQUEsSUFBRSxLQUFHOEssT0FBTzVMLE1BQU0sQ0FBQzs0QkFBQyxJQUFJLENBQUNrRixXQUFXLEdBQUMscUJBQW1CLElBQUksQ0FBQ0QsWUFBWTs0QkFBQyxJQUFJLENBQUN2QyxNQUFNLEdBQUM7d0JBQTZCO3dCQUN4T3dKOzRCQUF3QixJQUFJLENBQUM5RSxjQUFjLEdBQUMsQ0FBQyxJQUFJLENBQUNBLGNBQWM7NEJBQUUsSUFBSSxDQUFDa0IsbUJBQW1CLEdBQUMsSUFBSSxDQUFDbEIsY0FBYyxHQUFDLHdCQUFzQjs0QkFBd0IsSUFBSSxDQUFDSSxjQUFjLEdBQUM7NEJBQUcsSUFBSSxDQUFDOUUsTUFBTSxHQUFDLElBQUksQ0FBQzBFLGNBQWMsR0FBQyw0QkFBMEI7NEJBQTRCLElBQUksQ0FBQytDLFdBQVc7d0JBQUc7d0JBQzdSZ0M7NEJBQXdCLElBQUksQ0FBQzlFLGNBQWMsR0FBQyxDQUFDLElBQUksQ0FBQ0EsY0FBYzs0QkFBRSxJQUFJLENBQUNrQixtQkFBbUIsR0FBQyxJQUFJLENBQUNsQixjQUFjLEdBQUMsd0JBQXNCOzRCQUF3QixJQUFJLENBQUNHLGNBQWMsR0FBQzs0QkFBRyxJQUFJLENBQUM5RSxNQUFNLEdBQUMsSUFBSSxDQUFDMkUsY0FBYyxHQUFDLDRCQUEwQjs0QkFBNEIsSUFBSSxDQUFDOEMsV0FBVzt3QkFBRzt3QkFDN1JpQzs0QkFBdUIsSUFBSSxDQUFDOUUsYUFBYSxHQUFDLENBQUMsSUFBSSxDQUFDQSxhQUFhOzRCQUFFLElBQUksQ0FBQ2tCLGtCQUFrQixHQUFDLElBQUksQ0FBQ2xCLGFBQWEsR0FBQyx1QkFBcUI7NEJBQXVCLElBQUksQ0FBQ0UsY0FBYyxHQUFDOzRCQUFHLElBQUksQ0FBQzlFLE1BQU0sR0FBQyxJQUFJLENBQUM0RSxhQUFhLEdBQUMsMkJBQXlCOzRCQUEyQixJQUFJLENBQUM2QyxXQUFXO3dCQUFHO3dCQUNuUmtDOzRCQUNFLElBQUcsSUFBSSxDQUFDckksU0FBUyxFQUFDO2dDQUFDcUcsY0FBYyxJQUFJLENBQUNyRyxTQUFTO2dDQUFFLElBQUksQ0FBQ0EsU0FBUyxHQUFDOzRCQUFJOzRCQUNwRSxJQUFHLEFBQW1CLFdBQW5CLElBQUksQ0FBQ2QsV0FBVyxFQUFXLElBQUksQ0FBQ2MsU0FBUyxHQUFDb0csWUFBWTtnQ0FBSyxJQUFJLENBQUNrQyxJQUFJOzRCQUFFLEdBQUU7d0JBQzdFO3dCQUNBQzs0QkFDRSxJQUFJLENBQUNoRixhQUFhLEdBQUMsQUFBQyxLQUFJLENBQUNBLGFBQWEsR0FBQyxLQUFHOzRCQUMxQyxJQUFJLENBQUNrQixrQkFBa0IsR0FBQyxBQUFxQixNQUFyQixJQUFJLENBQUNsQixhQUFhLEdBQUssMkJBQTBCLEFBQXFCLE1BQXJCLElBQUksQ0FBQ0EsYUFBYSxHQUFLLDJCQUF5Qjs0QkFDekgsSUFBSSxDQUFDN0UsTUFBTSxHQUFDOzRCQUEwQixJQUFJLENBQUN5SCxXQUFXO3dCQUN4RDt3QkFDQXFDOzRCQUFpQixJQUFJLENBQUMvRSxjQUFjLEdBQUMsQ0FBQyxJQUFJLENBQUNBLGNBQWM7NEJBQUUsSUFBSSxDQUFDSSxZQUFZLEdBQUMsSUFBSSxDQUFDSixjQUFjLEdBQUMsZ0JBQWM7NEJBQWdCLElBQUcsQ0FBQyxJQUFJLENBQUNBLGNBQWMsRUFBRSxJQUFJLENBQUNDLFlBQVksR0FBQzs0QkFBUyxJQUFJLENBQUNoRixNQUFNLEdBQUMsSUFBSSxDQUFDK0UsY0FBYyxHQUFDLG9CQUFrQjs0QkFBb0IsSUFBSSxDQUFDMEMsV0FBVzt3QkFBRzt3QkFDNVFzQzs0QkFBc0IsSUFBSSxDQUFDL0MsWUFBWSxHQUFDLENBQUMsSUFBSSxDQUFDQSxZQUFZOzRCQUFFLElBQUksQ0FBQ0csaUJBQWlCLEdBQUMsSUFBSSxDQUFDSCxZQUFZLEdBQUMsc0JBQW9COzRCQUFzQixJQUFJLENBQUNTLFdBQVc7d0JBQUc7d0JBQ2xLdUM7NEJBQXNCLElBQUksQ0FBQy9DLFlBQVksR0FBQyxDQUFDLElBQUksQ0FBQ0EsWUFBWTs0QkFBRSxJQUFJLENBQUNHLGlCQUFpQixHQUFDLElBQUksQ0FBQ0gsWUFBWSxHQUFDLHNCQUFvQjs0QkFBc0IsSUFBSSxDQUFDUSxXQUFXO3dCQUFHO3dCQUNsS3dDOzRCQUFtQixJQUFJLENBQUMvQyxTQUFTLEdBQUMsQ0FBQyxJQUFJLENBQUNBLFNBQVM7NEJBQUUsSUFBSSxDQUFDRyxjQUFjLEdBQUMsSUFBSSxDQUFDSCxTQUFTLEdBQUMsbUJBQWlCOzRCQUFtQixJQUFJLENBQUNsQixZQUFZLEdBQUMsSUFBSSxDQUFDa0IsU0FBUyxHQUFDLDBDQUF3Qzs0QkFBeUMsSUFBSSxDQUFDbEgsTUFBTSxHQUFDLElBQUksQ0FBQ2tILFNBQVMsR0FBQyx1QkFBcUI7NEJBQXVCLElBQUksQ0FBQ08sV0FBVzt3QkFBRzt3QkFFdFV5Qzs0QkFBZSxJQUFJLENBQUNDLFVBQVUsQ0FBQzt3QkFBRzt3QkFDbENDOzRCQUFlLElBQUksQ0FBQ0QsVUFBVSxDQUFDO3dCQUFHO3dCQUNsQ0U7NEJBQWUsSUFBSSxDQUFDRixVQUFVLENBQUM7d0JBQUc7d0JBQ2xDRzs0QkFBZSxJQUFJLENBQUNILFVBQVUsQ0FBQzt3QkFBRzt3QkFDbENJOzRCQUFlLElBQUksQ0FBQ0osVUFBVSxDQUFDO3dCQUFHO3dCQUVsQ0EsWUFBV0ssSUFBSTs0QkFDYixJQUFJLENBQUN6SSxnQkFBZ0IsR0FBQzs0QkFDdEIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBQzs0QkFDMUIsSUFBSSxDQUFDSixXQUFXLEdBQUM0STs0QkFDakIsSUFBR0EsQUFBTyxNQUFQQSxNQUFTO2dDQUFDLElBQUksQ0FBQ3JOLEtBQUssR0FBQ29CO2dDQUFjLElBQUksQ0FBQ2tCLE9BQU8sR0FBQztnQ0FBRSxJQUFJLENBQUNPLE1BQU0sR0FBQzs0QkFBYzs0QkFDL0UsSUFBR3dLLEFBQU8sTUFBUEEsTUFBUztnQ0FBQyxJQUFJLENBQUNyTixLQUFLLEdBQUNxQjtnQ0FBbUIsSUFBSSxDQUFDaUIsT0FBTyxHQUFDO2dDQUFFLElBQUksQ0FBQ08sTUFBTSxHQUFDOzRCQUFhOzRCQUNuRixJQUFHd0ssQUFBTyxNQUFQQSxNQUFTO2dDQUFDLElBQUksQ0FBQ3JOLEtBQUssR0FBQ3NCO2dDQUFxQixJQUFJLENBQUNnQixPQUFPLEdBQUM7Z0NBQUUsSUFBSSxDQUFDTyxNQUFNLEdBQUM7NEJBQWU7NEJBQ3ZGLElBQUd3SyxBQUFPLE1BQVBBLE1BQVM7Z0NBQUMsSUFBSSxDQUFDck4sS0FBSyxHQUFDMEI7Z0NBQWtCLElBQUksQ0FBQ1ksT0FBTyxHQUFDO2dDQUFFLElBQUksQ0FBQ08sTUFBTSxHQUFDOzRCQUFXOzRCQUNoRixJQUFHd0ssQUFBTyxNQUFQQSxNQUFTO2dDQUFDLElBQUksQ0FBQ3JOLEtBQUssR0FBQzJCO2dDQUFvQixJQUFJLENBQUNXLE9BQU8sR0FBQztnQ0FBRSxJQUFJLENBQUNPLE1BQU0sR0FBQzs0QkFBYzs0QkFDckYsSUFBSSxDQUFDNkIsZUFBZSxHQUFDOzRCQUFRLElBQUksQ0FBQ3JCLFdBQVcsR0FBQzs0QkFBUSxJQUFJLENBQUNkLE9BQU8sR0FBQzs0QkFBSSxJQUFJLENBQUNDLFFBQVEsR0FBQzs0QkFBRyxJQUFJLENBQUNDLFNBQVMsR0FBQzs0QkFBSSxJQUFJLENBQUNDLFNBQVMsR0FBQzs0QkFBSSxJQUFJLENBQUNDLGFBQWEsR0FBQzs0QkFBUSxJQUFJLENBQUNDLElBQUksR0FBQzs0QkFDbkssSUFBSSxDQUFDbUcsU0FBUyxHQUFDO2dDQUFDakwsTUFBSztnQ0FBRUMsT0FBTTtnQ0FBRUUsTUFBSztnQ0FBRUMsTUFBSztnQ0FBRUssTUFBSztnQ0FBRUMsT0FBTTtnQ0FBRUMsT0FBTTtnQ0FBRWMsT0FBTTtnQ0FBRUQsT0FBTTtnQ0FBRUUsT0FBTTtnQ0FBRUMsZUFBYztnQ0FBRXRCLE1BQUs7Z0NBQUVDLE1BQUs7Z0NBQUVDLE1BQUs7Z0NBQUVDLFNBQVE7Z0NBQUVJLFlBQVc7Z0NBQUVDLFVBQVM7Z0NBQUVDLFdBQVU7Z0NBQUVDLGFBQVk7Z0NBQUVDLFdBQVU7Z0NBQUVDLFlBQVc7Z0NBQUVDLFVBQVM7Z0NBQUVDLFVBQVM7Z0NBQUVDLFFBQU87Z0NBQUVDLGFBQVk7Z0NBQUVDLFVBQVM7Z0NBQUVDLFFBQU87NEJBQUM7NEJBQ3RSLElBQUksQ0FBQzJKLFFBQVEsR0FBQzs0QkFBUSxJQUFJLENBQUNDLFNBQVMsR0FBQzs0QkFBUSxJQUFJLENBQUNDLGlCQUFpQixHQUFDOzRCQUFLLElBQUksQ0FBQ0MsYUFBYSxHQUFDOzRCQUFLLElBQUksQ0FBQzlCLDBCQUEwQixHQUFDOzRCQUFRLElBQUksQ0FBQ0MsZUFBZSxHQUFDOzRCQUM5SixJQUFJLENBQUM4QixFQUFFLEdBQUM7NEJBQUcsSUFBSSxDQUFDQyxLQUFLLEdBQUM7NEJBQUcsSUFBSSxDQUFDQyxVQUFVLEdBQUM7NEJBQUcsSUFBSSxDQUFDQyxXQUFXLEdBQUM7NEJBQUcsSUFBSSxDQUFDQyxTQUFTLEdBQUM7NEJBQU8sSUFBSSxDQUFDQyxZQUFZLEdBQUM7NEJBQ3hHLElBQUksQ0FBQ25HLGdCQUFnQixHQUFDOzRCQUFRLElBQUksQ0FBQ0MsWUFBWSxHQUFDOzRCQUFRLElBQUksQ0FBQzhDLGVBQWUsR0FBQzs0QkFBSSxJQUFJLENBQUM3QyxZQUFZLEdBQUM7NEJBQVEsSUFBSSxDQUFDSSxZQUFZLEdBQUM7NEJBQVEsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBQzs0QkFBUSxJQUFJLENBQUNDLFVBQVUsR0FBQzs0QkFBUSxJQUFJLENBQUNDLFlBQVksR0FBQzs0QkFBUSxJQUFJLENBQUNDLGFBQWEsR0FBQzs0QkFBUSxJQUFJLENBQUNDLG1CQUFtQixHQUFDOzRCQUN6USxJQUFJLENBQUNrRyxnQkFBZ0I7NEJBQ3JCLElBQUksQ0FBQzlGLFFBQVEsR0FBQzs0QkFBRyxJQUFJLENBQUNDLFFBQVEsR0FBQzs0QkFBTyxJQUFJLENBQUNLLFNBQVMsR0FBQyxJQUFJLENBQUNxQyxnQkFBZ0I7NEJBQUUsSUFBRyxBQUF3QixhQUF4QixJQUFJLENBQUNwQyxnQkFBZ0IsSUFBYSxJQUFJLENBQUNMLGVBQWUsSUFBRSxDQUFDLElBQUksQ0FBQ0gsUUFBUSxFQUFDLElBQUksQ0FBQ0EsUUFBUSxHQUFDbUcsWUFBWTtnQ0FBTSxJQUFJLENBQUNnQixlQUFlOzRCQUFHLEdBQUU7NEJBQU8sSUFBSSxDQUFDakIsV0FBVzs0QkFDdE8sSUFBRyxDQUFDLElBQUksQ0FBQ25HLFNBQVMsRUFBQyxJQUFJLENBQUNBLFNBQVMsR0FBQ29HLFlBQVk7Z0NBQUssSUFBSSxDQUFDa0MsSUFBSTs0QkFBRSxHQUFFO3dCQUNsRTt3QkFFQWE7NEJBQWEsSUFBRyxBQUFtQixXQUFuQixJQUFJLENBQUNqSyxXQUFXLEVBQVU7NEJBQVEsSUFBRyxJQUFJLENBQUMrRCxVQUFVLElBQUUsSUFBSSxDQUFDakQsU0FBUyxFQUFDO2dDQUFDcUcsY0FBYyxJQUFJLENBQUNyRyxTQUFTO2dDQUFFLElBQUksQ0FBQ0EsU0FBUyxHQUFDOzRCQUFJOzRCQUFFLElBQUcsSUFBSSxDQUFDaUQsVUFBVSxJQUFFLElBQUksQ0FBQ2hELFFBQVEsRUFBQztnQ0FBQ29HLGNBQWMsSUFBSSxDQUFDcEcsUUFBUTtnQ0FBRSxJQUFJLENBQUNBLFFBQVEsR0FBQzs0QkFBSTs0QkFBRyxJQUFJLENBQUNaLFlBQVksR0FBQzs0QkFBUSxJQUFJLENBQUNILFdBQVcsR0FBQzt3QkFBTzt3QkFDaFJrSzs0QkFBYyxJQUFJLENBQUMvSixZQUFZLEdBQUM7NEJBQVEsSUFBSSxDQUFDSCxXQUFXLEdBQUM7NEJBQVEsSUFBRyxJQUFJLENBQUMrRCxVQUFVLEVBQUM7Z0NBQUMsSUFBSSxDQUFDb0YsZ0JBQWdCO2dDQUFJLElBQUcsQUFBd0IsYUFBeEIsSUFBSSxDQUFDNUgsZ0JBQWdCLElBQWEsSUFBSSxDQUFDTCxlQUFlLElBQUUsQ0FBQyxJQUFJLENBQUNILFFBQVEsRUFBQyxJQUFJLENBQUNBLFFBQVEsR0FBQ21HLFlBQVk7b0NBQU0sSUFBSSxDQUFDZ0IsZUFBZTtnQ0FBRyxHQUFFOzRCQUFLO3dCQUFFO3dCQUN4UGlDLFlBQVd4TixLQUFLOzRCQUFFLElBQUl5TixNQUFJLEVBQUU7NEJBQUMsSUFBSSxJQUFJeE0sSUFBRSxHQUFFQSxJQUFFakIsTUFBTUcsTUFBTSxFQUFDYyxJQUFJd00sSUFBSXBOLElBQUksQ0FBQ1gsU0FBU00sS0FBSyxDQUFDaUIsRUFBRSxDQUFDdEIsQ0FBQyxFQUFDSyxLQUFLLENBQUNpQixFQUFFLENBQUNyQixDQUFDLEVBQUNJLEtBQUssQ0FBQ2lCLEVBQUUsQ0FBQ3BCLElBQUk7NEJBQUcsT0FBTzROO3dCQUFHO3dCQUM5SEMsbUJBQWtCQyxPQUFPOzRCQUFFLElBQUlGLE1BQUksQ0FBQyxHQUFFRyxPQUFLQyxPQUFPRCxJQUFJLENBQUNELFdBQVMsQ0FBQzs0QkFBRyxJQUFJLElBQUkxTSxJQUFFLEdBQUVBLElBQUUyTSxLQUFLek4sTUFBTSxFQUFDYyxJQUFJd00sR0FBRyxDQUFDRyxJQUFJLENBQUMzTSxFQUFFLENBQUMsR0FBQzRNLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUVILE9BQU8sQ0FBQ0MsSUFBSSxDQUFDM00sRUFBRSxDQUFDOzRCQUFFLE9BQU93TTt3QkFBRzt3QkFDNUpNOzRCQUF3QixPQUFPO2dDQUFDL04sT0FBTSxJQUFJLENBQUN3TixVQUFVLENBQUMsSUFBSSxDQUFDeE4sS0FBSztnQ0FBRXNDLFNBQVEsSUFBSSxDQUFDQSxPQUFPO2dDQUFDQyxTQUFRLElBQUksQ0FBQ0EsT0FBTztnQ0FBQ0MsVUFBUyxJQUFJLENBQUNBLFFBQVE7Z0NBQUNDLFdBQVUsSUFBSSxDQUFDQSxTQUFTO2dDQUFDQyxXQUFVLElBQUksQ0FBQ0EsU0FBUztnQ0FBQ0MsZUFBYyxJQUFJLENBQUNBLGFBQWE7Z0NBQUNDLE1BQUssSUFBSSxDQUFDQSxJQUFJO2dDQUFDNkIsYUFBWSxJQUFJLENBQUNBLFdBQVc7Z0NBQUMyQixjQUFhLElBQUksQ0FBQ3NILGlCQUFpQixDQUFDLElBQUksQ0FBQ3RILFlBQVk7Z0NBQUUvQixVQUFTLElBQUksQ0FBQ0EsUUFBUTtnQ0FBQ0MsVUFBUyxJQUFJLENBQUNBLFFBQVE7NEJBQUE7d0JBQUM7d0JBQ3ZXMEosdUJBQXNCQyxLQUFLOzRCQUFFLElBQUksQ0FBQ2pPLEtBQUssR0FBQyxJQUFJLENBQUN3TixVQUFVLENBQUNTLE1BQU1qTyxLQUFLOzRCQUFFLElBQUksQ0FBQ3NDLE9BQU8sR0FBQzJMLE1BQU0zTCxPQUFPOzRCQUFDLElBQUksQ0FBQ0MsT0FBTyxHQUFDMEwsTUFBTTFMLE9BQU87NEJBQUMsSUFBSSxDQUFDQyxRQUFRLEdBQUN5TCxNQUFNekwsUUFBUTs0QkFBQyxJQUFJLENBQUNDLFNBQVMsR0FBQ3dMLE1BQU14TCxTQUFTOzRCQUFDLElBQUksQ0FBQ0MsU0FBUyxHQUFDdUwsTUFBTXZMLFNBQVM7NEJBQUMsSUFBSSxDQUFDQyxhQUFhLEdBQUNzTCxNQUFNdEwsYUFBYSxJQUFFOzRCQUFPLElBQUksQ0FBQ0MsSUFBSSxHQUFDcUwsTUFBTXJMLElBQUksSUFBRTs0QkFBTyxJQUFJLENBQUM2QixXQUFXLEdBQUN3SixBQUFvQkMsV0FBcEJELE1BQU14SixXQUFXLEdBQWEsSUFBRXdKLE1BQU14SixXQUFXOzRCQUFDLElBQUksQ0FBQzJCLFlBQVksR0FBQyxJQUFJLENBQUNzSCxpQkFBaUIsQ0FBQ08sTUFBTTdILFlBQVksSUFBRSxDQUFDOzRCQUFHLElBQUksQ0FBQy9CLFFBQVEsR0FBQzRKLE1BQU01SixRQUFRLElBQUU7NEJBQUUsSUFBSSxDQUFDQyxRQUFRLEdBQUMySixNQUFNM0osUUFBUSxJQUFFOzRCQUFNLElBQUksQ0FBQ0ksZUFBZSxHQUFDOzRCQUFPLElBQUksQ0FBQ3JCLFdBQVcsR0FBQzs0QkFBTyxJQUFJLENBQUNDLGdCQUFnQixHQUFDOzRCQUFPLElBQUksQ0FBQ0csYUFBYSxHQUFDOzRCQUFPLElBQUksQ0FBQ3VDLHNCQUFzQixHQUFDOzRCQUFPLElBQUksQ0FBQ0UsbUJBQW1CLEdBQUM7NEJBQU8sSUFBSSxDQUFDb0UsV0FBVzt3QkFBRTt3QkFDMXFCMkI7NEJBQXdCLElBQUlrQyxXQUFTLElBQUksQ0FBQ2xKLGdCQUFnQixJQUFFLElBQUksQ0FBQ0ssa0JBQWtCOzRCQUFDLElBQUksQ0FBQ0csaUJBQWlCLEdBQUMwSSxXQUFTLGlCQUFlOzRCQUFpQixJQUFJLENBQUN6SSxpQkFBaUIsR0FBQ3lJLFdBQVMsNENBQTBDOzRCQUEwQyxJQUFJLENBQUMzSSxtQkFBbUIsR0FBQzJJLFdBQVMsYUFBVyxVQUFRck4sS0FBS3NOLEdBQUcsQ0FBQyxHQUFFLElBQUksQ0FBQzlJLGtCQUFrQixHQUFDLElBQUksQ0FBQ0wsZ0JBQWdCLElBQUU7d0JBQWM7d0JBQ3JZa0g7NEJBQXFCLElBQUlnQyxXQUFTLElBQUksQ0FBQ2pKLGdCQUFnQixJQUFFLElBQUksQ0FBQ1MsZUFBZTs0QkFBQyxJQUFJLENBQUNHLGNBQWMsR0FBQ3FJLFdBQVMsWUFBVTs0QkFBa0IsSUFBSSxDQUFDcEksY0FBYyxHQUFDb0ksV0FBUyw0Q0FBMEM7NEJBQTBDLElBQUksQ0FBQ3RJLGdCQUFnQixHQUFDc0ksV0FBUyxhQUFXLFVBQVFyTixLQUFLc04sR0FBRyxDQUFDLEdBQUUsSUFBSSxDQUFDekksZUFBZSxHQUFDLElBQUksQ0FBQ1QsZ0JBQWdCLElBQUU7d0JBQXFCO3dCQUN0WG1KOzRCQUFhLElBQUcsQUFBb0IsV0FBcEIsSUFBSSxDQUFDN0ssWUFBWSxFQUFVOzRCQUFPLElBQUksQ0FBQ3lJLHFCQUFxQjs0QkFBRyxJQUFJLENBQUNFLGtCQUFrQjs0QkFBRyxJQUFJLENBQUNuRyxzQkFBc0IsR0FBQzs0QkFBTyxJQUFJLENBQUNFLG1CQUFtQixHQUFDOzRCQUFPLElBQUksQ0FBQzFDLFlBQVksR0FBQzs0QkFBTyxJQUFJLENBQUNDLGFBQWEsR0FBQzt3QkFBTTt3QkFDOU42Szs0QkFBYyxJQUFJLENBQUM3SyxhQUFhLEdBQUM7NEJBQU8sSUFBSSxDQUFDRCxZQUFZLEdBQUM7d0JBQU07d0JBQ2hFK0s7NEJBQTRCLElBQUlOLFFBQU0sSUFBSSxDQUFDRixxQkFBcUI7NEJBQUcsSUFBRyxBQUF3QixhQUF4QixJQUFJLENBQUNuSixnQkFBZ0IsRUFBWSxJQUFJLENBQUNDLG9CQUFvQixHQUFDb0o7aUNBQVcsSUFBRyxBQUF3QixhQUF4QixJQUFJLENBQUNySixnQkFBZ0IsRUFBWSxJQUFJLENBQUNFLG9CQUFvQixHQUFDbUo7aUNBQVcsSUFBRyxBQUF3QixVQUF4QixJQUFJLENBQUNySixnQkFBZ0IsRUFBUyxJQUFJLENBQUNHLGlCQUFpQixHQUFDa0o7NEJBQU0sT0FBT0E7d0JBQUs7d0JBQy9STzs0QkFBMEIsSUFBSSxDQUFDeEksc0JBQXNCLEdBQUM7NEJBQU8sSUFBSSxDQUFDRSxtQkFBbUIsR0FBQzs0QkFBTyxJQUFJLENBQUNELG9CQUFvQixHQUFDOzRCQUFrQixJQUFJLENBQUNFLGlCQUFpQixHQUFDO3dCQUFjO3dCQUM5S3NJOzRCQUNFLElBQUcsQUFBd0IsYUFBeEIsSUFBSSxDQUFDN0osZ0JBQWdCLEVBQVksSUFBSSxDQUFDMkoseUJBQXlCOzRCQUNsRSxJQUFHLEFBQXdCLGFBQXhCLElBQUksQ0FBQzNKLGdCQUFnQixFQUN0QixJQUFHLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUMsSUFBSSxDQUFDbUoscUJBQXFCLENBQUMsSUFBSSxDQUFDbkosb0JBQW9CO2lDQUM3RTtnQ0FBQyxJQUFJLENBQUM3RSxLQUFLLEdBQUNvQjtnQ0FBYyxJQUFJLENBQUNrQixPQUFPLEdBQUM7Z0NBQUUsSUFBSSxDQUFDQyxPQUFPLEdBQUM7Z0NBQUcsSUFBSSxDQUFDQyxRQUFRLEdBQUM7Z0NBQUUsSUFBSSxDQUFDaUMsV0FBVyxHQUFDO2dDQUFFLElBQUksQ0FBQzBGLGdCQUFnQjtnQ0FBRyxJQUFJLENBQUM5RyxXQUFXLEdBQUM7Z0NBQU8sSUFBSSxDQUFDcUIsZUFBZSxHQUFDOzRCQUFNOzRCQUU3SyxJQUFJLENBQUNFLGdCQUFnQixHQUFDOzRCQUFTLElBQUksQ0FBQ0osYUFBYSxHQUFDLElBQUksQ0FBQ0QsZUFBZSxHQUFDLGtCQUFnQjs0QkFBaUIsSUFBSSxDQUFDZCxhQUFhLEdBQUM7NEJBQU8sSUFBSSxDQUFDRCxZQUFZLEdBQUM7NEJBQU8sSUFBSSxDQUFDSCxXQUFXLEdBQUM7NEJBQU8sSUFBSSxDQUFDcUIsZUFBZSxHQUFDOzRCQUFPLElBQUksQ0FBQzhKLHVCQUF1Qjs0QkFBRyxJQUFJLENBQUMzTCxNQUFNLEdBQUM7NEJBQTZCLElBQUcsSUFBSSxDQUFDdUUsVUFBVSxFQUFDLElBQUksQ0FBQ29GLGdCQUFnQjs0QkFBRyxJQUFHLElBQUksQ0FBQ2pJLGVBQWUsSUFBRSxDQUFDLElBQUksQ0FBQ0gsUUFBUSxFQUFDLElBQUksQ0FBQ0EsUUFBUSxHQUFDbUcsWUFBWTtnQ0FBSyxJQUFJLENBQUNnQixlQUFlOzRCQUFFLEdBQUU7NEJBQU0sSUFBSSxDQUFDakIsV0FBVzt3QkFDemI7d0JBQ0FvRTs0QkFDRSxJQUFHLElBQUksQ0FBQ3pKLGdCQUFnQixHQUFDLElBQUksQ0FBQ0ssa0JBQWtCLEVBQUM7Z0NBQUMsSUFBSSxDQUFDekMsTUFBTSxHQUFDLFVBQVMsS0FBSSxDQUFDeUMsa0JBQWtCLEdBQUMsSUFBSSxDQUFDTCxnQkFBZ0IsQUFBRCxJQUFHO2dDQUFlLElBQUksQ0FBQ2dILHFCQUFxQjtnQ0FBRzs0QkFBTTs0QkFDeEssSUFBRyxBQUF3QixhQUF4QixJQUFJLENBQUNySCxnQkFBZ0IsRUFBWSxJQUFJLENBQUMySix5QkFBeUI7NEJBQ2xFLElBQUcsQUFBd0IsYUFBeEIsSUFBSSxDQUFDM0osZ0JBQWdCLEVBQ3RCLElBQUcsSUFBSSxDQUFDRSxvQkFBb0IsRUFBQyxJQUFJLENBQUNrSixxQkFBcUIsQ0FBQyxJQUFJLENBQUNsSixvQkFBb0I7aUNBQzdFO2dDQUFDLElBQUksQ0FBQzlFLEtBQUssR0FBQzRCO2dDQUFvQixJQUFJLENBQUNVLE9BQU8sR0FBQztnQ0FBRSxJQUFJLENBQUNDLE9BQU8sR0FBQztnQ0FBRyxJQUFJLENBQUNDLFFBQVEsR0FBQztnQ0FBRSxJQUFJLENBQUNDLFNBQVMsR0FBQztnQ0FBRyxJQUFJLENBQUNDLFNBQVMsR0FBQztnQ0FBRyxJQUFJLENBQUNDLGFBQWEsR0FBQztnQ0FBYSxJQUFJLENBQUNDLElBQUksR0FBQztnQ0FBTyxJQUFJLENBQUN1SCxnQkFBZ0I7Z0NBQUcsSUFBSSxDQUFDOUcsV0FBVyxHQUFDO2dDQUFPLElBQUksQ0FBQ3FCLGVBQWUsR0FBQzs0QkFBTTs0QkFFclAsSUFBSSxDQUFDRSxnQkFBZ0IsR0FBQzs0QkFBUyxJQUFJLENBQUNKLGFBQWEsR0FBQzs0QkFBbUIsSUFBSSxDQUFDZixhQUFhLEdBQUM7NEJBQU8sSUFBSSxDQUFDRCxZQUFZLEdBQUM7NEJBQU8sSUFBSSxDQUFDSCxXQUFXLEdBQUM7NEJBQU8sSUFBSSxDQUFDcUIsZUFBZSxHQUFDOzRCQUFPLElBQUksQ0FBQzhKLHVCQUF1Qjs0QkFBRyxJQUFHLElBQUksQ0FBQ3BLLFFBQVEsRUFBQztnQ0FBQ29HLGNBQWMsSUFBSSxDQUFDcEcsUUFBUTtnQ0FBRSxJQUFJLENBQUNBLFFBQVEsR0FBQzs0QkFBSTs0QkFBQyxJQUFJLENBQUNFLFFBQVEsR0FBQzs0QkFBUyxJQUFJLENBQUN6QixNQUFNLEdBQUM7NEJBQW9CLElBQUcsSUFBSSxDQUFDdUUsVUFBVSxFQUFDLElBQUksQ0FBQ29GLGdCQUFnQjs0QkFBRyxJQUFJLENBQUNsQyxXQUFXO3dCQUNqWTt3QkFDQXFFOzRCQUNFLElBQUcsSUFBSSxDQUFDekosZ0JBQWdCLEdBQUMsSUFBSSxDQUFDUyxlQUFlLEVBQUM7Z0NBQUMsSUFBSSxDQUFDOUMsTUFBTSxHQUFDLFVBQVMsS0FBSSxDQUFDOEMsZUFBZSxHQUFDLElBQUksQ0FBQ1QsZ0JBQWdCLEFBQUQsSUFBRztnQ0FBc0IsSUFBSSxDQUFDaUgsa0JBQWtCO2dDQUFHOzRCQUFNOzRCQUN0SyxJQUFHLEFBQXdCLFVBQXhCLElBQUksQ0FBQ3ZILGdCQUFnQixFQUFTLElBQUksQ0FBQzJKLHlCQUF5Qjs0QkFDL0QsSUFBRyxBQUF3QixVQUF4QixJQUFJLENBQUMzSixnQkFBZ0IsRUFDdEIsSUFBRyxJQUFJLENBQUNHLGlCQUFpQixFQUFDLElBQUksQ0FBQ2lKLHFCQUFxQixDQUFDLElBQUksQ0FBQ2pKLGlCQUFpQjtpQ0FDdkU7Z0NBQUMsSUFBSSxDQUFDL0UsS0FBSyxHQUFDNkI7Z0NBQWlCLElBQUksQ0FBQ1MsT0FBTyxHQUFDO2dDQUFFLElBQUksQ0FBQ0MsT0FBTyxHQUFDO2dDQUFHLElBQUksQ0FBQ0MsUUFBUSxHQUFDO2dDQUFFLElBQUksQ0FBQ0MsU0FBUyxHQUFDO2dDQUFHLElBQUksQ0FBQ0MsU0FBUyxHQUFDO2dDQUFHLElBQUksQ0FBQ0MsYUFBYSxHQUFDO2dDQUFXLElBQUksQ0FBQ0MsSUFBSSxHQUFDO2dDQUFPLElBQUksQ0FBQ3VILGdCQUFnQjtnQ0FBRyxJQUFJLENBQUM5RyxXQUFXLEdBQUM7Z0NBQU8sSUFBSSxDQUFDcUIsZUFBZSxHQUFDOzRCQUFNOzRCQUVoUCxJQUFJLENBQUNFLGdCQUFnQixHQUFDOzRCQUFNLElBQUksQ0FBQ0osYUFBYSxHQUFDOzRCQUFtQixJQUFJLENBQUNmLGFBQWEsR0FBQzs0QkFBTyxJQUFJLENBQUNELFlBQVksR0FBQzs0QkFBTyxJQUFJLENBQUNILFdBQVcsR0FBQzs0QkFBTyxJQUFJLENBQUNxQixlQUFlLEdBQUM7NEJBQU8sSUFBSSxDQUFDOEosdUJBQXVCOzRCQUFHLElBQUcsSUFBSSxDQUFDcEssUUFBUSxFQUFDO2dDQUFDb0csY0FBYyxJQUFJLENBQUNwRyxRQUFRO2dDQUFFLElBQUksQ0FBQ0EsUUFBUSxHQUFDOzRCQUFJOzRCQUFDLElBQUksQ0FBQ0UsUUFBUSxHQUFDOzRCQUFNLElBQUksQ0FBQ3pCLE1BQU0sR0FBQzs0QkFBcUIsSUFBRyxJQUFJLENBQUN1RSxVQUFVLEVBQUMsSUFBSSxDQUFDb0YsZ0JBQWdCOzRCQUFHLElBQUksQ0FBQ2xDLFdBQVc7NEJBQUcsSUFBRyxJQUFJLENBQUNuRixhQUFhLElBQUUsSUFBSSxDQUFDQyxZQUFZLEVBQUMsSUFBSSxDQUFDd0osVUFBVTt3QkFDdmI7d0JBQ0FDOzRCQUFXLElBQUksQ0FBQ0MsU0FBUzs0QkFBSSxJQUFJLENBQUN0TCxZQUFZLEdBQUM7NEJBQVEsSUFBSSxDQUFDTSxVQUFVLEdBQUM7d0JBQU87d0JBQzlFaUw7NEJBQVksSUFBSSxDQUFDakwsVUFBVSxHQUFDOzRCQUFRLElBQUksQ0FBQ04sWUFBWSxHQUFDO3dCQUFPO3dCQUM3RHdMOzRCQUFhLElBQUksQ0FBQ3hMLFlBQVksR0FBQzs0QkFBUSxJQUFJLENBQUNPLFlBQVksR0FBQzt3QkFBTzt3QkFDaEVrTDs0QkFBYyxJQUFJLENBQUNsTCxZQUFZLEdBQUM7NEJBQVEsSUFBSSxDQUFDUCxZQUFZLEdBQUM7d0JBQU87d0JBQ2pFMEw7NEJBQWMsSUFBSSxDQUFDQyxXQUFXOzRCQUFJLElBQUksQ0FBQzNMLFlBQVksR0FBQzs0QkFBUSxJQUFJLENBQUNRLGFBQWEsR0FBQzt3QkFBTzt3QkFDdEZvTDs0QkFBZSxJQUFJLENBQUNwTCxhQUFhLEdBQUM7NEJBQVEsSUFBSSxDQUFDUixZQUFZLEdBQUM7d0JBQU87d0JBQ25FNkw7NEJBQW9CLElBQUksQ0FBQ0YsV0FBVzs0QkFBSSxJQUFJLENBQUMzTCxZQUFZLEdBQUM7NEJBQVEsSUFBSSxDQUFDUyxtQkFBbUIsR0FBQzt3QkFBTzt3QkFDbEdxTDs0QkFBcUIsSUFBSSxDQUFDckwsbUJBQW1CLEdBQUM7NEJBQVEsSUFBSSxDQUFDVCxZQUFZLEdBQUM7d0JBQU87d0JBQy9FK0w7NEJBQWEsSUFBRyxBQUFvQixXQUFwQixJQUFJLENBQUMvTCxZQUFZLEVBQVU7NEJBQVEsSUFBRyxJQUFJLENBQUM0RCxVQUFVLElBQUUsSUFBSSxDQUFDakQsU0FBUyxFQUFDO2dDQUFDcUcsY0FBYyxJQUFJLENBQUNyRyxTQUFTO2dDQUFFLElBQUksQ0FBQ0EsU0FBUyxHQUFDOzRCQUFJOzRCQUFFLElBQUcsSUFBSSxDQUFDaUQsVUFBVSxJQUFFLElBQUksQ0FBQ2hELFFBQVEsRUFBQztnQ0FBQ29HLGNBQWMsSUFBSSxDQUFDcEcsUUFBUTtnQ0FBRSxJQUFJLENBQUNBLFFBQVEsR0FBQzs0QkFBSTs0QkFBRyxJQUFJLENBQUNaLFlBQVksR0FBQzs0QkFBUSxJQUFJLENBQUNJLFlBQVksR0FBQzs0QkFBUSxJQUFJLENBQUM0TCxXQUFXLEdBQUM7d0JBQWtCO3dCQUN0VEM7NEJBQWMsSUFBSSxDQUFDN0wsWUFBWSxHQUFDOzRCQUFRLElBQUksQ0FBQ0osWUFBWSxHQUFDOzRCQUFRLElBQUcsSUFBSSxDQUFDNEQsVUFBVSxFQUFDO2dDQUFDLElBQUksQ0FBQ29GLGdCQUFnQjtnQ0FBSSxJQUFHLEFBQXdCLGFBQXhCLElBQUksQ0FBQzVILGdCQUFnQixJQUFhLElBQUksQ0FBQ0wsZUFBZSxJQUFFLENBQUMsSUFBSSxDQUFDSCxRQUFRLEVBQUMsSUFBSSxDQUFDQSxRQUFRLEdBQUNtRyxZQUFZO29DQUFNLElBQUksQ0FBQ2dCLGVBQWU7Z0NBQUcsR0FBRTs0QkFBSzt3QkFBRTt3QkFDelBtRTs0QkFBc0IsSUFBRyxBQUFDLEtBQUksQ0FBQzNHLFNBQVMsQ0FBQzlLLElBQUksSUFBRSxLQUFHLEdBQUU7Z0NBQUMsSUFBSSxDQUFDdVIsV0FBVyxHQUFDO2dDQUFjOzRCQUFNOzRCQUFFLElBQUlHLE1BQUk5QixPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQy9FLFNBQVM7NEJBQUU0RyxJQUFJMVIsSUFBSSxJQUFFOzRCQUFFMFIsSUFBSWxRLGFBQWEsR0FBQyxBQUFDa1EsQ0FBQUEsSUFBSWxRLGFBQWEsSUFBRSxLQUFHOzRCQUFFLElBQUksQ0FBQ3NKLFNBQVMsR0FBQzRHOzRCQUFJLElBQUksQ0FBQ3RJLDBCQUEwQixHQUFDOzRCQUFPLElBQUksQ0FBQ21JLFdBQVcsR0FBQzs0QkFBMkIsSUFBSSxDQUFDbEYsV0FBVzt3QkFBRzt3QkFDclRzRjs0QkFBbUIsSUFBRyxJQUFJLENBQUN4SSxVQUFVLElBQUUsSUFBSSxDQUFDakQsU0FBUyxFQUFDO2dDQUFDcUcsY0FBYyxJQUFJLENBQUNyRyxTQUFTO2dDQUFFLElBQUksQ0FBQ0EsU0FBUyxHQUFDOzRCQUFJOzRCQUFFLElBQUcsSUFBSSxDQUFDaUQsVUFBVSxJQUFFLElBQUksQ0FBQ2hELFFBQVEsRUFBQztnQ0FBQ29HLGNBQWMsSUFBSSxDQUFDcEcsUUFBUTtnQ0FBRSxJQUFJLENBQUNBLFFBQVEsR0FBQzs0QkFBSTs0QkFBRyxJQUFJLENBQUNQLGdCQUFnQixHQUFDOzRCQUFRLElBQUksQ0FBQ1IsV0FBVyxHQUFDOzRCQUFRLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUM7NEJBQVEsSUFBSSxDQUFDRSxZQUFZLEdBQUM7NEJBQVEsSUFBSSxDQUFDSSxZQUFZLEdBQUM7NEJBQVEsSUFBSSxDQUFDMEQsZUFBZSxHQUFDO3dCQUF1Qjt3QkFDcFh1STs0QkFBa0IsSUFBSSxDQUFDaE0sZ0JBQWdCLEdBQUM7NEJBQVEsSUFBSSxDQUFDUixXQUFXLEdBQUM7NEJBQVEsSUFBRyxJQUFJLENBQUMrRCxVQUFVLEVBQUM7Z0NBQUMsSUFBSSxDQUFDb0YsZ0JBQWdCO2dDQUFJLElBQUcsQUFBd0IsYUFBeEIsSUFBSSxDQUFDNUgsZ0JBQWdCLElBQWEsSUFBSSxDQUFDTCxlQUFlLElBQUUsQ0FBQyxJQUFJLENBQUNILFFBQVEsRUFBQyxJQUFJLENBQUNBLFFBQVEsR0FBQ21HLFlBQVk7b0NBQU0sSUFBSSxDQUFDZ0IsZUFBZTtnQ0FBRyxHQUFFOzRCQUFLO3dCQUFFO3dCQUNoUXVFOzRCQUFxQixJQUFHLElBQUksQ0FBQzVHLGlCQUFpQixJQUFFLEtBQUk7Z0NBQUMsSUFBSSxDQUFDNUIsZUFBZSxHQUFDO2dDQUF1Qjs0QkFBTTs0QkFBRSxJQUFHLEFBQUMsS0FBSSxDQUFDeUIsU0FBUyxDQUFDOUssSUFBSSxJQUFFLEtBQUcsR0FBRTtnQ0FBQyxJQUFJLENBQUNxSixlQUFlLEdBQUM7Z0NBQWM7NEJBQU07NEJBQUUsSUFBSXFJLE1BQUk5QixPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQy9FLFNBQVM7NEJBQUU0RyxJQUFJMVIsSUFBSSxJQUFFOzRCQUFFLElBQUksQ0FBQzhLLFNBQVMsR0FBQzRHOzRCQUFJLElBQUksQ0FBQ3pHLGlCQUFpQixHQUFDcEksS0FBS0MsR0FBRyxDQUFDLEtBQUksSUFBSSxDQUFDbUksaUJBQWlCLEdBQUM7NEJBQUksSUFBSSxDQUFDNUIsZUFBZSxHQUFDOzRCQUF5QixJQUFJLENBQUNnRCxXQUFXO3dCQUFHO3dCQUMzWHlGOzRCQUFzQixJQUFHLElBQUksQ0FBQzdHLGlCQUFpQixJQUFFLEtBQUk7Z0NBQUMsSUFBSSxDQUFDNUIsZUFBZSxHQUFDO2dDQUF1Qjs0QkFBTTs0QkFBRSxJQUFHLEFBQUMsS0FBSSxDQUFDeUIsU0FBUyxDQUFDaEwsS0FBSyxJQUFFLEtBQUcsR0FBRTtnQ0FBQyxJQUFJLENBQUN1SixlQUFlLEdBQUM7Z0NBQWU7NEJBQU07NEJBQUUsSUFBSXFJLE1BQUk5QixPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQy9FLFNBQVM7NEJBQUU0RyxJQUFJNVIsS0FBSyxJQUFFOzRCQUFFLElBQUksQ0FBQ2dMLFNBQVMsR0FBQzRHOzRCQUFJLElBQUksQ0FBQ3pHLGlCQUFpQixHQUFDcEksS0FBS0MsR0FBRyxDQUFDLEtBQUksSUFBSSxDQUFDbUksaUJBQWlCLEdBQUM7NEJBQUksSUFBSSxDQUFDNUIsZUFBZSxHQUFDOzRCQUF5QixJQUFJLENBQUNnRCxXQUFXO3dCQUFHO3dCQUMvWDBGOzRCQUFxQixJQUFHLElBQUksQ0FBQzlHLGlCQUFpQixJQUFFLEtBQUk7Z0NBQUMsSUFBSSxDQUFDNUIsZUFBZSxHQUFDO2dDQUF1Qjs0QkFBTTs0QkFBRSxJQUFHLEFBQUMsS0FBSSxDQUFDeUIsU0FBUyxDQUFDM0ssSUFBSSxJQUFFLEtBQUcsR0FBRTtnQ0FBQyxJQUFJLENBQUNrSixlQUFlLEdBQUM7Z0NBQWM7NEJBQU07NEJBQUUsSUFBSXFJLE1BQUk5QixPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQy9FLFNBQVM7NEJBQUU0RyxJQUFJdlIsSUFBSSxJQUFFOzRCQUFFLElBQUksQ0FBQzJLLFNBQVMsR0FBQzRHOzRCQUFJLElBQUksQ0FBQ3pHLGlCQUFpQixHQUFDOzRCQUFJLElBQUksQ0FBQzVCLGVBQWUsR0FBQzs0QkFBMEIsSUFBSSxDQUFDZ0QsV0FBVzt3QkFBRzt3QkFDeFYyRjs0QkFBaUIsSUFBRyxJQUFJLENBQUM5RyxhQUFhLElBQUUsS0FBSTtnQ0FBQyxJQUFJLENBQUM3QixlQUFlLEdBQUM7Z0NBQW1COzRCQUFNOzRCQUFFLElBQUcsQUFBQyxLQUFJLENBQUN5QixTQUFTLENBQUM5SyxJQUFJLElBQUUsS0FBRyxHQUFFO2dDQUFDLElBQUksQ0FBQ3FKLGVBQWUsR0FBQztnQ0FBYzs0QkFBTTs0QkFBRSxJQUFJcUksTUFBSTlCLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDL0UsU0FBUzs0QkFBRTRHLElBQUkxUixJQUFJLElBQUU7NEJBQUUsSUFBSSxDQUFDOEssU0FBUyxHQUFDNEc7NEJBQUksSUFBSSxDQUFDeEcsYUFBYSxHQUFDckksS0FBS0MsR0FBRyxDQUFDLEtBQUksSUFBSSxDQUFDb0ksYUFBYSxHQUFDOzRCQUFJLElBQUksQ0FBQzdCLGVBQWUsR0FBQzs0QkFBcUIsSUFBSSxDQUFDZ0QsV0FBVzt3QkFBRzt3QkFDblc0Rjs0QkFBa0IsSUFBRyxJQUFJLENBQUMvRyxhQUFhLElBQUUsS0FBSTtnQ0FBQyxJQUFJLENBQUM3QixlQUFlLEdBQUM7Z0NBQW1COzRCQUFNOzRCQUFFLElBQUcsQUFBQyxLQUFJLENBQUN5QixTQUFTLENBQUNoTCxLQUFLLElBQUUsS0FBRyxHQUFFO2dDQUFDLElBQUksQ0FBQ3VKLGVBQWUsR0FBQztnQ0FBZTs0QkFBTTs0QkFBRSxJQUFJcUksTUFBSTlCLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDL0UsU0FBUzs0QkFBRTRHLElBQUk1UixLQUFLLElBQUU7NEJBQUUsSUFBSSxDQUFDZ0wsU0FBUyxHQUFDNEc7NEJBQUksSUFBSSxDQUFDeEcsYUFBYSxHQUFDckksS0FBS0MsR0FBRyxDQUFDLEtBQUksSUFBSSxDQUFDb0ksYUFBYSxHQUFDOzRCQUFJLElBQUksQ0FBQzdCLGVBQWUsR0FBQzs0QkFBcUIsSUFBSSxDQUFDZ0QsV0FBVzt3QkFBRzt3QkFDdlc2Rjs0QkFBaUIsSUFBRyxJQUFJLENBQUNoSCxhQUFhLElBQUUsS0FBSTtnQ0FBQyxJQUFJLENBQUM3QixlQUFlLEdBQUM7Z0NBQW1COzRCQUFNOzRCQUFFLElBQUcsQUFBQyxLQUFJLENBQUN5QixTQUFTLENBQUMzSyxJQUFJLElBQUUsS0FBRyxHQUFFO2dDQUFDLElBQUksQ0FBQ2tKLGVBQWUsR0FBQztnQ0FBYzs0QkFBTTs0QkFBRSxJQUFJcUksTUFBSTlCLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDL0UsU0FBUzs0QkFBRTRHLElBQUl2UixJQUFJLElBQUU7NEJBQUUsSUFBSSxDQUFDMkssU0FBUyxHQUFDNEc7NEJBQUksSUFBSSxDQUFDeEcsYUFBYSxHQUFDOzRCQUFJLElBQUksQ0FBQzdCLGVBQWUsR0FBQzs0QkFBc0IsSUFBSSxDQUFDZ0QsV0FBVzt3QkFBRzt3QkFDcFU4Rjs0QkFBYyxJQUFHLEFBQUMsS0FBSSxDQUFDckgsU0FBUyxDQUFDeEssSUFBSSxJQUFFLEtBQUcsR0FBRTtnQ0FBQyxJQUFJLENBQUNpUixXQUFXLEdBQUM7Z0NBQWM7NEJBQU07NEJBQUUsSUFBSUcsTUFBSTlCLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDL0UsU0FBUzs0QkFBRTRHLElBQUlwUixJQUFJOzRCQUFHb1IsSUFBSW5SLEtBQUssR0FBQyxBQUFDbVIsQ0FBQUEsSUFBSW5SLEtBQUssSUFBRSxLQUFHOzRCQUFFLElBQUksQ0FBQ3VLLFNBQVMsR0FBQzRHOzRCQUFJLElBQUksQ0FBQ0gsV0FBVyxHQUFDOzRCQUFrQixJQUFJLENBQUNsRixXQUFXO3dCQUFHO3dCQUM1TytGOzRCQUFjLElBQUcsQUFBQyxLQUFJLENBQUN0SCxTQUFTLENBQUNoTCxLQUFLLElBQUUsS0FBRyxHQUFFO2dDQUFDLElBQUksQ0FBQ3lSLFdBQVcsR0FBQztnQ0FBZTs0QkFBTTs0QkFBRSxJQUFJRyxNQUFJOUIsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBRSxJQUFJLENBQUMvRSxTQUFTOzRCQUFFNEcsSUFBSTVSLEtBQUssSUFBRTs0QkFBRTRSLElBQUlsUixLQUFLLEdBQUMsQUFBQ2tSLENBQUFBLElBQUlsUixLQUFLLElBQUUsS0FBRzs0QkFBRSxJQUFJLENBQUNzSyxTQUFTLEdBQUM0Rzs0QkFBSSxJQUFJLENBQUNILFdBQVcsR0FBQzs0QkFBa0IsSUFBSSxDQUFDbEYsV0FBVzt3QkFBRzt3QkFDaFBnRzs0QkFBYyxJQUFHLEFBQUMsS0FBSSxDQUFDdkgsU0FBUyxDQUFDNUssSUFBSSxJQUFFLEtBQUcsS0FBRyxBQUFDLEtBQUksQ0FBQzRLLFNBQVMsQ0FBQzlLLElBQUksSUFBRSxLQUFHLEdBQUU7Z0NBQUMsSUFBSSxDQUFDdVIsV0FBVyxHQUFDO2dDQUF1Qjs0QkFBTTs0QkFBRSxJQUFJRyxNQUFJOUIsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBRSxJQUFJLENBQUMvRSxTQUFTOzRCQUFFNEcsSUFBSXhSLElBQUk7NEJBQUd3UixJQUFJMVIsSUFBSTs0QkFBRzBSLElBQUlwUSxLQUFLLEdBQUMsQUFBQ29RLENBQUFBLElBQUlwUSxLQUFLLElBQUUsS0FBRzs0QkFBRSxJQUFJLENBQUN3SixTQUFTLEdBQUM0Rzs0QkFBSSxJQUFJLENBQUNILFdBQVcsR0FBQzs0QkFBa0IsSUFBSSxDQUFDbEYsV0FBVzt3QkFBRzt3QkFDNVJpRzs0QkFBYyxJQUFHLEFBQUMsS0FBSSxDQUFDeEgsU0FBUyxDQUFDOUssSUFBSSxJQUFFLEtBQUcsR0FBRTtnQ0FBQyxJQUFJLENBQUN1UixXQUFXLEdBQUM7Z0NBQWM7NEJBQU07NEJBQUUsSUFBSUcsTUFBSTlCLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDL0UsU0FBUzs0QkFBRTRHLElBQUkxUixJQUFJLElBQUU7NEJBQUUwUixJQUFJblEsS0FBSyxHQUFDLEFBQUNtUSxDQUFBQSxJQUFJblEsS0FBSyxJQUFFLEtBQUc7NEJBQUUsSUFBSSxDQUFDdUosU0FBUyxHQUFDNEc7NEJBQUksSUFBSSxDQUFDSCxXQUFXLEdBQUM7NEJBQWtCLElBQUksQ0FBQ2xGLFdBQVc7d0JBQUc7d0JBQzdPa0c7NEJBQWlCLElBQUksQ0FBQ3hILFFBQVEsR0FBQzs0QkFBVyxJQUFJLENBQUNDLFNBQVMsR0FBQzs0QkFBVyxJQUFJLENBQUNwRyxNQUFNLEdBQUM7d0JBQW1CO3dCQUNuRzROOzRCQUFhLElBQUksQ0FBQ3pILFFBQVEsR0FBQzs0QkFBTyxJQUFJLENBQUNDLFNBQVMsR0FBQzs0QkFBTyxJQUFJLENBQUNwRyxNQUFNLEdBQUM7d0JBQWU7d0JBQ25GNk47NEJBQWMsSUFBSSxDQUFDMUgsUUFBUSxHQUFDOzRCQUFRLElBQUksQ0FBQ0MsU0FBUyxHQUFDOzRCQUFRLElBQUksQ0FBQ3BHLE1BQU0sR0FBQzt3QkFBZ0I7d0JBQ3ZGOE4sY0FBYTlRLElBQUk7NEJBQ2YsSUFBR0EsQUFBTyxZQUFQQSxRQUFnQkEsQUFBTyxXQUFQQSxRQUFlQSxBQUFPLFdBQVBBLFFBQWVBLEFBQU8sV0FBUEEsUUFBZUEsQUFBTyxjQUFQQSxRQUFrQkEsQUFBTyxjQUFQQSxRQUFrQkEsQUFBTyxpQkFBUEEsUUFBcUJBLEFBQU8sZ0JBQVBBLFFBQW9CQSxBQUFPLGtCQUFQQSxRQUFzQkEsQUFBTyxnQkFBUEEsUUFBb0JBLEFBQU8saUJBQVBBLFFBQXFCQSxBQUFPLGVBQVBBLFFBQW1CQSxBQUFPLGFBQVBBLE1BQWdCLE9BQU07NEJBQ3JQLElBQUdBLEFBQU8sV0FBUEEsUUFBZUEsQUFBTyxXQUFQQSxRQUFlQSxBQUFPLFlBQVBBLFFBQWdCQSxBQUFPLG9CQUFQQSxNQUF1QixPQUFNOzRCQUM5RSxPQUFNO3dCQUNSO3dCQUNBK1EsU0FBUUMsSUFBSTs0QkFDVixJQUFHQSxBQUFPLGNBQVBBLE1BQWlCO2dDQUNsQixJQUFJLENBQUMzSCxpQkFBaUIsR0FBQ3BJLEtBQUtzTixHQUFHLENBQUMsR0FBRSxJQUFJLENBQUNsRixpQkFBaUIsR0FBQztnQ0FDekQsSUFBRyxBQUF5QixNQUF6QixJQUFJLENBQUNBLGlCQUFpQixFQUFLO29DQUFDLElBQUksQ0FBQ0YsUUFBUSxHQUFDO29DQUFPLElBQUksQ0FBQ0MsU0FBUyxHQUFDO29DQUFPLElBQUksQ0FBQ3BHLE1BQU0sR0FBQztnQ0FBZTs0QkFDdkc7NEJBQ0EsSUFBR2dPLEFBQU8sVUFBUEEsTUFBYTtnQ0FDZCxJQUFJLENBQUMxSCxhQUFhLEdBQUNySSxLQUFLc04sR0FBRyxDQUFDLEdBQUUsSUFBSSxDQUFDakYsYUFBYSxHQUFDO2dDQUNqRCxJQUFHLEFBQXFCLE1BQXJCLElBQUksQ0FBQ0EsYUFBYSxFQUFLO29DQUFDLElBQUksQ0FBQ0gsUUFBUSxHQUFDO29DQUFPLElBQUksQ0FBQ0MsU0FBUyxHQUFDO29DQUFPLElBQUksQ0FBQ3BHLE1BQU0sR0FBQztnQ0FBVzs0QkFDL0Y7d0JBQ0Y7d0JBQ0FpTyxRQUFPQyxNQUFNOzRCQUNYLElBQUksQ0FBQzNILEVBQUUsSUFBRTJIOzRCQUNULE1BQU0sSUFBSSxDQUFDM0gsRUFBRSxJQUFFLEdBQUc7Z0NBQUMsSUFBSSxDQUFDQSxFQUFFLElBQUU7Z0NBQUcsSUFBSSxDQUFDQyxLQUFLOzRCQUFFO3dCQUM3Qzt3QkFDQThGOzRCQUNFLElBQUksQ0FBQ3pGLFNBQVMsR0FBQyxvQkFBa0I1SSxLQUFLQyxHQUFHLENBQUMsSUFBSSxDQUFDdUksVUFBVSxFQUFDLEtBQUcseUJBQXVCeEksS0FBS0MsR0FBRyxDQUFDLElBQUksQ0FBQ3dJLFdBQVcsRUFBQyxLQUFHLG9CQUFtQixLQUFJLENBQUNDLFNBQVMsR0FBQyxNQUFJLEdBQUUsSUFBRyx1QkFBc0IsS0FBSSxDQUFDQyxZQUFZLEdBQUMsTUFBSSxHQUFFLElBQUc7NEJBQzdNLElBQUksQ0FBQ0UsZUFBZSxHQUFDLGtCQUFpQixLQUFJLENBQUNMLFVBQVUsR0FBQyxJQUFFLFNBQU8sUUFBTyxJQUFHLGtCQUFnQnhJLEtBQUtDLEdBQUcsQ0FBQyxJQUFJLENBQUN1SSxVQUFVLEVBQUMsTUFBSSxtQkFBaUJ4SSxLQUFLQyxHQUFHLENBQUMsSUFBSSxDQUFDd0ksV0FBVyxFQUFDLE1BQUksdUJBQXNCLEtBQUksQ0FBQ0MsU0FBUyxHQUFDLFNBQU8sUUFBTyxJQUFHLHVCQUFzQixLQUFJLENBQUNDLFlBQVksR0FBQyxTQUFPLFFBQU87d0JBQ25SO3dCQUNBcUY7NEJBQ0UsSUFBSXJCLE1BQUksSUFBSXVELFVBQVEsR0FBR0MsVUFBUTs0QkFDL0IsSUFBSSxJQUFJQyxLQUFHLENBQUNELFNBQVFDLE1BQUlELFNBQVFDLEtBQUs7Z0NBQ25DLElBQUksSUFBSUMsS0FBRyxDQUFDSCxTQUFRRyxNQUFJSCxTQUFRRyxLQUFLO29DQUNuQyxJQUFJalEsS0FBRyxJQUFJLENBQUNvQixPQUFPLEdBQUM2TyxJQUFJQyxLQUFHLElBQUksQ0FBQzdPLE9BQU8sR0FBQzJPLElBQUlHLEtBQUc7b0NBQy9DLElBQUduUSxPQUFLLElBQUksQ0FBQ29CLE9BQU8sSUFBRThPLE9BQUssSUFBSSxDQUFDN08sT0FBTyxFQUFFOE8sS0FBRzt5Q0FDdkM7d0NBQUMsSUFBSTVRLElBQUUsSUFBSSxDQUFDNlEsTUFBTSxDQUFDcFEsSUFBR2tRO3dDQUE0Q0MsS0FBbkM1USxJQUFrQkEsQUFBUyxZQUFUQSxFQUFFWixJQUFJLEdBQWMsTUFBYVksQUFBUyxVQUFUQSxFQUFFWixJQUFJLEdBQVksTUFBYVksQUFBUyxXQUFUQSxFQUFFWixJQUFJLElBQVdZLEFBQVMsV0FBVEEsRUFBRVosSUFBSSxHQUFhLE1BQWFZLEFBQVMsWUFBVEEsRUFBRVosSUFBSSxHQUFjLE1BQWFZLEFBQVMsb0JBQVRBLEVBQUVaLElBQUksR0FBc0IsTUFBYSxNQUF4TTtvQ0FBMk07b0NBQ3BQNE4sT0FBSzREO2dDQUNQO2dDQUNBLElBQUdILEtBQUdELFNBQVF4RCxPQUFLOzRCQUNyQjs0QkFDQSxJQUFJLENBQUM3RCxPQUFPLEdBQUM2RDt3QkFDZjt3QkFDQThEOzRCQUFjLElBQUcsQUFBbUIsV0FBbkIsSUFBSSxDQUFDbE8sV0FBVyxFQUFVOzRCQUFPLElBQUcsSUFBSSxDQUFDK0QsVUFBVSxFQUFDO2dDQUFDLElBQUcsSUFBSSxDQUFDakQsU0FBUyxFQUFDO29DQUFDcUcsY0FBYyxJQUFJLENBQUNyRyxTQUFTO29DQUFFLElBQUksQ0FBQ0EsU0FBUyxHQUFDO2dDQUFJO2dDQUFDLElBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUM7b0NBQUNvRyxjQUFjLElBQUksQ0FBQ3BHLFFBQVE7b0NBQUUsSUFBSSxDQUFDQSxRQUFRLEdBQUM7Z0NBQUk7NEJBQUM7NEJBQUMsSUFBSSxDQUFDZixXQUFXLEdBQUM7NEJBQU8sSUFBSSxDQUFDTSxtQkFBbUIsR0FBQzs0QkFBTyxJQUFJLENBQUNkLE1BQU0sR0FBQzt3QkFBeUI7d0JBQzNTMk87NEJBQXFCLElBQUksQ0FBQ2pELHlCQUF5Qjs0QkFBRyxJQUFHLElBQUksQ0FBQ3BLLFNBQVMsRUFBQztnQ0FBQ3FHLGNBQWMsSUFBSSxDQUFDckcsU0FBUztnQ0FBRSxJQUFJLENBQUNBLFNBQVMsR0FBQzs0QkFBSTs0QkFBQyxJQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFDO2dDQUFDb0csY0FBYyxJQUFJLENBQUNwRyxRQUFRO2dDQUFFLElBQUksQ0FBQ0EsUUFBUSxHQUFDOzRCQUFJOzRCQUFDLElBQUksQ0FBQ1QsbUJBQW1CLEdBQUM7NEJBQU8sSUFBSSxDQUFDRCxjQUFjLEdBQUM7NEJBQU8sSUFBSSxDQUFDTCxXQUFXLEdBQUM7NEJBQU8sSUFBSSxDQUFDQyxnQkFBZ0IsR0FBQzs0QkFBTyxJQUFJLENBQUNDLFlBQVksR0FBQzs0QkFBTyxJQUFJLENBQUNDLFlBQVksR0FBQzs0QkFBTyxJQUFJLENBQUNDLGFBQWEsR0FBQzs0QkFBTyxJQUFJLENBQUNHLFlBQVksR0FBQzs0QkFBTyxJQUFJLENBQUNDLGdCQUFnQixHQUFDOzRCQUFPLElBQUksQ0FBQ0MsVUFBVSxHQUFDOzRCQUFPLElBQUksQ0FBQ0MsWUFBWSxHQUFDOzRCQUFPLElBQUksQ0FBQ0MsYUFBYSxHQUFDOzRCQUFPLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUM7NEJBQU8sSUFBSSxDQUFDb0MsZUFBZSxHQUFDOzRCQUFHLElBQUksQ0FBQzNCLGVBQWUsR0FBQzs0QkFBTyxJQUFJLENBQUM3QixNQUFNLEdBQUM7d0JBQWM7d0JBQ3ZtQjRPOzRCQUFvQixJQUFJLENBQUM5TixtQkFBbUIsR0FBQzs0QkFBTyxJQUFJLENBQUNOLFdBQVcsR0FBQzs0QkFBTyxJQUFJLENBQUNSLE1BQU0sR0FBQzs0QkFBZSxJQUFHLElBQUksQ0FBQ3VFLFVBQVUsRUFBQyxJQUFJLENBQUNvRixnQkFBZ0I7NEJBQUcsSUFBRyxBQUF3QixhQUF4QixJQUFJLENBQUM1SCxnQkFBZ0IsSUFBYSxJQUFJLENBQUNMLGVBQWUsSUFBRSxDQUFDLElBQUksQ0FBQ0gsUUFBUSxFQUFDLElBQUksQ0FBQ0EsUUFBUSxHQUFDbUcsWUFBWTtnQ0FBSyxJQUFJLENBQUNnQixlQUFlOzRCQUFFLEdBQUU7NEJBQU0sSUFBSSxDQUFDakIsV0FBVzt3QkFBRTt3QkFDM1NvSDs0QkFBaUIsSUFBRyxBQUFtQixXQUFuQixJQUFJLENBQUNyTyxXQUFXLEVBQVU7NEJBQVEsSUFBRyxJQUFJLENBQUMrRCxVQUFVLElBQUUsSUFBSSxDQUFDakQsU0FBUyxFQUFDO2dDQUFDcUcsY0FBYyxJQUFJLENBQUNyRyxTQUFTO2dDQUFFLElBQUksQ0FBQ0EsU0FBUyxHQUFDOzRCQUFJOzRCQUFFLElBQUcsSUFBSSxDQUFDaUQsVUFBVSxJQUFFLElBQUksQ0FBQ2hELFFBQVEsRUFBQztnQ0FBQ29HLGNBQWMsSUFBSSxDQUFDcEcsUUFBUTtnQ0FBRSxJQUFJLENBQUNBLFFBQVEsR0FBQzs0QkFBSTs0QkFBRyxJQUFJLENBQUNaLFlBQVksR0FBQzs0QkFBUSxJQUFJLENBQUNGLGdCQUFnQixHQUFDOzRCQUFRLElBQUksQ0FBQ0MsWUFBWSxHQUFDOzRCQUFRLElBQUksQ0FBQ0YsV0FBVyxHQUFDO3dCQUFPO3dCQUM1VXNPOzRCQUFpQixJQUFJLENBQUNyTyxnQkFBZ0IsR0FBQzs0QkFBTyxJQUFJLENBQUNrTCx1QkFBdUI7NEJBQUcsSUFBSSxDQUFDbkwsV0FBVyxHQUFDOzRCQUFPLElBQUcsSUFBSSxDQUFDK0QsVUFBVSxFQUFDO2dDQUFDLElBQUksQ0FBQ29GLGdCQUFnQjtnQ0FBRyxJQUFHLEFBQXdCLGFBQXhCLElBQUksQ0FBQzVILGdCQUFnQixJQUFhLElBQUksQ0FBQ0wsZUFBZSxJQUFFLENBQUMsSUFBSSxDQUFDSCxRQUFRLEVBQUMsSUFBSSxDQUFDQSxRQUFRLEdBQUNtRyxZQUFZO29DQUFLLElBQUksQ0FBQ2dCLGVBQWU7Z0NBQUUsR0FBRTs0QkFBSzt3QkFBQzt3QkFDeFJxRzs0QkFBd0IsSUFBSUMsVUFBUSxBQUE4QixXQUE5QixJQUFJLENBQUM3TCxzQkFBc0I7NEJBQVUsSUFBSSxDQUFDQSxzQkFBc0IsR0FBQzZMLFVBQVEsU0FBTzs0QkFBTyxJQUFJLENBQUMzTCxtQkFBbUIsR0FBQzs0QkFBTyxJQUFJLENBQUNELG9CQUFvQixHQUFDNEwsVUFBUSxvQkFBa0I7NEJBQWtCLElBQUksQ0FBQzFMLGlCQUFpQixHQUFDO3dCQUFjO3dCQUN0UTJMOzRCQUFxQixJQUFJRCxVQUFRLEFBQTJCLFdBQTNCLElBQUksQ0FBQzNMLG1CQUFtQjs0QkFBVSxJQUFJLENBQUNBLG1CQUFtQixHQUFDMkwsVUFBUSxTQUFPOzRCQUFPLElBQUksQ0FBQzdMLHNCQUFzQixHQUFDOzRCQUFPLElBQUksQ0FBQ0csaUJBQWlCLEdBQUMwTCxVQUFRLGlCQUFlOzRCQUFlLElBQUksQ0FBQzVMLG9CQUFvQixHQUFDO3dCQUFpQjt3QkFFN1A4TCxhQUFZcFMsQ0FBQyxFQUFDQyxDQUFDOzRCQUNiLElBQUlvUyxNQUFJclMsSUFBRSxNQUFJQzs0QkFDZCxJQUFHLENBQUMsSUFBSSxDQUFDd0csWUFBWSxDQUFDNEwsSUFBSSxFQUFFLElBQUksQ0FBQzVMLFlBQVksQ0FBQzRMLElBQUksR0FBQztnQ0FBQ2xVLE1BQUs7Z0NBQUVDLE9BQU07Z0NBQUVFLE1BQUs7Z0NBQUVDLE1BQUs7Z0NBQUVLLE1BQUs7Z0NBQUVDLE9BQU07Z0NBQUVDLE9BQU07Z0NBQUVjLE9BQU07Z0NBQUVELE9BQU07Z0NBQUVFLE9BQU07Z0NBQUVyQixNQUFLO2dDQUFFQyxNQUFLO2dDQUFFQyxNQUFLO2dDQUFFQyxTQUFROzRCQUFDOzRCQUM5SixJQUFJLENBQUMrSCxlQUFlLEdBQUMyTDs0QkFDckIsSUFBRyxJQUFJLENBQUM1SyxVQUFVLElBQUUsSUFBSSxDQUFDakQsU0FBUyxFQUFDO2dDQUFFcUcsY0FBYyxJQUFJLENBQUNyRyxTQUFTO2dDQUFHLElBQUksQ0FBQ0EsU0FBUyxHQUFDOzRCQUFLOzRCQUN4RixJQUFHLElBQUksQ0FBQ2lELFVBQVUsSUFBRSxJQUFJLENBQUNoRCxRQUFRLEVBQUM7Z0NBQUVvRyxjQUFjLElBQUksQ0FBQ3BHLFFBQVE7Z0NBQUcsSUFBSSxDQUFDQSxRQUFRLEdBQUM7NEJBQUs7NEJBQ3JGLElBQUksQ0FBQ2QsZ0JBQWdCLEdBQUM7NEJBQ3RCLElBQUksQ0FBQ0QsV0FBVyxHQUFDOzRCQUNqQixJQUFJLENBQUNFLFlBQVksR0FBQzs0QkFDbEIsSUFBSSxDQUFDVixNQUFNLEdBQUM7d0JBQ2Q7d0JBRUFvUDs0QkFDRSxJQUFJLENBQUMxTyxZQUFZLEdBQUM7NEJBQ2xCLElBQUksQ0FBQ0YsV0FBVyxHQUFDOzRCQUNqQixJQUFJLENBQUNnRCxlQUFlLEdBQUM7NEJBQ3JCLElBQUcsSUFBSSxDQUFDZSxVQUFVLEVBQUM7Z0NBQUMsSUFBSSxDQUFDb0YsZ0JBQWdCO2dDQUFJLElBQUcsQUFBd0IsYUFBeEIsSUFBSSxDQUFDNUgsZ0JBQWdCLElBQWEsSUFBSSxDQUFDTCxlQUFlLElBQUUsQ0FBQyxJQUFJLENBQUNILFFBQVEsRUFBQyxJQUFJLENBQUNBLFFBQVEsR0FBQ21HLFlBQVk7b0NBQU0sSUFBSSxDQUFDZ0IsZUFBZTtnQ0FBRyxHQUFFOzRCQUFLOzRCQUNyTCxJQUFJLENBQUMxSSxNQUFNLEdBQUM7d0JBQ2Q7d0JBRUFxUDs0QkFDRSxJQUFHLENBQUMsSUFBSSxDQUFDN0wsZUFBZSxJQUFFLENBQUMsSUFBSSxDQUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDQyxlQUFlLENBQUMsRUFBQyxPQUFPOzRCQUMxRSxPQUFPLElBQUksQ0FBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDMUQsYUFBYSxDQUFDLElBQUU7d0JBQ3RFO3dCQUVBd1A7NEJBQXFCLE9BQU8sSUFBSSxDQUFDcEosU0FBUyxDQUFDLElBQUksQ0FBQ3BHLGFBQWEsQ0FBQyxJQUFFO3dCQUFFO3dCQUVsRXlQOzRCQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMvTCxlQUFlLEVBQUM7NEJBQ3pCLElBQUkwSyxTQUFPLElBQUksQ0FBQ2hJLFNBQVMsQ0FBQyxJQUFJLENBQUNwRyxhQUFhLENBQUMsSUFBRTs0QkFDL0MsSUFBR29PLFVBQVEsR0FBRTtnQ0FBQyxJQUFJLENBQUNsTyxNQUFNLEdBQUMsUUFBUSxJQUFJLENBQUNGLGFBQWEsQ0FBQzBQLFdBQVc7Z0NBQUc7NEJBQU07NEJBQ3pFLElBQUk3UyxRQUFNLElBQUksQ0FBQzRHLFlBQVksQ0FBQyxJQUFJLENBQUNDLGVBQWUsQ0FBQzs0QkFDakQ3RyxLQUFLLENBQUMsSUFBSSxDQUFDbUQsYUFBYSxDQUFDLEdBQUMsQUFBQ25ELENBQUFBLEtBQUssQ0FBQyxJQUFJLENBQUNtRCxhQUFhLENBQUMsSUFBRSxLQUFHOzRCQUN6RCxJQUFJLENBQUN5RCxZQUFZLEdBQUN5SCxPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQzFILFlBQVk7NEJBQ3BELElBQUl1SixNQUFJOUIsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBRSxJQUFJLENBQUMvRSxTQUFTOzRCQUFHNEcsR0FBRyxDQUFDLElBQUksQ0FBQ2hOLGFBQWEsQ0FBQyxJQUFFOzRCQUFHLElBQUksQ0FBQ29HLFNBQVMsR0FBQzRHOzRCQUNyRixJQUFJLENBQUM5TSxNQUFNLEdBQUMsWUFBWSxJQUFJLENBQUNGLGFBQWEsQ0FBQzBQLFdBQVc7d0JBQ3hEO3dCQUVBQzs0QkFDRSxJQUFHLENBQUMsSUFBSSxDQUFDak0sZUFBZSxFQUFDOzRCQUN6QixJQUFJN0csUUFBTSxJQUFJLENBQUM0RyxZQUFZLENBQUMsSUFBSSxDQUFDQyxlQUFlLENBQUM7NEJBQ2pELElBQUkwSyxTQUFPdlIsS0FBSyxDQUFDLElBQUksQ0FBQ21ELGFBQWEsQ0FBQyxJQUFFOzRCQUN0QyxJQUFHb08sVUFBUSxHQUFFO2dDQUFDLElBQUksQ0FBQ2xPLE1BQU0sR0FBQztnQ0FBaUI7NEJBQU07NEJBQ2pEckQsS0FBSyxDQUFDLElBQUksQ0FBQ21ELGFBQWEsQ0FBQyxJQUFFOzRCQUMzQixJQUFJLENBQUN5RCxZQUFZLEdBQUN5SCxPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQzFILFlBQVk7NEJBQ3BELElBQUl1SixNQUFJOUIsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBRSxJQUFJLENBQUMvRSxTQUFTOzRCQUFHNEcsR0FBRyxDQUFDLElBQUksQ0FBQ2hOLGFBQWEsQ0FBQyxHQUFDLEFBQUNnTixDQUFBQSxHQUFHLENBQUMsSUFBSSxDQUFDaE4sYUFBYSxDQUFDLElBQUUsS0FBRzs0QkFBRyxJQUFJLENBQUNvRyxTQUFTLEdBQUM0Rzs0QkFDakgsSUFBSSxDQUFDOU0sTUFBTSxHQUFDLFdBQVcsSUFBSSxDQUFDRixhQUFhLENBQUMwUCxXQUFXO3dCQUN2RDt3QkFFQUU7NEJBQTBCLElBQUksQ0FBQ0MsVUFBVTs0QkFBRyxJQUFJLENBQUNiLGNBQWM7d0JBQUU7d0JBQ2pFYzs0QkFBMkIsSUFBSSxDQUFDQyxXQUFXOzRCQUFHLElBQUksQ0FBQ2YsY0FBYzt3QkFBRTt3QkFDbkVnQjs0QkFBMEIsSUFBSSxDQUFDQyxVQUFVOzRCQUFHLElBQUksQ0FBQ2pCLGNBQWM7d0JBQUU7d0JBQ2pFa0I7NEJBQTBCLElBQUksQ0FBQ0MsVUFBVTs0QkFBRyxJQUFJLENBQUNuQixjQUFjO3dCQUFFO3dCQUNqRW9COzRCQUEwQixJQUFJLENBQUNDLFVBQVU7NEJBQUcsSUFBSSxDQUFDckIsY0FBYzt3QkFBRTt3QkFDakVzQjs0QkFBMkIsSUFBSSxDQUFDQyxXQUFXOzRCQUFHLElBQUksQ0FBQ3ZCLGNBQWM7d0JBQUU7d0JBQ25Fd0I7NEJBQTJCLElBQUksQ0FBQ0MsV0FBVzs0QkFBRyxJQUFJLENBQUN6QixjQUFjO3dCQUFFO3dCQUNuRTBCOzRCQUEyQixJQUFJLENBQUNDLFdBQVc7NEJBQUcsSUFBSSxDQUFDM0IsY0FBYzt3QkFBRTt3QkFDbkU0Qjs0QkFBMkIsSUFBSSxDQUFDQyxXQUFXOzRCQUFHLElBQUksQ0FBQzdCLGNBQWM7d0JBQUU7d0JBQ25FOEI7NEJBQTJCLElBQUksQ0FBQ0MsV0FBVzs0QkFBRyxJQUFJLENBQUMvQixjQUFjO3dCQUFFO3dCQUNuRWdDOzRCQUFtQyxJQUFJLENBQUNoUixhQUFhLEdBQUM7NEJBQWdCLElBQUksQ0FBQ0UsTUFBTSxHQUFDOzRCQUEwQixJQUFJLENBQUN5SCxXQUFXOzRCQUFHLElBQUksQ0FBQ3FILGNBQWM7d0JBQUU7d0JBQ3BKaUM7NEJBQTBCLElBQUksQ0FBQ0MsVUFBVTs0QkFBRyxJQUFJLENBQUNsQyxjQUFjO3dCQUFFO3dCQUNqRW1DOzRCQUEwQixJQUFJLENBQUNDLFVBQVU7NEJBQUcsSUFBSSxDQUFDcEMsY0FBYzt3QkFBRTt3QkFDakVxQzs0QkFBMEIsSUFBSSxDQUFDclIsYUFBYSxHQUFDOzRCQUFPLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDNUZzQzs0QkFBNkIsSUFBSSxDQUFDdFIsYUFBYSxHQUFDOzRCQUFVLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDbEd1Qzs0QkFBZ0MsSUFBSSxDQUFDdlIsYUFBYSxHQUFDOzRCQUFhLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDeEd3Qzs0QkFBOEIsSUFBSSxDQUFDeFIsYUFBYSxHQUFDOzRCQUFXLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDcEd5Qzs0QkFBK0IsSUFBSSxDQUFDelIsYUFBYSxHQUFDOzRCQUFZLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDdEcwQzs0QkFBaUMsSUFBSSxDQUFDMVIsYUFBYSxHQUFDOzRCQUFjLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDMUcyQzs0QkFBK0IsSUFBSSxDQUFDM1IsYUFBYSxHQUFDOzRCQUFZLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDdEc0Qzs0QkFBZ0MsSUFBSSxDQUFDNVIsYUFBYSxHQUFDOzRCQUFhLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDeEc2Qzs0QkFBOEIsSUFBSSxDQUFDN1IsYUFBYSxHQUFDOzRCQUFXLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDcEc4Qzs0QkFBOEIsSUFBSSxDQUFDOVIsYUFBYSxHQUFDOzRCQUFXLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDcEcrQzs0QkFBNEIsSUFBSSxDQUFDL1IsYUFBYSxHQUFDOzRCQUFTLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDaEdnRDs0QkFBaUMsSUFBSSxDQUFDaFMsYUFBYSxHQUFDOzRCQUFjLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDMUdpRDs0QkFBOEIsSUFBSSxDQUFDalMsYUFBYSxHQUFDOzRCQUFXLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFDcEdrRDs0QkFBNEIsSUFBSSxDQUFDbFMsYUFBYSxHQUFDOzRCQUFTLElBQUksQ0FBQzJILFdBQVc7NEJBQUcsSUFBSSxDQUFDcUgsY0FBYzt3QkFBRTt3QkFFaEdtRCxhQUFZQyxLQUFLOzRCQUFHLElBQUdBLFFBQU0sSUFBRyxPQUFNOzRCQUFPLElBQUdBLFFBQU0sSUFBRyxPQUFNOzRCQUFVLElBQUdBLFFBQU0sSUFBRyxPQUFNOzRCQUFTLElBQUdBLFFBQU0sSUFBRyxPQUFNOzRCQUFXLE9BQU07d0JBQU07d0JBQzdJeEo7NEJBQ0UsSUFBRyxBQUF3QixhQUF4QixJQUFJLENBQUMzRyxnQkFBZ0IsRUFBWTs0QkFDcEMsSUFBRyxDQUFDLElBQUksQ0FBQ0wsZUFBZSxFQUFDOzRCQUN6QixJQUFJLENBQUNGLFFBQVEsR0FBQyxBQUFDLEtBQUksQ0FBQ0EsUUFBUSxHQUFDLEtBQUc7NEJBQ2hDLElBQUkyUSxPQUFLLElBQUksQ0FBQ0YsV0FBVyxDQUFDLElBQUksQ0FBQ3pRLFFBQVE7NEJBQ3ZDLElBQUcyUSxTQUFPLElBQUksQ0FBQzFRLFFBQVEsRUFBQztnQ0FBQyxJQUFJLENBQUNBLFFBQVEsR0FBQzBRO2dDQUFLLElBQUksQ0FBQzFLLFdBQVc7NEJBQUU7d0JBQ2hFO3dCQUNBMks7NEJBQWMsT0FBT25VLEtBQUtzTixHQUFHLENBQUMsR0FBRXROLEtBQUtvVSxLQUFLLENBQUMxWCxVQUFRRSxXQUFXLENBQUMsSUFBSSxDQUFDaUgsU0FBUyxDQUFDO3dCQUFFO3dCQUNoRndROzRCQUFjLE9BQU9yVSxLQUFLc04sR0FBRyxDQUFDLEdBQUV0TixLQUFLb1UsS0FBSyxDQUFDelgsVUFBUUMsV0FBVyxDQUFDLElBQUksQ0FBQ2lILFNBQVMsQ0FBQzt3QkFBRTt3QkFDaEZ5UTs0QkFBWSxPQUFPMVgsV0FBVyxDQUFDLElBQUksQ0FBQ2lILFNBQVMsQ0FBQzt3QkFBQTt3QkFDOUMwUSxPQUFNQyxDQUFDLEVBQUN2VSxHQUFHLEVBQUNxTixHQUFHOzRCQUFFLE9BQU90TixLQUFLc04sR0FBRyxDQUFDck4sS0FBSUQsS0FBS0MsR0FBRyxDQUFDcU4sS0FBSWtIO3dCQUFHO3dCQUNyRHRKLFNBQVFyTSxDQUFDLEVBQUNDLENBQUM7NEJBQUUsT0FBT0EsSUFBRXRDLE9BQUtxQzt3QkFBQzt3QkFDNUIyUixRQUFPM1IsQ0FBQyxFQUFDQyxDQUFDOzRCQUFFLElBQUdELElBQUUsS0FBR0EsS0FBR3JDLFFBQU1zQyxJQUFFLEtBQUdBLEtBQUdyQyxNQUFLLE9BQU87NEJBQUssT0FBTyxJQUFJLENBQUN5QyxLQUFLLENBQUMsSUFBSSxDQUFDZ00sT0FBTyxDQUFDck0sR0FBRUMsR0FBRzt3QkFBQTt3QkFDMUYyVixTQUFRNVYsQ0FBQyxFQUFDQyxDQUFDOzRCQUFFLElBQUlhLElBQUUsSUFBSSxDQUFDNlEsTUFBTSxDQUFDM1IsR0FBRUM7NEJBQUcsT0FBT2EsSUFBRXFCLFFBQVFyQixFQUFFWixJQUFJLElBQUU7d0JBQUk7d0JBQ2pFMlY7NEJBQWEsSUFBSUMsT0FBSyxJQUFJLENBQUNSLFdBQVc7NEJBQUcsT0FBTyxJQUFJLENBQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMvUyxPQUFPLEdBQUN4QixLQUFLb1UsS0FBSyxDQUFDTyxPQUFLLElBQUcsR0FBRTNVLEtBQUtzTixHQUFHLENBQUMsR0FBRTlRLE9BQUttWTt3QkFBTTt3QkFDbkhDOzRCQUFhLElBQUlDLE9BQUssSUFBSSxDQUFDUixXQUFXOzRCQUFHLE9BQU8sSUFBSSxDQUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDOVMsT0FBTyxHQUFDekIsS0FBS29VLEtBQUssQ0FBQ1MsT0FBSyxJQUFHLEdBQUU3VSxLQUFLc04sR0FBRyxDQUFDLEdBQUU3USxPQUFLb1k7d0JBQU07d0JBRW5IQyxPQUFNL1YsSUFBSTs0QkFDUixJQUFHLElBQUksQ0FBQ2dLLFlBQVksRUFBQztnQ0FDbkIsSUFBR2hLLEFBQU8sVUFBUEEsTUFBYSxPQUFPLEFBQXdCLGFBQXhCLElBQUksQ0FBQytFLGdCQUFnQixHQUFZLFlBQVcsQUFBd0IsVUFBeEIsSUFBSSxDQUFDQSxnQkFBZ0IsR0FBUyxZQUFXLEFBQWdCLFlBQWhCLElBQUksQ0FBQ04sUUFBUSxHQUFXLFlBQVU7Z0NBQzlJLElBQUcxRyxvQkFBb0IsQ0FBQ2lDLEtBQUssRUFBQyxPQUFPakMsb0JBQW9CLENBQUNpQyxLQUFLOzRCQUNqRTs0QkFDQSxJQUFJZ1csUUFBTSxBQUFnQixZQUFoQixJQUFJLENBQUN2UixRQUFROzRCQUN2QixJQUFHLEFBQXdCLGFBQXhCLElBQUksQ0FBQ00sZ0JBQWdCLEVBQWFpUixRQUFNOzRCQUMzQyxJQUFJQyxPQUFLLEFBQXFCLE1BQXJCLElBQUksQ0FBQ3BPLGFBQWEsRUFBTXFPLGNBQVksQUFBcUIsTUFBckIsSUFBSSxDQUFDck8sYUFBYTs0QkFDL0QsSUFBRzdILEFBQU8sVUFBUEEsTUFBYTtnQ0FDZCxJQUFHLEFBQXdCLGFBQXhCLElBQUksQ0FBQytFLGdCQUFnQixFQUFZLE9BQU87Z0NBQzNDLElBQUcsQUFBd0IsVUFBeEIsSUFBSSxDQUFDQSxnQkFBZ0IsRUFBUyxPQUFPO2dDQUN4QyxJQUFHLEFBQW9CLFdBQXBCLElBQUksQ0FBQ2lELFlBQVksRUFBVSxPQUFPZ08sUUFBTSxZQUFVO2dDQUNyRCxJQUFHLEFBQW9CLFdBQXBCLElBQUksQ0FBQ2hPLFlBQVksRUFBVSxPQUFPZ08sUUFBTSxZQUFVO2dDQUNyRCxPQUFPQSxRQUFPQyxPQUFLLFlBQVdDLGNBQVksWUFBVSxZQUFhLEFBQWdCLGFBQWhCLElBQUksQ0FBQ3pSLFFBQVEsR0FBWSxZQUFXLEFBQWdCLGNBQWhCLElBQUksQ0FBQ0EsUUFBUSxHQUFhLFlBQVUzRzs0QkFDM0k7NEJBQ0EsSUFBR2tDLEFBQU8sWUFBUEEsTUFBZSxPQUFPZ1csUUFBT0MsT0FBSyxZQUFXQyxjQUFZLFlBQVUsWUFBYyxJQUFJLENBQUN4TyxjQUFjLElBQUUsSUFBSSxDQUFDSSxjQUFjLEdBQUMsSUFBRSxJQUFHLFlBQVU7NEJBQzVJLElBQUc5SCxBQUFPLFdBQVBBLE1BQWMsT0FBT2dXLFFBQU9DLE9BQUssWUFBV0MsY0FBWSxZQUFVLFlBQVk7NEJBQ2pGLElBQUdsVyxBQUFPLFlBQVBBLE1BQWUsT0FBT2dXLFFBQU9DLE9BQUssWUFBV0MsY0FBWSxZQUFVLFlBQVk7NEJBQ2xGLElBQUdsVyxBQUFPLGNBQVBBLE1BQWlCLE9BQU07NEJBQzFCLElBQUdBLEFBQU8sV0FBUEEsTUFBYyxPQUFPZ1csUUFBTSxZQUFVOzRCQUN4QyxJQUFHaFcsQUFBTyxXQUFQQSxNQUFjLE9BQU9nVyxRQUFPQyxPQUFLLFlBQVdDLGNBQVksWUFBVSxZQUFhLElBQUksQ0FBQ3RPLGFBQWEsSUFBRSxJQUFJLENBQUNFLGNBQWMsR0FBQyxJQUFFLElBQUUsWUFBVTs0QkFDeEksSUFBRzlILEFBQU8sV0FBUEEsTUFBYyxPQUFNOzRCQUN2QixJQUFHQSxBQUFPLFdBQVBBLE1BQWMsT0FBT2dXLFFBQU0sWUFBVTs0QkFDeEMsSUFBR2hXLEFBQU8sV0FBUEEsTUFBYyxPQUFPZ1csUUFBTSxZQUFVOzRCQUN4QyxJQUFHaFcsQUFBTyxjQUFQQSxNQUFpQixPQUFPZ1csUUFBTSxZQUFVOzRCQUMzQyxJQUFHaFcsQUFBTyxXQUFQQSxNQUFjLE9BQU9nVyxRQUFNLFlBQVU7NEJBQ3hDLElBQUdoVyxBQUFPLFlBQVBBLE1BQWUsT0FBT2dXLFFBQU0sWUFBVTs0QkFDekMsSUFBR2hXLEFBQU8sWUFBUEEsTUFBZSxPQUFPZ1csUUFBTSxZQUFVOzRCQUN6QyxJQUFHaFcsQUFBTyxlQUFQQSxNQUFrQixPQUFPOzRCQUM1QixJQUFHQSxBQUFPLGVBQVBBLE1BQWtCLE9BQU87NEJBQzVCLElBQUdBLEFBQU8sYUFBUEEsTUFBZ0IsT0FBTzs0QkFDMUIsSUFBR0EsQUFBTyxrQkFBUEEsTUFBcUIsT0FBUSxJQUFJLENBQUMwSCxjQUFjLElBQUUsSUFBSSxDQUFDSSxjQUFjLEdBQUMsSUFBRSxJQUFHLFlBQVU7NEJBQ3hGLElBQUc5SCxBQUFPLGVBQVBBLE1BQWtCLE9BQU87NEJBQzVCLElBQUdBLEFBQU8sYUFBUEEsTUFBZ0IsT0FBTzs0QkFDMUIsSUFBR0EsQUFBTyxpQkFBUEEsTUFBb0IsT0FBT2dXLFFBQU0sWUFBVTs0QkFDOUMsSUFBR2hXLEFBQU8sZUFBUEEsTUFBa0IsT0FBT2dXLFFBQU0sWUFBVTs0QkFDNUMsSUFBR2hXLEFBQU8sZ0JBQVBBLE1BQW1CLE9BQU9nVyxRQUFNLFlBQVU7NEJBQzdDLElBQUdoVyxBQUFPLGtCQUFQQSxNQUFxQixPQUFPZ1csUUFBTSxZQUFVOzRCQUMvQyxJQUFHaFcsQUFBTyxnQkFBUEEsTUFBbUIsT0FBT2dXLFFBQU0sWUFBVTs0QkFDN0MsSUFBR2hXLEFBQU8saUJBQVBBLE1BQW9CLE9BQU9nVyxRQUFNLFlBQVU7NEJBQzlDLElBQUdoVyxBQUFPLFlBQVBBLE1BQWUsT0FBT2dXLFFBQU9DLE9BQUssWUFBV0MsY0FBWSxZQUFVLFlBQWEsSUFBSSxDQUFDdk8sY0FBYyxJQUFFLElBQUksQ0FBQ0csY0FBYyxHQUFDLElBQUUsSUFBRSxZQUFVOzRCQUMxSSxJQUFHOUgsQUFBTyxZQUFQQSxNQUFlLE9BQU9nVyxRQUFRLElBQUksQ0FBQ3RPLGNBQWMsSUFBRSxJQUFJLENBQUNJLGNBQWMsR0FBQyxJQUFFLElBQUcsWUFBVSxZQUFhLElBQUksQ0FBQ0osY0FBYyxJQUFFLElBQUksQ0FBQ0ksY0FBYyxHQUFDLElBQUUsSUFBRyxZQUFVOzRCQUM5SixJQUFHOUgsQUFBTyxZQUFQQSxNQUFlLE9BQU9nVyxRQUFNLFlBQVU7NEJBQ3pDLElBQUdoVyxBQUFPLG9CQUFQQSxNQUF1QixPQUFPZ1csUUFBTSxZQUFVOzRCQUNqRCxPQUFPbFk7d0JBQ1Q7d0JBRUFxWTs0QkFBWSxJQUFHLEFBQWlCLE1BQWpCLElBQUksQ0FBQ3JSLFNBQVMsRUFBSyxPQUFNOzRCQUFNLElBQUcsQUFBaUIsTUFBakIsSUFBSSxDQUFDQSxTQUFTLEVBQUssT0FBTTs0QkFBTyxPQUFNO3dCQUFNO3dCQUU3RjJGOzRCQUNFLElBQUcsQUFBbUIsV0FBbkIsSUFBSSxDQUFDakgsV0FBVyxFQUFVOzRCQUM3QixJQUFJb1MsT0FBSyxJQUFJLENBQUNSLFdBQVcsSUFBSVUsT0FBSyxJQUFJLENBQUNSLFdBQVcsSUFBSTVVLEtBQUcsSUFBSSxDQUFDNlUsU0FBUzs0QkFDdkUsSUFBSWEsS0FBRyxJQUFJLENBQUNaLEtBQUssQ0FBQyxJQUFJLENBQUMvUyxPQUFPLEdBQUN4QixLQUFLb1UsS0FBSyxDQUFDTyxPQUFLLElBQUcsR0FBRTNVLEtBQUtzTixHQUFHLENBQUMsR0FBRTlRLE9BQUttWTs0QkFDcEUsSUFBSXRVLEtBQUcsSUFBSSxDQUFDa1UsS0FBSyxDQUFDLElBQUksQ0FBQzlTLE9BQU8sR0FBQ3pCLEtBQUtvVSxLQUFLLENBQUNTLE9BQUssSUFBRyxHQUFFN1UsS0FBS3NOLEdBQUcsQ0FBQyxHQUFFN1EsT0FBS29ZOzRCQUNwRSxJQUFJTyxTQUFPLEVBQUUsRUFBQ0MsYUFBVyxDQUFDLEdBQUVDLGFBQVcsQ0FBQyxHQUFFaE0sTUFBS2lNLElBQUdDLE1BQUtDLFFBQU9DLE9BQU1DLFVBQVNDOzRCQUM3RSxJQUFJQyxLQUFHLElBQUksQ0FBQzdNLFlBQVksR0FBQyxJQUFFLEdBQUU4TSxLQUFHLElBQUksQ0FBQzdNLFNBQVMsR0FBQyxJQUFFOzRCQUNqRCxJQUFJOE0sZ0JBQWMsR0FBRXZVLFVBQVEsSUFBSSxDQUFDQSxPQUFPLEVBQUNDLFVBQVEsSUFBSSxDQUFDQSxPQUFPOzRCQUM3RCxJQUFJRSxZQUFVLElBQUksQ0FBQ0EsU0FBUyxFQUFDQyxZQUFVLElBQUksQ0FBQ0EsU0FBUzs0QkFDckQsSUFBSW9VLGFBQVcsSUFBSSxDQUFDL1AsWUFBWSxFQUFDRCxXQUFTLElBQUksQ0FBQ0EsUUFBUTs0QkFDdkQsSUFBSSxJQUFJbEgsSUFBRSxHQUFFQSxJQUFFK1YsTUFBSy9WLElBQUk7Z0NBQ3JCOFcsV0FBUyxBQUFDdlYsQ0FBQUEsS0FBR3ZCLENBQUFBLElBQUd0QyxPQUFLMlk7Z0NBQ3JCLElBQUksSUFBSXRXLElBQUUsR0FBRUEsSUFBRThWLE1BQUs5VixJQUFJO29DQUNyQnlLLE9BQUssSUFBSSxDQUFDcEssS0FBSyxDQUFDMFcsV0FBUy9XLEVBQUU7b0NBQzNCLElBQUl5Szt3Q0FDSixJQUFJMk0sV0FBUzNNLEtBQUt6SyxDQUFDLEtBQUcyQyxXQUFTOEgsS0FBS3hLLENBQUMsS0FBRzJDO3dDQUN4QyxJQUFHLENBQUN3VSxVQUNGOzRDQUFBLElBQUczTSxBQUFZLFlBQVpBLEtBQUt2SyxJQUFJLElBQVl1SyxBQUFZLFlBQVpBLEtBQUt2SyxJQUFJLElBQVl1SyxBQUFZLGtCQUFaQSxLQUFLdkssSUFBSSxFQUFpQmdYLGlCQUFlO2lEQUNqRixJQUFHek0sQUFBWSxZQUFaQSxLQUFLdkssSUFBSSxFQUFXZ1gsaUJBQWU7aURBQ3RDLElBQUd6TSxBQUFZLFdBQVpBLEtBQUt2SyxJQUFJLEVBQVVnWCxpQkFBZTt3Q0FBQzt3Q0FFN0NSLEtBQUdGLFVBQVUsQ0FBQy9MLEtBQUt2SyxJQUFJLENBQUM7d0NBQ3hCLElBQUcsQ0FBQ3dXLElBQUdBLEtBQUdGLFVBQVUsQ0FBQy9MLEtBQUt2SyxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMrVixLQUFLLENBQUN4TCxLQUFLdkssSUFBSTt3Q0FDcER5VyxPQUFLO3dDQUNMLElBQUdTLFVBQVM7NENBQUNWLEtBQUc7NENBQVVDLE9BQUs7d0NBQUcsT0FDN0IsSUFBR2xNLEFBQVksV0FBWkEsS0FBS3ZLLElBQUksRUFBVXlXLE9BQUs7NkNBQzNCLElBQUdsTSxBQUFZLFdBQVpBLEtBQUt2SyxJQUFJLEVBQVV5VyxPQUFLOzZDQUMzQixJQUFHbE0sQUFBWSxXQUFaQSxLQUFLdkssSUFBSSxFQUFVeVcsT0FBSzs2Q0FDM0IsSUFBR2xNLEFBQVksY0FBWkEsS0FBS3ZLLElBQUksRUFBYXlXLE9BQUs7NkNBQzlCLElBQUdsTSxBQUFZLFlBQVpBLEtBQUt2SyxJQUFJLEVBQVd5VyxPQUFLOzZDQUM1QixJQUFHbE0sQUFBWSxZQUFaQSxLQUFLdkssSUFBSSxFQUFXeVcsT0FBSzs2Q0FDNUIsSUFBR2xNLEFBQVksb0JBQVpBLEtBQUt2SyxJQUFJLEVBQW1CeVcsT0FBSzt3Q0FDekNDLFNBQVFPLGNBQVkxTSxLQUFLekssQ0FBQyxLQUFHOEMsYUFBVzJILEtBQUt4SyxDQUFDLEtBQUc4QyxZQUFXLFlBQVdvRSxXQUFTLFlBQVU7d0NBQzFGMlAsV0FBU0osS0FBRyxNQUFJRTt3Q0FDaEJDLFFBQU1KLFVBQVUsQ0FBQ0ssU0FBUzt3Q0FDMUIsSUFBRyxDQUFDRCxPQUFNOzRDQUNSQSxRQUFNLHNCQUFvQkgsS0FBRyxpQ0FBK0JNLEtBQUcscUJBQW1CSixTQUFPLFlBQVVoVyxLQUFHLGVBQWFBLEtBQUcsb0JBQWtCQSxLQUFHLGtCQUFnQnFXLEtBQUc7NENBQzlKUixVQUFVLENBQUNLLFNBQVMsR0FBQ0Q7d0NBQ3ZCO3dDQUNBTixPQUFPN1YsSUFBSSxDQUFDOzRDQUFDVixHQUFFeUssS0FBS3pLLENBQUM7NENBQUNDLEdBQUV3SyxLQUFLeEssQ0FBQzs0Q0FBQzBXLE1BQUtBOzRDQUFLRSxPQUFNQTt3Q0FBSzs7Z0NBQ3REOzRCQUNGOzRCQUNBLElBQUksQ0FBQ25VLG9CQUFvQixHQUFDd1U7NEJBQzFCLElBQUksQ0FBQ3pVLFlBQVksR0FBQzhUOzRCQUNsQixJQUFJLENBQUNuTyxPQUFPLEdBQUMsQUFBd0IsYUFBeEIsSUFBSSxDQUFDbkQsZ0JBQWdCLEdBQVksZUFBYyxBQUF3QixVQUF4QixJQUFJLENBQUNBLGdCQUFnQixHQUFTLFlBQVcsQUFBZ0IsWUFBaEIsSUFBSSxDQUFDTixRQUFRLEdBQVcsYUFBVyxBQUFDLENBQWdCLGFBQWhCLElBQUksQ0FBQ0EsUUFBUSxHQUFZLFlBQVcsQUFBZ0IsY0FBaEIsSUFBSSxDQUFDQSxRQUFRLEdBQWEsYUFBVyxNQUFLLElBQUksSUFBSSxDQUFDNEQsU0FBVzs0QkFDM08sSUFBSSxDQUFDcEYsT0FBTyxHQUFDLElBQUksQ0FBQzhCLGdCQUFnQixHQUFDLFFBQU0sSUFBSSxDQUFDbUQsT0FBTyxHQUFDLE1BQUksSUFBSSxDQUFDRixZQUFZLEdBQUMsUUFBTSxJQUFJLENBQUNqRixJQUFJLEdBQUMsTUFBSSxJQUFJLENBQUNELGFBQWEsR0FBQyxPQUFNLEtBQUksQ0FBQ29HLFNBQVMsQ0FBQyxJQUFJLENBQUNwRyxhQUFhLENBQUMsSUFBRSxLQUFHLFNBQU8sSUFBSSxDQUFDMEcsS0FBSyxHQUFDLFFBQU0sSUFBSSxDQUFDRCxFQUFFLEdBQUMsUUFBTSxJQUFJLENBQUNILFNBQVMsR0FBQyxNQUFJLElBQUksQ0FBQytNLFNBQVM7NEJBQ3ZPLElBQUcsQUFBa0IsV0FBbEIsSUFBSSxDQUFDbFMsVUFBVSxFQUFVLElBQUksQ0FBQ2dMLFNBQVM7d0JBQzVDO3dCQUNBckM7NEJBQ0UsSUFBSXVLLE9BQUssSUFBSSxDQUFDMVUsT0FBTyxFQUFDMlUsT0FBSyxJQUFJLENBQUMxVSxPQUFPOzRCQUN2QyxJQUFHLElBQUksQ0FBQ0MsUUFBUSxHQUFDLEdBQUcsSUFBRyxJQUFJLENBQUNELE9BQU8sR0FBQyxLQUFHLENBQUMsSUFBSSxDQUFDZ1QsT0FBTyxDQUFDLElBQUksQ0FBQ2pULE9BQU8sRUFBQyxJQUFJLENBQUNDLE9BQU8sR0FBQyxJQUFHO2dDQUFDLElBQUksQ0FBQ0EsT0FBTztnQ0FBRyxJQUFJLENBQUNDLFFBQVE7NEJBQUUsT0FBTSxJQUFJLENBQUNBLFFBQVEsR0FBQztpQ0FDaEksSUFBSSxJQUFJLENBQUMrUyxPQUFPLENBQUMsSUFBSSxDQUFDalQsT0FBTyxFQUFDLElBQUksQ0FBQ0MsT0FBTyxHQUFDLElBQXdDLElBQUksQ0FBQ0MsUUFBUSxHQUFDO2lDQUFuRDtnQ0FBQyxJQUFJLENBQUNELE9BQU87Z0NBQUcsSUFBSSxDQUFDQyxRQUFRLEdBQUM7NEJBQUM7NEJBQ2xGLElBQUkwVSxRQUFNRixTQUFPLElBQUksQ0FBQzFVLE9BQU8sSUFBRTJVLFNBQU8sSUFBSSxDQUFDMVUsT0FBTzs0QkFDbEQsSUFBSTRVLGdCQUFjRDs0QkFDbEIsSUFBSUUsZUFBYSxJQUFJLENBQUM3UCxjQUFjLElBQUUsQUFBQyxDQUEwQixJQUExQixJQUFJLENBQUNsRixvQkFBb0IsQUFBQyxNQUFLOzRCQUN0RSxJQUFJZ1YsZUFBYSxJQUFJLENBQUM3UCxjQUFjLElBQUUsQUFBQyxDQUEwQixJQUExQixJQUFJLENBQUNuRixvQkFBb0IsQUFBQyxNQUFLOzRCQUN0RSxJQUFJaVYsZ0JBQWMsSUFBSSxDQUFDN1AsYUFBYSxJQUFFLEFBQUMsQ0FBMEIsSUFBMUIsSUFBSSxDQUFDcEYsb0JBQW9CLEFBQUMsTUFBSzs0QkFDdEUsSUFBRytVLGdCQUFjQyxnQkFBY0MsZUFBYztnQ0FDM0MsSUFBSSxDQUFDM1AsY0FBYyxHQUFDLEFBQUMsS0FBSSxDQUFDQSxjQUFjLEdBQUMsS0FBRztnQ0FDNUMsSUFBRyxBQUFzQixNQUF0QixJQUFJLENBQUNBLGNBQWMsSUFBTSxBQUFzQixNQUF0QixJQUFJLENBQUNBLGNBQWMsRUFBS3dQLGdCQUFjOzRCQUNwRTs0QkFDQSxJQUFHLElBQUksQ0FBQ3ZQLGNBQWMsRUFBQztnQ0FDckIsSUFBSSxDQUFDRSxXQUFXO2dDQUNoQixJQUFHLElBQUksQ0FBQ0EsV0FBVyxJQUFFLElBQUc7b0NBQ3RCLElBQUksQ0FBQ0EsV0FBVyxHQUFDO29DQUFHLElBQUksQ0FBQ0csWUFBWSxHQUFDLEFBQUMsS0FBSSxDQUFDQSxZQUFZLEdBQUMsS0FBRztvQ0FDNUQsSUFBSSxDQUFDSixZQUFZLEdBQUMsQUFBb0IsTUFBcEIsSUFBSSxDQUFDSSxZQUFZLEdBQUssVUFBUyxBQUFvQixNQUFwQixJQUFJLENBQUNBLFlBQVksR0FBSyxTQUFPO29DQUM5RWtQLGdCQUFjO2dDQUNoQjs0QkFDRjs0QkFDQSxJQUFHQSxlQUFjLElBQUksQ0FBQzdNLFdBQVc7d0JBQ25DO3dCQUNBaU47NEJBQVcsSUFBSSxDQUFDQyxPQUFPLENBQUM7d0JBQUc7d0JBQzNCQzs0QkFBWSxJQUFJLENBQUNELE9BQU8sQ0FBQzt3QkFBRTt3QkFDM0JBLFNBQVFFLEVBQUU7NEJBQ1IsSUFBSUMsS0FBRyxJQUFJLENBQUNyVixPQUFPLEdBQUNvVjs0QkFDcEIsSUFBR0MsS0FBRyxLQUFHQSxNQUFJcmEsTUFBSzs0QkFDbEIsSUFBRyxDQUFDLElBQUksQ0FBQ2lZLE9BQU8sQ0FBQ29DLElBQUcsSUFBSSxDQUFDcFYsT0FBTyxHQUFFO2dDQUFDLElBQUksQ0FBQ0QsT0FBTyxHQUFDcVY7Z0NBQUcsSUFBSSxDQUFDOVUsTUFBTSxHQUFDO2dDQUFRLElBQUksQ0FBQ3lILFdBQVc7Z0NBQUc7NEJBQU07NEJBQ2hHLElBQUcsSUFBSSxDQUFDckQsUUFBUSxJQUFFLElBQUksQ0FBQzFFLE9BQU8sR0FBQyxLQUFHLENBQUMsSUFBSSxDQUFDZ1QsT0FBTyxDQUFDb0MsSUFBRyxJQUFJLENBQUNwVixPQUFPLEdBQUMsTUFBSSxDQUFDLElBQUksQ0FBQ2dULE9BQU8sQ0FBQyxJQUFJLENBQUNqVCxPQUFPLEVBQUMsSUFBSSxDQUFDQyxPQUFPLEdBQUMsSUFBRztnQ0FBQyxJQUFJLENBQUNELE9BQU8sR0FBQ3FWO2dDQUFHLElBQUksQ0FBQ3BWLE9BQU87Z0NBQUcsSUFBSSxDQUFDTSxNQUFNLEdBQUM7Z0NBQWEsSUFBSSxDQUFDeUgsV0FBVzs0QkFBRSxPQUNyTCxJQUFJLENBQUN6SCxNQUFNLEdBQUM7d0JBQ25CO3dCQUNBK1U7NEJBQU8sSUFBRyxBQUFnQixNQUFoQixJQUFJLENBQUNwVixRQUFRLElBQU0sSUFBSSxDQUFDK1MsT0FBTyxDQUFDLElBQUksQ0FBQ2pULE9BQU8sRUFBQyxJQUFJLENBQUNDLE9BQU8sR0FBQyxJQUFHO2dDQUFDLElBQUksQ0FBQ0MsUUFBUSxHQUFDO2dDQUFHLElBQUksQ0FBQ0ssTUFBTSxHQUFDO2dDQUFPLElBQUksQ0FBQ3lILFdBQVc7NEJBQUU7d0JBQUM7d0JBRS9IdU4sU0FBUWxZLENBQUMsRUFBQ0MsQ0FBQzs0QkFDVCxJQUFJLENBQUM2QyxTQUFTLEdBQUM5Qzs0QkFBRSxJQUFJLENBQUMrQyxTQUFTLEdBQUM5Qzs0QkFDaEMsSUFBSXdLLE9BQUssSUFBSSxDQUFDa0gsTUFBTSxDQUFDM1IsR0FBRUM7NEJBQUcsSUFBRyxDQUFDd0ssTUFBSyxZQUFDLElBQUksQ0FBQ0UsV0FBVzs0QkFDcEQsSUFBRzNLLE1BQUksSUFBSSxDQUFDMkMsT0FBTyxJQUFFMUMsTUFBSSxJQUFJLENBQUMyQyxPQUFPLEVBQUM7Z0NBQUMsSUFBSSxDQUFDTSxNQUFNLEdBQUM7Z0NBQWtCLElBQUksQ0FBQ3lILFdBQVc7Z0NBQUc7NEJBQU07NEJBQzlGLElBQUd4SixLQUFLZ1gsR0FBRyxDQUFDblksSUFBRSxJQUFJLENBQUMyQyxPQUFPLElBQUV4QixLQUFLZ1gsR0FBRyxDQUFDbFksSUFBRSxJQUFJLENBQUMyQyxPQUFPLElBQUUsR0FBRTtnQ0FBQyxJQUFJLENBQUNNLE1BQU0sR0FBQztnQ0FBVSxJQUFJLENBQUN5SCxXQUFXO2dDQUFHOzRCQUFNOzRCQUN2RyxJQUFHLEFBQVksV0FBWixJQUFJLENBQUMxSCxJQUFJLEVBQVU7Z0NBQ3BCLElBQUd3SCxBQUFZLFlBQVpBLEtBQUt2SyxJQUFJLEVBQVcsWUFDckIsSUFBSSxDQUFDa1MsV0FBVyxDQUFDcFMsR0FBRUM7Z0NBR3JCLElBQUd3SyxBQUFZLG9CQUFaQSxLQUFLdkssSUFBSSxFQUFtQixZQUM3QixJQUFJLENBQUMrUCxlQUFlLENBQUNqUSxHQUFFQztnQ0FHekIsSUFBR3dLLEFBQVksVUFBWkEsS0FBS3ZLLElBQUksSUFBVXVLLEFBQVksY0FBWkEsS0FBS3ZLLElBQUksRUFBYTtvQ0FBQyxJQUFJLENBQUNnRCxNQUFNLEdBQUM7b0NBQWtCLElBQUksQ0FBQ3lILFdBQVc7b0NBQUc7Z0NBQU07Z0NBQ3BHLElBQUl5TixRQUFNM04sS0FBS3ZLLElBQUksRUFBRW1ZLFNBQU8sSUFBSSxDQUFDckgsWUFBWSxDQUFDb0g7Z0NBQzlDLElBQUdDLEFBQVMsV0FBVEEsVUFBaUIsSUFBSSxDQUFDaFAsUUFBUSxLQUFHZ1AsUUFBTztvQ0FBQyxJQUFJLENBQUNuVixNQUFNLEdBQUMsU0FBT21WLE9BQU8zRixXQUFXO29DQUFHLElBQUksQ0FBQy9ILFdBQVc7b0NBQUc7Z0NBQU07Z0NBQzdHLElBQUksQ0FBQ3RLLEtBQUssQ0FBQyxJQUFJLENBQUNnTSxPQUFPLENBQUNyTSxHQUFFQyxHQUFHLEdBQUNGLFNBQVNDLEdBQUVDLEdBQUU7Z0NBQU8sSUFBSStQLE1BQUk5QixPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQy9FLFNBQVM7Z0NBQUU0RyxHQUFHLENBQUNvSSxNQUFNLEdBQUMsQUFBQ3BJLENBQUFBLEdBQUcsQ0FBQ29JLE1BQU0sSUFBRSxLQUFHO2dDQUFFLElBQUksQ0FBQ2hQLFNBQVMsR0FBQzRHO2dDQUN2SSxJQUFJLENBQUNyRyxVQUFVO2dDQUNmLElBQUcsQUFBd0IsYUFBeEIsSUFBSSxDQUFDMUUsZ0JBQWdCLEVBQVk7b0NBQUMsSUFBSSxDQUFDSyxnQkFBZ0I7b0NBQUcsSUFBSSxDQUFDZ0gscUJBQXFCO2dDQUFFLE9BQ3BGLElBQUcsQUFBd0IsYUFBeEIsSUFBSSxDQUFDckgsZ0JBQWdCLEVBQVk7b0NBQUMsSUFBSSxDQUFDTSxnQkFBZ0I7b0NBQUcsSUFBSSxDQUFDaUgsa0JBQWtCO2dDQUFFLE9BQ3RGLElBQUcsQUFBd0IsVUFBeEIsSUFBSSxDQUFDdkgsZ0JBQWdCLEVBQVUsSUFBSSxDQUFDTyxhQUFhO2dDQUN6RCxJQUFHNFMsQUFBUSxXQUFSQSxPQUFlLElBQUksQ0FBQ3ZPLFNBQVMsR0FBQztnQ0FBSyxJQUFHdU8sQUFBUSxjQUFSQSxPQUFrQixJQUFJLENBQUN0TyxZQUFZLEdBQUM7Z0NBQzdFLElBQUksQ0FBQ3FILE1BQU0sQ0FBRWlILEFBQVEsV0FBUkEsU0FBZ0JBLEFBQVEsV0FBUkEsU0FBZ0JBLEFBQVEsY0FBUkEsU0FBbUJBLEFBQVEsYUFBUkEsUUFBa0IsSUFBRTtnQ0FBSSxJQUFHQyxBQUFTLFdBQVRBLFFBQWdCLElBQUksQ0FBQ3BILE9BQU8sQ0FBQ29IO2dDQUN4SCxJQUFJLENBQUM3SSxXQUFXO2dDQUFJLElBQUksQ0FBQ3RNLE1BQU0sR0FBQyxXQUFTa1YsTUFBTTFGLFdBQVcsS0FBRyxZQUFVLElBQUksQ0FBQ2hKLEtBQUssR0FBQyxTQUFPLElBQUksQ0FBQ0QsRUFBRSxHQUFDO2dDQUNqRyxJQUFHLEFBQXdCLFVBQXhCLElBQUksQ0FBQ3hFLGdCQUFnQixJQUFVLElBQUksQ0FBQ08sYUFBYSxJQUFFLElBQUksQ0FBQ0MsWUFBWSxFQUFDLFlBQUMsSUFBSSxDQUFDd0osVUFBVTtnQ0FDeEYsSUFBSSxDQUFDdEUsV0FBVztnQ0FBRzs0QkFDckI7NEJBQ0EsSUFBR0YsQUFBWSxVQUFaQSxLQUFLdkssSUFBSSxFQUFTO2dDQUFDLElBQUksQ0FBQ2dELE1BQU0sR0FBQztnQ0FBaUIsSUFBSSxDQUFDeUgsV0FBVztnQ0FBRzs0QkFBTTs0QkFDNUUsSUFBRyxDQUFDdkksVUFBVSxJQUFJLENBQUNZLGFBQWEsR0FBRTtnQ0FBQyxJQUFJLENBQUNFLE1BQU0sR0FBQztnQ0FBeUIsSUFBSSxDQUFDeUgsV0FBVztnQ0FBRzs0QkFBTTs0QkFDakcsSUFBRyxDQUFDLElBQUksQ0FBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUNwRyxhQUFhLENBQUMsSUFBRSxJQUFJLENBQUNvRyxTQUFTLENBQUMsSUFBSSxDQUFDcEcsYUFBYSxDQUFDLElBQUUsR0FBRTtnQ0FBQyxJQUFJLENBQUNFLE1BQU0sR0FBQyxZQUFVLElBQUksQ0FBQ0YsYUFBYSxDQUFDMFAsV0FBVztnQ0FBRyxJQUFJLENBQUMvSCxXQUFXO2dDQUFHOzRCQUFNOzRCQUMvSixJQUFJLENBQUN0SyxLQUFLLENBQUMsSUFBSSxDQUFDZ00sT0FBTyxDQUFDck0sR0FBRUMsR0FBRyxHQUFDRixTQUFTQyxHQUFFQyxHQUFFLElBQUksQ0FBQytDLGFBQWE7NEJBQUUsSUFBSXNWLE9BQUtwSyxPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQy9FLFNBQVM7NEJBQUVrUCxJQUFJLENBQUMsSUFBSSxDQUFDdFYsYUFBYSxDQUFDLElBQUU7NEJBQUUsSUFBSSxDQUFDb0csU0FBUyxHQUFDa1A7NEJBQUssSUFBSSxDQUFDMU8sV0FBVzs0QkFBRyxJQUFJLENBQUN1SCxNQUFNLENBQUM7NEJBQUcsSUFBSSxDQUFDM0IsV0FBVzs0QkFBRyxJQUFJLENBQUN0TSxNQUFNLEdBQUMsWUFBVSxJQUFJLENBQUNGLGFBQWEsQ0FBQzBQLFdBQVcsS0FBRyxZQUFVLElBQUksQ0FBQ2hKLEtBQUssR0FBQyxTQUFPLElBQUksQ0FBQ0QsRUFBRSxHQUFDOzRCQUFNLElBQUksQ0FBQ2tCLFdBQVc7d0JBQ2pVO3dCQUVBNE47NEJBQWMsSUFBSSxDQUFDdFYsSUFBSSxHQUFDOzRCQUFPLElBQUksQ0FBQ0MsTUFBTSxHQUFDOzRCQUFZLElBQUksQ0FBQ3lILFdBQVc7d0JBQUU7d0JBQ3pFNk47NEJBQWUsSUFBSSxDQUFDdlYsSUFBSSxHQUFDOzRCQUFRLElBQUksQ0FBQ0MsTUFBTSxHQUFDOzRCQUFhLElBQUksQ0FBQ3lILFdBQVc7d0JBQUU7d0JBQzVFa0k7NEJBQWEsSUFBSSxDQUFDN1AsYUFBYSxHQUFDOzRCQUFPLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQ3pEb0k7NEJBQWMsSUFBSSxDQUFDL1AsYUFBYSxHQUFDOzRCQUFRLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQzNEc0k7NEJBQWEsSUFBSSxDQUFDalEsYUFBYSxHQUFDOzRCQUFPLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQ3pEd0k7NEJBQWEsSUFBSSxDQUFDblEsYUFBYSxHQUFDOzRCQUFPLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQ3pEMEk7NEJBQWEsSUFBSSxDQUFDclEsYUFBYSxHQUFDOzRCQUFPLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQ3pENEk7NEJBQWMsSUFBSSxDQUFDdlEsYUFBYSxHQUFDOzRCQUFRLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQzNEOEk7NEJBQWMsSUFBSSxDQUFDelEsYUFBYSxHQUFDOzRCQUFRLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQzNEZ0o7NEJBQWMsSUFBSSxDQUFDM1EsYUFBYSxHQUFDOzRCQUFRLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQzNEa0o7NEJBQWMsSUFBSSxDQUFDN1EsYUFBYSxHQUFDOzRCQUFRLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQzNEb0o7NEJBQWMsSUFBSSxDQUFDL1EsYUFBYSxHQUFDOzRCQUFRLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQzNEdUo7NEJBQWEsSUFBSSxDQUFDbFIsYUFBYSxHQUFDOzRCQUFPLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBQ3pEeUo7NEJBQWEsSUFBSSxDQUFDcFIsYUFBYSxHQUFDOzRCQUFPLElBQUksQ0FBQzJILFdBQVc7d0JBQUU7d0JBRXpEOE47NEJBQVMsSUFBRyxJQUFJLENBQUN6VCxTQUFTLEdBQUNqSCxZQUFZeUMsTUFBTSxHQUFDLEdBQUU7Z0NBQUMsSUFBSSxDQUFDd0UsU0FBUztnQ0FBRyxJQUFJLENBQUM5QixNQUFNLEdBQUM7Z0NBQVUsSUFBSSxDQUFDeUgsV0FBVzs0QkFBRTt3QkFBQzt3QkFDM0crTjs0QkFBVSxJQUFHLElBQUksQ0FBQzFULFNBQVMsR0FBQyxHQUFFO2dDQUFDLElBQUksQ0FBQ0EsU0FBUztnQ0FBRyxJQUFJLENBQUM5QixNQUFNLEdBQUM7Z0NBQVcsSUFBSSxDQUFDeUgsV0FBVzs0QkFBRTt3QkFBQzt3QkFDMUZnTzs0QkFBZSxJQUFJLENBQUN6VixNQUFNLEdBQUM7NEJBQXFCLElBQUksQ0FBQ3lILFdBQVc7d0JBQUU7d0JBQ2xFc0U7NEJBQWEsSUFBSSxDQUFDTCx5QkFBeUI7NEJBQUcsSUFBRyxJQUFJLENBQUNwSyxTQUFTLEVBQUM7Z0NBQUNxRyxjQUFjLElBQUksQ0FBQ3JHLFNBQVM7Z0NBQUUsSUFBSSxDQUFDQSxTQUFTLEdBQUM7NEJBQUk7NEJBQUMsSUFBRyxJQUFJLENBQUNDLFFBQVEsRUFBQztnQ0FBQ29HLGNBQWMsSUFBSSxDQUFDcEcsUUFBUTtnQ0FBRSxJQUFJLENBQUNBLFFBQVEsR0FBQzs0QkFBSTs0QkFBQyxJQUFJLENBQUNmLFdBQVcsR0FBQzs0QkFBTyxJQUFJLENBQUNNLG1CQUFtQixHQUFDOzRCQUFPLElBQUksQ0FBQ0wsZ0JBQWdCLEdBQUM7NEJBQU8sSUFBSSxDQUFDRSxZQUFZLEdBQUM7NEJBQU8sSUFBSSxDQUFDQyxhQUFhLEdBQUM7NEJBQU8sSUFBSSxDQUFDRyxZQUFZLEdBQUM7NEJBQU8sSUFBSSxDQUFDQyxnQkFBZ0IsR0FBQzs0QkFBTyxJQUFJLENBQUNDLFVBQVUsR0FBQzs0QkFBTyxJQUFJLENBQUNDLFlBQVksR0FBQzs0QkFBTyxJQUFJLENBQUNDLGFBQWEsR0FBQzs0QkFBTyxJQUFJLENBQUNDLG1CQUFtQixHQUFDOzRCQUFPLElBQUksQ0FBQ1AsY0FBYyxHQUFDO3dCQUFNO3dCQUN2ZjZVOzRCQUFtQixJQUFHLElBQUksQ0FBQ3BVLFNBQVMsRUFBQztnQ0FBQ3FHLGNBQWMsSUFBSSxDQUFDckcsU0FBUztnQ0FBRSxJQUFJLENBQUNBLFNBQVMsR0FBQzs0QkFBSTs0QkFBQyxJQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFDO2dDQUFDb0csY0FBYyxJQUFJLENBQUNwRyxRQUFRO2dDQUFFLElBQUksQ0FBQ0EsUUFBUSxHQUFDOzRCQUFJOzRCQUFDLElBQUksQ0FBQ1YsY0FBYyxHQUFDOzRCQUFPLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUM7NEJBQU8sSUFBSSxDQUFDTixXQUFXLEdBQUM7NEJBQU8sSUFBSSxDQUFDQyxnQkFBZ0IsR0FBQzs0QkFBTyxJQUFJLENBQUNFLFlBQVksR0FBQzs0QkFBTyxJQUFJLENBQUNDLGFBQWEsR0FBQzs0QkFBTyxJQUFJLENBQUNpQixlQUFlLEdBQUM7NEJBQU8sSUFBSSxDQUFDdEIsZUFBZSxHQUFDOzRCQUFPLElBQUksQ0FBQ3dCLGdCQUFnQixHQUFDOzRCQUFTLElBQUksQ0FBQ3pCLFdBQVcsR0FBQzs0QkFBTyxJQUFJLENBQUNOLE1BQU0sR0FBQzt3QkFBbUI7d0JBQzNjMlY7NEJBQ0UsSUFBRyxJQUFJLENBQUN0UixZQUFZLElBQUUsQ0FBQyxJQUFJLENBQUNDLFVBQVUsRUFBQztnQ0FBQyxJQUFJLENBQUNBLFVBQVUsR0FBQztnQ0FBSyxJQUFJLENBQUN0RSxNQUFNLEdBQUM7Z0NBQWtCOzRCQUFNOzRCQUNqRyxJQUFJLENBQUNzRSxVQUFVLEdBQUM7NEJBQU0sSUFBSSxDQUFDeEQsbUJBQW1CLEdBQUM7NEJBQU8sSUFBSSxDQUFDRCxjQUFjLEdBQUM7NEJBQVEsSUFBSSxDQUFDSixnQkFBZ0IsR0FBQzs0QkFBUSxJQUFJLENBQUNFLFlBQVksR0FBQzs0QkFBTyxJQUFJLENBQUNDLGFBQWEsR0FBQzs0QkFBUSxJQUFJLENBQUNHLFlBQVksR0FBQzs0QkFBUSxJQUFJLENBQUNFLFVBQVUsR0FBQzs0QkFBUSxJQUFJLENBQUNDLFlBQVksR0FBQzs0QkFBUSxJQUFJLENBQUNDLGFBQWEsR0FBQzs0QkFBUSxJQUFJLENBQUNDLG1CQUFtQixHQUFDOzRCQUFRLElBQUksQ0FBQytJLFVBQVUsQ0FBQyxJQUFJLENBQUN2SSxXQUFXLElBQUU7NEJBQUksSUFBSSxDQUFDNUIsTUFBTSxHQUFDO3dCQUNoVztvQkFDRiJ9