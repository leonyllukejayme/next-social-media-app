'use server';

import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import prisma from './client';

// Function to toggle follow or send/cancel follow requests for a user
export const switchFollow = async (userId: string) => {
	// Retrieve the currently authenticated user's ID
	const { userId: currentUserId } = auth();

	// Check if the current user is authenticated
	if (!currentUserId) {
		throw new Error('User is not authenticated!');
	}

	try {
		// Check if the current user is already following the target user
		const existingFollow = await prisma.follower.findFirst({
			where: {
				followingId: currentUserId, // The current user is following the target user
				followerId: userId, // The target user is the follower
			},
		});

		if (existingFollow) {
			// If already following, delete the follower record (unfollow)
			await prisma.follower.delete({
				where: {
					id: existingFollow.id, // Unfollow by deleting the follower record by its ID
				},
			});
		} else {
			// If not following, check if a follow request has been sent to the target user
			const existingFollowRequest = await prisma.followRequest.findFirst({
				where: {
					senderId: currentUserId, // The current user has sent a follow request
					receiverId: userId, // The target user is the receiver of the request
				},
			});

			if (existingFollowRequest) {
				// If a follow request exists, cancel it by deleting the follow request record
				await prisma.followRequest.delete({
					where: {
						id: existingFollowRequest.id, // Cancel the follow request by deleting it
					},
				});
			} else {
				// If no follow request exists, create a new follow request
				await prisma.followRequest.create({
					data: {
						senderId: currentUserId, // The current user sends a follow request
						receiverId: userId, // The target user receives the request
					},
				});
			}
		}
	} catch (err) {
		// Log the error and throw a new error indicating something went wrong
		console.log(err);
		throw new Error('Something went wrong!');
	}
};

export const switchBlock = async (userId: string) => {
	const { userId: currentUserId } = auth();

	if (!currentUserId) {
		throw new Error('User is not authenticated!');
	}

	try {
		const existingBlock = await prisma.block.findFirst({
			where: {
				blockerId: currentUserId,
				blockedId: userId,
			},
		});
		if (existingBlock) {
			await prisma.block.delete({
				where: {
					id: existingBlock.id,
				},
			});
		} else {
			await prisma.block.create({
				data: {
					blockerId: currentUserId,
					blockedId: userId,
				},
			});
		}
	} catch (err) {
		console.log(err);
		throw new Error('Something went wrong!');
	}
};

// Function to accept a follow request from another user
export const acceptFollowRequests = async (userId: string) => {
	// Retrieve the currently authenticated user's ID
	const { userId: currentUserId } = auth();

	// Check if the current user is authenticated
	if (!currentUserId) {
		throw new Error('User is not authenticated!');
	}

	try {
		// Find the existing follow request sent by the user (sender) to the current user (receiver)
		const existingFollowRequest = await prisma.followRequest.findFirst({
			where: {
				senderId: userId, // The ID of the user who sent the follow request
				receiverId: currentUserId, // The ID of the current authenticated user
			},
		});

		// If a follow request exists, delete it and create a follower relationship
		if (existingFollowRequest) {
			// Delete the follow request since it has been accepted
			await prisma.followRequest.delete({
				where: {
					id: existingFollowRequest.id, // Delete the follow request by its ID
				},
			});

			// Create a new follower relationship between the current user and the user who sent the request
			await prisma.follower.create({
				data: {
					followerId: currentUserId, // The current authenticated user becomes the follower
					followingId: userId, // The user who sent the request becomes the followed user
				},
			});
		}
	} catch (err) {
		// Log the error and throw a new error indicating something went wrong
		console.log(err);
		throw new Error('Something went wrong!');
	}
};

export const declineFollowRequests = async (userId: string) => {
	const { userId: currentUserId } = auth();

	if (!currentUserId) {
		throw new Error('User is not authenticated!');
	}

	try {
		const existingFollowRequest = await prisma.followRequest.findFirst({
			where: {
				senderId: userId,
				receiverId: currentUserId,
			},
		});
		if (existingFollowRequest) {
			await prisma.followRequest.delete({
				where: {
					id: existingFollowRequest.id,
				},
			});
		}
	} catch (err) {
		console.log(err);
		throw new Error('Something went wrong!');
	}
};

export const updateProfile = async (
	prevState: { success: boolean; error: boolean },
	payload: { formData: FormData; cover: string }
) => {
	const { formData, cover } = payload;
	const fields = Object.fromEntries(formData);

	// const filteredFields = Object.fromEntries(
	// 	Object.entries(fields).filter(([_, value]) => value !== '')
	// );

	// console.log(fields);

	const Profile = z.object({
		cover: z.string().optional(),
		name: z.string().max(60).optional(),
		surname: z.string().max(60).optional(),
		description: z.string().max(60).optional(),
		city: z.string().max(60).optional(),
		school: z.string().max(60).optional(),
		work: z.string().max(60).optional(),
		website: z.string().max(60).optional(),
	});

	const validatedFields = Profile.safeParse({ cover, ...fields });

	if (!validatedFields.success) {
		console.log(validatedFields.error.flatten().fieldErrors);
		return {success:false,error:true};
	}

	const { userId } = auth();

	if (!userId) {
		return {success:false,error:true};
	}

	try {
		await prisma.user.update({
			where: {
				id: userId,
			},
			data: validatedFields.data,
		});
		return {success:true,error:false};
	} catch (err) {
		console.log(err);
		return {success:false,error:true};
	}
};
