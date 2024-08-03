import { useRef } from "react";

const useAuthSwiper = () => {
    const progressCircle = useRef<SVGCircleElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      // Update stroke-dashoffset to reflect progress
      progressCircle.current.style.strokeDashoffset = `${
        125.6 * (1 - progress)
      }px`;
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return {
    progressCircle,
    progressContent,
    onAutoplayTimeLeft,

  }
}

export default useAuthSwiper