import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store";

//? Спецальное типизирование useTypedSelector с помощью RootState, в котором сотои
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector