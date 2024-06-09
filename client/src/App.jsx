import { Toaster } from "sonner";
import AllRoutes from "./lib/AllRoutes";
import { Suspense } from "react";
import Loader from "./pages/Loader/Loader";

export default function App() {
  return (
    <>
    <Toaster/>
    <Suspense fallback={<Loader/>}>
      <AllRoutes />
      </Suspense>
    </>
  );
}
