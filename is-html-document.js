"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHTMLDocument = void 0;
const content_type_1 = require("content-type");
const is_local_file_1 = require("./is-local-file");
const isHTMLDocument = (targetURL, responseHeaders) => {
    if ((0, is_local_file_1.isLocalFile)(targetURL)) {
        return true;
    }
    const contentTypeHeaderValue = responseHeaders['content-type'];
    let mediaType;
    try {
        mediaType = (0, content_type_1.parse)(contentTypeHeaderValue || '').type;
    }
    catch (e) {
        return false;
    }
    return mediaType === 'text/html';
};
exports.isHTMLDocument = isHTMLDocument;
