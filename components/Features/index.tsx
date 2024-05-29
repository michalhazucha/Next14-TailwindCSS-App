import { FEATURES } from '@/constants';
import Image from 'next/image';
import FeatureItem from './Feature';

const Features = () => {
  return (
    <section className=" flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end flex">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            className="feature-phone"
            src="/phone.png"
            alt="phone image"
            width={440}
            height={1000}
          />
        </div>
        <div className="z-20 flex w-full flex-col  lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64"> Our features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2">
            {FEATURES.map(({ title, icon, variant, description }, i) => (
              <FeatureItem
                key={i}
                title={title}
                icon={icon}
                variant={variant}
                description={description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
