import BigNumber from "bignumber.js";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useConfig } from "../../hooks/useConfig";
import { usePayment } from "../../hooks/usePayment";
import css from "./NumPad.module.css";

export const NumPad: FC = () => {
  const { symbol } = useConfig();
  const [value, setValue] = useState("0");

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      const numberValue = parseFloat(newValue);
      // 检查输入是否在范围内
      if (newValue === "" || (numberValue > 0 && numberValue < 1000000)) {
        setValue(newValue);
      }
    },
    []
  );

  const onBackspace = useCallback(
    () =>
      setValue((value) => (value.length ? value.slice(0, -1) || "0" : value)),
    []
  );

  const { setAmount } = usePayment();
  useEffect(
    () => setAmount(value ? new BigNumber(value) : undefined),
    [setAmount, value]
  );

  return (
    <div className={css.root}>
      <div className={css.text}>Enter amount in {symbol}</div>
      <div className="flex">
        {" "}
        {/* 新增容器以便于布局 */}
        <input
          type="text"
          value={value}
          onChange={onInputChange}
          className={css.input} // 添加样式类
        />
      </div>
    </div>
  );
};
