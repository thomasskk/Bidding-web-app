import lottie from "lottie-web";

const  AnimLoad = (state, container, path, speed=1, initialSegment=null) => {
  const anim = lottie.loadAnimation({
    container: container.current,
    renderer: "svg",
    loop: false,
    autoplay: false,
    animationData: path,
    initialSegment: [initialSegment],
  });
  anim.setSpeed(speed);
  state(anim);
}

export default AnimLoad;
