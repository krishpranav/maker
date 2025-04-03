/**
 * @file preload.js
 * @author Krisna Pranav
 * @version 1.0
 * @date 2025-03-04
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

const {
    contextBridge,
    ipcRenderer
} = require("electron");

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            let validChannels = []
        }
    }
);