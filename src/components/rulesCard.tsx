const RulesCard = () => {
  return (
    <div className="flex flex-col text-center p-5 w-full max-w-4xl mx-auto border border-gray-300 border-dashed border-2 rounded-lg p-2">
    <p className="text-lg font-bold text-gray-500 text-left mb-3">
      Rules are simple:
    </p>
    <ul className="list-disc list-inside text-left">
      <li className="text-lg">
        You will have 2 choices to vote for.
      </li>
      <li className="text-lg">
        If you vote for the popular choice, you will be rewarded.
      </li>
      <li className="text-lg">
        If you vote for the unpopular choice, you will be punished.
      </li>
    </ul>
  </div>
  )
}

export default RulesCard;