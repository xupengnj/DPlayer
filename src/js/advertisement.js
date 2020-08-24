class advertisement {
    constructor(player) {
        this.player = player;
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
