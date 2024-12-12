import { Order1, Order2, Order3 } from "@/utils/icons";
import Image from "next/image";
import BorderlessTable from "./BorderlessTable";

export const OrderBook = () => (
    <div className="bg-[#20252B] rounded p-4">
        <section className="flex justify-between p-1 bg-[#12171D] rounded-xl">
            <h1 className="bg-[#20252B] p-1 px-4 text-sm rounded-xl cursor-pointer">Order Book</h1>
            <h1 className=" p-1 px-4 text-sm text-gray-500 cursor-pointer">Recent Trades</h1>
        </section>
        <section className="flex justify-between mt-3">
            <div className="flex">
                <Image
                    width={40}
                    height={40}
                    src={Order1}
                    alt="Order1"
                />
                <Image
                    width={40}
                    height={40}
                    src={Order2}
                    alt="Order2"
                />
                <Image
                    width={40}
                    height={40}
                    src={Order3}
                    alt="Order3"
                />
            </div>
            <select name="" id="" className="bg-[#353945] cursor-pointer h-10 outline-none rounded-xl w-[30%]">
                <option value="1">10</option>
                <option value="1">9</option>
                <option value="1">8</option>
                <option value="1">7</option>
                <option value="1">6</option>
                <option value="1">5</option>
                <option value="1">4</option>
                <option value="1">3</option>
                <option value="1">2</option>
                <option value="1">1</option>
            </select>
        </section>

        <section className="mt-3">
            <BorderlessTable/>
        </section>
    </div>
);