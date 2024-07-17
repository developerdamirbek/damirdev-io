import { useCallback } from 'react'

type Props = {
  width?: number
  height?: number
  boxSize?: number
  style?: React.CSSProperties
  className?: string
  fill?: string
}

const Wrapper: React.FC<{ boxSize?: number; children: React.ReactNode }> = ({ children, boxSize }) => {
  const getBoxSizeStyles = useCallback(
    () => ({
      alignItems: 'center',
      display: 'inline-flex',
      height: boxSize,
      justifyContent: 'center',
      lineHeight: 0,
      width: boxSize,
    }),
    [boxSize],
  )

  return boxSize ? <div style={getBoxSizeStyles()}>{children}</div> : <>{children}</>
}

export const makeIcon =
  (
    path: string,
    viewboxWidth: number,
    viewboxHeight: number,
    fill?: string,
    transform?: string | null,
    // eslint-disable-next-line @typescript-eslint/ban-types
    rules?: Object,
    // eslint-disable-next-line max-params
  ): React.FC<Props> =>
  ({ style, width, height, boxSize, className = '' }) => (
    <Wrapper boxSize={boxSize}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${width || viewboxWidth}px`}
        height={`${height || viewboxHeight}px`}
        viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
        style={style}
        className={className}
      >
        <g {...rules} transform={transform || undefined}>
          <path fill={fill} d={path} />
        </g>
      </svg>
    </Wrapper>
  )
