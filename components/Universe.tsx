

import Stars from "./Stars";
import Shootingstars from "./Shootingstars";
import Sun from "./Sun";

export default function Universe() {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <Stars />
      <Shootingstars/>
      <Sun/>
    </div>
  );
}
