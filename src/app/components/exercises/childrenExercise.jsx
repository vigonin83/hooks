import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    // console.log(children);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ItemsList>
                <Component />
                <Component />
                <Component />
            </ItemsList>
        </CollapseWrapper>
    );
};
const ItemsList = ({ children }) => {
    const arrayOfItems = React.Children.toArray(children);
    // console.log(arrayOfItems);
    return React.Children.map(arrayOfItems, (child) =>
        React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", " ") + 1
        })
    );
};

ItemsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const Component = ({ num }) => {
    return <div>{num}Компонент списка</div>;
};
Component.propTypes = {
    num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
