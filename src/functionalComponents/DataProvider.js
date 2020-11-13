// Imports
// React Imports
import React , {useContext} from 'react';
// Context Imports
import { DataContext } from './DataContext';


// Global Data Provider
export const GlobalDataProvider = ({children}) => {
    // Data context
    const context = useContext(DataContext);
    // Products List
    const products = context.products;
    // Gents Products
    const gentsProducts = context.products.filter(item => item.gender==="MEN");
    // Ladies Products
    const ladiesProducts = context.products.filter(item => item.gender==="WOMEN");
    
    return (
        <DataContext.Provider
           value ={{    ladiesProducts,
                        gentsProducts,
                        products,
                    }}
        >
            {children}
        </DataContext.Provider>
    )
}
