/**
 * @file preload.js
 * @author Krisna Pranav
 * @version 1.0
 * @date 2025-03-04
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

/**
 * preload help us to connect ide to electron app
 * This is like server/client relation
 */

const {
    contextBridge,
    ipcRenderer
} = require("electron");

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            let validChannels = ["toMain",
                'openWeb',
                'open-file-dialog',
                'open-project-direct',
                'save-as-file-project',
                'save-project',
                'open-file-dialog-project',
                'open-file-image',
                'command',
                'update-project',
                'app-close',
                'app-max',
                'app-min',
                'devtools',
                'emulator',
                'storage-get',
                'storage-set',
            ];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },

        receive: (channel, func) => {
            let validChannels = [
                "fromMain",
                'selected-file',
                'saved-file',
                'message',
                'image-selected',
                'terminal',
                'terminal-error',
                'build-success',
                'emulator',
                'emulator-terminal',
                'storage-back',
                'app-exit'
            ];
            
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
);