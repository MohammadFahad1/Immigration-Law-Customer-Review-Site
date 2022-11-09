import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';
import { toast, Toaster } from 'react-hot-toast';

const MyReviews = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${user.uid}`)
            .then(res => res.json())
            .then(review => {
                setReviews(review);
                setLoading(false)
            })
    }, [user.uid])

    const handleDelete = review => {
        const agree = window.confirm(`Are you sure about deleting the review!`);
        if (agree) {
            fetch(`http://localhost:5000/delete-review/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted successfully!')
                        const remainingReview = reviews.filter(rev => rev._id !== review._id);
                        setReviews(remainingReview)
                    }
                })
        }
    }

    if (loading) {
        return <div className='min-h-screen relative bg-yellow-400'>
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
            </div>
        </div>
    }

    return (
        <div className='max-w-5xl mx-auto my-10'>
            <Toaster></Toaster>
            {
                reviews?.map(
                    review => <ReviewCard key={review._id} review={review} handleDelete={handleDelete}></ReviewCard>
                )
            }
        </div>
    );
};

export default MyReviews;