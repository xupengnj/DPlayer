// stats.js: JavaScript Performance Monitor
const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
function animate() {
    stats.begin();
    // monitored code goes here
    stats.end();

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

initPlayers();
handleEvent();


function handleEvent() {
    document.getElementById('dplayer-dialog').addEventListener('click', (e) => {
        const $clickDom = e.currentTarget;
        const isShowStatus = $clickDom.getAttribute('data-show');

        if (isShowStatus) {
            document.getElementById('float-dplayer').style.display = 'none';
        } else {
            $clickDom.setAttribute('data-show', 1);
            document.getElementById('float-dplayer').style.display = 'block';
        }
    });

    document.getElementById('close-dialog').addEventListener('click', () => {
        const $openDialogBtnDom = document.getElementById('dplayer-dialog');

        $openDialogBtnDom.setAttribute('data-show', '');
        document.getElementById('float-dplayer').style.display = 'none';
    });
}

function initPlayers() {
    // dplayer-float
    window.dpFloat = new DPlayer({
        container: document.getElementById('dplayer-container'),
        preload: 'none',
        screenshot: true,
        video: {
            url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
            pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
            thumbnails: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
        },
        subtitle: {
            url: 'subtitle test'
        },
        danmaku: {
            id: '9E2E3368B56CDBB4',
            api: 'https://api.prprpr.me/dplayer/'
        }
    });
    // dp1
    window.dp1 = new DPlayer({
        container: document.getElementById('dplayer1'),
        preload: 'none',
        video: {
            url: 'https://v-cdn.zjol.com.cn/276984.mp4',
            pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
            thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg',
            hasNextVideo:true,
            goNextVideo:()=>console.log('11111'),
            logo:'http://chuantu.xyz/t6/740/1597976899x1700340449.png',
            portrait:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1671247724,3484152546&fm=26&gp=0.jpg',
            followOperate:()=>console.log('1111'),
            quality: [
                {
                    name: '4K高清',
                    url: 'https://v-cdn.zjol.com.cn/276984.mp4',
                    status:1,
                    goFunction:()=>console.log(2222)
                },
                {
                    name: '1080P',
                    url: 'https://v-cdn.zjol.com.cn/276984.mp4',
                    status:2,
                    goFunction:()=>console.log(23333333)
                },
                {
                    name: '720P',
                    url: 'https://v-cdn.zjol.com.cn/276984.mp4',
                
                },
                {
                    name: '360P',
                    url: 'https://v-cdn.zjol.com.cn/276984.mp4',
           
                },
               
              
               
            ],
            defaultQuality: 3,
        },
        theme: '#F27878',
        haveAdvertisement:false
  
  
    });
    window.dp1.recommend.setRecommendVisible();
    window.dp1.recommend.initRecommendList(
        [{"author_name":"乐顺U的你","fantype":1,"id":1,"imageurl":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1913214116,3912663704&fm=26&gp=0.jpg","paynum":32,"paystate":1,"state":3,"timelong":1402,"title":"乐顺U的你","secondd":0,"created_at":1597743731,"url":0,"ratio":360,"url_adver":"","jump_time":0,"url_720":"","url_360":"","like_num":9,"see_num":991},{"author_name":"发生生那阿","fantype":1,"id":4,"imageurl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596536775950&di=48039877414db9c022b3d240b10ed2e7&imgtype=0&src=http%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F07%2F96%2Faf%2F8a%2Ftup-island.jpg","paynum":0,"paystate":0,"state":1,"timelong":2985,"title":"发生生那阿","secondd":1,"created_at":1597743731,"url":0,"ratio":720,"url_adver":"","jump_time":0,"url_720":"","url_360":"","like_num":85,"see_num":742},{"author_name":"啊哦啊I生","fantype":1,"id":7,"imageurl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596536775949&di=7ef970c6ceeb58a41088eedd67766fb4&imgtype=0&src=http%3A%2F%2Fac-r.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F175%2F17552265.jpg","paynum":0,"paystate":0,"state":0,"timelong":2643,"title":"啊哦啊I生","secondd":0,"created_at":1597743731,"url":0,"ratio":720,"url_adver":"","jump_time":0,"url_720":"","url_360":"","like_num":77,"see_num":98},{"author_name":"顺年啊那I","fantype":1,"id":9,"imageurl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596536775948&di=bda4209dfcf7479d568e023565f87aa8&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F111%2F111145521.jpg","paynum":76,"paystate":1,"state":1,"timelong":2709,"title":"顺年啊那I","secondd":0,"created_at":1597743731,"url":0,"ratio":720,"url_adver":"","jump_time":0,"url_720":"","url_360":"","like_num":183,"see_num":466},{"author_name":"了发发看发","fantype":0,"id":12,"imageurl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596536986772&di=a4981ae416382c36e66312d09c605a2d&imgtype=0&src=http%3A%2F%2Fwww.51modo.cc%2Fupload%2Fkindeditor%2Fimage%2F20150301%2F20150301163748_86896.jpg","paynum":75,"paystate":1,"state":0,"timelong":905,"title":"了发发看发","secondd":1,"created_at":1597743731,"url":0,"ratio":720,"url_adver":"","jump_time":0,"url_720":"","url_360":"","like_num":0,"see_num":808},{"author_name":"生哪顺偶哦","fantype":1,"id":20,"imageurl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596534849532&di=23bb46b803b7c3713ba65d5d517279fe&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg","paynum":0,"paystate":0,"state":0,"timelong":6,"title":"生哪顺偶哦","secondd":1,"created_at":1597743731,"url":0,"ratio":360,"url_adver":"","jump_time":0,"url_720":"","url_360":"","like_num":85,"see_num":205}]
    );
    window.dp1.recommend.setRecommendFollow('+ 关注17万');
    window.dp1.recommend.setRecommendPortrait('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1913214116,3912663704&fm=26&gp=0.jpg')
    window.dp2 = new DPlayer({
        container: document.getElementById('dplayer2'),
        preload: 'none',
        autoplay: false,
        theme: '#FADFA3',
        loop: true,
        screenshot: true,
        airplay: true,
        hotkey: true,
        logo: 'https://i.loli.net/2019/06/06/5cf8c5d94521136430.png',
        volume: 0.2,
        mutex: true,
        video: {
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
            thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg',
            type: 'auto',
            logo:'http://chuantu.xyz/t6/740/1597976899x1700340449.png',
            portrait:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1671247724,3484152546&fm=26&gp=0.jpg',
        },
        subtitle: {
            url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.vtt',
            type: 'webvtt',
            fontSize: '25px',
            bottom: '10%',
            color: '#b7daff'
        },
        danmaku: {
            id: '9E2E3368B56CDBB4',
            api: 'https://api.prprpr.me/dplayer/',
            token: 'tokendemo',
            maximum: 3000,
            user: 'DIYgod',
            bottom: '15%',
            unlimited: true
        },
        contextmenu: [
            {
                text: 'custom contextmenu',
                link: 'https://github.com/MoePlayer/DPlayer'
            }
        ]
    });

    const events = [
        'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error',
        'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play',
        'playing', 'ratechange', 'seeked', 'seeking', 'stalled',
        'volumechange', 'waiting',
        'screenshot',
        'thumbnails_show', 'thumbnails_hide',
        'danmaku_show', 'danmaku_hide', 'danmaku_clear',
        'danmaku_loaded', 'danmaku_send', 'danmaku_opacity',
        'contextmenu_show', 'contextmenu_hide',
        'notice_show', 'notice_hide',
        'quality_start', 'quality_end',
        'destroy',
        'resize',
        'fullscreen', 'fullscreen_cancel', 'webfullscreen', 'webfullscreen_cancel',
        'subtitle_show', 'subtitle_hide', 'subtitle_change'
    ];
    const eventsEle = document.getElementById('events');
    for (let i = 0; i < events.length; i++) {
        dp2.on(events[i], (info) => {
            eventsEle.innerHTML += '<p>Event: ' + events[i] + '</p>';
            eventsEle.scrollTop = eventsEle.scrollHeight;
        });
    }

    // dp3
    // window.dp3 = new DPlayer({
    //     container: document.getElementById('dplayer3'),
    //     preload: 'none',
    //     video: {
    //         quality: [{
    //             name: 'HD',
    //             url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.m3u8',
    //             type: 'hls'
    //         }, {
    //             name: 'SD',
    //             url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
    //             type: 'normal'
    //         }],
    //         defaultQuality: 0,
    //         pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
    //     }
    // });

    // // dp4
    // window.dp4 = new DPlayer({
    //     container: document.getElementById('dplayer4'),
    //     preload: 'none',
    //     video: {
    //         url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.m3u8',
    //         type: 'hls'
    //     }
    // });

    // // dp5
    // window.dp5 = new DPlayer({
    //     container: document.getElementById('dplayer5'),
    //     preload: 'none',
    //     video: {
    //         url: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara.flv',
    //         type: 'flv'
    //     }
    // });

    // window.dp8 = new DPlayer({
    //     container: document.getElementById('dplayer8'),
    //     preload: 'none',
    //     video: {
    //         url: 'https://moeplayer.b0.upaiyun.com/dplayer/dash/hikarunara.mpd',
    //         type: 'dash'
    //     }
    // });

    // window.dp9 = new DPlayer({
    //     container: document.getElementById('dplayer9'),
    //     video: {
    //         url: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent',
    //         type: 'webtorrent'
    //     }
    // });

    // window.dp6 = new DPlayer({
    //     container: document.getElementById('dplayer6'),
    //     preload: 'none',
    //     live: true,
    //     danmaku: true,
    //     apiBackend: {
    //         read: function (endpoint, callback) {
    //             console.log('假装 WebSocket 连接成功');
    //             callback();
    //         },
    //         send: function (endpoint, danmakuData, callback) {
    //             console.log('假装通过 WebSocket 发送数据', danmakuData);
    //             callback();
    //         }
    //     },
    //     video: {
    //         url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.m3u8',
    //         type: 'hls'
    //     }
    // });

    // window.dp10 = new DPlayer({
    //     container: document.getElementById('dplayer10'),
    //     video: {
    //         url: 'https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4',
    //         type: 'pearplayer',
    //         customType: {
    //             'pearplayer': function (video, player) {
    //                 new PearPlayer(video, {
    //                     src: video.src,
    //                     autoplay: player.options.autoplay
    //                 });
    //             }
    //         }
    //     }
    // });
}

function clearPlayers() {
    for (let i = 0; i < 6; i++) {
        window['dp' + (i + 1)].pause();
        document.getElementById('dplayer' + (i + 1)).innerHTML = '';
    }
}

function switchDPlayer() {
    if (dp2.option.danmaku.id !== '5rGf5Y2X55qu6Z2p') {
        dp2.switchVideo({
            url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
            pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
            type: 'auto',
        }, {
            id: '5rGf5Y2X55qu6Z2p',
            api: 'https://api.prprpr.me/dplayer/',
            maximum: 3000,
            user: 'DIYgod'
        });
    } else {
        dp2.switchVideo({
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
            thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg',
            type: 'auto'
        }, {
            id: '9E2E3368B56CDBB42',
            api: 'https://api.prprpr.me/dplayer/',
            maximum: 3000,
            user: 'DIYgod'
        });
    }
}