import Image from 'next/image';

const Home = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24 border-2 border-red-500'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex felx-col justify-center'>
            <p className='small-text'>
              Smart Shopping Starts Here:{' '}
              <Image
                src='/assets/icons/arrow-right.svg'
                alt='arrow-right'
                width={16}
                height={16}
              />
            </p>

            <h1 className='head-text'>
              Unleash the Power of
              <span className='text-primary'> PriceWatch Pro</span>
            </h1>

            <p className='mt-6'>
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
