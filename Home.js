import React from 'react';
import{Link} from "react-router-dom";
export default function Home() {
  return (
    <>
    <div id="home">
      <p id="text">Welcome to My-Playlist!</p>
    </div>
    <section id="list">
        <div className="list1">
         <Link to="/topic1"><div id="topic1" className="listcontent">
         <i class="fa-solid fa-headphones"></i>
         <p>Telugu</p>
         </div></Link>
         <Link to="/topic2"><div id="topic2" className="listcontent">
         <i class="fa-solid fa-icons"></i>
         <p>Hindi</p>
         </div></Link>
         <Link to="/topic3"><div id="topic3" className="listcontent">
         <i class="fa-solid fa-guitar"></i>
         <p>Tamil</p>
         </div></Link>
         <Link to="/topic4"><div id="topic4" className="listcontent">
         <i class="fa-solid fa-music"></i>
         <p>Logi+Mashup</p>
         </div>
         </Link>
        </div>
        <div className="list2">
         <Link to="/topic5"><div id="topic5" className="listcontent">
          <p>Arijit Singh</p>
         </div></Link>
         <Link to='/topic6'><div id="topic6" className="listcontent">
          <p>Devi sri prasad</p>
         </div></Link>
         <Link to="/topic7"><div id="topic7" className="listcontent">
          <p>Anirudh Ravichander</p>
         </div></Link>
         <Link to="/topic8"><div id="topic8" className="listcontent">
          <p>Ravi basrur</p>
         </div></Link>
        </div>
    </section>
    </>
  )
}
