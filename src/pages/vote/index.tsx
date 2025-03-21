import VoteLayout from "./layout";
import { getEnsName, getAccount, GetEnsNameReturnType } from "@wagmi/core";
import { config } from "../../wagmi";
import Voting from "../../components/voting";

type VotingProps = {
  ensName: Promise<GetEnsNameReturnType>
}

const props: VotingProps = {
  ensName: Promise.resolve(null)
}
const { address } = getAccount(config)
console.log(address)
if (address) {
  getEnsName(config, { address }).then((ensName) => {
    props.ensName = Promise.resolve(ensName)
  })
}

const Vote = () => {

  return (
    <VoteLayout>
      <Voting ensName={props.ensName} />
    </VoteLayout>
  )
}

export default Vote;