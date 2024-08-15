import Image from 'next/image';
import albumPreviewImage from '@/../public/images/albumPreviewImage.svg';

export default function AlbumSection() {
    return (
        <>
            <div className="bg-primaryBackground flex justify-center h-800">
                <div className="flex w-900 justify-center">
                    <div className="flex flex-col justify-center w-400">
                        <Image
                            src={albumPreviewImage}
                            alt=""
                            className="object-contain"
                            width={300}
                        />
                    </div>

                    <div className="flex flex-col justify-center gap-4 w-400">
                        <p className="text-3xl text-mainBackground font-semibold text-right whitespace-pre-line">
                            한 눈에 보는 앨범
                        </p>
                        <p className="text-1xl text-buttonShape font-medium text-right whitespace-pre-line">
                            작성한 기억들은 캘린더에서 한 눈에
                            <br />
                            확인할 수 있어요.
                            <br />
                            <br />
                            조금씩 쌓여가는 기록으로 일상에 즐거움을
                            <br />
                            더하세요.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
