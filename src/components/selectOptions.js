import { useEffect, useState } from "react";
import { findAllItems } from "../api";
import { plansCol, stylesCol, teachersCol } from "../api/config";


export const FrequencyOptions = () => {
    return (
        <>
            <option value="1x" > 1x </option>
            <option value="2x" > 2x </option>
            <option value="3x" > 3x </option>
            <option value="4x" > 4x </option>
            <option value="5x" > 5x </option>
            <option value="0x" > -- </option>
        </>
    );
};

export const DurationOptions = () => {
    return (
        <>
            <option value="Mensal" > Mensal </option>
            <option value="Trimestral" > Trimestral </option>
            <option value="Semestral" > Semestral </option>
            <option value="Anual" > Anual </option>
            <option value="Contínuo" > Contínuo </option>
        </>
    );
};

export const StatusOptions = () => {

    return (
        <>
            <option > Ativos </option>
            <option > Inativos </option>
        </>
    );
};

export const TeacherOptions = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        findAllItems(teachersCol)
            .then(((res) => setOptions(res)))
            .catch((err) => console.log(err.message));
    }, [])
    const list = options?.length && options.map((i) => <option key={i.name} value={i.name} > {i.name} </option>)

    return (
        <>
            {list}
        </>
    );
};

export const DayOptions = () => {
    return (
        <>
            <option value="Segunda" > Segunda </option>
            <option value="Terça" > Terça </option>
            <option value="Quarta" > Quarta </option>
            <option value="Quinta" > Quinta </option>
            <option value="Sexta" > Sexta </option>
            <option value="Sábado" > Sábado </option>
        </>
    );
};

export const StyleOptions = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        findAllItems(stylesCol)
            .then(((res) => setOptions(res)))
            .catch((err) => console.log(err.message));
    }, [])
    const list = options?.length && options.map((i) => <option key={i.name} value={i.name} > {i.name} </option>)

    return (
        <>
            {list}
        </>
    );
};


export const TypeOptions = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        findAllItems(plansCol)
            .then(((res) => setOptions(res)))
            .catch((err) => console.log(err.message));
    }, [])
    const list = options?.length && options.map((i) => <option key={i.id} value={i.id} > {i.id} </option>)

    return (
        <>
            {list}
        </>
    );
};
