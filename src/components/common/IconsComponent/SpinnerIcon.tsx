import React, {memo} from 'react';

type SpinnerIconPropsType = {
  size: string
}

const SpinnerIcon: React.FC<SpinnerIconPropsType> = props => {
  return (
    <svg className="custom-spinner" width={props.size} height={props.size} viewBox="0 0 66 66"
         xmlns="http://www.w3.org/2000/svg">
      <circle className="custom-spinner-path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"/>
    </svg>
  )
}

export default memo(SpinnerIcon);

