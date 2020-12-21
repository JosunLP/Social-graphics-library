//#region setup
const jsdom = require("jsdom");
const buffer = require('buffer');
const events = require('events');
const eventEmitter = new events.EventEmitter();
require('canvas');

//#region global
global.Buffer = buffer.Buffer;

const {
    JSDOM
} = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><body id="body"></body>`, {
    url: "https://example.org/",
    referrer: "https://example.com/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
});

if (typeof global.btoa === 'undefined') {
    global.btoa = function(str) {
        return Buffer.from(str, 'binary').toString('base64');
    };
}

if (typeof global.atob === 'undefined') {
    global.atob = function(b64Encoded) {
        return Buffer.from(b64Encoded, 'base64').toString('binary');
    };
}

global.window = dom.window;
global.document = dom.window.document;
global.DOMParser = window.DOMParser;
global.XMLSerializer = window.XMLSerializer;
global.Image = window.Image;
global.Event = window.Event;
global.self = this;
//#endregion

//#region local
const SocialGraphicsLibrary = require("../dist/sgl.bundle");

const sgl = new SocialGraphicsLibrary();
const main = document.createElement("div");
const testDiv = document.createElement("div");

main.id = "main";
testDiv.id = "test";
testDiv.className = "test";

document.getElementById("body").appendChild(main);
document.getElementById("main").appendChild(testDiv);
//#endregion
//#endregion

//#region test

console.log(SocialGraphicsLibrary.info());

console.log();

sgl.generator("Tester", "Test", "false", "test", "svg");

eventEmitter.emit('load', window);

console.log(document.body.innerHTML + "\n");

//#endregion


console.log("Tests done...");