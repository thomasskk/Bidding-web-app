import lottie, { AnimationItem } from 'lottie-web'

const animLoad = (
  state: React.Dispatch<React.SetStateAction<AnimationItem | null>>,
  container: React.MutableRefObject<HTMLDivElement>,
  path: Record<string, unknown>,
  speed = 1,
  initialSegment = 0
): void => {
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
