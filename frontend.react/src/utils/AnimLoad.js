import lottie from "lottie-web";

const  AnimLoad = (state, container, path, speed) => {
  const anim = lottie.loadAnimation({
    container: container.current,
    renderer: "svg",
    loop: false,
    autoplay: false,
    animationData: path,
  });
  anim.setSpeed(speed);
  state(anim);
}

export default AnimLoad;
