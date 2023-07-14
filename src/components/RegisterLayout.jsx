import Stepsbar from "./Stepsbar";

const RegisterLayout = ({ children }) => {
  return (
    <>
      <main className="container mx-auto py-8 flex flex-col items-center">
        <Stepsbar />
        {children}
      </main>
    </>
  );
}

export default RegisterLayout;