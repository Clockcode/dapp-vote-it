import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/header';
import RulesCard from '../components/rulesCard';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">
          Connect your wallet to start voting
        </h2>
        <Link href="/vote">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            VOTE IT
          </button>
        </Link>
        <div className="flex flex-col items-center justify-center gap-4">
          <RulesCard />
        </div>
      </main>
    </>
  );
};

export default Home;
