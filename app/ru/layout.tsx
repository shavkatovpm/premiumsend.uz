import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="ru">
      <Header locale="ru" />
      <main className="flex-1">{children}</main>
      <Footer locale="ru" />
    </div>
  );
}
