function App() {
  
  return (
    <div>
      <div className=" flex  justify-between px-5 ">
      {/* <p className="text-3xl font-bold text-red-400">The fun is in coding</p> */}
      <div>Logo</div>
      <div className="flex gap-3">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
    <div className="grid grid cols-1 sm:grid-cols-2 text-white p-6 gap-6">
      <div className="bg-slate-500 p-4 rounded">featured one</div>
      <div className="bg-slate-500 p-4 rounded">featured two</div>
      <div className="bg-slate-500 p-4 rounded">featured three</div>
      <div className="bg-slate-500 p-4 rounded">featured four</div>
      <div className="bg-slate-500 p-4 rounded">featured five</div>
      <div className="bg-slate-500 p-4 rounded">featured six</div>
    </div>
    </div>
  );
}

export default App
