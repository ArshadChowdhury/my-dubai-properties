import Image from "next/image";
import BarLoader from "react-spinners/BarLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#F1BF3F",
  borderRadius: "40px",
};

function LoadingState() {
  const color = "#F1BF3F";

  return (
    <div className="sweet-loading h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-8 mb-20">
        <Image
          priority
          src={"/images/global/footer-logo.png"}
          height={150}
          width={150}
          alt="Logo"
        />
        <BarLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={350}
          height={10}
          width={200}
          speedMultiplier={1}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default LoadingState;
