import  data  from "../data";

const Cards = () => {
 

  return (
    <div className="grid md:grid-cols-2 gap-5 p-6 pt-20 pb-20 container">
      {data.map((item, i) => (
        <div
          key={i}
          className="bg-neutral-800 text-white p-6 rounded-2xl flex justify-between"
        >
          <div className="max-w-[70%]">
            <h2 className="font-bold text-lg leading-snug">
              {item.title}{" "}
              <span className="bg-purple-300 text-black px-2 rounded">
                {item.highlight}
              </span>
            </h2>
            <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
          </div>

          <div className="text-3xl opacity-60">{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
