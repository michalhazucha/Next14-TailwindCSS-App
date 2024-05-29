import Image from 'next/image';
type props = {
  location: string;
  distance: string;
  elevation: string;
};
const Tooltip = ({ location, distance, elevation }: props) => {
  return (
    <div className="relative z-20 flex-3 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
      <div className="flex flex-col">
        <div className="flexBetween">
          <p className="regular-16 text-gray-20">Location</p>
          <Image src="/close.svg" alt="close" width={24} height={24} />
        </div>
        <p className="bold-20 text-white">{location}</p>
        <div className="flexBetween">
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-20">Distance</p>
            <p className="bold-20 text-white">{distance} ml</p>
          </div>
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-20">Elevation</p>
            <p className="bold-20 text-white">{elevation} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
