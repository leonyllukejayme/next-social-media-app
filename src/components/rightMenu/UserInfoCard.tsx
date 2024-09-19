import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import { User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import UpdateUser from '../UpdateUser';
import UserInfoCardInteraction from './UserInfoCardInteraction';

const UserInfoCard = async ({ user }: { user: User }) => {
	// Format Date

	const createdAtDate = new Date(user.createdAt);

	const formattedDate = createdAtDate.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	//----------

	//-------------------

	let isUserBlocked = false; // Initialize a flag to check if the user is blocked
	let isFollowing = false; // Initialize a flag to check if the current user is following the other user
	let isFollowingSent = false; // Initialize a flag to check if a follow request has been sent

	const { userId: currentUserId } = auth(); // Destructure the userId from the authentication function and rename it to currentUserId

	if (currentUserId) {
		// Check if the current user is authenticated
		// Query the database to check if the current user has blocked the other user
		const blockRes = await prisma.block.findFirst({
			where: {
				blockerId: currentUserId, // Current user is the blocker
				blockedId: user.id, // Other user is the blocked
			},
		});

		// If a block record is found, set isUserBlocked to true, otherwise set it to false
		blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

		// Query the database to check if the current user is following the other user
		const followRes = await prisma.follower.findFirst({
			where: {
				followingId: currentUserId,  // Current user is the one being followed
				followerId: user.id, // Other user is the follower
			},
		});

		// If a follow record is found, set isFollowing to true, otherwise set it to false
		followRes ? (isFollowing = true) : (isFollowing = false);

		// Query the database to check if a follow request has been sent by the current user to the other user
		const followReqRes = await prisma.followRequest.findFirst({
			where: {
				senderId: currentUserId, // Current user is the sender of the follow request
				receiverId: user.id, // Other user is the receiver of the follow request
			},
		});

		// If a follow request record is found, set isFollowingSent to true, otherwise set it to false
		followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
	}

	//---------------

	return (
		<div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
			{/* TOP */}
			<div className="flex justify-between items-center font-medium">
				<span className="text-gray-500">User Information</span>
				{currentUserId === user.id ? (
					<UpdateUser user={user}/>
				) : (
					<Link href="/" className="text-blue-500 text-xs">
						See All
					</Link>
				)}
			</div>
			{/* BOTTOM */}
			<div className="flex flex-col gap-4 text-gray-500">
				<div className="flex items-center gap-2">
					<span className="text-xl text-black">
						{user.name && user.username
							? user.name + ' ' + user.surname
							: user.username}
					</span>
					<span className="text-sm">@{user.username}</span>
				</div>
				{user.description && <p>{user.description}</p>}

				{user.city && (
					<div className="flex items-center gap-2">
						<Image src="/map.png" alt="" width={16} height={16} />
						<span>
							Living in <b>{user.city}</b>
						</span>
					</div>
				)}
				{user.school && (
					<div className="flex items-center gap-2">
						<Image src="/school.png" alt="" width={16} height={16} />
						<span>
							Went to <b>{user.school}</b>
						</span>
					</div>
				)}
				{user.work && (
					<div className="flex items-center gap-2">
						<Image src="/work.png" alt="" width={16} height={16} />
						<span>
							Works at <b>{user.work}</b>
						</span>
					</div>
				)}

				<div className="flex items-center justify-between">
					{user.website && (
						<div className="flex gap-1 items-center">
							<Image src="/link.png" alt="" width={16} height={16} />
							<Link href={user.website} className="text-blue-500 font-medium">
								{user.website}
							</Link>
						</div>
					)}
					<div className="flex gap-1 items-center">
						<Image src="/date.png" alt="" width={16} height={16} />
						<span>Joined {formattedDate}</span>
					</div>
				</div>
				{currentUserId && currentUserId !== user.id && (
					<UserInfoCardInteraction
						userId={user.id}
						isUserBlocked={isUserBlocked}
						isFollowing={isFollowing}
						isFollowingSent={isFollowingSent}
					/>
				)}
			</div>
		</div>
	);
};

export default UserInfoCard;
