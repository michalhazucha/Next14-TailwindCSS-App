import Image from 'next/image';
import CampSite from './CampSite';

const Camp = () => {
  return (
    <section className="max-container padding-container  2x1:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk truno Camp"
          subtitle="Prigen Pasuruan"
          peopleJoined="50+"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Putuk truno Camp"
          subtitle="Prigen Pasuruan"
          peopleJoined="50+"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:-mr:6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px]xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> and Not Knowing The Way
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            mollitia. Numquam minus et debitis iure voluptatum tempore dicta
            non, adipisci veritatis, unde totam nihil maiores officiis qui earum
            illum esse modi obcaecati odio neque enim impedit praesentium.
            Fugit, consectetur quo.
          </p>
          <Image
            src="/quote.svg"
            alt="camp2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
