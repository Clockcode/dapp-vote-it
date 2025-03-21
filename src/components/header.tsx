import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import ConnectButtonCustom from "./connectButton";
const Header = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  }
  return (
    <div className="flex flex-row justify-between items-center p-4 border-b border-gray-300 w-full bg-gray-100">
      <div className="flex flex-row items-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:filter hover:brightness-110" onClick={goToHome}>
        <Image src="/assets/logo.png" alt="Logo" width={150} height={150} />
      </div>
      <div className="flex flex-row items-center">
        <ConnectButtonCustom />
      </div>
    </div>
  )
}

export default Header;