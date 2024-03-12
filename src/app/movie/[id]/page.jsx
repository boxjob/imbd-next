import Image from "next/image"

const Movie = async ({ params }) => {
    
    const movieId = params.id

    const res = await fetch(`https://api.themoviedb.org/3/movie/${ movieId }?api_key=${process.env.API_KEY}`)
    const movie = await res.json()
    
    // console.log( movie )

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
                <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
                <p className='text-md mb-3'>{movie.overview}</p>
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>Date Released:</span>
                    {movie.release_date || movie.first_air_date}
                </p>
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>Rating:</span>
                    {movie.vote_count}
                </p>
                </div>
            </div>
        </div>
    );
}
 
export default Movie;