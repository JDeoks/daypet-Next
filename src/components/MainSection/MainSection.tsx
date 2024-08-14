'use client';

import Image from 'next/image';
import footPrint from '@/../../public/images/footPrint.png';
import mainPreviewImage from '@/../../public/images/mainPreviewImage.png';
import googlePlayButton from '@/../../public/images/googlePlayButton.svg';
import appStoreButton from '@/../../public/images/appStoreButton.svg';

export default function MainSection() {
    return (
        <>
            <div className="bg-buttonShape flex justify-center h-700">
                <div className="flex w-900 justify-center">
                    <div className="flex flex-col justify-center items-center px-10 w-400">
                        <Image
                            src={footPrint}
                            alt=""
                            width={200}
                            // height={400}
                        />
                        <div className="flex flex-col mt-25 gap-4">
                            <h1 className="text-4xl font-semibold">데이펫</h1>
                            <h3 className="text-2xl">
                                매일 공유하는 우리 아이 일기
                            </h3>
                        </div>
                        <div className="flex flex-row mt-4 gap-4">
                            <Image src={googlePlayButton} alt="" />
                            <Image src={appStoreButton} alt="" />
                        </div>
                    </div>
                    <div className="pt-40 w-400 flex flex-col justify-end">
                        <Image
                            src={mainPreviewImage}
                            alt=""
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
