import React from 'react';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating'

export function CourseReviewCard({ review }) {

    const startStyles = {
        itemShapes: ThinRoundedStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#4d4123',
      }

    return(
        <>
            <div className='dark:bg-[#282828] rounded-[20px] px-10 py-5'>
                <div className='md:flex md:items-center'>
                    <h4 className='text-center md:text-3xl'>
                        {review.code}
                    </h4>
                    <div className="mx-2 my-2 md:my-0 md:mx-5 rounded-[20px] h-[4px] grow bg-gradient-to-r from-[#c65364] to-[#46233b]"/>
                    <h4 className='text-center md:text-xl text-[#eee6e6]'>
                        {review.name}
                    </h4>
                </div>
                <div className='flex justify-center pt-5'>
                <Rating
                    itemStyles={startStyles}
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                />
                </div>
                <div className='dark:bg-[#000000] rounded-[20px] px-4 py-4 mt-4 shadow-2xl'>
                    <p className='text-sm md:text-md font-sans md:text-xl text-[#eee6e6]'>
                        {review.description}
                    </p>
                </div>
                
            </div>
        </>
    )
}