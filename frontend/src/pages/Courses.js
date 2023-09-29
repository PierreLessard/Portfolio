import React from 'react';
import { StandardPage } from '../components/StandardPage';
import courseReviewText from '../data/courseReviewText.json'
import { CourseReviewCard } from '../components/CourseReviewCard';

export function Courses() {
    return ( 
    <>
        <StandardPage 
            content={
            <div>
                <div className="flex items-center">
                    <h4 className='text-4xl'>Introduction</h4> 
                    <div className="ml-10 rounded-[20px] h-[4px] grow bg-gradient-to-r from-[#c65364] to-[#46233b]"></div>
                </div>
                <p className='p-4 font-sans text-[#9aa19e]'> {courseReviewText.introduction} </p>
                <div className=''>
                    {courseReviewText.reviews.map((review) => (
                        <div className='mx-[10px] mb-[25px]'>
                            <CourseReviewCard review={review}/>
                        </div>
                    ))}
                </div>
            </div>
            } 
            selected="courses"/>
    </> 
    );
}