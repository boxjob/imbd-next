import Image from "next/image"

const Movie = async ({ params }) => {
    
    const movieId = params.id

    const res = await fetch(`https://api.themoviedb.org/3/movie/${ movieId }?api_key=${process.env.API_KEY}`)
    const movie = await res.json()
    
    console.log( movie )

    return (
        <div className="w-full">
            <div className="py-8 px-4 flex content-center max-w-6xl mx-auto space-x-4">
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${ movie.backdrop_path || movie.poster_path }`} 
                    width={500} height={300} 
                    className="rounded-lg"
                    alt={ movie.original_name || movie.title }
                    style={{ maxWidth: '100%', height: '100%' }}
                />
                <div>
                    <h2 className="text-lg mb-3 font-bold">{ movie.original_name || movie.title }</h2>
                    <p>{ movie.overview }</p>
                    <p>{ movie.release_date }</p>
                    <p>{ movie.vote_count  }</p>
                </div>
            </div>
        </div>
    );
}
 
export default Movie;