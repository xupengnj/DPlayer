import Icons from './icons';
class Recommend {
    constructor(player) {
        this.player = player;
    }

    initRecommendList(recommendList,click) {
        const list = this.player.container.querySelector('.recommend-list');
        recommendList &&
            recommendList.forEach((aa) => {
                const item = document.createElement('div');
                item.classList.add('recommend-list-item');
                item.style.backgroundImage = 'url(https://upload-images.jianshu.io/upload_images/5809200-736bc3917fe92142.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)';
                const itemBody = document.createElement('span');
                itemBody.innerHTML = '奥术大师大所';
                item.appendChild(itemBody);
                item.addEventListener('click',()=>{
                    click&&click();
                })
                list.appendChild(item);
            });
    }

    setZanIcon(isZan, click) {
        if (isZan) {
            this.player.template.zanIcon.innerHTML = Icons.zanPink;
        } else {
            this.player.template.zanIcon.innerHTML = Icons.zan;
        }

        this.player.template.zanButton.addEventListener('click', () => {
            click && click();
        });
    }

    setCollectionIcon(isCollection, click) {
        if (isCollection) {
            this.player.template.collectionIcon.innerHTML = Icons.collectionPink;
        } else {
            this.player.template.collectionIcon.innerHTML = Icons.collection;
        }
        this.player.template.collectionButton.addEventListener('click', () => {
            click && click();
        });
    }

    setReplayButton(click) {
        this.player.template.replayButton.addEventListener('click', () => {
            click && click();
        });
    }

    setShareButton(click) {
        this.player.template.shareButton.addEventListener('click', () => {
            click && click();
        });
    }

    setRecommendVisible() {
        this.player.template.recommendBody.style.display = 'flex';
        this.player.titlebar.hiddenTitleBar();
    }

    setRecommendHidden(){
        this.player.template.recommendBody.style.display = 'none';
        this.player.titlebar.visibleTitleBar();
    }
}

export default Recommend;
