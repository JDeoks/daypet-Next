'use client';

import Image from 'next/image';
import MainSection from '@/components/MainSection/MainSection';
import MainSectionMobile from '@/components/MainSection/MainSectionMobile';

import MemorySection from '@/components/MemorySection';
import ShareTodoSection from '@/components/ShareTodoSection';
import AlbumSection from '@/components/AlbumSection';
import Header from '@/components/Header';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 806px)' });

    return (
        <>
            <div>
                {/* 헤더 */}
                {/* 패딩 에 색 추가하기 */}
                <Header />
                <div className="pt-16">
                    {isMobile ? <MainSectionMobile /> : <MainSection />}
                </div>
                <MemorySection />
                <ShareTodoSection />
                <AlbumSection />
            </div>
        </>
    );
}
