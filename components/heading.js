export default function Heading({ white, yellow, blur }) {
  return (
    <div className="uppercase flex justify-center items-center">
      <h1 className="text-5xl text-white text-center  font-semibold z-[1]">
        {white} <span className="text-clr-yellow">{yellow}</span>
      </h1>
      <span className="text-clr-gray text-8xl text-center w-full font-bold opacity-30 absolute">{blur}</span>
    </div>
  );
}
