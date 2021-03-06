import lottie from "lottie-web";

function AnimLoad(state, container, path) {
  state(
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: path,
    })
  );
}

export default AnimLoad;
