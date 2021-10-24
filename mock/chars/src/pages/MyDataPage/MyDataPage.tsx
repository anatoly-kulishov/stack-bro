import React, {FC} from 'react';
import FiltersForm from "../../components/FiltersForm";
import MyData from "../../components/MyData";
import {useActions} from "../../state";

const MyDataPage: FC = () => {
    // const [dateSelect, handleDateSelectChange] = useState<Date>(new Date());
    const {setFilterOptions} = useActions();

    return (
        <div className="myData">
            <FiltersForm
                title="My Data"
                onSubmit={setFilterOptions}/>
            <MyData/>
        </div>
    )
}

export default MyDataPage;