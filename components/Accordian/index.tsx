import { ReactNode, useState } from "react";

type AccordianType = {
  title: String;
  children: ReactNode 
};

const Accordian = ({title, children}: AccordianType) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className="mb-5">
      <div className="cursor-pointer select-none mb-5" onClick={() => setVisible(!visible)}>
        <span className="font-mono">{visible ? "▼" : "▶"}</span>
        <span className="ml-2">{title}</span>
      </div>
      <div className={`${visible ? "" : "hidden"} p-5 pb-0 border`}>
        {children}
      </div>
    </div>
  );
};

export default Accordian;