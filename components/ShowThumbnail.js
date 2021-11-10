import Image from 'next/image';
import { useRouter } from 'next/router';
const ShowThumbnail = ({ result }) => {
  const router = useRouter();
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div
      className="flex relative group  min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
      onClick={() => router.push(`/show/${result.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />
      <span className="absolute bottom-2 left-2 font-bold group-hover:bg-gray-900 p-2 rounded-xl transition duration-300 truncate ">
        {result.title || result.original_name}
      </span>
    </div>
  );
};

export default ShowThumbnail;
