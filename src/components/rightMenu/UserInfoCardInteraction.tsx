'use client';

import { switchFollow } from '@/lib/actions';
import { useOptimistic, useState } from 'react';

const UserInfoCardInteraction = ({
	userId,
	isUserBlocked,
	isFollowing,
	isFollowingSent,
}: {
	userId: string;
	isUserBlocked: boolean;
	isFollowing: boolean;
	isFollowingSent: boolean;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const [userState, setUserState] = useState({
		following: isFollowing,
		blocked: isUserBlocked,
		followingRequestSent: isFollowingSent,
	});

	const follow = async () => {
		switchOptimisticState('follow');
		try {
			await switchFollow(userId);
			setUserState((prev) => ({
				...prev,
				following: prev.following && prev.followingRequestSent ? true : false,
				followingRequestSent:
					!prev.following && !prev.followingRequestSent ? true : false,
			}));
		} catch (err) {}
	};

	const block = async () => {
		switchOptimisticState('block');
		setUserState((prev) => ({
			...prev,
			blocked: !prev.blocked,
		}));
	};

	const [optimisticState, switchOptimisticState] = useOptimistic(
		userState,
		(state, value: 'follow' | 'block') =>
			value === 'follow'
				? {
						...state,
						following:
							state.following && state.followingRequestSent ? true : false,
						followingRequestSent:
							!state.following && !state.followingRequestSent ? true : false,
				  }
				: { ...state, blocked: !state.blocked }
	);
	return (
		<>
			<form action={follow}>
				<button
					className={`w-full ${
						optimisticState.following
							? 'bg-blue-500 hover:bg-red-500'
							: optimisticState.followingRequestSent
							? 'bg-gray-500'
							: 'bg-blue-500'
					} text-white text-sm rounded-md p-2`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					{optimisticState.following
						? isHovered
							? 'Unfollow'
							: 'Following'
						: optimisticState.followingRequestSent
						? 'Friend Request Sent'
						: 'Follow'}
				</button>
			</form>
			<form action={block} className="self-end">
				<button>
					<span className="text-red-400 text-xs cursor-pointer">
						{optimisticState.blocked ? 'Unblock User' : 'Block User'}
					</span>
				</button>
			</form>
		</>
	);
};

export default UserInfoCardInteraction;
