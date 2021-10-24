import React, {ChangeEvent, FC, memo} from "react";
import "./TagsFilter.scss";
import MyPopover from "../../MyPopover";

type TagPropsType = {
  name: string,
  color: string,
  label: string,
  flag: boolean,
  handleChange: (flag: ChangeEvent<HTMLInputElement>) => void
}

const Tag: FC<TagPropsType> = memo(({name, label, color, flag, handleChange}) => {
  return (
    <>
      <MyPopover
        title={`Hide ${label} Data`}
        positions={['bottom', 'left']}
        arrowPosition='top'>
        <label className="tag"
               style={{backgroundColor: flag ? color : 'transparent', borderColor: color}}>
          {label} <input type="checkbox" name={name} checked={flag} onChange={handleChange}/>
        </label>
      </MyPopover>
    </>
  )
})

type TagsFilterPropsType = {
  data: any,
  handleChange: (flag: ChangeEvent<HTMLInputElement>) => void,
}

const TagsFilter: FC<TagsFilterPropsType> = ({data, handleChange}) => {
  return (
    <div className="tags">
      <span className="tags__title">Data from :</span>
      <div className="tags__inner">
        {Object.keys(data)
          .map((key: string) => (
            <Tag key={key}
                 name={`devices.${key}.flag`}
                 label={data[key as string]?.label}
                 color={data[key as string]?.color}
                 flag={data[key as string]?.flag}
                 handleChange={handleChange}/>
          ))}
      </div>
    </div>
  )
}

export default memo(TagsFilter);