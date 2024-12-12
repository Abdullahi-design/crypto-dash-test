import { CandlestickChart } from "@/components/CandlestickChart";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { OrderBook } from "@/components/OrderBook";
import { OrderForm } from "@/components/OrderForm";

export default function Home() {
  return (
    <div className="bg-[#32383F] text-white h-screen flex flex-col">
      <Navbar />
      <Header />
      <main className="flex flex-1 flex-col md:flex-row">
        <section className="flex-1 p-1">
          <CandlestickChart />
        </section>
        <aside className="w-full md:w-[23%] p-1">
          <OrderBook />
        </aside>
        <section className="w-full md:w-[23%] p-1">
          <OrderForm />
        </section>
      </main>
    </div>
  );
}
