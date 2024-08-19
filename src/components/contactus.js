const Contact=()=>{
    return (
        <div>
            <h1 className="font-bold p-4 m-4 text-3xl">contact us Page</h1>
            <form>
                <input className="border border-black p-2 m-2"type="text" placeholder="name"></input>

                <input className="border border-black p-2 m-2" type="text" placeholder="message"></input>
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    )
}
export default Contact;