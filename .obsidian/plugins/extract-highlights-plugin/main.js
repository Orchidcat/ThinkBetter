'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var ExtractHighlightsPluginSettings = /** @class */ (function () {
    function ExtractHighlightsPluginSettings() {
        this.headlineText = "";
        this.addFootnotes = false;
        this.useBoldForHighlights = false;
        this.createLinks = false;
        this.autoCapitalize = false;
        this.createNewFile = false;
        this.explodeIntoNotes = false;
        this.openExplodedNotes = false;
        this.createContextualQuotes = false;
    }
    return ExtractHighlightsPluginSettings;
}());

var ExtractHighlightsPluginSettingsTab = /** @class */ (function (_super) {
    __extends(ExtractHighlightsPluginSettingsTab, _super);
    function ExtractHighlightsPluginSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    ExtractHighlightsPluginSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Extract Highlights Plugin" });
        new obsidian.Setting(containerEl)
            .setName("Heading Text")
            .setDesc("If set, will add `## Your Text`. Use $NOTE_TITLE to include title. Leave blank to omit. ")
            .addText(function (text) {
            return text
                .setPlaceholder("Highlights for $NOTE_TITLE")
                .setValue(_this.plugin.settings.headlineText)
                .onChange(function (value) {
                _this.plugin.settings.headlineText = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Use bold for highlights')
            .setDesc('If enabled, will include classic markdown bold (**) sections as highlights')
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.useBoldForHighlights).onChange(function (value) {
                _this.plugin.settings.useBoldForHighlights = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Enable Footnotes')
            .setDesc('If enabled, will add a footnote to the current document to each highlight in your list. Useful when you wan to keep track of which highlight came from which source file.')
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.addFootnotes).onChange(function (value) {
                _this.plugin.settings.addFootnotes = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Auto-capitalize first letter')
            .setDesc('If enabled, capitalizes the first letter of each highlight.')
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.autoCapitalize).onChange(function (value) {
                _this.plugin.settings.autoCapitalize = value;
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Create links')
            .setDesc('If enabled, will turn each highlight into a [[ link ]] to create a highlight MOC')
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.createLinks).onChange(function (value) {
                _this.plugin.settings.createLinks = value;
                // disable explode notes mode
                if (_this.plugin.settings.explodeIntoNotes && value == false) {
                    _this.plugin.settings.explodeIntoNotes = false;
                    _this.plugin.settings.openExplodedNotes = false;
                }
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Open new file with highlights')
            .setDesc('If enabled, opens a new file with the highlights copied into.')
            .addToggle(function (toggle) {
            return toggle.setValue(_this.plugin.settings.createNewFile).onChange(function (value) {
                _this.plugin.settings.createNewFile = value;
                // disable explode notes mode
                if (_this.plugin.settings.explodeIntoNotes && value == false) {
                    _this.plugin.settings.explodeIntoNotes = false;
                    _this.plugin.settings.openExplodedNotes = false;
                }
                _this.plugin.saveData(_this.plugin.settings);
            });
        });
        containerEl.createEl("h2", { text: "💥 Explode Notes Mode 💥" });
        containerEl.createEl("p", { text: "A secret mode that will take your highlighting to the next level. Only available if you have  'Create Links' and 'Create new File' enabled. After enabling both, close this window and open again to see options." });
        if (this.plugin.settings.createLinks && this.plugin.settings.createNewFile) {
            new obsidian.Setting(containerEl)
                .setName('Explode links into notes')
                .setDesc('If enabled, will turn each highlight into a note with the highlighted text as quote and a backlink to the MOC and source-file. Very powerful but use with caution!')
                .addToggle(function (toggle) {
                return toggle.setValue(_this.plugin.settings.explodeIntoNotes).onChange(function (value) {
                    _this.plugin.settings.explodeIntoNotes = value;
                    _this.plugin.saveData(_this.plugin.settings);
                });
            });
            new obsidian.Setting(containerEl)
                .setName('Open exploded notes on creation')
                .setDesc('If enabled, will open each of your exploded notes when you create them. Fun and useful to continue working in your highlight-notes right away!')
                .addToggle(function (toggle) {
                return toggle.setValue(_this.plugin.settings.openExplodedNotes).onChange(function (value) {
                    _this.plugin.settings.openExplodedNotes = value;
                    _this.plugin.saveData(_this.plugin.settings);
                });
            });
            new obsidian.Setting(containerEl)
                .setName('Create contextual quotes')
                .setDesc('If enabled, will quote the full line of your highlight, not just the highlight itself. Useful for keeping the context of your highlight.')
                .addToggle(function (toggle) {
                return toggle.setValue(_this.plugin.settings.createContextualQuotes).onChange(function (value) {
                    _this.plugin.settings.createContextualQuotes = value;
                    _this.plugin.saveData(_this.plugin.settings);
                });
            });
        }
    };
    return ExtractHighlightsPluginSettingsTab;
}(obsidian.PluginSettingTab));

var ToggleHighlight = /** @class */ (function () {
    function ToggleHighlight() {
    }
    ToggleHighlight.prototype.toggleHighlight = function (s, ch) {
        if (s == "")
            return "";
        if (s.indexOf(".") < 0) {
            return "==" + s + "==";
        }
        var left = s.substring(0, ch);
        var right = s.substring(ch);
        var marked = left + "$CURSOR$" + right;
        // https://regex101.com/r/BSpvV6/7
        // https://stackoverflow.com/a/5553924
        var p = marked.match(/(==(.*?)==)|[^.!?\s][^.!?]*(?:[.!?](?!['"]?\s|$)[^.!?]*)*[.!?]?['"]?(?=\s|$)/gm);
        var np = new Array();
        if (p.length > 0) {
            p.forEach(function (part) {
                if (typeof part !== 'undefined') {
                    if (part.trim() == "") {
                        return;
                    }
                    if (part.includes("$CURSOR$")) {
                        if (part.startsWith("==") && part.endsWith("==")) {
                            part = part.replace(/==/g, "");
                        }
                        else {
                            part = "==" + part + "==";
                        }
                        part = part.replace("$CURSOR$", "");
                        part = part.trim();
                    }
                    part = part.trim();
                    np.push(part);
                }
            });
            return np.join(" ");
        }
    };
    return ToggleHighlight;
}());

obsidian.addIcon('target', '<path d="M50 88C29.0132 88 12 70.9868 12 50C12 29.0132 29.0132 12 50 12C70.9868 12 88 29.0132 88 50C87.9761 70.9769 70.9769 87.9761 50 88ZM50 22.8571C35.0094 22.8571 22.8571 35.0094 22.8571 50C22.8571 64.9906 35.0094 77.1429 50 77.1429C64.9906 77.1429 77.1429 64.9906 77.1429 50C77.1429 35.0094 64.9906 22.8571 50 22.8571ZM50 66.2857C41.0056 66.2857 33.7143 58.9943 33.7143 50C33.7143 41.0056 41.0056 33.7143 50 33.7143C58.9943 33.7143 66.2857 41.0056 66.2857 50C66.2857 54.3192 64.5699 58.4616 61.5157 61.5157C58.4616 64.5699 54.3192 66.2857 50 66.2857Z" fill="#646464"/>');
var ExtractHighlightsPlugin = /** @class */ (function (_super) {
    __extends(ExtractHighlightsPlugin, _super);
    function ExtractHighlightsPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtractHighlightsPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.counter = 0;
                this.loadSettings();
                this.addSettingTab(new ExtractHighlightsPluginSettingsTab(this.app, this));
                this.statusBar = this.addStatusBarItem();
                this.addRibbonIcon('target', 'Extract Highlights', function () {
                    _this.extractHighlights();
                });
                this.addCommand({
                    id: "shortcut-extract-highlights",
                    name: "Shortcut for extracting highlights",
                    callback: function () { return _this.extractHighlights(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "±",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-highlight-sentence",
                    name: "Shortcut for highlighting sentence cursor is in",
                    callback: function () { return _this.createHighlight(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "—",
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    ExtractHighlightsPlugin.prototype.loadSettings = function () {
        var _this = this;
        this.settings = new ExtractHighlightsPluginSettings();
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var loadedSettings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        loadedSettings = _a.sent();
                        if (loadedSettings) {
                            // console.log("Found existing settings file");
                            this.settings.headlineText = loadedSettings.headlineText;
                            this.settings.addFootnotes = loadedSettings.addFootnotes;
                            this.settings.createLinks = loadedSettings.createLinks;
                            this.settings.autoCapitalize = loadedSettings.autoCapitalize;
                            this.settings.createNewFile = loadedSettings.createNewFile;
                            this.settings.explodeIntoNotes = loadedSettings.explodeIntoNotes;
                            this.settings.openExplodedNotes = loadedSettings.openExplodedNotes;
                            this.settings.createContextualQuotes = loadedSettings.createContextualQuotes;
                        }
                        else {
                            // console.log("No settings file found, saving...");
                            this.saveData(this.settings);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    ExtractHighlightsPlugin.prototype.extractHighlights = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var activeLeaf, name, processResults, highlightsText, highlights, baseNames, contexts, saveStatus, newBasenameMOC, i, content, newBasename, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        activeLeaf = (_a = this.app.workspace.activeLeaf) !== null && _a !== void 0 ? _a : null;
                        name = activeLeaf === null || activeLeaf === void 0 ? void 0 : activeLeaf.view.file.basename;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 12, , 13]);
                        if (!((_b = activeLeaf === null || activeLeaf === void 0 ? void 0 : activeLeaf.view) === null || _b === void 0 ? void 0 : _b.data)) return [3 /*break*/, 10];
                        processResults = this.processHighlights(activeLeaf.view);
                        highlightsText = processResults.markdown;
                        highlights = processResults.highlights;
                        baseNames = processResults.baseNames;
                        contexts = processResults.contexts;
                        saveStatus = this.saveToClipboard(highlightsText);
                        new obsidian.Notice(saveStatus);
                        newBasenameMOC = "Highlights for " + name + ".md";
                        if (!this.settings.createNewFile) return [3 /*break*/, 4];
                        // Add link back to Original
                        highlightsText += "## Source\n- [[" + name + "]]";
                        return [4 /*yield*/, this.saveToFile(newBasenameMOC, highlightsText)];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.app.workspace.openLinkText(newBasenameMOC, newBasenameMOC, true)];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        if (!(this.settings.createNewFile && this.settings.createLinks && this.settings.explodeIntoNotes)) return [3 /*break*/, 9];
                        i = 0;
                        _c.label = 5;
                    case 5:
                        if (!(i < baseNames.length)) return [3 /*break*/, 9];
                        content = "";
                        // add highlight as quote
                        content += "## Source\n";
                        if (this.settings.createContextualQuotes) {
                            // context quote
                            content += "> " + contexts[i] + "[^1]";
                        }
                        else {
                            // regular highlight quote
                            content += "> " + highlights[i] + "[^1]";
                        }
                        content += "\n\n";
                        content += "[^1]: [[" + name + "]]";
                        content += "\n";
                        newBasename = baseNames[i] + ".md";
                        return [4 /*yield*/, this.saveToFile(newBasename, content)];
                    case 6:
                        _c.sent();
                        if (!this.settings.openExplodedNotes) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.app.workspace.openLinkText(newBasename, newBasename, true)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 5];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        new obsidian.Notice("No highlights to extract.");
                        _c.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        e_1 = _c.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    ExtractHighlightsPlugin.prototype.saveToFile = function (filePath, mdString) {
        return __awaiter(this, void 0, void 0, function () {
            var fileExists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.vault.adapter.exists(filePath)];
                    case 1:
                        fileExists = _a.sent();
                        if (!fileExists) return [3 /*break*/, 2];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.app.vault.create(filePath, mdString)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExtractHighlightsPlugin.prototype.processHighlights = function (view) {
        var re;
        if (this.settings.useBoldForHighlights) {
            re = /(==|\<mark\>|\*\*)([\s\S]*?)(==|\<\/mark\>|\*\*)/g;
        }
        else {
            re = /(==|\<mark\>)([\s\S]*?)(==|\<\/mark\>)/g;
        }
        var markdownText = view.data;
        var basename = view.file.basename;
        var matches = markdownText.match(re);
        this.counter += 1;
        var result = "";
        var highlights = [];
        var baseNames = [];
        var contexts = [];
        var lines = markdownText.split("\n");
        var cleanedLines = [];
        for (var i = 0; i < lines.length; i++) {
            if (!(lines[i] == "")) {
                cleanedLines.push(lines[i]);
            }
        }
        if (matches != null) {
            if (this.settings.headlineText != "") {
                var text = this.settings.headlineText.replace(/\$NOTE_TITLE/, "" + basename);
                result += "## " + text + "\n";
            }
            for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                var entry = matches_1[_i];
                // Keep surrounding paragraph for context
                if (this.settings.createContextualQuotes) {
                    for (var i = 0; i < cleanedLines.length; i++) {
                        var match = cleanedLines[i].match(entry);
                        if (!(match == null) && match.length > 0) {
                            var val = cleanedLines[i];
                            if (!contexts.contains(val)) {
                                contexts.push(val);
                            }
                        }
                    }
                }
                // Clean up highlighting match
                var removeNewline = entry.replace(/\n/g, " ");
                var removeHighlightStart = removeNewline.replace(/==/g, "");
                var removeHighlightEnd = removeHighlightStart.replace(/\<mark\>/g, "");
                var removeMarkClosing = removeHighlightEnd.replace(/\<\/mark\>/g, "");
                var removeBold = removeMarkClosing.replace(/\*\*/g, "");
                var removeDoubleSpaces = removeBold.replace("  ", " ");
                removeDoubleSpaces = removeDoubleSpaces.replace("  ", " ");
                removeDoubleSpaces = removeDoubleSpaces.trim();
                if (this.settings.autoCapitalize) {
                    if (removeDoubleSpaces != null) {
                        removeDoubleSpaces = this.capitalizeFirstLetter(removeDoubleSpaces);
                    }
                }
                result += "- ";
                if (this.settings.createLinks) {
                    // First, sanitize highlight to be used as a file-link
                    // * " \ / | < > : ?
                    var sanitized = removeDoubleSpaces.replace(/\*|\"|\\|\/|\<|\>|\:|\?|\|/gm, "");
                    sanitized = sanitized.trim();
                    var baseName = sanitized;
                    if (baseName.length > 100) {
                        baseName = baseName.substr(0, 99);
                        baseName += "...";
                    }
                    result += "[[" + baseName + "]]";
                    highlights.push(sanitized);
                    baseNames.push(baseName);
                }
                else {
                    result += removeDoubleSpaces;
                    highlights.push(removeDoubleSpaces);
                }
                if (this.settings.addFootnotes) {
                    result += "[^" + this.counter + "]";
                }
                result += "\n";
            }
            if (this.settings.addFootnotes) {
                result += "\n";
                result += "[^" + this.counter + "]: [[" + basename + "]]\n";
            }
            result += "\n";
        }
        return { markdown: result, baseNames: baseNames, highlights: highlights, contexts: contexts };
    };
    ExtractHighlightsPlugin.prototype.saveToClipboard = function (data) {
        if (data.length > 0) {
            navigator.clipboard.writeText(data);
            return "Highlights copied to clipboard!";
        }
        else {
            return "No highlights found";
        }
    };
    ExtractHighlightsPlugin.prototype.createHighlight = function () {
        var mdView = this.app.workspace.activeLeaf.view;
        var doc = mdView.sourceMode.cmEditor;
        this.editor = doc;
        var cursorPosition = this.editor.getCursor();
        var lineText = this.editor.getLine(cursorPosition.line);
        // use our fancy class to figure this out
        var th = new ToggleHighlight();
        var result = th.toggleHighlight(lineText, cursorPosition.ch);
        // catch up on cursor
        var cursorDifference = -2;
        if (result.length > lineText.length) {
            cursorDifference = 2;
        }
        this.editor.replaceRange(result, { line: cursorPosition.line, ch: 0 }, { line: cursorPosition.line, ch: lineText.length });
        this.editor.setCursor({ line: cursorPosition.line, ch: cursorPosition.ch + cursorDifference });
    };
    ExtractHighlightsPlugin.prototype.capitalizeFirstLetter = function (s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
    return ExtractHighlightsPlugin;
}(obsidian.Plugin));

module.exports = ExtractHighlightsPlugin;


/* nosourcemap */