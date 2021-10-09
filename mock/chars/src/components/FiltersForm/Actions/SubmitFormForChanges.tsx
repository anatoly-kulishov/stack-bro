import React, {FC, memo} from "react";
import {useFormikContext} from "formik";

const FiltersForm: FC = () => {
    const {values, submitForm} = useFormikContext();
    React.useEffect(() => {
        submitForm()
    }, [values, submitForm]);
    return null
}

export default memo(FiltersForm);