import Header from "../../components/header";

const VoteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="h-screen flex flex-col items-center justify-center gap-4">
        {children}
      </main>
    </div>
  )
}

export default VoteLayout;