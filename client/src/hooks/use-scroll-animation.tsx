import { useEffect, useRef } from 'react';

type ScrollAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once]);

  return ref;
}

export function useStaggeredScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions & {
    childClassName?: string;
    delay?: number;
  } = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    childClassName = '.stagger-fade-element',
    delay = 150,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(childClassName);
    if (!children.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add transition delay to each child
            Array.from(children).forEach((child, index) => {
              (child as HTMLElement).style.transitionDelay = `${index * delay}ms`;
              setTimeout(() => {
                child.classList.add('visible');
              }, 50); // Small timeout to ensure the delay is applied
            });

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            Array.from(children).forEach((child) => {
              child.classList.remove('visible');
              (child as HTMLElement).style.transitionDelay = '0ms';
            });
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [threshold, rootMargin, once, childClassName, delay]);

  return ref;
}