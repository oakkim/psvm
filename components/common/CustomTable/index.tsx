import { ReactNode } from 'react';

type CustomTableProps = {
  children: ReactNode;
}

const CustomTable = ({
  children,
}: CustomTableProps) => {
  return (
    <div className="mx-3 overflow-auto">
      <table className="w-full border-collapse whitespace-nowrap">{children}</table>
    </div>
  );
}

export default CustomTable;