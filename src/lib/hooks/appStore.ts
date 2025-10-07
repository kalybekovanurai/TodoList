import { useDispatch, useSelector, type TypedUseSelectorHook,  } from "react-redux";
import type { AppDispatch, RootState } from "../../store";

// Используй эти хуки вместо стандартных `useDispatch` и `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
