import { NextPage } from "next";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { FullscreenButton } from "../buttons/FullscreenButton";
import { GenerateButton } from "../buttons/GenerateButton";
import { TransactionsLink } from "../buttons/TransactionsLink";
import { NumPad } from "../sections/NumPad";
import { PoweredBy } from "../sections/PoweredBy";
import { Summary } from "../sections/Summary";
import css from "./NewPage.module.css";

const NewPage: NextPage = () => {
  const phone = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={css.root}>
      <div className={css.top}>
        <FullscreenButton />
        {phone && <TransactionsLink />} {/* 仅在移动端显示 */}
      </div>
      <div className={css.body}>
        <NumPad />
        <GenerateButton />
      </div>
      <PoweredBy />
    </div>
  );
};

export default NewPage;

export function getServerSideProps() {
  return {
    props: {},
  };
}
