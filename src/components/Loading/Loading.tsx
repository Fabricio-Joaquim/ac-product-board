import { useIsFetching } from "@tanstack/react-query";

export const Loading = () => {
  const isFetching = useIsFetching();

  return <>{isFetching ? <MainLoading /> : null}</>;
};

export const MainLoading = () => {
  return (
    <div className="min-h-full min-w-full absolute z-10 bg-white bg-opacity-50 flex justify-center items-center">
      <div className="flex flex-row gap-2">
        <div className="w-6 h-6 rounded-full bg-red-300 animate-pulse [animation-delay:.7s]" />
        <div className="w-6 h-6 rounded-full bg-red-900 animate-pulse [animation-delay:.3s]" />
        <div className="w-6 h-6 rounded-full bg-red-600 animate-pulse [animation-delay:.7s]" />
      </div>
    </div>
  );
};
