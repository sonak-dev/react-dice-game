export const NumberSelector = ({ selectedNumber, setSelectedNumber, error, setError }) => {

   const arrNumber = [1, 2, 3, 4, 5, 6];

   return(
      <div className="flex flex-col items-end gap-3">

         {
            error && (
               <p className="mb-3 text-lg font-semibold text-red-500">
                  {error}
               </p>
            )
         }

         <div className="flex gap-6">
            {
               arrNumber.map((number) => (
                  <button
                     onClick={() => {
                        setSelectedNumber(number);
                        setError("");
                     }}
                     key={number}
                     className={`
                        w-16 h-16 border border-black font-bolds
                        text-2xl transition-all duration-300 rounded-lg
                        cursor-pointer font-bold
                        ${selectedNumber === number
                           ? "bg-black text-white"
                           : "bg-white text-black hover:bg-black hover:text-white"
                        }
                     `}
                  >
                     {number}
                  </button>
               ))
            }
         </div>

         <p className="mt-2 text-2xl font-semibold text-right">
            Select Number
         </p>

      </div>
   )
}



{/* 

<div className="flex flex-col items-end gap-3">

   {error && (
      <p className="mb-3 text-lg font-semibold text-red-500">
         {error}
      </p>
   )}

   <div className="flex gap-6">
      {
         [1, 2, 3, 4, 5, 6].map((number) => (
            <button
               key={number}
               onClick={() => {
                  setSelectedNumber(number);
                  setError("");
               }}
               className={`
                  w-16 h-16 border border-black
                  text-2xl font-bold
                  rounded-2xl transition-all
                  duration-300 cursor-pointer
                        ${
                           selectedNumber === number
                           ? "bg-black text-white"
                           : "bg-white text-black hover:bg-black hover:text-white"
                        }
               `}
            >
               {number}
            </button>
         ))
      }

   </div>

   <p className="text-2xl font-semibold">
      Select Number
   </p>

</div> */}