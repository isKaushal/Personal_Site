export default function Heading({ white, yellow, blur }) {
    return (
        <div className="uppercase flex justify-center items-center font-bold relative">
            <h1 className="text-4xl md:text-6xl text-white text-center z-[1] ">
                {white} <span className="text-clr-yellow">{yellow}</span>
            </h1>
            <span className="text-clr-gray text-7xl md:text-9xl text-center w-full font-bold opacity-40 absolute">
                {blur}
            </span>
        </div>
    )
}
