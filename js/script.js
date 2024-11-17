const CONFIGURATION = {
    "locations": [
        {"title":"Высокий замок","address1":"Высокий замок","address2":"Львов, Львовская область, Украина, 79000","coords":{"lat":49.848304081901844,"lng":24.039384177909852},"placeId":"ChIJKSET2hPdOkcR-FIW8zwGF-Y"}
    ],
    "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
    "mapsApiKey": "YOUR_API_KEY_HERE",
    "capabilities": {"input":false,"autocomplete":false,"directions":false,"distanceMatrix":false,"details":false,"actions":false}
};

document.addEventListener('DOMContentLoaded', async () => {
    await customElements.whenDefined('gmpx-store-locator');
    const locator = document.querySelector('gmpx-store-locator');
    locator.configureFromQuickBuilder(CONFIGURATION);

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIGURATION.mapsApiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
});

function initMap() {
    const mapOptions = {
        center: new google.maps.LatLng(49.848304081901844, 24.039384177909852), // Координати Высокого замку
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(49.848304081901844, 24.039384177909852),
        map: map,
        title: 'Высокий замок'
    });
}

(function _(a, b, c, d, e) {
    var f = window.console;
    f && Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 && f.warn("The Facebook JSSDK is more than 7 days old.");
    if (window[c])
        return;
    if (!window.JSON)
        return;
    var g = window[c] = {
        __buffer: {
            replay: function() {
                var a = this
                , b = function(d) {
                    var b = window[c];
                    [c][0].split(".").forEach(function(a) {
                        return b = b[a]
                    });
                    b.apply(null, a.calls[d][1])
                };
                for (var d = 0; d < this.calls.length; d++)
                    b(d);
                this.calls = []
            },
            calls: [],
            opts: null
        },
        getUserID: function() {
            return ""
        },
        getAuthResponse: function() {
            return null
        },
        getAccessToken: function() {
            return null
        },
        init: function(a) {
            g.__buffer.opts = a
        }
    };
    for (b = 0; b < d.length; b++) {
        f = d[b];
        if (f in g)
            continue;
        var h = f.split(".")
            , i = h.pop()
            , j = g;
        for (var k = 0; k < h.length; k++)
            j = j[h[k]] || (j[h[k]] = {});
        j[i] = function(a) {
            if (a === "init")
                return;
            return function() {
                g.__buffer.calls.push([a, Array.prototype.slice.call(arguments)])
            }
        }(f)
    }
    k = document.createElement("script");
    k.src = a;
    k.async = !0;
    e && (k.crossOrigin = "anonymous");
    h = document.getElementsByTagName("script")[0];
    h.parentNode && h.parentNode.insertBefore(k, h)
}
)("https:\/\/connect.facebook.net\/uk_UA\/sdk.js?hash=04f12c8cbb04e3d9f6c802ea8b01f71d", 1731843775, "FB", ["AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.clearAppVersion", "AppEvents.clearUserID", "AppEvents.getAppVersion", "AppEvents.getUserID", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "AppEvents.setAppVersion", "AppEvents.setUserID", "AppEvents.updateUserProperties", "Canvas.Plugin.showPluginElement", "Canvas.Plugin.hidePluginElement", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.startTimer", "Canvas.stopTimer", "Event.subscribe", "Event.unsubscribe", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"], true);
