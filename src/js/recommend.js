class Recommend {
    constructor(player) {
        this.player = player;
    }

    initRecommendList(recommendList) {
        const list = this.player.container.querySelector('.recommend-list');
        recommendList &&
            recommendList.forEach((aa) => {
                const item = document.createElement('div');
                item.classList.add('recommend-list-item');
                item.style.backgroundImage = 'url(https://upload-images.jianshu.io/upload_images/5809200-736bc3917fe92142.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)';
                const itemBody = document.createElement('span');
                itemBody.innerHTML = '奥术大师大所';
                item.appendChild(itemBody);
                list.appendChild(item);
            });
    }
}

export default Recommend;
