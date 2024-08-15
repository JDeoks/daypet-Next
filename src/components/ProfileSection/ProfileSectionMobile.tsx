import Image from 'next/image';
import profilePreviewImage from '@/../public/images/profilePreviewImage.png';
import googlePlayButton from '@/../../public/images/googlePlayButton.svg';
import appStoreButton from '@/../../public/images/appStoreButton.svg';

export default function ProfileSectionMobile() {
    return (
        <>
            <div className="bg-buttonShape flex justify-center h-800">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center w-400">
                        <Image
                            src={profilePreviewImage}
                            alt=""
                            className="object-contain"
                            width={220}
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4 pt-16">
                        <p className="text-2xl font-semibold text-center whitespace-pre-line">
                            모든 순간을 더욱 특별하게.
                        </p>
                        <p className="text-1xl text- font-medium text-subText text-center whitespace-pre-line">
                            추억을 간직하고, 공유하는 특별한 시간. <br />이 모든
                            매일을 기록해요. <br />
                            <br />
                            지금 바로 데이펫을 다운로드하고 함께 시작하세요.
                        </p>
                        <div className="flex flex-row justify-center mt-4 gap-4">
                            <Image src={googlePlayButton} alt="" />
                            <Image src={appStoreButton} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
