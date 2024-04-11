import React from "react";
import { useEffect } from "react";

export default function Even() {
    useEffect(() => {
        // 클린업, 정리함수
        return () => {
            console.log("unmout");
        };
    });
    return <div>짝수입니다</div>;
}
