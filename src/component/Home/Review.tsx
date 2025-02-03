import img from '../../assets/QoTZyI7CkM97mFm0elr4g0yNc.png'
export default function Review() {
    const stats = [
        {
          id: 1,
          img: "/src/assets/Froy2vnjPIvW9tFSC65pPwhHgI.avif",
          value: "100+",
          label: "SCENARIOS",
        },
        // {
        //   id: 2,
        //   img: "/path-to-image2.jpg",
        //   value: "15+",
        //   label: "COURSES",
        // },
        {
          id: 3,
          img: "/src/assets/T6Ageuu84M7l3T7N5i1ogecTXU.avif",
          value: "20k+",
          label: "VISITORS",
        },
      ];

  return (
    <div className="h-20 pb-[38vw] bg-[#f6f5f3]">
        <div className='flex justify-center'>
            <img src={img} className='w-48 h-48'/>
        </div>
    <div className="flex flex-wrap justify-center gap-20 p-6 h-[30vw]">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center p-6 bg-gray-50 backdrop-blur-lg shadow-lg rounded-2xl w-[25vw] h-[20vw] text-center transition-transform transform hover:scale-105"
        >
          <img src={stat.img} alt={stat.label} className="w-32 h-32 mb-1" />
          <p className="text-5xl font-bold">{stat.value}</p>
          <p className="text-gray-800 mt-1 text-lg font-semibold uppercase">{stat.label}</p>
        </div>
      ))}
    </div>
    </div>
  );
};
