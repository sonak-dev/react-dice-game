export const Button = ({ text, onClick }) => {
   return (
      <button 
         onClick={onClick}
         className="mt-8 w-50 h-16 bg-black
            text-white
            rounded-2xl
            cursor-pointer
            transition-all
            border
            border-black
            duration-300
            hover:bg-white
            hover:text-black
         "
      >
         {text}
      </button>
   )
}

/* 
   mt-8 w-50 h-16 bg-black text-white rounded-2xl border
   border-black 
   cursor-pointer
   transition-all
   duration-300
   hover:bg-white
   hover:text-black
*/