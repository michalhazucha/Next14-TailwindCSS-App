import Image from 'next/image';

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sed
            adipisci facere consequatur aliquam maxime expedita sapiente
            possimus temporibus dolorum, aut dolores magni ullam? Sit deleniti
            sapiente quos eos ex vitae possimus voluptatem ducimus repellat
            natus enim nisi atque veniam assumenda, tenetur sint laboriosam
            sequi? Quas ullam, autem laudantium hic illo a nisi similique qui
            fugit doloremque soluta error quod adipisci in quaerat ad magni ipsa
            impedit, corrupti rerum expedita enim? Numquam alias ipsam corporis
            explicabo, repellendus fugit, porro aperiam fuga dolore eos nostrum
            dignissimos est corrupti quaerat aut quos totam debitis quam earum
            temporibus quasi suscipit tempore? Doloribus quas praesentium in
            natus sequi voluptate cupiditate. Eum fugiat veniam ipsum ipsa ab
            animi sunt officia nemo dolorum. Debitis optio animi reprehenderit
            dolores, consequatur, adipisci dolore obcaecati harum qui dolor
            aperiam pariatur temporibus neque libero laudantium fuga tempora
            maxime suscipit rem nisi expedita eligendi aliquid inventore sunt.
            Voluptas id et harum.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 minutes</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>

              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Passuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
