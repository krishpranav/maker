/**
 * @file router.cpp
 * @author Krisna Pranav
 * @version 1.0
 * @date 2025-03-04
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: view('MainAppPage')
        },
        {
            path: "/project",
            name: "project",
            component: view('ProjectPage')
        },
        {
            path: "/projectLoaded",
            name: "projectLoaded",
            component: view('ProjectLoadedPage')
        },
        {
            path: "/emulator",
            name: "emulator",
            component: view('EmulatorPage')
        },
        {
            path: "/setting",
            name: "setting",
            component: view('SettingPage')
        },
        {
            path: "/about",
            name: "About",
            component: view('AboutPage')
        },
    ]
});

function view(name) {
    return function (resolve) {
        require(['@/components/pages/' + name + '.vue'], resolve);
    };
}
