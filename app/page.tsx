import CandlestickChart from "@/components/CandlestickChart";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { OrderBook } from "@/components/OrderBook";
import { OrderForm } from "@/components/OrderForm";
import { TabComponent } from "@/components/TabComponent";

export default function Home() {
  return (
    <div className="bg-[#32383F] text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="mt-20">
        <Header />
      </div>
      <main className="flex flex-1 flex-col md:flex-row">
        <section className="flex w-full flex-col">
          {/* CandlestickChart and OrderBook Side by Side */}
          <div className="block md:flex w-full min-h-fit">
            <div className="flex-1 p-1">
              <CandlestickChart />
            </div>
            <aside className="w-full md:w-[30%] p-1">
              <OrderBook />
            </aside>
          </div>
          {/* TabComponent Below */}
          <div className="mt-1 w-full">
            <TabComponent />
          </div>
        </section>

        {/* OrderForm on the side */}
        <section className="w-full md:w-[23%] p-1">
          <OrderForm />
        </section>
      </main>
    </div>
  );
}