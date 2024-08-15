import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <div className="h-160 flex justify-center items-center bg-white">
                <div className="w-900 flex justify-between px-6 text-subText">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <p className="text-xs">공지사항</p>
                            <p className="text-xs">패치노트</p>
                            <p className="text-xs">개발자 정보</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="text-xs">이용약관</p>
                            <p className="text-xs">개인정보처리방침</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end gap-4">
                        <p className="text-xs">문의: JDeoksDev@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}
