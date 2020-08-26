class advertisement {
    constructor(player) {
        this.player = player;
        this.initAdvertisementView();
    }

    initAdvertisementView() {
        if (this.player.options.haveAdvertisement) {
            this.player.setting.hiddenSetting();
            this.player.controller.hiddenQuality();
            this.player.titlebar.hiddenTitleBar();
        }
    }

    onJoinVipClick(click) {
        this.player.template.joinVip.addEventListener('click', () => {
            if (this.player.options.haveAdvertisement) {
                click();
            }
        });
    }

    hiddenSkip() {
        const skipAdvertisement = document.querySelectorAll('.advertisement-skip');
        skipAdvertisement && skipAdvertisement.forEach((item) => this.player.container.removeChild(item));
    }

    visibleSkip(click) {
        const skipAdvertisementA = document.querySelectorAll('.advertisement-skip');
        if (skipAdvertisementA.length > 0) {
            return;
        }
 
        const skipAdvertisement = document.createElement('div');
        skipAdvertisement.classList.add('advertisement-skip');
        skipAdvertisement.innerHTML = '跳过';
        skipAdvertisement.addEventListener('click', () => {
            if (this.player.options.haveAdvertisement) {
                click();
            }
        });
        this.player.container.appendChild(skipAdvertisement);
    }

    setAdTip(text) {
        this.player.template.advertisementTip.innerHTML = text;
    }
}

export default advertisement;
