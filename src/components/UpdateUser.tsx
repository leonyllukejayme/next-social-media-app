'use client';

import { updateProfile } from '@/lib/actions';
import { User } from '@prisma/client';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import UpdateButton from './rightMenu/UpdateButton';

const UpdateUser = ({ user }: { user: User }) => {
	const [open, setOpen] = useState(false);
	const [fade, setFade] = useState(false);
	const [cover, setCover] = useState<any>(false);

	// Initialize value
	const [name, setName] = useState<any>(user.name);
	const [surName, setSurName] = useState<any>(user.surname);
	const [description, setDescription] = useState<any>(user.description);
	const [city, setCity] = useState<any>(user.city);
	const [school, setSchool] = useState<any>(user.school);
	const [work, setWork] = useState<any>(user.work);
	const [website, setWebsite] = useState<any>(user.website);

	const [state, formAction] = useActionState(updateProfile, {
		success: false,
		error: false,
	});

	const router = useRouter();

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [open]);

	const handleOpen = () => {
		setOpen(true);
		setTimeout(() => setFade(true), 10);
	};

	const handleClose = () => {
		setFade(false);
		setTimeout(() => setOpen(false), 300);
		state.success && router.refresh();
		state.success = false;
		state.error = false;
	};

	return (
		<>
			<span
				className="text-blue-500 text-xs cursor-pointer"
				onClick={handleOpen}>
				Update
			</span>
			{open && (
				<div
					className={`absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-40 overflow-y-auto flex items-center justify-center z-50 transition-opacity duration-300 ${
						fade ? 'opacity-100' : 'opacity-0'
					}`}>
					<form
						action={(formData) =>
							formAction({ formData, cover: cover?.secure_url || '' })
						}
						className={`p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 relative transform transition-transform duration-300 ${
							fade ? 'translate-y-0' : 'translate-y-10'
						}`}>
						<h1>Update Profile</h1>
						<div className="mt-4 text-xs text-gray-500">
							Use the navbar profile to change the avatar or username.
						</div>
						{/* UPLOAD COVER PIC */}

						<CldUploadWidget
							uploadPreset="social"
							options={{
								sources: ['local', 'url', 'google_drive'],
							}}
							onSuccess={(result) => setCover(result.info)}>
							{({ open }) => {
								return (
									<div
										className="flex flex-col gap-4 my-4"
										onClick={() => open()}>
										<label htmlFor="">Cover Picture</label>
										<div className="flex items-center gap-2 cursor-pointer">
											<Image
												src={user.cover || '/noCover.png'}
												alt=""
												width={48}
												height={32}
												className="w-12 h-8 rounded-md object-cover"
											/>
											<span className="text-xs underline text-gray-600">
												Change
											</span>
										</div>
									</div>
								);
							}}
						</CldUploadWidget>

						<div className="flex flex-wrap justify-between gap-2">
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									First Name
								</label>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="John"
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm w-full"
									name="name"
								/>
							</div>
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									Last Name
								</label>
								<input
									type="text"
									value={surName}
									onChange={(e) => setSurName(e.target.value)}
									placeholder="Doe"
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="surname"
								/>
							</div>
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									Description
								</label>
								<input
									type="text"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									placeholder="Life is Beautiful..."
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="description"
								/>
							</div>
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									City
								</label>
								<input
									type="text"
									value={city}
									onChange={(e) => setCity(e.target.value)}
									placeholder="New York"
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="city"
								/>
							</div>
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									School
								</label>
								<input
									type="text"
									value={school}
									onChange={(e) => setSchool(e.target.value)}
									placeholder="MIT"
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="school"
								/>
							</div>
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									Work
								</label>
								<input
									type="text"
									value={work}
									onChange={(e) => setWork(e.target.value)}
									placeholder="Apple Inc."
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="work"
								/>
							</div>
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label htmlFor="" className="text-xs text-gray-500">
									Website
								</label>
								<input
									type="text"
									value={website}
									onChange={(e) => setWebsite(e.target.value)}
									placeholder="url.com"
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="website"
								/>
							</div>
						</div>

						<UpdateButton />
						{state.success && (
							<span className="text-green-500">Profile has been Updated!</span>
						)}
						{state.error && (
							<span className="text-red-500">Something went wrong!</span>
						)}
						<div
							className="absolute text-xl right-6 top-4 cursor-pointer"
							onClick={handleClose}>
							<Image src={'/xmark-solid.svg'} width={15} height={15} alt="" />
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default UpdateUser;