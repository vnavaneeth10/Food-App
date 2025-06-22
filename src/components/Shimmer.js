const ShimmerCard = () => {
  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-white shadow-lg h-[500px] flex flex-col">
      {/* Shimmer effect for image */}
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>

      {/* Shimmer for veg/non-veg and rating row */}
      <div className="flex justify-between items-center mb-3">
        <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="w-12 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>

      {/* Shimmer for content */}
      <div className="flex flex-col flex-grow">
        {/* Restaurant name shimmer */}
        <div className="w-3/4 h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>

        {/* Cuisines shimmer */}
        <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="w-2/3 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>

        {/* Cost shimmer */}
        <div className="w-1/2 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>

        {/* Delivery time shimmer */}
        <div className="w-1/3 h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};




const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Create 8 shimmer cards */}
      {Array(8)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default Shimmer;
