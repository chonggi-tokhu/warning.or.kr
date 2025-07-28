var country = new URL(location.href).searchParams.get('c'); var mediasrc = ""; 
switch (country) { 
    case "china": 
        mediasrc = `./files/videos/for_china.video.mp4`; 
        break; 
    case "russia":
         mediasrc = ``; 
         break; 
    case "singapore":
         mediasrc = ``; 
         break; 
    case "korea":
         mediasrc = ``; 
         break; 
    default: 
        break; 
}
var media_el = null; 
var videoopt = !["1", "true", "yes", "Y"].includes(new URL(location.href).searchParams.get('safe')) ? 'stop' : false; 
function play_media(vidb) { 
    if (vidb === 'stop') {
     return; 
    } else if (!vidb) { 
        var aud = new Audio(mediasrc); 
        aud.loop = 'true'; 
        aud.autoplay = 'true'; 
        media_el = document.body.appendChild(aud);
        media_el.play(); 
    } else if (vidb === true) { 
        var vid = document.createElement("video"); 
        vid.src = mediasrc; vid.autoplay = 'true'; 
        vid.loop = 'true'; media_el = document.body.appendChild(vid); 
        media_el.style.position = 'fixed'; 
        media_el.style.top = '10%'; 
        media_el.style.left = '10%'; 
        media_el.width = 400; media_el.play(); 
    } 
} 
var event_types = { 
    'click': (ev) => { play_media(videoopt); }, 
    'mousemove': (ev) => { play_media(videoopt); }, 
    'mouseover': (ev) => { play_media(videoopt); }, 
    'scroll': (ev) => { play_media(videoopt); }, 
    'input': (ev) => { play_media(videoopt); }, 
}
    if (videoopt !== 'stop') { 
        Array.from(document.body.querySelectorAll('*')).forEach((el, idx, arr) => { 
            for (var key in event_types) { 
                el.addEventListener(key, event_types[key]); 
            }
        }); 
    }
