try {
    window.localStorage.clear("outdated-browser");
} catch (err) {
    // ignore
}
function outdatedBrowserMarker() {
    try {
        window.console.log('Outdated / Unsupported browser detected');
        // replace root message, in case the outdated-browser message does not work and not visible
        document.getElementById("root").innerHTML = document.getElementById("root").innerHTML +
        '<p style="font-family: sans-serif; text-align: center; text-transform: uppercase">This website may not support your browser</p>' +
        '<p style="font-family: sans-serif; text-align: center; "><b><a href="http://outdatedbrowser.com/">Update your browser</a></b> to view this website correctly' +
                "<br/>or <b>dismiss the message</b> and continue as it works</p>";
        window.localStorage.setItem("outdated-browser", "true");
    } catch (err) {
        // ignore
    }
}
var imgTag = '<img src="/outdated-pixel.png" style="visibility: hidden;" height="0" width="0" onload="outdatedBrowserMarker()" />';
outdatedBrowserRework({
    fullScreen: true,
    backgroundColor: '#1a283a',
    textColor: 'white',
    browserSupport: {
        // see https://caniuse.com/#search=proxy
        'Chrome': 49,
        'Edge': 12,
        'Safari': 10,
        'Mobile Safari': 10,
        'Firefox': 18,
        'Opera': 36,
        // 'Vivaldi': false,
        // 'Yandex': false,
        'IE': false
    },
    messages: {
        en: {
            outOfDate: (imgTag + "This website requires newer version of your browser"),
            unsupported: (imgTag + "This website may not support your browser"),
            update: {
                web: ("<b>Update your browser</b> to view this website correctly" +
                "<br/>or <b>dismiss the message</b> and continue as it works"),
                googlePlay: ("<b>Install Chrome from Google Play</b> to view this website correctly" +
                "<br/>or <b>dismiss the message</b> and continue as it works"),
                appStore: ("<b>Update iOS from the Settings App</b> to view this website correctly" +
                "<br/>or <b>dismiss the message</b> and continue as it works")
            },
            url: "http://outdatedbrowser.com/",
            callToAction: 'Update browser',
            close: "Close"
        }
    }
});