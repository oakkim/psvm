import Link from "next/link";

const Header = () => {
  return (
    <div className="p-3 pl-4 bg-white border-b flex items-center space-x-4 fixed w-full z-50">
      <div>
        <Link href="/">
          <div className="flex justify-center items-center">
            <code>psvm {"{}"}</code>
          </div>
        </Link>
      </div>
      <div className="flex-1"/>
      <div>
        <Link href="/posts">
          글
        </Link>
      </div>
      <div>
        <Link href="/journals">
          저널
        </Link>
      </div>
    </div>
  );
}

export default Header;
