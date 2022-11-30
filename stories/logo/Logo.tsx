export interface IProfileCard {
  cardTitleProp: string;
}

const ProfileCard: React.FC<IProfileCard> = ({ cardTitleProp }) => {
  return (
    <div >
      <div>
        <p className="font-sans text-blue-500">The quick brown fox ...</p>
        <p className="font-serif text-blue-500">The quick brown fox ...</p>
        <p className="font-mono text-blue-500">The quick brown fox ...</p>
      </div>
      

      {cardTitleProp}
    </div>
  );
};

export default ProfileCard;



// import Image from 'next/image'
// import { classNames } from '../../utils'
// import { getHotelNameInitials } from '../../utils/getHotelNameInitials'

// interface ProfileCardProps {
//     title: string
//     imageUrl?: string
//     sm?: any
//     md?: any
//     lg?: any
//     xl?: any
//     props?: any
// }

// export default function ProfileCard({
//     title,
//     imageUrl,
//     sm,
//     md,
//     lg,
//     xl,
//     ...props
// }: ProfileCardProps) {
//     const width = sm ? 32 : md ? 40 : lg ? 48 : xl ? 60 : 48
//     const height = sm ? 32 : md ? 40 : lg ? 48 : xl ? 60 : 48
//     return (
//         <div>
//             <div className="flex items-start space-x-4">
//                 {imageUrl ? (
//                     <div
//                         className={classNames(
//                             'flex items-center justify-center border rounded-[6px] relative ',
//                             sm
//                                 ? 'w-8 h-8'
//                                 : md
//                                 ? 'w-10 h-10'
//                                 : lg
//                                 ? 'w-12 h-12'
//                                 : xl
//                                 ? 'w-16 h-16'
//                                 : 'w-12 h-12'
//                         )}
//                     >
//                         <img
//                             className="object-cover  "
//                             src={imageUrl}
//                             alt={`${title} logo`}
//                             {...props}
//                         />
//                     </div>
//                 ) : (
//                     <div
//                         className={classNames(
//                             'inline-flex overflow-hidden relative justify-center items-center w-10 h-10 rounded-[6px] bg-primary',
//                             sm
//                                 ? 'w-8 h-8'
//                                 : md
//                                 ? 'w-10 h-10'
//                                 : lg
//                                 ? 'w-12 h-12'
//                                 : xl
//                                 ? 'w-16 h-16'
//                                 : 'w-12 h-12'
//                         )}
//                     >
//                         <span className="font-medium text-white text-[14px] leading-[17px]">
//                             {getHotelNameInitials(title)}
//                         </span>
//                     </div>
//                 )}

//                 <div className="font-semibold leading-[20px]">
//                     <div className="text-[14px] default-text-color w-[130px]">
//                         {title}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export interface IProfileCard {
//   cardTitleProp: string;
// }

// const ProfileCard: React.FC<IProfileCard> = ({ cardTitleProp }) => {
//   return (
//     <div >
//       <div>
//         <p className="font-sans text-blue-500">The quick brown fox ...</p>
//         <p className="font-serif text-blue-500">The quick brown fox ...</p>
//         <p className="font-mono text-blue-500">The quick brown fox ...</p>
//       </div>
      

//       {cardTitleProp}
//     </div>
//   );
// };

// export default ProfileCard;
