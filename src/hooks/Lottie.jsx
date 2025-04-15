import React, { lazy, Suspense } from 'react';

const DotLottieReact = lazy(() => import('@lottiefiles/dotlottie-react'));

const LazyLottie = ({ src }) => (
    <Suspense fallback={<div>Loading...</div>}>
        <DotLottieReact src={src} loop autoplay />
    </Suspense>
);

export default LazyLottie;