import { useNavigate } from "react-router-dom";


function RouteMenuOperations() {
  const navigate = useNavigate()
  return (
    <div className="hidden sm:flex gap-4">
      <button onClick={()=> navigate("/")} >หน้าหลัก</button>
      <button>Category</button>
      <button>Category2</button>
    </div>
  );
}

export default RouteMenuOperations;
