import "app/globals.css";

//components
import CircularProgress from "@mui/material/CircularProgress";

export const Loader = () => {
  return (
    <div className="w-full full-height flex justify-center items-center">
      <CircularProgress />
      <div className="ml-2">
      Loading your dataset :)
      </div>
    </div>
  );
};
