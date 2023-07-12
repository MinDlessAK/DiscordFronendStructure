
export default () => {
  return (
    <>
       <div class="flex w-full min-h-screen  ">

        <div class="bg-red-500 w-28 lg:flex flex-col items-center gap-4  hidden">
          <div class="bg-gray-600 w-10 h-10 rounded-full mt-4"></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
          <div class="bg-gray-600 w-10 h-10 rounded-full "></div>
         
        </div>

        <div class="bg-yellow-500 w-32 flex flex-col justify-between lg:w-56">
         <div class="bg-green-400 w-full h-40 flex flex-col gap-3 items-center justify-around ">
          <div class= "bg-white lg:w-40  w-2/3 h-10"></div>
          <div class= "bg-white lg:w-40  w-2/3 h-10"></div>
         </div>

         <div class="bg-slate-500 w-full  h-40 ">
         <div class=" w-full h-40 flex flex-col  ">
          <div class= "bg-cyan-500 grow flex flex-col"></div>
            {/* <div class="bg-black w-full h-1/2" ></div>
            <div class="bg-gray-600 w-full h-1/2"></div> */}
          <div class= "bg-white w-full h-10"></div>
          <div class= "bg-black w-full h-10"></div>
         </div>
         </div>
        </div>

        <div class="bg-purple-600 grow flex flex-col justify-between  ">
          <div class="flex flex-col">
          <div class="h-14 w-full bg-gray-600"></div>
          </div>
          <div class="flex flex-col">
             <div class="h-14 w-full bg-gray-600 "></div>
          </div>
        </div>

       </div>
    </>
  );
};

