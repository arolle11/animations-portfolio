export default function RadioButton() {
  return (
    <div className="cursor-pointer flex justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1]  gap-8 p-8 rounded-md">
      <div className="flex flex-col bg-white text-secondary rounded-lg p-12 gap-8">
        <span className="flex w-24 justify-between items-center">
          {" "}
          <label htmlFor="one">One</label>
          <input type="radio" name="one" id="one" />
        </span>
        <span className="flex w-24 justify-between items-center">
          {" "}
          <label htmlFor="two">Two</label>
          <input type="radio" name="one" id="two" />
        </span>
        <span className="flex w-24 justify-between items-center">
          <label htmlFor="three">Three</label>
          <input type="radio" name="one" id="three" />
        </span>
      </div>
    </div>
  );
}
