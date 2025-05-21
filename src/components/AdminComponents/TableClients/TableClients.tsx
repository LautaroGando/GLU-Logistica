export const TableClients = () => {
  return (
    <div className="w-full h-[calc(100vh-290px)] overflow-auto">
      <table>
        <thead className="border-b">
          <tr>
            <th className="min-w-[200px]">Nombre</th>
            <th className="min-w-[200px]">Apellido</th>
            <th className="min-w-[200px]">Correo electrónico</th>
            <th className="min-w-[200px]">Documento</th>
            <th className="min-w-[200px]">Dirección</th>
            <th className="min-w-[200px]">Teléfono</th>
            <th className="min-w-[200px]">Fecha de nacimiento</th>
            <th className="min-w-[200px]">Empresa</th>
            <th className="min-w-[200px]">Acciones</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lautaro</td>
                <td>Gando</td>
                <td>lautarogandodev@gmail.com</td>
                <td>43.171.024</td>
                <td>Av. Juan B. Justo 9100</td>
                <td>11-3269-2245</td>
                <td>22/05/2001</td>
                <td>Gando S.R.L</td>
                <td>-
                    onn
                    
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};
