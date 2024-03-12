import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({ result }) => {
    return (
        <div className="group cursor-pointer rounded-lg border border-gray-600 hover:shadow-lg transition-shadow duration-500">
            <Link href={`/movie/${ result.id }`}>
                <Image 
                    src={`https://image.tmdb.org/t/p/original${ result.backdrop_path || result.poster_path }`} 
                    width={500} height={300}
                    className="sm:rounded-t-lg w-full group-hover:opacity-75 transition-opacity duration-300 mb-3"
                    alt={ result.original_name || result.title }
                 />
                 <div className="m-4">
                 <h2 className="text-lg font-bold truncate my-2">{ result.original_name || result.title }</h2>
                 <p className="line-clamp-2 text-md">{ result.overview }</p>
                 <p className="text-sm flex items-center">
                    { result.release_date }
                    <FiThumbsUp className="ml-5 mr-1"/>
                    { result.vote_count }
                </p>
                 </div>
            </Link>
        </div>
    );
}
 
export default Card;