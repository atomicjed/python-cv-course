import Text from "../components/Text.jsx";
import {Link} from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className={'bg-black z-30 fixed w-full h-[100vh] flex flex-col gap-6 items-center justify-center px-4 sm:px-12'}>
      <Text variant={"h1"}>This page could not be found.</Text>
      <div>Return to the first module <Link className={'text-primary hover:text-secondary underline'} to={'/1'}>here</Link></div>
    </div>
  )
}