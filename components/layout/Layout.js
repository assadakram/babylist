import { Header } from "../layout/Header";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
