class TitleBar {
    constructor(player) {
        this.player = player;
        this.followOperate();
    }
    followOperate() {
        if (this.player.options.video.logo && this.player.options.video.portrait) {
            this.player.template.followButton.addEventListener('click', () => {
                this.player.options.video.followOperate && this.player.options.video.followOperate();
            });
        }
    }

    hiddenTitleBar() {
        if (this.player.options.video.logo && this.player.options.video.portrait) {
            this.player.template.titleBar.style.display = 'none';
        }
    }

    visibleTitleBar() {
        if (this.player.options.video.logo && this.player.options.video.portrait) {
            this.player.template.titleBar.style.display = 'flex';
        }
    }
}

export default TitleBar;
