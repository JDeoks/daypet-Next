import Image from 'next/image';
import albumPreviewImage from '@/../public/images/albumPreviewImage.svg';

export default function AlbumSectionMobile() {
    return (
        <>
            <div className="bg-primaryBackground flex justify-center h-800">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                        <Image
                            src={albumPreviewImage}
                            alt=""
                            className="object-contain"
                            width={220}
                            // height={400}
                        />
                    </div>

                    <div className="flex flex-col justify-center gap-4 pt-16">
                        <p className="text-2xl text-mainBackground font-semibold text-center whitespace-pre-line">
                            한 눈에 보는 앨범
                        </p>
                        <p className="text-1xl text- font-medium text-buttonShape text-center whitespace-pre-line">
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
