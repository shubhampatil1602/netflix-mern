import { IoIosArrowDropdown } from 'react-icons/io';

const Header = () => {
  return (
    <div className='absolute z-10 w-full p-4 pt-0 flex justify-center bg-gradient-to-b from-black'>
      <div className='w-5/6 p-6 flex justify-between'>
        <img
          className='w-44 h-10'
          src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460'
          alt='logo'
        />

        <div className='flex gap-2'>
          <div className='flex justify-center items-center text-white'>
            <h1 className='rounded-md p-2 font-medium'>Shubham</h1>
            <IoIosArrowDropdown size={25} />
          </div>

          <button className='bg-red-600 text-white px-4 py-2 rounded-md'>
            Logout
          </button>
          <button className='bg-red-600 text-white px-4 py-2 rounded-md'>
            Search movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
