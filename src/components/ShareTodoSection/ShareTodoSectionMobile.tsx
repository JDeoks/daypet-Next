import Image from 'next/image';
import shareTodoPreviewImage from '@/../public/images/shareTodoPreviewImage.svg';

export default function ShareTodoSectionMobile() {
    return (
        <>
            <div className="bg-buttonShape flex justify-center h-800">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center w-220">
                        <Image
                            src={shareTodoPreviewImage}
                            alt=""
                            className="object-contain"
                            // height={400}
                        />
                    </div>

                    <div className="flex flex-col justify-center gap-4 pt-16">
                        <p className="text-2xl font-semibold text-center whitespace-pre-line">
                            실시간 할 일 공유
                        </p>
                        <p className="text-1xl text- font-medium text-subText text-center whitespace-pre-line">
                            더 이상 밥은 줬는지, 산책은 했는지
                            <br />
                            물어볼 필요가 없어요. <br />
                            <br />
                            산책, 식사, 약 먹이기 등 중요한 할 일을
                            <br />
                            가족들과 실시간으로 공유하세요.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
