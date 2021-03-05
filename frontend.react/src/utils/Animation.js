import lottie from 'lottie-web'

function Animation(path,f1 ,f2, container, isON) {

        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: path,
            speed: 3
        });
        anim.setSpeed(2.3)
        if (isON) {
            anim.playSegments([0, f1], true)
        } else if (isON === false) {
            anim.playSegments([f1, f2], true)
        }
        return () => anim.destroy()
}

export default Animation