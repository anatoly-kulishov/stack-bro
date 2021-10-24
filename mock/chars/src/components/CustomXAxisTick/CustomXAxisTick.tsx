import React, {FC, memo} from "react";
import "./CustomXAxisTick.scss";

const CustomYAxisTick: FC<any> = props => {
    const {x, y, textWidth = 50, textHeight = 30, payload} = props;

    return (
        <g className="CustomXAxisTick" transform={`translate(${x},${y})`}>
            <foreignObject className="text" width={textWidth} height={textHeight}>
                {payload.value}
            </foreignObject>
        </g>
    )
}

export default memo(CustomYAxisTick);