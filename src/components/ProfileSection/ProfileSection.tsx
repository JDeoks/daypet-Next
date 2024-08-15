import Image from 'next/image';
import profilePreviewImage from '@/../public/images/profilePreviewImage.png';
import googlePlayButton from '@/../../public/images/googlePlayButton.svg';
import appStoreButton from '@/../../public/images/appStoreButton.svg';

export default function ProfileSection() {
    return (
        <>
            <div className="bg-buttonShape flex justify-center h-800">
                <div className="flex w-900 justify-center">
                    <div className="flex flex-col justify-center gap-4 w-400">
                        <p className="text-3xl text-black font-semibold whitespace-pre-line">
                            모든 순간을 더욱 특별하게.
                        </p>
                        <p className="text-1xl text-subText font-medium whitespace-pre-line">
                            추억을 간직하고, 공유하는 특별한 시간. <br />이 모든
                            매일을 기록해요. <br />
                            <br />
                            지금 바로 데이펫을 다운로드하고 함께 시작하세요.
                        </p>
                        <div className="flex flex-row mt-4 gap-4">
                            <Image src={googlePlayButton} alt="" />
                            <Image src={appStoreButton} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center w-400">
                        <Image
                            src={profilePreviewImage}
                            alt=""
                            className="object-contain"
                            // height={400}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
