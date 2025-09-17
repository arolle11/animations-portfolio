export default function CheckboxInteraction() {
  const items = [
    "Dresses",
    "Jumpsuits",
    "Coat & jacket",
    "Beachwear",
    "Acessories",
  ];
  return (
    <div className="flex flex-col justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1] gap-8 p-8 rounded-md">
      <div className="flex gap-2 items-center border-b border-b-gray-400 pb-4 w-full">
        <span className="rounded-sm border border-gray-400 w-6 h-6"> </span>
        <p className="font-bold text-base">Collections</p>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 items-center border-b border-b-gray-400 pb-4 w-full"
        >
          <span className="rounded-sm border border-gray-400 w-6 h-6"> </span>
          <p className="text-base">{item}</p>
        </div>
      ))}
    </div>
  );
}
