import { NumberTicker } from "@/components/ui/number-ticker";


export default function Review() {
    
    const stats = [
        {
          id: 1,
          img: "/src/assets/Froy2vnjPIvW9tFSC65pPwhHgI.avif",
          label: "SCENARIOS",
        },
        {
          id: 2,
          img: "/src/assets/sufXHD44N5iIkg4OtSY7l3qUM.png",
          value: "15+",
          label: "satisfaction",
        },
        {
          id: 3,
          img: "/src/assets/T6Ageuu84M7l3T7N5i1ogecTXU.avif",
          label: "VISITORS",
        },
      ];

  return (
    <div className="h-20 pb-[48vw] bg-[#f6f5f3] pt-1 ">
        <div className='text-center p-20'>
            <h2 className='text-6xl font-[NippoVariable] text-gray-900 pb-2'>Comprehensive <br/> Manual Testing Resources</h2>
            <p className='text-2xl  text-gray-800 mt-2'>Explore a wide range of manual testing scenarios, test cases, and best practices.</p>
        </div>
        {/* <div className='flex justify-center'>
            <img ref={imgRef} src={img} className='w-48 h-48'/>
        </div> */}
    <div className="flex flex-wrap justify-center gap-20 p-6 h-[30vw]">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center p-6 bg-gray-50 backdrop-blur-lg shadow-lg rounded-2xl w-[25vw] h-[20vw] text-center transition-transform transform hover:scale-105"
        >
          <img src={stat.img} alt={stat.label} className="w-32 h-32 mb-1" />
          <NumberTicker value={100} className="text-5xl font-bold" />
          <p className="text-gray-800 mt-1 text-lg font-semibold uppercase">{stat.label}</p>
        </div>
      ))}
      
    </div>
    
    </div>
  );
};
