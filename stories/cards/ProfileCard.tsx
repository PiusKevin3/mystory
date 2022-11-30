export interface IProfileCard {
  cardTitleProp: string;
}

const ProfileCard: React.FC<IProfileCard> = ({ cardTitleProp }) => {
  return (
    <div>
      <div>
       
<div className="grid grid-cols-3 gap-4">
  <div className="bg-blue-500 rounded h-10 text-justify">01</div>
  <div className="bg-blue-500 rounded h-10 text-justify">02</div>
  <div className="bg-blue-500 rounded h-10 text-justify">03</div>
  <div className="col-span-2 bg-blue-500 rounded h-10 text-justify">04</div>
  <div className="bg-blue-500 rounded h-10 text-justify">05</div>
  <div className="bg-blue-500 rounded h-10 text-justify">06</div>
  <div className="col-span-2 bg-blue-500 rounded h-10 text-justify">07</div>
</div>

      </div>

      {/* {cardTitleProp} */}
    </div>
  );
};

export default ProfileCard;
