import React from "react";

type contextStoreBoards = Array<{
    id: string;
    name: string;
    description: string;
    createdAt: string;
}>;

export const StoreBoards = React.createContext<contextStoreBoards>([{
    id: '0.1100',
    name: '',
    description: '',
    createdAt: '',
}]);