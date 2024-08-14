import Image from 'next/image';
import MainSection from '@/components/MainSection';
import MemorySection from '@/components/MemorySection';
import ShareTodoSection from '@/components/ShareTodoSection';
import AlbumSection from '@/components/AlbumSection';
import Header from '@/components/Header';

export default function Home() {
    return (
        <>
            <div>
                {/* 헤더 */}
                {/* 패딩 에 색 추가하기 */}
                <Header />
                <div className="pt-16">
                    <MainSection />
                </div>
                <MemorySection />
                <ShareTodoSection />
                <AlbumSection />
            </div>
        </>
    );
}
