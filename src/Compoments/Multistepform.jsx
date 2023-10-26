import React, { useState } from "react";

export default function Multistepform() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");

  const togglestep1 = () => {
    if(step1 == true){
      setStep1(step1);
    }
    else {
      setStep1(!step1);
    }
    
    if(step2 == true){
      setStep2(!step2);
    }
    else if(step3 == true){
      setStep3(!step3);
    }
   
  };
  const togglestep4 = () => {
   
    if(step3 == true){
      setStep3(step3);
    }
    else {
      setStep3(!step3);
    }
    
    if(step1 == true){
      setStep1(!step1);
    }
    else if(step2 == true){
      setStep2(!step2);
    }
   
  };
  const togglestep5 = () => {
   
    if(step2 == true){
      setStep2(step2);
    }
    else {
      setStep2(!step2);
    }
    
    if(step1 == true){
      setStep1(!step1);
    }
    else if(step3 == true){
      setStep3(!step3);
    }
   
  };

  const togglestep2 = () => {
    setStep2(!step2);
    setStep1(!step1);
  };

  const togglestep3 = () => {
    setStep3(!step3);
    setStep2(!step2);
  };

  const togglesteppre = () => {
    setStep1(!step1);
    setStep2(!step2);
  };

  const togglesteppre3 = () => {
    setStep2(!step2);
    setStep3(!step3);
  };

  const submit = (e) => {
    e.preventDefault();

    console.log("First Name : -", fname);
    console.log("Last Name : -", lname);
    console.log("Mobile Number : -", number);
    alert("Your data is sucessfully submitted");

    setFname("");
    setLname("");
    setNumber("");

    setStep1(!step1);
    setStep3(!step3);
  };

  return (
    <div className="flex justify-center min-h-screen transition duration-700 ease-in-out">
      <div className="mt-[5%]">
        <p className="text-4xl pl-4 ">Multistep Form</p>
        <form onSubmit={submit}>
          <div className="border mt-5">
            <div className="flex mt-2 ml-2 mr-2">
              {/* First button */}
              <div className={`border-2 cursor-pointer transition duration-700 rounded-full w-10 flex justify-center ${step1 ? 'bg-green-600' : 'bg-green-200'}`} onClick={togglestep1}>
                <p>1</p>
              </div>
              <div>
                <hr className={`my-3  w-14 ml-2 border-2 rounded-lg dark:bg-gray-700 ${step1 ? 'bg-green-600' : 'bg-green-200'}`} />
              </div>
              {/* Second button */}
              <div className={`border-2 cursor-pointer transition duration-700 rounded-full w-10 ml-2 flex justify-center ${step2 ? 'bg-green-600' : 'bg-green-200'}`} onClick={togglestep5}>
                <p>2</p>
              </div>
              <div>
                <hr className={`my-3 transition duration-700 bg-gray-200 w-14 ml-2 border-2 rounded-lg dark:bg-gray-700 ${step2 ? 'bg-green-600' : 'bg-green-200'}`} />
              </div>
              {/* Third button */}
              <div className={`border-2 cursor-pointer transition duration-700 rounded-full w-10 ml-2 flex justify-center ${step3 ? 'bg-green-600' : 'bg-green-200'}`} onClick={togglestep4}>
                <p>3</p>
              </div>
            </div>
            {/* First part */}
            {step1 && (
              <div className="p-2 mt-10 transition duration-700">
                <label htmlFor="" className="transition duration-700">First Name :-</label>
                <br />
                <input
                  type="text"
                  className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-700"
                  required
                  placeholder="Enter your first name "
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <button
                  className="w-full bg-amber-400 mt-5 p-2 rounded-md transition duration-700"
                  onClick={togglestep2}
                >
                  Next
                </button>
              </div>
            )}
            {/* Second part */}
            {step2 && (
              <div className="p-2 mt-10 transition duration-700">
                <label htmlFor="" className="transition duration-700">Last Name :-</label>
                <br />
                <input
                  type="text"
                  className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-700"
                  required
                  placeholder="Enter your last name "
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                <div className="flex">
                  <button
                    className="w-full bg-amber-400 mt-5 p-2 rounded-md transition duration-700"
                    onClick={togglestep3}
                  >
                    Next
                  </button>
                  <button
                    className="w-full bg-[#15803d] mt-5 ml-1 p-1 transition duration-700 rounded-md"
                    onClick={togglesteppre}
                  >
                    Previous
                  </button>
                </div>
              </div>
            )}
            {/* Third Part */}
            {step3 && (
              <div className="p-2 mt-10 transition duration-700">
                <label htmlFor="" className="transition duration-700">Mobile Number :-</label>
                <br />
                <input
                  type="number"
                  className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-700"
                  required
                  placeholder="Enter your mobile number "
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <div className="flex">
                  <button
                    type="submit"
                    className="w-full bg-red-500 mt-5 p-2 rounded-md transition duration-700"
                  >
                    Submit
                  </button>
                  <button
                    className="w-full bg-[#15803d] mt-5 ml-1 p-1 transition duration-700 rounded-md"
                    onClick={togglesteppre3}
                  >
                    Previous
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
