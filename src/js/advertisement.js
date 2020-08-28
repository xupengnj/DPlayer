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

    setSkipFunction(click) {
        if (!this.player.options.haveAdvertisement) {
            return;
        }
        this.player.template.skipAdvertisement.addEventListener('click', () => {
            click && click();
        });
    }

    setSkipVip(text) {
        if (!this.player.options.haveAdvertisement) {
            return;
        }
        this.player.template.skipAdvertisement.innerHTML = text;
    }
}

export default advertisement;
