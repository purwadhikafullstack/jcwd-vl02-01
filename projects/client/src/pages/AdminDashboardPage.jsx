import React, { useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { TbReportAnalytics } from 'react-icons/tb';
import { AiOutlineTransaction } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits, MdCategory } from 'react-icons/md';
import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import HeadComponent from '../components/HeadComponent';
import { useDispatch } from "react-redux";
import { userLogOut } from "../slices/userSlice";
import Cookies from 'js-cookie';

export default function AdminDashboardPage() {

	// VAR
	const navigate = useNavigate();
  const dispatch = useDispatch();
	const pathName = window.location.pathname;

	return (
		<>
			<HeadComponent title={'SEHATBOS | Admin Dashboard'} description={'Admin Dashboard'} type={'website'}/>
			<main className="bg-bgWhite min-h-screen py-5 px-5">
				{/* <div className="container mx-auto">
					<div class="relative">
						<div class="absolute left-0 top-0">
							<h1 className="font-bold text-md">SEHATBOS.COM</h1>
						</div>
						<div class="absolute top-0 right-0 cursor-pointer">
							<h1 className={"text-sm inline hover:border-b-2 border-borderHijau pb-1"}>visit website <CgWebsite className='inline ml-1'/></h1>
						</div>
					</div>
				</div> */}
				<div className="flex container mx-auto mt-[2.5vh] justify-center content-center">
					<h1 className="font-bold text-2xl text-hijauBtn">SEHATBOS.COM</h1>
				</div>
				<div className="flex container mx-auto mt-[10vh] justify-center content-center">
					<h1 className="font-bold text-2xl">Welcome back, Admin!</h1>
				</div>
				<div className="flex container mx-auto justify-center content-center">
					<h1 className="text-md">Have a nice day...</h1>
				</div>
				<div className="flex container mx-auto mt-[5vh] justify-center content-center">
					<Box
						w="xs"
						borderWidth="1px"
						overflow="hidden"
						fontWeight="semibold"
						lineHeight="tight"
						className="py-[20px] hover:bg-borderHijau border-borderHijau text-center mx-2 bg-hijauBtn text-bgWhite cursor-pointer"
						onClick={() => navigate('/admin/product')}
					>
						<h1 className="inline">Product</h1>
						<MdOutlineProductionQuantityLimits className="inline ml-2" />
					</Box>
				</div>
				<div className="flex container mx-auto my-[15px] justify-center content-center">
					<Box
						w="xs"
						borderWidth="1px"
						overflow="hidden"
						fontWeight="semibold"
						lineHeight="tight"
						className="py-[20px] hover:bg-borderHijau border-borderHijau text-center mx-2 bg-hijauBtn text-bgWhite cursor-pointer"
						onClick={() => navigate('/admin/category')}
					>
						<h1 className="inline">Category</h1>
						<MdCategory className="inline ml-2" />
					</Box>
				</div>
				<div className="flex container mx-auto mt-[15px] justify-center content-center">
					<Box
						w="xs"
						borderWidth="1px"
						overflow="hidden"
						fontWeight="semibold"
						lineHeight="tight"
						className="py-[20px] hover:bg-borderHijau border-borderHijau text-center mx-2 bg-hijauBtn text-bgWhite cursor-pointer"
						onClick={() => navigate('/admin/transaction')}
					>
						<h1 className="inline">Transaction</h1>
						<AiOutlineTransaction className="inline ml-2" />
					</Box>
				</div>
				<div className="flex container mx-auto my-[15px] justify-center content-center">
					<Box
						w="xs"
						borderWidth="1px"
						overflow="hidden"
						fontWeight="semibold"
						lineHeight="tight"
						className="py-[20px] hover:bg-borderHijau border-borderHijau text-center mx-2 bg-hijauBtn text-bgWhite cursor-pointer"
						onClick={() => navigate('/admin/report')}
					>
						<h1 className="inline">Report</h1>
						<TbReportAnalytics className="inline ml-2" />
					</Box>
				</div>
				<div className="flex container mx-auto my-[15px] justify-center content-center">
					<Box
						w="xs"
						borderWidth="1px"
						overflow="hidden"
						fontWeight="semibold"
						lineHeight="tight"
						className="py-[20px] hover:bg-borderHijau border-borderHijau text-center mx-2 bg-hijauBtn text-bgWhite cursor-pointer"
						onClick={() => navigate('/')}
					>
						<h1 className="inline">Visit Website</h1>
						<CgWebsite className="inline ml-2" />
					</Box>
				</div>
				<div className="flex container mx-auto my-[15px] justify-center content-center">
					<Box
						w="xs"
						borderWidth="1px"
						overflow="hidden"
						fontWeight="semibold"
						lineHeight="tight"
						className="py-[20px] hover:bg-borderHijau border-borderHijau text-center mx-2 bg-hijauBtn text-bgWhite cursor-pointer"
						onClick={() => {
							dispatch(userLogOut());
							Cookies.remove("sehatToken");
							if (pathName !== "/") {
								navigate("/", { replace: true });
							}
						}}
					>
						<h1 className="inline">Logout</h1>
						<CgWebsite className="inline ml-2" />
					</Box>
				</div>
			</main>
		</>
	);
}
