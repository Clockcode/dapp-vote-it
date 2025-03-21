function Card({ title, description, image, isSelected, onClick }: { title: string, description: string, image: string, isSelected: boolean, onClick: () => void }) {
  return (
    <div className="border border-2 border-gray-300 rounded-lg p-4 m-4 max-w-80 h-auto hover:cursor-pointer group hover:border-blue-800 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-blue-100">
      <div className="w-full h-80 object-cover rounded-lg">
        <img src={image} alt="Card" className="w-full h-full object-cover rounded-lg" />
      </div>
      <h3 className="text-xl font-bold mt-4 group-hover:text-blue-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-2 group-hover:text-blue-800">
        {description}
      </p>
    </div>
  )
}

export default Card;