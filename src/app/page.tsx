'use client';

import Image from 'next/image';
import MainSection from '@/components/MainSection/MainSection';
import MainSectionMobile from '@/components/MainSection/MainSectionMobile';

import MemorySection from '@/components/MemorySection/MemorySection';
import MemorySectionMobile from '@/components/MemorySection/MemorySectionMobile';

import ShareTodoSection from '@/components/ShareTodoSection/ShareTodoSection';
import ShareTodoSectionMobile from '@/components/ShareTodoSection/ShareTodoSectionMobile';
import AlbumSection from '@/components/AlbumSection';
import Header from '@/components/Header';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 806px)' });

    return (
        <>
            <div>
                {/* 헤더 */}
                <Header />
                <div className="bg-buttonShape">
                    <div className="pt-16">
                        {isMobile ? <MainSectionMobile /> : <MainSection />}
                    </div>
                </div>
                {isMobile ? <MemorySectionMobile /> : <MemorySection />}
                {isMobile ? <ShareTodoSectionMobile /> : <ShareTodoSection />}
                <AlbumSection />
            </div>
        </>
    );
}
