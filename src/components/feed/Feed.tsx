import prisma from '@/lib/client';
import { auth } from '@clerk/nextjs/server';
import Post from './Post';

const Feed = async ({ username }: { username?: string }) => {
	const { userId } = auth();

	let posts:any[]  = [];

	if (username) {
		posts = await prisma.post.findMany({
			where: {
				user: {
					username: username,
				},
			},
			include: {
				user: true,
				likes: {
					select: {
						userId: true,
					},
				},
				_count: {
					select: {
						comments: true,
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
	}

	if (!username && userId) {
		const following = await prisma.follower.findMany({
			where: {
				followerId: userId,
			},
			select: {
				followingId: true,
			},
		});
		const followingids = following.map((f) => f.followingId);
		posts = await prisma.post.findMany({
			where: {
				userId: {
					in: followingids,
				},
			},
			include: {
				user: true,
				likes: {
					select: {
						userId: true,
					},
				},
				_count: {
					select: {
						comments: true,
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
	}
	return (
		<div className="flex flex-col gap-4">
			{posts.length ? (posts.map(post=>(<Post key={post.id} post={post} />))): "No Posts Found!"}
		</div>
	);
};

export default Feed;
