// @flow
import * as React from 'react';
import {ReactNode} from "react";

type ProvidersGlobalsTypes = {
    children : ReactNode
};
export const ProvidersGlobals = ( {children}: ProvidersGlobalsTypes) => {
    return (
        <div>
            {children}
        </div>
    );
};