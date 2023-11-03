import { useState } from "react";
import { Merchant } from "./Merchant";
import { Reviews } from "./Reviews";

export function DetailOperation({ product }) {
  const [operation, setOperation] = useState(true);

  

  return (
    <div className="mx-20">
      <header className="flex border-b-[1px] text-xl font-extralight">
        <button
          className={`px-3 py-2 ${
            operation && "border-b-[1px] border-[#1E4C2F]"
          }`}
          onClick={() => setOperation(true)}
        >
          Merchant
        </button>
        <button
          className={`px-3 py-2 ${
            !operation && "border-b-[1px] border-[#1E4C2F]"
          }`}
          onClick={() => setOperation(false)}
        >
          Reviews
        </button>
      </header>
      {operation ? (
        <Merchant product={product} />
      ) : (
        <Reviews productId={product.id} />
      )}
    </div>
  );
}
