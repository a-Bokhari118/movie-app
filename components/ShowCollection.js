import ShowThumbnail from './ShowThumbnail';

const ShowCollection = ({ results, title }) => {
  console.log(results);
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8  mx-auto ">
      <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2">
        {results.map((result) => (
          <ShowThumbnail key={result?.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default ShowCollection;
