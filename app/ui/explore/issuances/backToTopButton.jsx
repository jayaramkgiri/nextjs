'use client'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react"

export default function BackToTopButton() {

    const [showTop, setShowTop] = useState(false);
    const [showBottom, setShowBottom] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowTop(true);
            } else {
                setShowTop(false);
            }
        });
        window.addEventListener('scroll', () => {
            if (window.scrollY < Math.round((document.documentElement.scrollHeight - 2000))) {
                setShowBottom(true);
            } else {
                setShowBottom(false);
            }
        });
    });

    const jumpToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const jumpToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    }

    return (
        <section className="flex flex-col gap-2">
            {
                showTop && (
                <div className="fixed bottom-[36px] right-0 mb-6 mr-6 z-10">
                    <button onClick={jumpToTop} className="bg-indianred text-white rounded-full p-2 transition">
                    <FaArrowUp />
                    </button>
                </div>) 
            }
            {
                showBottom && (
                    <div className="fixed bottom-0 right-0 mb-6 mr-6 z-10">
                        <button onClick={jumpToBottom} className="bg-indianred text-white rounded-full p-2 transition">
                            <FaArrowDown />
                        </button>
                    </div>) 
            }
        </section>
    )
}