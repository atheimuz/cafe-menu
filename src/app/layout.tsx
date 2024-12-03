import { Analytics } from "@vercel/analytics/react";
import QueryProvider from "@/components/QueryProvider";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata = {
    title: "카페 칼로리 - 프랜차이즈 음료 영양 정보",
    description:
        "카페 칼로리는 다양한 프랜차이즈 카페 음료의 칼로리 및 영양 성분 정보를 제공합니다. 건강한 음료 선택을 도와드립니다."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="keywords"
                    content="카페 칼로리, 음료 영양 정보, 프랜차이즈 음료 칼로리, 카페 음료 영양 성분, 건강 음료 정보"
                />
                <meta property="og:title" content="카페 칼로리 - 프랜차이즈 음료 영양 정보" />
                <meta
                    property="og:description"
                    content="다양한 프랜차이즈 카페 음료의 칼로리와 영양 성분을 확인하세요. 건강한 음료 선택을 도와드립니다."
                />
                <meta
                    name="google-site-verification"
                    content="au0oJuD7OKJYQL8NoVj3_yxeHO6EC_3cs_7HnTtHWLc"
                />
                <meta
                    name="naver-site-verification"
                    content="57156b37130fe1ffc9fef28a44b6890435ac5dc0"
                />
            </head>
            <body>
                <QueryProvider>{children}</QueryProvider>
                <Analytics />
            </body>
        </html>
    );
}
