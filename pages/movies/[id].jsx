import axios from "axios"
import MovieDetails from "../../components/MovieDetails"
 const SingleMovie = ({movies}) => {
    const handlewishlist=async()=>{
        let res= await axios.post(`http://localhost:3004/wishlist`,movies)
    }
    console.log(movies)
  return (
    <div>
        <MovieDetails 
        id={movies.id}
         poster={movies.Images[2]}
         title={movies.Title}
         year={movies.Year}
         released={movies.Released}
         imdbrating={movies.imdbRating}
         actors={movies.Actors}
         awards={movies.Awards}
         country={movies.Country}
         director={movies.Director}
         genre={movies.Genre}
         language={movies.Language}
         type={movies.Type}
         handlewishlist={handlewishlist}
        />
    </div>
  )
}

 export  async function getStaticPaths(){
    let res= await axios.get('https://movies-database-gold.vercel.app/movies')
    let data= await res.data;
    //console.log(data)
    return {
        paths:data.map((el)=>({params:{id:String(el.id)}})),
        fallback:false,
    }

}

export async function getStaticProps(context){
    let id=context.params.id;
    let res= await axios.get(`https://movies-database-gold.vercel.app/movies/${id}`)
    let data= await res.data;
    //console.log(data)
    return {
        props:{
          movies:data,
        }
    }
}
export default SingleMovie;
