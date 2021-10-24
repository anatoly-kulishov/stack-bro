import React, {FC, memo, useState} from 'react';
import {Popover, PopoverPosition} from 'react-tiny-popover';
import "./MyPopover.scss";

type MyPopoverPropsType = {
  children: JSX.Element;
  title: string;
  positions: PopoverPosition[];
  arrowPosition?: PopoverPosition;
  padding?: number
}

const MyPopover: FC<MyPopoverPropsType & {}> = ({children, title, positions, padding = 20, arrowPosition}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={positions}
      padding={padding}
      content={
        <div className="myPopover">
          <span className={`myPopover__arrow myPopover__arrow--${arrowPosition}`}/>
          {title}
        </div>}>
      <div className="myPopover__target"
           onMouseOver={() => setIsPopoverOpen(true)}
           onMouseOut={() => setIsPopoverOpen(false)}>
        {children}
      </div>
    </Popover>
  )
}

export default memo(MyPopover);