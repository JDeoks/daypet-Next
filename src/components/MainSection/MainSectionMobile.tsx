'use client';

import Image from 'next/image';
import footPrint from '@/../../public/images/footPrint.png';
import mainPreviewImage from '@/../../public/images/mainPreviewImage.png';
import googlePlayButton from '@/../../public/images/googlePlayButton.svg';
import appStoreButton from '@/../../public/images/appStoreButton.svg';

export default function MainSectionMobile() {
    return (
        <>
            <div className="bg-buttonShape flex justify-center h-700">
                <div className="flex flex-col tp-100 justify-end">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl text-center font-semibold">
                                데이펫
                            </h1>
                            <h3 className="text-2xl text-center">
                                매일 공유하는 우리 아이 일기
                            </h3>
                        </div>
                        <div className="flex flex-row mt-4 gap-4">
                            <Image src={googlePlayButton} alt="" height={40} />
                            <Image src={appStoreButton} alt="" height={40} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="pt-32 w-270 flex flex-col">
                            <Image
                                src={mainPreviewImage}
                                alt=""
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
