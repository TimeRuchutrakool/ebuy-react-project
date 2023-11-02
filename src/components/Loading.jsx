import { Hourglass } from "react-loader-spinner";

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        style={{ minHeight: "35vh" }}
        className="flex justify-center items-center"
      >
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#007a12", "#00ab0b"]}
        />
      </div>
    </div>
  );
}

export default Loading;
