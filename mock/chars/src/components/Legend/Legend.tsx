import React, {FC, memo, useMemo} from "react";
import "./Legend.scss";

type LegendPropsType = {
  data: Array<{
    id: number,
    label: string,
    dotColor: string,
    secondDotColor?: string,
    color?: string,
  }>,
  margin?: string
}

const Legend: FC<LegendPropsType> = props => {
  const {data, margin} = props;

  const checkDotColor = useMemo(() => (color: string, secondColor: string | undefined) => {
    if (secondColor) {
      return {background: `linear-gradient(-30deg, ${color},  ${secondColor})`}
    }
    return {backgroundColor: color}
  }, [])

  return (
    <div className="legend" style={{margin: margin}}>
      {data.map((el, i) => (
        <div key={el.id} className={`legend__item item_${++i}`}>
          <span className="dot" style={checkDotColor(el.dotColor, el.secondDotColor)}/>
          <span style={{color: el.color}}>{el.label}</span>
        </div>
      ))}
    </div>
  )
}

export default memo(Legend);