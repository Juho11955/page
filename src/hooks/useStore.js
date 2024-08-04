import { useContext } from 'react';
import { StoreContext } from '@/store/provider/StoreProvider'

export const useStore = () => {
    return useContext(StoreContext);

}
