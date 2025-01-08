import NumberFlow from "@number-flow/react"
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect, useState } from "react"

type Props = {
  value: number,
  prefix?: string
}

export const Stat = ({value, prefix}: Props) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "-50px",
  });

  useEffect(() => {
    if(entry?.isIntersecting) setDisplayValue(value)
  }, [entry?.isIntersecting])

  return (
    <div ref={ref}>
      {entry?.isIntersecting ? (<NumberFlow spinTiming={{duration: 750}} prefix={prefix} value={displayValue} trend={1} />) : '0'}
    </div>
  )
}