import React,{useState} from 'react';
import Router from 'next/router';

export default function CreateMatch() {
    const [formData, setFormData] = useState({});
    

    const handlesubmit=(e)=> {
        e.preventDefault();
               console.log(formData);
        Router.push({
            pathname: '/scoretab',
            query: formData,
        });
    }
    const handleInputChange = (event) => {
        const { target } = event;
        const { name, value } = target;
    
        setFormData({
          ...formData, // Keep existing form data
          [name]: value // Update form data for the input field that changed
        });
      }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
                        Create Match
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handlesubmit}>
                        <div>
                            <label htmlFor="team1" className="block text-sm font-medium leading-6 text-white">
                                Team Name 1
                            </label>
                            <div className="mt-2">
                                <input
                                    id="team1"
                                    name="team1"
                                    type="text"
                                    required
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="team2" className="block text-sm font-medium leading-6 text-White">
                                    Team Name 2
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="team2"
                                    name="team2"
                                    type="text"
                                    onChange={handleInputChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-White">
                                    Total Overs
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="Overs"
                                    name="Overs"
                                    type="number"
                                    onChange={handleInputChange}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Create Match
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Starting a{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            League?
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}