import { useMemo } from "react";
import { DataTable } from "../../components/DataTable";
import DashboardLayout from "./DashboardLayout";
import { columns } from "./customers/columns";

const Customers = () => {
  const dataLocal = JSON.parse(localStorage.getItem('users'))

  console.log(dataLocal)

  // const data = [
  //   {
  //     id: "728ed52f",
  //     name: "ngwe sin",
  //     address: "pending",
  //     nrc: "m@example.com",
  //     email: "m@example.com",
  //     mobile_number: "m@example.com",
  //   },
  // ]

  const data = useMemo(() => {
    return dataLocal.map(dL => {
      return {
        id: dL.id,
        name: dL.full_name,
        address: dL.address,
        nrc: `${dL.type}${dL.state}${dL.number}`,
        email: dL.email,
        mobile_number: dL.mobile_number,
      }
    })
  }, []);


  return (
    <DashboardLayout>
      <DataTable columns={columns} data={data} />
    </DashboardLayout>
  );
}

export default Customers;