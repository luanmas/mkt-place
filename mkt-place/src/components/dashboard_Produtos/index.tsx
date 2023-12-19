import ModalCreateProduct from "../ModalCreateProduct";
import OpenCreateProductModal from "./openCreateProductModal";
import YourProductList from "./yourProductList";

export default function DashboardProducts  () {
    return (
        <section className="flex flex-col justify-center items-center w-[80%] mx-auto">
            {/* <ModalCreateProduct /> */}
            <div className="w-full flex justify-between py-2 px-2">
                <h2 className="font-semibold text-2xl">Meus Produtos</h2>
                <OpenCreateProductModal />
            </div>
            <YourProductList />
        </section>
    )
}