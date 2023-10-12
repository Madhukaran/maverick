export default function Input(props) {
    return (
        <>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                    {props.name}
                </label>
                <div className="mt-2">
                    <input
                        id={props.id ? props.id : "name"}
                        name={props.name ? props.name : "name"}
                        type={props.type ? props.type : "text"}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </>
    )
}