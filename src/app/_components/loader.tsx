const Loader = () => {
  return (
    <div className='w-screen h-screen inset-0 flex items-center justify-center bg-gray-900 text-white z-50'>
      <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-white'></div>
    </div>
  );
};

export default Loader;
