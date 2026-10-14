import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal() {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.12 },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
}
