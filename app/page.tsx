import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center w-full">
      <div className="flex justify-center flex-col m-4 p-10 max-w-screen-md">
        <h1 className="text-2xl font-bold mb-4 p-4 text-blue-700 ">
          Welcome to the Home Page
        </h1>

        <div className="mb-4 p-4 text-lg ">
          <Link href={"/client"} className="font-extrabold hover:font-extrabold hover:text-blue-950">
            Client Page
          </Link>{" "}
          : Interactive client-side rendering in action
        </div>

        <div className="mb-4 p-4  text-lg ">
          <Link href={"/server"} className="font-extrabold hover:font-extrabold hover:text-blue-950">
            Server Page
          </Link>{" "}
          : Optimized static content for SEO
        </div>
      </div>
    </div>
  );
}
