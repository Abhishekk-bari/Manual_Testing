
function Features() {
  
  return (
    <div className="w-fit h-[34vw] bg-[#216944] rounded-full">
        <div className="flex space-x-8 p-24">
      {/* Card 1 */}
      <div className="border-5 border-gray-300  border-dashed rounded-lg p-10 shadow-md w-1/2">
        <p className="text-gray-100 text-4xl font-bold">
          Manual testing involves manually executing test cases without the use of automation tools. It is essential for exploratory, usability, and ad-hoc testing.
        </p>
      </div>

      {/* Card 2 */}
      <div className=" bg-[#174930] rounded-xl p-10 shadow-md w-1/2">
        <h2 className="text-5xl font-bold mb-4 text-white">Benefits of Manual Testing</h2>
        <p className="text-gray-100 text-3xl">
          Manual testing allows testers to identify visual and usability issues, provides human insight, and is ideal for small projects or when automation is not feasible.
        </p>
      </div>
    </div>
    </div>
  );
};     

export default Features;
