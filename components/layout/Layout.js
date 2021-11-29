import { Header } from "../layout/Header";

export const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      <div>{Children}</div>
    </>
  );
};
