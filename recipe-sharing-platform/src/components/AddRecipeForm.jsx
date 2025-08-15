import { useState } from "react"

export default function AddRecipeForm() {
    const[title, setTitle] = useState("");
    const[ingredients, setIngredients] = useState([]);
    const[instructions, setInstructions] = useState([]);

    const  handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim()){
            alert("Title is required");
            return;
        }

        if (ingredients.length === 0) {
            alert('Please add ingredients');
            return;
        }

        if (instructions.length === 0) {
            alert('Please add at least one instruction');
            return;
        }

        setTitle("");
        setIngredients([]);
        setInstructions([]);
    };

    return (
        <>
           <div>
             <form className="flex flex-col gap-4 ml-4 bg-gray-100 rounded-xl border-1 border-amber-100 w-[95%] pl-4 py-8" onSubmit={handleSubmit}>
               <div className=" flex gap-4 ">
                 <label htmlFor="title">Title:</label>
                 <input 
                 type="text"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 className="bg-white w-[80%] h-12"
                  />
               </div>
                <div className="flex  gap-4 mt-4">
                    <label htmlFor="ingredients"> Ingredients: </label>
                    <textarea 
                         value={ingredients.join("\n")}
                         onChange={(e) => setIngredients(e.target.value
                          .split("\n")
                          .map(ingredient => ingredient.trim())
                          .filter(Boolean)
                        )}
                        placeholder="Enter ingredients"
                        className="bg-white  w-[70%] h-32"
                       />
                </div>
                <div className="flex gap-4 mt-4 ">
                    <label htmlFor="ingredients">Instructions: </label> 
                    <textarea 
                         value={instructions.join('\n')}
                         onChange={(e) => setInstructions(e.target.value.split('\n').map(instruction => instruction.filter(Boolean)))}
                        placeholder="Enter at least 2 instructions"
                        className="bg-white w-[70%] h-32"
                       />
                </div>

                <button type="submit" className="bg-orange-600 w-[25%] mx-auto md:w-[30%] lg:w-[25%] rounded-2xl py-1 mt-4 hover:bg-orange-400
           transition duration-500 ease-in-out text-white">Submit</button>
             </form>
             <div>
                <h1 className="font-extrabold text-2xl mb-4 pt-4 text-center text-orange-500 hover:text-orange-600
              transition duration-100  lg:text-4xl lg:pt-8">{title}</h1>
                    <div className="mt-8 pt-4">
                       <h2 className="font-semibold text-orange-500 md:text-xl
                         text-lg ml-4 md:pl-8  lg:text-2xl">Ingredients</h2>
                        <ul className="list-disc ml-4 pl-4 md:pl-8">
                             {ingredients.map((ingredient, index) => (
                            <li key={index} className="py-1 text-sm md:text-base  lg:text-lg">{ingredient}</li>
                            ))}
                        </ul>
                   </div>
                   <div className="pb-8">
                        <h2 className="font-semibold text-orange-500 md:text-left md:pl-14 text-lg text-center md:text-xl lg:text-2xl">Instructions</h2>
                         <ol className="list-decimal ml-4 px-4 md:w-[92%] md:mx-auto ">
                            {instructions.map((instruction, index) => (
                           <li key={index} className="py-2 text-sm md:text-base md:py-1 lg:text-lg">{instruction}</li>
                            ))}
                       </ol>
                    </div>
             </div>
           </div>
        </>
     );
}