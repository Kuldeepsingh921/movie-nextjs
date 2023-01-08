import axios from "axios";
import Link from "next/link";
import MovieCard from "../../components/MovieCard";

 const Movies = ({movies}) => {
  //console.log(movies)
  return (
    
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'30px',marginTop:'30px'}}>
        
        {movies.map((el)=>
        <Link key={el.id} href={`/movies/${el.id}`}><MovieCard 
        key={el.id} id={el.id}
        poster={el.Images[2]} title={el.Title}
        year={el.Year} release={el.Released} 
        imdbrating={el.ImdbRating}
         />   </Link> 
        )}
        
    </div>
  )
}

export const getStaticProps=async()=>{
    let res= await axios.get('https://movies-database-gold.vercel.app/movies')
    let data= await res.data;
    //console.log(data)
    return {
        props:{
          movies:data,
        }
    }
}


export default Movies;
