// "use client";
// import React, { useMemo, useState } from "react";
// import { RickCompProps } from "@/types/LocalTypes";
// import NewPost from "./NewPost";

// import useGql from "@/app/hooks/useGql";

// const RickComp = ({ rick_name }: RickCompProps) => {

//     const { characters } = useGql(rick_name);

//     const ShowRicks = () => {
//         return characters?.map((current_rick: any, i: any) => {
//             // return (
//             //     <div key={`rick-${i}`} className="flex flex-col rick-item">
//             //         <div className="content-wrapper">
//             //         <p>
//             //             {i + 1}. {current_rick.name}
//             //         </p>
//             //         <p>status:{current_rick.status}</p>
//             //         </div>
//             //         <div className="reaction-container flex gap-2">
                    
//             //             {" "}
//             //             <div className="comments-button-container">
//             //                 <button>comments</button>
//             //             </div>{" "}
//             //             <div className="reaction-buttons-container ">
//             //                 <button>Up</button> <button>Down</button>
//             //             </div>
//             //         </div>
//             //     </div>
//             // );
//             console.log(current_rick);
//             return (
//                 <NewPost user={{profilePicture:"", name:current_rick.name}} postContent={{title:current_rick.status}} postReaction={{upVotes:80, comments: 76}} key={`rick-${i}`} />
//             )
            
//         });
//     };

//     return (
//         <>
//             <div className="ricks-container flex flex-col items-center container large">
//                 {ShowRicks()}
//             </div>{" "}
//         </>
//     );
// };
// export default RickComp;
