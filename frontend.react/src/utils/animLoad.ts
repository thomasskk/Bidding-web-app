import lottie from 'lottie-web'

const animLoad = (
  state: any,
  container: any,
  path: any,
  speed:number = 1,
  initialSegment: number = 0
) => {
  const anim = lottie.loadAnimation({
    container: container.current,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: path,
    initialSegment: [initialSegment, -1],
    rendererSettings: {
      progressiveLoad: true,
    },
  })
  anim.setSpeed(speed)
  state(anim)
}

export default animLoad
