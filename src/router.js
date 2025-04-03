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
import view from "vue-router/src/components/view";

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
            component: view('ProjectPage')
        }
    ]
});

function view(name) {
    return function (resolve) {
        require(['@/components/page' + name + '.vue', resolve]);
    };
}