import React from "react";
import MemoEx from "./useMemo/useMemoEx";
import EffectEx from "./useEffect";
import RefEx from "./useRef";
import ReactMemo from "./ReactMemo";
import CallBack from "./useCallBack";

function HookEx (){
    return(
        <>
        {/* <MemoEx/> */}
        <EffectEx/>
        <RefEx/>
        <ReactMemo/>
        <CallBack/>
        </>
    )
}

export default HookEx;