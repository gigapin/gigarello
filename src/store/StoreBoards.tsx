import React from "react";

type contextStoreBoards = Array<{
    id: string;
    title: string;
    description: string;
}>;

export const StoreBoards = React.createContext<contextStoreBoards>([{
    id: '0.1100',
    title: '',
    description: '',
}]);