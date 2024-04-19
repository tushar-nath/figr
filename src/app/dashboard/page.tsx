import { Header } from "@/components/header/header";
import { Menu } from "@/components/menu/menu";

export default function Home() {
  return (
    <main className="min-h-screen justify-between p-12">
      <Header />
      <Menu />
    </main>
  );
}
