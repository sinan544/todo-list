import './List.css'
function Inplist() {
 return <>
 <body>
    
   <div id="main">
    <div id="container">
    <h1 id="mtitle">Note</h1>
        <label htmlFor="title"  id="ntitle" className="text">Title</label>
        <input type="text" className="inp" id="title"/>
        <label htmlFor="desc" id="ndesc" className="text">description</label>
        <input type="text" className="inp" id="desc"/>
   
        <button type="submit" value="submit" id="btn">Submit</button>
      
    </div>
  </div>
 </body>
 </> 
}
export default Inplist