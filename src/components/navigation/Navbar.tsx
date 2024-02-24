import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Link href="/">
        <h2 className="text-2xl font-bold cursor-pointer">TokenFactory</h2>
      </Link>
      <w3m-button />
    </div>
  );
};
