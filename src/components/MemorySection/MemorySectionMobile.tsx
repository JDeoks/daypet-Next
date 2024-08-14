import Image from 'next/image';
import memoryPreviewImage from '@/../../public/images/memoryPreviewImage.png';

export default function MemorySectionMobile() {
    return (
        <>
            <div className="bg-mainBackground flex justify-center h-800">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                        <Image
                            src={memoryPreviewImage}
                            alt=""
                            className="object-contain"
                            width={220}

                            // height={400}
                        />
                    </div>

                    <div className="flex flex-col justify-center gap-4 pt-16">
                        <p className="text-2xl font-semibold text-center whitespace-pre-line">
                            우리 가족의 기억을 <br />
                            간직해요
                        </p>
                        <p className="text-1xl text- font-medium text-subText text-center whitespace-pre-line">
                            데이펫은 소중한 반려동물의 일상을
                            <br />
                            기록하고 공유하는 앱입니다. <br />
                            <br />
                            매일매일 우리 아이의 특별한 순간을
                            <br />
                            놓치지 않고 기록해보세요.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
