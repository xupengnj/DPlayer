class advertisement {
    constructor(player) {
        this.player = player;
        this.initAdvertisementView();
    }

    initAdvertisementView() {
        if (this.player.options.haveAdvertisement) {
            this.player.setting.hiddenSetting();
            this.player.controller.hiddenQuality();
            this.player.controller.hiddenTitleBar();
        } else {
            this.player.titlebar.visibleTitleBar();
            this.player.setting.visibleSetting();
            this.hiddenJoinVip();
            this.hiddenSkip();
            this.hiddenAdTip();
        }
    }

    onSkipClick(click) {
        this.player.template.skipAdvertisement.addEventListener('click', () => {
            if (this.player.options.haveAdvertisement) {
                click();
            }
        });
    }

    onJoinVipClick(click) {
        this.player.template.joinVip.addEventListener('click', () => {
            if (this.player.options.haveAdvertisement) {
                click();
            }
        });
    }

    hiddenSkip() {
        this.player.template.skipAdvertisement.style.display = 'none';
    }

    visibleSkip() {
        this.player.template.skipAdvertisement.style.display = 'block';
    }

    hiddenJoinVip() {
        this.player.template.joinVip.style.display = 'none';
    }

    visibleJoinVip() {
        this.player.template.joinVip.style.display = 'block';
    }

    hiddenAdTip() {
        this.player.template.advertisementTip.style.display = 'none';
    }

    visibleAdTip() {
        this.player.template.advertisementTip.style.display = 'block';
    }

    setAdTip(text) {
        this.player.template.advertisementTip.innerHTML = text;
    }
}

export default advertisement;
