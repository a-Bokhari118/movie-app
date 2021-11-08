import Header from '@components/Header';
import Hero from '@components/Hero';
import Image from 'next/image';
import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
const SingleMovie = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const session = useSession();
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <div>
      <Head>
        <title>{result.title || result.original}</title>
      </Head>
      <Header />

      {!session ? (
        <Hero />
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-72px)]">
            <div className="bg-black/40 z-[100] absolute inset-0"></div>
            <Image
              className="blur-sm"
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="absolute inset-y-96 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-[200]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              {result.title || result.original}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="text-xs md:text-base bg-[#f9f9f9] text-gray-900 flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img
                  src="/images/play-icon-black.svg"
                  alt="play"
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>

              <button
                className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>

              <div className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer w-11 h-11 bg-black/60">
                <PlusIcon className="h-6" />
              </div>
              <div className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer w-11 h-11 bg-black/60">
                <img src="/images/group-icon.svg" alt="group" />
              </div>
            </div>

            <p>
              {result.release_date || result.first_air_date} •{' '}
              {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{' '}
              {result.genres.map((genre) => genre.name + ' ')}{' '}
            </p>
            <h4 className="text-sm md:text-lg max-w-4xl">{result.overview}</h4>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleMovie;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());

  return {
    props: {
      result: request,
      session,
    },
  };
}
