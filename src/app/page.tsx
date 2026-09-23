import Banner from "./components/Banner";
import FitLogPage from "./fitLog/page";
// import FitCards from "./components/shared/FitCards";

export default function Home() {
  return (
    <div className=" my-12">
      <Banner />
      <FitLogPage />
    </div>
  );
}
