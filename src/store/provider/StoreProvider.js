"use client";

import React, { createContext } from 'react';
import { RootStore } from '@/store/RootStore'

export const StoreContext = createContext(RootStore);

export const StoreWrapper = ({ children }) => {
    return (
        <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>
    );
};
