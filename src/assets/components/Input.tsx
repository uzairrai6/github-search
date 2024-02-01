export const Inputvalue =({ value, setData }: { value: any; setData: any })=>{
  return(
  <input
  type="text"
  placeholder="Start Typing to search something ..  "
  className="search"
   value={value}
   onChange={setData}
/>)
}