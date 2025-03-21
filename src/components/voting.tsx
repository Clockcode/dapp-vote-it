import Card from "./card";
import mockData from "../../public/mock-data";
import Image from "next/image";
import { use, useState } from "react";
import { GetEnsNameReturnType } from "@wagmi/core";
const Voting = ({ ensName }: { ensName: Promise<GetEnsNameReturnType> }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const handleCardClick = (title: string) => {
    setSelectedCard(title);
  }
  const handleVote = () => {
    console.log("Voted for", selectedCard);
  }
  const mockDataLength = mockData.length;
  return (
    <div>
      <h1>Voting for {use(ensName)}</h1>
      <div className="flex flex-row justify-center items-center">
        {mockData.map((item, index) => {
          return (
            <div key={item.title} style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                onClick={() => handleCardClick(item.title)}
                isSelected={selectedCard === item.title}
              />
              {index < mockDataLength - 1 && <Image src="/assets/vs_icon.svg" alt="VS" width={35} height={35} />}
            </div>
          )
        })}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleVote}>
        VOTE IT
      </button>
    </div>
  )
}

export default Voting;