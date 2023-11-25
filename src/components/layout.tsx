import { Header } from "@components/Header";
import "./layout.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
}
