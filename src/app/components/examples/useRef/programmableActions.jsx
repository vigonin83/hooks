import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClicWidth = () => {
        console.log(inputRef.current);
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />

            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                className="form-control"
                type="email"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Cфокусируйся
            </button>
            <button className="btn btn-danger" onClick={handleClicWidth}>
                Изменить размер
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
