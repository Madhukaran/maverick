import Input from "../components/input";
import Button from "@/components/button";

export default function Signup(props) {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
                        Signup
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <Input name="Mobile Number" />
                        <Input name="Name" />
                        <Button name="Let&apos;s Rock" />
                    </form>
                </div>
            </div>
        </>
    )
}