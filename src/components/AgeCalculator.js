import { useState } from "react";

function AgeCalculator() {
    const [birthdate, setBirthdate] = useState("");
    const [age, setAge] = useState(0);
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson.date);

        const bDate = new Date(formJson.date);
        const current = new Date();

        if (current.getMonth() - bDate.getMonth() < 0) {
            setAge(current.getFullYear() - bDate.getFullYear() - 1);
        } else setAge(current.getFullYear() - bDate.getFullYear());
    }

    return (
        <div class="mt-5 text-center p-3 w-50 mx-auto bg-info bg-opacity-10 border border-info rounded">
            <h1 className="mb-5">Age Calculator</h1>
            <h5>Enter your age here:</h5>
            <form method="post" onSubmit={handleSubmit}>
                <input
                    type="date"
                    name="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <button className="btn btn-info m-3" type="submit">
                    Get your age!
                </button>
            </form>
            <hr />
            <h5>You are {age} years old</h5>
        </div>
    );
}

export default AgeCalculator;
