import React from 'react';
import classes from './LayoutContainer.module.css'

type Props = {
    children: any
}

const LayoutContainer = ({children}: Props) => {

    const layouts = 'layout' + children.className;    

    return <div className={classes.layouts}>{children}</div>;
};

export default LayoutContainer;
