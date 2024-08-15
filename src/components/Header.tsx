import Image from 'next/image';
import navBarAppIcon from '@/../public/images/navBarAppIcon.svg';

export default function Header() {
    return (
        <>
            <div className="fixed left-0 top-0 right-0 shadow h-16 flex justify-center bg-white">
                <div className="w-900 flex pl-3">
                    <Image src={navBarAppIcon} alt="" width={40} height={40} />
                </div>
            </div>
        </>
    );
}
