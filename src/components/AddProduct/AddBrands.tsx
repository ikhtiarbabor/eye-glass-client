import { useState } from "react";

export default function AddBrands() {
  const [input, setInput] = useState(true);
  return (
    <button onClick={() => setInput(input)} className='text-blue-500'>
      +
    </button>
  );
}
