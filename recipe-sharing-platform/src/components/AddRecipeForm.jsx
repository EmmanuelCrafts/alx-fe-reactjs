import { useState } from "react"

export default function AddRecipeForm() {
    const[title, setTitle] = useState("");
    const[ingredients, setIngredients] = useState([]);
    const[steps, setSteps] = useState([]);
    
    const[submittedData, setSubmittedData] = useState(null);
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

        if (steps.length === 0) {
            alert('Please add at least one instruction');
            return;
        }
         setSubmittedData({
          title,
          ingredients,
          steps,
         })
        setTitle("");
        setIngredients([]);
        setSteps([]);
    };

    return (
        <>
           <div>
             <form className="flex flex-col gap-4 ml-4 bg-gray-100 rounded-xl border-1 border-orange-200 w-[95%] shadow-lg pl-4 py-8 md:w-[80%] md:mx-auto  lg:mb-12 lg:shadow-lg lg:w-[40%] lg:mx-auto" onSubmit={handleSubmit}>
               <div className=" flex gap-4  items-center">
                 <label htmlFor="title">Title:</label>
                 <input 
                 type="text"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 className="bg-white w-[80%] h-12 lg:w-[77%] ]"
                 placeholder="Enter Recipe title eg.Carribean fish curry"
                  />
               </div>
                <div className="flex  gap-4 mt-4 items-center">
                    <label htmlFor="ingredients"> Ingredients: </label>
                    {/* text area not working as needed user cant type space or commas */}
                    <textarea 
                         value={ingredients.join("\n")}
                         onChange={(e) => setIngredients(e.target.value
                          .split("\n")
                          .map(ingredient => ingredient.trim())
                          .filter(Boolean)
                        )}
                        placeholder="Enter ingredients eg. floor, oil "
                        className="bg-white  w-[70%] h-auto "
                       />
                </div>
                <div className="flex gap-4 mt-4 items-center">
                    <label htmlFor="instructions">Instructions: </label> 
                    <textarea 
                         value={steps.join('\n')}
                         onChange={(e) => setSteps(e.target.value
                          .split('\n')
                          .map(step => step.trim())
                          .filter(Boolean)
                        )}
                        placeholder="Enter at least 2 instructions"
                        className="bg-white w-[70%] h-auto"
                       />
                </div>

                <button type="submit" className="bg-orange-600 w-[25%] mx-auto md:w-[30%] lg:w-[25%] rounded-2xl py-1 mt-4 hover:bg-orange-400
           transition duration-500 ease-in-out text-white">Submit</button>
             </form>
             {/* preview */}
             {submittedData && (
                <div className="bg-gray-100 w-[95%] border-1 border-orange-200 mt-4 lg:mx-auto lg:w-[40%] md:w-[80%] md:mx-auto pl-4 mb-8 shadow-lg ml-4 rounded-xl">
                <h1 className="font-bold text-2xl mb-2 pt-1 text-center text-orange-500 hover:text-orange-600
              transition duration-100  lg:text-4xl lg:pt-8">{submittedData.title}</h1>
                    <div className="mt-2 pt-1">
                       <h2 className="font-semibold text-orange-500 md:text-xl
                         text-lg ml-4 md:pl-8  lg:text-2xl">Ingredients</h2>
                        <ul className="list-disc ml-4 pl-4 md:pl-8">
                             {submittedData.ingredients.map((ingredient, index) => (
                            <li key={index} className="py-1 text-sm md:text-base  lg:text-lg">{ingredient}</li>
                            ))}
                        </ul>
                   </div>
                   <div className="pb-8">
                        <h2 className="font-semibold text-orange-500 md:text-left md:pl-14 text-lg  ml-4 md:text-xl lg:text-2xl">Instructions</h2>
                         <ol className="list-decimal ml-4 px-4 md:w-[92%] md:mx-auto ">
                            {submittedData.steps.map((step, index) => (
                           <li key={index} className="py-2 text-sm md:text-base md:py-1 lg:text-lg">{step}</li>
                            ))}
                       </ol>
                    </div>
                 </div>
               )}
             </div>
        </>
     );
}