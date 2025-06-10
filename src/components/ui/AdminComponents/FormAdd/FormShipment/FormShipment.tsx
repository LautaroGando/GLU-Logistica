import { Form, Field, useFormikContext } from "formik";
import { ButtonSend } from "../ButtonSend/ButtonSend";
import { TitleForm } from "../TitleForm/TitleForm";
import { ButtonModaleClose } from "../../ButtonModalClose/ButtonModaleClose";
import { useAdminStore } from "@/store/adminStore/useAdminStore";
import { useEffect, useMemo } from "react";
import { ModalSelectProducts } from "./ModalSelectProducts/ModalSelectProducts";
import {
  ITableClients,
  ITableShipments,
} from "@/data/adminData/tableData/types";
import { Status } from "@/enum/Status";
import { Shipment } from "@/enum/Shipment";
import { Province } from "@/enum/Province";

export const FormShipment = () => {
  const { toggleModalProducts, users, getUsers, products, getProducts } =
    useAdminStore();
  const { values, setFieldValue } = useFormikContext<ITableShipments>();

  useEffect(() => {
    getUsers();
    getProducts();
  }, [getUsers, getProducts]);

  useEffect(() => {
    const selectedCompany = values.company;

    if (!selectedCompany) {
      setFieldValue("customerId", "");
      setFieldValue("products", []);
      return;
    }

    const customerId = products?.find(
      (product) => product.company === selectedCompany
    )?.customerId;

    if (values.customerId !== customerId) {
      setFieldValue("customerId", customerId || "");
      setFieldValue("products", []);
    }
  }, [values.company, values.customerId, products, setFieldValue]);

  const selectedCompany = values.company;

  const companyProducts = useMemo(() => {
    return (
      products?.filter((product) => product.company === selectedCompany) || []
    );
  }, [products, selectedCompany]);

  return (
    <Form className="p-4 flex flex-col gap-5 relative">
      <TitleForm label="Añadir órden:" />
      <div className="w-full">
        <Field
          className="w-full rounded-xl px-3 py-1 text-tcSecondary bg-tcExtra/30"
          name="customerId"
          id="customerId"
          type="text"
          placeholder="Id del cliente"
          disabled
        />
      </div>
      <div className="w-full">
        <Field className="input" name="company" id="company" as="select">
          <option value="">Seleccione una empresa:</option>
          {users?.map(
            (user: ITableClients, i: number) =>
              user.role !== "ADMIN" && (
                <option key={i} value={user.company}>
                  {user.company}
                </option>
              )
          )}
        </Field>
      </div>
      <div className="w-full">
        <Field
          className="input"
          name="orderId"
          id="orderId"
          type="text"
          placeholder="Id de la órden:"
        />
      </div>
      <div className="w-full p-2 bg-tcExtra/40 rounded-md">
        {values.products.length > 0 && (
          <div className="pb-2 flex gap-2 text-sm flex-wrap max-h-[80px] overflow-auto">
            {values.products.map((product, i) => {
              const productInfo = products?.find(
                (prod) => prod.id === product.depositId
              );
              return (
                <div
                  key={i}
                  className="text-pcPrincipal bg-pcPrincipal/10 px-2 py-1 rounded-xl"
                >
                  {productInfo?.product} ({product.quantity})
                </div>
              );
            })}
          </div>
        )}

        <button
          disabled={!selectedCompany}
          onClick={toggleModalProducts}
          type="button"
          className="w-full h-[40px] bg-pcPrincipal text-pcSecondary rounded-md transition-all duration-300 hover:bg-pcPrincipal/80 disabled:bg-tcExtra"
        >
          Seleccionar productos
        </button>
        <ModalSelectProducts products={companyProducts} />
      </div>
      <div className="w-full">
        <Field
          className="input"
          name="address"
          id="address"
          type="text"
          placeholder="Dirección:"
        />
      </div>
      <div className="w-full">
        <Field
          className="input"
          name="locality"
          id="locality"
          type="text"
          placeholder="Localidad:"
        />
      </div>
      <div className="w-full">
        <Field
          className="input"
          name="postalCode"
          id="postalCode"
          type="text"
          placeholder="Código postal:"
        />
      </div>
      <div className="w-full">
        <Field
          className="input"
          name="province"
          id="province"
          type="text"
          placeholder="Provincia:"
          as="select"
        >
          <option value="">Seleccione provincia</option>
          <option value={Province.CABA}>CABA</option>
          <option value={Province.GBA_1}>GBA 1</option>
          <option value={Province.GBA_2}>GBA 2</option>
          <option value={Province.GBA_3}>GBA 3</option>
          <option value={Province.TIERRA_DEL_FUEGO}>Tierra del Fuego</option>
          <option value={Province.SANTA_CRUZ}>Santa Cruz</option>
          <option value={Province.CHUBUT}>Chubut</option>
          <option value={Province.RIO_NEGRO}>Río Negro</option>
          <option value={Province.NEUQUEN}>Neuquén</option>
          <option value={Province.MENDOZA}>Mendoza</option>
          <option value={Province.SALTA}>Salta</option>
          <option value={Province.SANTA_FE}>Santa Fe</option>
          <option value={Province.SANTIAGO_DEL_ESTERO}>
            Santiago del Estero
          </option>
          <option value={Province.SAN_JUAN}>San Juan</option>
          <option value={Province.SAN_LUIS}>San Luis</option>
          <option value={Province.BUENOS_AIRES}>Buenos Aires</option>
          <option value={Province.MISIONES}>Misiones</option>
          <option value={Province.CHACO}>Chaco</option>
          <option value={Province.FORMOSA}>Formosa</option>
          <option value={Province.LA_PAMPA}>La Pampa</option>
          <option value={Province.CORDOBA}>Córdoba</option>
          <option value={Province.CORRIENTES}>Corrientes</option>
          <option value={Province.TUCUMAN}>Tucumán</option>
          <option value={Province.LA_RIOJA}>La Rioja</option>
          <option value={Province.JUJUY}>Jujuy</option>
          <option value={Province.ENTRE_RIOS}>Entre Ríos</option>
          <option value={Province.CATAMARCA}>Catamarca</option>
        </Field>
      </div>
      <div className="w-full">
        <Field
          className="input"
          name="shipmentType"
          id="shipmentType"
          as="select"
        >
          <option value="">Seleccione el tipo envío</option>
          <option value={Shipment.DOMICILIE}>Domicilio</option>
          <option value={Shipment.BRANCH}>Sucursal</option>
        </Field>
      </div>
      <div className="w-full">
        <Field
          className="input"
          name="status"
          id="status"
          placeholder="Estado:"
          as="select"
        >
          <option value={Status.FOR_PACKAGING}>Por empaquetar</option>
          <option value={Status.PACKAGING}>Empaquetado</option>
          <option value={Status.ON_THE_WAY}>En camino</option>
          <option value={Status.DISPATCHED}>Despachado</option>
          <option value={Status.DELIVERED}>Entregado</option>
        </Field>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ButtonSend label="Guardar envío" />
        <ButtonModaleClose />
      </div>
    </Form>
  );
};
