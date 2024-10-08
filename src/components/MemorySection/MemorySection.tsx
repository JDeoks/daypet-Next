import Image from 'next/image';
import memoryPreviewImage from '@/../../public/images/memoryPreviewImage.png';

export default function MemorySection() {
    return (
        <>
            <div className="bg-mainBackground flex justify-center h-800">
                <div className="flex w-900 justify-center">
                    <div className="flex flex-col justify-center w-400">
                        <Image
                            src={memoryPreviewImage}
                            alt=""
                            className="object-contain"
                            // height={400}
                        />
                    </div>

                    <div className="flex flex-col justify-center gap-4 w-400">
                        <p className="text-3xl font-semibold text-right whitespace-pre-line">
                            우리 가족의 기억을 <br />
                            간직해요
                        </p>
                        <p className="text-1xl text- font-medium text-subText text-right whitespace-pre-line">
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
