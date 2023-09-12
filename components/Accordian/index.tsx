import { ReactNode, useState } from "react";

type AccordianType = {
  title: String;
  children: ReactNode 
};

const Accordian = ({title, children}: AccordianType) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div>
      <div className="cursor-pointer select-none" onClick={() => setVisible(!visible)}>
        <span className="font-mono">{visible ? "▼" : "▶"}</span>
        <span className="ml-2">{title}</span>
      </div>
      <div className={visible ? "" : "hidden"}>
        {children}
      </div>
    </div>
  );
};

export default Accordian;