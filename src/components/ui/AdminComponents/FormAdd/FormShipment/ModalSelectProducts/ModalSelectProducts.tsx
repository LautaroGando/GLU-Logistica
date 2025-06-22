import { useAdminStore } from "@/store/adminStore/useAdminStore";
import React, { useMemo, useState } from "react";
import { IModalSelectProductsProps } from "./types";
import { useFormikContext } from "formik";
import { ITableWarehouse } from "@/data/adminData/tableData/types";
import { motion } from "motion/react";

export const ModalSelectProducts: React.FC<IModalSelectProductsProps> = ({
  products,
}: IModalSelectProductsProps) => {
  const { modalProducts, toggleModalProducts } = useAdminStore();
  const [quantityProducts, setQuantityProducts] = useState<
    Record<string, number>
  >({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setFieldValue } = useFormikContext();

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return term.length === 0
      ? products
      : products.filter((product) =>
          product.product.toLowerCase().includes(term)
        );
  }, [products, searchTerm]);

  const handleIncrement = (id: string) => {
    setQuantityProducts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id: string) => {
    setQuantityProducts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) - 1,
    }));
  };

  return (
    <>
      {modalProducts && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="absolute top-0 left-0 w-full h-full bg-black/50 overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[85%] bg-pcSecondary rounded-md p-2 flex flex-col gap-3 justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="text-pcPrincipal font-semibold text-xl">
                Agregar productos:
              </h3>
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
                type="search"
                placeholder="Buscar producto..."
              />
              <div className="flex flex-col gap-2 max-h-[480px] overflow-auto">
                {filteredProducts.map((product: ITableWarehouse, i: number) => (
                  <div key={i}>
                    <div
                      key={i}
                      className="w-full h-[40px] bg-tcExtra/30 rounded-md flex items-center p-2 justify-between"
                    >
                      <h4>{product.product}</h4>
                      <div className="flex items-center gap-2">
                        <button
                          className="w-[25px] h-[25px] bg-pcPrincipal text-pcSecondary rounded-full transition-all duration-300 hover:bg-pcPrincipal/80 disabled:bg-tcExtra"
                          disabled={!quantityProducts[product.id]}
                          type="button"
                          onClick={() => handleDecrement(product.id)}
                        >
                          -
                        </button>
                        <h5>{quantityProducts[product.id] || 0}</h5>
                        <button
                          className="w-[25px] h-[25px] bg-pcPrincipal text-pcSecondary rounded-full transition-all duration-300 hover:bg-pcPrincipal/80 disabled:bg-tcExtra"
                          type="button"
                          onClick={() => handleIncrement(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <button
                className="w-1/2 h-[40px] bg-tcExtra text-pcSecondary rounded-md transition-all duration-300 hover:bg-tcExtra/80"
                onClick={toggleModalProducts}
                type="button"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  const selectedProducts = Object.entries(quantityProducts)
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    .filter(([_, quantity]) => quantity > 0)
                    .map(([id, quantity]) => ({ depositId: id, quantity }));

                  setFieldValue("products", selectedProducts);
                  toggleModalProducts();
                }}
                className="w-1/2 h-[40px] bg-pcPrincipal text-pcSecondary rounded-md transition-all duration-300 hover:bg-pcPrincipal/80"
                type="button"
              >
                Agregar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
