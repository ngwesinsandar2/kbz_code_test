import { DataTable } from "../../components/DataTable";

const DashboardLayout = ({children}) => {

  return (
    <>
      <main className="container mx-auto py-8">
        {children}
      </main>
    </>
  );
}

export default DashboardLayout;