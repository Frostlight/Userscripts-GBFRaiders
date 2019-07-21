/**
  The MIT License (MIT)

  Copyright (c) 2017 Frostlight

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

// ==UserScript==
// @ids          GBFRaidersBetterUI
// @name         GBF Raiders Better UI
// @namespace    http://tampermonkey.net/
// @version      0.8
// @author       Frostlight
// @description  Removes unnecessary things like images, useless top buttons, and makes everything bigger and bolder! Designed for using in a narrow window.
// @license      MIT; https://spdx.org/licenses/MIT.html
// @copyright	   2017, Frostlight (https://openuserjs.org/users/Frostlight)
// @icon         https://raw.githubusercontent.com/Frostlight/Userscripts-GBFRaiders/master/icon.png
// @homepageURL  https://github.com/Frostlight
// @supportURL   mailto:frostlight@users.noreply.github.com
// @domain       raw.github.com
// @domain       gbfraiders.com
// @domain       gbf.tipchatme.me.com
// @domain       gbfraiders.la-foret.me
// @include      https://www.gbfraiders.com/*
// @include      http://gbf.tipchatme.me/*
// @include      http://gbfraiders.la-foret.me/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle (`
    /* Main View Tables */
    tr td {
        height: 50px;
        padding: 0 !important;
    }
    tr td .items .item .image {
        display: none !important;
    }
    .content {
        padding: 5px !important;
    }

    /* Table Join Button */
    tr td button {
        height: 100%;
        width: 100%;
    }
    .rowed .extra.content .button, .stacking .extra.content .button, .smaller, .smaller>td>button {
        font-size: 14px !important;
    }
    /* Raid Delete Button */
    .selected-raids-label .delete {
        margin-left: 0 !important;
    }

    /* Top Bar Buttons */
    #donate-btn {
        display: none;
    }
    #help-btn {
        display: none;
    }
    #patreon-btn {
        display: none;
    }
    #clear-list {
        display: none;
    }
    #pause-list {
        display: none;
    }
    #enable-sound {
        overflow: hidden;
        height: 36px;
        padding: 0 !important;
        padding-right: 15px !important;
    }
    #sound-choice-dropdown {
        width: 200px;
    }
    /* Connection Status Height */
    #connection-status td {
        height: calc(36px - .2em);
        text-align: center;
    }

    /* Disable Toasts */
    #toast-container {
        display: none;
    }
`);

(function() {
    // Insert sound Button to dashboard
    var soundButton = document.querySelector('#enable-sound');
    var openSettingsButton = document.querySelector('#open-settings');
    var dashboard = document.querySelector('#dashboard');
    dashboard.insertBefore(soundButton, dashboard.firstChild);

    var soundChoiceDropdown = document.querySelector('#sound-choice-dropdown');
    var header = document.querySelector('#header');
    header.insertBefore(soundChoiceDropdown, dashboard.nextSibling);
    console.log('VINCENT' + header.firstChild);
})();
