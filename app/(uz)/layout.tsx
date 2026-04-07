import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale="uz" />
      <main className="flex-1">{children}</main>
      <Footer locale="uz" />
    </>
  );
}
