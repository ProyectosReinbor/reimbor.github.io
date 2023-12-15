export class Screen {
    button:HTMLImageElement
    constructor() {
        this.button = document.getElementById("fullScreen") as HTMLImageElement
        this.button.addEventListener('click', () => this.click())
    }
    click() {
        if (document.fullscreenElement) {
            this.button.src = "images/screen/open.svg"
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        } else if (document.documentElement.requestFullscreen) {
            this.button.src = "images/screen/goOut.svg"
            document.documentElement.requestFullscreen()
        }
    }
}