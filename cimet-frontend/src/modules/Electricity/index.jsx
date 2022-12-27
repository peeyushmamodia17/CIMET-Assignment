import React, {useEffect, useState} from 'react';
import { getPlanList } from './electricity.service';
import ElectricityTemplate from '../../component/Electricity/electricity.component';
import { useAtom } from "jotai";
import {
    isLoading,
  } from "../../store";

const Electricity = () => {
    const [planList, setPlanList] = useState([]);
    const [, setLoading] = useAtom(isLoading);

    useEffect(() => {
        const generatePlanList = async() => {
            try {
                setLoading(true);
                const response = await getPlanList();
                if (response && response[1] === 200) {
                    setLoading(false);
                    setPlanList(response?.[0]?.data.electricity)
                }
            } catch (err) {
                console.log(err);
            }
        }
        generatePlanList();
    }, [setLoading])
    return (
        <React.Fragment>
            <ElectricityTemplate planList={planList}></ElectricityTemplate>
        </React.Fragment>
    );
}

export default Electricity;