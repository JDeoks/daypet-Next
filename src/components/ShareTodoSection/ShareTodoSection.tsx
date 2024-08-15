import Image from 'next/image';
import shareTodoPreviewImage from '@/../public/images/shareTodoPreviewImage.svg';

export default function ShareTodoSection() {
    return (
        <>
            <div className="bg-buttonShape flex justify-center h-800">
                <div className="flex w-900 justify-center">
                    <div className="flex flex-col justify-center gap-4 w-400">
                        <p className="text-3xl text-black font-semibold whitespace-pre-line">
                            실시간 할 일 공유
                        </p>
                        <p className="text-1xl text-subText font-medium whitespace-pre-line">
                            더 이상 밥은 줬는지, 산책은 했는지
                            <br />
                            물어볼 필요가 없어요. <br />
                            <br />
                            산책, 식사, 약 먹이기 등 중요한 할 일을
                            <br />
                            가족들과 실시간으로 공유하세요.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center w-400">
                        <Image
                            src={shareTodoPreviewImage}
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
